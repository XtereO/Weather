import React, { useState, useEffect } from 'react';
import { HashRouter, NavLink, Route, Switch } from "react-router-dom"
import "./bootstrap.min.css";
import logo from './logo.svg';
import './App.css';
import Clock from "./UI/Bricks/Clock";
import Header from "./UI/Header/Header"
import Aside from "./UI/Aside/Aside"
import Footer from "./UI/Footer/Footer"
import withHeader from './HOC/withHeader';
import withSuspense from "./HOC/withSuspense";
import News from "./UI/Article/News/ContainerNews"
const Coordinate=React.lazy(():any=>import("./UI/Article/Coordinate/ContainerCoordinate"))
const Weather = React.lazy((): any => import("./UI/Article/Weather/ContainerWeather"))
const Pollution = React.lazy(():any=>import("./UI/Article/Pollution/ContainerPollution"))
const Main = React.lazy(():any=>import("./UI/Article/Main/ContainerMain"))

function App() {
  let [isComputer, setPlatform] = useState(true)//True-computer ,False-phone
  let [choiceMode, setChoiceMode] = useState(false)//True-aside on,False-aside off
  let [height,setHeight]=useState(0)
  let setMode = () => {
    setChoiceMode(!choiceMode)
  }
  let setModeFalse=()=>{
    setChoiceMode(false)
  }
  let changePlatform = () => {
    if ((window.innerHeight != height)) {setHeight(window.innerHeight)}
    if (window.innerWidth > 760) { setPlatform(true) }//SetComputerPlatform
    else { setPlatform(false) }//SetMobilePlatform
  }
  useEffect(() => {
    window.addEventListener("resize", changePlatform)
    changePlatform()
    setHeight(window.innerHeight)
  },[])

  return (
      <div className="body">
        {isComputer ?
          <div  className={ 
            (choiceMode ? "AppEditMode" : "App") }
          onClick={setMode} style={{height:height}}
          >
            <Aside show={choiceMode} />
          </div> :
          <div className="p-2">
            <div className="PhoneAside">
              <div>
                <button className="btn btn-outline-primary w-100" onClick={setMode}>
                  Menu
                </button>
              </div>
              <div>
              </div>
              <div>
                <NavLink to="/Main" style={{ textDecoration: "none" }}>
                  <button className="btn btn-outline-primary right w-100">
                    Main
              </button>
                </NavLink>
              </div>
            </div>
            <div className={choiceMode ? "mt-2" : ""}>
              {choiceMode && <Aside show={choiceMode}/>}
            </div>
          </div>
        }
        <div onClick={setModeFalse} className={isComputer ? (!choiceMode ? "ArticleEditClose" : "ArticleEditOpen") : ""} 
        style={{float: (isComputer ? "left" : "none"),width:isComputer ? (choiceMode ? "85%" : "95%") : "100%"}} >
          <Switch>
          <Route path="/Weather" render={() => withSuspense(Weather)} />
          <Route path="/Coordinate"  render={()=>withSuspense(Coordinate)} />
          <Route path="/Pollution" render={()=>withSuspense(Pollution)}/>
          <Route path="/Main" render={()=>withSuspense(Main)} />
          <Route path="*" render={()=>withSuspense(Main)} />
          </Switch>
          <div className="Footer">
            <Footer />
          </div>
        </div>
      </div>
  );
}

export default App;
