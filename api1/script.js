async function getApiData(){
    try{
        let response = await fetch("https://emojihub.yurace.pro/api/all");
        let data = await response.json();
    
        console.log("data: ",data);

        let emojihub = " ";

        data.forEach((all)=>{
          emojihub += `<tr>
          <td>${all.name}</td>
          <td>${all.category}</td>
          <td>${all.group}</td>
          <td>${all.htmlCode}</td>
          <td>${all.unicode}</td>
          </tr>`
        })

        document.getElementById("bodyData").innerHTML = emojihub




    }catch(err){
        console.log("ERROR: ",err)
    }
}