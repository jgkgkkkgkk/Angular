import { ComponentFixture, TestBed } from '@angular/core/testing';
import { newPageComponent } from './newPagecomponent';



describe('newPageComponent', () => {
  let component: newPageComponent;
  let fixture: ComponentFixture<newPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ newPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(newPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
