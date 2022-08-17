// code your solution here
function saturdayFun(funActivity = "roller-skate"){
    return `This Saturday, I want to ${funActivity}!`;
}
function mondayWork(action = 'go to the office'){
    return `This Monday, I will ${action}.`;
}
function wrapAdjective(visualFlare){

    return function(param = 'special'){
        return `You are ${visualFlare}${param}${visualFlare}!`;
    };
}