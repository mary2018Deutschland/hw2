import React from "react";
import Greeting from "./components/Greeting/index";
import SchoppingList from "./components/SchoppingList/index";
import OrderStatus from "./components/OrderStatus/index";

function App() {
  //const products = ["bicycle", "car", "bike"];
  const products = [];

  const orders = [
    { orderId: 12, status: "в пути" },
    { orderId: 6, status: "обработан" },
  ];

  return (
    <>
      <Greeting name="Mary" />
      <SchoppingList items={products} />
      {orders.map((el, ind) => (
        <OrderStatus key={ind} orderId={el.orderId} status={el.status} />
      ))}
    </>
  );
}
export default App;
