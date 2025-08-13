import { useEffect, useState } from "react";

export interface CaseStudy {
  id: number;
  title: string;
  client: string;
  industry: string;
  duration: string;
  teamSize: string;
  image: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  category: string;
}
export type CTA = {
  title: string;
  description: string;
  buttons: { text: string; href: string }[];
};

export interface CaseStudiesData {
  header: { title: string; description: string };
  categories: string[];
  caseStudies: CaseStudy[];
  cta: CTA;
  activeDetails: boolean;
  detailButton: string;
}

export function useCaseStudyData() {
  const [data, setData] = useState<CaseStudiesData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/caseStudy");
        if (!res.ok) throw new Error("Failed to fetch");
        const json = await res.json();
        setData(json);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
}
