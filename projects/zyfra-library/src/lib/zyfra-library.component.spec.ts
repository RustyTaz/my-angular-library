import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZyfraLibraryComponent } from './zyfra-library.component';

describe('ZyfraLibraryComponent', () => {
  let component: ZyfraLibraryComponent;
  let fixture: ComponentFixture<ZyfraLibraryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZyfraLibraryComponent]
    });
    fixture = TestBed.createComponent(ZyfraLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
