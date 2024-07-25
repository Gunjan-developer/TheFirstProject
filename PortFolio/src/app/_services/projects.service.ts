import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects : Project[] = [
    {
      id: 0,
      name: 'Sample Angular App',
      summary: 'Created project in Angular for static e-commerce website',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae dolorum beatae harum itaque non quo sit praesentium aut quis?',
      pictures:['https://images.unsplash.com/photo-1496449903678-68ddcb189a24?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
      // tags: ['Angular' , 'Typescript']
      tags: [Tag.ANGULAR , Tag.TYPESCRIPT]
    },
    {
      id: 1,
      name: 'Sample Python Project',
      summary: 'Python project that analyses stock market data.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae dolorum beatae harum itaque non quo sit praesentium aut quis?',
      pictures:['https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210420155051/WebMH.png', 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210420112859/IntExp.png', 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210419113249/gfg-new-logo-min.png'],
      // tags: ['Angular' , 'Typescript']
      tags: [Tag.ANGULAR , Tag.JAVASCRIPT]
    },
    {
      id: 2,
      name: 'Web API Project',
      summary: 'Web API project that was developed for a class project',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae dolorum beatae harum itaque non quo sit praesentium aut quis?',
      pictures:['https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210420155051/WebMH.png', 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210420112859/IntExp.png', 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210419113249/gfg-new-logo-min.png'],
      // tags: ['Angular' , 'Typescript']
      tags: [Tag.JAVASCRIPT , Tag.NODEJS]
    },
    {
      id: 3,
      name: 'Chrome Extension',
      summary: 'Developed a chrome extension that tracks the prices of furniture',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae dolorum beatae harum itaque non quo sit praesentium aut quis?',
      pictures:['https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210420155051/WebMH.png', 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210420112859/IntExp.png', 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210419113249/gfg-new-logo-min.png'],
      // tags: ['Angular' , 'Typescript']
      tags: [Tag.ANGULAR , Tag.TYPESCRIPT]
    },
    {
      id: 4,
      name: 'Chrome Extension',
      summary: 'Developed a chrome extension that tracks the prices of furniture',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae dolorum beatae harum itaque non quo sit praesentium aut quis?',
      pictures:['https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210420155051/WebMH.png', 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210420112859/IntExp.png', 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210419113249/gfg-new-logo-min.png'],
      // tags: ['Angular' , 'Typescript']
      tags: [Tag.ANGULAR , Tag.TYPESCRIPT]
    },
    {
      id: 5,
      name: 'Chrome Extension',
      summary: 'Developed a chrome extension that tracks the prices of furniture',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae dolorum beatae harum itaque non quo sit praesentium aut quis?',
      pictures:['https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210420155051/WebMH.png', 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210420112859/IntExp.png', 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210419113249/gfg-new-logo-min.png'],
      // tags: ['Angular' , 'Typescript']
      tags: [Tag.ANGULAR , Tag.TYPESCRIPT]
    }
  ]

  constructor() { }

  getProjects() {
    return this.projects;
  }

  getProjectById(id : number) : Project {
    let project = this.projects.find(project => project.id === id);
    // console.log("from the project-service : "+JSON.stringify(project));

    if(project == undefined || project == null) {
      throw new TypeError("There is no project that matches the id: "+id);
    }

    return project;
    
  }
}
