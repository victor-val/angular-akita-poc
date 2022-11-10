import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetNameComponent } from './set-name.component';

describe('SetNameComponent', () => {
  let component: SetNameComponent;
  let fixture: ComponentFixture<SetNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
