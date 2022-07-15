ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map", {
        center: [48.466551,135.06871],
        zoom: 17,
        controls: [],
        behaviors: ["dblClickZoom"]
    });
    var placemark = new ymaps.Placemark([48.466551,135.06871], {
        
        balloonContent: '<div class="map-info"><p>+7 (4212) 464-250</p> <p class="map-info-two">Хабаровск, БЦ "Преображенский"</p>  <p class="map-info-two"> 680000, Тургенева, 26а, оф. 404</p> <p>info@da-development.com</p> <div/>'
    },
    {
        iconLayout: 'default#image',
        iconImageHref: 'Group 31.png',
        iconImageSize: [40, 40],
        iconImage0ffset: [-30, -57]
   
    }
    );
    myMap.geoObjects.add(placemark);
}

