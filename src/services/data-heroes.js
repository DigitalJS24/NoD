/* 
import skillType from "./skillType.json"; */
import skills from "./skills.json";

export class DataHeroes{
    constructor(){
        this.getSkillType = this.getSkillType.bind(this);
        this.getTypeOfSkill = this.getTypeOfSkill.bind(this)
    }
    
    getSkillType(){
        // get skill ([gather,output, healing, training])
        const skillKey = Object.keys(skills);
        return skillKey
    }

    getTypeOfSkill(skill){
        const res = skills[skill];
        return res;
    }    
} 

export default DataHeroes;