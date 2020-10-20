gdjs.QuestionSceneCode = {};
gdjs.QuestionSceneCode.GDQuizTitleTextObjects1= [];
gdjs.QuestionSceneCode.GDQuizTitleTextObjects2= [];
gdjs.QuestionSceneCode.GDQuizTitleTextObjects3= [];
gdjs.QuestionSceneCode.GDQuizAnswerAObjects1= [];
gdjs.QuestionSceneCode.GDQuizAnswerAObjects2= [];
gdjs.QuestionSceneCode.GDQuizAnswerAObjects3= [];
gdjs.QuestionSceneCode.GDQuizAnswerBObjects1= [];
gdjs.QuestionSceneCode.GDQuizAnswerBObjects2= [];
gdjs.QuestionSceneCode.GDQuizAnswerBObjects3= [];
gdjs.QuestionSceneCode.GDQuizAnswerCObjects1= [];
gdjs.QuestionSceneCode.GDQuizAnswerCObjects2= [];
gdjs.QuestionSceneCode.GDQuizAnswerCObjects3= [];
gdjs.QuestionSceneCode.GDQuizAnswerDObjects1= [];
gdjs.QuestionSceneCode.GDQuizAnswerDObjects2= [];
gdjs.QuestionSceneCode.GDQuizAnswerDObjects3= [];
gdjs.QuestionSceneCode.GDQuizTitleBgObjects1= [];
gdjs.QuestionSceneCode.GDQuizTitleBgObjects2= [];
gdjs.QuestionSceneCode.GDQuizTitleBgObjects3= [];
gdjs.QuestionSceneCode.GDQuizCurrentMoneyObjects1= [];
gdjs.QuestionSceneCode.GDQuizCurrentMoneyObjects2= [];
gdjs.QuestionSceneCode.GDQuizCurrentMoneyObjects3= [];
gdjs.QuestionSceneCode.GDQuizGuaranteedMoneyObjects1= [];
gdjs.QuestionSceneCode.GDQuizGuaranteedMoneyObjects2= [];
gdjs.QuestionSceneCode.GDQuizGuaranteedMoneyObjects3= [];
gdjs.QuestionSceneCode.GDQuizAnswerABgObjects1= [];
gdjs.QuestionSceneCode.GDQuizAnswerABgObjects2= [];
gdjs.QuestionSceneCode.GDQuizAnswerABgObjects3= [];
gdjs.QuestionSceneCode.GDQuizAnswerBBgObjects1= [];
gdjs.QuestionSceneCode.GDQuizAnswerBBgObjects2= [];
gdjs.QuestionSceneCode.GDQuizAnswerBBgObjects3= [];
gdjs.QuestionSceneCode.GDQuizAnswerCBgObjects1= [];
gdjs.QuestionSceneCode.GDQuizAnswerCBgObjects2= [];
gdjs.QuestionSceneCode.GDQuizAnswerCBgObjects3= [];
gdjs.QuestionSceneCode.GDQuizAnswerDBgObjects1= [];
gdjs.QuestionSceneCode.GDQuizAnswerDBgObjects2= [];
gdjs.QuestionSceneCode.GDQuizAnswerDBgObjects3= [];

gdjs.QuestionSceneCode.conditionTrue_0 = {val:false};
gdjs.QuestionSceneCode.condition0IsTrue_0 = {val:false};
gdjs.QuestionSceneCode.condition1IsTrue_0 = {val:false};
gdjs.QuestionSceneCode.condition2IsTrue_0 = {val:false};


