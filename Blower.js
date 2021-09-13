class Blower {

    constructor(xpos, ypos) {

        var opts = {
            isStatic: true
        }

        this.body = Matter.Bodies.rectangle(xpos, ypos, 200, 100, opts);
        World.add(world, this.body);

    }

    display() {

        rect(this.body.position.x, 
            this.body.position.y, 
            200, 100);

    }

    blow() {

        Matter.Body.applyForce(ball.body, {x: 0, y: 0}, {x: 0, y: 0.0005});

    }

}