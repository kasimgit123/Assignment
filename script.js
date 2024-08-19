let num = 0;
let history = [];
let redoStack = [];

const updateProgressBar = () => {
  const progressBar = document.getElementById('progress-bar');
  progressBar.style.width = (num / 150) * 100 + '%';
};

const updateState = (newNum) => {
  if (newNum < 0) newNum = 0;
  if (newNum > 150) newNum = 150;
  history.push(num);
  num = newNum;
  redoStack = []; // Clear redo stack on new operation
  updateProgressBar();
};

document.getElementById('subtract').addEventListener('click', () => {
  updateState(num - 1);
});

document.getElementById('add').addEventListener('click', () => {
  updateState(num + 1);
});

document.getElementById('undo').addEventListener('click', () => {
  if (history.length > 0) {
    redoStack.push(num);
    num = history.pop();
    updateProgressBar();
  }
});

document.getElementById('redo').addEventListener('click', () => {
  if (redoStack.length > 0) {
    history.push(num);
    num = redoStack.pop();
    updateProgressBar();
  }
});