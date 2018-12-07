<script>
    function divStandings(){
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
        var intOrder = [team1, team2, team3, team4];
        var sortOrder = intOrder.slice(0);
        sortOrder.sort(function(a,b){
            return b.overallWins - a.overallWins;
        })
        console.log('Standings:');
        console.log(sortOrder);
    
    }
</script>


