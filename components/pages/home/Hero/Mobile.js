import {
  BackgroundImage,
  Badge,
  Image,
  MediaQuery,
  Progress,
  Text,
} from "@mantine/core";
import { Carousel, Embla } from "@mantine/carousel";
import { useCallback, useEffect, useState } from "react";
import data from "./data.json";

function Mobile() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [embla, setEmbla] = useState(null);

  const handleScroll = useCallback(() => {
    if (!embla) return;
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
    setScrollProgress((progress + 0.1) * 100);
  }, [embla, setScrollProgress]);

  useEffect(() => {
    if (embla) {
      embla.on("scroll", handleScroll);
      handleScroll();
    }
  }, [embla]);

  return (
    <MediaQuery largerThan="xl" styles={{ display: "none" }}>
      <div>
        <Carousel
          slideSize={310}
          height={200}
          align="start"
          withControls={false}
          getEmblaApi={setEmbla}
          classNames={{ indicator: "bg-white" }}
        >
          {data?.slides.map((slide) => (
            <Carousel.Slide key={slide.id}>
              <div className="w-[310px] h-[200px] pl-4">
                <BackgroundImage
                  src={slide.image}
                  className="flex flex-col justify-end w-full h-full p-4 space-y-2 rounded-xl"
                >
                  <Badge
                    variant="filled"
                    className="rounded-md w-fit bg-greenHill"
                  >
                    NEW
                  </Badge>
                  <Text span className="text-white text-b2">
                    {slide.title}
                  </Text>
                  <Text span className="text-white text-p2">
                    {slide.description}
                  </Text>
                </BackgroundImage>
              </div>
            </Carousel.Slide>
          ))}
        </Carousel>
        <Progress
          value={scrollProgress}
          classNames={{ root: "mx-4 mt-4", bar: "duration-[0ms] bg-redOrange" }}
          size="sm"
        />
      </div>
    </MediaQuery>
  );
}

export default Mobile;
