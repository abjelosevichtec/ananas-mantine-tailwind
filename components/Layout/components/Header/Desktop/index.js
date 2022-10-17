import {
  ActionIcon,
  Button,
  Divider,
  Group,
  Indicator,
  MediaQuery,
  Menu,
  useMantineTheme,
} from "@mantine/core";

import Logo from "components/assets/icons/Logo";
import Search from "../Search";
import Telephone from "components/assets/icons/Telephone";
import Envelope from "components/assets/icons/Envelope";
import ArrowDown from "components/assets/icons/ArrowDown";
import WishList from "components/assets/icons/WishList";
import File from "components/assets/icons/File";
import PersonCircle from "components/assets/icons/PersonCircle";
import Cart from "components/assets/icons/Cart";
import LanguageMenu from "./LanguageMenu";
import BottomBar from "./BottomBar";

function Desktop() {
  const theme = useMantineTheme();

  return (
    <MediaQuery smallerThan="xl" styles={{ display: "none" }}>
      <div className="bg-ghostBlue">
        <Divider color="redOrange" size={10} />
        <div className="px-10 py-4 space-y-6">
          <Group position="apart">
            <div className="flex items-center space-x-5">
              <div>
                <Logo />
              </div>
              <Search />
            </div>
            <Group className="items-center">
              <Button
                className="p-0 text-b5 text-eerieBlack hover:bg-transparent"
                variant="subtle"
                leftIcon={<Telephone />}
              >
                0800 000 111
              </Button>
              <Divider
                className="h-5 m-auto"
                color="foggyBlue"
                orientation="vertical"
              />
              <ActionIcon className="hover:bg-transparent">
                <Envelope />
              </ActionIcon>
              <Divider
                className="h-5 m-auto"
                color="foggyBlue"
                orientation="vertical"
              />
              <Group spacing={10}>
                <LanguageMenu />
                <ActionIcon
                  className="bg-white rounded-lg"
                  size="lg"
                  color="white"
                >
                  <WishList />
                </ActionIcon>
                <ActionIcon
                  className="bg-white rounded-lg"
                  size="lg"
                  color="white"
                >
                  <File />
                </ActionIcon>
                <Button
                  className="pl-2 bg-white rounded-lg text-eerieBlack"
                  color="white"
                  leftIcon={
                    <PersonCircle color={theme.other.color("eerieBlack")} />
                  }
                >
                  Sign in/Log in
                </Button>

                <ActionIcon
                  className="rounded-lg bg-redOrange hover:bg-redOrange"
                  size="lg"
                  variant="transparent"
                >
                  <Indicator
                    classNames={{
                      indicator:
                        "bg-transparent bg-message bg-no-repeat text-bold pointer-events-none -top-[8px] -right-[10px]",
                    }}
                    label={23}
                    radius="sm"
                    size={22}
                  >
                    <Cart />
                  </Indicator>
                </ActionIcon>
              </Group>
            </Group>
          </Group>
          <BottomBar />
        </div>
      </div>
    </MediaQuery>
  );
}

export default Desktop;
