import { Container, Center } from "@chakra-ui/react";
import CreditCardValidator from "./CreditCardValidator";

function App() {
  return (
    <Container maxW="md" height="100vh">
      <Center height="100%">
        <CreditCardValidator />
      </Center>
    </Container>
  );
}

export default App;
