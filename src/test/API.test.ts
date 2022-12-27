import axios from "axios";


test("Deve testar a API", async function (){
   
    axios({
        url:"http://localhost:3000",
        method:"get"
    }).then(data =>{
        expect(data).toHaveLength(5);
    })
})