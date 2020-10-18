window.addEventListener('load', () => {
    const canvas = document.querySelector("canvas");
    const context = canvas.getContext("2d");

    // const penColor = document.getElementById('color').value
    // const penWidth = document.getElementById('pen-tip').value


    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    let drawing = false;

    function startDraw(e){
        drawing = true;
        draw(e);
    }
    function endDraw(){
        drawing = false;
        context.beginPath(); //restart a new seperate line
    }
    function draw(e){
        if(!drawing) return;
        context.lineWidth = "5"; // THIS CHANGES THE LINE THICKNESS penWidth
        context.strokeStyle = "#000000"; // THIS CHANGES THE LINE COLOR penColor
        context.lineCap = "round";
        // console.log(e)
        context.lineTo(e.clientX, e.clientY); //X 518, Y 343
        // context.lineTo(e.screenX, e.screenY); //X 519, Y 455
        // context.lineTo(e.x, e.y); //X 514, Y 251

        context.stroke();        
    }

    canvas.addEventListener('mousedown', startDraw);
    canvas.addEventListener('mouseup', endDraw);
    canvas.addEventListener('mousemove', draw);

    //BUTTON TO CLEAR THE CANVAS
    const clearCanvas = document.getElementById("clear-canvas");
    
    clearCanvas.addEventListener('click', function(){
        // console.log("Clear Canvas")
        context.clearRect(0,0, canvas.width, canvas.height)
    })

})