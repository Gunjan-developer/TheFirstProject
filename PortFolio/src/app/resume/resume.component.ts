import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

  constructor(private renderer : Renderer2){

  }

  downloadFile() {
    try{

      const link = this.renderer.createElement('a');
      link.setAttribute('target','_blank');
      link.setAttribute('href' , '../../assets/Resume/D_Resume.pdf');
      link.setAttribute('download','D_Resume.pdf');
      link.click();
      link.remove();
    }
    catch{

    }
  }

}
