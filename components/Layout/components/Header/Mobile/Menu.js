import { Affix, CloseButton, Group, Transition } from "@mantine/core";
import { useAtom } from "jotai";
import { HEADER_HEIGHT } from "consts.json";

import { headerOpened } from "../../../state";

import Logo from "components/assets/icons/Logo";

import Content from "./Content";

const TRANSITION = {
  in: { opacity: 1, transform: "translateY(0)" },
  out: { opacity: 0, transform: "translateY(-100%)" },
  common: { transformOrigin: "top" },
  transitionProperty: "transform, opacity",
};

function Menu() {
  const [isOpened, setIsOpened] = useAtom(headerOpened);

  return (
    <Transition mounted={isOpened} transition="slide-down" duration={400}>
      {(styles) => (
        <Affix
          style={styles}
          className="inset-0 h-full overflow-scroll text-white bg-ghostBlue"
        >
          <Group
            position="apart"
            className="p-4 h-[var(--mantine-header-height)]"
          >
            <Logo />
            <CloseButton
              onClick={() => setIsOpened(false)}
              size="md"
              iconSize={30}
              variant="transparent"
              color="redOrange"
              className="[&>svg]:stroke-[0.5] [&>svg]:stroke-current"
            />
          </Group>
          <Content />
        </Affix>
      )}
    </Transition>
  );
}

export default Menu;
