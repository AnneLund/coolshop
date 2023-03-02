import React from "react";

const formatPaymentCard = () => {
  // Checker korttype vha en regular expression og en 'test'-funktion.
  let cardNumber = "1234567887654321";
  let cardType = "";

  if (/^1/.test(cardNumber)) {
    cardType = "VISA";
  } else if (/^5[1-5]/.test(cardNumber)) {
    cardType = "MASTERCARD";
  } else {
    cardType = "OTHER";
  }

  // Udskifter de midterste tal med maskedDigits(X)
  const firstFourDigits = cardNumber.substring(0, 4);
  const lastFourDigits = cardNumber.substring(cardNumber.length - 4);
  const maskedDigits = "X".repeat(cardNumber.length - 8);
  return `${cardType}${firstFourDigits}${maskedDigits}${lastFourDigits}`;
};

function PaymentCard({ cardNumber }) {
  const formattedCardNumber = formatPaymentCard(cardNumber);

  return <p>Payment Card: {formattedCardNumber}</p>;
}

export default PaymentCard;
