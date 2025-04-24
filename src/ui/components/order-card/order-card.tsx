import React from "react";
import { Order } from "@/ui/components/order-card/orders"; // Importer le type Order

// Définir les props du composant
interface OrderCardProps {
  order: Order;
}

const OrderCard: React.FC<OrderCardProps> = ({ order }) => {
  return (
    <div className="p-4 border rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold">Commande #{order.id}</h2>
      <p className="text-gray-600">Statut: {order.status}</p>
      <p className="text-gray-600">Total: {order.total_price} €</p>
      <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Voir les détails
      </button>
    </div>
  );
};

export default OrderCard;