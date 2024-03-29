// import React, { Component } from "react";
// import Typical from "react-typical";
// import Switch from "react-switch";
// import { Route, Redirect, HashRouter } from "react-router-dom";
// import Navigation from "../components/Navigation";
// import About from "../components/About.js"
// import Projects from "../components/Projects.js";
// import Footer from '../components/Footer.js';
// import Resume from '../components/Resume.js';

// class Header extends Component {
//   titles = [];

//   constructor() {
//     super();
//     this.state = { checked: false };
//     this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
//   }

//   onThemeSwitchChange(checked) {
//     this.setState({ checked });
//     this.setTheme();
//   }

//   setTheme() {
//     var dataThemeAttribute = "data-theme";
//     var body = document.body;
//     var newTheme =
//       body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
//     body.setAttribute(dataThemeAttribute, newTheme);
//   }

//   render() {
//     if (this.props.sharedData) {
//       var name = this.props.sharedData.name;
//       this.titles = this.props.sharedData.titles.map(x => [x.toUpperCase(), 1500]).flat();
//     }

//     const HeaderTitleTypeAnimation = React.memo(() => {
//       return <Typical className="title-styles" steps={this.titles} loop={50} />
//     }, (props, prevProp) => true);

//     return (
//       <HashRouter>

//         <header id="home" style={{ height: window.innerHeight - 140, display: 'block' }}>
//           <Navigation />
//           <div className="row aligner" style={{ height: '100%' }}>
//             <div className="col-md-12">
//               <div>
//                 <span className="iconify header-icon" data-icon="icon-park:diamond" data-inline="false"></span>
//                 <br />
//                 <h1 className="mb-0">
//                   <Typical steps={[name]} wrapper="p" />
//                 </h1>
//                 <div className="title-container">
//                   <HeaderTitleTypeAnimation />
//                 </div>
//                 <Switch
//                   checked={this.state.checked}
//                   onChange={this.onThemeSwitchChange}
//                   offColor="#635f52"// slider changes
//                   onColor="#d9d76c"
//                   className="react-switch mx-auto"
//                   width={100}
//                   height={40}
//                   uncheckedIcon={
//                     <span
//                       className="iconify"
//                       data-icon="twemoji:first-quarter-moon-face"
//                       data-inline="false"
//                       style={{
//                         display: "block",
//                         height: "100%",
//                         fontSize: 30,
//                         textAlign: "end",
//                         marginLeft: "20px",
//                         //color: "red",//"#353239",
//                       }}
//                     ></span>
//                   }
//                   checkedIcon={
//                     <span
//                       className="iconify"
//                       data-icon="noto-v1:sun-with-face"
//                       data-inline="false"
//                       style={{
//                         display: "block",
//                         height: "100%",
//                         fontSize: 25,
//                         textAlign: "end",
//                         marginLeft: "10px",
//                         color: "#253210",
//                       }}
//                     ></span>
//                   }
//                   id="icon-switch"
//                 />
//               </div>
//             </div>

//           </div>

//         </header>

//         <div className="content">
//           <Route exact path="/" render={() => <Redirect to="/about" />} />
//           <Route path="/About" component={About} />
//           <Route path="/Projects" component={Projects} />
//           <Route path="/Footer" component={Footer} />
//           <Route path="/Resume" component={Resume} />
//         </div>
//       </HashRouter>
//     );
//   }

// }

// export default Header;

import React, { useState, useEffect, memo } from "react";
import { Route, Redirect, HashRouter } from "react-router-dom";
import Navigation from "../components/Navigation";
import About from "../components/About.js";
import Projects from "../components/Projects.js";
import Footer from "../components/Footer.js";
import Resume from "../components/Resume.js";
import Typical from "react-typical";
import Switch from "react-switch";

const Header = ({ sharedData }) => {
  const [checked, setChecked] = useState(false);
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    if (sharedData) {
      setTitles(sharedData.titles.map((x) => [x.toUpperCase(), 1500]).flat());
    }
  }, [sharedData]);

  const onThemeSwitchChange = (checked) => {
    setChecked(checked);
    setTheme();
  };

  const setTheme = () => {
    const dataThemeAttribute = "data-theme";
    const body = document.body;
    const newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  };

  const HeaderTitleTypeAnimation = memo(
    () => {
      return <Typical className="title-styles" steps={titles} loop={50} />;
    },
    (props, prevProp) => true
  );

  return (
    <HashRouter>
      <header
        id="home"
        style={{ height: window.innerHeight - 140, display: "block" }}
      >
        <Navigation />
        <div className="row aligner" style={{ height: "100%" }}>
          <div className="col-md-12">
            <div>
              <span
                className="iconify header-icon"
                data-icon="icon-park:diamond"
                data-inline="false"
              ></span>
              <br />
              <h1 className="mb-0">
                <Typical steps={[sharedData?.name || ""]} wrapper="p" />
              </h1>
              <div className="title-container">
                <HeaderTitleTypeAnimation />
              </div>
              <Switch
                checked={checked}
                onChange={onThemeSwitchChange}
                offColor="#635f52" // slider changes
                onColor="#d9d76c"
                className="react-switch mx-auto"
                width={100}
                height={40}
                uncheckedIcon={
                  <span
                    className="iconify"
                    data-icon="twemoji:first-quarter-moon-face"
                    data-inline="false"
                    style={{
                      display: "block",
                      height: "100%",
                      fontSize: 30,
                      textAlign: "end",
                      marginLeft: "20px",
                    }}
                  ></span>
                }
                checkedIcon={
                  <span
                    className="iconify"
                    data-icon="noto-v1:sun-with-face"
                    data-inline="false"
                    style={{
                      display: "block",
                      height: "100%",
                      fontSize: 25,
                      textAlign: "end",
                      marginLeft: "10px",
                      color: "#253210",
                    }}
                  ></span>
                }
                id="icon-switch"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="content">
        <Route exact path="/" render={() => <Redirect to="/about" />} />
        <Route path="/About" component={About} />
        <Route path="/Projects" component={Projects} />
        <Route path="/Footer" component={Footer} />
        <Route path="/Resume" component={Resume} />
      </div>
    </HashRouter>
  );
};

export default Header;
