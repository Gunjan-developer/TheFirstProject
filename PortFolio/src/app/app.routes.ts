import { Routes } from '@angular/router';
// import { HeaderComponent } from './header/header.component';
// import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {path : 'home', title : 'Home' ,component: HomeComponent},
    {path : 'portfolio', title : 'Portfolio', component: PortfolioComponent},
    {path : 'resume', title : 'Resume', component: ResumeComponent},
    {path : 'contact', title : 'Contact', component : ContactComponent},
    // {path : '**', title : 'PortFolio', component : AppComponent , pathMatch : 'full'}

];
