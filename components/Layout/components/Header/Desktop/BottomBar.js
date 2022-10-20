import { Badge, Button, Divider, Group } from "@mantine/core";
import A from "components/assets/icons/A";
import ALux from "components/assets/icons/ALux";
import APlus from "components/assets/icons/APlus";
import ArrowDown from "components/assets/icons/ArrowDown";
import Tag from "components/assets/icons/Tag";
import Categories from "./Categories";

function BottomBar() {
  return (
    <Group position="apart">
      <Group spacing={16}>
        <Categories />
        <Badge
          className="h-10 rounded-full text-b5 text-deepBlue bg-foggyBlue"
          variant="filled"
          color="foggyBlue"
          size="xl"
        >
          BRANDS
        </Badge>
        <Badge
          className="h-10 rounded-full text-b5 text-deepBlue bg-foggyBlue"
          variant="filled"
          color="foggyBlue"
          size="xl"
        >
          BESTSELLERS
        </Badge>
        <Badge
          className="h-10 rounded-full text-b5 text-deepBlue bg-foggyBlue"
          variant="filled"
          color="foggyBlue"
          size="xl"
        >
          GARDEN
        </Badge>
        <Badge
          className="h-10 px-7"
          variant="filled"
          color="eerieBlack"
          size="xl"
        >
          <ALux />
        </Badge>
        <Badge
          className="h-10 rounded-full text-b5 text-deepBlue bg-foggyBlue"
          variant="filled"
          color="foggyBlue"
          size="xl"
        >
          NEW RELEASES
        </Badge>
        <Badge
          className="h-10 rounded-full text-b5 text-deepBlue bg-foggyBlue"
          variant="filled"
          color="foggyBlue"
          size="xl"
        >
          SUMMER BOOKS
        </Badge>
        <Badge
          className="h-10 rounded-full text-b5 text-deepBlue bg-foggyBlue"
          variant="filled"
          color="foggyBlue"
          size="xl"
        >
          HOME & KITCHEN
        </Badge>
        <Badge
          className="h-10 text-white text-b5"
          variant="filled"
          color="redOrange"
          size="xl"
          leftSection={<Tag color="white" />}
        >
          OFFERS
        </Badge>
      </Group>
      <Group spacing={10}>
        <Button
          variant="subtle"
          className="px-0 text-eerieBlack hover:bg-transparent"
        >
          Partneri
        </Button>
        <Divider
          className="h-5 m-auto"
          color="foggyBlue"
          orientation="vertical"
        />
        <Button
          color="white"
          className="bg-white text-eerieBlack"
          leftIcon={<A />}
        >
          Magazin
        </Button>
        <Button
          color="white"
          className="bg-white text-eerieBlack"
          leftIcon={<APlus />}
        >
          Ananas klub
        </Button>
      </Group>
    </Group>
  );
}

export default BottomBar;
