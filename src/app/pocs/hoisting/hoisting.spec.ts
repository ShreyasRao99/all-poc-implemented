import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Hoisting } from './hoisting';

describe('Hoisting', () => {
  let component: Hoisting;
  let fixture: ComponentFixture<Hoisting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hoisting],
    }).compileComponents();

    fixture = TestBed.createComponent(Hoisting);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
