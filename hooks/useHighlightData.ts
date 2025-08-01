import { useEffect, useState } from "react";

export type HighlightItem = {
  icon: string;
  title: string;
  description: string;
  stats: string;
  color: string;
};

export type HighlightCTA = {
  title: string;
  description: string;
  buttons: { text: string; link: string }[];
};

export type HighlightData = {
  title: string;
  description: string;
  highlights: HighlightItem[];
  cta: HighlightCTA;
};

export function useHighlightData() {
  const [data, setData] = useState<HighlightData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/highlight")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch highlight data");
        return res.json();
      })
      .then((json: HighlightData) => {
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
