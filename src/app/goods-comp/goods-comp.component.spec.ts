import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsCompComponent } from './goods-comp.component';

describe('GoodsCompComponent', () => {
  let component: GoodsCompComponent;
  let fixture: ComponentFixture<GoodsCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodsCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
