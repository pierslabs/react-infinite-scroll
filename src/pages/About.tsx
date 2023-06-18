import { Box, Typography } from "@mui/material";
import Layout from "../Layout/Layout";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const About = () => {
  const codeExample = `
  export const useObserver = (options: { threshold: number; root: null }) => {
    // Este estado almacenará los elementos que se observarán
    const [elements, setElements] = useState<any[]>([]);
  
    // Este estado almacenará las entradas que se observarán
    const [entries, setEntries] = useState<IntersectionObserver[]>([]);
  
    // creamos un observer
    const observer = useRef(
      new IntersectionObserver((observedEntries: any) => {
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
  `;

  return (
    <Layout>
      <Box>
        <Typography variant="h4" className="title-page">
          Intersection Observer API
        </Typography>
        <Typography>
          La API Intersection Observer proporciona una forma de observar de
          manera asíncrona los cambios en la intersección de un elemento
          objetivo con un elemento ancestro o con la ventana de visualización
          del documento. Esta API es útil para detectar la visibilidad de un
          elemento o la visibilidad relativa de dos elementos entre sí.
        </Typography>

        <Typography variant="h5" className="title-page">
          Usos habituales
        </Typography>
        <ul>
          <li>
            Carga en diferido de imágenes u otro contenido a medida que la
            página se desplaza.
          </li>
          <li>
            Implementación del desplazamiento infinito en sitios web, donde más
            y más contenido se carga y muestra a medida que se desplaza la
            página, de forma que el usuario no tiene que pasar páginas.
          </li>
          <li>
            Informes de visualizaciones de anuncios para calcular ingresos por
            publicidad.
          </li>
          <li>
            Decidir si deben realizarse tareas o procesos de animación basados
            en si el usuario verá o no el resultado.
          </li>
        </ul>
        <Typography variant="h5" className="title-page">
          Crear nuestro Custom Hook
        </Typography>
        <Typography>
          La API Intersection Observer le permite configurar una función
          callback que es llamada cuando alguna de las siguientes circunstancias
          ocurren:
        </Typography>
        <ul>
          <li>
            Un elemento target intersecta ya sea al viewport del dispositivo o
            un elemento especificado. Ese elemento especificado es llamado el
            elemento root o root a los propósitos de la API Intersection
            Observer.
          </li>
          <li>
            La primera vez que se pide inicialmente al observador que observe un
            elemento target.
          </li>
        </ul>

        <Typography>
          Utilizamos el hook use-ref para crear nuestro intersection observer y
          lo almacenamos como una referencia, de modoque cada vez que se ejecute
          este hook siempre obtendremos el mismo valor excepto que lo cambiemos
          nosotros mismos, así que tendremos la misma instancia del observer,
          para que cuando lo utilicemos en el hook useEffect no se vuelva a
          crear una nueva instancia del observer y se ejecute de nuevo entrando
          en un bucle infinito.
        </Typography>
        <ul>
          <li>
            La función anónima 'cleanUp' se ejecutará si tenemos una instancia
            del observer actual la desconectamos // La funcion cleanUp se
            ejecutara siempre antes del siguiente efecto, ejemplo: // si tenemos
            dos useEffect, en el segundo render se ejecutaria el cleanUp del
            primer efecto y luego el segundo efecto // y siempre que se desmonte
            el componente se ejecutara el cleanUp una ultima vez para nop dejar
            colgados los observadores
          </li>
        </ul>

        <SyntaxHighlighter language="javascript" style={atomDark}>
          {codeExample}
        </SyntaxHighlighter>
      </Box>
    </Layout>
  );
};

export default About;
