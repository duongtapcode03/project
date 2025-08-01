import { useEffect, useState } from "react";

export type Vision = {
  icon: string;
  number: string;
  text: string;
  color: string;
};

export type VisionHighlightCard = {
  icon: string;
  title: string;
  description: string;
  stats: { value: string; label: string }[];
};

export type VisionData = {
  title: string;
  description: string;
  visions: Vision[];
  highlightCard: VisionHighlightCard;
};

export function useVisionData() {
  const [data, setData] = useState<VisionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/vision")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch vision data");
        return res.json();
      })
      .then((json: VisionData) => {
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
