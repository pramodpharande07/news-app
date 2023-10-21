import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
// class based components
export default class App extends Component {
  pageSize = 6;
  apiKey = process.env.REACT_APP_NEWS_API

  state = {
    progress : 0
  }
  setProgress = (progress)=>{
    this.setState({progress: progress}) 
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color="#f11946"
            progress={this.state.progress}
            // onLoaderFinished={() => setProgress(0)}
          />
          {/* Top Loading bar  */}

          <Routes>
            <Route
              path="/"
              element={
                <News setProgress={this.setProgress} 
                  apiKey={this.apiKey}
                  key="general"
                  pageSize={this.pageSize}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              path="/business"
              element={
                <News setProgress={this.setProgress} 
                  apiKey={this.apiKey}
                  key="business"
                  pageSize={this.pageSize}
                  country="in"
                  category="business"
                />
              }
            />
            <Route
              path="/entertainment"
              element={
                <News setProgress={this.setProgress} 
                  apiKey={this.apiKey}
                  key="entertainment"
                  pageSize={5}
                  country="in"
                  category="entertainment"
                />
              }
            />
            <Route
              path="/general"
              element={
                <News setProgress={this.setProgress} 
                  apiKey={this.apiKey}
                  key="general"
                  pageSize={this.pageSize}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              path="/health"
              element={
                <News setProgress={this.setProgress} 
                  apiKey={this.apiKey}
                  key="health"
                  pageSize={this.pageSize}
                  country="in"
                  category="health"
                />
              }
            />
            <Route
              path="/science"
              element={
                <News setProgress={this.setProgress} 
                  apiKey={this.apiKey}
                  key="science"
                  pageSize={this.pageSize}
                  country="in"
                  category="science"
                />
              }
            />
            <Route
              path="/sports"
              element={
                <News setProgress={this.setProgress} 
                  apiKey={this.apiKey}
                  key="sports"
                  pageSize={this.pageSize}
                  country="in"
                  category="sports"
                />
              }
            />
            <Route
              path="/technology"
              element={
                <News setProgress={this.setProgress} 
                  apiKey={this.apiKey}
                  key="technology"
                  pageSize={this.pageSize}
                  country="in"
                  category="technology"
                />
              }
            />
          </Routes>
        </Router>
        {/* here we give key for rerendering our items without giving keys it does not go in another section ex. if we are at technology page and try to render at sports page just by cliking on sports it does not possible without giving keys to it {without keys if we reload the page then it works } */}
      </div>
    );
  }
}
