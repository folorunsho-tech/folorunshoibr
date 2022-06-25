import NavBar from "./NavBar";
import Footer from "./footer";
import { AppShell } from "@mantine/core";

const Layout = ({ children }) => {
  return (
    <AppShell
      header={<NavBar />}
      footer={<Footer />}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      {children}
    </AppShell>
  );
};

export default Layout;
