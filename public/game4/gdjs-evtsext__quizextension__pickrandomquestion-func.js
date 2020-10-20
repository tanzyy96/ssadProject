gdjs.evtsExt__QuizExtension__PickRandomQuestion = {};
gdjs.evtsExt__QuizExtension__PickRandomQuestion.stopDoWhile2 = false;

gdjs.evtsExt__QuizExtension__PickRandomQuestion.GDTitleTextObjects1= [];
gdjs.evtsExt__QuizExtension__PickRandomQuestion.GDTitleTextObjects2= [];
gdjs.evtsExt__QuizExtension__PickRandomQuestion.GDAnswerATextObjects1= [];
gdjs.evtsExt__QuizExtension__PickRandomQuestion.GDAnswerATextObjects2= [];
gdjs.evtsExt__QuizExtension__PickRandomQuestion.GDAnswerBTextObjects1= [];
gdjs.evtsExt__QuizExtension__PickRandomQuestion.GDAnswerBTextObjects2= [];
gdjs.evtsExt__QuizExtension__PickRandomQuestion.GDAnswerCTextObjects1= [];
gdjs.evtsExt__QuizExtension__PickRandomQuestion.GDAnswerCTextObjects2= [];
gdjs.evtsExt__QuizExtension__PickRandomQuestion.GDAnswerDTextObjects1= [];
gdjs.evtsExt__QuizExtension__PickRandomQuestion.GDAnswerDTextObjects2= [];
gdjs.evtsExt__QuizExtension__PickRandomQuestion.GDBackgrounGroupObjects1= [];
gdjs.evtsExt__QuizExtension__PickRandomQuestion.GDBackgrounGroupObjects2= [];

gdjs.evtsExt__QuizExtension__PickRandomQuestion.conditionTrue_0 = {val:false};
gdjs.evtsExt__QuizExtension__PickRandomQuestion.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__QuizExtension__PickRandomQuestion.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__QuizExtension__PickRandomQuestion.conditionTrue_1 = {val:false};
gdjs.evtsExt__QuizExtension__PickRandomQuestion.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__QuizExtension__PickRandomQuestion.condition1IsTrue_1 = {val:false};


gdjs.evtsExt__QuizExtension__PickRandomQuestion.eventsList0 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__QuizExtension__PickRandomQuestion.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
/* Reuse gdjs.evtsExt__QuizExtension__PickRandomQuestion.GDTitleTextObjects1 */
{for(var i = 0, len = gdjs.evtsExt__QuizExtension__PickRandomQuestion.GDTitleTextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__QuizExtension__PickRandomQuestion.GDTitleTextObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2) - ((gdjs.evtsExt__QuizExtension__PickRandomQuestion.GDTitleTextObjects1[i].getWidth()) / 2));
}
}}

}


};gdjs.evtsExt__QuizExtension__PickRandomQuestion.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
gdjs.copyArray(eventsFunctionContext.getObjects("BackgrounGroup"), gdjs.evtsExt__QuizExtension__PickRandomQuestion.GDBackgrounGroupObjects1);
{for(var i = 0, len = gdjs.evtsExt__QuizExtension__PickRandomQuestion.GDBackgrounGroupObjects1.length ;i < len;++i) {
    gdjs.evtsExt__QuizExtension__PickRandomQuestion.GDBackgrounGroupObjects1[i].setColor("255;255;255");
}
}}

}


{



}


{


{
{runtimeScene.getVariables().get("quizextension_canSelect").setNumber(1);
}}

}


{



}


{


{
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "quizextension_timeToQuestion");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "quizextension_timeToQuestion");
}}

}


{



}


{


{
{runtimeScene.getVariables().get("quizextension_questionCount").add(1);
}}

}


{



}


{


gdjs.evtsExt__QuizExtension__PickRandomQuestion.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__QuizExtension__PickRandomQuestion.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("quizextension_delete2AnswerUsed")) == 2;
}if (gdjs.evtsExt__QuizExtension__PickRandomQuestion.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("quizextension_delete2AnswerUsed").setNumber(0);
}}

}


