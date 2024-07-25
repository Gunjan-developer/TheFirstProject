import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
// import { RootModule } from './app/root.module';

// const bootstrap = () => bootstrapApplication(RootModule, config);
const bootstrap = () => bootstrapApplication(AppComponent, config);
// const bootstrap = () => bootstrapApplication(AppModule, config);

export default bootstrap;
