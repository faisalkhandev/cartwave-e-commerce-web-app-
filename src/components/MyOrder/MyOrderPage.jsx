import Table from "../Common/Table";
import useData from "../Hooks/useData";
import PreLoader from "../PreLoader/PreLoader";
import "./MyOrderPage.css";

const MyOrderPage = () => {
  const { data: orders, isLoading, error } = useData("/order");

  function getProductString(order) {
    const productString = order.products.map(
      (p) => `${p.product.title}(${p.quantity})`
    );
    return productString.join(",  ");
  }

  return (
    <section className="align_center myorder_page">
      {isLoading && <PreLoader />}
      {error && <em className="form_error">{error}</em>}
      {orders && (
        <Table headings={["Order", "Products", "Total", "Status"]}>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order._id}>
                <td>{index + 1}</td>
                <td>{getProductString(order)}</td>
                <td>{order.total}</td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </section>
  );
};

export default MyOrderPage;
