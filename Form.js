setInterval(()=>{
    var today = new Date();
    var HRS = today.getHours()
    if(SEC<10){
        document.getElementById('hrs').innerHTML= `0${HRS}<sub>hrs</sub>`
    }else{
        document.getElementById('hrs').innerHTML= `${HRS}<sub>hrs</sub>`
    }
    
    if(HRS<12){
    document.getElementById('ampm').innerHTML= 'Am'
    }else{
    document.getElementById('ampm').innerHTML= 'Pm'
    }

    var MIN = today.getMinutes()
    document.getElementById('min').innerHTML= `${MIN}<sub>mins</sub>`

    var SEC = today.getSeconds()
    if(SEC<10){
        document.getElementById('sec').innerHTML= `0${SEC}<sub>s</sub>`
    }else{
        document.getElementById('sec').innerHTML= `${SEC}<sub>s</sub>`
    }


    const arrayDay = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
    var DAY = arrayDay[today.getDay()]
    document.getElementById('day').innerHTML= DAY

    var DT = today.getDate()
    document.getElementById('date').innerHTML= DT

    const arrayMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var MONTH = arrayMonths[today.getMonth()]
    document.getElementById('month').innerHTML= MONTH

    const year = today.getFullYear()
    document.getElementById('year').innerHTML= year
    console.log(DT)
},1000);