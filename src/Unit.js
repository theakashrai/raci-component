import React from 'react';

class Unit extends React.Component{
    

    constructor(props){
        super(props);
        this.state = {name: this.props.name,isSelected: false,bgColor:'white'};
        
    }
    clickHandler = ()=>{
        let checkVal = !this.state.isSelected;
        this.setState({isSelected:checkVal,bgColor:(checkVal)?'yellow':'white'});   
    }

    componentDidUpdate(){
        console.log(this.state.name + ' is selected ? ' + this.state.isSelected );
    }
    

    render(){
        return <td style = {{backgroundColor:this.state.bgColor}} onClick={this.clickHandler}>{this.state.name}</td>
    }
}

export default Unit;