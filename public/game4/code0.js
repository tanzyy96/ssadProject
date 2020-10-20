gdjs.MainGameSceneCode = {};
gdjs.MainGameSceneCode.GDPlayerObjects1_1final = [];

gdjs.MainGameSceneCode.GDPlayerObjects1= [];
gdjs.MainGameSceneCode.GDPlayerObjects2= [];
gdjs.MainGameSceneCode.GDPlayerObjects3= [];
gdjs.MainGameSceneCode.GDPlatformObjects1= [];
gdjs.MainGameSceneCode.GDPlatformObjects2= [];
gdjs.MainGameSceneCode.GDPlatformObjects3= [];
gdjs.MainGameSceneCode.GDJumpthruObjects1= [];
gdjs.MainGameSceneCode.GDJumpthruObjects2= [];
gdjs.MainGameSceneCode.GDJumpthruObjects3= [];
gdjs.MainGameSceneCode.GDTiledGrassPlatformObjects1= [];
gdjs.MainGameSceneCode.GDTiledGrassPlatformObjects2= [];
gdjs.MainGameSceneCode.GDTiledGrassPlatformObjects3= [];
gdjs.MainGameSceneCode.GDTiledCastlePlatformEndObjects1= [];
gdjs.MainGameSceneCode.GDTiledCastlePlatformEndObjects2= [];
gdjs.MainGameSceneCode.GDTiledCastlePlatformEndObjects3= [];
gdjs.MainGameSceneCode.GDTiledCastlePlatformObjects1= [];
gdjs.MainGameSceneCode.GDTiledCastlePlatformObjects2= [];
gdjs.MainGameSceneCode.GDTiledCastlePlatformObjects3= [];
gdjs.MainGameSceneCode.GDMovingPlatformObjects1= [];
gdjs.MainGameSceneCode.GDMovingPlatformObjects2= [];
gdjs.MainGameSceneCode.GDMovingPlatformObjects3= [];
gdjs.MainGameSceneCode.GDGoLeftObjects1= [];
gdjs.MainGameSceneCode.GDGoLeftObjects2= [];
gdjs.MainGameSceneCode.GDGoLeftObjects3= [];
gdjs.MainGameSceneCode.GDGoRightObjects1= [];
gdjs.MainGameSceneCode.GDGoRightObjects2= [];
gdjs.MainGameSceneCode.GDGoRightObjects3= [];
gdjs.MainGameSceneCode.GDLadderObjects1= [];
gdjs.MainGameSceneCode.GDLadderObjects2= [];
gdjs.MainGameSceneCode.GDLadderObjects3= [];
gdjs.MainGameSceneCode.GDPlayerHitBoxObjects1= [];
gdjs.MainGameSceneCode.GDPlayerHitBoxObjects2= [];
gdjs.MainGameSceneCode.GDPlayerHitBoxObjects3= [];
gdjs.MainGameSceneCode.GDSlimeWalkObjects1= [];
gdjs.MainGameSceneCode.GDSlimeWalkObjects2= [];
gdjs.MainGameSceneCode.GDSlimeWalkObjects3= [];
gdjs.MainGameSceneCode.GDFlyObjects1= [];
gdjs.MainGameSceneCode.GDFlyObjects2= [];
gdjs.MainGameSceneCode.GDFlyObjects3= [];
gdjs.MainGameSceneCode.GDCloudObjects1= [];
gdjs.MainGameSceneCode.GDCloudObjects2= [];
gdjs.MainGameSceneCode.GDCloudObjects3= [];
gdjs.MainGameSceneCode.GDBackgroundObjectsObjects1= [];
gdjs.MainGameSceneCode.GDBackgroundObjectsObjects2= [];
gdjs.MainGameSceneCode.GDBackgroundObjectsObjects3= [];
gdjs.MainGameSceneCode.GDScoreObjects1= [];
gdjs.MainGameSceneCode.GDScoreObjects2= [];
gdjs.MainGameSceneCode.GDScoreObjects3= [];
gdjs.MainGameSceneCode.GDCoinObjects1= [];
gdjs.MainGameSceneCode.GDCoinObjects2= [];
gdjs.MainGameSceneCode.GDCoinObjects3= [];
gdjs.MainGameSceneCode.GDCoinIconObjects1= [];
gdjs.MainGameSceneCode.GDCoinIconObjects2= [];
gdjs.MainGameSceneCode.GDCoinIconObjects3= [];
gdjs.MainGameSceneCode.GDLeftButtonObjects1= [];
gdjs.MainGameSceneCode.GDLeftButtonObjects2= [];
gdjs.MainGameSceneCode.GDLeftButtonObjects3= [];
gdjs.MainGameSceneCode.GDRightButtonObjects1= [];
gdjs.MainGameSceneCode.GDRightButtonObjects2= [];
gdjs.MainGameSceneCode.GDRightButtonObjects3= [];
gdjs.MainGameSceneCode.GDJumpButtonObjects1= [];
gdjs.MainGameSceneCode.GDJumpButtonObjects2= [];
gdjs.MainGameSceneCode.GDJumpButtonObjects3= [];
gdjs.MainGameSceneCode.GDArrowButtonsBgObjects1= [];
gdjs.MainGameSceneCode.GDArrowButtonsBgObjects2= [];
gdjs.MainGameSceneCode.GDArrowButtonsBgObjects3= [];

gdjs.MainGameSceneCode.conditionTrue_0 = {val:false};
gdjs.MainGameSceneCode.condition0IsTrue_0 = {val:false};
gdjs.MainGameSceneCode.condition1IsTrue_0 = {val:false};
gdjs.MainGameSceneCode.condition2IsTrue_0 = {val:false};
gdjs.MainGameSceneCode.condition3IsTrue_0 = {val:false};
gdjs.MainGameSceneCode.conditionTrue_1 = {val:false};
gdjs.MainGameSceneCode.condition0IsTrue_1 = {val:false};
gdjs.MainGameSceneCode.condition1IsTrue_1 = {val:false};
gdjs.MainGameSceneCode.condition2IsTrue_1 = {val:false};
gdjs.MainGameSceneCode.condition3IsTrue_1 = {val:false};


gdjs.MainGameSceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.MainGameSceneCode.GDPlayerHitBoxObjects1, gdjs.MainGameSceneCode.GDPlayerHitBoxObjects2);


gdjs.MainGameSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameSceneCode.GDPlayerHitBoxObjects2.length;i<l;++i) {
    if ( !(gdjs.MainGameSceneCode.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.MainGameSceneCode.condition0IsTrue_0.val = true;
        gdjs.MainGameSceneCode.GDPlayerHitBoxObjects2[k] = gdjs.MainGameSceneCode.GDPlayerHitBoxObjects2[i];
        ++k;
    }
}
gdjs.MainGameSceneCode.GDPlayerHitBoxObjects2.length = k;}if (gdjs.MainGameSceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainGameSceneCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.MainGameSceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.MainGameSceneCode.GDPlayerObjects2[i].setAnimation(0);
}
}}

}


