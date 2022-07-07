import React from 'react';
export default class Raining extends React.Component{
    constructor(){
        super();
        this.state={
           statement:"isItRaining"
        }
    }
 isRaining=true;
render(){
    const statement=this.state.statement;
    return(
        <div>
            <h1>Is it raining ??  {!this.isRaining&&<span>Yes</span>}{this.isRaining&&<span>No</span>}</h1>
        </div>
    );
}   
}