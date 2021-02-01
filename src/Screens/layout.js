import React from 'react';
import '../app.css';
import data from '../Util/sample.json';
import Footer from "../Components/footer"
import Header from "../Components/header"
class Layout extends React.Component {
  render(){
    return (
      <div className="app">
        <Header title = {'DEMO Streaming'} />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
