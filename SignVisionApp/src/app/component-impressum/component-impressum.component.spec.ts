import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentImpressumComponent } from './component-impressum.component';

describe('ComponentImpressumComponent', () => {
  let component: ComponentImpressumComponent;
  let fixture: ComponentFixture<ComponentImpressumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentImpressumComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentImpressumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