{

/* Reuse gdjs.MainGameSceneCode.GDPlayerHitBoxObjects1 */

gdjs.MainGameSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameSceneCode.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs.MainGameSceneCode.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.MainGameSceneCode.condition0IsTrue_0.val = true;
        gdjs.MainGameSceneCode.GDPlayerHitBoxObjects1[k] = gdjs.MainGameSceneCode.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.MainGameSceneCode.GDPlayerHitBoxObjects1.length = k;}if (gdjs.MainGameSceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainGameSceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.MainGameSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MainGameSceneCode.GDPlayerObjects1[i].setAnimation(2);
}
}}

}


};gdjs.MainGameSceneCode.mapOfGDgdjs_46MainGameSceneCode_46GDGoLeftObjects1Objects = Hashtable.newFrom({"GoLeft": gdjs.MainGameSceneCode.GDGoLeftObjects1});gdjs.MainGameSceneCode.mapOfGDgdjs_46MainGameSceneCode_46GDMovingPlatformObjects1Objects = Hashtable.newFrom({"MovingPlatform": gdjs.MainGameSceneCode.GDMovingPlatformObjects1});gdjs.MainGameSceneCode.mapOfGDgdjs_46MainGameSceneCode_46GDGoRightObjects1Objects = Hashtable.newFrom({"GoRight": gdjs.MainGameSceneCode.GDGoRightObjects1});gdjs.MainGameSceneCode.mapOfGDgdjs_46MainGameSceneCode_46GDMovingPlatformObjects1Objects = Hashtable.newFrom({"MovingPlatform": gdjs.MainGameSceneCode.GDMovingPlatformObjects1});gdjs.MainGameSceneCode.mapOfGDgdjs_46MainGameSceneCode_46GDGoLeftObjects1Objects = Hashtable.newFrom({"GoLeft": gdjs.MainGameSceneCode.GDGoLeftObjects1});gdjs.MainGameSceneCode.mapOfGDgdjs_46MainGameSceneCode_46GDSlimeWalkObjects1ObjectsGDgdjs_46MainGameSceneCode_46GDFlyObjects1Objects = Hashtable.newFrom({"SlimeWalk": gdjs.MainGameSceneCode.GDSlimeWalkObjects1, "Fly": gdjs.MainGameSceneCode.GDFlyObjects1});gdjs.MainGameSceneCode.mapOfGDgdjs_46MainGameSceneCode_46GDGoRightObjects1Objects = Hashtable.newFrom({"GoRight": gdjs.MainGameSceneCode.GDGoRightObjects1});gdjs.MainGameSceneCode.mapOfGDgdjs_46MainGameSceneCode_46GDSlimeWalkObjects1ObjectsGDgdjs_46MainGameSceneCode_46GDFlyObjects1Objects = Hashtable.newFrom({"SlimeWalk": gdjs.MainGameSceneCode.GDSlimeWalkObjects1, "Fly": gdjs.MainGameSceneCode.GDFlyObjects1});gdjs.MainGameSceneCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.MainGameSceneCode.GDFlyObjects1, gdjs.MainGameSceneCode.GDFlyObjects2);

gdjs.copyArray(gdjs.MainGameSceneCode.GDSlimeWalkObjects1, gdjs.MainGameSceneCode.GDSlimeWalkObjects2);


gdjs.MainGameSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameSceneCode.GDSlimeWalkObjects2.length;i<l;++i) {
    if ( gdjs.MainGameSceneCode.GDSlimeWalkObjects2[i].getVariableNumber(gdjs.MainGameSceneCode.GDSlimeWalkObjects2[i].getVariables().get("GoingLeft")) == 1 ) {
        gdjs.MainGameSceneCode.condition0IsTrue_0.val = true;
        gdjs.MainGameSceneCode.GDSlimeWalkObjects2[k] = gdjs.MainGameSceneCode.GDSlimeWalkObjects2[i];
        ++k;
    }
}
gdjs.MainGameSceneCode.GDSlimeWalkObjects2.length = k;for(var i = 0, k = 0, l = gdjs.MainGameSceneCode.GDFlyObjects2.length;i<l;++i) {
    if ( gdjs.MainGameSceneCode.GDFlyObjects2[i].getVariableNumber(gdjs.MainGameSceneCode.GDFlyObjects2[i].getVariables().get("GoingLeft")) == 1 ) {
        gdjs.MainGameSceneCode.condition0IsTrue_0.val = true;
        gdjs.MainGameSceneCode.GDFlyObjects2[k] = gdjs.MainGameSceneCode.GDFlyObjects2[i];
        ++k;
    }
}
gdjs.MainGameSceneCode.GDFlyObjects2.length = k;}if (gdjs.MainGameSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainGameSceneCode.GDFlyObjects2 */
/* Reuse gdjs.MainGameSceneCode.GDSlimeWalkObjects2 */
{for(var i = 0, len = gdjs.MainGameSceneCode.GDFlyObjects2.length ;i < len;++i) {
    gdjs.MainGameSceneCode.GDFlyObjects2[i].addForce(-(300), 0, 0);
}
}{for(var i = 0, len = gdjs.MainGameSceneCode.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.MainGameSceneCode.GDSlimeWalkObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
for(var i = 0, len = gdjs.MainGameSceneCode.GDFlyObjects2.length ;i < len;++i) {
    gdjs.MainGameSceneCode.GDFlyObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.MainGameSceneCode.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.MainGameSceneCode.GDSlimeWalkObjects2[i].flipX(false);
}
for(var i = 0, len = gdjs.MainGameSceneCode.GDFlyObjects2.length ;i < len;++i) {
    gdjs.MainGameSceneCode.GDFlyObjects2[i].flipX(false);
}
}}

}


{

/* Reuse gdjs.MainGameSceneCode.GDFlyObjects1 */
/* Reuse gdjs.MainGameSceneCode.GDSlimeWalkObjects1 */

gdjs.MainGameSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameSceneCode.GDSlimeWalkObjects1.length;i<l;++i) {
    if ( gdjs.MainGameSceneCode.GDSlimeWalkObjects1[i].getVariableNumber(gdjs.MainGameSceneCode.GDSlimeWalkObjects1[i].getVariables().get("GoingLeft")) == 0 ) {
        gdjs.MainGameSceneCode.condition0IsTrue_0.val = true;
        gdjs.MainGameSceneCode.GDSlimeWalkObjects1[k] = gdjs.MainGameSceneCode.GDSlimeWalkObjects1[i];
        ++k;
    }
}
gdjs.MainGameSceneCode.GDSlimeWalkObjects1.length = k;for(var i = 0, k = 0, l = gdjs.MainGameSceneCode.GDFlyObjects1.length;i<l;++i) {
    if ( gdjs.MainGameSceneCode.GDFlyObjects1[i].getVariableNumber(gdjs.MainGameSceneCode.GDFlyObjects1[i].getVariables().get("GoingLeft")) == 0 ) {
        gdjs.MainGameSceneCode.condition0IsTrue_0.val = true;
        gdjs.MainGameSceneCode.GDFlyObjects1[k] = gdjs.MainGameSceneCode.GDFlyObjects1[i];
        ++k;
    }
}
gdjs.MainGameSceneCode.GDFlyObjects1.length = k;}if (gdjs.MainGameSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainGameSceneCode.GDFlyObjects1 */
/* Reuse gdjs.MainGameSceneCode.GDSlimeWalkObjects1 */
{for(var i = 0, len = gdjs.MainGameSceneCode.GDFlyObjects1.length ;i < len;++i) {
    gdjs.MainGameSceneCode.GDFlyObjects1[i].addForce(300, 0, 0);
}
}{for(var i = 0, len = gdjs.MainGameSceneCode.GDSlimeWalkObjects1.length ;i < len;++i) {
    gdjs.MainGameSceneCode.GDSlimeWalkObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
for(var i = 0, len = gdjs.MainGameSceneCode.GDFlyObjects1.length ;i < len;++i) {
    gdjs.MainGameSceneCode.GDFlyObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.MainGameSceneCode.GDSlimeWalkObjects1.length ;i < len;++i) {
    gdjs.MainGameSceneCode.GDSlimeWalkObjects1[i].flipX(true);
}
for(var i = 0, len = gdjs.MainGameSceneCode.GDFlyObjects1.length ;i < len;++i) {
    gdjs.MainGameSceneCode.GDFlyObjects1[i].flipX(true);
}
}}

}


};gdjs.MainGameSceneCode.mapOfGDgdjs_46MainGameSceneCode_46GDPlayerHitBoxObjects1Objects = Hashtable.newFrom({"PlayerHitBox": gdjs.MainGameSceneCode.GDPlayerHitBoxObjects1});gdjs.MainGameSceneCode.mapOfGDgdjs_46MainGameSceneCode_46GDSlimeWalkObjects1ObjectsGDgdjs_46MainGameSceneCode_46GDFlyObjects1Objects = Hashtable.newFrom({"SlimeWalk": gdjs.MainGameSceneCode.GDSlimeWalkObjects1, "Fly": gdjs.MainGameSceneCode.GDFlyObjects1});gdjs.MainGameSceneCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.MainGameSceneCode.GDFlyObjects1, gdjs.MainGameSceneCode.GDFlyObjects2);

