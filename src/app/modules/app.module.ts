import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { HomeComponent } from "../components/home.component";
import { ErrorComponent } from "../components/error.component";
import { ContactComponent } from "../components/contact.component";
import { AboutComponent } from "../components/about.component";
import { ProjectsComponent } from "../components/projects.component";

import { RepoService } from '../services/repo.service';

@NgModule({
  declarations: [
    HomeComponent,
    ErrorComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    RepoService
  ],
  bootstrap: [
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent]
})
export class AppModule { }
