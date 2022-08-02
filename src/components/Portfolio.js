import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


var projects = [
    {
        id:1,
        title:"National Park Locator",
        description:"Make finding national parks fun",
        github:"https://github.com/Kevno5/ProjectOne",
        live:"https://kevno5.github.io/ProjectOne/",
        images:"/images/project1.png"
    },
    {
        id:3,
        title:"Cool Password Generator",
        description:"Generate your own password",
        github:"https://github.com/erikscbd/passwordGenerator-Homework--",
        live:"https://erikscbd.github.io/passwordGenerator-Homework--/",
        images:"/images/passwordGenerator.png"
    },
    {
        id:3,
        title:"Day Planner",
        description:"Plan your day with DayPlanner",
        github:"https://github.com/erikscbd/05-HW-dayPlanner",
        live:"https://erikscbd.github.io/05-HW-dayPlanner/",
        images:"/images/dayplanner.jpg"
    },
]


function Portfolio(){
   // const[project] = useState(projects)
    return(<main id="portfolio" className="container d-flex flex-wrap justify-content-evenly">
{projects.map((p,key) => {
    return(
        <Card key={key} style={{ width: '18rem' }}>
        <Card.Img variant="top" src = {process.env.PUBLIC_URL+p.images} />
        <Card.Body>
          <Card.Title>{p.title}</Card.Title>
          <Card.Text>
            {p.description}
          </Card.Text>
          <Button className="m-1" variant="secondary"><a className="text-white m-1" href={p.github}>Github</a></Button>
          <Button className="m-1" variant="secondary"><a className="text-white m-1" href={p.live}>Live</a></Button>
        </Card.Body>
      </Card>
    )
})}
        </main>)
}

export default Portfolio;