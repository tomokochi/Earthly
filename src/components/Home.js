import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {

    /* CSS */
    //outer div
    let mainDiv = {
      margin: 'auto',
      display: 'flex',
      paddingBottom: '4%',
      justifyContent: 'center'
    }

    //inner content div
    let mainContent = {
      maxWidth: '1024px',
      height: '100%',
      minHeight: '50vh',
      textAlign: 'center',
      display: 'flex',
      flexFlow: 'column nowrap',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: 30,
      border: '1px solid darkgrey',
      padding: '7% 20%',
      margin: '5%',
      marginBottom: 0,
      boxSizing: 'border-box'
    }

    let startButton = {
      border: 'none',
      backgroundColor: 'orange',
      borderRadius: 10,
      padding: '20px',
      fontSize: '1.7em',
      cursor: 'pointer',
      marginTop: '19px',
      letterSpacing: '3px'
    }

    return (
      <div className="main" style={mainDiv}>
        <div className="main-content" style={mainContent}>
          <h1>Welcome to Earthly!</h1>
          <h3>Learn about world rankings and countries</h3>
          <Link to={`/category`}><button style={startButton}>START</button></Link>
        </div>
      </div>

    );
  }
}

export default Home;
