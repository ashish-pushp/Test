import React from 'react';
import '../app.css';
import data from '../Util/sample.json';
import Header from '../Components/header'
import SubHeader from "../Components/subHeader"
import SelectionBox from "../Components/selectionBox"
import Footer from "../Components/footer"
import Layout from "./layout"
import ShowStream from "./series"
class Home extends React.Component {
    state = {
        showMovies : false,
        showSeries : false,
        showSelection : true,
        moviesData : [],
        seriesData : [],
        isLoading : false,
    }

    async componentDidMount() {
        const { seriesData, moviesData } = this.state;
        {
            await data.entries.map((item, index) => {
                if(item.programType === "series")  {
                    seriesData.push(item)
                    this.setState({
                        seriesData
                    })
                } else {
                    moviesData.push(item)
                    this.setState({
                        moviesData
                    })
                }
            })
        }
        // fetch('../Util/sample.json').then(response => {
        //     console.log('response === ', response.json())
        //     return response.json();
        //   }).then(data => {
        //     console.log(data);
        //   }).catch(err => {
        //   });
        
    }



    onSeriesPressed = async () => {
        this.setState({
            showMovies : false,
            showSeries : true,
            showSelection : false,
            isLoading : false
        })
   }

    onMoviesPressed = async () => {
        this.setState({
            showMovies : true,
            showSeries : false,
            showSelection : false,
            isLoading : false
        })
    }

  render(){
      const { isLoading, showMovies, showSeries, showSelection, seriesData, moviesData } = this.state;
    return (
      <Layout>
        <SubHeader title = {'Popular Streaming'}/>
        {
            showSelection &&
            <div className = "body-container">
                <div className = "body-wrapper">
                    <SelectionBox 
                    title = {'Series'}
                    subtitle = {'Popular Series'}
                    onPress = {this.onSeriesPressed}
                    />
                    <SelectionBox 
                    title = {'Movies'}
                    subtitle = {'Popular Movies'}
                    onPress = {this.onMoviesPressed}
                    />
                </div>
            </div>
        }
        {
            showSeries && 
            <ShowStream data = {seriesData} />
        }
        {
            showMovies && 
            <ShowStream data = {moviesData} />
        }
      </Layout>
    );
  }
}

export default Home;
