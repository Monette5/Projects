function updateBorders(color) {
    var hexColor = "transparent";
    if(color) {
        hexColor = color.toHexString();
    }
    $("#docs-content").css("border-color", hexColor);
}

$(function() {

$(".ColorAlphaPicker").spectrum({
    showAlpha: true,
    showInput: false,
    showPalette: true,
	preferredFormat: 'rgb',
    palette: [
        ["rgba(255, 128, 0, .9)", "rgba(255, 128, 0, .5)"],
        ["red", "green", "blue"],
        ["hsla(25, 50, 75, .5)", "rgba(100, .5, .5, .8)"]
    ]
    //change: updateBorders
});

$(".ColorPicker").spectrum({
    showAlpha: false,
    showInput: false,
    showPalette: true,
	preferredFormat: 'rgb',
    palette: [
        ["rgba(255, 128, 0, .9)", "rgba(255, 128, 0)"],
        ["red", "green", "blue"],
        ["hsla(25, 50, 75, .5)", "rgba(100, .5, .5)"]
    ]
    //change: updateBorders
});

});

