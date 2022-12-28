import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SobremiComponent } from './components/sobremi/sobremi.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ConocimientoLengComponent } from './components/conocimiento-leng/conocimiento-leng.component';
import { HeaderComponent } from './components/header/header.component';
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

const routes: Routes = 
[
  {path:'', redirectTo: '',component:AppComponent, pathMatch:'full'},
  {path:'login',component:LoginComponent, pathMatch: 'full'},
  {path:'sobre', component:SobremiComponent},
  {path:'modoEdicion', component:AppComponent},
  {path:'agregarExperiencia', component: ExperienciaAgregarComponent},
  {path:'skillsAgregar', component: SkillsAgregarComponent},
  {path:'estudiosAgregar', component: EducacionAgregarComponent},
  {path:'conocimientosAgregar',component:ConocimientoLengAgregarComponent},
  {path:'proyectoAgregar',component:ProyectosComponent},
  {path:'editarSobre', component: SobreEditarComponent},
  {path:'editarExperiencia', component: ExperienciaEditarComponent},
  {path:'editarSkills', component: SkillsEditarComponent},
  {path:'editarHeader', component:HeaderComponent},
  {path:'editarEstudios', component:EducacionEditarComponent},
  {path:'editarFooter', component:FooterEditarComponent},
  {path:'editarConocimientos',component:ConocimientoLengEditarComponent},
  {path:'editarProyecto',component:ProyectosComponent},
  {path:'estudios', component:EducacionComponent},
  {path:'proyectos',component:ProyectosComponent},
  {path:'conocimientos',component:ConocimientoLengComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routing = RouterModule.forRoot(routes);