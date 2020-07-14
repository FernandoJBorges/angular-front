import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Clientes } from "../clientes";
import { ClientesService } from "../../clientes.service";

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.scss']
})
export class ClienteListaComponent implements OnInit {
  clientes:Clientes[]=[];
  clienteSelecionado:Clientes;
  msgError:String;
  msgSuccess:String;
  constructor(  private service: ClientesService, 
                private router: Router ) 
              { }

  ngOnInit(): void {
    this.service.getClientes().subscribe(resp => this.clientes = resp)
  }

  novoCadastro(){
    this.router.navigate(['/cliente-form']);
  }

  preparaDelecao(clientes:Clientes){
    this.clienteSelecionado = clientes;
  }

  deletarCliente(){
    console.log('deletando....')
    console.log(this.clienteSelecionado)
   this.service.deletar(this.clienteSelecionado).subscribe(resp => 
              {
                this.msgSuccess = 'Registro deletado com sucesso!!';
                this.ngOnInit();
            }, error => 
              this.msgError = 'Erro ao deletar registro..'
              );
   
  }
}
