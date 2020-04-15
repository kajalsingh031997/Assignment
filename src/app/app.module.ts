import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { JobComponent } from './job/job.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomePageComponent } from './home-page/home-page.component';
// import { NO_ERRORS_SCHEMA } from 'blockly';

@NgModule({
  declarations: [
    AppComponent,
    JobComponent,
    NavigationComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component:HomePageComponent},
      {path: 'job', component: JobComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
  // schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }

