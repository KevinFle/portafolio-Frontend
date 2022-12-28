import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/modelo/skills';
import { SkillsService } from 'src/app/services/skills.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skillss!: Skills[];
  constructor(private service: SkillsService, private router: Router) { }

  ngOnInit(): void {
    this.service.getSkills()
    .subscribe(data=>{
      this.skillss=data;
  })

}
Editar(skills:Skills):void{
  localStorage.setItem("id",skills.id.toString());
  this.router.navigate(["editarSkills"]);
}

Delete(skills:Skills){
  this.service.deleteSkills(skills)
  .subscribe(data=>{
    this.skillss=this.skillss.filter(p=>p!==skills);
    alert("Skill eliminado...");
  })
}
Nuevo(){
this.router.navigate(['skillsAgregar']);
}

hasRoute(route: string)
{
return this.router.url == route
}
}
