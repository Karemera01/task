function Product(props) {
    return ( 
        <div>
            <p>{props.name}</p>
            <p>{props.price}</p>
            <p>{props.description}</p>
            <p>{props.quantity}</p>
            <p>{props.farmer}</p>
            <input type="button"
            value="Update"
            onclick={props.updateProduct}
            />
             <input type="button"
            value="Delete"
            onclick={props.deleteProduct}
            />

        </div>
     );
}

export default Product;