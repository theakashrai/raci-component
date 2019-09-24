/* eslint-disable no-unused-vars */
import React from 'react';
import Unit from './Unit';


class RACIMatrix extends React.Component{

    constructor(props){
        super(props);
        this.state = {R:0,A:0,C:0,I:0,id:this.props.id} ;
    }

    

    unitCalls = (data) =>{
        let key = data.name;
        let val = data.value;
        this.setState({[key]:val});
    }

 

    componentDidUpdate(){
        console.log(this.state);
    }

    render(){
        return  <table>
                    <tbody>
                        <tr><Unit name ="R" callParent={this.unitCalls}/><Unit name ="A" callParent={this.unitCalls}/></tr>
                        <tr><Unit name ="C" callParent={this.unitCalls}/><Unit name ="I" callParent={this.unitCalls}/></tr>
                    </tbody>
                </table>;
    }
}

export default RACIMatrix;