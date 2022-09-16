let duration = 1000;

let blocksContainer = document.querySelector(".memory-game-blocks");

let blocks = Array.from(blocksContainer.children);

let orderRange = Array.from(Array(blocks.length).keys());
shuffle(orderRange);
blocks.forEach((block, index) => {
  block.style.order = orderRange[index];


});

function flipBlock(selectedBlock) {
    selectedBlock.classList.add('is-flipped');
    let allFlippedBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains('is-flipped'));
    if (allFlippedBlocks.length === 2) {
      stopClicking();
      checkMatchedBlocks(allFlippedBlocks[0], allFlippedBlocks[1]);
  
    }
  
  }
  function stopClicking() {
    blocksContainer.classList.add('no-clicking');
    setTimeout(() => {
      blocksContainer.classList.remove('no-clicking');
  
    }, duration);
  
  }
  
function shuffle(array) {
    let current = array.length,temp,random;
    while (current > 0) {
      random = Math.floor(Math.random() * current);
      current--;
      temp = array[current];
      array[current] = array[random];
      array[random] = temp;
  
    }
    return array;
  }