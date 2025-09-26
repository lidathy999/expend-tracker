import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpendComponent } from './expend.component';

describe('ExpendComponent', () => {
  let component: ExpendComponent;
  let fixture: ComponentFixture<ExpendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpendComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
