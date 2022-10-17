import { Overlay, Transition } from "@mantine/core";
import { opened } from "./store";
import { useAtomValue } from "jotai";

export { opened };

function MenuOvertlay() {
  const isOpened = useAtomValue(opened);

  return (
    <Transition
      mounted={isOpened}
      transition="fade"
      duration={200}
      timingFunction="ease"
    >
      {(styles) => (
        <Overlay
          color="black"
          style={{
            ...styles,
            position: "fixed",
            background: "rgba(0, 0, 0, 0.2)",
          }}
        />
      )}
    </Transition>
  );
}

export default MenuOvertlay;
