import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecargasMostrarComponent } from './recargas-mostrar.component';

describe('RecargasMostrarComponent', () => {
  let component: RecargasMostrarComponent;
  let fixture: ComponentFixture<RecargasMostrarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecargasMostrarComponent]
    });
    fixture = TestBed.createComponent(RecargasMostrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
