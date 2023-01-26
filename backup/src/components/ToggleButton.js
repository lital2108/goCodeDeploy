import React, { useState } from 'react';
// import ReactDOM from 'react-dom';

// class ToggleButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.buttonClick = this.buttonClick.bind(this);
//     this.state = {isOff: false};
//   }

//   buttonClick() {
//     this.setState({isOff:!this.state.isOff});
//   }

//   render() {
//     const { isOff } = this.state;
//     let buttonText=this.state.isOff? "ON":"OFF";
//     return (
//       <button onClick={this.buttonClick}>{buttonText}</button>
//     );
//   }
// }

// ReactDOM.render(
//   <ToggleButton />,
//   document.getElementById('root')
// );



function Example() {
    const [show, setShow] = useState(false);
  
    return (
      <div>
        
        {show && <p>Now you see me</p>}
        
        <button onClick={() => setShow(!show)}>
          {show ? 'Hide' : 'Show'}</button>
      </div>
    );
  }
export default Example;