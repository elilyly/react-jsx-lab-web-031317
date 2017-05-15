import React from 'react' // import react
class RegistrationForm extends React.Component {
  render() {
    return (
      <form className="form">
        <input type="text"></input>
        <input type="password"></input>
        <button type="submit" value="Submit"/>
        </form>
      )
    }
  }



  // export default () => {
  //   return <div></div>
  // }  // export a function that returns a JSX element

export default RegistrationForm;
