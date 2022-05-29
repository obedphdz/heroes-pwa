import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloExtraComponent } from './modulo-extra.component';

describe('ModuloExtraComponent', () => {
  let component: ModuloExtraComponent;
  let fixture: ComponentFixture<ModuloExtraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuloExtraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloExtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
