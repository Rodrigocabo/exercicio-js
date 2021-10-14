class cliente{
    nome;
    cpf;
    
}

class contacorrente{
    agencia;
    saldo;

}

const cliente1 = new cliente();
const cliente2 = new cliente();

        cliente1.nome ="Carlos";
        cliente1.cpf = 11122233301;
       

        cliente2.nome = "keila";
        cliente2.cpf = 1112222233301;
       
const contacorrentecarlos = new contacorrente();
contacorrentecarlos.saldo =0;
contacorrentecarlos.agencia = 1001;
 console.log(contacorrentecarlos.saldo);
 contacorrentecarlos.saldo = 100;
 console.log(contacorrentecarlos.saldo);  
 let valorsacado= 200;
 if(contacorrentecarlos.saldo >= valorsacado){
    contacorrentecarlos -= valorsacado;
 contacorrentecarlos.saldo -= valorsacado;                                                                    
 }



         console.log(cliente1);
        console.log(cliente2);
