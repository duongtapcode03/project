import { useEffect, useState } from "react";

export interface HeroButton {
  text: string;
  link: string;
  type: "primary" | "secondary";
}

export interface HeroStat {
  title: string;
  description: string;
}

export interface HeroData {
  title: string[];
  description: string;
  buttons: HeroButton[];
  stats: HeroStat[];
}

export function useHeroData() {
  const [data, setData] = useState<HeroData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/hero")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load hero data");
        return res.json();
      })
      .then((json) => setData(json))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
}
