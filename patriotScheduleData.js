var divStandings = (function(){
    var team1 = {
        name: 'New England Patriots',
        overallWins: 9,
        divWins: 3, 
    };
    var team2 = {
        name: 'Miami Dolphins',
        overallWins: 6,
        divWins: 3, 
    };
    var team3 = {
        name: 'Buffalo Bills',
        overallWins: 4,
        divWins: 1,
    };
    var team4 = {
        name: 'New York Jets',
        overallWins: 3,
        divWins: 0,
    };
    var intOrder = [team1.overallWins, team2.overallWins, team3.overallWins, team4.overallWins];

    function sortTeams(a, b){
        return b-a;
    }
    intOrder.sort(sortTeams);
    alert(intOrder.join(","));

});


