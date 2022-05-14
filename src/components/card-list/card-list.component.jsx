//import { Component } from "react";
import "./card-list-component.styles.css"
//import Card from "./card-component"; 
import CardYihua from "../card/card-component.yihua";


const CardList = ({monsters}) => {
    
    return (
      
            <div className="card-list">
                {monsters.map(monster => {
                    //Need it for my version const {name, email, id} = monster;
                    
                    return (
                        
                        //My version
                        //<Card monsterName={name} monsterEmail={email} monsterId={id}/>
                        
                        //Yihua version
                        <CardYihua monster = {monster}/>
                    )
                }
                )
            }
            </div>
            )        
}



// class CardList extends Component{
//     render(){
//         const {monsters} = this.props;
//         return (
//             <div className="card-list">
//                 {monsters.map(monster => {
                     
//                     //Need it for my version const {name, email, id} = monster;
                    
//                     return (
                        
//                         //My version
//                         //<Card monsterName={name} monsterEmail={email} monsterId={id}/>
                        
//                         //Yihua version
//                         <CardYihua monster = {monster}/>
//                     )
//                 }
//                 )
//             }
//             </div>
//         )    
//     }
// }

export default CardList;