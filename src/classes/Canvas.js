module.exports = class Canvas {
    constructor(canvas, params) {
        this.canvas = canvas;
        this.params = JSON.parse(JSON.stringify(params));

        this.canvas.addEventListener('scroll', () => {
            alert();
        })
    }

    move(x, y, doRender) {
        this.params.centerX += x;
        this.params.centerY += y;
        if (doRender) this.render();
    }

    scroll(change, doRender) {
        console.log(change);
        const isValidScroll = (change) => {
            const minScroll = 5;
            const maxScroll = Math.min(this.params.width, this.params.height) / 10;
            const resultScroll = this.params.scroll + change;
            return resultScroll > minScroll && resultScroll < maxScroll;
        };

        if (isValidScroll(change)) this.params.scroll += change;

        if (doRender) this.render();
    }

    render() {
        const params = this.params;

        const offsetX = params.width / 2 + params.centerX;
        const offsetY = params.height / 2 + params.centerY;

        // setting size
        this.canvas.width = params.width;
        this.canvas.height = params.height;

        // getting context of canvas
        const $ = this.canvas.getContext('2d');

        // redraw canvas
        $.fillStyle = params.backgroundColor;
        $.fillRect(0, 0, params.width, params.height);

        $.color = params.gridColor;
        for(let lineStep = offsetX - params.width / 2; lineStep <= offsetX + params.width / 2; lineStep += params.scroll){
            $.beginPath();
            $.moveTo(0, lineStep);
            $.lineTo(params.width, lineStep);
            $.moveTo(lineStep, 0);
            $.lineTo(lineStep, params.height);
            $.stroke();
        }
    }
};