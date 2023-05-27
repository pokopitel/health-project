import {
  Box,
  Flex,
  Grid,
  GridItem,
  HStack,
  Icon,
  IconButton,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Menu } from "./Menu";
import { FC, ReactElement } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { SideBar } from "../components/icons/SideBar";

type LayoutProps = {
  isSidePanel?: boolean;
  children: ReactElement;
};

const menuWidth = 100;
const sidePanelWidth = 440;

export const Layout: FC<LayoutProps> = ({ isSidePanel = false, children }) => {
  return (
    <Grid
      minH="100vh"
      h="100vh"
      bg="white"
      templateColumns={`100px calc(100% - ${
        menuWidth + sidePanelWidth
      }px) auto`}
      gap={6}
    >
      <Menu />

      <GridItem as={VStack} w="full" pl={3}>
        <HStack justify="space-between" w="full">
          <Text color="purple.900" fontSize="4xl" fontWeight="semibold">
            Hello, Abigail, welcome back!
          </Text>

          <Icon as={BsPersonCircle} color="purple.700" boxSize={9} />
        </HStack>

        {children}
      </GridItem>

      <SideBar />
    </Grid>
  );
};
