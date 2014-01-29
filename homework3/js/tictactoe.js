var TicTacToe = {
	turn: 0,
	gameOver: false,

	startGame: function() {
		$(".table").slideDown(500);

		$("td").click(function(e) {
			TicTacToe.takeTurn(e.target.id);
		});

		$("#start").attr('onclick', '');
	},

	restartGame: function() {
		$("td").each(function() {
			$(this).html("");
			$(this).removeClass('hasX');
			$(this).removeClass('hasO');
		});

		$(".gameover").text("");
		$(".menu").removeClass("show").addClass("hidden");
		$(".background").removeClass("show");

		this.turn = 0;
		this.gameOver = false;
	},

	takeTurn: function(id) {
		var space = $("#" + id);

		if (space.text().trim().length > 0 || this.gameOver)
			return;

		if (this.turn == 0) {
			var value = "X";
			this.turn = 1;
			space.addClass('hasX');
		}
		else {
			var value = "O";
			this.turn = 0;
			space.addClass('hasO');
		}

		space.html(value);

		var isGameOver = this.checkForVictory();
		if (isGameOver.length > 0) {
			if (isGameOver == "CAT") {
				$(".gameover").append("Damn, nobody won! Either you guys are too good, or not good enough.");
			}
			else {
				$(".gameover").append("Congratulations! Player " + isGameOver + " won!");
			}
			
			$(".menu").removeClass("hidden").addClass("show");
			$(".background").addClass("show");

			this.gameOver = true;
		}
	},

	checkForVictory: function() {
		var patterns = [ [1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7] ];

		for (p in patterns) {
			var currentPattern = patterns[p];
			var result = $("#td" + currentPattern[0]).text() + $("#td" + currentPattern[1]).text() + $("#td" + currentPattern[2]).text();

			if (result == "XXX")
				return "X";
			else if (result == "OOO")
				return "O";
		}

		var usedSpaces = 0;

		$("td").each(function() {
			if ($(this).text().length > 0) {
				usedSpaces++;
			}
		});

		if (usedSpaces == 9)
			return "CAT";
	},
}

function cleareverything() {
	TicTacToe.restartGame();
}

function startTheGameAlready() {
	TicTacToe.startGame();
}
