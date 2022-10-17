import { Badge, Group, MediaQuery, ScrollArea, Space } from "@mantine/core";
import ALux from "components/assets/icons/ALux";
import Tag from "components/assets/icons/Tag";

function MobileTopList() {
  return (
    <MediaQuery largerThan="xl" styles={{ display: "none" }}>
      <ScrollArea style={{ width: "100%" }} offsetScrollbars>
        <Group spacing={16} noWrap>
          <Space />
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
      </ScrollArea>
    </MediaQuery>
  );
}

export default MobileTopList;
