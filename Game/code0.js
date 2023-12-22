gdjs.nivelCode = {};
gdjs.nivelCode.GDPersonajeObjects1= [];
gdjs.nivelCode.GDPersonajeObjects2= [];
gdjs.nivelCode.GDPersonajeObjects3= [];
gdjs.nivelCode.GDPersonajeObjects4= [];
gdjs.nivelCode.GDSpaceBackgroundObjects1= [];
gdjs.nivelCode.GDSpaceBackgroundObjects2= [];
gdjs.nivelCode.GDSpaceBackgroundObjects3= [];
gdjs.nivelCode.GDSpaceBackgroundObjects4= [];
gdjs.nivelCode.GDMinaObjects1= [];
gdjs.nivelCode.GDMinaObjects2= [];
gdjs.nivelCode.GDMinaObjects3= [];
gdjs.nivelCode.GDMinaObjects4= [];
gdjs.nivelCode.GDtiburonObjects1= [];
gdjs.nivelCode.GDtiburonObjects2= [];
gdjs.nivelCode.GDtiburonObjects3= [];
gdjs.nivelCode.GDtiburonObjects4= [];
gdjs.nivelCode.GDpompa_95oxigenoObjects1= [];
gdjs.nivelCode.GDpompa_95oxigenoObjects2= [];
gdjs.nivelCode.GDpompa_95oxigenoObjects3= [];
gdjs.nivelCode.GDpompa_95oxigenoObjects4= [];
gdjs.nivelCode.GDExplosionObjects1= [];
gdjs.nivelCode.GDExplosionObjects2= [];
gdjs.nivelCode.GDExplosionObjects3= [];
gdjs.nivelCode.GDExplosionObjects4= [];
gdjs.nivelCode.GDMedusaObjects1= [];
gdjs.nivelCode.GDMedusaObjects2= [];
gdjs.nivelCode.GDMedusaObjects3= [];
gdjs.nivelCode.GDMedusaObjects4= [];
gdjs.nivelCode.GDoxigeno_95contenedorObjects1= [];
gdjs.nivelCode.GDoxigeno_95contenedorObjects2= [];
gdjs.nivelCode.GDoxigeno_95contenedorObjects3= [];
gdjs.nivelCode.GDoxigeno_95contenedorObjects4= [];
gdjs.nivelCode.GDoxigeno_95barraObjects1= [];
gdjs.nivelCode.GDoxigeno_95barraObjects2= [];
gdjs.nivelCode.GDoxigeno_95barraObjects3= [];
gdjs.nivelCode.GDoxigeno_95barraObjects4= [];
gdjs.nivelCode.GDtransicionObjects1= [];
gdjs.nivelCode.GDtransicionObjects2= [];
gdjs.nivelCode.GDtransicionObjects3= [];
gdjs.nivelCode.GDtransicionObjects4= [];
gdjs.nivelCode.GDburbujasObjects1= [];
gdjs.nivelCode.GDburbujasObjects2= [];
gdjs.nivelCode.GDburbujasObjects3= [];
gdjs.nivelCode.GDburbujasObjects4= [];
gdjs.nivelCode.GDoxigenoObjects1= [];
gdjs.nivelCode.GDoxigenoObjects2= [];
gdjs.nivelCode.GDoxigenoObjects3= [];
gdjs.nivelCode.GDoxigenoObjects4= [];
gdjs.nivelCode.GDrecorridoObjects1= [];
gdjs.nivelCode.GDrecorridoObjects2= [];
gdjs.nivelCode.GDrecorridoObjects3= [];
gdjs.nivelCode.GDrecorridoObjects4= [];
gdjs.nivelCode.GDrecorridoBarraObjects1= [];
gdjs.nivelCode.GDrecorridoBarraObjects2= [];
gdjs.nivelCode.GDrecorridoBarraObjects3= [];
gdjs.nivelCode.GDrecorridoBarraObjects4= [];


