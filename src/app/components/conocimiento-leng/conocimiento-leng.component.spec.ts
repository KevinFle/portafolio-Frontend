import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConocimientoLengComponent } from './conocimiento-leng.component';
describe('ConocimientoLengComponent', () => {
  let component: ConocimientoLengComponent;
  let fixture: ComponentFixture<ConocimientoLengComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConocimientoLengComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConocimientoLengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
