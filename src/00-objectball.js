function gameObject() {
    return {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['black', 'White'],
            players: {
                'Alan Anderson': {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                'Reggie Evans': {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                'Brook Lopez': {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                'Mason Plumlee': {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                'Jason Terry': {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                }
            },
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['Turquoise', 'Purple'],
            players: {
                'Jeff Adrien': {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                'Bismak Biyombo': {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                'DeSanga Diop': {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                'Ben Gordon': {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                'Brendan Haywood': {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                }
            },
        }
    }
}

// console.log(gameObject())
// console.table(gameObject().home.colors)
// console.table(gameObject().away.colors)
// console.table(gameObject().home.players)
// console.table(gameObject().away.players)

function homeTeamName() {
    let object = gameObject()
    return object['home']['teamName']
}
  
// console.log(homeTeamName())

    // call directly off the gameObject function

function awayTeamName(){
    return gameObject()['away']['teamName']
}
      
// console.log(awayTeamName())

// let x = 99;
// let y = 42;
// debugger;
// console.log("x:", x);

// let oo = { foo: 42, bar: 83, "key w/ spaces": true };
// console.log(oo["foo"]);
// console.log(oo["bar"]);
// console.log(oo["key w/ spaces"]);

// console.log(oo.foo);
// console.log(oo.bar);

// let oo = { foo: 42, bar: 83, baz: 79 };
// for (let key in oo) {
//   let value = oo[key];
//   console.log("key:", key, "value:", value);
// }

// console.log("   Object.keys(oo) =>", Object.keys(oo));
// console.log(" Object.values(oo) =>", Object.values(oo));
// console.log("Object.entries(oo) =>", Object.entries(oo));





    // variables
const game = gameObject()
// console.log(game)
const player = playerObject()
// console.log(player)
const teams = Object.values(game)
// console.log(teams)



    // callbacks
function playerObject() {
    return {...game.home.players, ...game.away.players}
}

function findMyTeamName(teamName) {
    return teams.find(team => team.teamName === teamName)
}



    // lab deliverables
function numPointsScored(playerName) {
    return player[playerName].points
}

// console.log(numPointsScored('Alan Anderson'))

function shoeSize(playerName) {
    return player[playerName].shoe
}

// console.log(shoeSize('Alan Anderson'))

function teamColors(teamName) {
    return findMyTeamName(teamName).colors
}

// console.log(teamColors('Brooklyn Nets'))

function teamNames() {
    return teams.map(team => team.teamName)
}

function playerNumbers(teamName) {
    let jerseyNumbers = []
    for(let team of teams) {
        if (team.teamName === teamName) {
            let allPlayersStats = Object.values(team.players)
            for (let onePlayerStats of allPlayersStats) {
                jerseyNumbers.push(onePlayerStats.number)
            }
            return jerseyNumbers
        }
    }
}

// console.log(playerNumbers('Brooklyn Nets'))

function playerStats(playerName) {
    // console.log(playerName)
    // let playerStatsObject = {}
    for (let team of teams) {
        // console.log(team)
        // console.log(team.players)
        // console.log(team.players[playerName])
        if (team.players[playerName]) {
            return team.players[playerName]
        }
    }
}

console.log(playerStats('Alan Anderson'))
console.log(playerStats('Brook Lopez'))
console.log(playerStats('Bismak Biyombo'))
console.log(playerStats('Brendan Haywood'))