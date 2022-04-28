import React, { Component } from 'react';
import axios from "axios";
import Farmer from './Farmer';

class FarmersList extends Component {
    state={
        farmersList:[]
    }
    componentDidMount() {
        axios.get('/farmers',{headers:{
            authorization:localStorage.getItem('token')
            
        }})
        .then(res=>{
            let copy={...this.state}
            copy.farmersList=res.data;
            this.setState(copy)
        })
    }
    showProduct=()=>{
        this.props.state.history('/products')
    }
    render() { 
        return (
            this.state.farmersList((item)=>{
                return(
                    <Farmer
                    key={item.id}
                    name={item.name}
                    email={item.email}
                    phone={item.phone}
                    reputation={item.reputation}
                    showProduct={()=>{this.showProduct(item.id)}}
                    ></Farmer>
                )
            })
        )
    }
}
 
export default FarmersList;
