gdjs.victoriaCode = {};
gdjs.victoriaCode.GDfondo_95victoriaObjects1= [];
gdjs.victoriaCode.GDfondo_95victoriaObjects2= [];
gdjs.victoriaCode.GDboton_95salirObjects1= [];
gdjs.victoriaCode.GDboton_95salirObjects2= [];
gdjs.victoriaCode.GDboton_95repetirObjects1= [];
gdjs.victoriaCode.GDboton_95repetirObjects2= [];
gdjs.victoriaCode.GDNewSpriteObjects1= [];
gdjs.victoriaCode.GDNewSpriteObjects2= [];


gdjs.victoriaCode.mapOfGDgdjs_46victoriaCode_46GDboton_9595salirObjects1Objects = Hashtable.newFrom({"boton_salir": gdjs.victoriaCode.GDboton_95salirObjects1});
gdjs.victoriaCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", false);
}}

}


};gdjs.victoriaCode.mapOfGDgdjs_46victoriaCode_46GDboton_9595salirObjects1Objects = Hashtable.newFrom({"boton_salir": gdjs.victoriaCode.GDboton_95salirObjects1});
gdjs.victoriaCode.mapOfGDgdjs_46victoriaCode_46GDboton_9595repetirObjects1Objects = Hashtable.newFrom({"boton_repetir": gdjs.victoriaCode.GDboton_95repetirObjects1});
gdjs.victoriaCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "nivel", false);
}}

}


};gdjs.victoriaCode.mapOfGDgdjs_46victoriaCode_46GDboton_9595repetirObjects1Objects = Hashtable.newFrom({"boton_repetir": gdjs.victoriaCode.GDboton_95repetirObjects1});
gdjs.victoriaCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("boton_salir"), gdjs.victoriaCode.GDboton_95salirObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.victoriaCode.mapOfGDgdjs_46victoriaCode_46GDboton_9595salirObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.victoriaCode.GDboton_95salirObjects1 */
{for(var i = 0, len = gdjs.victoriaCode.GDboton_95salirObjects1.length ;i < len;++i) {
    gdjs.victoriaCode.GDboton_95salirObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.victoriaCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("boton_salir"), gdjs.victoriaCode.GDboton_95salirObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.victoriaCode.mapOfGDgdjs_46victoriaCode_46GDboton_9595salirObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.victoriaCode.GDboton_95salirObjects1 */
{for(var i = 0, len = gdjs.victoriaCode.GDboton_95salirObjects1.length ;i < len;++i) {
    gdjs.victoriaCode.GDboton_95salirObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("boton_repetir"), gdjs.victoriaCode.GDboton_95repetirObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.victoriaCode.mapOfGDgdjs_46victoriaCode_46GDboton_9595repetirObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.victoriaCode.GDboton_95repetirObjects1 */
{for(var i = 0, len = gdjs.victoriaCode.GDboton_95repetirObjects1.length ;i < len;++i) {
    gdjs.victoriaCode.GDboton_95repetirObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.victoriaCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("boton_repetir"), gdjs.victoriaCode.GDboton_95repetirObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.victoriaCode.mapOfGDgdjs_46victoriaCode_46GDboton_9595repetirObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.victoriaCode.GDboton_95repetirObjects1 */
{for(var i = 0, len = gdjs.victoriaCode.GDboton_95repetirObjects1.length ;i < len;++i) {
    gdjs.victoriaCode.GDboton_95repetirObjects1[i].setAnimation(0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "victoria.ogg", false, 100, 1);
}}

}


};

gdjs.victoriaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.victoriaCode.GDfondo_95victoriaObjects1.length = 0;
gdjs.victoriaCode.GDfondo_95victoriaObjects2.length = 0;
gdjs.victoriaCode.GDboton_95salirObjects1.length = 0;
gdjs.victoriaCode.GDboton_95salirObjects2.length = 0;
gdjs.victoriaCode.GDboton_95repetirObjects1.length = 0;
gdjs.victoriaCode.GDboton_95repetirObjects2.length = 0;
gdjs.victoriaCode.GDNewSpriteObjects1.length = 0;
gdjs.victoriaCode.GDNewSpriteObjects2.length = 0;

gdjs.victoriaCode.eventsList2(runtimeScene);

return;

}

gdjs['victoriaCode'] = gdjs.victoriaCode;
