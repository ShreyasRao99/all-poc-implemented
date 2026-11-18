import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GridFlex } from './grid-flex';

describe('GridFlex', () => {
  let component: GridFlex;
  let fixture: ComponentFixture<GridFlex>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridFlex],
    }).compileComponents();

    fixture = TestBed.createComponent(GridFlex);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
