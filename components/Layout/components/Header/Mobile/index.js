import {
  ActionIcon,
  Group,
  Indicator,
  MediaQuery,
  useMantineTheme,
} from "@mantine/core";

import Burger from "./Burger";
import Search from "../Search";

import LogoWhite from "components/assets/icons/LogoWhite";
import PersonCircle from "components/assets/icons/PersonCircle";
import Cart from "components/assets/icons/Cart";

function Mobile() {
  return (
    <MediaQuery largerThan="xl" styles={{ display: "none" }}>
      <Group className="relative items-start justify-between h-full p-4 text-white bg-redOrange">
        <LogoWhite />
        <Group spacing="lg">
          <ActionIcon variant="transparent">
            <PersonCircle />
          </ActionIcon>
          <ActionIcon variant="transparent" className="mr-2.5">
            <Indicator
              classNames={{
                indicator:
                  "bg-message bg-no-repeat text-bold pointer-events-none -top-[5px] -right-[13px]",
              }}
              label={24}
              radius="sm"
              size={22}
            >
              <Cart />
            </Indicator>
          </ActionIcon>
          <Burger />
        </Group>
        <Search />
      </Group>
    </MediaQuery>
  );
}

export default Mobile;
