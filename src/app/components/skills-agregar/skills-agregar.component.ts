import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/modelo/skills';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-skills-agregar',
  templateUrl: './skills-agregar.component.html',
  styleUrls: ['./skills-agregar.component.css']
})
export class SkillsAgregarComponent implements OnInit {
  skills:Skills = new Skills();
  constructor(private router:Router, private service:SkillsService) { }

  ngOnInit(): void {
  }
  Guardar(){
    this.service.createSkills(this.skills)
    .subscribe(data=>{
      alert("La habilidad se agregó con exito");
      this.router.navigate(["/modoEdicion"]);
    })
}
}
