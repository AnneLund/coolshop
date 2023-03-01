import "./App.css";
import React from "react";
import PaymentCard from "./PaymentCard";
import DeliveryDate from "./DeliveryDate";
import PrettyPrice from "./PrettyPrice";

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
