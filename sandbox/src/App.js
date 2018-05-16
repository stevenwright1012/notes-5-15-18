import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Puddle from './Puddle'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button>Default</Button>
        <Button type='primary'>Primary </Button>
        <Button type='dashed'>Dashed </Button>
        <Button type='danger'>Danger </Button>
        <Button type='primary'><img src="./download-arrow.png" alt=""/>  Download </Button>
          <p>
          List goes here
          </p>
          <List
            data={[1, 2, 3, 5, 1, 3, 2]}
            renderItem={(num) => <li>{num}</li>} />
          
          List of Strings
          <List 
            data={["Batman", "Superman", "The Flash", "Your mom"]}
            renderItem={(str) => 
              <div style={{padding: 3}}>{`${str}!`}</div>
            }/>
        <div>
          <StyledButton primary size="large">Words</StyledButton>
          <StyledButton>Words</StyledButton>
        </div>
        <Puddle 
          placeholder="Type a size"
          render={(str) => <h1 style={{fontSize: fontSizes[str]}}>{str}</h1>}
        />
        <Puddle 
          placeholder='Type a color'
          render={(str)=> <h1 style={{color: str}}>{str}</h1 >}/>
        <Puddle 
          placeholder='Type a '
          />
      </div>
    );
  }
}

export default App;


const fontSizes = {
  tiny: '8px',
  small: '14px',
  medium: '22px',
  large: '64px',
  huge: '100px'
}
const StyledButton = styled.button`
  background-color: ${ props => props.primary ? 'salmon' : 'white'};
  color: ${props => props.primary ? 'white' : 'salmon'};
  border: ${props => props.primary ? '1px solid salmon' : '2px solid salmon'}
  border-radius: 5px;
  font-size: ${props => fontSizes[props.size]};
  padding: 4px;
`
class List extends Component {
  render() {
    const { data, renderItem } = this.props;
    const listItems = data.map(num => renderItem(num))

    return (
      <div className="list">
        {listItems}
      </div>
    )
  }
}



class Button extends Component {
  render() {
    const { type, children } = this.props;
    const styleChoice = styles[type ? type : 'default']
    return (
      <button style={Object.assign({}, btnBase, styleChoice)}>{children}</button>
    );
  }
}

Button.propTypes = {
  type: PropTypes.string
}


let btnBase = {
  borderRadius: 4,
  padding: 15,
  paddingTop: 0,
  paddingBottom:0,
  marginRight: 8,
  marginBottom: 12,
  cursor: 'pointer',
  backgroundColor: 'white',
  border: 0,
  borderStyle: 'solid',
  height: 32,
  textAlign: 'center',
  position: 'relative',
  lineHeight: 1.5,
  color: 'rgb(100, 100, 100)'
};

let primaryStyle = {
  backgroundColor: '#40a9ff',
  color: 'white'
};
let defaultStyle = {
  borderWidth: 1,
  borderColor: 'rgb(217, 217, 217)',
};
let dashed = {
  borderWidth: 1,
  borderColor: 'rgb(217, 217, 217)',
  borderStyle: 'dashed',
}
let danger = {
  borderWidth: 1,
  borderColor: 'rgb(217, 217, 217)',
  backgroundColor: '#f5f5f5',
  color: '#f5222d'
}

let styles = {
  primary: primaryStyle,
  default: defaultStyle,
  danger: danger,
  dashed: dashed,
}