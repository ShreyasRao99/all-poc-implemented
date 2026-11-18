import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PocNav } from './poc-nav';

describe('PocNav', () => {
  let component: PocNav;
  let fixture: ComponentFixture<PocNav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PocNav],
    }).compileComponents();

    fixture = TestBed.createComponent(PocNav);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
