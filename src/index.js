$('img[usemap]').rwdImageMaps();
$('img[usemap]').maphilight();


const MAP_HIGHLIGHT_INACTIVE = {
    alwaysOn: true,
    fillColor: '0000FF',
    fillOpacity: '0.2',
    stroke: false
}

const MAP_HIGHLIGHT_ACTIVE = {
    alwaysOn: true,
    fillColor: '0000FF',
    fillOpacity: '0.5',
    stroke: false
}

function main() {
    $('area').data('maphilight', MAP_HIGHLIGHT_INACTIVE).trigger('alwaysOn.maphilight');
}

function onMouseOverArea(element, event) {
    showHighlightArea(element);
    showTooltip(event, element);
}

function onMouseOutArea(element, event) {
    hideHighlightArea(element);
    hideTooltip();
}

function showHighlightArea(element) {
    $(`area[alt="${element.alt}"]`)
        .data('maphilight', MAP_HIGHLIGHT_ACTIVE)
        .trigger('alwaysOn.maphilight');
}

function hideHighlightArea(element) {
    $(`area[alt="${element.alt}"]`)
        .data('maphilight', MAP_HIGHLIGHT_INACTIVE)
        .trigger('alwaysOn.maphilight');
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