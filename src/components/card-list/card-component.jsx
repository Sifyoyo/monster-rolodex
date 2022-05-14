import { Component } from "react";

class Card extends Component{
    render(){

        const {monsterName, monsterEmail, monsterId} = this.props
        //console.log(monsterName, monsterEmail, monsterId)

        return (
        <div className="card-container" key={monsterId}>
        <img alt={`monster ${monsterName}`} src={`https://robohash.org/${monsterId}?set=set2&size=180x180`}/>
        
        <h2 key={monsterId}>{monsterName}</h2>
        <p>{monsterEmail}</p>
        </div>
    )
    }
}

export default Card;