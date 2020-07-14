import { Component, OnInit } from '@angular/core';
import { Clientes } from "../clientes";
import { ClientesService } from "../../clientes.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.scss']
})
export class ClientesFormComponent implements OnInit {

  cliente:Clientes;
  errors:String[];
  id:number;
  msgSuccess:String[];

  constructor(
              private service: ClientesService,  
              private router: Router, 
              private routeActive: ActivatedRoute 
              ) { 
              this.cliente = new Clientes();
  }

  ngOnInit(): void {
    let params : Observable<Params> = this.routeActive.params;
    if(params){
        params.subscribe(params => {
          this.id = params["id"];
          if(this.id){
              this.service.getClienteByID(this.id).subscribe(resp => this.cliente = resp, errosResponse => this.cliente = new Clientes());  
          }
      })
    }
  }
  voltarListagem(){
    this.router.navigate(['/cliente-lista']);
  }
  onSubmit(){
   if(this.id){
      console.log('Atualizando registro');
      this.service.atualizar(this.cliente).subscribe(
        resp => {
           this.errors = [];
           this.msgSuccess = ['Registro atualizado com sucesso!!']
           }, errorReponse => {
            this.msgSuccess = null;
            this.errors = ['Erro ao atualizar o Cliente'];
         }
       );
    }else{
      console.log('Criando registro');
      this.service.salvar(this.cliente).subscribe(
        resp => {
           this.errors = [];
           this.cliente = resp;
           this.msgSuccess = ['Registro salvo com sucesso!!']
         }, errorReponse => {
           this.errors = errorReponse.error.error; 
           this.msgSuccess = null;
           console.log(errorReponse.error.error); 
         }
       );
    }
  }
}