import React from 'react'
class TestProps extends React.Component{
    constructor(){
        super()
    }
    static propTypes = {
        text:React.PropTypes.string
    }
    static defaultProps = {
        text:''
    }
    render(){
        return (
              <h1>{this.props.text}</h1>
        )
    }
}
export default TestProps;