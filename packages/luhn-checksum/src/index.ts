function luhnChecksum(card: string) {
  const len = card.length;
  const parity = len % 2;
  let sum = 0;

  for (let i = len - 1; i >= 0; i--) {
    let digit = parseInt(card.charAt(i));

    if (i % 2 == parity) {
      digit *= 2;
    }

    if (digit > 9) {
      digit -= 9;
    }

    sum += digit;
  }

  return sum % 10;
}

export function validate(card: string) {
  // Per CapitalOne:
  // A typical credit card number is 15 or 16 digits long. But you may see some as short as eight digits and others as long as 19 digits.
  // https://www.capitalone.com/learn-grow/money-management/what-is-a-credit-card-number/
  return 8 <= card.length && card.length <= 19 && luhnChecksum(card) === 0;
}
