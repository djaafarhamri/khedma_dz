import { Grid, GridItem, Flex, Center } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Grid templateColumns="1.5fr repeat(2, 1fr)" gap={0}>
        <GridItem w="100%" h="100vh">
          <Flex h='100%'>
            <Center w='100%'>
              <Heading>Sign up</Heading>
            </Center>
          </Flex>
        </GridItem>
        <GridItem w="100%" h="100vh" bg="purple.500" />
        <GridItem w="100%" h="100vh" bg="purple.500" />
      </Grid>
    </div>
  );
}

export default App;
