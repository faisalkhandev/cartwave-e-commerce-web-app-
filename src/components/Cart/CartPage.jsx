/* eslint-disable react/prop-types */

import "./CartPage.css";

import remove from "../../../public/remove.png";

import QualityInput from "./../SingleProduct/QualityInput";
import Table from "../Common/Table";
import { useEffect, useState, useContext } from "react";
import userContext from "../Contexts/userContext";
import cartContext from "../Contexts/cartContext";
import { checkOutAPI } from "../Services/orderServices";
import { toast } from "react-toastify";

// eslint-disable-next-line react/prop-types
const CartPage = () => {
  const [subTotal, setSubTotal] = useState(0);
  const user = useContext(userContext);
  const { cart, removeCartItem, updateCart, setCart } = useContext(cartContext);

  useEffect(() => {
    let total = 0;
    cart.forEach((item) => {
      total += item.product.price;
    });

    setSubTotal(total);
  }, [cart]);

  function checkOut() {
    const oldCart = [...cart];
    checkOutAPI()
      .then(() => {
        toast.success("Order place successfully");
        setCart([]);
      })
      .catch(() => {
        toast.error("somthing went wrong");
        setCart(oldCart);
      });
  }

  return (
    <section className="align_center cart_page">
      <div className="align_center user_info">
        <img
          src={`http://localhost:5000/profile/${user?.profilePic}`}
          alt="user profile"
        />
        <div>
          <p className="user_name">Name: {user?.name}</p>
          <p className="user_email">Email: {user?.email}</p>
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
                <QualityInput
                  quantity={quantity}
                  stock={product.stock}
                  setQuantity={updateCart}
                  cartPage={true}
                  productId={product._id}
                />
              </td>
              <td>
                <b>{quantity * product.price}</b>
              </td>
              <td>
                <img
                  src={remove}
                  alt="remove icon"
                  className="cart_remove_icon"
                  onClick={() => {
                    removeCartItem(product._id);
                  }}
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

      <button className="search_button checkout_button" onClick={checkOut}>
        Checkout
      </button>
    </section>
  );
};

export default CartPage;
