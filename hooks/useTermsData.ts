import { useState, useEffect } from "react";

export interface TermsSection {
  icon: string;
  title: string;
  content: string[];
}

export interface TermsPageData {
  lastUpdated: string;
  header: {
    title: string;
    description: string;
  };
  intro: {
    title: string;
    content: string;
  };
  sections: TermsSection[];
  contact: {
    title: string;
    description: string;
    contactLink: string;
    privacyLink: string;
  };
}

export function useTermsData() {
  const [data, setData] = useState<TermsPageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/terms")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch terms data");
        return res.json();
      })
      .then((json: TermsPageData) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { data, loading, error };
}