gdjs.copyArray(gdjs.MainGameSceneCode.GDPlayerHitBoxObjects1, gdjs.MainGameSceneCode.GDPlayerHitBoxObjects2);

gdjs.copyArray(gdjs.MainGameSceneCode.GDSlimeWalkObjects1, gdjs.MainGameSceneCode.GDSlimeWalkObjects2);


gdjs.MainGameSceneCode.condition0IsTrue_0.val = false;
gdjs.MainGameSceneCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameSceneCode.GDPlayerHitBoxObjects2.length;i<l;++i) {
    if ( gdjs.MainGameSceneCode.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.MainGameSceneCode.condition0IsTrue_0.val = true;
        gdjs.MainGameSceneCode.GDPlayerHitBoxObjects2[k] = gdjs.MainGameSceneCode.GDPlayerHitBoxObjects2[i];
        ++k;
    }
}
gdjs.MainGameSceneCode.GDPlayerHitBoxObjects2.length = k;}if ( gdjs.MainGameSceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MainGameSceneCode.GDSlimeWalkObjects2.length;i<l;++i) {
    if ( gdjs.MainGameSceneCode.GDSlimeWalkObjects2[i].getOpacity() == 255 ) {
        gdjs.MainGameSceneCode.condition1IsTrue_0.val = true;
        gdjs.MainGameSceneCode.GDSlimeWalkObjects2[k] = gdjs.MainGameSceneCode.GDSlimeWalkObjects2[i];
        ++k;
    }
}
gdjs.MainGameSceneCode.GDSlimeWalkObjects2.length = k;for(var i = 0, k = 0, l = gdjs.MainGameSceneCode.GDFlyObjects2.length;i<l;++i) {
    if ( gdjs.MainGameSceneCode.GDFlyObjects2[i].getOpacity() == 255 ) {
        gdjs.MainGameSceneCode.condition1IsTrue_0.val = true;
        gdjs.MainGameSceneCode.GDFlyObjects2[k] = gdjs.MainGameSceneCode.GDFlyObjects2[i];
        ++k;
    }
}
gdjs.MainGameSceneCode.GDFlyObjects2.length = k;}}
if (gdjs.MainGameSceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MainGameSceneCode.GDFlyObjects2 */
/* Reuse gdjs.MainGameSceneCode.GDPlayerHitBoxObjects2 */
/* Reuse gdjs.MainGameSceneCode.GDSlimeWalkObjects2 */
{for(var i = 0, len = gdjs.MainGameSceneCode.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.MainGameSceneCode.GDSlimeWalkObjects2[i].setAnimation(1);
}
for(var i = 0, len = gdjs.MainGameSceneCode.GDFlyObjects2.length ;i < len;++i) {
    gdjs.MainGameSceneCode.GDFlyObjects2[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.MainGameSceneCode.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.MainGameSceneCode.GDSlimeWalkObjects2[i].activateBehavior("PlatformerObject", true);
}
for(var i = 0, len = gdjs.MainGameSceneCode.GDFlyObjects2.length ;i < len;++i) {
    gdjs.MainGameSceneCode.GDFlyObjects2[i].activateBehavior("PlatformerObject", true);
}
}{for(var i = 0, len = gdjs.MainGameSceneCode.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.MainGameSceneCode.GDSlimeWalkObjects2[i].getBehavior("PlatformerObject").setGravity(1500);
}
for(var i = 0, len = gdjs.MainGameSceneCode.GDFlyObjects2.length ;i < len;++i) {
    gdjs.MainGameSceneCode.GDFlyObjects2[i].getBehavior("PlatformerObject").setGravity(1500);
}
}{for(var i = 0, len = gdjs.MainGameSceneCode.GDPlayerHitBoxObjects2.length ;i < len;++i) {
    gdjs.MainGameSceneCode.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.MainGameSceneCode.GDPlayerHitBoxObjects2.length ;i < len;++i) {
    gdjs.MainGameSceneCode.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "jump.wav", false, 100, 1);
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "QuestionScene");
}}

}


