import {
  Flex,
  VStack,
  IconButton,
  Icon,
  Text,
  Stack,
  GridItem,
} from "@chakra-ui/react";
import { BsCalendar2CheckFill, BsFillPeopleFill } from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";

import { Logo } from "../../components/icons";

const items = [
  { id: 1, title: "Check-in", icon: BsCalendar2CheckFill },
  { id: 2, title: "Insighs", icon: IoStatsChart },
  { id: 3, title: "Community", icon: BsFillPeopleFill },
];

const logoHeight = 56;

export const Menu = () => (
  <GridItem
    as={Flex}
    flexDir="column"
    minH="100vh"
    h="100vh"
    align="center"
    w={100}
    bg="gray.50"
  >
    <Logo color="purple.700" boxSize={14} />

    <VStack
      spacing={10}
      minH={`calc(100vh - ${logoHeight}px)`}
      justify="center"
    >
      {items.map((item) => (
        <Stack key={item.id} spacing={0}>
          <IconButton
            variant="unstyled"
            aria-label={item.title}
            _hover={{ "*": { color: "purple.500" } }}
            _active={{ "*": { color: "purple.400" } }}
            icon={
              <>
                <Icon
                  as={item.icon}
                  boxSize={8}
                  color="purple.700"
                  transition="all .3s"
                />
                <Text color="purple.700" transition="all .3s">
                  {item.title}
                </Text>
              </>
            }
          />
        </Stack>
      ))}
    </VStack>
  </GridItem>
);
