// variables
let theThumbnails = document.querySelectorAll('#buttonHolder img'),
    gameBoard = document.querySelector('.puzzle-board'),
    pzlPieces = document.querySelectorAll('.puzzle-pieces img'),
    dropZones = document.querySelectorAll('.drop-zone'),
    resetPieces = document.querySelector('.reset-pieces');

    console.log(theThumbnails);

// functions

function changeImageSet() {
    gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgref}.jpg)`;
    
    dropZones.forEach(zone => {
        while (zone.firstChild) {
            zone.removeChild(zone.firstChild);
        }
    });

    puzzlePieces = document.querySelector('.puzzle-pieces');
    pzlPieces.forEach(piece => {
        puzzlePieces.appendChild(piece);
    });
}

function allowDrag(event) {
    console.log('started dragging an image');

    event.dataTransfer.setData('draggedEl', this.id);
}

function allowDragOver(event) {
    event.preventDefault();
    console.log('dragging over a drop zone');
}

function allowDrop(event) {
    event.preventDefault();
    console.log('Attempting to drop');
    console.log('Drop zone children:', this.children.length);

 
    if (this.children.length === 0 || !this.querySelector('img')) {

        let droppedElId = event.dataTransfer.getData('draggedEl');
        let droppedEl = document.querySelector(`#${droppedElId}`);
        this.appendChild(droppedEl);

    } else {
        console.log('Drop zone is occupied');
    }
}



// event listeners

theThumbnails.forEach(thumbnail => thumbnail.addEventListener('click', changeImageSet));
pzlPieces.forEach(piece => piece.addEventListener('dragstart', allowDrag));

dropZones.forEach(zone => {
    zone.addEventListener('dragover', allowDragOver);
    zone.addEventListener('drop', allowDrop);
})
