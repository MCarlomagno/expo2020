
$('img[usemap]').rwdImageMaps();
$('img[usemap]').maphilight();

function main() {
    let data = {};
    data.alwaysOn = true;
    data.fillColor = '0000FF';
    data.fillOpacity = '0.3';
    data.stroke = false;
    $('area').data('maphilight', data).trigger('alwaysOn.maphilight');
}

function onMouseOverArea(element, event) {
    highlightArea(element);
    showTooltip(event, element);
}

function onMouseOutArea(element, event) {
    playdownArea(element);
    hideTooltip();
}

function highlightArea(element) {
    let data = {};
    data.alwaysOn = true;
    data.fillColor = '0000FF';
    data.fillOpacity = '0.7';
    data.stroke = false;
    $(`area[alt="${element.alt}"]`).data('maphilight', data).trigger('alwaysOn.maphilight');
}

function playdownArea(element) {
    let data = {};
    data.alwaysOn = true;
    data.fillColor = '0000FF';
    data.fillOpacity = '0.3';
    data.stroke = false;
    $(`area[alt="${element.alt}"]`).data('maphilight', data).trigger('alwaysOn.maphilight');
}

function showTooltip(event, element) {
    $('.tooltip').css({
        top: event.pageY - 20,
        left: event.pageX + 30
    }).show()

    $('#tooltip-title').text(element.alt)
}

function hideTooltip() {
    $('.tooltip').hide()
}

$(window).on('load', function() {
    main();
});