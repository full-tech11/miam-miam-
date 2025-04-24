import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../lib/firebase";
import OrderList from "@/ui/components/order-card/order-list";

// Définir le type d'une commande
export interface Order {
  id: string;
  customer_name: string;
  items: { name: string; quantity: number; price: number }[];
  total_price: number;
  status: string;
  delivery_address: string;
  payment_status: string;
}

export default function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const querySnapshot = await getDocs(collection(db, "orders"));
      const ordersData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Order[];
      setOrders(ordersData);
    };

    fetchOrders();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Commandes</h1>
      <OrderList orders={orders} />
    </div>
  );
}