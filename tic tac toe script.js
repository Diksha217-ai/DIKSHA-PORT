const cells = document.querySelectorAll('.cell');
const resetButton = document.querySelector('.reset-btn');
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

// Check if there's a winner
const checkWinner = () => {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            highlightWinner(pattern);
            gameActive = false;
            alert(`${currentPlayer} wins!`);
            return;
        }
    }

    if (!gameBoard.includes('')) {
        gameActive = false;
        alert('It\'s a draw!');
    }
};

// Highlight the winning cells
const highlightWinner = (pattern) => {
    pattern.forEach(index => {
        cells[index].classList.add('winner');
    });
};

// Handle cell click
const handleCellClick = (event) => {
    const index = event.target.getAttribute('data-index');
    if (gameBoard[index] || !gameActive) return;

    gameBoard[index] = currentPlayer;
    event.target.textContent = currentPlayer;

    checkWinner();

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
};

// Reset the game
const resetGame = () => {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    currentPlayer = 'X';
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('winner');
    });
};

// Add event listeners
cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});

resetButton.addEventListener('click', resetGame);
