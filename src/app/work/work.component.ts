import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'work',
  templateUrl: 'work.component.html',
  styleUrls: ['work.component.css']
})
export class WorkComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  works: Object[] = [
    {
      company: "Penta Consulting",
      title: "Front End Developer",
      date: {
        start: "Jun 2016",
        end: "Present"
      },
      description: "Working alongside the designer team implementing the designs, also developing custom solutions to address team necessities.",
      techs: ["HTML5", "CSS3", "Javascript", "jQuery", "Bootstrap", "Wordpress", "PHP", "Git", "Bitbucket", "Grunt", "Vagrant", "Agile", "Kanban"]
    },
    {
      company: "Hotel Ardora",
      title: "Front End Developer",
      date: {
        start: "Feb 2016",
        end: "Feb 2106"
      },
      description: "Designing and developing a new one page application for the company.",
      techs: ["HTML5", "CSS3", "Javascript", "jQuery", "Bootstrap", "SVGs"]
    },
    {
      company: "MyMoneyPlatform",
      title: "Front End Developer",
      date: {
        start: "Sept 2015",
        end: "Dec 2015"
      },
      description: "Working with the Front End team on the overall design of the web application and personally on the responsiveness on all kinds of devices.",
      techs: ["HTML5", "CSS3", "Javascript", "Bootstrap", "Wordpress"]
    },  
    {
      company: "Moveastic",
      title: "Front End Developer",
      date: {
        start: "Sept 2014",
        end: "Dec 2014"
      },
      description: "I had several responsibilities but mainly worked as Web Developer, developing Single Page Applications.",
      techs: ["HTML5", "CSS3", "JavaScript"]
    }
  ];
}
