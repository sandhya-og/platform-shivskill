//platform/src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core'; 
import { HttpClientModule } from '@angular/common/http';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule) 
  ]
}).catch(err => console.error(err));