gdjs.nivelCode.mapOfGDgdjs_46nivelCode_46GDtransicionObjects2Objects = Hashtable.newFrom({"transicion": gdjs.nivelCode.GDtransicionObjects2});
gdjs.nivelCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10125188);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "muerto");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "muerto");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "muerto", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.nivelCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10127268);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "LevelComplete");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2.6, "LevelComplete");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "victoria", false);
}}

}


};gdjs.nivelCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Personaje"), gdjs.nivelCode.GDPersonajeObjects2);
gdjs.copyArray(runtimeScene.getObjects("oxigeno_barra"), gdjs.nivelCode.GDoxigeno_95barraObjects2);
{for(var i = 0, len = gdjs.nivelCode.GDoxigeno_95barraObjects2.length ;i < len;++i) {
    gdjs.nivelCode.GDoxigeno_95barraObjects2[i].setScaleX((( gdjs.nivelCode.GDPersonajeObjects2.length === 0 ) ? 0 :gdjs.nivelCode.GDPersonajeObjects2[0].getBehavior("Health2").Health((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) / 100);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.nivelCode.GDtransicionObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.nivelCode.mapOfGDgdjs_46nivelCode_46GDtransicionObjects2Objects, 0, 0, "UI");
}{for(var i = 0, len = gdjs.nivelCode.GDtransicionObjects2.length ;i < len;++i) {
    gdjs.nivelCode.GDtransicionObjects2[i].setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene));
}
}{for(var i = 0, len = gdjs.nivelCode.GDtransicionObjects2.length ;i < len;++i) {
    gdjs.nivelCode.GDtransicionObjects2[i].setHeight(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
}{for(var i = 0, len = gdjs.nivelCode.GDtransicionObjects2.length ;i < len;++i) {
    gdjs.nivelCode.GDtransicionObjects2[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.nivelCode.GDtransicionObjects2.length ;i < len;++i) {
    gdjs.nivelCode.GDtransicionObjects2[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Muerto")) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("transicion"), gdjs.nivelCode.GDtransicionObjects2);
{for(var i = 0, len = gdjs.nivelCode.GDtransicionObjects2.length ;i < len;++i) {
    gdjs.nivelCode.GDtransicionObjects2[i].setOpacity(gdjs.nivelCode.GDtransicionObjects2[i].getOpacity() + (128 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs.nivelCode.GDtransicionObjects2.length ;i < len;++i) {
    gdjs.nivelCode.GDtransicionObjects2[i].hide(false);
}
}
{ //Subevents
gdjs.nivelCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("nivelCompletado")) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("transicion"), gdjs.nivelCode.GDtransicionObjects2);
{for(var i = 0, len = gdjs.nivelCode.GDtransicionObjects2.length ;i < len;++i) {
    gdjs.nivelCode.GDtransicionObjects2[i].setOpacity(gdjs.nivelCode.GDtransicionObjects2[i].getOpacity() + (128 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.nivelCode.GDtransicionObjects2.length ;i < len;++i) {
    gdjs.nivelCode.GDtransicionObjects2[i].hide(false);
}
}
{ //Subevents
gdjs.nivelCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Personaje"), gdjs.nivelCode.GDPersonajeObjects2);
gdjs.copyArray(runtimeScene.getObjects("recorridoBarra"), gdjs.nivelCode.GDrecorridoBarraObjects2);
{for(var i = 0, len = gdjs.nivelCode.GDPersonajeObjects2.length ;i < len;++i) {
    gdjs.nivelCode.GDPersonajeObjects2[i].resetTimer("ataque");
}
}{for(var i = 0, len = gdjs.nivelCode.GDPersonajeObjects2.length ;i < len;++i) {
    gdjs.nivelCode.GDPersonajeObjects2[i].resetTimer("isla");
}
}{for(var i = 0, len = gdjs.nivelCode.GDrecorridoBarraObjects2.length ;i < len;++i) {
    gdjs.nivelCode.GDrecorridoBarraObjects2[i].setScaleX(0);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "intro.ogg", false, 30, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Personaje"), gdjs.nivelCode.GDPersonajeObjects2);
gdjs.copyArray(runtimeScene.getObjects("recorridoBarra"), gdjs.nivelCode.GDrecorridoBarraObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.nivelCode.GDPersonajeObjects2.length;i<l;++i) {
    if ( gdjs.nivelCode.GDPersonajeObjects2[i].timerElapsedTime("isla", 1) ) {
        isConditionTrue_0 = true;
        gdjs.nivelCode.GDPersonajeObjects2[k] = gdjs.nivelCode.GDPersonajeObjects2[i];
        ++k;
    }
}
gdjs.nivelCode.GDPersonajeObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.nivelCode.GDrecorridoBarraObjects2.length;i<l;++i) {
    if ( gdjs.nivelCode.GDrecorridoBarraObjects2[i].getScaleX() <= 1 ) {
        isConditionTrue_0 = true;
        gdjs.nivelCode.GDrecorridoBarraObjects2[k] = gdjs.nivelCode.GDrecorridoBarraObjects2[i];
        ++k;
    }
}
gdjs.nivelCode.GDrecorridoBarraObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.nivelCode.GDrecorridoBarraObjects2 */
{for(var i = 0, len = gdjs.nivelCode.GDrecorridoBarraObjects2.length ;i < len;++i) {
    gdjs.nivelCode.GDrecorridoBarraObjects2[i].setScaleX(gdjs.nivelCode.GDrecorridoBarraObjects2[i].getScaleX() + (0.00025));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("recorridoBarra"), gdjs.nivelCode.GDrecorridoBarraObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.nivelCode.GDrecorridoBarraObjects2.length;i<l;++i) {
    if ( gdjs.nivelCode.GDrecorridoBarraObjects2[i].getScaleX() >= 0.97 ) {
        isConditionTrue_0 = true;
        gdjs.nivelCode.GDrecorridoBarraObjects2[k] = gdjs.nivelCode.GDrecorridoBarraObjects2[i];
        ++k;
    }
}
gdjs.nivelCode.GDrecorridoBarraObjects2.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("nivelCompletado").setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Personaje"), gdjs.nivelCode.GDPersonajeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.nivelCode.GDPersonajeObjects1.length;i<l;++i) {
    if ( gdjs.nivelCode.GDPersonajeObjects1[i].timerElapsedTime("isla", 2) ) {
        isConditionTrue_0 = true;
        gdjs.nivelCode.GDPersonajeObjects1[k] = gdjs.nivelCode.GDPersonajeObjects1[i];
        ++k;
    }
}
gdjs.nivelCode.GDPersonajeObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10132220);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "in game.mp3", true, 30, 1);
}}

}


};gdjs.nivelCode.eventsList3 = function(runtimeScene) {

};gdjs.nivelCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.nivelCode.GDPersonajeObjects2, gdjs.nivelCode.GDPersonajeObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.nivelCode.GDPersonajeObjects3.length;i<l;++i) {
    if ( gdjs.nivelCode.GDPersonajeObjects3[i].hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.nivelCode.GDPersonajeObjects3[k] = gdjs.nivelCode.GDPersonajeObjects3[i];
        ++k;
    }
}
gdjs.nivelCode.GDPersonajeObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.nivelCode.GDPersonajeObjects3 */
{for(var i = 0, len = gdjs.nivelCode.GDPersonajeObjects3.length ;i < len;++i) {
    gdjs.nivelCode.GDPersonajeObjects3[i].setAnimationName("arriba");
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.nivelCode.mapOfGDgdjs_46nivelCode_46GDPersonajeObjects2Objects = Hashtable.newFrom({"Personaje": gdjs.nivelCode.GDPersonajeObjects2});
gdjs.nivelCode.mapOfGDgdjs_46nivelCode_46GDPersonajeObjects2Objects = Hashtable.newFrom({"Personaje": gdjs.nivelCode.GDPersonajeObjects2});
gdjs.nivelCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Personaje"), gdjs.nivelCode.GDPersonajeObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.nivelCode.GDPersonajeObjects2.length;i<l;++i) {
    if ( gdjs.nivelCode.GDPersonajeObjects2[i].timerElapsedTime("ataque", 3) ) {
        isConditionTrue_0 = true;
        gdjs.nivelCode.GDPersonajeObjects2[k] = gdjs.nivelCode.GDPersonajeObjects2[i];
        ++k;
    }
}
gdjs.nivelCode.GDPersonajeObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.nivelCode.GDPersonajeObjects2 */
{for(var i = 0, len = gdjs.nivelCode.GDPersonajeObjects2.length ;i < len;++i) {
    gdjs.nivelCode.GDPersonajeObjects2[i].setAnimationName("ataque");
}
}{for(var i = 0, len = gdjs.nivelCode.GDPersonajeObjects2.length ;i < len;++i) {
    gdjs.nivelCode.GDPersonajeObjects2[i].resetTimer("ataque");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "ataque.ogg", false, 100, 1);
}
{ //Subevents
gdjs.nivelCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Personaje"), gdjs.nivelCode.GDPersonajeObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SpaceShooterControls__GoingDown.func(runtimeScene, gdjs.nivelCode.mapOfGDgdjs_46nivelCode_46GDPersonajeObjects2Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
/* Reuse gdjs.nivelCode.GDPersonajeObjects2 */
{for(var i = 0, len = gdjs.nivelCode.GDPersonajeObjects2.length ;i < len;++i) {
    gdjs.nivelCode.GDPersonajeObjects2[i].setAnimationName("arriba");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Personaje"), gdjs.nivelCode.GDPersonajeObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SpaceShooterControls__GoingUp.func(runtimeScene, gdjs.nivelCode.mapOfGDgdjs_46nivelCode_46GDPersonajeObjects2Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
/* Reuse gdjs.nivelCode.GDPersonajeObjects2 */
{for(var i = 0, len = gdjs.nivelCode.GDPersonajeObjects2.length ;i < len;++i) {
    gdjs.nivelCode.GDPersonajeObjects2[i].setAnimationName("arriba");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Personaje"), gdjs.nivelCode.GDPersonajeObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.nivelCode.GDPersonajeObjects2.length;i<l;++i) {
    if ( gdjs.nivelCode.GDPersonajeObjects2[i].hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.nivelCode.GDPersonajeObjects2[k] = gdjs.nivelCode.GDPersonajeObjects2[i];
        ++k;
    }
}
gdjs.nivelCode.GDPersonajeObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.nivelCode.GDPersonajeObjects2 */
{for(var i = 0, len = gdjs.nivelCode.GDPersonajeObjects2.length ;i < len;++i) {
    gdjs.nivelCode.GDPersonajeObjects2[i].setAnimationName("arriba");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Personaje"), gdjs.nivelCode.GDPersonajeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.nivelCode.GDPersonajeObjects1.length;i<l;++i) {
    if ( gdjs.nivelCode.GDPersonajeObjects1[i].getBehavior("FireBullet").HasJustFired((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.nivelCode.GDPersonajeObjects1[k] = gdjs.nivelCode.GDPersonajeObjects1[i];
        ++k;
    }
}
gdjs.nivelCode.GDPersonajeObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets/audio/sfx_laser1.ogg", false, 30, 1);
}}

}


};gdjs.nivelCode.eventsList6 = function(runtimeScene) {

{

/* Reuse gdjs.nivelCode.GDtiburonObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.nivelCode.GDtiburonObjects2.length;i<l;++i) {
    if ( gdjs.nivelCode.GDtiburonObjects2[i].hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.nivelCode.GDtiburonObjects2[k] = gdjs.nivelCode.GDtiburonObjects2[i];
        ++k;
    }
}
gdjs.nivelCode.GDtiburonObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.nivelCode.GDtiburonObjects2 */
{for(var i = 0, len = gdjs.nivelCode.GDtiburonObjects2.length ;i < len;++i) {
    gdjs.nivelCode.GDtiburonObjects2[i].getBehavior("Tween").addObjectOpacityTween("FadeOut", 0, "easeInQuad", 50, false);
}
}{for(var i = 0, len = gdjs.nivelCode.GDtiburonObjects2.length ;i < len;++i) {
    gdjs.nivelCode.GDtiburonObjects2[i].getBehavior("Tween").addObjectPositionYTween("MoveUp", (gdjs.nivelCode.GDtiburonObjects2[i].getPointY("")) - 50, "easeOutQuad", 700, false);
}
}}

}


};gdjs.nivelCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


};gdjs.nivelCode.eventsList8 = function(runtimeScene) {

{

/* Reuse gdjs.nivelCode.GDMinaObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.nivelCode.GDMinaObjects2.length;i<l;++i) {
    if ( gdjs.nivelCode.GDMinaObjects2[i].hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.nivelCode.GDMinaObjects2[k] = gdjs.nivelCode.GDMinaObjects2[i];
        ++k;
    }
}
gdjs.nivelCode.GDMinaObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.nivelCode.GDMinaObjects2 */
{for(var i = 0, len = gdjs.nivelCode.GDMinaObjects2.length ;i < len;++i) {
    gdjs.nivelCode.GDMinaObjects2[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.nivelCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.nivelCode.mapOfGDgdjs_46nivelCode_46GDPersonajeObjects2Objects = Hashtable.newFrom({"Personaje": gdjs.nivelCode.GDPersonajeObjects2});
gdjs.nivelCode.mapOfGDgdjs_46nivelCode_46GDMedusaObjects2Objects = Hashtable.newFrom({"Medusa": gdjs.nivelCode.GDMedusaObjects2});
gdjs.nivelCode.mapOfGDgdjs_46nivelCode_46GDPersonajeObjects2Objects = Hashtable.newFrom({"Personaje": gdjs.nivelCode.GDPersonajeObjects2});
gdjs.nivelCode.mapOfGDgdjs_46nivelCode_46GDtiburonObjects2Objects = Hashtable.newFrom({"tiburon": gdjs.nivelCode.GDtiburonObjects2});
gdjs.nivelCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


};gdjs.nivelCode.mapOfGDgdjs_46nivelCode_46GDPersonajeObjects2Objects = Hashtable.newFrom({"Personaje": gdjs.nivelCode.GDPersonajeObjects2});
gdjs.nivelCode.mapOfGDgdjs_46nivelCode_46GDtiburonObjects2Objects = Hashtable.newFrom({"tiburon": gdjs.nivelCode.GDtiburonObjects2});
gdjs.nivelCode.mapOfGDgdjs_46nivelCode_46GDPersonajeObjects2Objects = Hashtable.newFrom({"Personaje": gdjs.nivelCode.GDPersonajeObjects2});
gdjs.nivelCode.mapOfGDgdjs_46nivelCode_46GDMinaObjects2Objects = Hashtable.newFrom({"Mina": gdjs.nivelCode.GDMinaObjects2});
gdjs.nivelCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("tiburon"), gdjs.nivelCode.GDtiburonObjects2);
{for(var i = 0, len = gdjs.nivelCode.GDtiburonObjects2.length ;i < len;++i) {
    gdjs.nivelCode.GDtiburonObjects2[i].activateBehavior("LinearMovement", true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mina"), gdjs.nivelCode.GDMinaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.nivelCode.GDMinaObjects2.length;i<l;++i) {
    if ( gdjs.nivelCode.GDMinaObjects2[i].getX() < gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) ) {
        isConditionTrue_0 = true;
        gdjs.nivelCode.GDMinaObjects2[k] = gdjs.nivelCode.GDMinaObjects2[i];
        ++k;
    }
}
gdjs.nivelCode.GDMinaObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.nivelCode.GDMinaObjects2 */
{for(var i = 0, len = gdjs.nivelCode.GDMinaObjects2.length ;i < len;++i) {
    gdjs.nivelCode.GDMinaObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Personaje"), gdjs.nivelCode.GDPersonajeObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.nivelCode.GDPersonajeObjects2.length;i<l;++i) {
    if ( gdjs.nivelCode.GDPersonajeObjects2[i].getBehavior("Health2").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.nivelCode.GDPersonajeObjects2[k] = gdjs.nivelCode.GDPersonajeObjects2[i];
        ++k;
    }
}
gdjs.nivelCode.GDPersonajeObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.nivelCode.GDPersonajeObjects2 */
{for(var i = 0, len = gdjs.nivelCode.GDPersonajeObjects2.length ;i < len;++i) {
    gdjs.nivelCode.GDPersonajeObjects2[i].setAnimationName("muerto");
}
}{runtimeScene.getScene().getVariables().get("Muerto").setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Personaje"), gdjs.nivelCode.GDPersonajeObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.nivelCode.GDPersonajeObjects2.length;i<l;++i) {
    if ( gdjs.nivelCode.GDPersonajeObjects2[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.nivelCode.GDPersonajeObjects2[k] = gdjs.nivelCode.GDPersonajeObjects2[i];
        ++k;
    }
}
gdjs.nivelCode.GDPersonajeObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.nivelCode.GDPersonajeObjects2 */
{for(var i = 0, len = gdjs.nivelCode.GDPersonajeObjects2.length ;i < len;++i) {
    gdjs.nivelCode.GDPersonajeObjects2[i].setAnimationName("muerto");
}
}{runtimeScene.getScene().getVariables().get("Muerto").setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Personaje"), gdjs.nivelCode.GDPersonajeObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.nivelCode.GDPersonajeObjects2.length;i<l;++i) {
    if ( gdjs.nivelCode.GDPersonajeObjects2[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.nivelCode.GDPersonajeObjects2[k] = gdjs.nivelCode.GDPersonajeObjects2[i];
        ++k;
    }
}
gdjs.nivelCode.GDPersonajeObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10145044);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "ahogarse.ogg", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Personaje"), gdjs.nivelCode.GDPersonajeObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.nivelCode.GDPersonajeObjects2.length;i<l;++i) {
    if ( gdjs.nivelCode.GDPersonajeObjects2[i].getBehavior("Health2").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.nivelCode.GDPersonajeObjects2[k] = gdjs.nivelCode.GDPersonajeObjects2[i];
        ++k;
    }
}
gdjs.nivelCode.GDPersonajeObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10145892);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "ahogarse2.ogg", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("tiburon"), gdjs.nivelCode.GDtiburonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.nivelCode.GDtiburonObjects2.length;i<l;++i) {
    if ( gdjs.nivelCode.GDtiburonObjects2[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.nivelCode.GDtiburonObjects2[k] = gdjs.nivelCode.GDtiburonObjects2[i];
        ++k;
    }
}
gdjs.nivelCode.GDtiburonObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.nivelCode.GDtiburonObjects2 */
{for(var i = 0, len = gdjs.nivelCode.GDtiburonObjects2.length ;i < len;++i) {
    gdjs.nivelCode.GDtiburonObjects2[i].setAnimationName("muerto");
}
}
{ //Subevents
gdjs.nivelCode.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mina"), gdjs.nivelCode.GDMinaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.nivelCode.GDMinaObjects2.length;i<l;++i) {
    if ( gdjs.nivelCode.GDMinaObjects2[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.nivelCode.GDMinaObjects2[k] = gdjs.nivelCode.GDMinaObjects2[i];
        ++k;
    }
}
gdjs.nivelCode.GDMinaObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10147508);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.nivelCode.GDMinaObjects2 */
{gdjs.evtTools.sound.playSound(runtimeScene, "explosiono.ogg", false, 100, 1);
}{for(var i = 0, len = gdjs.nivelCode.GDMinaObjects2.length ;i < len;++i) {
    gdjs.nivelCode.GDMinaObjects2[i].setAnimationName("explosion");
}
}
{ //Subevents
gdjs.nivelCode.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Medusa"), gdjs.nivelCode.GDMedusaObjects2);
gdjs.copyArray(runtimeScene.getObjects("Personaje"), gdjs.nivelCode.GDPersonajeObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.nivelCode.mapOfGDgdjs_46nivelCode_46GDPersonajeObjects2Objects, gdjs.nivelCode.mapOfGDgdjs_46nivelCode_46GDMedusaObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.nivelCode.GDPersonajeObjects2 */
{for(var i = 0, len = gdjs.nivelCode.GDPersonajeObjects2.length ;i < len;++i) {
    gdjs.nivelCode.GDPersonajeObjects2[i].getBehavior("Health").Hit(200, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Personaje"), gdjs.nivelCode.GDPersonajeObjects2);
gdjs.copyArray(runtimeScene.getObjects("tiburon"), gdjs.nivelCode.GDtiburonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.nivelCode.mapOfGDgdjs_46nivelCode_46GDPersonajeObjects2Objects, gdjs.nivelCode.mapOfGDgdjs_46nivelCode_46GDtiburonObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.nivelCode.GDPersonajeObjects2.length;i<l;++i) {
    if ( gdjs.nivelCode.GDPersonajeObjects2[i].getAnimation() <= 1 ) {
        isConditionTrue_0 = true;
        gdjs.nivelCode.GDPersonajeObjects2[k] = gdjs.nivelCode.GDPersonajeObjects2[i];
        ++k;
    }
}
gdjs.nivelCode.GDPersonajeObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.nivelCode.GDtiburonObjects2.length;i<l;++i) {
    if ( gdjs.nivelCode.GDtiburonObjects2[i].getAnimation() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.nivelCode.GDtiburonObjects2[k] = gdjs.nivelCode.GDtiburonObjects2[i];
        ++k;
    }
}
gdjs.nivelCode.GDtiburonObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.nivelCode.GDPersonajeObjects2 */
{for(var i = 0, len = gdjs.nivelCode.GDPersonajeObjects2.length ;i < len;++i) {
    gdjs.nivelCode.GDPersonajeObjects2[i].getBehavior("Health").Hit(200, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.nivelCode.eventsList9(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Personaje"), gdjs.nivelCode.GDPersonajeObjects2);
gdjs.copyArray(runtimeScene.getObjects("tiburon"), gdjs.nivelCode.GDtiburonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.nivelCode.mapOfGDgdjs_46nivelCode_46GDPersonajeObjects2Objects, gdjs.nivelCode.mapOfGDgdjs_46nivelCode_46GDtiburonObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.nivelCode.GDPersonajeObjects2.length;i<l;++i) {
    if ( gdjs.nivelCode.GDPersonajeObjects2[i].getAnimation() == 3 ) {
        isConditionTrue_0 = true;
        gdjs.nivelCode.GDPersonajeObjects2[k] = gdjs.nivelCode.GDPersonajeObjects2[i];
        ++k;
    }
}
gdjs.nivelCode.GDPersonajeObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10151692);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.nivelCode.GDtiburonObjects2 */
{for(var i = 0, len = gdjs.nivelCode.GDtiburonObjects2.length ;i < len;++i) {
    gdjs.nivelCode.GDtiburonObjects2[i].getBehavior("Health").Hit(200, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "muerteshark.ogg", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mina"), gdjs.nivelCode.GDMinaObjects2);
gdjs.copyArray(runtimeScene.getObjects("Personaje"), gdjs.nivelCode.GDPersonajeObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.nivelCode.mapOfGDgdjs_46nivelCode_46GDPersonajeObjects2Objects, gdjs.nivelCode.mapOfGDgdjs_46nivelCode_46GDMinaObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.nivelCode.GDMinaObjects2 */
/* Reuse gdjs.nivelCode.GDPersonajeObjects2 */
{for(var i = 0, len = gdjs.nivelCode.GDMinaObjects2.length ;i < len;++i) {
    gdjs.nivelCode.GDMinaObjects2[i].getBehavior("Health").Hit(200, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.nivelCode.GDPersonajeObjects2.length ;i < len;++i) {
    gdjs.nivelCode.GDPersonajeObjects2[i].getBehavior("Health").Hit(200, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("tiburon"), gdjs.nivelCode.GDtiburonObjects2);
{for(var i = 0, len = gdjs.nivelCode.GDtiburonObjects2.length ;i < len;++i) {
    gdjs.nivelCode.GDtiburonObjects2[i].activateBehavior("LinearMovement", true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Medusa"), gdjs.nivelCode.GDMedusaObjects1);
{for(var i = 0, len = gdjs.nivelCode.GDMedusaObjects1.length ;i < len;++i) {
    gdjs.nivelCode.GDMedusaObjects1[i].activateBehavior("SineMovement", true);
}
}}

}


};gdjs.nivelCode.mapOfGDgdjs_46nivelCode_46GDPersonajeObjects1Objects = Hashtable.newFrom({"Personaje": gdjs.nivelCode.GDPersonajeObjects1});
gdjs.nivelCode.mapOfGDgdjs_46nivelCode_46GDpompa_9595oxigenoObjects1Objects = Hashtable.newFrom({"pompa_oxigeno": gdjs.nivelCode.GDpompa_95oxigenoObjects1});
gdjs.nivelCode.eventsList11 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Personaje"), gdjs.nivelCode.GDPersonajeObjects1);
gdjs.copyArray(runtimeScene.getObjects("pompa_oxigeno"), gdjs.nivelCode.GDpompa_95oxigenoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.nivelCode.mapOfGDgdjs_46nivelCode_46GDPersonajeObjects1Objects, gdjs.nivelCode.mapOfGDgdjs_46nivelCode_46GDpompa_9595oxigenoObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.nivelCode.GDPersonajeObjects1 */
/* Reuse gdjs.nivelCode.GDpompa_95oxigenoObjects1 */
{for(var i = 0, len = gdjs.nivelCode.GDPersonajeObjects1.length ;i < len;++i) {
    gdjs.nivelCode.GDPersonajeObjects1[i].getBehavior("Health2").Heal(52, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.nivelCode.GDpompa_95oxigenoObjects1.length ;i < len;++i) {
    gdjs.nivelCode.GDpompa_95oxigenoObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "burbu.ogg", false, 100, 1);
}{for(var i = 0, len = gdjs.nivelCode.GDPersonajeObjects1.length ;i < len;++i) {
    gdjs.nivelCode.GDPersonajeObjects1[i].getBehavior("Health").Hit(10, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.nivelCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Personaje"), gdjs.nivelCode.GDPersonajeObjects2);
{for(var i = 0, len = gdjs.nivelCode.GDPersonajeObjects2.length ;i < len;++i) {
    gdjs.nivelCode.GDPersonajeObjects2[i].resetTimer("contador");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Personaje"), gdjs.nivelCode.GDPersonajeObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.nivelCode.GDPersonajeObjects2.length;i<l;++i) {
    if ( gdjs.nivelCode.GDPersonajeObjects2[i].timerElapsedTime("contador", 1) ) {
        isConditionTrue_0 = true;
        gdjs.nivelCode.GDPersonajeObjects2[k] = gdjs.nivelCode.GDPersonajeObjects2[i];
        ++k;
    }
}
gdjs.nivelCode.GDPersonajeObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.nivelCode.GDPersonajeObjects2 */
{for(var i = 0, len = gdjs.nivelCode.GDPersonajeObjects2.length ;i < len;++i) {
    gdjs.nivelCode.GDPersonajeObjects2[i].getBehavior("Health2").Hit(0.1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Personaje"), gdjs.nivelCode.GDPersonajeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.nivelCode.GDPersonajeObjects1.length;i<l;++i) {
    if ( gdjs.nivelCode.GDPersonajeObjects1[i].timerElapsedTime("contador", 1) ) {
        isConditionTrue_0 = true;
        gdjs.nivelCode.GDPersonajeObjects1[k] = gdjs.nivelCode.GDPersonajeObjects1[i];
        ++k;
    }
}
gdjs.nivelCode.GDPersonajeObjects1.length = k;
if (isConditionTrue_0) {
}

}


};gdjs.nivelCode.eventsList13 = function(runtimeScene) {

{


gdjs.nivelCode.eventsList2(runtimeScene);
}


{


gdjs.nivelCode.eventsList3(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Muerto")) == 1);
if (isConditionTrue_0) {

{ //Subevents
gdjs.nivelCode.eventsList5(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Personaje"), gdjs.nivelCode.GDPersonajeObjects1);
gdjs.copyArray(runtimeScene.getObjects("SpaceBackground"), gdjs.nivelCode.GDSpaceBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("oxigeno_barra"), gdjs.nivelCode.GDoxigeno_95barraObjects1);
gdjs.copyArray(runtimeScene.getObjects("oxigeno_contenedor"), gdjs.nivelCode.GDoxigeno_95contenedorObjects1);
gdjs.copyArray(runtimeScene.getObjects("recorrido"), gdjs.nivelCode.GDrecorridoObjects1);
gdjs.copyArray(runtimeScene.getObjects("recorridoBarra"), gdjs.nivelCode.GDrecorridoBarraObjects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) + (250 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)), "", 0);
}{for(var i = 0, len = gdjs.nivelCode.GDPersonajeObjects1.length ;i < len;++i) {
    gdjs.nivelCode.GDPersonajeObjects1[i].addForce(250, 0, 0);
}
}{for(var i = 0, len = gdjs.nivelCode.GDSpaceBackgroundObjects1.length ;i < len;++i) {
    gdjs.nivelCode.GDSpaceBackgroundObjects1[i].setXOffset(gdjs.nivelCode.GDSpaceBackgroundObjects1[i].getXOffset() + (250 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.nivelCode.GDoxigeno_95contenedorObjects1.length ;i < len;++i) {
    gdjs.nivelCode.GDoxigeno_95contenedorObjects1[i].addForce(250, 0, 0);
}
}{for(var i = 0, len = gdjs.nivelCode.GDrecorridoObjects1.length ;i < len;++i) {
    gdjs.nivelCode.GDrecorridoObjects1[i].addForce(250, 0, 0);
}
}{for(var i = 0, len = gdjs.nivelCode.GDoxigeno_95barraObjects1.length ;i < len;++i) {
    gdjs.nivelCode.GDoxigeno_95barraObjects1[i].addForce(250, 0, 0);
}
}{for(var i = 0, len = gdjs.nivelCode.GDrecorridoBarraObjects1.length ;i < len;++i) {
    gdjs.nivelCode.GDrecorridoBarraObjects1[i].addForce(250, 0, 0);
}
}}

}


{


gdjs.nivelCode.eventsList10(runtimeScene);
}


{


gdjs.nivelCode.eventsList11(runtimeScene);
}


{


gdjs.nivelCode.eventsList12(runtimeScene);
}


};

gdjs.nivelCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.nivelCode.GDPersonajeObjects1.length = 0;
gdjs.nivelCode.GDPersonajeObjects2.length = 0;
gdjs.nivelCode.GDPersonajeObjects3.length = 0;
gdjs.nivelCode.GDPersonajeObjects4.length = 0;
gdjs.nivelCode.GDSpaceBackgroundObjects1.length = 0;
gdjs.nivelCode.GDSpaceBackgroundObjects2.length = 0;
gdjs.nivelCode.GDSpaceBackgroundObjects3.length = 0;
gdjs.nivelCode.GDSpaceBackgroundObjects4.length = 0;
gdjs.nivelCode.GDMinaObjects1.length = 0;
gdjs.nivelCode.GDMinaObjects2.length = 0;
gdjs.nivelCode.GDMinaObjects3.length = 0;
gdjs.nivelCode.GDMinaObjects4.length = 0;
gdjs.nivelCode.GDtiburonObjects1.length = 0;
gdjs.nivelCode.GDtiburonObjects2.length = 0;
gdjs.nivelCode.GDtiburonObjects3.length = 0;
gdjs.nivelCode.GDtiburonObjects4.length = 0;
gdjs.nivelCode.GDpompa_95oxigenoObjects1.length = 0;
gdjs.nivelCode.GDpompa_95oxigenoObjects2.length = 0;
gdjs.nivelCode.GDpompa_95oxigenoObjects3.length = 0;
gdjs.nivelCode.GDpompa_95oxigenoObjects4.length = 0;
gdjs.nivelCode.GDExplosionObjects1.length = 0;
gdjs.nivelCode.GDExplosionObjects2.length = 0;
gdjs.nivelCode.GDExplosionObjects3.length = 0;
gdjs.nivelCode.GDExplosionObjects4.length = 0;
gdjs.nivelCode.GDMedusaObjects1.length = 0;
gdjs.nivelCode.GDMedusaObjects2.length = 0;
gdjs.nivelCode.GDMedusaObjects3.length = 0;
gdjs.nivelCode.GDMedusaObjects4.length = 0;
gdjs.nivelCode.GDoxigeno_95contenedorObjects1.length = 0;
gdjs.nivelCode.GDoxigeno_95contenedorObjects2.length = 0;
gdjs.nivelCode.GDoxigeno_95contenedorObjects3.length = 0;
gdjs.nivelCode.GDoxigeno_95contenedorObjects4.length = 0;
gdjs.nivelCode.GDoxigeno_95barraObjects1.length = 0;
gdjs.nivelCode.GDoxigeno_95barraObjects2.length = 0;
gdjs.nivelCode.GDoxigeno_95barraObjects3.length = 0;
gdjs.nivelCode.GDoxigeno_95barraObjects4.length = 0;
gdjs.nivelCode.GDtransicionObjects1.length = 0;
gdjs.nivelCode.GDtransicionObjects2.length = 0;
gdjs.nivelCode.GDtransicionObjects3.length = 0;
gdjs.nivelCode.GDtransicionObjects4.length = 0;
gdjs.nivelCode.GDburbujasObjects1.length = 0;
gdjs.nivelCode.GDburbujasObjects2.length = 0;
gdjs.nivelCode.GDburbujasObjects3.length = 0;
gdjs.nivelCode.GDburbujasObjects4.length = 0;
gdjs.nivelCode.GDoxigenoObjects1.length = 0;
gdjs.nivelCode.GDoxigenoObjects2.length = 0;
gdjs.nivelCode.GDoxigenoObjects3.length = 0;
gdjs.nivelCode.GDoxigenoObjects4.length = 0;
gdjs.nivelCode.GDrecorridoObjects1.length = 0;
gdjs.nivelCode.GDrecorridoObjects2.length = 0;
gdjs.nivelCode.GDrecorridoObjects3.length = 0;
gdjs.nivelCode.GDrecorridoObjects4.length = 0;
gdjs.nivelCode.GDrecorridoBarraObjects1.length = 0;
gdjs.nivelCode.GDrecorridoBarraObjects2.length = 0;
gdjs.nivelCode.GDrecorridoBarraObjects3.length = 0;
gdjs.nivelCode.GDrecorridoBarraObjects4.length = 0;

gdjs.nivelCode.eventsList13(runtimeScene);

return;

}

gdjs['nivelCode'] = gdjs.nivelCode;
