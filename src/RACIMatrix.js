/* eslint-disable no-unused-vars */
import React from 'react';
import Unit from './Unit';


class RACIMatrix extends React.Component{

    render(){
        return  <table>
                    <tbody>
                        <tr>
                            <Unit name ="R"/><Unit name ="A"/>
                        </tr>
                        <tr>
                            <Unit name ="C"/> <Unit name ="I"/>
                        </tr>
                    </tbody>
                </table>;
    }
}

export default RACIMatrix;