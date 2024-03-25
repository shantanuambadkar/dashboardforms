function ConvertAmtToWords(amount) {
  const NUMBER_WORDS = [
    '',
    'ONE',
    'TWO',
    'THREE',
    'FOUR',
    'FIVE',
    'SIX',
    'SEVEN',
    'EIHGT',
    'NINE',
    'TEN',
    'ELEVEN',
    'TWELVE',
    'THIRTEEN',
    'FOURTEEN',
    'FIFTEEN',
    'SIXTEEN',
    'SEVENTEEN',
    'EIGHTEEN',
    'NINETEEN',
  ];
  const TENS_WORDS = [
    '',
    '',
    'TWENTY',
    'THIRTY',
    'FORTY',
    'FIFTY',
    'SIXTY',
    'SEVENTY',
    'EIGHTY',
    'NINETY',
  ];

  let words = '';

  if (amount === 0) {
    return 'ZERO';
  }

  if (amount < 0) {
    words += 'Minus ';
    amount = Math.abs(amount);
  }

  if (amount >= 10000000) {
    words += ConvertAmtToWords(Math.floor(amount / 10000000)) + ' CRORE ';
    amount %= 10000000;
  }

  if (amount >= 100000) {
    words += ConvertAmtToWords(Math.floor(amount / 100000)) + ' LAKH ';
    amount %= 100000;
  }

  if (amount >= 1000) {
    words += ConvertAmtToWords(Math.floor(amount / 1000)) + ' THOUSAND ';
    amount %= 1000;
  }

  if (amount >= 100) {
    words += ConvertAmtToWords(Math.floor(amount / 100)) + ' HUNDRED ';
    amount %= 100;
  }

  if (amount >= 20) {
    words += TENS_WORDS[Math.floor(amount / 10)] + ' ';
    amount %= 10;
  }

  if (amount > 0) {
    words += NUMBER_WORDS[amount] + ' ';
  }

  return words.trim();
}

export default ConvertAmtToWords;
