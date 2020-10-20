gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer = {};
gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.GDAnswersGroupObjects1= [];
gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.GDAnswersGroupObjects2= [];

gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.conditionTrue_0 = {val:false};
gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.condition2IsTrue_0 = {val:false};


gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{



}


{



}


{



}


{



}


{



}


{



}


{



}


};gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{



}


{



}


{



}


{



}


{



}


{



}


};gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "quizextension_timeToAnswer");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "quizextension_timeToAnswer");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "CheckAnswerTimer");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "CheckAnswerTimer");
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("AnswersGroup"), gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.GDAnswersGroupObjects1);

gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.GDAnswersGroupObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.GDAnswersGroupObjects1[i].getVariableString(gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.GDAnswersGroupObjects1[i].getVariables().get("answer")) == gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("quizextension_solution")) ) {
        gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.condition0IsTrue_0.val = true;
        gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.GDAnswersGroupObjects1[k] = gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.GDAnswersGroupObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.GDAnswersGroupObjects1.length = k;}if (gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.GDAnswersGroupObjects1 */
{for(var i = 0, len = gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.GDAnswersGroupObjects1.length ;i < len;++i) {
    gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.GDAnswersGroupObjects1[i].setColor("65;117;5");
}
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("AnswersGroup"), gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.GDAnswersGroupObjects1);

gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.condition0IsTrue_0.val = false;
gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.GDAnswersGroupObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.GDAnswersGroupObjects1[i].getVariableString(gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.GDAnswersGroupObjects1[i].getVariables().get("answer")) == gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("quizextension_pickedAnswer")) ) {
        gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.condition0IsTrue_0.val = true;
        gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.GDAnswersGroupObjects1[k] = gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.GDAnswersGroupObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.GDAnswersGroupObjects1.length = k;}if ( gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("quizextension_pickedAnswer")) != gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("quizextension_solution"));
}}
if (gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.GDAnswersGroupObjects1 */
{for(var i = 0, len = gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.GDAnswersGroupObjects1.length ;i < len;++i) {
    gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.GDAnswersGroupObjects1[i].setColor("208;2;27");
}
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("AnswersGroup"), gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.GDAnswersGroupObjects1);

gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.condition0IsTrue_0.val = false;
gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.GDAnswersGroupObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.GDAnswersGroupObjects1[i].getVariableString(gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.GDAnswersGroupObjects1[i].getVariables().get("answer")) == gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("quizextension_pickedAnswer")) ) {
        gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.condition0IsTrue_0.val = true;
        gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.GDAnswersGroupObjects1[k] = gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.GDAnswersGroupObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.GDAnswersGroupObjects1.length = k;}if ( gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("quizextension_pickedAnswer")) == gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("quizextension_solution"));
}}
if (gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "quizextension_timeToQuestion");
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "quizextension_timeToQuestion");
}{runtimeScene.getGame().getVariables().get("CorrectAnswer").setNumber(1);
}{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}
{ //Subevents
gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("AnswersGroup"), gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.GDAnswersGroupObjects1);

gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.condition0IsTrue_0.val = false;
gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.GDAnswersGroupObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.GDAnswersGroupObjects1[i].getVariableString(gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.GDAnswersGroupObjects1[i].getVariables().get("answer")) == gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("quizextension_pickedAnswer")) ) {
        gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.condition0IsTrue_0.val = true;
        gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.GDAnswersGroupObjects1[k] = gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.GDAnswersGroupObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.GDAnswersGroupObjects1.length = k;}if ( gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("quizextension_pickedAnswer")) != gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("quizextension_solution"));
}}
if (gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "quizextension_timeToQuestion");
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "quizextension_timeToQuestion");
}{runtimeScene.getGame().getVariables().get("CorrectAnswer").setNumber(0);
}{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}
{ //Subevents
gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.func = function(runtimeScene, AnswersGroup, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"AnswersGroup": AnswersGroup
},
  _objectArraysMap: {
"AnswersGroup": gdjs.objectsListsToArray(AnswersGroup)
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

gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.GDAnswersGroupObjects1.length = 0;
gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.GDAnswersGroupObjects2.length = 0;

gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.eventsList2(runtimeScene, eventsFunctionContext);
return;
}

