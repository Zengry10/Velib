





window.addEventListener('DOMContentLoaded', function(){
    let nameStationDOM = document.querySelector("#user-nameStation")
    let localisationDOM = document.querySelector("#user-localisation")
    let numberVelibAvailableDOM = document.querySelector("#user-numberVelib")
    let numberVelibUsedDOM = document.querySelector("#user-numberVelibUsed")
    let numberEbikeDOM = document.querySelector("#user-numberE-bikeAvailable")
    let numberMechanicalDOM = document.querySelector("#user-numberMechanicalAvailable")
    let barre = document.querySelector ('.file')




    fetch ("https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&q=stationcode=11105&facet=station_state&facet=kioskstate&facet=creditcard&facet=overflowactivation").then (function(response){
    response.json().then(function (json) {
        let nameStation = json["records"][0]["fields"]['name']
        let localisation = json["records"][0]["geometry"]["coordinates"][0]
        let numberVelib = json["records"][0]["fields"]["numbikesavailable"]
        let numberVelibTotal = json["records"][0]["fields"]["capacity"]
        let numberEbikeTotal = json["records"][0]["fields"]['ebike']
        let numberMechanicalTotal = json ["records"][0]["fields"]['mechanical']
        
        
        nameStationDOM.innerHTML = nameStation;
        localisationDOM.innerHTML = localisation;
        numberVelibAvailableDOM.innerHTML = numberVelib;
        numberVelibUsedDOM.innerHTML = numberVelibTotal;
        
       



        if (parseInt(numberVelib) < parseInt(numberVelibTotal)*0.3){
            numberVelibAvailableDOM.style.color = "red"
        }
  

        else {
            numberVelibAvailableDOM.style.color = "green"
            console.log (numberVelib)
        }

        pourcentage_Ebike = (parseInt(numberEbikeTotal) *100) / parseInt(numberVelib) 
        pourcentage_Mechanical = (parseInt(numberMechanicalTotal) *100) / parseInt(numberVelib)
        console.log (pourcentage_Ebike)


        numberEbikeDOM.innerHTML = pourcentage_Ebike;
        numberMechanicalDOM.innerHTML = pourcentage_Mechanical;


        barre_velib = (parseInt(numberVelib) / parseInt(numberVelibTotal))*100

        console.log(barre_velib)
    
        barre.value = barre_velib;

        


        


        
        
        
  







    })
    })
})


