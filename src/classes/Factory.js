const Point = require('./Point');
const Edge = require('./Edge');

module.exports = function Factory() {


    return {
        createPoint: function(props){
            if(props instanceof Point) return new Point(props.x, props.y);
            if(props){
                if(props.x || props.y) return new Point(props.x || 0, props.y || 0);
                throw 'Wrong Point creation params';
            }
            return new Point(0, 0);
        },

        createEdge: function (props) {
            if(props instanceof Edge) return new Edge(props.start.x, props.start.y, props.end.x, props.end.y);
            if(props){

                const x1 = props.x1 || 0;
                const y1 = props.y1 || 0;
                const x2 = props.x2 || 0;
                const y2 = props.y2 || 0;

                if(x1 === x2 && y1 === y2) throw "Points are equal or wrong Edge creation param given";
                return new Edge(x1, y1, x2, y2);
            }
            throw "No arguments";
        }
    }
};