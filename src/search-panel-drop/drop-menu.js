import React, { Component } from "react";
import SearchPanelDropItem from "../search-panel-drop-item";
import DataHeroes from "../services/data-heroes";

class DropMenu extends Component  {
    constructor(props){
        super(props),
        this.drop = this.drop.bind(this)
    }
    dataHeroes =new DataHeroes();
    drop(){
        const {skill, type} = this.props;
        const data = this.dataHeroes.getTypeOfSkill(skill)[type];
        const itemId = skill.substr(0,3)+type;
        let res = data.map((item,i)=>{
            return (
                <SearchPanelDropItem label={item} key={itemId+i}/>
            )
        });
        return res;        
    }
    render() {
        return (
            <>
                {this.drop()}
            </>
        )
    }
}

export default DropMenu;