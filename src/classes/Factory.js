const Point = require('./Point');

module.exports = function Factory() {


    return {
        createPoint: function(props){
            if(props instanceof Point) return new Point(props.x, props.y);
            if(props){
                if(props.x || props.y) return new Point(props.x || 0, props.y || 0);
                throw 'Wrong point creation params';
            }
            return new Point(0, 0);
        }
    }
};