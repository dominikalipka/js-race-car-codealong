class Game {
    constructor () {
        this.currentTime = 0;
        this.car = null;
    }
    startGame () {
        this.car = new Car();
        this.car.create();
        this.addEventListeners();
        
        let obstaclesArr = [];

        setInterval( () => {
            this.obstacle = new Obstacle();
            this.obstacle.create();
            this.obstacle.draw();
            obstaclesArr.push(this.obstacle);
            console.log(obstaclesArr);
        }, 6000)



        setInterval(() => {
            obstaclesArr.forEach((element) => {
                element.moveDown();
                element.draw();
            } )
        }, 1000)
    }



    addEventListeners(){
        document.addEventListener("keydown", (event) => {
            if(event.key === "ArrowLeft"){
                this.car.moveLeft();
                this.car.draw(); //@todo
            } else if (event.key === "ArrowRight") {
                this.car.moveRight();
                this.car.draw(); //@todo
            }
        });
    }
}


class Thing {
    constructor(className) {
        this.domElm =  null;
    }

    create() {
        this.domElm = document.createElement('div');
        this.domElm.className = this.className;
        const gameElm = document.getElementById('game');
        gameElm.appendChild(this.domElm);
        
    }

    draw() {
        this.domElm.style.width = this.width + '%';
        this.domElm.style.height = this.height + '%'
        this.domElm.style.left = this.x + '%'
        this.domElm.style.top = this.y + '%'
    }
}

class Car extends Thing {
    constructor() {
        super();
        this.x = 50;
        this.y = 100;
        this.width = 10;
        this.height = 20;
        this.className = 'car';
    }
    moveLeft () {
        this.x--;
    }

    moveRight() {
        this.x++;
    }
}

class Obstacle extends Thing {
    constructor() {
        super();
        this.x = Math.random() * 100;
        this.y = 0;
        this.width = 10;
        this.height = 10;
        this.className = 'obstacle'
    }
    moveDown() {
        this.y = this.y + 5;
    }
}