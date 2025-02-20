const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
let shapes = [];

// Generate random color
function getRandomColor() {
    const pastelColors = ['#f8bbd0', '#ce93d8', '#b39ddb', '#90caf9', '#a5d6a7', '#ffccbc'];
    return pastelColors[Math.floor(Math.random() * pastelColors.length)];
}

// Draw initial shapes
function drawShapes() {
    shapes = [];

    // Pastel Rectangle
    ctx.fillStyle = '#f8bbd0';
    ctx.fillRect(50, 50, 150, 100);
    shapes.push({ type: 'rect', x: 50, y: 50, width: 150, height: 100 });

    // Pastel Circle
    ctx.beginPath();
    ctx.arc(400, 100, 50, 0, Math.PI * 2);
    ctx.fillStyle = '#ce93d8';
    ctx.fill();
    shapes.push({ type: 'circle', x: 400, y: 100, radius: 50 });

    // Pastel Triangle
    ctx.beginPath();
    ctx.moveTo(300, 250);
    ctx.lineTo(250, 350);
    ctx.lineTo(350, 350);
    ctx.closePath();
    ctx.fillStyle = '#b39ddb';
    ctx.fill();
    shapes.push({ type: 'triangle', vertices: [{ x: 300, y: 250 }, { x: 250, y: 350 }, { x: 350, y: 350 }] });

    // Pastel Line
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(canvas.width, canvas.height);
    ctx.strokeStyle = '#90caf9';
    ctx.lineWidth = 4;
    ctx.stroke();
}

drawShapes();

// Clear Canvas Function
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    shapes = [];
}

// Draw Random Shape
function drawRandomShape(x, y) {
    const shapeType = ['rect', 'circle', 'triangle'][Math.floor(Math.random() * 3)];
    const color = getRandomColor();
    ctx.fillStyle = color;

    switch (shapeType) {
        case 'rect':
            ctx.fillRect(x - 25, y - 25, 50, 50);
            shapes.push({ type: 'rect', x: x - 25, y: y - 25, width: 50, height: 50 });
            break;
        case 'circle':
            ctx.beginPath();
            ctx.arc(x, y, 30, 0, Math.PI * 2);
            ctx.fill();
            shapes.push({ type: 'circle', x: x, y: y, radius: 30 });
            break;
        case 'triangle':
            ctx.beginPath();
            ctx.moveTo(x, y - 30);
            ctx.lineTo(x - 30, y + 30);
            ctx.lineTo(x + 30, y + 30);
            ctx.closePath();
            ctx.fill();
            shapes.push({ type: 'triangle', vertices: [{ x: x, y: y - 30 }, { x: x - 30, y: y + 30 }, { x: x + 30, y: y + 30 }] });
            break;
    }
}

// Check if click is on shape
function getClickedShape(x, y) {
    return shapes.find(shape => {
        if (shape.type === 'rect') {
            return x >= shape.x && x <= shape.x + shape.width && y >= shape.y && y <= shape.y + shape.height;
        } else if (shape.type === 'circle') {
            const dx = x - shape.x;
            const dy = y - shape.y;
            return Math.sqrt(dx * dx + dy * dy) <= shape.radius;
        } else if (shape.type === 'triangle') {
            const [v1, v2, v3] = shape.vertices;
            function area(p1, p2, p3) {
                return Math.abs((p1.x * (p2.y - p3.y) + p2.x * (p3.y - p1.y) + p3.x * (p1.y - p2.y)) / 2);
            }
            const totalArea = area(v1, v2, v3);
            const area1 = area({ x, y }, v2, v3);
            const area2 = area(v1, { x, y }, v3);
            const area3 = area(v1, v2, { x, y });
            return totalArea === area1 + area2 + area3;
        }
        return false;
    });
}

// Canvas Click Event
canvas.addEventListener('click', (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const clickedShape = getClickedShape(x, y);
    if (clickedShape) {
        shapes = shapes.filter(shape => shape !== clickedShape);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        shapes.forEach(shape => {
            if (shape.type === 'rect') {
                ctx.fillStyle = getRandomColor();
                ctx.fillRect(shape.x, shape.y, shape.width, shape.height);
            } else if (shape.type === 'circle') {
                ctx.beginPath();
                ctx.arc(shape.x, shape.y, shape.radius, 0, Math.PI * 2);
                ctx.fillStyle = getRandomColor();
                ctx.fill();
            } else if (shape.type === 'triangle') {
                ctx.beginPath();
                ctx.moveTo(shape.vertices[0].x, shape.vertices[0].y);
                ctx.lineTo(shape.vertices[1].x, shape.vertices[1].y);
                ctx.lineTo(shape.vertices[2].x, shape.vertices[2].y);
                ctx.closePath();
                ctx.fillStyle = getRandomColor();
                ctx.fill();
            }
        });
    } else {
        drawRandomShape(x, y);
    }
});
