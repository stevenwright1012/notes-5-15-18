import React from 'react';

class Puddle extends React.Component{
    constructor(){
        super()

        this.state = {
            inputValue: ''
        }
        this.handleInput = this.handleInput.bind(this)
    }
    handleInput(e){
        this.setState({
            inputValue: e
        })
    }
    render(){
        return(
            <div >
                <input 
                placeholder ={this.props.placeholder}
                type="text" 
                onChange={(e) => this.handleInput(e.target.value.toLowerCase())}/>
                {this.props.render(this.state.inputValue)}
            </div>
        )
    }
}

export default Puddle