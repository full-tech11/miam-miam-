import React from "react";
import OrderCard from "@/ui/components/order-card/order-card";
import { Order } from "@/ui/components/order-card/orders"; // Importer le type Order

// Définir les props du composant
interface OrderListProps {
  orders: Order[];
}

const OrderList: React.FC<OrderListProps> = ({ orders }) => {
  return (
    <div className="space-y-4">
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  );
};

export default OrderList;