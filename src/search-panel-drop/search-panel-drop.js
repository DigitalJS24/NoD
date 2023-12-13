import React, { Component } from "react";
import DataHeroes from "../services/data-heroes";
import SearchPanelDropItem from "../search-panel-drop-item";
import DropMenu from "./drop-menu";
/* import Store from "../store"; */

export default class SearchPanelDrop extends Component {
    constructor (props){
        super(props)
        /* this.state= {
            skill:"all",
            res:"all",
            type:"all"
        } */
        this.onChangeSkill = this.onChangeSkill.bind(this)
    }
    dataTypes = new DataHeroes();
    /* store = new Store(); */
    onChangeSkill(event){
        /* this.store.setStore(event.target.id,event.target.value); */
        this.props.onChangeState(event);
        /* this.setState(()=>({
            [event.target.id]:event.target.value
        })) */
    }

    skillMenu(){
        
        const skillType = this.dataTypes.getSkillType().map((item)=>{
            
            
            return <>
                        { <SearchPanelDropItem label={item} key={`${item}item`}/>}
                </>      
            });
            const skill = this.props.activeSkill.skill;
        return (
            <>

                <select 
                    onChange={this.onChangeSkill}
                    value = {skill}
                    key='skillk'
                    id='skill'>
                    {skillType}
                </select>
            </>
        )
    }
    addMenu(){
        // get array of type ([skill,res,type])
        const skill = this.props.activeSkill.skill;
        const types = this.dataTypes.getTypeOfSkill(skill);
        const type = Object.keys(types).map((item)=>{
            const dropKey = `${item}Drop`;
            return (
                <>
                    <select 
                        onChange={this.onChangeSkill} 
                        value = {skill[item]}
                        key={item} 
                        id={item}>
                        { 
                            <DropMenu skill={skill} type={item} key={dropKey}/>
                        }
                    </select>
                </> 
            )});
        return (
            <>
                {type}
            </>
        )
    }

    render() { 
        return (
            <div className='d-flex p-4' key='searchKey'>
                {this.skillMenu()}
                {this.addMenu()}

            </div>
        );
    }
}