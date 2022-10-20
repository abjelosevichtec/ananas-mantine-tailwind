import { BackgroundImage, Badge, Image, MediaQuery, Text } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import data from "./data.json";
import ArrowRight from "components/assets/icons/ArrowRight";

function Desktop() {
  return (
    <MediaQuery smallerThan="xl" styles={{ display: "none" }}>
      <div className="xl:container">
        <div className="flex gap-4">
          <Carousel
            width="auto"
            height={400}
            align="start"
            withControls
            withIndicators
            slideGap={16}
            loop
            controlSize={42}
            controlsOffset={0}
            previousControlIcon={
              <div className="rotate-180">
                <ArrowRight />
              </div>
            }
            nextControlIcon={<ArrowRight />}
            classNames={{
              control:
                "bg-paleBlue opacity-100 text-eerieBlack [&_svg]:fill-current relative first:-left-[21px] last:-right-[21px]",
              indicators: "-bottom-[22px]",
              indicator:
                "bg-eerieBlue opacity-100 is-active:bg-redOrange w-1.5 h-1.5 is-active:w-6 transition-all duration-200",
            }}
          >
            {data?.slides.slice(0, data.slides.length - 2).map((slide) => (
              <Carousel.Slide key={slide.id}>
                <div className="overflow-hidden rounded-xl">
                  <Image
                    width="100%"
                    height={400}
                    alt="slide"
                    src={slide.image}
                  />
                </div>
              </Carousel.Slide>
            ))}
          </Carousel>
          <div className="flex flex-col gap-4">
            {data?.slides.slice(data.slides.length - 2).map((slide) => (
              <div key={slide.id} className="w-[307px] h-[192px]">
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
            ))}
          </div>
        </div>
      </div>
    </MediaQuery>
  );
}

export default Desktop;
