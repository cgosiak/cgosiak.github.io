import { HomeComponent } from "../components/home.component";
import { ErrorComponent } from "../components/error.component";

export const ROUTES = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    component: ErrorComponent
  }
];