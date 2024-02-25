const canvas = document.getElementById('solarCanvas')
canvas.width = 1200;
canvas.height = 800;
const ctx = canvas.getContext('2d');

const sun = {
    radius: 50,
    color: 'yellow',
    name: 'Sun'
};

const earthMoon = {
    radius: 2,
    orbitRadius: 10,
    color: 'lightgray',
    speed: 0.02,
    name: ''
};

const io = {
    radius: 5,
    orbitRadius: 30,
    color: 'hotpink',
    speed: 0.04,
    name: ''
};


const europa = {
    radius: 2,
    orbitRadius: 20,
    color: 'yellow',
    speed: 0.04,
    name: ''
};

const ganymede = {
    radius: 2,
    orbitRadius: 25,
    color: 'gray',
    speed: 0.03,
    name: ''
};

const callisto = {
    radius: 2,
    orbitRadius: 30,
    color: 'lightblue',
    speed: 0.05,
    name: ''
};

const planets= [
    { name: "Mercury", radius: 5, orbitRadius: 60, color:"dimgray", speed: 0.03 },
    { name: "Venus", radius: 8, orbitRadius: 85, color:"khaki", speed: 0.02 },
    { name: "Earth", radius: 10, orbitRadius: 110, color:"steelblue", speed: 0.01, moons: [earthMoon] },
    { name: "Mars", radius: 6, orbitRadius: 135, color:"firebrick", speed: 0.008 },
    { name: "Jupiter", radius: 20, orbitRadius: 180, color:"orange", speed: 0.006, moons: [io,europa, ganymede,callisto] },
    { name: "Saturn", radius: 17, orbitRadius: 230, color:"gold", speed: 0.005 },
    { name: "Uranus", radius: 14, orbitRadius: 280, color:"lightblue", speed: 0.003 },
    { name: "Neptune", radius: 13, orbitRadius: 330, color:"blue", speed: 0.002 },
    { name: "Pluto", radius: 3, orbitRadius: 380, color:"maroon", speed: 0.001 },
];

function drawOrbits () {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    planets.forEach(planet => {
        ctx.beginPath ();
        ctx.arc( centerX, centerY, planet.orbitRadius, 0, 2 * Math.PI);
        ctx.strokeStyle ="rgba(255,255,255,0.5)";
        ctx.stroke ();
    });
}

function drawSun() {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    ctx.beginPath ();
    ctx.arc( centerX, centerY, sun.radius, 0, 2 * Math.PI);
    ctx.fillStyle = sun.color;
    ctx.fill();

    drawLabel(sun.name, centerX, centerY, "black");
}

function drawMoon(moon, planetX, planetY, planetAngle) {
    const moonAngle = Date.now () * 0.002 * moon.speed;
    const x = planetX + moon.orbitRadius * Math.cos(moonAngle);
    const y = planetY + moon.orbitRadius * Math.sin(moonAngle); 

    ctx.beginPath ();
    ctx.arc( x, y, moon.radius, 0, 2 * Math.PI);
    ctx.fillStyle = moon.color;
    ctx.fill();

    drawLabel (moon.name, x, y +moon.radius + 7, "white")
}

function drawPlanet(planet, angle) {
    const x = canvas.width / 2 + planet.orbitRadius *Math.cos(angle);
    const y = canvas.height / 2 + planet.orbitRadius *Math.sin(angle);
    
    ctx.beginPath ();
    ctx.arc(x, y, planet.radius, 0, 2 * Math.PI);
    ctx.fillStyle = planet.color;
    ctx.fill();

    drawLabel (planet.name, x, y + planet.radius + 10, "white");
    
    if (planet.moons) {
        planet.moons. forEach(moon => {
            drawMoon(moon, x, y, angle);
        });
    }
}

function drawLabel(text,x,y, color){
    ctx.fillStyle = color;
    ctx.font = "12px Arial";
    ctx.fillText(text, x, y);
}

function drawSolarSystem() {
   ctx.clearRect(0, 0, canvas.width, canvas.height);

   drawOrbits ();
   drawSun ();

   planets. forEach ((planet, index) => {
    const angle = Date.now() * 0.001 * planet.speed;
    drawPlanet(planet, angle);
   });
   }
   drawSolarSystem ();
 