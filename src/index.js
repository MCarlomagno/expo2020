
$('img[usemap]').rwdImageMaps();
$('img[usemap]').maphilight();

function main() {
        let data = {};
        data.alwaysOn = true;
        data.fillColor = '0000FF';
        data.fillOpacity = '0.3';
        data.strokeWidth = '0.1';
        $('area').data('maphilight', data).trigger('alwaysOn.maphilight');
}

function onMouseOverArea(element) {
    let data = {};
    data.alwaysOn = false;
    data.fillColor = '0000FF';
    data.fillOpacity = '0.1';
    data.strokeWidth = '0.01';
    $(`area[alt="${element.alt}"]`).data('maphilight', data).trigger('alwaysOn.maphilight');
}

function onMouseOutArea(element) {
    let data = {};
    data.alwaysOn = true;
    data.fillColor = '0000FF';
    data.fillOpacity = '0.3';
    data.strokeWidth = '0.1';
    $(`area[alt="${element.alt}"]`).data('maphilight', data).trigger('alwaysOn.maphilight');
}

$(window).on('load', function() {
    main();
});