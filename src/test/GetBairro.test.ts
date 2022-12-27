import axios from "axios";


test("Deve trazer os onibus de um determinado terminal,sentido e localização", async function (){
   
    const terminalTest = 44;

    const resultCorrect = [
        {
          nome: 'UEMA-IPASE',
          descricao: 'BAIRRO',
          plataforma: 'A2',
          codigo: 'T070',
          caracteristica: 'Amarelo',
          ordem: 2
        }
      ]
  

    const body = JSON.stringify({
        sentido:"BAIRRO",
        local: "Cohab"
    })

    axios({
        url:`http://localhost:3000/terminal/${terminalTest}`,
        method:"get",
        data: {
            sentido: "BAIRRO",
            local: "Cohab"
        }
        
    }).then(data =>{
        expect(data.data).toEqual(resultCorrect)
    })
})