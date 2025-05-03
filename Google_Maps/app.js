function initialize(){
    var mapOptions ={
        zoom: 10,       //initialize center cordinates in start
        center: new google.maps.Latlng(40.7128,-74.0060),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        minZoom: 2
    };
}


//create a new map instance using provided options
var map = new google.maps.Map(document.getElementById('map'),mapOptions);


//create a info window display location info
var infoWindow = new google.maps.InfoWindow();

//create a marker for example: iran,zanjan
var marker = new google.maps.Marker({
    position: new google.api.LatLng(36.6769,40.4963),

    //attach the marker 
    map:map,
    
    title: 'Iran,Zanjan'


});

//add event listener
marker.addListener('click',function(){
    infoWindow.setContent(marker.title),
    infoWindow.open(map,marker);
})

google.maps.event.addDomListener(window,"resize",function(){
    map.setCenter(mapOptios.center);
})


//initialize map when widow loading finished
google.maps.event.addDomListener(window,'load',initialize);