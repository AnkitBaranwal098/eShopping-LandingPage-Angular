import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBoxForTwoWayDataBindingComponent } from './search-box-for-two-way-data-binding.component';

describe('SearchBoxForTwoWayDataBindingComponent', () => {
  let component: SearchBoxForTwoWayDataBindingComponent;
  let fixture: ComponentFixture<SearchBoxForTwoWayDataBindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchBoxForTwoWayDataBindingComponent]
    });
    fixture = TestBed.createComponent(SearchBoxForTwoWayDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
