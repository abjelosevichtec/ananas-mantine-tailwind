import { Button, Menu, Overlay, Transition } from "@mantine/core";
import ArrowDown from "components/assets/icons/ArrowDown";
import { useState } from "react";
import { useSetAtom } from "jotai";
import MenuBackgroundOverlay, {
  opened,
} from "components/MenuBackgroundOverlay";

function LanguageMenu() {
  const setIsOverlayOpened = useSetAtom(opened);

  return (
    <>
      <MenuBackgroundOverlay />
      <Menu
        withinPortal={true}
        onChange={(val) => setIsOverlayOpened(val)}
        zIndex={200}
        trigger="hover"
        shadow="md"
        width={200}
        position="bottom-start"
      >
        <Menu.Target>
          <Button
            className="z-[200] bg-white rounded-lg text-eerieBlack text-b5"
            color="white"
            rightIcon={<ArrowDown />}
          >
            Bosnian
          </Button>
        </Menu.Target>
        <Menu.Dropdown className="[&>div]:p-2 [&>div]:space-y-2 rounded-lg">
          <Menu.Item className="text-b5">Bosnian</Menu.Item>
          <Menu.Item className="text-b5">Serbian</Menu.Item>
          <Menu.Item className="text-b5">Macedonian</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  );
}

export default LanguageMenu;
