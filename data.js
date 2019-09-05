$(document).ready(function(){
    var template = $("#template").html();
    Mustache.parse(template);

    var rendered = Mustache.render(template, {
        match: [
            {
                date: "1/4/19",
                home: "St. Louis Lyons",
                away: "Chicago Wasps",
                location: "St. Louis, MO",
                result: "W 2-0"
            },
            {
                date: "1/8/19",
                home: "St. Louis Lyons",
                away: "St. Louis Edge",
                location: "St. Louis, MO",
                result: "L 5-1"
            },
            {
                date: "1/19/19",
                home: "St. Louis Ice Queens",
                away: "St. Louis Lyons",
                location: "St. Louis, MO",
                result: "W 8-3"
            },
            {
                date: "2/7/19",
                home: "Chicago Wasps",
                away: "St. Louis Lyons",
                location: "Chicago, IL",
                result: "W 3-2"
            },
            {
                date: "2/19/19",
                home: "St. Louis Lyons",
                away: "St. Louis Frenzy",
                location: "St. Louis, MO",
                result: "L 3-0"
            },
            {
                date: "3/17/19",
                home: "St. Louis Ice Queens",
                away: "St. Louis Lyons",
                location: "St. Louis, MO",
                result: "OT 2-1"
            },
            {
                date: "5/21/19",
                home: "St. Louis Lyons",
                away: "St. Louis Ice Queens",
                location: "St. Louis, MO",
                result: "---"
            }
        ],
        goalie: [
            {
                name: "Kathy Jenkins",
                number: "30",
                wins: "5",
                sv: ".928",
                gaa: "1.42"
            },
            {
                name: "Jill Potter",
                number: "31",
                wins: "3",
                sv: ".902",
                gaa: "2.98"
            }
        ],
        top5points: [
            {
                name: "Alissa Page",
                number: "4",
                goals: 2,
                assists: 7,
                points: function () {
                    return this.goals + this.assists;
                }
            },
            {
                name: "Sally James",
                number: "1",
                goals: 4,
                assists: 5,
                points: function () {
                    return this.goals + this.assists;
                }
            },
            {
                name: "Lana Sullivan",
                number: "6",
                goals: 4,
                assists: 4,
                points: function () {
                    return this.goals + this.assists;
                }
            },
            {
                name: "Cheryl Mendoza",
                number: "2",
                goals: 6,
                assists: 1,
                points: function () {
                    return this.goals + this.assists;
                }
            },
            {
                name: "Claire Sawyer",
                number: "5",
                goals: 2,
                assists: 3,
                points: function () {
                    return this.goals + this.assists;
                }
            }
        ],
        player: [
            {
                name: "Sally James",
                number: "1",
                goals: 4,
                assists: 5,
                points: function () {
                    return this.goals + this.assists;
                }
            },
            {
                name: "Cheryl Mendoza",
                number: "2",
                goals: 6,
                assists: 1,
                points: function () {
                    return this.goals + this.assists;
                }
            },
            {
                name: "Mari Thompson",
                number: "3",
                goals: 1,
                assists: 1,
                points: function () {
                    return this.goals + this.assists;
                }
            },
            {
                name: "Alissa Page",
                number: "4",
                goals: 2,
                assists: 7,
                points: function () {
                    return this.goals + this.assists;
                }
            },
            {
                name: "Claire Sawyer",
                number: "5",
                goals: 2,
                assists: 3,
                points: function () {
                    return this.goals + this.assists;
                }
            },
            {
                name: "Lana Sullivan",
                number: "6",
                goals: 4,
                assists: 4,
                points: function () {
                    return this.goals + this.assists;
                }
            },
            {
                name: "Kirstie Johnson",
                number: "7",
                goals: 0,
                assists: 1,
                points: function () {
                    return this.goals + this.assists;
                }
            },
            {
                name: "Susan Lin",
                number: "8",
                goals: 0,
                assists: 0,
                points: function () {
                    return this.goals + this.assists;
                }
            }
        ] 
        
    })
    console.log(rendered);
    $("#target").html(rendered);
})