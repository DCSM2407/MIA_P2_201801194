import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearrecepcionComponent } from './crearrecepcion.component';

describe('CrearrecepcionComponent', () => {
  let component: CrearrecepcionComponent;
  let fixture: ComponentFixture<CrearrecepcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearrecepcionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearrecepcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
