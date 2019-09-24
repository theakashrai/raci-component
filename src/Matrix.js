import React from 'react';
// eslint-disable-next-line no-unused-vars
import RACIMatrix from './RACIMatrix';


class Matrix extends React.Component{

    constructor(props){
        super(props);
        this.state = {row: this.props.row.length,col: this.props.col.length};
    }

    createMatrix(){
        
        let rows;
        let matrix = [];
        let thead =[];
        let initHeader = true;
        thead.push(<th>R.A.C.I. Matrix</th>)
        for(let i=0;i<this.state.row;i++)
        {
            rows = [];
            rows.push(<td>{this.props.row[i]}</td>);
            for(let j=0;j<this.state.col;j++)
            {   
                if(initHeader)
                    thead.push(<th>{this.props.col[j]}</th>);
                rows.push(<td><RACIMatrix key={'#'+i+'#'+j}/></td>);
            }
            matrix.push(<tr key={'#'+i}>{rows}</tr>);
            initHeader =false;
        }
        return <table><thead><tr>{thead}</tr></thead><tbody>{matrix}</tbody></table>;
    }
    render(){
        return this.createMatrix();
    }
}
export default Matrix;