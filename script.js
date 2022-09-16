let duration = 1000;

let blocksContainer = document.querySelector(".memory-game-blocks");

let blocks = Array.from(blocksContainer.children);

let orderRange = Array.from(Array(blocks.length).keys());
shuffle(orderRange);
blocks.forEach((block, index) => {
  block.style.order = orderRange[index];


});