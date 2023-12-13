import { Component } from "react";


export default class Store extends Component {
 constructor(){
    super(),
    this.state = {
        skill:'',
        res:'all',
        type:"all"
    }
   
 }
 componentDidMount() {
    this.setState = this.setState.bind(this)
}
 getState(){
    return this.state;
 }
 setStore(key,value){
    this.setState(()=>({
        [key]:value
    }))
 }
 render(){
    return
 }
}