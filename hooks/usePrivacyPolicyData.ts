usePrivacyPolicyData// src/hooks/usePrivacyPolicyData.ts
import { useState, useEffect } from "react";

export interface PrivacySection {
  icon: string;
  title: string;
  content: string[];
}

export interface PrivacyPolicyData {
  lastUpdated: string;
  header: {
    title: string;
    subtitle: string;
  };
  introduction: {
    title: string;
    content: string;
  };
  sections: PrivacySection[];
  footer: {
    title: string;
    description: string;
    contactLink: string;
  };
}

export function usePrivacyPolicyData() {
  const [data, setData] = useState<PrivacyPolicyData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

 useEffect(() => {
   fetch("/api/privacy")
     .then((res) => {
       if (!res.ok) throw new Error("Failed to fetch privacy policy data");
       return res.json();
     })
     .then((json: PrivacyPolicyData) => {
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
