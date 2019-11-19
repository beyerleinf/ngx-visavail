import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxVisavailComponent } from './ngx-visavail.component';

describe('NgxVisavailComponent', () => {
  let component: NgxVisavailComponent;
  let fixture: ComponentFixture<NgxVisavailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxVisavailComponent],
    });

    fixture = TestBed.createComponent(NgxVisavailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('general', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
});
