// import React, { Component } from "react";
// import $ from "jquery";
// import "./App.scss";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import About from "./components/About";
// //import Navbar from "./components/Navigation";

// import Projects from "./components/Projects";
// import Skills from "./components/Skills";

// class App extends Component {

//   constructor(props) {
//     super();
//     this.state = {
//       foo: "bar",
//       resumeData: {},
//       sharedData: {},
//     };
//   }

//   applyPickedLanguage(pickedLanguage, oppositeLangIconId) {
//     this.swapCurrentlyActiveLanguage(oppositeLangIconId);
//     document.documentElement.lang = pickedLanguage;
//     var resumePath =
//       document.documentElement.lang === window.$primaryLanguage
//         ? `res_primaryLanguage.json`
//         : `res_secondaryLanguage.json`;
//     this.loadResumeFromPath(resumePath);
//   }

//   swapCurrentlyActiveLanguage(oppositeLangIconId) {
//     var pickedLangIconId =
//       oppositeLangIconId === window.$primaryLanguageIconId
//         ? window.$secondaryLanguageIconId
//         : window.$primaryLanguageIconId;
//     document
//       .getElementById(oppositeLangIconId)
//       .removeAttribute("filter", "brightness(40%)");
//     document
//       .getElementById(pickedLangIconId)
//       .setAttribute("filter", "brightness(40%)");
//   }

//   componentDidMount() {
//     this.loadSharedData();
//     this.applyPickedLanguage(
//       window.$primaryLanguage,
//       window.$secondaryLanguageIconId
//     );
//   }

//   loadResumeFromPath(path) {
//     $.ajax({
//       url: path,
//       dataType: "json",
//       cache: false,
//       success: function (data) {
//         this.setState({ resumeData: data });
//       }.bind(this),
//       error: function (xhr, status, err) {
//         alert(err);
//       },
//     });
//   }

//   loadSharedData() {
//     $.ajax({
//       url: `portfolio_shared_data.json`,
//       dataType: "json",
//       cache: false,
//       success: function (data) {
//         this.setState({ sharedData: data });
//         document.title = `${this.state.sharedData.basic_info.name}`;
//       }.bind(this),
//       error: function (xhr, status, err) {
//         alert(err);
//       },
//     });
//   }

//   render() {
//     return (
//       <div>
//         <Header sharedData={this.state.sharedData.basic_info} />
//         <div className="col-md-12 mx-auto text-center language">
//           <div
//             onClick={() =>
//               this.applyPickedLanguage(
//                 window.$primaryLanguage,
//                 window.$secondaryLanguageIconId
//               )
//             }
//             style={{ display: "inline" }}
//           >
//             <span
//               className="iconify language-icon mr-5"
//               data-icon="twemoji-flag-for-flag-canada"
//               data-inline="false"
//               id={window.$primaryLanguageIconId}
//             ></span>
//           </div>
//           <div
//             onClick={() =>
//               this.applyPickedLanguage(
//                 window.$secondaryLanguage,
//                 window.$primaryLanguageIconId
//               )
//             }
//             style={{ display: "inline" }}
//           >
//             <span
//               className="iconify language-icon"
//               data-icon="twemoji-flag-for-flag-france"
//               data-inline="false"
//               id={window.$secondaryLanguageIconId}
//             ></span>
//           </div>
//         </div>

//         <About
//           resumeBasicInfo={this.state.resumeData.basic_info}
//           sharedBasicInfo={this.state.sharedData.basic_info}
//         />
//         <Projects
//           resumeProjects={this.state.resumeData.projects}
//           resumeBasicInfo={this.state.resumeData.basic_info}
//         />
//         <Skills
//           sharedSkills={this.state.sharedData.skills}
//           resumeBasicInfo={this.state.resumeData.basic_info}
//         />

//         <Footer sharedBasicInfo={this.state.sharedData.basic_info} />
//       </div>
//     );
//   }
// }

// export default App;

import React, { useState, useEffect, useCallback } from "react";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  const [state, setState] = useState({
    foo: "bar",
    resumeData: {},
    sharedData: {},
  });

  const applyPickedLanguage = useCallback(
    (pickedLanguage, oppositeLangIconId) => {
      swapCurrentlyActiveLanguage(oppositeLangIconId);
      document.documentElement.lang = pickedLanguage;
      const resumePath =
        document.documentElement.lang === window.$primaryLanguage
          ? `res_primaryLanguage.json`
          : `res_secondaryLanguage.json`;
      loadResumeFromPath(resumePath);
    },
    []
  );

  const swapCurrentlyActiveLanguage = (oppositeLangIconId) => {
    const pickedLangIconId =
      oppositeLangIconId === window.$primaryLanguageIconId
        ? window.$secondaryLanguageIconId
        : window.$primaryLanguageIconId;
    document
      .getElementById(oppositeLangIconId)
      .removeAttribute("filter", "brightness(40%)");
    document
      .getElementById(pickedLangIconId)
      .setAttribute("filter", "brightness(40%)");
  };

  const loadResumeFromPath = useCallback(async (path) => {
    try {
      const response = await fetch(path);
      const data = await response.json();
      setState((prevState) => ({ ...prevState, resumeData: data }));
    } catch (error) {
      alert(error.message);
    }
  }, []);

  const loadSharedData = useCallback(async () => {
    try {
      const response = await fetch(`portfolio_shared_data.json`);
      const data = await response.json();
      setState((prevState) => ({ ...prevState, sharedData: data }));
      document.title = `${data.basic_info.name}`;
    } catch (error) {
      alert(error.message);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      await loadSharedData();
      applyPickedLanguage(
        window.$primaryLanguage,
        window.$secondaryLanguageIconId
      );
    };

    fetchData();

    // Rest of your useEffect code
  }, [applyPickedLanguage, loadSharedData]);

  return (
    <div>
      <Header sharedData={state.sharedData.basic_info} />
      <div className="col-md-12 mx-auto text-center language">
        <div
          onClick={() =>
            applyPickedLanguage(
              window.$primaryLanguage,
              window.$secondaryLanguageIconId
            )
          }
          style={{ display: "inline" }}
        >
          <span
            className="iconify language-icon mr-5"
            data-icon="twemoji-flag-for-flag-canada"
            data-inline="false"
            id={window.$primaryLanguageIconId}
          ></span>
        </div>
        <div
          onClick={() =>
            applyPickedLanguage(
              window.$secondaryLanguage,
              window.$primaryLanguageIconId
            )
          }
          style={{ display: "inline" }}
        >
          <span
            className="iconify language-icon"
            data-icon="twemoji-flag-for-flag-france"
            data-inline="false"
            id={window.$secondaryLanguageIconId}
          ></span>
        </div>
      </div>

      <About
        resumeBasicInfo={state.resumeData.basic_info}
        sharedBasicInfo={state.sharedData.basic_info}
      />
      <Projects
        resumeProjects={state.resumeData.projects}
        resumeBasicInfo={state.resumeData.basic_info}
      />
      <Skills
        sharedSkills={state.sharedData.skills}
        resumeBasicInfo={state.resumeData.basic_info}
      />

      <Footer sharedBasicInfo={state.sharedData.basic_info} />
    </div>
  );
};

export default App;
