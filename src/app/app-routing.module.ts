import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProjectComponent } from './project/project.component';
import { ServiceComponent } from './service/service.component';


const routes: Routes = [
  {
    path:'', 
    component: HomeComponent,
    children:[
      {
        path:'Nosotros', component: AboutComponent
      },
      {
        path:'Servicios', component: ServiceComponent
      },
      {
        path:'Casos', component: ProjectComponent
      },
      {
        path:'Contacto', component: ContactComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
