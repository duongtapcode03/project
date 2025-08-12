import { useState, useEffect } from "react";

interface Button {
  label: string;
  action: string;
}

interface HeroSection {
  title: string;
  highlight: string;
  description: string;
  buttons: Button[];
}

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

interface CompanyCultureSection {
  title: string;
  description: string;
  benefits: Benefit[];
}

interface PositionDetail {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
}

interface OpenPositionsSection {
  title: string;
  description: string;
  positions: PositionDetail[];
}

interface CtaSection {
  title: string;
  description: string;
  button: Button;
}

export interface CareersData {
  heroSection: HeroSection;
  companyCultureSection: CompanyCultureSection;
  openPositionsSection: OpenPositionsSection;
  ctaSection: CtaSection;
}
export function useCareers() {
  const [data, setData] = useState<CareersData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchCareers() {
      try {
        setLoading(true);
        const res = await fetch("/api/careers");
        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.status}`);
        }
        const json: CareersData = await res.json();
        setData(json);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }

    fetchCareers();
  }, []);

  return { data, loading, error };
}
