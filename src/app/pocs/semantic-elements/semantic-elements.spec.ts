import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SemanticElements } from './semantic-elements';

describe('SemanticElements', () => {
  let component: SemanticElements;
  let fixture: ComponentFixture<SemanticElements>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SemanticElements],
    }).compileComponents();

    fixture = TestBed.createComponent(SemanticElements);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
