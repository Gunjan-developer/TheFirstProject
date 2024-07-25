import { Component, NgModule, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button'; 
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , RouterLink , HeaderComponent ,CarouselModule ,ButtonModule, ImageModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit{
  title = 'PortFolio';

  ngOnInit() {
      
  }
}
