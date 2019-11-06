module.exports = class Canvas {
    constructor(canvas, params, doRender) {
        /*---------- Functions ----------*/
        const toggleMouseDown = () => this.mouseIsDown = !this.mouseIsDown;

        const saveMouseDownCoordinates = (event) => {
            this.mouseDownCoordinates.x = event.clientX;
            this.mouseDownCoordinates.y = event.clientY;
        };

        /*---------- Variables ----------*/
        this.canvas = canvas;
        this.mouseIsDown = false;
        this.mouseDownCoordinates = {};
        this.scrollStep = 5;
        this.params = {};
        this.changeParams(params);

        /*---------- Events ----------*/
        this.canvas.addEventListener('wheel', (event) => {
            this.scroll(event.deltaY, true);
        });

        this.canvas.addEventListener('mousedown', (event) => {
            toggleMouseDown();
            saveMouseDownCoordinates(event);
        });

        window.addEventListener('mouseup', toggleMouseDown);

        this.canvas.addEventListener('mousemove', (event) => {
            if (this.mouseIsDown) {
                this.move(this.mouseDownCoordinates.x - event.clientX, this.mouseDownCoordinates.y - event.clientY, true);
                saveMouseDownCoordinates(event);
            }
        });

        if(doRender) this.render();
    }

    move(x, y, doRender) {
        /*---------- Process ----------*/
        this.params.centerX += x;
        this.params.centerY += y;
        if (doRender) this.render();
    }

    scroll(change, doRender) {
        /*---------- Functions ----------*/
        const isValidScroll = (delta) => {
            const minScroll = this.scrollStep;
            const maxScroll = Math.min(this.params.width, this.params.height) / 10;
            const resultScroll = this.params.scroll + delta;
            return resultScroll >= minScroll && resultScroll <= maxScroll;
        };

        /*---------- Variables ----------*/
        const delta = (change > 0) ? this.scrollStep : -this.scrollStep;

        /*---------- Process ----------*/
        if (isValidScroll(delta)) this.params.scroll += delta;
        if (doRender) this.render();
    }

    render() {
        /*---------- Functions ----------*/
        const shouldBeDrawn = (coordinate) => {
            return coordinate % params.scroll === 0;
        };

        const drawLine = (coordinate, vertical) => {
            if (vertical) {
                canvas.moveTo(coordinate, 0);
                canvas.lineTo(coordinate, params.height);
            } else {
                canvas.moveTo(0, coordinate);
                canvas.lineTo(params.width, coordinate);
            }
        };

        const configCanvas = (params) => {
            this.canvas.width = this.params.width;
            this.canvas.height = this.params.height;
            canvas.strokeStyle = params.gridColor;
            canvas.fillStyle = params.backgroundColor;
        };

        const drawGrid = () => {
            canvas.beginPath();
            for (let deltaX = 0; deltaX <= halfWidth; deltaX++) {
                if (shouldBeDrawn(params.centerX + deltaX)) drawLine(halfWidth + deltaX, true);
                if (shouldBeDrawn(params.centerX - deltaX)) drawLine(halfWidth - deltaX, true);
            }
            for (let deltaY = 0; deltaY <= halfHeight; deltaY++) {
                if (shouldBeDrawn(params.centerY + deltaY)) drawLine(halfHeight + deltaY, false);
                if (shouldBeDrawn(params.centerY - deltaY)) drawLine(halfHeight - deltaY, false);
            }
            canvas.stroke();
        };

        const clearCanvas = () => {
            canvas.fillRect(0, 0, params.width, params.height);
            drawGrid(canvas);
        };

        /*---------- Variables ----------*/
        const params = this.params;
        const halfWidth = params.width / 2;
        const halfHeight = params.height / 2;
        const canvas = this.canvas.getContext('2d');

        /*---------- Process ----------*/
        configCanvas(params);
        clearCanvas()
    }

    changeParams(params){
        for(let parameter in params){
            if(params.hasOwnProperty(parameter)) this.params[parameter] = params[parameter];
        }
    }
};