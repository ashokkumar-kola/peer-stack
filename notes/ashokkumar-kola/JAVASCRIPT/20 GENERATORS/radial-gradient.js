function radialGradient(){
    // SHAPE
    var shape = document.getElementById("shape").value
    console.log(shape)

    // SIZE
    var size = document.getElementById("size").value
    console.log(size)

    // POSITION
    var position = document.getElementById("position").value
    console.log(position)

    // COLOURS
    var startColor = document.getElementById("startColor").value
    console.log(startColor)
    var midColor = document.getElementById("midColor").value
    console.log(midColor)
    var endColor = document.getElementById("endColor").value
    console.log(endColor)

    // RADIAL GRADIENT BACKGROUND
    var body = document.getElementById("body")
    var radialBackground = document.getElementById("radial-background")

    // RADIAL BACKGROUND VALUE
    var result = `radial-gradient(${shape} ${size}px at ${position}, ${startColor}, ${midColor}, ${endColor})`
    body.style.backgroundImage = result
    radialBackground.style.backgroundImage = result

    // document.body.style.backgroundImage = "radial-gradient(circle sizepx at position, red %, green %, yellow %)"
}