import { HomeComponent } from "../components/home.component";
import { ContactComponent } from "../components/contact.component";
import { AboutComponent } from "../components/about.component";
import { ProjectsComponent } from "../components/projects.component";
import { ErrorComponent } from "../components/error.component";

export const ROUTES = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '**',
    component: ErrorComponent
  }
];