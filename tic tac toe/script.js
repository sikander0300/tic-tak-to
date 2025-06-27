document.addEventListener("DOMContentLoaded", () => {
    let boxes = document.querySelectorAll(".box");
    let restartButton = document.getElementById("restart");
    let currentPlayer = "X";
    let board = ["", "", "", "", "", "", "", "", ""];

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

        for (const pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return true;
            }
        }
        return false;
    };

    const handleClick = (e) => {
        const box = e.target;
        const index = box.getAttribute("data-index");

        if (board[index] === "") {
            board[index] = currentPlayer;
            box.textContent = currentPlayer;
            if (checkWinner()) {
                setTimeout(() => alert(`${currentPlayer} wins!`), 10);
                return;
            }
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    };

    const restartGame = () => {
        board.fill("");
        currentPlayer = "X";
        boxes.forEach(box => box.textContent = "");
    };

    boxes.forEach(box => box.addEventListener("click", handleClick));
    restartButton.addEventListener("click", restartGame);
});
