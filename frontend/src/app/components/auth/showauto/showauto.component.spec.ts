import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowautoComponent } from './showauto.component';

describe('ShowautoComponent', () => {
  let component: ShowautoComponent;
  let fixture: ComponentFixture<ShowautoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowautoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowautoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
