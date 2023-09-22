import Table from "../Common/Table";
import "./MyOrderPage.css";

const MyOrderPage = () => {
  return (
    <section className="align_center myorder_page">
      <Table headings={["Order", "Products", "Total", "Status"]}>
        <tbody>
          <tr>
            <td> 1</td>
            <td>iphone</td>
            <td>$999.99</td>
            <td>Shipped</td>
          </tr>
        </tbody>
      </Table>
    </section>
  );
};

export default MyOrderPage;
