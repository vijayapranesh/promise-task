async function getApiData(){
    try{
        let response = await fetch("https://api.citybik.es/v2/networks");
        let data = await response.json();
    
        console.log("data: ",data);

        let citybik = " ";

        data.networks.forEach((network)=>{
          citybik += `<tr>
          <td>${network.company}</td>
          <td>${network.href}</td>
          <td>${network.id}</td>
          <td>${network.location.city}</td>
          <td>${network.name}</td>
          </tr>`
        })

        document.getElementById("bodyData").innerHTML = citybik




    }catch(err){
        console.log("ERROR: ",err)
    }
}