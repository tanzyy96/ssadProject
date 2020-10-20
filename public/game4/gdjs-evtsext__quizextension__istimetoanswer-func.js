gdjs.evtsExt__QuizExtension__IsTimeToAnswer = {};

gdjs.evtsExt__QuizExtension__IsTimeToAnswer.conditionTrue_0 = {val:false};
gdjs.evtsExt__QuizExtension__IsTimeToAnswer.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__QuizExtension__IsTimeToAnswer.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__QuizExtension__IsTimeToAnswer.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__QuizExtension__IsTimeToAnswer.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__QuizExtension__IsTimeToAnswer.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("time")) || 0 : 0), "quizextension_timeToAnswer");
}if (gdjs.evtsExt__QuizExtension__IsTimeToAnswer.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__QuizExtension__IsTimeToAnswer.func = function(runtimeScene, time, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getArgument: function(argName) {
if (argName === "time") return time;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__QuizExtension__IsTimeToAnswer.eventsList0(runtimeScene, eventsFunctionContext);
return !!eventsFunctionContext.returnValue;
}

