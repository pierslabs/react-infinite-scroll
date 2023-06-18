import { useEffect, useRef, useState } from "react";

export const useObserver = (options: { threshold: number; root: null }) => {
  // Este estado almacenará los elementos que se observarán
  const [elements, setElements] = useState<HTMLImageElement[]>([]);

  // Este estado almacenará las entradas que se observarán
  const [entries, setEntries] = useState<IntersectionObserverEntry[]>([]);

  // creamos un observer
  const observer = useRef(
    new IntersectionObserver((observedEntries: IntersectionObserverEntry[]) => {
      setEntries(observedEntries);
    }, options)
  );

  // cada vez que se actualice el estado de los elementos nos desconectamos del observer
  // para que pueda observar los nuevos elementos
  useEffect(() => {
    const { current: currentObserver } = observer;
    currentObserver.disconnect();

    // Si la longitud de los elementos es mayor a 0 vamos a observar cada uno de los elementos
    // iterando con un forEach
    if (elements.length > 0) {
      elements.forEach((element) => currentObserver.observe(element));
    }
    // 'cleanUp'
    return () => {
      if (currentObserver) {
        currentObserver.disconnect();
      }
    };
  }, [elements]);

  return { observer: observer.current, setElements, entries };
};
