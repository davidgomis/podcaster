"use client";
import { useState, useEffect, ReactNode, createContext } from "react";
import { fetchPodcastId } from "../api/podcastId/route";
import { usePodcastId } from "../hooks/usePodcastId";

interface DataContextType {
  data: any[]; // Puedes ajustar el tipo según tus datos reales
  // Otros valores en el contexto, si los hay
}

export const DataContext = createContext<DataContextType | undefined>(
  undefined
);

export const DataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<any[]>([]);
  const podcastId = usePodcastId();

  const fetchData = async () => {
    try {
      const result = await fetchPodcastId(podcastId);
      setData(result || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
};
