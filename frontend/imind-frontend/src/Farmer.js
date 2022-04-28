function Farmer(props) {
    return ( 
        <div>
            {props.name}
            {props.email}
            {props.phone}
            {props.reputation}
             <input
             type="button"
             value="Show Products"
             onClick={props.showProduct}

             />
            

        </div>
     );
}

export default Farmer;