import React from 'react'
import TestProps from '../components/TestProps'
class Workbench extends React.Component{
    constructor(){
        super()
        this.state = {
            dataList:[]
        }
    }
    componentWillMount(){
        fetch('http://cnodejs.org/api/v1/topics').then(res=> res.json()).then(res=>{
            this.setState({
                dataList : res.data
            });
        })
    }
    render(){
        let dataList = this.state.dataList;
        return (
            <div>
                <TestProps text="Workbench"/>
                <ul>
                   {
                        dataList.map((item,index)=>{
                            return (
                                <li key={index}>
                                    <img src={item.author.avatar_url} style={{"width":"38px","height":"38px"}}></img>
                                {item.title}
                                </li>
                            )
                        })
                   }
                </ul>
            </div>
        )
    }
}
export default Workbench