{

/* Reuse gdjs.MainGameSceneCode.GDFlyObjects1 */
/* Reuse gdjs.MainGameSceneCode.GDPlayerHitBoxObjects1 */
/* Reuse gdjs.MainGameSceneCode.GDSlimeWalkObjects1 */

gdjs.MainGameSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameSceneCode.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs.MainGameSceneCode.GDPlayerHitBoxObjects1[i].getY() >= (( gdjs.MainGameSceneCode.GDFlyObjects1.length === 0 ) ? (( gdjs.MainGameSceneCode.GDSlimeWalkObjects1.length === 0 ) ? 0 :gdjs.MainGameSceneCode.GDSlimeWalkObjects1[0].getPointY("")) :gdjs.MainGameSceneCode.GDFlyObjects1[0].getPointY("")) - (gdjs.MainGameSceneCode.GDPlayerHitBoxObjects1[i].getHeight()) + (( gdjs.MainGameSceneCode.GDFlyObjects1.length === 0 ) ? (( gdjs.MainGameSceneCode.GDSlimeWalkObjects1.length === 0 ) ? 0 :gdjs.MainGameSceneCode.GDSlimeWalkObjects1[0].getHeight()) :gdjs.MainGameSceneCode.GDFlyObjects1[0].getHeight()) / 2 ) {
        gdjs.MainGameSceneCode.condition0IsTrue_0.val = true;
        gdjs.MainGameSceneCode.GDPlayerHitBoxObjects1[k] = gdjs.MainGameSceneCode.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.MainGameSceneCode.GDPlayerHitBoxObjects1.length = k;}if (gdjs.MainGameSceneCode.condition0IsTrue_0.val) {
}

}


};gdjs.MainGameSceneCode.eventsList3 = function(runtimeScene) {

{

/* Reuse gdjs.MainGameSceneCode.GDFlyObjects1 */
/* Reuse gdjs.MainGameSceneCode.GDSlimeWalkObjects1 */

gdjs.MainGameSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameSceneCode.GDSlimeWalkObjects1.length;i<l;++i) {
    if ( gdjs.MainGameSceneCode.GDSlimeWalkObjects1[i].getOpacity() == 0 ) {
        gdjs.MainGameSceneCode.condition0IsTrue_0.val = true;
        gdjs.MainGameSceneCode.GDSlimeWalkObjects1[k] = gdjs.MainGameSceneCode.GDSlimeWalkObjects1[i];
        ++k;
    }
}
gdjs.MainGameSceneCode.GDSlimeWalkObjects1.length = k;for(var i = 0, k = 0, l = gdjs.MainGameSceneCode.GDFlyObjects1.length;i<l;++i) {
    if ( gdjs.MainGameSceneCode.GDFlyObjects1[i].getOpacity() == 0 ) {
        gdjs.MainGameSceneCode.condition0IsTrue_0.val = true;
        gdjs.MainGameSceneCode.GDFlyObjects1[k] = gdjs.MainGameSceneCode.GDFlyObjects1[i];
        ++k;
    }
}
gdjs.MainGameSceneCode.GDFlyObjects1.length = k;}if (gdjs.MainGameSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainGameSceneCode.GDFlyObjects1 */
/* Reuse gdjs.MainGameSceneCode.GDSlimeWalkObjects1 */
{for(var i = 0, len = gdjs.MainGameSceneCode.GDSlimeWalkObjects1.length ;i < len;++i) {
    gdjs.MainGameSceneCode.GDSlimeWalkObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.MainGameSceneCode.GDFlyObjects1.length ;i < len;++i) {
    gdjs.MainGameSceneCode.GDFlyObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.MainGameSceneCode.mapOfGDgdjs_46MainGameSceneCode_46GDPlayerHitBoxObjects1Objects = Hashtable.newFrom({"PlayerHitBox": gdjs.MainGameSceneCode.GDPlayerHitBoxObjects1});gdjs.MainGameSceneCode.mapOfGDgdjs_46MainGameSceneCode_46GDCoinObjects1Objects = Hashtable.newFrom({"Coin": gdjs.MainGameSceneCode.GDCoinObjects1});gdjs.MainGameSceneCode.mapOfGDgdjs_46MainGameSceneCode_46GDPlayerHitBoxObjects1Objects = Hashtable.newFrom({"PlayerHitBox": gdjs.MainGameSceneCode.GDPlayerHitBoxObjects1});gdjs.MainGameSceneCode.mapOfGDgdjs_46MainGameSceneCode_46GDTiledCastlePlatformEndObjects1Objects = Hashtable.newFrom({"TiledCastlePlatformEnd": gdjs.MainGameSceneCode.GDTiledCastlePlatformEndObjects1});gdjs.MainGameSceneCode.mapOfGDgdjs_46MainGameSceneCode_46GDLeftButtonObjects1Objects = Hashtable.newFrom({"LeftButton": gdjs.MainGameSceneCode.GDLeftButtonObjects1});gdjs.MainGameSceneCode.mapOfGDgdjs_46MainGameSceneCode_46GDRightButtonObjects1Objects = Hashtable.newFrom({"RightButton": gdjs.MainGameSceneCode.GDRightButtonObjects1});gdjs.MainGameSceneCode.mapOfGDgdjs_46MainGameSceneCode_46GDJumpButtonObjects1Objects = Hashtable.newFrom({"JumpButton": gdjs.MainGameSceneCode.GDJumpButtonObjects1});gdjs.MainGameSceneCode.eventsList4 = function(runtimeScene) {

{


gdjs.MainGameSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameSceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MainGameSceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.MainGameSceneCode.GDPlayerHitBoxObjects1);
{for(var i = 0, len = gdjs.MainGameSceneCode.GDPlayerHitBoxObjects1.length ;i < len;++i) {
    gdjs.MainGameSceneCode.GDPlayerHitBoxObjects1[i].hide();
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainGameSceneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.MainGameSceneCode.GDPlayerHitBoxObjects1);
{for(var i = 0, len = gdjs.MainGameSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MainGameSceneCode.GDPlayerObjects1[i].setPosition((( gdjs.MainGameSceneCode.GDPlayerHitBoxObjects1.length === 0 ) ? 0 :gdjs.MainGameSceneCode.GDPlayerHitBoxObjects1[0].getPointX("")) - 12,(( gdjs.MainGameSceneCode.GDPlayerHitBoxObjects1.length === 0 ) ? 0 :gdjs.MainGameSceneCode.GDPlayerHitBoxObjects1[0].getPointY("")));
}
}}

}


{



}


{

gdjs.MainGameSceneCode.GDPlayerObjects1.length = 0;


gdjs.MainGameSceneCode.condition0IsTrue_0.val = false;
gdjs.MainGameSceneCode.condition1IsTrue_0.val = false;
{
gdjs.MainGameSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "RShift");
}if ( gdjs.MainGameSceneCode.condition0IsTrue_0.val ) {
{
{gdjs.MainGameSceneCode.conditionTrue_1 = gdjs.MainGameSceneCode.condition1IsTrue_0;
gdjs.MainGameSceneCode.GDPlayerObjects1_1final.length = 0;gdjs.MainGameSceneCode.condition0IsTrue_1.val = false;
gdjs.MainGameSceneCode.condition1IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainGameSceneCode.GDPlayerObjects2);
for(var i = 0, k = 0, l = gdjs.MainGameSceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.MainGameSceneCode.GDPlayerObjects2[i].getAnimation() == 0 ) {
        gdjs.MainGameSceneCode.condition0IsTrue_1.val = true;
        gdjs.MainGameSceneCode.GDPlayerObjects2[k] = gdjs.MainGameSceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.MainGameSceneCode.GDPlayerObjects2.length = k;if( gdjs.MainGameSceneCode.condition0IsTrue_1.val ) {
    gdjs.MainGameSceneCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.MainGameSceneCode.GDPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.MainGameSceneCode.GDPlayerObjects1_1final.indexOf(gdjs.MainGameSceneCode.GDPlayerObjects2[j]) === -1 )
            gdjs.MainGameSceneCode.GDPlayerObjects1_1final.push(gdjs.MainGameSceneCode.GDPlayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainGameSceneCode.GDPlayerObjects2);
for(var i = 0, k = 0, l = gdjs.MainGameSceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.MainGameSceneCode.GDPlayerObjects2[i].getAnimation() == 2 ) {
        gdjs.MainGameSceneCode.condition1IsTrue_1.val = true;
        gdjs.MainGameSceneCode.GDPlayerObjects2[k] = gdjs.MainGameSceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.MainGameSceneCode.GDPlayerObjects2.length = k;if( gdjs.MainGameSceneCode.condition1IsTrue_1.val ) {
    gdjs.MainGameSceneCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.MainGameSceneCode.GDPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.MainGameSceneCode.GDPlayerObjects1_1final.indexOf(gdjs.MainGameSceneCode.GDPlayerObjects2[j]) === -1 )
            gdjs.MainGameSceneCode.GDPlayerObjects1_1final.push(gdjs.MainGameSceneCode.GDPlayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.MainGameSceneCode.GDPlayerObjects1_1final, gdjs.MainGameSceneCode.GDPlayerObjects1);
}
}
}}
if (gdjs.MainGameSceneCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "jump.wav", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.MainGameSceneCode.GDPlayerHitBoxObjects1);

gdjs.MainGameSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameSceneCode.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs.MainGameSceneCode.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.MainGameSceneCode.condition0IsTrue_0.val = true;
        gdjs.MainGameSceneCode.GDPlayerHitBoxObjects1[k] = gdjs.MainGameSceneCode.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.MainGameSceneCode.GDPlayerHitBoxObjects1.length = k;}if (gdjs.MainGameSceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainGameSceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.MainGameSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MainGameSceneCode.GDPlayerObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.MainGameSceneCode.GDPlayerHitBoxObjects1);

gdjs.MainGameSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameSceneCode.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs.MainGameSceneCode.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.MainGameSceneCode.condition0IsTrue_0.val = true;
        gdjs.MainGameSceneCode.GDPlayerHitBoxObjects1[k] = gdjs.MainGameSceneCode.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.MainGameSceneCode.GDPlayerHitBoxObjects1.length = k;}if (gdjs.MainGameSceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainGameSceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.MainGameSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MainGameSceneCode.GDPlayerObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.MainGameSceneCode.GDPlayerHitBoxObjects1);

gdjs.MainGameSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameSceneCode.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs.MainGameSceneCode.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.MainGameSceneCode.condition0IsTrue_0.val = true;
        gdjs.MainGameSceneCode.GDPlayerHitBoxObjects1[k] = gdjs.MainGameSceneCode.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.MainGameSceneCode.GDPlayerHitBoxObjects1.length = k;}if (gdjs.MainGameSceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MainGameSceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.MainGameSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.MainGameSceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainGameSceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.MainGameSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MainGameSceneCode.GDPlayerObjects1[i].flipX(true);
}
}}

}


