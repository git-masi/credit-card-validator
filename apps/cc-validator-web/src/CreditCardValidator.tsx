import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Link,
  Button,
  FormErrorMessage,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { SyntheticEvent, useState } from "react";

class ApiError extends Error {
  constructor(message: string) {
    super();
    this.message = message;
  }

  static invalidCardNumber() {
    return new ApiError("Invalid card number");
  }
}

export default function CreditCardValidator() {
  const [isLoading, setIsLoading] = useState(false);
  const [isCardError, setIsCardError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    const {
      cardNumber: { value },
    } = e.target as typeof e.target & {
      cardNumber: { value: string };
    };

    if (!value) return;

    setIsLoading(true);
    setIsCardError(false);
    setErrorMessage("");
    setIsValid(false);

    void (async () => {
      try {
        const res = await fetch("http://localhost:8080/credit-cards/validate", {
          method: "POST",
          body: JSON.stringify({ cardNumber: value }),
          headers: { "Content-Type": "application/json" },
        });

        if (res.status === 400) {
          throw ApiError.invalidCardNumber();
        }

        if (res.status !== 200) {
          throw new Error(
            (await res.text()) ?? "An unexpected error occurred."
          );
        }

        setIsValid(true);
      } catch (error) {
        if (error instanceof ApiError) {
          setIsCardError(true);
          setErrorMessage(error.message);
        } else {
          console.error(error);
          alert("Sorry there was an unexpected error. Please try again later.");
        }
      } finally {
        setIsLoading(false);
      }
    })();
  };

  return (
    <Card>
      <CardHeader>
        <Heading size="md" textTransform="uppercase">
          Enter a credit card number
        </Heading>
      </CardHeader>

      <CardBody as="form" onSubmit={handleSubmit}>
        <FormControl
          isInvalid={isCardError}
          isRequired
          borderColor={isValid ? "green.400" : "gray.100"}
        >
          <FormLabel>Credit Card Number</FormLabel>

          <Input
            type="text"
            name="cardNumber"
            minLength={8}
            pattern="^[0-9]{8,19}$"
            borderWidth="3px"
          />

          {isValid && <Text color="green.400">Valid card number</Text>}

          {isCardError && <FormErrorMessage>{errorMessage}</FormErrorMessage>}

          <FormHelperText>
            Enter your 8-19 digit card number. See{" "}
            <Link
              href="https://stripe.com/docs/testing"
              target="blank"
              textDecoration="underline"
            >
              Stripe
            </Link>{" "}
            for examples.
          </FormHelperText>
        </FormControl>

        <Button
          type="submit"
          mt="1rem"
          backgroundColor="blue.200"
          disabled={isLoading}
        >
          {isLoading ? <Spinner /> : "Validate"}
        </Button>
      </CardBody>
    </Card>
  );
}
