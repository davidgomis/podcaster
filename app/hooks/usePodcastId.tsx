import { usePathname } from "next/navigation";

export const usePodcastId = () => {
  const patch = usePathname();

  // Obtener la ruta sin query params
  const pathname = patch.split("?")[0];

  // Dividir la ruta en partes usando '/' como delimitador
  const parts = pathname.split("/");

  // Filtrar las partes vacías en caso de que existan
  const filteredParts = parts.filter((part) => part.length > 0);

  // Obtener el último segmento de la ruta
  const lastSegment = filteredParts[filteredParts.length - 1];

  return lastSegment;
};
