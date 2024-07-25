import { Component, Input } from '@angular/core';
import { Project } from '../_models/Project';
import { CommonModule } from '@angular/common';


declare var $ : any;

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {

  // before 
  // @Input() projectName : string = "";
  // after;
  @Input() project = {} as Project;

  thefirstPhoto = "../../assets/Carousel/la.jpg";
  thesecondPhoto = "../../assets/Carousel/chicago.jpg";
  thethirdPhoto = "../../assets/Carousel/ny.jpg";

  openModal() {
    $('#myModal').modal('show');
  }

  closeModal() {
    $('#myModal').modal('hide');
  }


}
