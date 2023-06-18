import Layout from "../Layout/Layout";
import { Box, Typography } from "@mui/material";
import { useObserver } from "../hooks/useObserver";
import { useEffect } from "react";

const LazyImages = () => {
  const placeholder = "https://via.placeholder.com/300x300.png?text=300x300";
  const imagesUrl: string[] = [
    "https://www.motocrosscenter.com/shop/blog/wp-content/uploads/2018/09/blog1.jpg",
    "https://img.redbull.com/images/c_crop,x_0,y_0,h_2133,w_3200/c_fill,w_730,h_487/q_auto,f_auto/redbullcom/2022/5/21/oaxaibw6k6zw6qrcnynq/manuel-lettenbichler-xross-hard-enduro-rally-2022",
    "https://i0.wp.com/www.redd.es/wp-content/uploads/2021/01/Enduro_vs_Motocross.jpg?resize=1080%2C720",
    "https://s7g10.scene7.com/is/image/ktm/HQV-Enduro-MY24-header-segmentpage:Desktop?wid=1914&hei=1074&dpr=off",
  ];

  const { observer, setElements, entries } = useObserver({
    threshold: 0.35,
    root: null,
  });

  useEffect(() => {
    const images = document.querySelectorAll("img");
    setElements(Array.from(images));
  }, [setElements]);

  useEffect(() => {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) {
        const lazyImage = entry.target;
        lazyImage.src = lazyImage.dataset.src;
        lazyImage.classList.remove("lazy");
        observer.unobserve(lazyImage);
      }
    });
  }, [entries, observer]);

  return (
    <Layout>
      <Typography variant="h5" className="title-page">
        Lazy images with Intersection Observer Api
      </Typography>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap={5}
        marginTop={5}
      >
        {imagesUrl.map((source: string) => (
          <img
            key={source}
            data-src={source}
            alt="motocross"
            style={{ width: "50%", height: "auto" }}
            src={placeholder}
          />
        ))}
      </Box>
    </Layout>
  );
};

export default LazyImages;
