gdjs.menuCode = {};
gdjs.menuCode.GDboton_95jugarObjects1= [];
gdjs.menuCode.GDboton_95jugarObjects2= [];
gdjs.menuCode.GDfondo_95menuObjects1= [];
gdjs.menuCode.GDfondo_95menuObjects2= [];
gdjs.menuCode.GDfondo_95infoObjects1= [];
gdjs.menuCode.GDfondo_95infoObjects2= [];
gdjs.menuCode.GDboton_95salirObjects1= [];
gdjs.menuCode.GDboton_95salirObjects2= [];
gdjs.menuCode.GDboton_95infoObjects1= [];
gdjs.menuCode.GDboton_95infoObjects2= [];
gdjs.menuCode.GDCruzObjects1= [];
gdjs.menuCode.GDCruzObjects2= [];
gdjs.menuCode.GDNewSpriteObjects1= [];
gdjs.menuCode.GDNewSpriteObjects2= [];


gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDboton_9595jugarObjects1Objects = Hashtable.newFrom({"boton_jugar": gdjs.menuCode.GDboton_95jugarObjects1});
gdjs.menuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "nivel", false);
}}

}


};gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDboton_9595jugarObjects1Objects = Hashtable.newFrom({"boton_jugar": gdjs.menuCode.GDboton_95jugarObjects1});
gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDboton_9595infoObjects1Objects = Hashtable.newFrom({"boton_info": gdjs.menuCode.GDboton_95infoObjects1});
gdjs.menuCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cruz"), gdjs.menuCode.GDCruzObjects1);
gdjs.copyArray(runtimeScene.getObjects("fondo_info"), gdjs.menuCode.GDfondo_95infoObjects1);
{for(var i = 0, len = gdjs.menuCode.GDfondo_95infoObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDfondo_95infoObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.menuCode.GDCruzObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDCruzObjects1[i].hide(false);
}
}}

}


};gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDboton_9595infoObjects1Objects = Hashtable.newFrom({"boton_info": gdjs.menuCode.GDboton_95infoObjects1});
gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDboton_9595salirObjects1Objects = Hashtable.newFrom({"boton_salir": gdjs.menuCode.GDboton_95salirObjects1});
gdjs.menuCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDboton_9595salirObjects1Objects = Hashtable.newFrom({"boton_salir": gdjs.menuCode.GDboton_95salirObjects1});
gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDCruzObjects1Objects = Hashtable.newFrom({"Cruz": gdjs.menuCode.GDCruzObjects1});
gdjs.menuCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cruz"), gdjs.menuCode.GDCruzObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDCruzObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.menuCode.GDCruzObjects1 */
gdjs.copyArray(runtimeScene.getObjects("fondo_info"), gdjs.menuCode.GDfondo_95infoObjects1);
{for(var i = 0, len = gdjs.menuCode.GDfondo_95infoObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDfondo_95infoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.menuCode.GDCruzObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDCruzObjects1[i].hide();
}
}}

}


};gdjs.menuCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("boton_jugar"), gdjs.menuCode.GDboton_95jugarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDboton_9595jugarObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.menuCode.GDboton_95jugarObjects1 */
{for(var i = 0, len = gdjs.menuCode.GDboton_95jugarObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDboton_95jugarObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.menuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("boton_jugar"), gdjs.menuCode.GDboton_95jugarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDboton_9595jugarObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.menuCode.GDboton_95jugarObjects1 */
{for(var i = 0, len = gdjs.menuCode.GDboton_95jugarObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDboton_95jugarObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("boton_info"), gdjs.menuCode.GDboton_95infoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDboton_9595infoObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.menuCode.GDboton_95infoObjects1 */
{for(var i = 0, len = gdjs.menuCode.GDboton_95infoObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDboton_95infoObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.menuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("boton_info"), gdjs.menuCode.GDboton_95infoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDboton_9595infoObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.menuCode.GDboton_95infoObjects1 */
{for(var i = 0, len = gdjs.menuCode.GDboton_95infoObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDboton_95infoObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("boton_salir"), gdjs.menuCode.GDboton_95salirObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDboton_9595salirObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.menuCode.GDboton_95salirObjects1 */
{for(var i = 0, len = gdjs.menuCode.GDboton_95salirObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDboton_95salirObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.menuCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("boton_salir"), gdjs.menuCode.GDboton_95salirObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDboton_9595salirObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.menuCode.GDboton_95salirObjects1 */
{for(var i = 0, len = gdjs.menuCode.GDboton_95salirObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDboton_95salirObjects1[i].setAnimation(0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cruz"), gdjs.menuCode.GDCruzObjects1);
gdjs.copyArray(runtimeScene.getObjects("fondo_info"), gdjs.menuCode.GDfondo_95infoObjects1);
{gdjs.evtTools.sound.playMusic(runtimeScene, "menu.mp3", true, 20, 1);
}{for(var i = 0, len = gdjs.menuCode.GDCruzObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDCruzObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.menuCode.GDfondo_95infoObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDfondo_95infoObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.menuCode.eventsList3(runtimeScene);} //End of subevents
}

}


};

gdjs.menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menuCode.GDboton_95jugarObjects1.length = 0;
gdjs.menuCode.GDboton_95jugarObjects2.length = 0;
gdjs.menuCode.GDfondo_95menuObjects1.length = 0;
gdjs.menuCode.GDfondo_95menuObjects2.length = 0;
gdjs.menuCode.GDfondo_95infoObjects1.length = 0;
gdjs.menuCode.GDfondo_95infoObjects2.length = 0;
gdjs.menuCode.GDboton_95salirObjects1.length = 0;
gdjs.menuCode.GDboton_95salirObjects2.length = 0;
gdjs.menuCode.GDboton_95infoObjects1.length = 0;
gdjs.menuCode.GDboton_95infoObjects2.length = 0;
gdjs.menuCode.GDCruzObjects1.length = 0;
gdjs.menuCode.GDCruzObjects2.length = 0;
gdjs.menuCode.GDNewSpriteObjects1.length = 0;
gdjs.menuCode.GDNewSpriteObjects2.length = 0;

gdjs.menuCode.eventsList4(runtimeScene);

return;

}

gdjs['menuCode'] = gdjs.menuCode;
