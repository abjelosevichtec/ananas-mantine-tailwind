import { Stack } from "@mantine/core";

import TopSection from "./TopSection";
import BottomSection from "./BottomSection";

function Content() {
  return (
    <Stack
      className="px-0 pt-4 pb-6 h-[calc(100%-var(--mantine-header-height))]"
      justify="space-between"
    >
      <TopSection />
      <BottomSection />
    </Stack>
  );
}

export default Content;
