import React from 'react';

class Option extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = { option:'I',optionSet:[
            {key: "R",val: "Responsible"},{key:"A",val:"Accountable"},{key:"C",val:"Consulted"},{key:"I",val:"Informed"}]
        }
    }
    changeOptions = (event)=>{
        console.log('something');
        this.setState({option:event.target.value});
    }
    render() {
        
        return <select  value = {this.state.option} onChange = {this.changeOptions}>
            {this.state.optionSet.map((ele=><option value={ele.key} key={ele.key}>{ele.val}</option>))}
            </select>;
    }
}

export default Option;