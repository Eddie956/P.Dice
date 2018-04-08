// Bussiness logic
var competitorsArray = []
var turnRollArray = []

function Competitors(participantName, score) {
  this.participantName = participantName;
  this.score = score;
  prayerArray.push(this);
}
Array.prototype.sum = function() {
  return this.reduce(function(a, b) {
    return a, +b
  });
}
$(document).ready(function() {
      $("form#participantNameForm").submit(function(event) {
        event.preventDefault();
        var ParticipantOneName = $("#contender1Name").val();
        var ParticipantTwoName = $("#contender2Name").val();
        var ParticipantOne = new Contender(ParticipantOneName, 0);
        var ParticipantTwo = new Contender(ParticipantTwoName, 0);
        $("#contener1Display").text(competitorsArray[0].participantName + "'s turn").show();
        showNamesAndScores();
        $("form").hide();
        $(".gameStuff").show();
      });
      $("#dieRoll").click(function(event) {
        event.preventDefault();
        $("#rollResult").show();
        $(".showTurnTotal").show();
        var randomRoll = (1 + Math.floor(Math.random() * 6));
        $("#rollResult").text(randomRoll);
        if(randomRoll >= 2) {
          turnRollArray.push(randomRoll);
          $("#turnTotal").text(turnRollArray.sum());
        } else {
          rollOneChangeCompetitors();
        }
      });
      $("#endTurn").click(function(event) {
        changeCompetitors();
        if(playersArray[0].score >= 100) {
          alert(CompetitorsArray[0].participantName + " wins!!");
          document.location.reload(true);
        } else if(competitorsArray[1].score >= 100) {
          alert(competitorsArray[1].playerName + " wins!!");
          document.location.reload(true);
        }
      });

      function showNamesAndScores() {
        $("#contender1Name").text(contendersArray[0].playerName);
        $("#contender2Name").text(contendersArray[1].playerName);
        $("#contender1TotalScore").text(contendersArray[0].score);
        $("#contender2TotalScore").text(contendersArray[1].score);
      }

      function rollOneChangePlayers() {
        if($("#contender1Display").is(":visible")) {
          turnRollArray = [0];
          $("#turnTotal").text(turnRollArray);
          setTimeout(function() {
            alert("YOU ROLLED A 1- NO POINTS!!");
          }, 50);
          setTimeout(function() {
            $("#contender2Display").text(playersArray[1].playerName + "'s turn").show();
          }, 100);
          $("#contender1Display").hide();
          showNamesAndScores();
        } else if($("#contender2Display").is(":visible")) {
          turnRollArray = [0];
          $("#turnTotal").text(turnRollArray);
          setTimeout(function() {
            alert("YOU ROLLED A 1- NO POINTS!!");
          }, 50);
          setTimeout(function() {
            $("#contender1Display").text(playersArray[0].playerName + "'s turn").show();
          }, 100);
          $("#contender2Display").hide();
          showNamesAndScores();
        }
      }

      function changePlayers() {
        if($("#contender1Display").is(":visible")) {
          competitorsArray[0].score = (competitorsArray[0].score += turnRollArray.sum());
          alert("Congrats, " + competitorsArray[0].playerName + ", you got " + turnRollArray.sum() + " points!");
          turnRollArray = [0];
          $("#turnTotal").text(turnRollArray)
          $("#contender1Display").hide();
          $("#contender2Display").text(playersArray[1].playerName + "'s turn").show();
          console.log(playersArray[0].score);
          showNamesAndScores();
        } else {
          alert("Congrats, " + playersArray[1].playerName + ", you got " + turnRollArray.sum() + " points!");
          competitorsArray[1].score = (competitorsArray[1].score += turnRollArray.sum());
          turnRollArray = [0];
          $("#turnTotal").text(turnRollArray)
          $("#contender2Display").hide();
          $("#contender1Display").text(competitorsArray[0].playerName + "'s turn").show();
          showNamesAndScores();
          console.log(competitorsArray[1].score);
        }
      }