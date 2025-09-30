import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TastManager } from './tast-manager';

describe('TastManager', () => {
  let component: TastManager;
  let fixture: ComponentFixture<TastManager>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TastManager]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TastManager);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
