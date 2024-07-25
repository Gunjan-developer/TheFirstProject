import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../_models/Project';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  ProfilePhoto  = "../../assets/profile_2.png";
  ProfilePhotoAlt : string = "my_Photo";

  featuredProject = {} as Project;

  constructor(private titleService : Title , private projectService : ProjectsService) {
    // this.titleService.setTitle('Your Name - Home');
  }

  ngOnInit() {
      this.featuredProject = this.projectService.getProjectById(0);
  }

}
