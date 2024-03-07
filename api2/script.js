async function getApiData(){
    try{
        let response = await fetch("https://cataas.com/api/cats?tags=cute");
        let data = await response.json();
    
        console.log("data: ",data);

        let cataas = " ";

        data.forEach((cats)=>{
          cataas += `<tr>
          <td>${cats._id}</td>
          <td>${cats.mimetype}</td>
          <td>${cats.size}</td>
          <td>${cats.tags}</td>
          </tr>`
        })

        document.getElementById("bodyData").innerHTML = cataas




    }catch(err){
        console.log("ERROR: ",err)
    }
}