gdjs.QuestionSceneCode.mapOfGDgdjs_46QuestionSceneCode_46GDQuizTitleTextObjects1Objects = Hashtable.newFrom({"QuizTitleText": gdjs.QuestionSceneCode.GDQuizTitleTextObjects1});gdjs.QuestionSceneCode.mapOfGDgdjs_46QuestionSceneCode_46GDQuizAnswerAObjects1Objects = Hashtable.newFrom({"QuizAnswerA": gdjs.QuestionSceneCode.GDQuizAnswerAObjects1});gdjs.QuestionSceneCode.mapOfGDgdjs_46QuestionSceneCode_46GDQuizAnswerBObjects1Objects = Hashtable.newFrom({"QuizAnswerB": gdjs.QuestionSceneCode.GDQuizAnswerBObjects1});gdjs.QuestionSceneCode.mapOfGDgdjs_46QuestionSceneCode_46GDQuizAnswerCObjects1Objects = Hashtable.newFrom({"QuizAnswerC": gdjs.QuestionSceneCode.GDQuizAnswerCObjects1});gdjs.QuestionSceneCode.mapOfGDgdjs_46QuestionSceneCode_46GDQuizAnswerDObjects1Objects = Hashtable.newFrom({"QuizAnswerD": gdjs.QuestionSceneCode.GDQuizAnswerDObjects1});gdjs.QuestionSceneCode.mapOfGDgdjs_46QuestionSceneCode_46GDQuizAnswerABgObjects1ObjectsGDgdjs_46QuestionSceneCode_46GDQuizAnswerBBgObjects1ObjectsGDgdjs_46QuestionSceneCode_46GDQuizAnswerCBgObjects1ObjectsGDgdjs_46QuestionSceneCode_46GDQuizAnswerDBgObjects1Objects = Hashtable.newFrom({"QuizAnswerABg": gdjs.QuestionSceneCode.GDQuizAnswerABgObjects1, "QuizAnswerBBg": gdjs.QuestionSceneCode.GDQuizAnswerBBgObjects1, "QuizAnswerCBg": gdjs.QuestionSceneCode.GDQuizAnswerCBgObjects1, "QuizAnswerDBg": gdjs.QuestionSceneCode.GDQuizAnswerDBgObjects1});gdjs.QuestionSceneCode.eventsList0 = function(runtimeScene) {

{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("QuizAnswerA"), gdjs.QuestionSceneCode.GDQuizAnswerAObjects1);
gdjs.copyArray(runtimeScene.getObjects("QuizAnswerABg"), gdjs.QuestionSceneCode.GDQuizAnswerABgObjects1);
gdjs.copyArray(runtimeScene.getObjects("QuizAnswerB"), gdjs.QuestionSceneCode.GDQuizAnswerBObjects1);
gdjs.copyArray(runtimeScene.getObjects("QuizAnswerBBg"), gdjs.QuestionSceneCode.GDQuizAnswerBBgObjects1);
gdjs.copyArray(runtimeScene.getObjects("QuizAnswerC"), gdjs.QuestionSceneCode.GDQuizAnswerCObjects1);
gdjs.copyArray(runtimeScene.getObjects("QuizAnswerCBg"), gdjs.QuestionSceneCode.GDQuizAnswerCBgObjects1);
gdjs.copyArray(runtimeScene.getObjects("QuizAnswerD"), gdjs.QuestionSceneCode.GDQuizAnswerDObjects1);
gdjs.copyArray(runtimeScene.getObjects("QuizAnswerDBg"), gdjs.QuestionSceneCode.GDQuizAnswerDBgObjects1);
gdjs.copyArray(runtimeScene.getObjects("QuizTitleText"), gdjs.QuestionSceneCode.GDQuizTitleTextObjects1);
{gdjs.evtsExt__QuizExtension__InitializeQuizGameEngine.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__QuizExtension__PickRandomQuestion.func(runtimeScene, gdjs.QuestionSceneCode.mapOfGDgdjs_46QuestionSceneCode_46GDQuizTitleTextObjects1Objects, gdjs.QuestionSceneCode.mapOfGDgdjs_46QuestionSceneCode_46GDQuizAnswerAObjects1Objects, gdjs.QuestionSceneCode.mapOfGDgdjs_46QuestionSceneCode_46GDQuizAnswerBObjects1Objects, gdjs.QuestionSceneCode.mapOfGDgdjs_46QuestionSceneCode_46GDQuizAnswerCObjects1Objects, gdjs.QuestionSceneCode.mapOfGDgdjs_46QuestionSceneCode_46GDQuizAnswerDObjects1Objects, gdjs.QuestionSceneCode.mapOfGDgdjs_46QuestionSceneCode_46GDQuizAnswerABgObjects1ObjectsGDgdjs_46QuestionSceneCode_46GDQuizAnswerBBgObjects1ObjectsGDgdjs_46QuestionSceneCode_46GDQuizAnswerCBgObjects1ObjectsGDgdjs_46QuestionSceneCode_46GDQuizAnswerDBgObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.QuestionSceneCode.eventsList1 = function(runtimeScene) {

{


gdjs.QuestionSceneCode.condition0IsTrue_0.val = false;
{
gdjs.QuestionSceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.QuestionSceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.QuestionSceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.QuestionSceneCode.mapOfGDgdjs_46QuestionSceneCode_46GDQuizAnswerABgObjects2ObjectsGDgdjs_46QuestionSceneCode_46GDQuizAnswerBBgObjects2ObjectsGDgdjs_46QuestionSceneCode_46GDQuizAnswerCBgObjects2ObjectsGDgdjs_46QuestionSceneCode_46GDQuizAnswerDBgObjects2Objects = Hashtable.newFrom({"QuizAnswerABg": gdjs.QuestionSceneCode.GDQuizAnswerABgObjects2, "QuizAnswerBBg": gdjs.QuestionSceneCode.GDQuizAnswerBBgObjects2, "QuizAnswerCBg": gdjs.QuestionSceneCode.GDQuizAnswerCBgObjects2, "QuizAnswerDBg": gdjs.QuestionSceneCode.GDQuizAnswerDBgObjects2});gdjs.QuestionSceneCode.mapOfGDgdjs_46QuestionSceneCode_46GDQuizAnswerABgObjects2ObjectsGDgdjs_46QuestionSceneCode_46GDQuizAnswerBBgObjects2ObjectsGDgdjs_46QuestionSceneCode_46GDQuizAnswerCBgObjects2ObjectsGDgdjs_46QuestionSceneCode_46GDQuizAnswerDBgObjects2Objects = Hashtable.newFrom({"QuizAnswerABg": gdjs.QuestionSceneCode.GDQuizAnswerABgObjects2, "QuizAnswerBBg": gdjs.QuestionSceneCode.GDQuizAnswerBBgObjects2, "QuizAnswerCBg": gdjs.QuestionSceneCode.GDQuizAnswerCBgObjects2, "QuizAnswerDBg": gdjs.QuestionSceneCode.GDQuizAnswerDBgObjects2});gdjs.QuestionSceneCode.mapOfGDgdjs_46QuestionSceneCode_46GDQuizAnswerABgObjects2ObjectsGDgdjs_46QuestionSceneCode_46GDQuizAnswerBBgObjects2ObjectsGDgdjs_46QuestionSceneCode_46GDQuizAnswerCBgObjects2ObjectsGDgdjs_46QuestionSceneCode_46GDQuizAnswerDBgObjects2Objects = Hashtable.newFrom({"QuizAnswerABg": gdjs.QuestionSceneCode.GDQuizAnswerABgObjects2, "QuizAnswerBBg": gdjs.QuestionSceneCode.GDQuizAnswerBBgObjects2, "QuizAnswerCBg": gdjs.QuestionSceneCode.GDQuizAnswerCBgObjects2, "QuizAnswerDBg": gdjs.QuestionSceneCode.GDQuizAnswerDBgObjects2});gdjs.QuestionSceneCode.eventsList2 = function(runtimeScene) {

};gdjs.QuestionSceneCode.eventsList3 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("QuizAnswerABg"), gdjs.QuestionSceneCode.GDQuizAnswerABgObjects2);
gdjs.copyArray(runtimeScene.getObjects("QuizAnswerBBg"), gdjs.QuestionSceneCode.GDQuizAnswerBBgObjects2);
gdjs.copyArray(runtimeScene.getObjects("QuizAnswerCBg"), gdjs.QuestionSceneCode.GDQuizAnswerCBgObjects2);
gdjs.copyArray(runtimeScene.getObjects("QuizAnswerDBg"), gdjs.QuestionSceneCode.GDQuizAnswerDBgObjects2);

gdjs.QuestionSceneCode.condition0IsTrue_0.val = false;
gdjs.QuestionSceneCode.condition1IsTrue_0.val = false;
{
gdjs.QuestionSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.QuestionSceneCode.condition0IsTrue_0.val ) {
{
gdjs.QuestionSceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.QuestionSceneCode.mapOfGDgdjs_46QuestionSceneCode_46GDQuizAnswerABgObjects2ObjectsGDgdjs_46QuestionSceneCode_46GDQuizAnswerBBgObjects2ObjectsGDgdjs_46QuestionSceneCode_46GDQuizAnswerCBgObjects2ObjectsGDgdjs_46QuestionSceneCode_46GDQuizAnswerDBgObjects2Objects, runtimeScene, true, false);
}}
if (gdjs.QuestionSceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.QuestionSceneCode.GDQuizAnswerABgObjects2 */
/* Reuse gdjs.QuestionSceneCode.GDQuizAnswerBBgObjects2 */
/* Reuse gdjs.QuestionSceneCode.GDQuizAnswerCBgObjects2 */
/* Reuse gdjs.QuestionSceneCode.GDQuizAnswerDBgObjects2 */
{gdjs.evtsExt__QuizExtension__SelectAnswer.func(runtimeScene, gdjs.QuestionSceneCode.mapOfGDgdjs_46QuestionSceneCode_46GDQuizAnswerABgObjects2ObjectsGDgdjs_46QuestionSceneCode_46GDQuizAnswerBBgObjects2ObjectsGDgdjs_46QuestionSceneCode_46GDQuizAnswerCBgObjects2ObjectsGDgdjs_46QuestionSceneCode_46GDQuizAnswerDBgObjects2Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{



}


{


gdjs.QuestionSceneCode.condition0IsTrue_0.val = false;
{
gdjs.QuestionSceneCode.condition0IsTrue_0.val = gdjs.evtsExt__QuizExtension__IsTimeToAnswer.func(runtimeScene, 3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.QuestionSceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("QuizAnswerABg"), gdjs.QuestionSceneCode.GDQuizAnswerABgObjects2);
gdjs.copyArray(runtimeScene.getObjects("QuizAnswerBBg"), gdjs.QuestionSceneCode.GDQuizAnswerBBgObjects2);
gdjs.copyArray(runtimeScene.getObjects("QuizAnswerCBg"), gdjs.QuestionSceneCode.GDQuizAnswerCBgObjects2);
gdjs.copyArray(runtimeScene.getObjects("QuizAnswerDBg"), gdjs.QuestionSceneCode.GDQuizAnswerDBgObjects2);
{gdjs.evtsExt__QuizExtension__HighlightCorrectAnswer.func(runtimeScene, gdjs.QuestionSceneCode.mapOfGDgdjs_46QuestionSceneCode_46GDQuizAnswerABgObjects2ObjectsGDgdjs_46QuestionSceneCode_46GDQuizAnswerBBgObjects2ObjectsGDgdjs_46QuestionSceneCode_46GDQuizAnswerCBgObjects2ObjectsGDgdjs_46QuestionSceneCode_46GDQuizAnswerDBgObjects2Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


gdjs.QuestionSceneCode.eventsList2(runtimeScene);
}


{



}


};gdjs.QuestionSceneCode.eventsList4 = function(runtimeScene) {

{


gdjs.QuestionSceneCode.eventsList1(runtimeScene);
}


{


gdjs.QuestionSceneCode.eventsList3(runtimeScene);
}


};

gdjs.QuestionSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.QuestionSceneCode.GDQuizTitleTextObjects1.length = 0;
gdjs.QuestionSceneCode.GDQuizTitleTextObjects2.length = 0;
gdjs.QuestionSceneCode.GDQuizTitleTextObjects3.length = 0;
gdjs.QuestionSceneCode.GDQuizAnswerAObjects1.length = 0;
gdjs.QuestionSceneCode.GDQuizAnswerAObjects2.length = 0;
gdjs.QuestionSceneCode.GDQuizAnswerAObjects3.length = 0;
gdjs.QuestionSceneCode.GDQuizAnswerBObjects1.length = 0;
gdjs.QuestionSceneCode.GDQuizAnswerBObjects2.length = 0;
gdjs.QuestionSceneCode.GDQuizAnswerBObjects3.length = 0;
gdjs.QuestionSceneCode.GDQuizAnswerCObjects1.length = 0;
gdjs.QuestionSceneCode.GDQuizAnswerCObjects2.length = 0;
gdjs.QuestionSceneCode.GDQuizAnswerCObjects3.length = 0;
gdjs.QuestionSceneCode.GDQuizAnswerDObjects1.length = 0;
gdjs.QuestionSceneCode.GDQuizAnswerDObjects2.length = 0;
gdjs.QuestionSceneCode.GDQuizAnswerDObjects3.length = 0;
gdjs.QuestionSceneCode.GDQuizTitleBgObjects1.length = 0;
gdjs.QuestionSceneCode.GDQuizTitleBgObjects2.length = 0;
gdjs.QuestionSceneCode.GDQuizTitleBgObjects3.length = 0;
gdjs.QuestionSceneCode.GDQuizCurrentMoneyObjects1.length = 0;
gdjs.QuestionSceneCode.GDQuizCurrentMoneyObjects2.length = 0;
gdjs.QuestionSceneCode.GDQuizCurrentMoneyObjects3.length = 0;
gdjs.QuestionSceneCode.GDQuizGuaranteedMoneyObjects1.length = 0;
gdjs.QuestionSceneCode.GDQuizGuaranteedMoneyObjects2.length = 0;
gdjs.QuestionSceneCode.GDQuizGuaranteedMoneyObjects3.length = 0;
gdjs.QuestionSceneCode.GDQuizAnswerABgObjects1.length = 0;
gdjs.QuestionSceneCode.GDQuizAnswerABgObjects2.length = 0;
gdjs.QuestionSceneCode.GDQuizAnswerABgObjects3.length = 0;
gdjs.QuestionSceneCode.GDQuizAnswerBBgObjects1.length = 0;
gdjs.QuestionSceneCode.GDQuizAnswerBBgObjects2.length = 0;
gdjs.QuestionSceneCode.GDQuizAnswerBBgObjects3.length = 0;
gdjs.QuestionSceneCode.GDQuizAnswerCBgObjects1.length = 0;
gdjs.QuestionSceneCode.GDQuizAnswerCBgObjects2.length = 0;
gdjs.QuestionSceneCode.GDQuizAnswerCBgObjects3.length = 0;
gdjs.QuestionSceneCode.GDQuizAnswerDBgObjects1.length = 0;
gdjs.QuestionSceneCode.GDQuizAnswerDBgObjects2.length = 0;
gdjs.QuestionSceneCode.GDQuizAnswerDBgObjects3.length = 0;

gdjs.QuestionSceneCode.eventsList4(runtimeScene);
return;

}

gdjs['QuestionSceneCode'] = gdjs.QuestionSceneCode;
