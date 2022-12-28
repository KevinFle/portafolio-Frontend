import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/modelo/skills';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-skills-editar',
  templateUrl: './skills-editar.component.html',
  styleUrls: ['./skills-editar.component.css']
})
export class SkillsEditarComponent implements OnInit {
  skills: Skills = new Skills();
  constructor(private router:Router, private service: SkillsService) { }

  ngOnInit(): void {
    this.Editar();
  }
  Editar(){
    let id=localStorage.getItem("id");
    this.service.getSkillsId(+Number(id))
    .subscribe(data=>{
      this.skills=data;
    })
  }
  Actualizar(skills:Skills){
    this.service.updateSkills(skills)
    .subscribe(data=>{
    this.skills=data;
    alert("Se actualizo con Exito");
    this.router.navigate(["/modoEdicion"]);
    })
}

}
