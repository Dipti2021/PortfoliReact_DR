// import React, { Component } from "react";
// import ProjectDetailsModal from "./ProjectDetailsModal";

// class Projects extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       deps: {},
//       detailsModalShow: false,
//     };
//   }

//   render() {
//     let detailsModalShow = (data) => {
//       this.setState({ detailsModalShow: true, deps: data });
//     };

//     let detailsModalClose = () => this.setState({ detailsModalShow: false });
//     if (this.props.resumeProjects && this.props.resumeBasicInfo) {
//       var sectionName = this.props.resumeBasicInfo.section_name.projects;
//       var projects = this.props.resumeProjects.map(function (projects) {
//         return (
//           <div
//             className="col-sm-12 col-md-6 col-lg-4"
//             key={projects.title}
//             style={{ cursor: "pointer" }}
//           >
//             <span className="portfolio-item d-block">
//               <div className="foto" onClick={() => detailsModalShow(projects)}>
//                 <div>
//                   <img
//                     src={projects.images[0]}
//                     alt="projectImages"
//                     height="230"
//                     style={{marginBottom: 0, paddingBottom: 0, position: 'relative'}}
//                   />
//                   <span className="project-date">{projects.startDate}</span>
//                   <br />
//                   <p className="project-title-settings mt-3">
//                     {projects.title}
//                   </p>
//                 </div>
//               </div>
//             </span>
//           </div>
//         );
//       });
//     }

//     return (
//       <section id="portfolio">
//         <div className="col-md-12">
//           <h1 className="section-title" style={{ color: "black" }}>
//             <span>{sectionName}</span>
//           </h1>
//           <div className="col-md-12 mx-auto">
//             <div className="row mx-auto">{projects}</div>
//           </div>
//           <ProjectDetailsModal
//             show={this.state.detailsModalShow}
//             onHide={detailsModalClose}
//             data={this.state.deps}
//           />
//         </div>
//       </section>
//     );
//   }
// }

// export default Projects;

import React, { useState } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";

const Projects = (props) => {
  const [detailsModalShow, setDetailsModalShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState({});

  const showDetailsModal = (data) => {
    setSelectedProject(data);
    setDetailsModalShow(true);
  };

  const closeDetailsModal = () => setDetailsModalShow(false);

  if (props.resumeProjects && props.resumeBasicInfo) {
    var sectionName = props.resumeBasicInfo.section_name.projects;
    var projects = props.resumeProjects.map((project) => (
      <div
        className="col-sm-12 col-md-6 col-lg-4"
        key={project.title}
        style={{ cursor: "pointer" }}
      >
        <span className="portfolio-item d-block">
          <div className="foto" onClick={() => showDetailsModal(project)}>
            <div>
              <img
                src={project.images[0]}
                alt="projectImages"
                height="230"
                style={{
                  marginBottom: 0,
                  paddingBottom: 0,
                  position: "relative",
                }}
              />
              <span className="project-date">{project.startDate}</span>
              <br />
              <p className="project-title-settings mt-3">{project.title}</p>
            </div>
          </div>
        </span>
      </div>
    ));
  }

  return (
    <section id="portfolio">
      <div className="col-md-12">
        <h1 className="section-title" style={{ color: "black" }}>
          <span>{sectionName}</span>
        </h1>
        <div className="col-md-12 mx-auto">
          <div className="row mx-auto">{projects}</div>
        </div>
        <ProjectDetailsModal
          show={detailsModalShow}
          onHide={closeDetailsModal}
          data={selectedProject}
        />
      </div>
    </section>
  );
};

export default Projects;
