// import React, { Component } from "react";

// class About extends Component {
//   render() {
//     if (this.props.sharedBasicInfo) {
//       var profilepic = "images/" + this.props.sharedBasicInfo.image;
//     }
//     if (this.props.resumeBasicInfo) {
//       var sectionName = this.props.resumeBasicInfo.section_name.about;
//       var hello = this.props.resumeBasicInfo.description_header;
//       var about = this.props.resumeBasicInfo.description;
//     }

//     return (
//       <section id="about">
//         <div className="col-md-12">
//           <h1 style={{ color: "black" }}>
//             <span>{sectionName}</span>
//           </h1>
//           <div className="row center mx-auto mb-5">
//             <div className="col-md-4 mb-5 center">
//               <div className="polaroid">
//                 <span style={{ cursor: "auto" }}>
//                   <img
//                     height="300px"
//                     src={profilepic}
//                     alt="Avatar placeholder"
//                   />

//                 </span>
//               </div>
//             </div>

//             <div className="col-md-8 center">
//               <div className="col-md-10">
//                 <div className="card">
//                   <div className="card-header">
//                     <span
//                       className="iconify"
//                       data-icon="emojione:red-circle"
//                       data-inline="false"
//                     ></span>{" "}
//                     &nbsp;{" "}
//                     <span
//                       className="iconify"
//                       data-icon="twemoji:yellow-circle"
//                       data-inline="false"
//                     ></span>{" "}
//                     &nbsp;{" "}
//                     <span
//                       className="iconify"
//                       data-icon="twemoji:green-circle"
//                       data-inline="false"
//                     ></span>
//                   </div>
//                   <div
//                     className="card-body font-trebuchet text-justify ml-3 mr-3"
//                     style={{
//                       height: "auto",
//                       fontFamily:"Arial",
//                       fontSize: "150%",
//                       lineHeight: "210%",
//                     }}
//                   >
//                     <br />
//                     <span className="wave">{hello} </span>
//                     <br />
//                     <br />
//                     {about}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }
// }

// export default About;

import React from "react";

const About = ({ resumeBasicInfo, sharedBasicInfo }) => {
  if (!resumeBasicInfo || !sharedBasicInfo) {
    // Add some error handling or return a message for missing data
    return (
      <section id="about">
        <div className="row">
          <div className="twelve columns">
            <p>Error: Missing data for 'About Me' section</p>
          </div>
        </div>
      </section>
    );
  }

  const { image, about, resumeDownload } = resumeBasicInfo;
  const { name, address, email } = sharedBasicInfo;

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          {image && (
            <img
              className="profile-pic"
              src={`images/${image}`}
              alt="Profile Pic"
            />
          )}
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>

          {about && <p>{about}</p>}

          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                {name && <span>{name}</span>}
                {address && <br />}
                {address && <span>{address}</span>}
                {email && <br />}
                {email && <span>{email}</span>}
              </p>
            </div>

            <div className="columns download">
              {resumeDownload && (
                <p>
                  <a
                    href={`resume/${resumeDownload}`}
                    className="button"
                    download
                  >
                    <i className="fa fa-download"></i>Download Resume
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
