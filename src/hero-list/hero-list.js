import React, { Component } from "react"; 
import HeroListItem from "../hero-list-item";
import Heroes from "../services/Heroes.json"; 
/* import {CardGroup} from "reactstrap"; */



export default class HeroList extends Component {
    constructor(props){
        super(props);
        this.heroAll = this.heroAll.bind(this);
        this.heroFilter = this.heroFilter.bind(this)
    }
    
    heroAll(){
        const all = Object.values(Heroes).map((item)=>{
            return Object.keys(item).map(el=>{
                const {res, skill, bonus} = item[el];
                let skills = res + " " + skill
                return (<HeroListItem 
                            name={el} 
                            skill={skills}
                            bonus={bonus}
                            key={el['id']}/>    
                )
                });    
        })
        return all
    }
    heroFilter(){
        const {skill} = this.props.activeSkill;
        const result = ()=>{
            if (skill == 'all') {
                return this.heroAll()
            } 
            else {
                    const heroes = Heroes[skill];
                    return Object.keys(heroes).map(hero=>{
                        const {res, skill, bonus} = heroes[hero];
                        let skills = res + " " + skill
                        return <HeroListItem 
                                    name={hero} 
                                    skill={skills}
                                    bonus={bonus}
                                    key={hero['id']}/>    
                    });    
            }    
        }
        return result();
    } 
    render(){
        return (
        <>
                <h2 key='titleHero'>Heroes</h2>
                <div key='cardKey' className="container"
                    style={{
                        display: "flex",
                        flexWrap: "wrap"
                    }}>
                     {this.heroFilter()}
                    
                </div>
            </>
        ) 
    }
}
