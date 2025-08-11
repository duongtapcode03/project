import { useEffect, useState } from "react";

export interface ContactData {
  headerContactDetail: { title: string; description: string };
  headerContactSecTion: { title: string; description: string };
  form: {
    fields: { name: string; placeholder: string; type?: string }[];
    submitButton: { text: string };
    mailto?: string;
  };
  contacts: {
    icon: string;
    title: string;
    info: string;
    description: string;
  }[];
  contactMethods: {
    icon: string;
    title: string;
    primary: string;
    secondary: string;
    description: string;
    action: string;
    href: string;
  }[];
  offices: {
    city: string;
    address: string;
    phone: string;
    hours: string;
    status?: number;
  }[];
  support: {
    title: string;
    description: string;
    button: { text: string; link: string };
  };
  emergency: {
    title: string;
    description: string;
    button: string;
    phone: string;
  };
  contactForm: {
    title: string;
    fields: {
      name: string;
      label: string;
      type: string;
      required?: boolean;
      placeholder: string;
      grid?: string;
      options?: { value: string; label: string }[];
    }[];
    checkbox: { id: string; label: string; required: boolean };
    submitButton: string;
    mailto: string;
  };
}

export function useContactData() {
  const [data, setData] = useState<ContactData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/contact");
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
