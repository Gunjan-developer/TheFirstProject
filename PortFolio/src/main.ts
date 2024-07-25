import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
// import { RootModule } from './app/root.module';


// bootstrapApplication(RootModule, appConfig)
// bootstrapApplication(AppModule, appConfig)
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
