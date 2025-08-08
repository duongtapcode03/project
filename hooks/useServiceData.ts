import { useEffect, useState } from "react";

export type CTAButton = {
  label: string;
  href: string;
  primary: boolean;
};

export type ServiceItem = {
  icon: string;
  title: string;
  description: string;
  features?: string[];
  link?: string;
  active?: boolean;
};

export type ServiceDetailItem = {
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  pricing: string;
  timeline: string;
  link: string;
  active?:boolean;
};

export type OutsourcingModel = {
  title: string;
  description: string;
  features: string[];
  pricing: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type SuccessStat = {
  value: string;
  label: string;
  color: string;
};

export type ServiceData = {
  servicesData: {
    heading: { title: string; subtitle: string };
    services: ServiceItem[];
    additionalServices: { icon: string; title: string; description: string }[];
    cta: { title: string; subtitle: string; buttons: CTAButton[] };
  };
  servicesDetailData: {
    heading: { title: string; subtitle: string };
    services: ServiceDetailItem[];
    cta: { title: string; subtitle: string; buttons: CTAButton[] };
  };
  outsourcingData: {
    heading: { title: string; subtitle: string };
    benefits: string[];
    models: OutsourcingModel[];
    process: ProcessStep[];
    cta: { title: string; subtitle: string; buttons: CTAButton[] };
  };
  insourcingData: {
    heading: { title: string; subtitle: string };
    benefits: string[];
    services: ServiceItem[];
    process: ProcessStep[];
    success: SuccessStat[];
    cta: { title: string; subtitle: string; buttons: CTAButton[] };
  };
};

export function useServiceData() {
  const [data, setData] = useState<ServiceData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/service")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch service data");
        return res.json();
      })
      .then((json: ServiceData) => {
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
