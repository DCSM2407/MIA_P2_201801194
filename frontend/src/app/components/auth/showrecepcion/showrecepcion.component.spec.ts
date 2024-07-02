import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowrecepcionComponent } from './showrecepcion.component';

describe('ShowrecepcionComponent', () => {
  let component: ShowrecepcionComponent;
  let fixture: ComponentFixture<ShowrecepcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowrecepcionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowrecepcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
