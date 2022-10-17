import { Burger, useMantineTheme } from "@mantine/core";
import { useAtom } from "jotai";

import { headerOpened } from "../../../state";

import Menu from "./Menu";

function BurgerComponent() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useAtom(headerOpened);

  return (
    <>
      <Burger
        classNames={{
          burger:
            "rounded h-1 before:h-1 after:h-1 before:rounded after:rounded before:bg-pistachio before:content-[''] after:content-[''] is-opened:before:bg-white",
        }}
        opened={opened}
        onClick={() => setOpened((o) => !o)}
        color={theme.white}
      />
      <Menu />
    </>
  );
}

export default BurgerComponent;
