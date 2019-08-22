var updated = "8.22.2019 @ 0727";
var qbranks =
{
    seriesconservative: [ 33.49, 33.00,32.50,32.35,31.71,31.07,30.43,30.28,29.71,29.64,29.07,28.86,28.22,27.93,27.72,27.00,26.93,
        26.22,26.15,25.72,24.94,24.79,24.08,23.51,23.44,22.73,22.37,21.87,21.51,21.44,20.51,20.30,19.87,19.37,18.66,18.37,18.02,
        16.98,16.66,16.63,16.12,15.74,15.52,13.92,13.17,13.17,12.74,12.42,12.38,12.24,12.24,11.39,10.81,10.24,9.53,8.82,8.39,8.39,
        8.25,8.10,5.39,5.25
    ],
    fullnames: [ "Patrick Mahomes","Deshaun Watson","Aaron Rodgers","Andrew Luck","Matt Ryan","Baker Mayfield","Carson Wentz",
        "Cam Newton","Russell Wilson","Drew Brees","Jared Goff","Kyler Murray","Jameis Winston","Ben Roethlisberger","Dak Prescott",
        "Lamar Jackson","Philip Rivers","Kirk Cousins","Mitchell Trubisky","Tom Brady","Josh Allen","Jimmy Garoppolo","Derek Carr",
        "Matthew Stafford","Sam Darnold","Andy Dalton","Marcus Mariota","Nick Foles","Eli Manning","Joe Flacco","Dwayne Haskins",
        "Ryan Fitzpatrick","Josh Rosen","Case Keenum","Ryan Tannehill","Daniel Jones","Drew Lock","Blake Bortles","Will Grier",
        "Taysom Hill","Teddy Bridgewater","Jacoby Brissett","Robert Griffin III","AJ McCarron","Matt Barkley","Colt McCoy",
        "Nate Sudfeld","Tyrod Taylor","Chase Daniel","DeShone Kizer","C.J. Beathard","Blaine Gabbert","Brett Hundley","Trevor Siemian",
        "Chad Henne","Gardner Minshew","Mike Glennon","Jeff Driskel","Cooper Rush","Drew Stanton","Matt Schaub","Taylor Heinicke"
    ],
    tiers: [1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7]
};
var rbranks =
{
    seriesconservative: [ 36.88,36.55,36.36,36.03,35.69,35.17,35.03,34.74,34.55,34.22,34.12,33.55,33.27,33.13,32.79,32.70,32.51,32.27,32.08,31.41,31.08,31.03,30.18,29.99,29.99,29.89,29.89,29.08,28.89,28.75,27.94,27.84,27.42,27.42,27.13,26.75,26.66,25.99,25.85,25.47,25.23,24.85,24.71,24.61,24.42,24.18,23.71,23.56,23.37,22.37,22.14,22.09,21.71,21.71,21.18,21.09,20.99,20.73,20.66,20.57,20.57,20.42,19.00,18.57,18.57,17.66,17.66,17.62,17.36,16.62,16.28,15.67,15.59,15.36,15.25,14.79,14.79,14.28,14.11,13.76,13.76,13.67,13.48,12.43,11.98,11.84,11.69,11.59,11.41,11.27,11.10,10.55,10.48,10.28,9.67,8.43,7.48,7.20,6.34,5.10
    ],
    fullnames: [ "Saquon Barkley","Christian McCaffrey","Alvin Kamara","Ezekiel Elliott","David Johnson","Le'Veon Bell","James Conner","Joe Mixon","Nick Chubb","Dalvin Cook",
        "Todd Gurley","Melvin Gordon","Kerryon Johnson","Damien Williams","Devonta Freeman","Marlon Mack","Aaron Jones","Derrick Henry","Leonard Fournette","Josh Jacobs",
        "Mark Ingram","Chris Carson","Sony Michel","Kenyan Drake","Phillip Lindsay","James White","David Montgomery","Lamar Miller","Tevin Coleman","Tarik Cohen","Rashaad Penny","Latavius Murray","Miles Sanders","Austin Ekeler","Derrius Guice","Royce Freeman","Jordan Howard","Darrell Henderson","LeSean McCoy","Ronald Jones","Peyton Barber","Nyheim Hines","Matt Breida","Adrian Peterson","Dion Lewis","Duke Johnson","Kalen Ballage","Jaylen Samuels","Carlos Hyde","Damien Harris","Jerick McKinnon",
        "Ito Smith","Kareem Hunt","Chris Thompson","Giovani Bernard","Justin Jackson","Devin Singletary","C.J. Anderson","Jalen Richard","Jamaal Williams","Justice Hill",
        "Mike Davis","Alexander Mattison","Chase Edmonds","Gus Edwards","Rex Burkhead","Frank Gore","Malcolm Brown","Darwin Thompson","D'Onta Foreman","Doug Martin",
        "Ryquell Armstead","Elijah McGuire","Tony Pollard","Ty Montgomery","T.J. Yeldon","Kenneth Dixon","Alfred Blue","Theo Riddick","Wayne Gallman","Wendell Smallwood",
        "Benny Snell","Corey Clement","Devontae Booker","Cameron Artis-Payne","Andre Ellington","Jordan Wilkins","Alfred Morris","Damarea Crockett","Spencer Ware",
        "Zach Zenner","Jordan Scarlett","Brian Hill","Dontrell Hilliard","Josh Adams","Rod Smith","Benny Cunningham","C.J. Prosise","Kyle Juszczyk","Dwayne Washington"
    ],
    tiers: [1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]
};
var wrranks =
{
    seriesconservative: [ 26.67,26.56,26.41,26.22,26.18,26.03,25.97,25.77,25.65,25.54,25.48,25.28,25.22,24.90,24.80,24.73,24.65,24.63,24.35,24.29,24.01,23.82,
        23.67,23.65,23.60,23.52,23.52,23.50,23.09,22.95,22.86,22.48,22.46,22.44,22.41,22.18,22.10,21.99,21.95,21.82,21.75,21.22,21.16,20.99,20.95,20.88,20.71,
        20.52,20.37,20.22,20.16,20.12,20.12,19.91,19.86,19.76,19.61,19.50,19.46,19.22,18.57,18.52,18.50,18.42,18.33,18.16,18.06,17.97,17.95,17.63,17.53,17.40,
        17.34,17.27,17.22,17.20,17.04,16.84,16.76,16.46,16.46,16.35,16.32,16.18,16.10,16.07,15.87,15.84,15.67,15.59,15.41,15.24,15.21,14.89,14.78,14.70,14.57,
        14.54,14.44,14.19,14.08,14.03,13.99,13.90,13.70,13.58,13.12,13.01,12.78,12.53,12.37,12.18,12.06,11.72,11.51,11.44,11.17,10.95,10.74,10.02,9.81,9.72,9.42,
        9.34,9.25,9.04,9.00,8.83,8.78,8.66,8.57,8.40,7.93,7.59,7.59,7.55,7.30,6.57,5.98,5.55,3.85,3.26,2.15
    ],
    fullnames: [ "DeAndre Hopkins","Davante Adams","Julio Jones","Michael Thomas","Odell Beckham Jr.","JuJu Smith-Schuster","Tyreek Hill","Mike Evans","Antonio Brown",
        "Keenan Allen","T.Y. Hilton","Amari Cooper","Adam Thielen","Stefon Diggs","Julian Edelman","Robert Woods","Brandin Cooks","Kenny Golladay","Chris Godwin",
        "Tyler Lockett","Cooper Kupp","Alshon Jeffery","Allen Robinson","Tyler Boyd","D.J. Moore","Calvin Ridley","Mike Williams","A.J. Green","Robby Anderson",        "Jarvis Landry","Sammy Watkins","Corey Davis","Christian Kirk","Dante Pettis","Will Fuller","Sterling Shepard","Marvin Jones","Curtis Samuel","Dede Westbrook",
        "Larry Fitzgerald","Courtland Sutton","Geronimo Allison","Marquez Valdes-Scantling","DeSean Jackson","Keke Coutee","Emmanuel Sanders","Golden Tate",
        "Anthony Miller","Devin Funchess","Michael Gallup","John Brown","Tyrell Williams","Donte Moncrief","Kenny Stills","D.K. Metcalf","James Washington","Jamison Crowder",
        "DaeSean Hamilton","N'Keal Harry","Mohamed Sanu","DeVante Parker","Albert Wilson","Marquise Goodwin","Parris Campbell","Tre'Quan Smith","Adam Humphries",       "Quincy Enunwa","Robert Foster","Deebo Samuel","Marqise Lee","Ted Ginn Jr.","Zay Jones","Taylor Gabriel","A.J. Brown","Andy Isabella","Marquise Brown","Trey Quinn",
        "Josh Doctson","Randall Cobb","Nelson Agholor","Mecole Hardman","Paul Richardson","Danny Amendola","Willie Snead","Cole Beasley","Phillip Dorsett","David Moore",
        "John Ross","D.J. Chark","Chris Conley","Antonio Callaway","Demarcus Robinson","Equanimeous St. Brown","Josh Reynolds","Travis Benjamin","Miles Boykin",
        "Rashard Higgins","Terry McLaurin","Hakeem Butler","Keelan Cole","JJ Arcega-Whiteside","Breshad Perriman","Chris Hogan","KeeSean Johnson","Diontae Johnson",
        "Taywan Taylor","Ryan Grant","Keith Kirkwood","Demaryius Thomas","Cordarrelle Patterson","Chester Rogers","Trent Taylor","Laquon Treadwell","Jakeem Grant",
        "Justin Watson","Tim Patrick","Jaron Brown","J.J. Nelson","Ryan Switzer","Cody Latimer","Jarius Wright","Alex Erickson","Chris Moore","Justin Hardy","Riley Ridley",
        "Tajae Sharpe","Torrey Smith","DeAndre Carter","Tavon Austin","Isaiah McKenzie","Marcell Ateman","Seth Roberts","Zach Pascal","Brice Butler","Jordan Taylor","Russell Shepard","Eli Rogers","Andy Jones","Deontay Burnett","Russell Gage","Josh Malone","Geremy Davis","Dwayne Harris"
    ],
    tiers: [1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]
};
var teranks =
{
    seriesconservative: [26.29,26.01,25.85,25.46,25.34,25.22,24.74,24.62,24.18,24.10,23.98,23.46,23.06,22.90,22.86,22.66,22.66,22.34,22.30,21.54,21.42,21.26,21.22,20.54,
        20.50,19.91,19.78,19.54,19.47,19.25,19.16,18.72,18.31,18.25,18.01,17.61,17.53,17.23,17.14,17.13,16.95,16.90,16.23,16.19,16.19,15.75,15.45,15.28,15.18,14.98,14.24,
        14.03,13.92,13.20,13.12,13.04,12.40,12.24,12.00,11.92,11.12,11.04,10.88,10.64,10.64,9.85,9.29,8.89,8.25,8.25,7.85,7.69,7.05,5.77,4.18,3.70,2.50],
    fullnames: ["Travis Kelce","George Kittle","Zach Ertz","O.J. Howard","Evan Engram","Hunter Henry","Jared Cook","Vance McDonald","Eric Ebron","David Njoku","Austin Hooper",
        "Delanie Walker","Trey Burton","Mark Andrews","Jordan Reed","Jack Doyle","Kyle Rudolph","Jimmy Graham","Greg Olsen","Dallas Goedert","Noah Fant","T.J. Hockenson",
        "Chris Herndon IV","Tyler Eifert","Mike Gesicki","Gerald Everett","Jason Witten","Ricky Seals-Jones","Cameron Brate","Ian Thomas","Darren Waller","Hayden Hurst",
        "Will Dissly","Nick Vannett","Benjamin Watson","Vernon Davis","Jordan Thomas","Matt LaCosse","Irv Smith Jr.","Geoff Swaim","Jonnu Smith","Charles Clay",
        "Jesse James","C.J. Uzomah","Adam Shaheen","Blake Jarwin","Jace Sternberger","Tyler Kroft","Jake Butt","Tyler Higbee","Kahale Warring","Luke Willson","Jason Croom",
        "Jeff Heuerman","Jordan Akins","Demetrius Harris","Josh Hill","Rhett Ellison","Mo Alie-Cox","Blake Bell","Virgil Green","James O'Shaughnessy","Xavier Grimble",
        "Ed Dickson","Dwayne Allen","Garrett Celek","Nick Boyle","Dan Arnold","Dalton Schultz","Logan Paulsen","Derek Carrier","Eric Tomlinson","Seth Devalve",
        "Marcedes Lewis","David Morgan","Michael Roberts","Caleb Wilson"],
    tiers: [1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7]
};
var kranks =
{
    seriesconservative: [19.95,19.85,19.64,19.62,19.49,19.33,19.04,18.95,18.91,18.79,18.70,18.49,18.43,18.37,17.95,17.91,17.89,17.75,17.66,17.47,17.35,17.27,17.17,16.94,
        16.84,16.84,16.80,16.53,16.47,16.14],
    fullnames: ["Greg Zuerlein","Justin Tucker","Stephen Gostkowski","Harrison Butker","Wil Lutz","Ka'imi Fairbairn","Robbie Gould","Jake Elliott","Mason Crosby",
        "Brett Maher","Adam Vinatieri","Matt Prater","Giorgio Tavecchio","Jason Myers","Graham Gano","Dan Bailey","Aldrick Rosas","Chris Boswell","Ryan Succop",
        "Greg Joseph","Brandon McManus","Josh Lambo","Daniel Carlson","Cairo Santos","Steven Hauschka","Dustin Hopkins","Eddy Pineiro","Zane Gonzalez",
        "Randy Bullock","Jason Sanders"],
    tiers: [1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4]
};
var defranks =
{
    seriesconservative: [19.80,19.66,19.60,19.43,19.41,19.28,19.22,19.03,18.91,18.91,18.85,18.66,18.66,18.60,18.51,18.35,18.26,18.16,18.14,18.05,17.87,17.85,17.74,17.66,
        17.52,17.44,17.39,17.20,17.10,17.01,16.91,16.81],
    fullnames: ["Bears","Jaguars","Rams","Chargers","Vikings","Ravens","Texans","Browns","Saints","Broncos","Patriots","Bills","Cowboys","Eagles","Colts","Steelers",
        "Seahawks","Titans","Chiefs","Panthers","Packers","Falcons","Redskins","Jets","49ers","Cardinals","Lions","Giants","Dolphins","Buccaneers","Bengals",
        "Raiders"],
    tiers: [1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,4,4]
};