//import { Component } from "react";

import "./card.styles.css";

//--------------->({monster: {id,name,email}})<------- kan deconstructe props slik, i arg hvis man vil
//                     ^
//                     |
//                     |
const CardYihua = ({monster}) => {

        const {id,name,email} = monster;

        return(
        <div className="card-container" key={id} >
        <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
        
        <h2>{name}</h2>
        <p>{email}</p>
        </div>)
}
        
        
    




// class CardYihua extends Component{

//     render(){

//         const {id, name, email} = this.props.monster;
//         return (
//         <div className="card-container" key={id}>
//         <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
        
//         <h2 key={id}>{name}</h2>
//         <p>{email}</p>
//         </div>
//         )
//     }

// }

export default CardYihua;