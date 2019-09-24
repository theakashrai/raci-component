import React from 'react';

class Unit extends React.Component{

    constructor(props){
        super(props);
        this.state = {name: this.props.name,isSelected: false,bgColor:'white'};

    }
    clickHandler = ()=>{
        this.setState({isSelected:!this.state.isSelected});   
    }
    componentDidUpdate(){
        if(this.state.bgColor === 'white')
            this.setState({bgColor:(this.state.isSelected)?'yellow':'white'});
    }

    render(){
        return <td style = {{backgroundColor:this.state.bgColor}} onClick={this.clickHandler}>{this.state.name}</td>
    }
}

export default Unit;