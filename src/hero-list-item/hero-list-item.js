import React, {Component} from "react";

import {Card,
    CardBody,
    CardTitle,
    CardText,
    Button} from 'reactstrap';

export default class HeroItem extends Component {
    constructor(props){
        super(props)
    }
        
    render(){
        const {name, skill, bonus } = this.props; 
        const img = '../data/heroes-img/'+name+'.png'
        return (
            <div key={`${name}HeroItem`}>
                <Card
                    key={`${name}Card`}
                    style={{
                    width: '8rem'
                }}>
                <img
                    alt={name}
                    src={img}
                />
                    <CardBody key={`${name}CardBody`}>
                        <CardTitle tag="h5" key={`${name}CardTitle1`}>
                            {name}
                        </CardTitle>
                        <CardTitle tag="h6" key={`${name}CardTitle2`}>
                            {skill}
                        </CardTitle>
                        <CardText key={`${name}CardText`}>
                            {bonus}
                        </CardText>
                        <Button key={`${name}CardButton`}>
                            Detail
                        </Button>
                    </CardBody>
                </Card>
            </div>
        )
    }
}