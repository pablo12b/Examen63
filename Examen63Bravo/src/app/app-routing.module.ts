import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { RecargaComponent } from './pages/recarga/recarga.component';
import { RecargasMostrarComponent } from './pages/recargas-mostrar/recargas-mostrar.component';

const routes: Routes = [
  { path: '', redirectTo: 'paginas/cliente', pathMatch: 'full' }, // Redirige la ruta raíz a la página de registro
  {path:"paginas/cliente", component: ClienteComponent},
  {path:"paginas/recarga", component: RecargaComponent},
  {path:"paginas/hechas", component: RecargasMostrarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
