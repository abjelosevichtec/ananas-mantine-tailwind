import {
  Header,
  Burger,
  MediaQuery,
  Text,
  useMantineTheme,
} from "@mantine/core";

import consts from "consts.json";

import Mobile from "./Mobile";
import Desktop from "./Desktop";

function HeaderComponent() {
  return (
    <Header height={consts.HEADER_HEIGHT} className="border-0">
      <Mobile />
      <Desktop />
    </Header>
  );
}

export default HeaderComponent;
