import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowrvrComponent } from './showrvr.component';

describe('ShowrvrComponent', () => {
  let component: ShowrvrComponent;
  let fixture: ComponentFixture<ShowrvrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowrvrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowrvrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
