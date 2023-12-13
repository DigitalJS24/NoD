import React, { Component } from "react";
import HeroList from "../hero-list";
import SearchPanelDrop from "../search-panel-drop";



class Content extends Component {
    constructor(props){
        super(props),
        this.state = {
            skill:"all",
            res:"all",
            type:"all"
        }
        this.onChangeSkill = this.onChangeSkill.bind(this)
    }
    onChangeSkill(event) {
        this.setState(()=>({
            [event.target.id]:event.target.value
        }))
    }
    render(){
        return (
            <>
                
                <SearchPanelDrop 
                    activeSkill={this.state}
                    onChangeState={this.onChangeSkill} 
                    key="searchPanelDrop"/>
                <HeroList 
                    activeSkill={this.state}
                    onChangeState={this.onChangeSkill} 
                    key={`${this.state.skill+this.state.res}HeroList`}/>
                
            </>
        )
    }
}

export default Content;
