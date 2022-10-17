import {
  Text,
  Badge,
  Group,
  NavLink,
  Stack,
  useMantineTheme,
} from "@mantine/core";

import File from "components/assets/icons/File";
import PersonCircle from "components/assets/icons/PersonCircle";
import Tag from "components/assets/icons/Tag";
import GeoPin from "components/assets/icons/GeoPin";
import CreditCard from "components/assets/icons/CreditCard";
import WishList from "components/assets/icons/WishList";
import Categories from "./Categories";

function TopSection() {
  const theme = useMantineTheme();

  return (
    <Stack spacing={0}>
      <Categories />
      <NavLink
        classNames={{ root: "pl-6", icon: "mr-4" }}
        label={<Text className="text-b6">Orders & Returns</Text>}
        icon={<File />}
      />
      <NavLink
        classNames={{ root: "pl-6", icon: "mr-4" }}
        label={<Text className="text-b6">My Account</Text>}
        icon={<PersonCircle color={theme.black} />}
      />
      <NavLink
        classNames={{ root: "pl-6", icon: "mr-4" }}
        label={<Text className="text-b6">My Coupons</Text>}
        icon={<Tag />}
      />
      <NavLink
        classNames={{ root: "pl-6", icon: "mr-4" }}
        label={<Text className="text-b6">My Addresses</Text>}
        icon={<GeoPin />}
      />
      <NavLink
        classNames={{ root: "pl-6", icon: "mr-4" }}
        label={<Text className="text-b6">My Payment methods</Text>}
        icon={<CreditCard />}
      />
      <NavLink
        classNames={{ root: "pl-6", icon: "mr-4" }}
        label={
          <Group>
            <Text className="text-b6">Lista želja</Text>
            <Badge color="eerieBlack" variant="filled" size="sm" radius="sm">
              0
            </Badge>
          </Group>
        }
        icon={<WishList />}
      />
    </Stack>
  );
}

export default TopSection;
