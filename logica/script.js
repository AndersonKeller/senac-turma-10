//In this simple assignment you are given a number
//  and have to make it negative. 
// But maybe the number is already negative?

// function makeNegative(num) {
//     // Code?
//     let aux = num
    
//     if(num>0){
//         console.log("entrou no if")
//         aux =num*(-1)
//         return aux
//     }else{
//         return aux
//     }
//   }

//   const result = makeNegative(-0.5)
//   console.log(result)


//operadores lógicos
// AND &&, OR ||, NOT !
// string = "palavra", number= 1, array =[], objeto ={chave:"valor"}
// boolean = true e false, null, undefined, NaN
// CONDICIONAIS
// SE = IF
// SENÃO = ELSE IF
// SE SENÃO = ELSE
// SWITCH CASE = 
// 
// LOOP(LAÇO DE REPETIÇÃO) = 
//FOR(começo;enquanto;incremento){
        //...lógica
//}
//WHILE (LOOP DE REPETIÇÃO){

//}
// LET = ELA PODE TER O VALOR ALTERADO
// CONST = NÃO PODE TER O SEU VALOR ALTERADO
// 
//FUNÇÃO
/*
    function nomedaFuncao(parametro){
        ...lógica
        pode ter 
        return
    }
    nomedafuncao(...parametro)
    const minhafuncao = ()=>{
        ...lógica
        pode ter return
    }
    minhafuncao()

    retorno implitico
    const minhafuncao = (item)=> item
*/

//Complete a função para que ela encontre a média 
// das três notas passadas 
// e retorne o valor da letra associada a essa nota.
//
// Os valores testados estão todos entre 0 e 100. Não há
//  necessidade de verificar valores negativos ou valores superiores a 100.

function getGrade (s1, s2, s3) {
    // Code here
    let media = (s1+s2+s3)/3
    
    if(media >= 90 ){
        return "A"
    }
    else if(media >= 80 && media < 90){
        return "B"
    }
    else if(media >=70 && media <80){
        return "C"
    }else if(media >=60 && media <70){
        return "D"
    }else{
        return "F"
    }
  }

  const resA = getGrade(95,90,93)
  const resB = getGrade(70,70,100)
  const resF = getGrade(44,55,52)
  console.log(resA,resB,resF)
  const lista = [1,4]
  for(let i = 0;i<lista.length;i++){
    
  }