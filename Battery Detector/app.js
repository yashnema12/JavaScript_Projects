document.addEventListener('DOMContentLoaded',function(){
initBattery();

function initBattery(){
    const batteryLiquid = document.querySelector(".Bliquid");
    const batteryStatus = document.querySelector(".Bstatus");
    const Bpercentage = document.querySelector(".Bpercentage");

    navigator.getBattery().then((batt)=>{//API -> battery status
    updateBattery = () =>{
    let level = Math.floor(batt.level * 100);
    Bpercentage.innerHTML = level +"%";
    batteryLiquid.style.height = `${parseInt(batt.level*100)}
    %`;
    
    if(level == 100){
        batteryStatus.innerHTML = `Battery Full <i class="ri-battery-2-fill green-color></i>">`;
        batteryLiquid.style.height = "103%";

    }else if(level <= 20 & !batt.charging){
        batteryStatus.innerHTML = `Low charge <i class="ri-plug-line animated-red animated-red"></i>`;
    }
    else if(batt.charging){
        batteryStatus.innerHTML =`Charging ... <i
        class="ri-flashlight-line animated-green"></i>`
    }
    else{
        batteryStatus.innerHTML="";
    }
    if(level <=20){
        batteryLiquid.classList.add("gradient-color-red");
        batteryLiquid.classList.remove("gradient-color-green",
            "gradient-color-orange","gradient-color-yellow")
    }
    else if(level <= 80){
        batteryLiquid.classList.add("gradient-color-yellow");
        batteryLiquid.classList.remove("gradient-color-green",
            "gradient-color-orange","gradient-color-red");
    }else{
        batteryLiquid.classList.add("gradient-color-green");
        batteryLiquid.classList.remove("gradient-color-red",
            "gradient-color-orange","gradient-color-yellow");
            }
         }
         updateBattery();       //CC -> fires when plug/unplugged
         batt.addEventListener("chargingchange",()=>{updateBattery()});
         batt.addEventListener("levelchange",()=>{updateBattery()});
                                //LL -> fire when battery level change
        
        //CC & LL events giving live updates so not need to refresh
    })
}
})