import {
  HoverCard,
  Button,
  Text,
  NavLink,
  SimpleGrid,
  Stack,
  Group,
  Badge,
  Card,
  Image,
} from "@mantine/core";
import data from "./data.json";
import { hoveredCat } from "./store";
import { useSetAtom } from "jotai";

import ArrowRight from "components/assets/icons/ArrowRight";
import ChevronRight from "components/assets/icons/ChevronRight";
import Content from "./Content";

function Categories() {
  const setHoveredCat = useSetAtom(hoveredCat);

  return (
    <HoverCard
      position="bottom-start"
      shadow="md"
      onOpen={() => setHoveredCat("FashionOutlet")}
    >
      <HoverCard.Target>
        <Button
          classNames={{
            root: "active:translate-y-0 group shadow-btn-bottom rounded-categories bg-redOrange hover:bg-redOrange",
            rightIcon:
              "group-aria-expanded:rotate-90 transition-all duration-200",
          }}
          rightIcon={<ArrowRight color="white" />}
        >
          Sve kategorije
        </Button>
      </HoverCard.Target>
      <HoverCard.Dropdown className="flex p-0 overflow-hidden rounded-lg">
        <div className="w-[327px] bg-ghostBlue flex-shrink-0">
          {data.items.map((item, index) => (
            <NavLink
              component="button"
              key={index}
              onMouseEnter={() => setHoveredCat(item)}
              classNames={{
                root: "pl-6 py-4 group hover:bg-redOrange hover:text-white",
                rightSection:
                  "mr-4 [&>svg]:text-eerieBlack group-hover:[&>svg]:text-white [&>svg]:stroke-current",
              }}
              label={<Text className="text-b6">{item}</Text>}
              rightSection={<ChevronRight />}
            />
          ))}
        </div>
        <div className="w-[980px] p-9 flex flex-col justify-between">
          <Content />
        </div>
      </HoverCard.Dropdown>
    </HoverCard>
  );
}

export default Categories;
