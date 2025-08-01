import { useEffect, useState } from "react";

export type TechCategory = {
  category: string;
  techs: string[];
  color: string;
};

export type TechStackData = {
  title: string;
  description: string;
  categories: TechCategory[];
  cta: {
    title: string;
    description: string;
    button: { text: string; link: string };
  };
};

export function useTechStackData() {
  const [data, setData] = useState<TechStackData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/techstack")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch tech stack data");
        return res.json();
      })
      .then((json: TechStackData) => {
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
