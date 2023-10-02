/* eslint-disable react/prop-types */

import "./CartPage.css";

import user from "../../../public/user.png";
import remove from "../../../public/remove.png";

import QualityInput from "./../SingleProduct/QualityInput";
import Table from "../Common/Table";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const CartPage = ({ cart }) => {
  const [subTotal, setSubTotal] = useState(0);
  useEffect(() => {
    let total = 0;
    cart.forEach((item) => {
      total += item.product.price;
    });

    setSubTotal(total);
  }, [cart]);

  return (
    <section className="align_center cart_page">
      <div className="align_center user_info">
        <img src={user} alt="user profile" />
        <div>
          <p className="user_name">Harley</p>
          <p className="user_email">harley@gmail.com</p>
        </div>
      </div>

      <Table headings={["Item", "Price", "Quantity", "Total", "Remove"]}>
        <tbody>
          {cart.map(({ product, quantity }) => (
            <tr key={product._id}>
              <td>
                <b>{product.title}</b>
              </td>
              <td>
                <b>${product.price}</b>
              </td>
              <td className="align_center table_quantity_input">
                <QualityInput quantity={quantity} stock={product.stock} />
              </td>
              <td>
                <b>{quantity * product.price}</b>
              </td>
              <td>
                <img
                  src={remove}
                  alt="remove icon"
                  className="cart_remove_icon"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <table className="cart_bill">
        <tbody>
          <tr>
            <td>Subtotal</td>
            <td>${subTotal}</td>
          </tr>
          <tr>
            <td>Shipping Charge</td>
            <td>$5</td>
          </tr>
          <tr className="cart_bill_final">
            <td>Total</td>
            <td>${subTotal + 5}</td>
          </tr>
        </tbody>
      </table>

      <button className="search_button checkout_button">Checkout</button>
    </section>
  );
};

export default CartPage;
