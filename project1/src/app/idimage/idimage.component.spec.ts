import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdimageComponent } from './idimage.component';

describe('IdimageComponent', () => {
  let component: IdimageComponent;
  let fixture: ComponentFixture<IdimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdimageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
