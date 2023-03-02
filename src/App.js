import "./App.css";
import React from "react";
import PaymentCard from "./Projects/PaymentCard";
import DeliveryDate from "./Projects/DeliveryDate";
import PrettyPrice from "./Projects/PrettyPrice";

function App() {
  return (
    <section>
      <PrettyPrice />
      <PaymentCard />
      <DeliveryDate />
    </section>
  );
}

export default App;
