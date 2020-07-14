import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesFormComponent } from "./clientes-form/clientes-form.component";
import { ClienteListaComponent } from "./cliente-lista/cliente-lista.component";


const routes: Routes = [
  { path : 'cliente-form', component : ClientesFormComponent},
  { path : 'cliente-form/:id', component : ClientesFormComponent},
  { path : 'cliente-lista', component : ClienteListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
