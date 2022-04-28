/**
 * CS568 final project 
 * @ Author: Naha Unborn
 * @ Date: 9/18/2021
 */

import React from "react";
import axios from "axios";

class Feedback extends React.Component{
    state={
        feedback:{
            rating: "1-10, 1 is not good, 10 is very good",
            productsReview:'',
            FarmerServiceReviw:''
        }
    }

    onChange = e =>{
        let copy = {...this.state.feedback};
        copy[e.target.name] = e.target.value;
        this.setState({feedback:copy});
    }

    sendFeedback =() =>{
        axios.post('/productslist/' +this.props.match.params.id + '/feedback', this.state.feedback, {headers:{Authorization:localStorage.getItem('token')}})
    }

    render(){
        return(
            <div>
                Rating: <input
                        type = 'text'
                        value = {this.state.feedback.rating}
                        onChange ={this.onChange}
                        name ='rating'
                        />

                Products Review:<input
                type = 'text'
                value = {this.state.feedback.productsReview}
                onChange ={this.onChange}
                name ='productsReview'
                />

                Farmer Service eviw:<input
                type = 'text'
                value = {this.state.feedback.FarmerServiceReviw}
                onChange ={this.onChange}
                name ='FarmerServiceReviw'
                />

                <input
                type ='button'
                value = 'Send Feedback'
                onClick = {this.sendFeedback}
                />

            </div>
        )
    }
}

export default Feedback;