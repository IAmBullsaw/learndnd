import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersheetComponent } from './charactersheet.component';

describe('CharactersheetComponent', () => {
  let component: CharactersheetComponent;
  let fixture: ComponentFixture<CharactersheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharactersheetComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
