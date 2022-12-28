import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SobremiComponent } from './components/sobremi/sobremi.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ConocimientoLengComponent } from './components/conocimiento-leng/conocimiento-leng.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { CargarScriptsService } from './services/cargar-scripts.service';
import { Routes } from '@angular/router';
import { FontAwesomeModule, FaIconLibrary  } from '@fortawesome/angular-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from './services/login.service';
import { ConocimientosService } from './services/conocimientos.service';
import { HeaderService } from './services/header.service';
import { HeaderEditarComponent } from './components/header-editar/header-editar.component';
import { SobreEditarComponent } from './components/sobre-editar/sobre-editar.component';
import { ExperienciaAgregarComponent } from './components/experiencia-agregar/experiencia-agregar.component';
import { ExperienciaEditarComponent } from './components/experiencia-editar/experiencia-editar.component';
import { EducacionAgregarComponent } from './components/educacion-agregar/educacion-agregar.component';
import { EducacionEditarComponent } from './components/educacion-editar/educacion-editar.component';
import { FooterEditarComponent } from './components/footer-editar/footer-editar.component';
import { SkillsEditarComponent } from './components/skills-editar/skills-editar.component';
import { SkillsAgregarComponent } from './components/skills-agregar/skills-agregar.component';
import { ConocimientoLengAgregarComponent } from './components/conocimiento-leng-agregar/conocimiento-leng-agregar.component';
import { ConocimientoLengEditarComponent } from './components/conocimiento-leng-editar/conocimiento-leng-editar.component';
import { ProyectosAgregarComponent } from './components/proyectos-agregar/proyectos-agregar.component';
import { ProyectosEditarComponent } from './components/proyectos-editar/proyectos-editar.component';

const routes: Routes = 
[
  {path:'', redirectTo: '',component:AppComponent, pathMatch:'full'},
  {path:'login',component:LoginComponent, pathMatch: 'full'},
  {path:'sobre', component:SobremiComponent},


  {path:'estudios', component:EducacionComponent},
  {path:'proyectos',component:ProyectosComponent},

  {path:'conocimientos',component:ConocimientoLengComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SobremiComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ConocimientoLengComponent,
    ProyectosComponent,
    FooterComponent,
    LoginComponent,
    HeaderEditarComponent,
    SobreEditarComponent,
    ExperienciaAgregarComponent,
    ExperienciaEditarComponent,
    EducacionAgregarComponent,
    EducacionEditarComponent,
    FooterEditarComponent,
    SkillsEditarComponent,
    SkillsAgregarComponent,
    ConocimientoLengAgregarComponent,
    ConocimientoLengEditarComponent,
    ProyectosAgregarComponent,
    ProyectosEditarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [CargarScriptsService,
  ConocimientosService,
  LoginService,
  HeaderService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
 
    library.addIcons(faPencil);
  }

 }