{


gdjs.MainGameSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.MainGameSceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainGameSceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.MainGameSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MainGameSceneCode.GDPlayerObjects1[i].flipX(false);
}
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainGameSceneCode.GDPlayerObjects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.MainGameSceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.MainGameSceneCode.GDPlayerObjects1[0].getPointX("")), "", 0);
}}

}


{



}


{


gdjs.MainGameSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameSceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MainGameSceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("GoLeft"), gdjs.MainGameSceneCode.GDGoLeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("GoRight"), gdjs.MainGameSceneCode.GDGoRightObjects1);
{for(var i = 0, len = gdjs.MainGameSceneCode.GDGoLeftObjects1.length ;i < len;++i) {
    gdjs.MainGameSceneCode.GDGoLeftObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MainGameSceneCode.GDGoRightObjects1.length ;i < len;++i) {
    gdjs.MainGameSceneCode.GDGoRightObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GoLeft"), gdjs.MainGameSceneCode.GDGoLeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("MovingPlatform"), gdjs.MainGameSceneCode.GDMovingPlatformObjects1);

gdjs.MainGameSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainGameSceneCode.mapOfGDgdjs_46MainGameSceneCode_46GDGoLeftObjects1Objects, gdjs.MainGameSceneCode.mapOfGDgdjs_46MainGameSceneCode_46GDMovingPlatformObjects1Objects, false, runtimeScene, false);
}if (gdjs.MainGameSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainGameSceneCode.GDMovingPlatformObjects1 */
{for(var i = 0, len = gdjs.MainGameSceneCode.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs.MainGameSceneCode.GDMovingPlatformObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.MainGameSceneCode.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs.MainGameSceneCode.GDMovingPlatformObjects1[i].addForce(-(150), 0, 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GoRight"), gdjs.MainGameSceneCode.GDGoRightObjects1);
gdjs.copyArray(runtimeScene.getObjects("MovingPlatform"), gdjs.MainGameSceneCode.GDMovingPlatformObjects1);

gdjs.MainGameSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainGameSceneCode.mapOfGDgdjs_46MainGameSceneCode_46GDGoRightObjects1Objects, gdjs.MainGameSceneCode.mapOfGDgdjs_46MainGameSceneCode_46GDMovingPlatformObjects1Objects, false, runtimeScene, false);
}if (gdjs.MainGameSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainGameSceneCode.GDMovingPlatformObjects1 */
{for(var i = 0, len = gdjs.MainGameSceneCode.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs.MainGameSceneCode.GDMovingPlatformObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.MainGameSceneCode.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs.MainGameSceneCode.GDMovingPlatformObjects1[i].addForce(150, 0, 1);
}
}}

}


{



}


{



}


{


gdjs.MainGameSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameSceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MainGameSceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Fly"), gdjs.MainGameSceneCode.GDFlyObjects1);
{for(var i = 0, len = gdjs.MainGameSceneCode.GDFlyObjects1.length ;i < len;++i) {
    gdjs.MainGameSceneCode.GDFlyObjects1[i].activateBehavior("PlatformerObject", false);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Fly"), gdjs.MainGameSceneCode.GDFlyObjects1);
gdjs.copyArray(runtimeScene.getObjects("GoLeft"), gdjs.MainGameSceneCode.GDGoLeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("SlimeWalk"), gdjs.MainGameSceneCode.GDSlimeWalkObjects1);

gdjs.MainGameSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainGameSceneCode.mapOfGDgdjs_46MainGameSceneCode_46GDGoLeftObjects1Objects, gdjs.MainGameSceneCode.mapOfGDgdjs_46MainGameSceneCode_46GDSlimeWalkObjects1ObjectsGDgdjs_46MainGameSceneCode_46GDFlyObjects1Objects, false, runtimeScene, false);
}if (gdjs.MainGameSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainGameSceneCode.GDFlyObjects1 */
/* Reuse gdjs.MainGameSceneCode.GDSlimeWalkObjects1 */
{for(var i = 0, len = gdjs.MainGameSceneCode.GDSlimeWalkObjects1.length ;i < len;++i) {
    gdjs.MainGameSceneCode.GDSlimeWalkObjects1[i].returnVariable(gdjs.MainGameSceneCode.GDSlimeWalkObjects1[i].getVariables().get("GoingLeft")).setNumber(1);
}
for(var i = 0, len = gdjs.MainGameSceneCode.GDFlyObjects1.length ;i < len;++i) {
    gdjs.MainGameSceneCode.GDFlyObjects1[i].returnVariable(gdjs.MainGameSceneCode.GDFlyObjects1[i].getVariables().get("GoingLeft")).setNumber(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fly"), gdjs.MainGameSceneCode.GDFlyObjects1);
gdjs.copyArray(runtimeScene.getObjects("GoRight"), gdjs.MainGameSceneCode.GDGoRightObjects1);
gdjs.copyArray(runtimeScene.getObjects("SlimeWalk"), gdjs.MainGameSceneCode.GDSlimeWalkObjects1);

gdjs.MainGameSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainGameSceneCode.mapOfGDgdjs_46MainGameSceneCode_46GDGoRightObjects1Objects, gdjs.MainGameSceneCode.mapOfGDgdjs_46MainGameSceneCode_46GDSlimeWalkObjects1ObjectsGDgdjs_46MainGameSceneCode_46GDFlyObjects1Objects, false, runtimeScene, false);
}if (gdjs.MainGameSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainGameSceneCode.GDFlyObjects1 */
/* Reuse gdjs.MainGameSceneCode.GDSlimeWalkObjects1 */
{for(var i = 0, len = gdjs.MainGameSceneCode.GDSlimeWalkObjects1.length ;i < len;++i) {
    gdjs.MainGameSceneCode.GDSlimeWalkObjects1[i].returnVariable(gdjs.MainGameSceneCode.GDSlimeWalkObjects1[i].getVariables().get("GoingLeft")).setNumber(0);
}
for(var i = 0, len = gdjs.MainGameSceneCode.GDFlyObjects1.length ;i < len;++i) {
    gdjs.MainGameSceneCode.GDFlyObjects1[i].returnVariable(gdjs.MainGameSceneCode.GDFlyObjects1[i].getVariables().get("GoingLeft")).setNumber(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fly"), gdjs.MainGameSceneCode.GDFlyObjects1);
gdjs.copyArray(runtimeScene.getObjects("SlimeWalk"), gdjs.MainGameSceneCode.GDSlimeWalkObjects1);

gdjs.MainGameSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameSceneCode.GDSlimeWalkObjects1.length;i<l;++i) {
    if ( gdjs.MainGameSceneCode.GDSlimeWalkObjects1[i].getAnimation() == 0 ) {
        gdjs.MainGameSceneCode.condition0IsTrue_0.val = true;
        gdjs.MainGameSceneCode.GDSlimeWalkObjects1[k] = gdjs.MainGameSceneCode.GDSlimeWalkObjects1[i];
        ++k;
    }
}
gdjs.MainGameSceneCode.GDSlimeWalkObjects1.length = k;for(var i = 0, k = 0, l = gdjs.MainGameSceneCode.GDFlyObjects1.length;i<l;++i) {
    if ( gdjs.MainGameSceneCode.GDFlyObjects1[i].getAnimation() == 0 ) {
        gdjs.MainGameSceneCode.condition0IsTrue_0.val = true;
        gdjs.MainGameSceneCode.GDFlyObjects1[k] = gdjs.MainGameSceneCode.GDFlyObjects1[i];
        ++k;
    }
}
gdjs.MainGameSceneCode.GDFlyObjects1.length = k;}if (gdjs.MainGameSceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MainGameSceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Fly"), gdjs.MainGameSceneCode.GDFlyObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.MainGameSceneCode.GDPlayerHitBoxObjects1);
gdjs.copyArray(runtimeScene.getObjects("SlimeWalk"), gdjs.MainGameSceneCode.GDSlimeWalkObjects1);

gdjs.MainGameSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainGameSceneCode.mapOfGDgdjs_46MainGameSceneCode_46GDPlayerHitBoxObjects1Objects, gdjs.MainGameSceneCode.mapOfGDgdjs_46MainGameSceneCode_46GDSlimeWalkObjects1ObjectsGDgdjs_46MainGameSceneCode_46GDFlyObjects1Objects, false, runtimeScene, false);
}if (gdjs.MainGameSceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MainGameSceneCode.eventsList2(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.MainGameSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
}if (gdjs.MainGameSceneCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).add(50);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Fly"), gdjs.MainGameSceneCode.GDFlyObjects1);
gdjs.copyArray(runtimeScene.getObjects("SlimeWalk"), gdjs.MainGameSceneCode.GDSlimeWalkObjects1);

gdjs.MainGameSceneCode.condition0IsTrue_0.val = false;
gdjs.MainGameSceneCode.condition1IsTrue_0.val = false;
gdjs.MainGameSceneCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameSceneCode.GDSlimeWalkObjects1.length;i<l;++i) {
    if ( gdjs.MainGameSceneCode.GDSlimeWalkObjects1[i].getAnimation() == 1 ) {
        gdjs.MainGameSceneCode.condition0IsTrue_0.val = true;
        gdjs.MainGameSceneCode.GDSlimeWalkObjects1[k] = gdjs.MainGameSceneCode.GDSlimeWalkObjects1[i];
        ++k;
    }
}
gdjs.MainGameSceneCode.GDSlimeWalkObjects1.length = k;for(var i = 0, k = 0, l = gdjs.MainGameSceneCode.GDFlyObjects1.length;i<l;++i) {
    if ( gdjs.MainGameSceneCode.GDFlyObjects1[i].getAnimation() == 1 ) {
        gdjs.MainGameSceneCode.condition0IsTrue_0.val = true;
        gdjs.MainGameSceneCode.GDFlyObjects1[k] = gdjs.MainGameSceneCode.GDFlyObjects1[i];
        ++k;
    }
}
gdjs.MainGameSceneCode.GDFlyObjects1.length = k;}if ( gdjs.MainGameSceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MainGameSceneCode.GDSlimeWalkObjects1.length;i<l;++i) {
    if ( gdjs.MainGameSceneCode.GDSlimeWalkObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.MainGameSceneCode.condition1IsTrue_0.val = true;
        gdjs.MainGameSceneCode.GDSlimeWalkObjects1[k] = gdjs.MainGameSceneCode.GDSlimeWalkObjects1[i];
        ++k;
    }
}
gdjs.MainGameSceneCode.GDSlimeWalkObjects1.length = k;for(var i = 0, k = 0, l = gdjs.MainGameSceneCode.GDFlyObjects1.length;i<l;++i) {
    if ( gdjs.MainGameSceneCode.GDFlyObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.MainGameSceneCode.condition1IsTrue_0.val = true;
        gdjs.MainGameSceneCode.GDFlyObjects1[k] = gdjs.MainGameSceneCode.GDFlyObjects1[i];
        ++k;
    }
}
gdjs.MainGameSceneCode.GDFlyObjects1.length = k;}if ( gdjs.MainGameSceneCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MainGameSceneCode.GDSlimeWalkObjects1.length;i<l;++i) {
    if ( !(gdjs.MainGameSceneCode.GDSlimeWalkObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.MainGameSceneCode.condition2IsTrue_0.val = true;
        gdjs.MainGameSceneCode.GDSlimeWalkObjects1[k] = gdjs.MainGameSceneCode.GDSlimeWalkObjects1[i];
        ++k;
    }
}
gdjs.MainGameSceneCode.GDSlimeWalkObjects1.length = k;for(var i = 0, k = 0, l = gdjs.MainGameSceneCode.GDFlyObjects1.length;i<l;++i) {
    if ( !(gdjs.MainGameSceneCode.GDFlyObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.MainGameSceneCode.condition2IsTrue_0.val = true;
        gdjs.MainGameSceneCode.GDFlyObjects1[k] = gdjs.MainGameSceneCode.GDFlyObjects1[i];
        ++k;
    }
}
gdjs.MainGameSceneCode.GDFlyObjects1.length = k;}}
}
if (gdjs.MainGameSceneCode.condition2IsTrue_0.val) {
/* Reuse gdjs.MainGameSceneCode.GDFlyObjects1 */
/* Reuse gdjs.MainGameSceneCode.GDSlimeWalkObjects1 */
{for(var i = 0, len = gdjs.MainGameSceneCode.GDSlimeWalkObjects1.length ;i < len;++i) {
    gdjs.MainGameSceneCode.GDSlimeWalkObjects1[i].activateBehavior("PlatformerObject", false);
}
for(var i = 0, len = gdjs.MainGameSceneCode.GDFlyObjects1.length ;i < len;++i) {
    gdjs.MainGameSceneCode.GDFlyObjects1[i].activateBehavior("PlatformerObject", false);
}
}{for(var i = 0, len = gdjs.MainGameSceneCode.GDSlimeWalkObjects1.length ;i < len;++i) {
    gdjs.MainGameSceneCode.GDSlimeWalkObjects1[i].setOpacity(gdjs.MainGameSceneCode.GDSlimeWalkObjects1[i].getOpacity() - (50 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
for(var i = 0, len = gdjs.MainGameSceneCode.GDFlyObjects1.length ;i < len;++i) {
    gdjs.MainGameSceneCode.GDFlyObjects1[i].setOpacity(gdjs.MainGameSceneCode.GDFlyObjects1[i].getOpacity() - (50 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
{ //Subevents
gdjs.MainGameSceneCode.eventsList3(runtimeScene);} //End of subevents
}

}


{



}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.MainGameSceneCode.GDCoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.MainGameSceneCode.GDPlayerHitBoxObjects1);

gdjs.MainGameSceneCode.condition0IsTrue_0.val = false;
gdjs.MainGameSceneCode.condition1IsTrue_0.val = false;
{
gdjs.MainGameSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainGameSceneCode.mapOfGDgdjs_46MainGameSceneCode_46GDPlayerHitBoxObjects1Objects, gdjs.MainGameSceneCode.mapOfGDgdjs_46MainGameSceneCode_46GDCoinObjects1Objects, false, runtimeScene, false);
}if ( gdjs.MainGameSceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MainGameSceneCode.GDCoinObjects1.length;i<l;++i) {
    if ( gdjs.MainGameSceneCode.GDCoinObjects1[i].getOpacity() == 255 ) {
        gdjs.MainGameSceneCode.condition1IsTrue_0.val = true;
        gdjs.MainGameSceneCode.GDCoinObjects1[k] = gdjs.MainGameSceneCode.GDCoinObjects1[i];
        ++k;
    }
}
gdjs.MainGameSceneCode.GDCoinObjects1.length = k;}}
if (gdjs.MainGameSceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MainGameSceneCode.GDCoinObjects1 */
{for(var i = 0, len = gdjs.MainGameSceneCode.GDCoinObjects1.length ;i < len;++i) {
    gdjs.MainGameSceneCode.GDCoinObjects1[i].setOpacity(254);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "coin.wav", false, 100, 1);
}{runtimeScene.getVariables().getFromIndex(0).add(100);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.MainGameSceneCode.GDCoinObjects1);

gdjs.MainGameSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameSceneCode.GDCoinObjects1.length;i<l;++i) {
    if ( gdjs.MainGameSceneCode.GDCoinObjects1[i].getOpacity() < 255 ) {
        gdjs.MainGameSceneCode.condition0IsTrue_0.val = true;
        gdjs.MainGameSceneCode.GDCoinObjects1[k] = gdjs.MainGameSceneCode.GDCoinObjects1[i];
        ++k;
    }
}
gdjs.MainGameSceneCode.GDCoinObjects1.length = k;}if (gdjs.MainGameSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainGameSceneCode.GDCoinObjects1 */
{for(var i = 0, len = gdjs.MainGameSceneCode.GDCoinObjects1.length ;i < len;++i) {
    gdjs.MainGameSceneCode.GDCoinObjects1[i].setOpacity(gdjs.MainGameSceneCode.GDCoinObjects1[i].getOpacity() - (255 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.MainGameSceneCode.GDCoinObjects1.length ;i < len;++i) {
    gdjs.MainGameSceneCode.GDCoinObjects1[i].addForce(0, -(30), 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.MainGameSceneCode.GDCoinObjects1);

gdjs.MainGameSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameSceneCode.GDCoinObjects1.length;i<l;++i) {
    if ( gdjs.MainGameSceneCode.GDCoinObjects1[i].getOpacity() == 0 ) {
        gdjs.MainGameSceneCode.condition0IsTrue_0.val = true;
        gdjs.MainGameSceneCode.GDCoinObjects1[k] = gdjs.MainGameSceneCode.GDCoinObjects1[i];
        ++k;
    }
}
gdjs.MainGameSceneCode.GDCoinObjects1.length = k;}if (gdjs.MainGameSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainGameSceneCode.GDCoinObjects1 */
{for(var i = 0, len = gdjs.MainGameSceneCode.GDCoinObjects1.length ;i < len;++i) {
    gdjs.MainGameSceneCode.GDCoinObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.MainGameSceneCode.GDPlayerHitBoxObjects1);
gdjs.copyArray(runtimeScene.getObjects("TiledCastlePlatformEnd"), gdjs.MainGameSceneCode.GDTiledCastlePlatformEndObjects1);

gdjs.MainGameSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainGameSceneCode.mapOfGDgdjs_46MainGameSceneCode_46GDPlayerHitBoxObjects1Objects, gdjs.MainGameSceneCode.mapOfGDgdjs_46MainGameSceneCode_46GDTiledCastlePlatformEndObjects1Objects, false, runtimeScene, false);
}if (gdjs.MainGameSceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{



}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.MainGameSceneCode.GDScoreObjects1);
{for(var i = 0, len = gdjs.MainGameSceneCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.MainGameSceneCode.GDScoreObjects1[i].setString("x " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}
}}

}


{



}


{


gdjs.MainGameSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameSceneCode.condition0IsTrue_0.val = !(gdjs.evtTools.systemInfo.isMobile());
}if (gdjs.MainGameSceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ArrowButtonsBg"), gdjs.MainGameSceneCode.GDArrowButtonsBgObjects1);
gdjs.copyArray(runtimeScene.getObjects("JumpButton"), gdjs.MainGameSceneCode.GDJumpButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("LeftButton"), gdjs.MainGameSceneCode.GDLeftButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("RightButton"), gdjs.MainGameSceneCode.GDRightButtonObjects1);
{for(var i = 0, len = gdjs.MainGameSceneCode.GDLeftButtonObjects1.length ;i < len;++i) {
    gdjs.MainGameSceneCode.GDLeftButtonObjects1[i].hide();
}
for(var i = 0, len = gdjs.MainGameSceneCode.GDRightButtonObjects1.length ;i < len;++i) {
    gdjs.MainGameSceneCode.GDRightButtonObjects1[i].hide();
}
for(var i = 0, len = gdjs.MainGameSceneCode.GDJumpButtonObjects1.length ;i < len;++i) {
    gdjs.MainGameSceneCode.GDJumpButtonObjects1[i].hide();
}
for(var i = 0, len = gdjs.MainGameSceneCode.GDArrowButtonsBgObjects1.length ;i < len;++i) {
    gdjs.MainGameSceneCode.GDArrowButtonsBgObjects1[i].hide();
}
}}

}


{


gdjs.MainGameSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameSceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MainGameSceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LeftButton"), gdjs.MainGameSceneCode.GDLeftButtonObjects1);

gdjs.MainGameSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainGameSceneCode.mapOfGDgdjs_46MainGameSceneCode_46GDLeftButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.MainGameSceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.MainGameSceneCode.GDPlayerHitBoxObjects1);
{for(var i = 0, len = gdjs.MainGameSceneCode.GDPlayerHitBoxObjects1.length ;i < len;++i) {
    gdjs.MainGameSceneCode.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RightButton"), gdjs.MainGameSceneCode.GDRightButtonObjects1);

gdjs.MainGameSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainGameSceneCode.mapOfGDgdjs_46MainGameSceneCode_46GDRightButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.MainGameSceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.MainGameSceneCode.GDPlayerHitBoxObjects1);
{for(var i = 0, len = gdjs.MainGameSceneCode.GDPlayerHitBoxObjects1.length ;i < len;++i) {
    gdjs.MainGameSceneCode.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("JumpButton"), gdjs.MainGameSceneCode.GDJumpButtonObjects1);

gdjs.MainGameSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainGameSceneCode.mapOfGDgdjs_46MainGameSceneCode_46GDJumpButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.MainGameSceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.MainGameSceneCode.GDPlayerHitBoxObjects1);
{for(var i = 0, len = gdjs.MainGameSceneCode.GDPlayerHitBoxObjects1.length ;i < len;++i) {
    gdjs.MainGameSceneCode.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


};

gdjs.MainGameSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainGameSceneCode.GDPlayerObjects1.length = 0;
gdjs.MainGameSceneCode.GDPlayerObjects2.length = 0;
gdjs.MainGameSceneCode.GDPlayerObjects3.length = 0;
gdjs.MainGameSceneCode.GDPlatformObjects1.length = 0;
gdjs.MainGameSceneCode.GDPlatformObjects2.length = 0;
gdjs.MainGameSceneCode.GDPlatformObjects3.length = 0;
gdjs.MainGameSceneCode.GDJumpthruObjects1.length = 0;
gdjs.MainGameSceneCode.GDJumpthruObjects2.length = 0;
gdjs.MainGameSceneCode.GDJumpthruObjects3.length = 0;
gdjs.MainGameSceneCode.GDTiledGrassPlatformObjects1.length = 0;
gdjs.MainGameSceneCode.GDTiledGrassPlatformObjects2.length = 0;
gdjs.MainGameSceneCode.GDTiledGrassPlatformObjects3.length = 0;
gdjs.MainGameSceneCode.GDTiledCastlePlatformEndObjects1.length = 0;
gdjs.MainGameSceneCode.GDTiledCastlePlatformEndObjects2.length = 0;
gdjs.MainGameSceneCode.GDTiledCastlePlatformEndObjects3.length = 0;
gdjs.MainGameSceneCode.GDTiledCastlePlatformObjects1.length = 0;
gdjs.MainGameSceneCode.GDTiledCastlePlatformObjects2.length = 0;
gdjs.MainGameSceneCode.GDTiledCastlePlatformObjects3.length = 0;
gdjs.MainGameSceneCode.GDMovingPlatformObjects1.length = 0;
gdjs.MainGameSceneCode.GDMovingPlatformObjects2.length = 0;
gdjs.MainGameSceneCode.GDMovingPlatformObjects3.length = 0;
gdjs.MainGameSceneCode.GDGoLeftObjects1.length = 0;
gdjs.MainGameSceneCode.GDGoLeftObjects2.length = 0;
gdjs.MainGameSceneCode.GDGoLeftObjects3.length = 0;
gdjs.MainGameSceneCode.GDGoRightObjects1.length = 0;
gdjs.MainGameSceneCode.GDGoRightObjects2.length = 0;
gdjs.MainGameSceneCode.GDGoRightObjects3.length = 0;
gdjs.MainGameSceneCode.GDLadderObjects1.length = 0;
gdjs.MainGameSceneCode.GDLadderObjects2.length = 0;
gdjs.MainGameSceneCode.GDLadderObjects3.length = 0;
gdjs.MainGameSceneCode.GDPlayerHitBoxObjects1.length = 0;
gdjs.MainGameSceneCode.GDPlayerHitBoxObjects2.length = 0;
gdjs.MainGameSceneCode.GDPlayerHitBoxObjects3.length = 0;
gdjs.MainGameSceneCode.GDSlimeWalkObjects1.length = 0;
gdjs.MainGameSceneCode.GDSlimeWalkObjects2.length = 0;
gdjs.MainGameSceneCode.GDSlimeWalkObjects3.length = 0;
gdjs.MainGameSceneCode.GDFlyObjects1.length = 0;
gdjs.MainGameSceneCode.GDFlyObjects2.length = 0;
gdjs.MainGameSceneCode.GDFlyObjects3.length = 0;
gdjs.MainGameSceneCode.GDCloudObjects1.length = 0;
gdjs.MainGameSceneCode.GDCloudObjects2.length = 0;
gdjs.MainGameSceneCode.GDCloudObjects3.length = 0;
gdjs.MainGameSceneCode.GDBackgroundObjectsObjects1.length = 0;
gdjs.MainGameSceneCode.GDBackgroundObjectsObjects2.length = 0;
gdjs.MainGameSceneCode.GDBackgroundObjectsObjects3.length = 0;
gdjs.MainGameSceneCode.GDScoreObjects1.length = 0;
gdjs.MainGameSceneCode.GDScoreObjects2.length = 0;
gdjs.MainGameSceneCode.GDScoreObjects3.length = 0;
gdjs.MainGameSceneCode.GDCoinObjects1.length = 0;
gdjs.MainGameSceneCode.GDCoinObjects2.length = 0;
gdjs.MainGameSceneCode.GDCoinObjects3.length = 0;
gdjs.MainGameSceneCode.GDCoinIconObjects1.length = 0;
gdjs.MainGameSceneCode.GDCoinIconObjects2.length = 0;
gdjs.MainGameSceneCode.GDCoinIconObjects3.length = 0;
gdjs.MainGameSceneCode.GDLeftButtonObjects1.length = 0;
gdjs.MainGameSceneCode.GDLeftButtonObjects2.length = 0;
gdjs.MainGameSceneCode.GDLeftButtonObjects3.length = 0;
gdjs.MainGameSceneCode.GDRightButtonObjects1.length = 0;
gdjs.MainGameSceneCode.GDRightButtonObjects2.length = 0;
gdjs.MainGameSceneCode.GDRightButtonObjects3.length = 0;
gdjs.MainGameSceneCode.GDJumpButtonObjects1.length = 0;
gdjs.MainGameSceneCode.GDJumpButtonObjects2.length = 0;
gdjs.MainGameSceneCode.GDJumpButtonObjects3.length = 0;
gdjs.MainGameSceneCode.GDArrowButtonsBgObjects1.length = 0;
gdjs.MainGameSceneCode.GDArrowButtonsBgObjects2.length = 0;
gdjs.MainGameSceneCode.GDArrowButtonsBgObjects3.length = 0;

gdjs.MainGameSceneCode.eventsList4(runtimeScene);
return;

}

gdjs['MainGameSceneCode'] = gdjs.MainGameSceneCode;
