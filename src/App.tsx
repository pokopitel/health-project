import { ChakraProvider, Text } from "@chakra-ui/react";
import { Layout } from "./Layout";
import { theme } from "./theme";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Layout isSidePanel>
      <Text color="black">Hello, I'm a Children</Text>
    </Layout>
  </ChakraProvider>
);
