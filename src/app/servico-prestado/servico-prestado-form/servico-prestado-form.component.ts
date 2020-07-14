import { Component, OnInit } from '@angular/core';
import { Clientes } from "../../clientes/clientes";
import { ClientesService } from "../../clientes.service";
import { ServicoPrestado } from "../servicoPrestado";
import { ServicoPrestadoService } from '../../servico-prestado.service';

@Component({
  selector: 'app-servico-prestado-form',
  templateUrl: './servico-prestado-form.component.html',
  styleUrls: ['./servico-prestado-form.component.scss']
})
export class ServicoPrestadoFormComponent implements OnInit {
  errors:String[];
  msgSuccess:String[];
  clientes:Clientes[]=[];
  servico:ServicoPrestado;
  constructor(private clientesService:ClientesService, private servicoPrestadoService:ServicoPrestadoService) { }

  ngOnInit(): void {
    this.clientesService.getClientes().subscribe(resp=> this.clientes = resp);
    this.servico = new ServicoPrestado();
  }

  onSubmit(){
    this.servicoPrestadoService.salvar(this.servico)
    .subscribe(
    resp => {
       this.errors = [];
       this.msgSuccess = ['Registro atualizado com sucesso!!'];
       this.servico = new ServicoPrestado();
       }, errorReponse => {
        this.msgSuccess = null;
        this.errors = ['Erro ao atualizar Prestação de Serviço'];
     }
   );
  }
}
