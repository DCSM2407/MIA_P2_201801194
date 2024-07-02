import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearautoComponent } from './crearauto.component';

describe('CrearautoComponent', () => {
  let component: CrearautoComponent;
  let fixture: ComponentFixture<CrearautoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearautoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearautoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
