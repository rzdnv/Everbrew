import { Link, useParams } from "react-router-dom";
import styles from "./DetailOrder.module.css";
import { useEffect, useState } from "react";
import { getOrderById } from "../../../services/order.service";
import Button from "../../ui/Buttton";

interface MenuItem {
  name: string;
  image_url: string;
}

interface CartItem {
  menuItemId: string;
  quantity: number;
  menuItem: MenuItem;
}

interface Order {
  id: string;
  customer_name: string;
  table_number: number;
  status: string;
  total: number;
  cart: CartItem[];
}

const DetailOrder = () => {
  const { id } = useParams();
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    const fetchOrder = async () => {
      const result = await getOrderById(id as string);
      setOrder(result);
    };
    fetchOrder();
  }, [id]);
  console.log(order);

  return (
    <main className={styles.detail}>
      <section className={styles.header}>
        <h1>Detail Order</h1>
        <Link to="/orders">
          <Button>Back</Button>
        </Link>
      </section>
      <section>
        <div className={styles.order}>
          <div className={styles.info}>
            <div className={styles.item}>
              <p>Order ID:</p>
              <h4>{order?.id}</h4>
            </div>
            <div className={styles.item}>
              <p>Customer:</p>
              <h4>{order?.customer_name}</h4>
            </div>
            <div className={styles.item}>
              <p>Table:</p>
              <h4>{order?.table_number}</h4>
            </div>
            <div className={styles.item}>
              <p>Status:</p>
              <h4>{order?.status}</h4>
            </div>
            <div className={styles.item}>
              <p>Total:</p>
              <h4>${order?.total}</h4>
            </div>
          </div>
          <div className={styles.cart}>
            <h3>Order Items</h3>
            <div className={styles.list}>
              {order?.cart?.map((item) => (
                <div className={styles.item} key={item.menuItemId}>
                  <img
                    className={styles.image}
                    src={item.menuItem.image_url}
                    alt={item.menuItem.name}
                  />
                  <p className={styles.name}>
                    {item.quantity} x {item.menuItem.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DetailOrder;
