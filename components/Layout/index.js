import { AppShell, Text } from "@mantine/core";

import Header from "./components/Header";

export default function Layout({ BeforeContent = null, children }) {
  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      header={<Header />}
      classNames={{ main: "pt-34 px-0 bg-ghostBlue text-white" }}
    >
      {BeforeContent && <BeforeContent />}
      <div className="px-5">{children}</div>
    </AppShell>
  );
}
