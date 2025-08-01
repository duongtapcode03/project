import { useEffect, useState } from "react";

// Định nghĩa type cho dữ liệu About
export type AboutFeature = {
  icon: string;
  title: string;
  description: string;
};

export type AboutValue = {
  icon: string;
  title: string;
  description: string;
};

export type AboutMilestone = {
  year: string;
  event: string;
  description: string;
};

export type AboutStat = {
  value: string;
  label: string;
};

export type AboutCTA = {
  title: string;
  description: string;
  button: { text: string; link: string };
};

export type About = {
  header: {
    title: string;
    description: string;
  };
  story: string[];
  features: AboutFeature[];
  values: AboutValue[];
  milestones: AboutMilestone[];
  stats: AboutStat[];
  cta: AboutCTA;
};

export function useAboutData() {
  const [data, setData] = useState<About | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/about")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch data");
        return res.json();
      })
      .then((json: About) => {
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
