import { Carousel, Embla } from "@mantine/carousel";
import { BackgroundImage, Badge, Button, Progress, Text } from "@mantine/core";
import ArrowRight from "components/assets/icons/ArrowRight";
import AWithLine from "components/assets/icons/AWithLine";
import Truck from "components/assets/icons/Truck";
import { useCallback, useEffect, useState } from "react";
import data from "./data.json";

function Aces() {
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
    <div className="py-6 mt-4 mb-6 space-y-4 bg-white xl:container xl:rounded-md xl:mt-9">
      <div className="flex items-center justify-between px-4 xl:px-8">
        <h3 className="text-b2 text-redOrange">Ananas aces</h3>
        <Button
          classNames={{
            root: "text-deepBlue text-b4",
            rightIcon: "text-eerieBlack [&_svg]:fill-current",
          }}
          compact
          uppercase
          variant="subtle"
          color="white"
          rightIcon={<ArrowRight />}
        >
          All
        </Button>
      </div>
      <div>
        <Carousel
          slideSize={158}
          height="auto"
          align="start"
          withControls={true}
          getEmblaApi={setEmbla}
          controlSize={42}
          controlsOffset={0}
          previousControlIcon={
            <div className="rotate-180">
              <ArrowRight />
            </div>
          }
          nextControlIcon={<ArrowRight />}
          classNames={{
            indicator: "bg-white",
            controls: "hidden xl:flex",
            control:
              "bg-paleBlue opacity-50 text-eerieBlack [&_svg]:fill-current relative first:-left-[21px] last:-right-[21px]",
          }}
          breakpoints={[{ minWidth: "xl", slideSize: 200 }]}
        >
          {data?.items.map((slide) => (
            <Carousel.Slide key={slide.id} className="xl:first:pl-4">
              <div className="pl-4 space-y-2 xl:pl-4">
                <div className="w-[158px] h-[165px] xl:w-[200px] xl:h-[210px]">
                  <BackgroundImage
                    src={slide.image}
                    className="relative w-full h-full rounded-md"
                  >
                    <Badge
                      variant="filled"
                      className="absolute rounded-md top-1 left-1 w-fit bg-red"
                    >
                      -50%
                    </Badge>
                    <Badge
                      variant="filled"
                      className="absolute rounded-md bottom-1 right-1 w-fit bg-greenHill"
                    >
                      NEW
                    </Badge>
                  </BackgroundImage>
                </div>
                <Text className="text-deepBlue text-p1">{slide.title}</Text>
                <div>
                  <Text className="line-through text-red text-b5">
                    {slide.price.original}
                  </Text>
                  <Text className="inline text-eerieBlack text-b4">{`${
                    slide.price.current.split(",")[0]
                  },`}</Text>
                  <Text
                    component="sup"
                    className="inline text-eerieBlack text-b7"
                  >{`${slide.price.current.split(",")[1]} `}</Text>
                  <Text className="inline text-eerieBlack text-b4">
                    {slide.currency}
                  </Text>
                </div>
                <div className="flex flex-col space-y-2">
                  {slide.free_shipping && (
                    <Badge
                      variant="filled"
                      color="acidGreen"
                      className="rounded-md text-militaryGreen text-b7 w-fit [&_svg]:mr-0.5"
                      leftSection={<Truck />}
                    >
                      BESPLATNA DOSTAVA
                    </Badge>
                  )}
                  <Badge
                    variant="filled"
                    color="brightSun"
                    className="normal-case rounded-md text-eerieBlack text-b6 w-fit"
                    leftSection={<AWithLine />}
                  >
                    direkt
                  </Badge>
                </div>
              </div>
            </Carousel.Slide>
          ))}
        </Carousel>
        <Progress
          value={scrollProgress}
          classNames={{
            root: "mx-4 mt-4 xl:hidden",
            bar: "duration-[0ms] bg-redOrange",
          }}
          size="sm"
        />
      </div>
    </div>
  );
}

export default Aces;
