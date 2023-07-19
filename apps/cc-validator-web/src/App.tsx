import {
  Container,
  Card,
  CardHeader,
  CardBody,
  Heading,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Link,
  Center,
} from "@chakra-ui/react";

function App() {
  return (
    <Container maxW="md" height="100vh">
      <Center height="100%">
        <Card>
          <CardHeader>
            <Heading size="md" textTransform="uppercase">
              Enter a credit card number
            </Heading>
          </CardHeader>

          <CardBody as="form">
            <FormControl>
              <FormLabel>Credit Card Number</FormLabel>

              <Input type="text" />

              <FormHelperText>
                You can get a test card number from{" "}
                <Link href="https://stripe.com/docs/testing" target="blank">
                  Stripe
                </Link>
              </FormHelperText>
            </FormControl>
          </CardBody>
        </Card>
      </Center>
    </Container>
  );
}

export default App;
