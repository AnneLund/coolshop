import "./App.css";
import React, { useState } from "react";
import PaymentCard from "./PaymentCard";
import DeliveryDate from "./DeliveryDate";

function App() {
  const [price, setPrice] = useState(0);

  //Jeg returnerer den afrundende pris via en Math.ceil-funktion

  const roundToNearest = (value, nearest) => {
    return Math.ceil(value / nearest) * nearest;
  };

  //Den indtastede pris afrundes til nærmeste 0.05. Funktionen tjekker decimalen
  // og afrunder til det mest passende tal.

  const showPrettyPrice = (value) => {
    let roundedValue = roundToNearest(value, 0.5);
    let decimalPart = roundedValue - Math.floor(roundedValue);

    // Hvis decimalen er 0.01 eller 0.51, tilføjer den 0.49 for at nå den nærmeste .50 værdier.
    // Hvis decimalen er 0.99 eller 0.49, tilføjer den 0.01 for at nå den nærmeste .00 or .95 værdi.
    // Derefter returnerer den min 'pretty price' som en string med 2 decimaler , vha min 'toFixed()'-funktion.

    if (decimalPart === 0.01 || decimalPart === 0.51) {
      roundedValue += 0.49;
    } else if (decimalPart === 0.99 || decimalPart === 0.49) {
      roundedValue += 0.01;
    }

    return roundedValue.toFixed(2);
  };

  const handlePriceChange = (event) => {
    const value = event.target.value;
    setPrice(value);
  };

  return (
    <section>
      <div>
        <input type="number" value={price} onChange={handlePriceChange} />
        <p>Pretty Price: {showPrettyPrice(price)}</p>
      </div>
      <PaymentCard />
      <DeliveryDate />
    </section>
  );
}

export default App;
