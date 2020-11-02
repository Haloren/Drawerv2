window.addEventListener('load', () => {
    const canvas = document.querySelector('canvas');
    const context = canvas.getContext('2d');

    // const penColor = document.getElementById('color').value
    // const penWidth = document.getElementById('pen-tip').value

    canvas.width = 400; //400 = 800px
    canvas.height = 400;
    
    context.fillRect(100, 100, 100, 100);
    

    //BUTTON TO CLEAR THE CANVAS
    const clearCanvas = document.getElementById("clear-canvas");
    
    clearCanvas.addEventListener('click', function(){
        // console.log("Clear Canvas")
        context.clearRect(0,0, canvas.width, canvas.height)
    })

})

// Web Sockets for a shared Canvas - https://www.youtube.com/watch?v=bjULmG8fqc8