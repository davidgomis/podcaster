"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

interface PodcastContextProps {
  data: any[];
  filteredData: any | null;
  setData: (data: any[]) => void;
  filterById: (id: string) => void;
  setFilteredData: (data: any | null) => void;
}

const PodcastContext = createContext<PodcastContextProps | undefined>(
  undefined
);

export const PodcastProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState<any | null>(null);

  const filterById = (id: string) => {
    console.log("data que filtro", data);
    const filtered = data.find((item) => item.id.attributes["im:id"] === id);
    setFilteredData(filtered);
  };

  return (
    <PodcastContext.Provider
      value={{ data, filteredData, setData, filterById, setFilteredData }}
    >
      {children}
    </PodcastContext.Provider>
  );
};

export const usePodcastContext = (): PodcastContextProps => {
  const context = useContext(PodcastContext);
  if (!context) {
    throw new Error("useDataContext must be used within a DataProvider");
  }
  return context;
};
