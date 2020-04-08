var image = new Image();
image.onload = divideImage;
image.src = 'background.png';

function divideImage() {
    var imagePieces = [];
    for(var x = 0; x < numColsToCut; ++x) {
        for(var y = 0; y < numRowsToCut; ++y) {
            var canvas = document.getElementById('puzzlearea');
            canvas.width = puzzlepiece.width;
            canvas.height = puzzlepiece.height;
            var context = canvas.getContext('2d');
            context.drawImage(image, x * widthOfOnePiece, y * heightOfOnePiece, widthOfOnePiece, heightOfOnePiece, 0, 0, canvas.width, canvas.height);
            imagePieces.push(canvas.toDataURL());
        }
    }

    // imagePieces now contains data urls of all the pieces of the image

    // load one piece onto the page
    var anImageElement = document.getElementById('myImageElementInTheDom');
    anImageElement.src = imagePieces[0];
}
