import {
  ActionIcon,
  Button,
  Divider,
  Group,
  NavLink,
  Stack,
  Text,
} from "@mantine/core";

import Globus from "components/assets/icons/Globus";
import A from "components/assets/icons/A";
import APlus from "components/assets/icons/APlus";
import Telephone from "components/assets/icons/Telephone";
import Envelope from "components/assets/icons/Envelope";
import Users from "components/assets/icons/Users";

function BottomSection() {
  return (
    <Stack className="px-6 pl-6" spacing="lg">
      <NavLink
        classNames={{ root: "pl-0", icon: "mr-4" }}
        label={<Text className="text-b6">Language</Text>}
        icon={<Globus />}
      />
      <Group spacing={10}>
        <Button
          className="bg-white"
          variant="white"
          color="eerieBlack"
          leftIcon={<A />}
          radius="md"
        >
          Magazin
        </Button>
        <Button
          className="bg-white"
          variant="white"
          color="eerieBlack"
          leftIcon={<APlus />}
          radius="md"
        >
          Ananas klub
        </Button>
      </Group>
      <Divider mt={20} />
      <Group spacing={10}>
        <Button p={0} leftIcon={<Telephone />} variant="subtle">
          <Text className="text-b6" color="eerieBlack">
            0800 000 111
          </Text>
        </Button>
        <Divider orientation="vertical" />
        <ActionIcon>
          <Envelope />
        </ActionIcon>
        <Divider orientation="vertical" />
        <Button p={0} leftIcon={<Users />} variant="subtle">
          <Text className="text-b6" color="eerieBlack">
            Partneri
          </Text>
        </Button>
      </Group>
    </Stack>
  );
}

export default BottomSection;
