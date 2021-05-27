import React, { useState} from "react";
import Portfolio from "../components/Portfolio";
//import Modal from "../components/Modal";
import MyVerticallyCenteredModal from "../components/MyVerticallyCenteredModal"

function Portfolios() {
  const [ modal, setModal ] = useState({
    title: "",
    image: "",
    alt: "",
    description: "",
    contributions: "",
    technologies: "",
    website: ""
  });
  const [modalShow, setModalShow] = useState(false);

  let projectsArray =[
    {
      title: "Employee Directory",
      image: "images/Directory.gif",
      alt: "Employee Directory gif"
    },
    {
      title: "Budget Tracker",
      image: "images/dash.png",
      alt: "Budget Tracker dashboard"
    },
    {
      title: "Fitness Tracker",
      image: "images/running.gif",
      alt: "Fitness Tracker gif"
    },
    {
      title: "Pet Services",
      image: "images/snapshot.png",
      alt: "App so that animal owners can book services for their animal",
      description: "With this site users are able to make an account, schedule appointments through a clickable calendar and then even view upcoming appointments.",
      contributions: "On this project I worked on the routes for the pages and database to help link the information from page to page and I also designed the schedule modal and worked the logic for the calendar.",
      technologies: "Handlebars, HTML, CSS, JavaScript, mysql, express, Node.js, sequelize.",
      website: "https://radiant-basin-77736.herokuapp.com/"
    },
    {
      title: "Tech Blog",
      image: "images/workingvideo.gif",
      alt: "a tech blog that requires login/signup"
    },
    {
      title: "Team Generator",
      image: "images/team.gif",
      alt: "team generator"
    },
    {
      title:  "E-Commerce",
      image: "images/E-commerce.gif",
      alt: "backend tool to track e-commerce inventory"
    },
    {
      title: "Employee Tracker",
      image: "images/employee.gif",
      alt: "backend node employee tracker"
    },
    {
      title: "Note Taker",
      image: "images/notes.gif",
      alt: "Simple note taking site"
    },
    {
      title: "Earworm",
      image: "images/Earworm-copy.gif",
      alt: "Earworm Music Site gif"
    },
    {
      title: "Weather Dashboard",
      image: "images/site-copy.gif",
      alt: "Weather Dashboard gif"
    },
    {
      title: "Daily Calander",
      image: "images/calander-copy.gif",
      alt: "Daily Calander gif"
    },
    {
      title: "Code Quiz",
      image: "images/Code-Quiz-copy.gif",
      alt: "Coding Quiz gif"
    },
    {
      title: "Password Generator",
      image: "images/password-copy.gif",
      alt: "Password Generator gif"
    },
    {
      title: "Flume Fanpage",
      image: "images/FlumePage.jpg",
      alt: "Fanpage for Flume"
    }
  ];

  function openModal(event) {
    event.preventDefault();
    console.log(event.target.value);
    setModalShow(true);
    for (let i = 0; i < projectsArray.length; i++) {
      if (event.target.value === projectsArray[i].title) {
        setModal({
          title: projectsArray[i].title,
          image: projectsArray[i].image,
          alt: projectsArray[i].alt,
          description: projectsArray[i].description,
          contributions: projectsArray[i].contributions,
          technologies: projectsArray[i].technologies,
          website: projectsArray[i].website
        })
      }
    }
  }

  return (

    <main id="content-wrap">
      <MyVerticallyCenteredModal
        show={modalShow}
        modal={modal}
      />
      <div className="container my-border col-lg-10 col-md-11 col-sm-11 col-xs-10">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <h1>Portfolio</h1>
          </div>
        </div>
        <Portfolio
          projectsArray={projectsArray}
          openModal={openModal}
        />
      </div>
    </main>
  )
}

export default Portfolios;