import { useEffect, useState } from "react";

interface SencaCategory {
  _id: string;
  name: string;
  category_name: string;
  image?: string;
};

export function useSencaCategory(): [SencaCategory[],boolean] {
  const [sencaCategory, setSencaCategory] = useState<SencaCategory[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('https://sensa-server.vercel.app/senca-health')
      .then(res => res.json())
      .then((data: SencaCategory[]) => {
        setSencaCategory(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching Senca data:', error);
        setLoading(false);
      });
  }, []);

  return [sencaCategory, loading];
}
