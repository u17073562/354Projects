import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { IdIdimageComponent } from './id-idimage.component';

describe('IdIdimageComponent', () => {
  let component: IdIdimageComponent;
  let fixture: ComponentFixture<IdIdimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdIdimageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdIdimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