{



}


{


{
{runtimeScene.getVariables().get("quizextension_quizQuestion").setNumber(gdjs.randomInRange(1, gdjs.evtTools.common.getVariableChildCount(runtimeScene.getVariables().get("quizextension_questions").getChild(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("quizextension_quizDifficulty"))))));
}}

}


{



}


{


gdjs.evtsExt__QuizExtension__PickRandomQuestion.stopDoWhile2 = false;
do {gdjs.evtsExt__QuizExtension__PickRandomQuestion.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__QuizExtension__PickRandomQuestion.conditionTrue_1 = gdjs.evtsExt__QuizExtension__PickRandomQuestion.condition0IsTrue_0;
gdjs.evtsExt__QuizExtension__PickRandomQuestion.conditionTrue_1.val = (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("quizextension_questions").getChild(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("quizextension_quizDifficulty"))).getChild(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("quizextension_quizQuestion"))).getChild("Picked")) != 0);
}
}if (gdjs.evtsExt__QuizExtension__PickRandomQuestion.condition0IsTrue_0.val) {
if (true) {
{runtimeScene.getVariables().get("quizextension_quizQuestion").setNumber(gdjs.randomInRange(1, gdjs.evtTools.common.getVariableChildCount(runtimeScene.getVariables().get("quizextension_questions").getChild(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("quizextension_quizDifficulty"))))));
}
{ //Subevents: 
gdjs.evtsExt__QuizExtension__PickRandomQuestion.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
} else gdjs.evtsExt__QuizExtension__PickRandomQuestion.stopDoWhile2 = true; 
} while ( !gdjs.evtsExt__QuizExtension__PickRandomQuestion.stopDoWhile2 );

}


{



}


{


{
gdjs.copyArray(eventsFunctionContext.getObjects("AnswerAText"), gdjs.evtsExt__QuizExtension__PickRandomQuestion.GDAnswerATextObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("AnswerBText"), gdjs.evtsExt__QuizExtension__PickRandomQuestion.GDAnswerBTextObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("AnswerCText"), gdjs.evtsExt__QuizExtension__PickRandomQuestion.GDAnswerCTextObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("AnswerDText"), gdjs.evtsExt__QuizExtension__PickRandomQuestion.GDAnswerDTextObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("TitleText"), gdjs.evtsExt__QuizExtension__PickRandomQuestion.GDTitleTextObjects1);
{for(var i = 0, len = gdjs.evtsExt__QuizExtension__PickRandomQuestion.GDTitleTextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__QuizExtension__PickRandomQuestion.GDTitleTextObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("quizextension_questions").getChild(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("quizextension_quizDifficulty"))).getChild(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("quizextension_quizQuestion"))).getChild("Title")));
}
}{for(var i = 0, len = gdjs.evtsExt__QuizExtension__PickRandomQuestion.GDAnswerATextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__QuizExtension__PickRandomQuestion.GDAnswerATextObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("quizextension_questions").getChild(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("quizextension_quizDifficulty"))).getChild(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("quizextension_quizQuestion"))).getChild("A")));
}
}{for(var i = 0, len = gdjs.evtsExt__QuizExtension__PickRandomQuestion.GDAnswerBTextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__QuizExtension__PickRandomQuestion.GDAnswerBTextObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("quizextension_questions").getChild(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("quizextension_quizDifficulty"))).getChild(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("quizextension_quizQuestion"))).getChild("B")));
}
}{for(var i = 0, len = gdjs.evtsExt__QuizExtension__PickRandomQuestion.GDAnswerCTextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__QuizExtension__PickRandomQuestion.GDAnswerCTextObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("quizextension_questions").getChild(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("quizextension_quizDifficulty"))).getChild(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("quizextension_quizQuestion"))).getChild("C")));
}
}{for(var i = 0, len = gdjs.evtsExt__QuizExtension__PickRandomQuestion.GDAnswerDTextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__QuizExtension__PickRandomQuestion.GDAnswerDTextObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("quizextension_questions").getChild(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("quizextension_quizDifficulty"))).getChild(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("quizextension_quizQuestion"))).getChild("D")));
}
}
{ //Subevents
gdjs.evtsExt__QuizExtension__PickRandomQuestion.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{


{
gdjs.copyArray(eventsFunctionContext.getObjects("BackgrounGroup"), gdjs.evtsExt__QuizExtension__PickRandomQuestion.GDBackgrounGroupObjects1);
{for(var i = 0, len = gdjs.evtsExt__QuizExtension__PickRandomQuestion.GDBackgrounGroupObjects1.length ;i < len;++i) {
    gdjs.evtsExt__QuizExtension__PickRandomQuestion.GDBackgrounGroupObjects1[i].returnVariable(gdjs.evtsExt__QuizExtension__PickRandomQuestion.GDBackgrounGroupObjects1[i].getVariables().get("canSelect")).setNumber(1);
}
}}

}


{



}


{


{
{runtimeScene.getVariables().get("quizextension_solution").setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("quizextension_questions").getChild(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("quizextension_quizDifficulty"))).getChild(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("quizextension_quizQuestion"))).getChild("Solution")));
}}

}


