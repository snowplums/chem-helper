const data = require('../data/Conversions.json')
const stringed = JSON.stringify(data);
const conversions = JSON.parse(stringed);


function ConvertUnits(props){
    var unitType;
    var currentUnit = props.CurrentUnit;    
    var currentValue = props.CurrentValue;
    var targetUnit = props.TargetUnit;

    

    for(var i in conversions){
        if(conversions[i].hasOwnProperty(currentUnit) && conversions[i].hasOwnProperty(targetUnit)){
            unitType = i;
        }
    }

    if(unitType == null){
        return "error, units incorrect";
    }

    var location = conversions[unitType];

    if(props.CurrentUnit === props.TargetUnit){
        return props.CurrentValue + currentUnit;
    }

    currentValue = currentValue * location[currentUnit];

    currentUnit = location.default;

    if(currentUnit === targetUnit){

        console.log("done, break");
        return currentValue + currentUnit;
    }


    currentValue = currentValue / location[targetUnit];
    
    currentUnit = targetUnit;

    console.log("done");
    //console.log(conversions.unitType);

    return currentValue + currentUnit;

    

}
export default ConvertUnits;
