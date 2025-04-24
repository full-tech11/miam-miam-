import React from "react";
import { Order } from "@/ui/components/order-card/orders"; // Importer le type Order

// Définir les props du composant
interface OrderDetailsProps {
  order: Order;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ order }) => {
  return (
    <div className="p-4 border rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold">Détails de la commande #{order.id}</h2>
      <p className="text-gray-600">Client: {order.customer_name}</p>
      <p className="text-gray-600">Adresse: {order.delivery_address}</p>
      <p className="text-gray-600">Statut: {order.status}</p>
      <p className="text-gray-600">Paiement: {order.payment_status}</p>
      <h3 className="text-lg font-semibold mt-4">Articles:</h3>
      <ul>
        {order.items.map((item, index) => (
          <li key={index} className="text-gray-600">
            {item.name} - {item.quantity} x {item.price} €
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderDetails;