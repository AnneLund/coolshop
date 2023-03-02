import React, { useState } from "react";

function DeliveryDate() {
  const [orderTime, setOrderTime] = useState(new Date());

  function calculateDeliveryDate(orderTime) {
    // Konverterer til dansk tidszone
    const orderTimeDK = new Date(orderTime.toLocaleString("en-US", { timeZone: "Europe/Copenhagen" }));

    // Checker om ordren kommer på hverdag
    const dayOfWeek = orderTimeDK.getUTCDay();
    const isWorkDay = dayOfWeek >= 1 && dayOfWeek <= 5;

    // Checker om ordren kommer inden klokken 15
    const hourOfDay = orderTimeDK.getUTCHours();
    const isBeforeCutoff = (isWorkDay && hourOfDay < 15) || (!isWorkDay && hourOfDay < 12);

    // Beregner leveringsdatoen
    let deliveryDate = new Date(orderTimeDK.getTime());

    if (!isBeforeCutoff) {
      deliveryDate.setDate(deliveryDate.getDate() + (isWorkDay ? 2 : 3));
    } else if (!isWorkDay) {
      deliveryDate.setDate(deliveryDate.getDate() + 1);
    }

    //Hvis ordre-datoen er mandag-fredag og inden kl. 15, leveres ordren dagen efter.
    //Hvis det er fredag, leveres den om mandagen.
    if (isBeforeCutoff && dayOfWeek < 5) {
      deliveryDate.setDate(deliveryDate.getDate() + 1);
    } else if (dayOfWeek === 5) {
      deliveryDate.setDate(deliveryDate.getDate() + 3);
    }

    // Checker om det er en hellig/ferie-dag eller weekend
    const deliveryDayOfWeek = deliveryDate.getUTCDay();
    const isPublicHoliday = publicHolidays.includes(deliveryDate.toLocaleString().slice(0, 10));
    const isNonWorkDay = !isWorkDay || isPublicHoliday;

    if (deliveryDayOfWeek === 0 || deliveryDayOfWeek === 6 || isNonWorkDay) {
      deliveryDate.setDate(deliveryDate.getDate() + (deliveryDayOfWeek === 5 ? 3 : 1));
    }

    return deliveryDate.toLocaleDateString().slice(0, 10);
  }

  function handleOrderTimeChange(event) {
    setOrderTime(new Date(event.target.value));
  }

  const deliveryDate = calculateDeliveryDate(orderTime);

  return (
    <div>
      <label htmlFor="order-time">Order Time:</label>
      <input type="datetime-local" id="order-time" value={orderTime.toISOString().slice(0, 16)} onChange={handleOrderTimeChange} />
      <p>Expected Delivery Date: {deliveryDate}</p>
    </div>
  );
}

// Helligdage
const publicHolidays = [
  "2023-04-06", // Skærtorsdag
  "2023-04-07", // Langfredag
  "2023-05-05", // St. bededag
  "2023-05-29", // 2. pinsedag
  "2023-06-05", // Constitution Day
  "2023-12-24", // Juleaften
  "2023-12-25", // Juledag
  "2023-12-31", // Nytårsaften
  "2024-01-01", // Nytårsdag
];

export default DeliveryDate;
