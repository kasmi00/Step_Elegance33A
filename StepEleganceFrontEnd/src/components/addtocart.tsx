import "./adtocart.css"
import {
    DeleteOutlined, 
} from '@ant-design/icons';
import TopBar from "./topBar";
import FooterComp from "./footerComp";

function AddToCart(){
    return(
        
         <>
        <TopBar/>
        <div className="addtocartproperties">
      <h2 className="Cartheader"> Your Cart List</h2>
      <form action="" className="tabletocart">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Product Image</th>
            <th>Product Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Size</th>
            <th>Type</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          
            <tr>
             
              <td>
              <img src="" alt="" />
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <button >
                {<DeleteOutlined/>}
                </button>
              </td>
            </tr>

        </tbody>
      </table>
        <button className="confirmbtnnofrcart" type='submit'>Confirm</button>
        </form>
        </div>
        <FooterComp/>
        </>
    );
    }

export default AddToCart