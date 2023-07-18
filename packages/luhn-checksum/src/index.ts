function luhnChecksum(code: string) {
  const len = code.length;
  const parity = len % 2;
  let sum = 0;

  for (let i = len - 1; i >= 0; i--) {
    let d = parseInt(code.charAt(i));
    if (i % 2 == parity) {
      d *= 2;
    }
    if (d > 9) {
      d -= 9;
    }
    sum += d;
  }

  return sum % 10;
}

export function validate(code: string) {
  return code.length > 0 && luhnChecksum(code) === 0;
}
