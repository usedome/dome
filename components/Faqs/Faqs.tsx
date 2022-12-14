import { Box, Flex, Heading, Container } from "@chakra-ui/react";
import { Accordion } from "..";
import { faqs } from "./faqs";

export const Faqs = () => {
  return (
    <Box
      bg="ivory"
      pt={{ base: 12, md: 4, lg: 8 }}
      pb={{ base: 12, sm: 16, lg: 20 }}
    >
      <Container maxW="1300px" w="90%" margin="0 auto">
        <Flex flexDirection="column" justify="center" align="center">
          <Heading
            color="charlestonGreen"
            fontSize={{ base: "xl", sm: "1.27rem", md: "1.45rem" }}
            textAlign="center"
            mb={5}
            pos="relative"
          >
            Frequently Asked Questions
          </Heading>
          <Box w={{ base: "100%", lg: "80%" }}>
            <Accordion items={faqs} />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
