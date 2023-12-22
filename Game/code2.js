gdjs.muertoCode = {};
gdjs.muertoCode.GDfondo_95muertoObjects1= [];
gdjs.muertoCode.GDfondo_95muertoObjects2= [];
gdjs.muertoCode.GDboton_95salirObjects1= [];
gdjs.muertoCode.GDboton_95salirObjects2= [];
gdjs.muertoCode.GDboton_95repetirObjects1= [];
gdjs.muertoCode.GDboton_95repetirObjects2= [];
gdjs.muertoCode.GDNewSpriteObjects1= [];
gdjs.muertoCode.GDNewSpriteObjects2= [];


gdjs.muertoCode.mapOfGDgdjs_46muertoCode_46GDboton_9595salirObjects1Objects = Hashtable.newFrom({"boton_salir": gdjs.muertoCode.GDboton_95salirObjects1});
gdjs.muertoCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", false);
}}

}


};gdjs.muertoCode.mapOfGDgdjs_46muertoCode_46GDboton_9595salirObjects1Objects = Hashtable.newFrom({"boton_salir": gdjs.muertoCode.GDboton_95salirObjects1});
gdjs.muertoCode.mapOfGDgdjs_46muertoCode_46GDboton_9595repetirObjects1Objects = Hashtable.newFrom({"boton_repetir": gdjs.muertoCode.GDboton_95repetirObjects1});
gdjs.muertoCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "nivel", false);
}}

}


};gdjs.muertoCode.mapOfGDgdjs_46muertoCode_46GDboton_9595repetirObjects1Objects = Hashtable.newFrom({"boton_repetir": gdjs.muertoCode.GDboton_95repetirObjects1});
gdjs.muertoCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("boton_salir"), gdjs.muertoCode.GDboton_95salirObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.muertoCode.mapOfGDgdjs_46muertoCode_46GDboton_9595salirObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.muertoCode.GDboton_95salirObjects1 */
{for(var i = 0, len = gdjs.muertoCode.GDboton_95salirObjects1.length ;i < len;++i) {
    gdjs.muertoCode.GDboton_95salirObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.muertoCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("boton_salir"), gdjs.muertoCode.GDboton_95salirObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.muertoCode.mapOfGDgdjs_46muertoCode_46GDboton_9595salirObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.muertoCode.GDboton_95salirObjects1 */
{for(var i = 0, len = gdjs.muertoCode.GDboton_95salirObjects1.length ;i < len;++i) {
    gdjs.muertoCode.GDboton_95salirObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("boton_repetir"), gdjs.muertoCode.GDboton_95repetirObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.muertoCode.mapOfGDgdjs_46muertoCode_46GDboton_9595repetirObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.muertoCode.GDboton_95repetirObjects1 */
{for(var i = 0, len = gdjs.muertoCode.GDboton_95repetirObjects1.length ;i < len;++i) {
    gdjs.muertoCode.GDboton_95repetirObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.muertoCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("boton_repetir"), gdjs.muertoCode.GDboton_95repetirObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.muertoCode.mapOfGDgdjs_46muertoCode_46GDboton_9595repetirObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.muertoCode.GDboton_95repetirObjects1 */
{for(var i = 0, len = gdjs.muertoCode.GDboton_95repetirObjects1.length ;i < len;++i) {
    gdjs.muertoCode.GDboton_95repetirObjects1[i].setAnimation(0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "muerte.mp3", false, 60, 1);
}}

}


};

gdjs.muertoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.muertoCode.GDfondo_95muertoObjects1.length = 0;
gdjs.muertoCode.GDfondo_95muertoObjects2.length = 0;
gdjs.muertoCode.GDboton_95salirObjects1.length = 0;
gdjs.muertoCode.GDboton_95salirObjects2.length = 0;
gdjs.muertoCode.GDboton_95repetirObjects1.length = 0;
gdjs.muertoCode.GDboton_95repetirObjects2.length = 0;
gdjs.muertoCode.GDNewSpriteObjects1.length = 0;
gdjs.muertoCode.GDNewSpriteObjects2.length = 0;

gdjs.muertoCode.eventsList2(runtimeScene);

return;

}

gdjs['muertoCode'] = gdjs.muertoCode;
