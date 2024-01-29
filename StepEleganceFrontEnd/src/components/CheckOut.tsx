import { useState } from "react";
import "./CheckOut.css";
import { ShoppingCartOutlined } from "@ant-design/icons";

function CheckOut() {
  return (
    <>
      <div className="mainbodyofbuyproduct">
        <div className="outerlayer">
          <div className="rightside">
            <table>
                <th>
                    Product Name
                </th>
                <th>
                    Quantity
                </th>
                <th>
                    Price
                </th>

                <tr>
                    
                </tr>


            </table>
            </div>
            <div className="totalpricebox">
                <label className="labelforprice">Price:</label> <input className="inputforprice" type="number" />
                <label className="labelforprice">Discount Price:</label> <input className="inputforprice" type="number" />
                <label className="labelforprice">VAT Price:</label> <input className="inputforprice" type="number" />
                <label className="labelforprice">Total Price:</label> <input className="inputforprice" type="number" />
            </div>
          </div>
        </div>
    </>
  );
}

export default CheckOut;
