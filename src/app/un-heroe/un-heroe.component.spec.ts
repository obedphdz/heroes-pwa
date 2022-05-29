import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnHeroeComponent } from './un-heroe.component';

describe('UnHeroeComponent', () => {
  let component: UnHeroeComponent;
  let fixture: ComponentFixture<UnHeroeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnHeroeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