{



}


{


{
{runtimeScene.getVariables().get("quizextension_questions").getChild(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("quizextension_quizDifficulty"))).getChild(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("quizextension_quizQuestion"))).getChild("Picked").setNumber(1);
}}

}


};

gdjs.evtsExt__QuizExtension__PickRandomQuestion.func = function(runtimeScene, TitleText, AnswerAText, AnswerBText, AnswerCText, AnswerDText, BackgrounGroup, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"TitleText": TitleText
, "AnswerAText": AnswerAText
, "AnswerBText": AnswerBText
, "AnswerCText": AnswerCText
, "AnswerDText": AnswerDText
, "BackgrounGroup": BackgrounGroup
},
  _objectArraysMap: {
"TitleText": gdjs.objectsListsToArray(TitleText)
, "AnswerAText": gdjs.objectsListsToArray(AnswerAText)
, "AnswerBText": gdjs.objectsListsToArray(AnswerBText)
, "AnswerCText": gdjs.objectsListsToArray(AnswerCText)
, "AnswerDText": gdjs.objectsListsToArray(AnswerDText)
, "BackgrounGroup": gdjs.objectsListsToArray(BackgrounGroup)
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

gdjs.evtsExt__QuizExtension__PickRandomQuestion.GDTitleTextObjects1.length = 0;
gdjs.evtsExt__QuizExtension__PickRandomQuestion.GDTitleTextObjects2.length = 0;
gdjs.evtsExt__QuizExtension__PickRandomQuestion.GDAnswerATextObjects1.length = 0;
gdjs.evtsExt__QuizExtension__PickRandomQuestion.GDAnswerATextObjects2.length = 0;
gdjs.evtsExt__QuizExtension__PickRandomQuestion.GDAnswerBTextObjects1.length = 0;
gdjs.evtsExt__QuizExtension__PickRandomQuestion.GDAnswerBTextObjects2.length = 0;
gdjs.evtsExt__QuizExtension__PickRandomQuestion.GDAnswerCTextObjects1.length = 0;
gdjs.evtsExt__QuizExtension__PickRandomQuestion.GDAnswerCTextObjects2.length = 0;
gdjs.evtsExt__QuizExtension__PickRandomQuestion.GDAnswerDTextObjects1.length = 0;
gdjs.evtsExt__QuizExtension__PickRandomQuestion.GDAnswerDTextObjects2.length = 0;
gdjs.evtsExt__QuizExtension__PickRandomQuestion.GDBackgrounGroupObjects1.length = 0;
gdjs.evtsExt__QuizExtension__PickRandomQuestion.GDBackgrounGroupObjects2.length = 0;

gdjs.evtsExt__QuizExtension__PickRandomQuestion.eventsList2(runtimeScene, eventsFunctionContext);
return;
}

