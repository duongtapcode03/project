import { useEffect, useState } from "react";

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string[];
  location: string;
  joinDate: string;
  email: string;
  expertise: string[];
  social: { linkedin?: string; twitter?: string; github?: string };
  experience: {
    title: string;
    company: string;
    period: string;
    description: string;
  }[];
  education: { degree: string; school: string; year: string }[];
};

export type TeamData = {
  overview: {
    title: string;
    subtitle: string;
    cta: {
      headline: string;
      description: string;
      buttons: { label: string; link: string; variant: string }[];
    };
    teamMembers: TeamMember[];
  };
  header: { title: string; description: string };
  cta: {
    title: string;
    description: string;
    primaryAction: string;
    secondaryAction: string;
    contactLink: string;
  };
};

export function useTeamData() {
  const [data, setData] = useState<TeamData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/team")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch team data");
        return res.json();
      })
      .then((json: TeamData) => {
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
