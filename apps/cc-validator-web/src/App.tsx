import { Container, Center } from "@chakra-ui/react";
import CreditCardValidator from "./CreditCardValidator";

export default function App() {
  return (
    <Container maxW="md" height="100vh">
      <Center height="100%">
        <CreditCardValidator />
      </Center>
    </Container>
  );
}
