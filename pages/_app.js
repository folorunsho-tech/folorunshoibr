import Layout from "../components/layout";
import { MantineProvider, ColorSchemeProvider } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";

import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  const [colorScheme, setColorScheme] = useLocalStorage({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme,
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default MyApp;
