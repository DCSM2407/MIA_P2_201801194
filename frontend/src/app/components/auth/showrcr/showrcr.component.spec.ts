import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowrcrComponent } from './showrcr.component';

describe('ShowrcrComponent', () => {
  let component: ShowrcrComponent;
  let fixture: ComponentFixture<ShowrcrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowrcrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowrcrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
