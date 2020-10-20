gdjs.New_32sceneCode = {};
gdjs.New_32sceneCode.GDUISaveObjects1= [];
gdjs.New_32sceneCode.GDUISaveObjects2= [];
gdjs.New_32sceneCode.GDCurrentPlayerNameObjects1= [];
gdjs.New_32sceneCode.GDCurrentPlayerNameObjects2= [];

gdjs.New_32sceneCode.conditionTrue_0 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition2IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition3IsTrue_0 = {val:false};
gdjs.New_32sceneCode.conditionTrue_1 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_1 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_1 = {val:false};
gdjs.New_32sceneCode.condition2IsTrue_1 = {val:false};
gdjs.New_32sceneCode.condition3IsTrue_1 = {val:false};


gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDUISaveObjects1Objects = Hashtable.newFrom({"UISave": gdjs.New_32sceneCode.GDUISaveObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDUISaveObjects1Objects = Hashtable.newFrom({"UISave": gdjs.New_32sceneCode.GDUISaveObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDUISaveObjects1Objects = Hashtable.newFrom({"UISave": gdjs.New_32sceneCode.GDUISaveObjects1});gdjs.New_32sceneCode.eventsList0 = function(runtimeScene) {

{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("UISave"), gdjs.New_32sceneCode.GDUISaveObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDUISaveObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDUISaveObjects1[i].hide(false);
}
}{gdjs.evtTools.storage.readStringFromJSONFile("player", "playerName", runtimeScene, runtimeScene.getVariables().getFromIndex(0));
}{runtimeScene.getGame().getVariables().getFromIndex(0).setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("UISave"), gdjs.New_32sceneCode.GDUISaveObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
gdjs.New_32sceneCode.condition2IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDUISaveObjects1Objects, runtimeScene, true, false);
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.New_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.New_32sceneCode.condition1IsTrue_0.val ) {
{
{gdjs.New_32sceneCode.conditionTrue_1 = gdjs.New_32sceneCode.condition2IsTrue_0;
gdjs.New_32sceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7056444);
}
}}
}
if (gdjs.New_32sceneCode.condition2IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).concatenate("m");
}{gdjs.evtTools.storage.writeStringInJSONFile("player", "playerName", gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CurrentPlayerName"), gdjs.New_32sceneCode.GDCurrentPlayerNameObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDCurrentPlayerNameObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDCurrentPlayerNameObjects1[i].getString() != gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDCurrentPlayerNameObjects1[k] = gdjs.New_32sceneCode.GDCurrentPlayerNameObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDCurrentPlayerNameObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDCurrentPlayerNameObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDCurrentPlayerNameObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDCurrentPlayerNameObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("UISave"), gdjs.New_32sceneCode.GDUISaveObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDUISaveObjects1Objects, runtimeScene, true, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDUISaveObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDUISaveObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDUISaveObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("UISave"), gdjs.New_32sceneCode.GDUISaveObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDUISaveObjects1Objects, runtimeScene, true, true);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDUISaveObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDUISaveObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDUISaveObjects1[i].setAnimation(0);
}
}}

}


};

gdjs.New_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32sceneCode.GDUISaveObjects1.length = 0;
gdjs.New_32sceneCode.GDUISaveObjects2.length = 0;
gdjs.New_32sceneCode.GDCurrentPlayerNameObjects1.length = 0;
gdjs.New_32sceneCode.GDCurrentPlayerNameObjects2.length = 0;

gdjs.New_32sceneCode.eventsList0(runtimeScene);
return;

}

gdjs['New_32sceneCode'] = gdjs.New_32sceneCode;
