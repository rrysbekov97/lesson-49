document.addEventListener('DOMContentLoaded', event => {
  const container = document.createElement('div');
  container.id = 'container';
  document.body.append(container);
  container.style.display = 'flex';
  container.style.flexWrap = 'wrap';
  container.style.margin = '50px auto';
  let count = 0;

  const cube = (color:string) => {
    const cube = document.createElement('div');
    cube.className = 'cube__container';
    cube.style.width = '20px';
    cube.style.height = '20px';
    cube.style.boxSizing = 'border-box';
    cube.style.display = 'block';
    cube.style.background = color;
    container.append(cube);
  }

  const chessFunc = (widthCount:number) => {
    container.style.width = `${20 * widthCount}px`;
    for (let i = 0; i < widthCount; i++) {
      for (let j = 0; j < widthCount; j++) {
        if (count % 2 === 0) {
          cube('blue');
          count++;
        } else {
          cube('white');
          count++;
        }
      }
      count++;
    }
  }

  chessFunc(16);
  event.preventDefault();
})
