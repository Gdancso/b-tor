function fris(){
    fetch("http://localhost:3000/butor")
    .then(x => x.json())
    .then(y => butor_megjelenit(y));
} 
fris()

function butor_megjelenit(adatok){
    console.log(adatok);

    var sz="";
    for (elem of adatok){
        sz+='<tr>';
        sz+='   <td>'+elem.nev+'</td>';
        sz+='   <td>'+elem.ar+'</td>';
        sz+='   <td>'+elem.meret+'</td>';
        sz+='   <td>'+elem.szin+'</td>';
        sz+='   <td>'+elem.anyag+'</td>';
        sz+='  </tr>';

    }
    document.getElementById("tablazat").innerHTML=sz;



}




function butor_felvitel()
{
    var bemenet={
        
        bevitel1:document.getElementById("bevitel1").value,
        bevitel2:document.getElementById("bevitel2").value,
        bevitel3:document.getElementById("bevitel3").value,
        bevitel4:document.getElementById("bevitel4").value,
        bevitel5:document.getElementById("bevitel5").value

    }


    fetch("http://localhost:3000/felvitel", {
        method: "POST",
        body: JSON.stringify(bemenet),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      }
    
    )
    .then(x => x.text())
    .then(y => {alert(y);fris()});
    
}

