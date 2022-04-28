import React, { Component } from 'react';
import axios from "axios";

class FarmerAddNewProduct extends Component {

    state={
        name:"",
        price:0,
        quantity:0,
        description:""
    }
    onChangeProperty=(event)=>{
        let copy={...this.state}
        copy[event.target.name]=event.target.value
        this.setState(copy)

    }
  
        addProduct=()=>{
            // axios.post('/products/'+1+".....",this.state,{
            //     headers:{
            //         authorization:""
            //     }
            // })
      
        } 
    
    render() { 
        return(
        <div>
           Name: <input type="text"
                        value={this.state.name}
                        onChange={this.onChangeProperty}
                        name="name"
           />
           Price: <input type="text"
                        value={this.state.price}
                        onChange={this.onChangeProperty}
                        name="price"
           />
           Quantity: <input type="text"
                        value={this.state.quantity}
                        onChange={this.onChangeProperty}
                        name="quantity"
           />
           description: <input type="text"
                        value={this.state.description}
                        onChange={this.onChangeProperty}
                        name="description"
           />
           <input type="button"
                        value="Add"
                        onClick={this.addProduct}
                        name="description"
           />



        </div>) ;
    }
}
 
export default FarmerAddNewProduct;