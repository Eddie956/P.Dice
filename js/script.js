var Participant = function(turn) {
  this.scoreTotal = 0;
  this.currentScore = 0;
  this.turn = turn;
};
Participant.prototype.takeTurn = function() {
  if(this.turn === true) {
    this.turn = false;
  } else {
    this.turn = true;
  }
};
Participant.prototype.roll = function() {
  var rand = Math.floor(Math.random() * 6) + 1;
  this.currentScore = rand;
};
Participant.prototype.addPoints = function(rollPoints) {
  this.scoreTotal += rollPoints;
};
var participant1 = new Participant(true);
var participant2 = new Participant(false);
var totalRoll;
$(document).ready(function() {
  var participantOneName;
  var participantTwoName;
  totalRoll = parseInt($("#overall").text());
  $(".click").click(function() {
    $(".showup").toggle();
  });
  $("#btn-roll").click(function() {
    if(participant1.turn === true) {
      if(participant1.scoreTotal >= 100 || participant2.scoreTotal >= 100) {
        $("button").attr("readonly", true);
        alert("You have won;)");
      } else {
        participant1.roll();
        if(participant1.currentScore === 1) {
          participant1.takeTurn();
          participant2.takeTurn();
          totalRoll = 0;
          $("#hold").attr("disabled", true).removeClass("btn-alert");
          $("#game").text("0");
          $("chuckling").text(participant1.currentScore);
          $(this).text("Roll");
          $("#notice").text(participantTwoName + ", GO!");
        } else {
          totalRoll += participant1.currentScore;
          $("#hold").attr("disabled", false).addClass("btn-alert");
          $("chuckling").text(participant1.currentScore);
          $("#overall").text(totalRoll);
          $(this).addClass("roll-again").text("Roll Again?");
        }
      }
    } else {
      if(participant2.scoreTotal >= 100 || participant1.scoreTotal >= 100) {
        $("button").attr("readonly", true);
      } else {
        participant2.roll();
        if(participant2.currentScore === 1) {
          participant1.takeTurn();
          participant2.takeTurn();
          totalRoll = 0;
          $("#hold").attr("disabled", true).removeClass("btn-alert");
          $("#overall").text("0");
          $("chuckling").text(participant2.currentScore);
          $(this).removeClass("roll-again").text("Roll");
          totalRoll = 0;
          $("#notice").text(participantOneName + ", GO!");
        } else {
          totalRoll += participant2.currentScore;
          $("#hold").attr("disabled", false).addClass("btn-alert");
          $(this).addClass("roll-again").text("Roll Again?");
          $("#overall").text(totalRoll);
          $("chuckling").text(participant2.currentScore);
        }
      }
    }
  });
  $("#hold").click(function() {
    if(participant1.turn === true) {
      participant1.takeTurn();
      participant2.takeTurn();
      participant1.addPoints(totalRoll);
      totalRoll = 0;
      $(this).attr("disabled", true).removeClass("btn-alert");
      $("#overall").text("0");
      $(".p1-total-score").text(participant1.scoreTotal);
      $("#btn-roll").text("Roll");
      $("#notice").text(participantTwoName + ", your turn!");
    } else {
      participant1.takeTurn();
      participant2.takeTurn();
      participant2.addPoints(totalRoll);
      totalRoll = 0;
      $(this).attr("disabled", true).removeClass("btn-alert");
      $("#overall").text("0");
      $(".p2-total-score").text(participant2.scoreTotal);
      $("#btn-roll").removeClass("roll-again").text("Roll");
      $("#notice").text(participantOneName + ", your turn!");
    }
  });
});