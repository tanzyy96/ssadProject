gdjs.evtsExt__QuizExtension__SelectAnswer = {};
gdjs.evtsExt__QuizExtension__SelectAnswer.GDAnswersBgObjects1= [];
gdjs.evtsExt__QuizExtension__SelectAnswer.GDAnswersBgObjects2= [];

gdjs.evtsExt__QuizExtension__SelectAnswer.conditionTrue_0 = {val:false};
gdjs.evtsExt__QuizExtension__SelectAnswer.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__QuizExtension__SelectAnswer.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__QuizExtension__SelectAnswer.condition2IsTrue_0 = {val:false};


gdjs.evtsExt__QuizExtension__SelectAnswer.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("AnswersBg"), gdjs.evtsExt__QuizExtension__SelectAnswer.GDAnswersBgObjects1);

gdjs.evtsExt__QuizExtension__SelectAnswer.condition0IsTrue_0.val = false;
gdjs.evtsExt__QuizExtension__SelectAnswer.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__QuizExtension__SelectAnswer.GDAnswersBgObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__QuizExtension__SelectAnswer.GDAnswersBgObjects1[i].getVariableNumber(gdjs.evtsExt__QuizExtension__SelectAnswer.GDAnswersBgObjects1[i].getVariables().get("canSelect")) == 1 ) {
        gdjs.evtsExt__QuizExtension__SelectAnswer.condition0IsTrue_0.val = true;
        gdjs.evtsExt__QuizExtension__SelectAnswer.GDAnswersBgObjects1[k] = gdjs.evtsExt__QuizExtension__SelectAnswer.GDAnswersBgObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__QuizExtension__SelectAnswer.GDAnswersBgObjects1.length = k;}if ( gdjs.evtsExt__QuizExtension__SelectAnswer.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__QuizExtension__SelectAnswer.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("quizextension_canSelect")) == 1;
}}
if (gdjs.evtsExt__QuizExtension__SelectAnswer.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__QuizExtension__SelectAnswer.GDAnswersBgObjects1 */
{for(var i = 0, len = gdjs.evtsExt__QuizExtension__SelectAnswer.GDAnswersBgObjects1.length ;i < len;++i) {
    gdjs.evtsExt__QuizExtension__SelectAnswer.GDAnswersBgObjects1[i].setColor("224;178;53");
}
}{runtimeScene.getVariables().get("quizextension_pickedAnswer").setString((gdjs.RuntimeObject.getVariableString(((gdjs.evtsExt__QuizExtension__SelectAnswer.GDAnswersBgObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__QuizExtension__SelectAnswer.GDAnswersBgObjects1[0].getVariables()).get("answer"))));
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "quizextension_timeToAnswer");
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "quizextension_timeToAnswer");
}{runtimeScene.getVariables().get("quizextension_canSelect").setNumber(0);
}}

}


{



}


{


gdjs.evtsExt__QuizExtension__SelectAnswer.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__QuizExtension__SelectAnswer.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("quizextension_delete2AnswerUsed")) == 0;
}if (gdjs.evtsExt__QuizExtension__SelectAnswer.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("quizextension_delete2AnswerUsed").setNumber(2);
}}

}


};

gdjs.evtsExt__QuizExtension__SelectAnswer.func = function(runtimeScene, AnswersBg, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"AnswersBg": AnswersBg
},
  _objectArraysMap: {
"AnswersBg": gdjs.objectsListsToArray(AnswersBg)
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__QuizExtension__SelectAnswer.GDAnswersBgObjects1.length = 0;
gdjs.evtsExt__QuizExtension__SelectAnswer.GDAnswersBgObjects2.length = 0;

gdjs.evtsExt__QuizExtension__SelectAnswer.eventsList0(runtimeScene, eventsFunctionContext);
return;
}

