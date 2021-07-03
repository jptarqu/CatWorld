gdjs.New_32sceneCode = {};
gdjs.New_32sceneCode.GDOrangeCatObjects1= [];
gdjs.New_32sceneCode.GDOrangeCatObjects2= [];
gdjs.New_32sceneCode.GDOrangeCatObjects3= [];
gdjs.New_32sceneCode.GDGrassObjects1= [];
gdjs.New_32sceneCode.GDGrassObjects2= [];
gdjs.New_32sceneCode.GDGrassObjects3= [];
gdjs.New_32sceneCode.GDmushroomObjects1= [];
gdjs.New_32sceneCode.GDmushroomObjects2= [];
gdjs.New_32sceneCode.GDmushroomObjects3= [];
gdjs.New_32sceneCode.GDpipe1Objects1= [];
gdjs.New_32sceneCode.GDpipe1Objects2= [];
gdjs.New_32sceneCode.GDpipe1Objects3= [];
gdjs.New_32sceneCode.GDmonyObjects1= [];
gdjs.New_32sceneCode.GDmonyObjects2= [];
gdjs.New_32sceneCode.GDmonyObjects3= [];
gdjs.New_32sceneCode.GDhkjnkleObjects1= [];
gdjs.New_32sceneCode.GDhkjnkleObjects2= [];
gdjs.New_32sceneCode.GDhkjnkleObjects3= [];
gdjs.New_32sceneCode.GDNejkhkObjects1= [];
gdjs.New_32sceneCode.GDNejkhkObjects2= [];
gdjs.New_32sceneCode.GDNejkhkObjects3= [];
gdjs.New_32sceneCode.GDTopButtonObjects1= [];
gdjs.New_32sceneCode.GDTopButtonObjects2= [];
gdjs.New_32sceneCode.GDTopButtonObjects3= [];
gdjs.New_32sceneCode.GDLeftButtonObjects1= [];
gdjs.New_32sceneCode.GDLeftButtonObjects2= [];
gdjs.New_32sceneCode.GDLeftButtonObjects3= [];
gdjs.New_32sceneCode.GDRightButtonObjects1= [];
gdjs.New_32sceneCode.GDRightButtonObjects2= [];
gdjs.New_32sceneCode.GDRightButtonObjects3= [];
gdjs.New_32sceneCode.GDBottonButtonObjects1= [];
gdjs.New_32sceneCode.GDBottonButtonObjects2= [];
gdjs.New_32sceneCode.GDBottonButtonObjects3= [];
gdjs.New_32sceneCode.GDJumpButtonObjects1= [];
gdjs.New_32sceneCode.GDJumpButtonObjects2= [];
gdjs.New_32sceneCode.GDJumpButtonObjects3= [];

gdjs.New_32sceneCode.conditionTrue_0 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_0 = {val:false};


gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDLeftButtonObjects2Objects = Hashtable.newFrom({"LeftButton": gdjs.New_32sceneCode.GDLeftButtonObjects2});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDRightButtonObjects2Objects = Hashtable.newFrom({"RightButton": gdjs.New_32sceneCode.GDRightButtonObjects2});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDTopButtonObjects2Objects = Hashtable.newFrom({"TopButton": gdjs.New_32sceneCode.GDTopButtonObjects2});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDBottonButtonObjects2Objects = Hashtable.newFrom({"BottonButton": gdjs.New_32sceneCode.GDBottonButtonObjects2});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDJumpButtonObjects1Objects = Hashtable.newFrom({"JumpButton": gdjs.New_32sceneCode.GDJumpButtonObjects1});gdjs.New_32sceneCode.eventsList0 = function(runtimeScene) {

{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LeftButton"), gdjs.New_32sceneCode.GDLeftButtonObjects2);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDLeftButtonObjects2Objects, runtimeScene, true, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("OrangeCat"), gdjs.New_32sceneCode.GDOrangeCatObjects2);
{for(var i = 0, len = gdjs.New_32sceneCode.GDOrangeCatObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDOrangeCatObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RightButton"), gdjs.New_32sceneCode.GDRightButtonObjects2);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDRightButtonObjects2Objects, runtimeScene, true, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("OrangeCat"), gdjs.New_32sceneCode.GDOrangeCatObjects2);
{for(var i = 0, len = gdjs.New_32sceneCode.GDOrangeCatObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDOrangeCatObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{

gdjs.copyArray(gdjs.New_32sceneCode.GDTopButtonObjects1, gdjs.New_32sceneCode.GDTopButtonObjects2);


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDTopButtonObjects2Objects, runtimeScene, true, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("OrangeCat"), gdjs.New_32sceneCode.GDOrangeCatObjects2);
{for(var i = 0, len = gdjs.New_32sceneCode.GDOrangeCatObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDOrangeCatObjects2[i].getBehavior("PlatformerObject").simulateUpKey();
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDOrangeCatObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDOrangeCatObjects2[i].getBehavior("PlatformerObject").simulateLadderKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BottonButton"), gdjs.New_32sceneCode.GDBottonButtonObjects2);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDBottonButtonObjects2Objects, runtimeScene, true, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("OrangeCat"), gdjs.New_32sceneCode.GDOrangeCatObjects2);
{for(var i = 0, len = gdjs.New_32sceneCode.GDOrangeCatObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDOrangeCatObjects2[i].getBehavior("PlatformerObject").simulateDownKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("JumpButton"), gdjs.New_32sceneCode.GDJumpButtonObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDJumpButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("OrangeCat"), gdjs.New_32sceneCode.GDOrangeCatObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDOrangeCatObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDOrangeCatObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


};gdjs.New_32sceneCode.eventsList1 = function(runtimeScene) {

{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = !(gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene));
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BottonButton"), gdjs.New_32sceneCode.GDBottonButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("LeftButton"), gdjs.New_32sceneCode.GDLeftButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("RightButton"), gdjs.New_32sceneCode.GDRightButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("TopButton"), gdjs.New_32sceneCode.GDTopButtonObjects2);
{for(var i = 0, len = gdjs.New_32sceneCode.GDTopButtonObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDTopButtonObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDLeftButtonObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDLeftButtonObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDRightButtonObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDRightButtonObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDBottonButtonObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDBottonButtonObjects2[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TopButton"), gdjs.New_32sceneCode.GDTopButtonObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDTopButtonObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDTopButtonObjects1[i].isVisible() ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDTopButtonObjects1[k] = gdjs.New_32sceneCode.GDTopButtonObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDTopButtonObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.New_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.New_32sceneCode.eventsList2 = function(runtimeScene) {

{


gdjs.New_32sceneCode.eventsList1(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("OrangeCat"), gdjs.New_32sceneCode.GDOrangeCatObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDOrangeCatObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDOrangeCatObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDOrangeCatObjects1[k] = gdjs.New_32sceneCode.GDOrangeCatObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDOrangeCatObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDOrangeCatObjects1 */
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.New_32sceneCode.GDOrangeCatObjects1.length !== 0 ? gdjs.New_32sceneCode.GDOrangeCatObjects1[0] : null), true, "", 0);
}}

}


};

gdjs.New_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32sceneCode.GDOrangeCatObjects1.length = 0;
gdjs.New_32sceneCode.GDOrangeCatObjects2.length = 0;
gdjs.New_32sceneCode.GDOrangeCatObjects3.length = 0;
gdjs.New_32sceneCode.GDGrassObjects1.length = 0;
gdjs.New_32sceneCode.GDGrassObjects2.length = 0;
gdjs.New_32sceneCode.GDGrassObjects3.length = 0;
gdjs.New_32sceneCode.GDmushroomObjects1.length = 0;
gdjs.New_32sceneCode.GDmushroomObjects2.length = 0;
gdjs.New_32sceneCode.GDmushroomObjects3.length = 0;
gdjs.New_32sceneCode.GDpipe1Objects1.length = 0;
gdjs.New_32sceneCode.GDpipe1Objects2.length = 0;
gdjs.New_32sceneCode.GDpipe1Objects3.length = 0;
gdjs.New_32sceneCode.GDmonyObjects1.length = 0;
gdjs.New_32sceneCode.GDmonyObjects2.length = 0;
gdjs.New_32sceneCode.GDmonyObjects3.length = 0;
gdjs.New_32sceneCode.GDhkjnkleObjects1.length = 0;
gdjs.New_32sceneCode.GDhkjnkleObjects2.length = 0;
gdjs.New_32sceneCode.GDhkjnkleObjects3.length = 0;
gdjs.New_32sceneCode.GDNejkhkObjects1.length = 0;
gdjs.New_32sceneCode.GDNejkhkObjects2.length = 0;
gdjs.New_32sceneCode.GDNejkhkObjects3.length = 0;
gdjs.New_32sceneCode.GDTopButtonObjects1.length = 0;
gdjs.New_32sceneCode.GDTopButtonObjects2.length = 0;
gdjs.New_32sceneCode.GDTopButtonObjects3.length = 0;
gdjs.New_32sceneCode.GDLeftButtonObjects1.length = 0;
gdjs.New_32sceneCode.GDLeftButtonObjects2.length = 0;
gdjs.New_32sceneCode.GDLeftButtonObjects3.length = 0;
gdjs.New_32sceneCode.GDRightButtonObjects1.length = 0;
gdjs.New_32sceneCode.GDRightButtonObjects2.length = 0;
gdjs.New_32sceneCode.GDRightButtonObjects3.length = 0;
gdjs.New_32sceneCode.GDBottonButtonObjects1.length = 0;
gdjs.New_32sceneCode.GDBottonButtonObjects2.length = 0;
gdjs.New_32sceneCode.GDBottonButtonObjects3.length = 0;
gdjs.New_32sceneCode.GDJumpButtonObjects1.length = 0;
gdjs.New_32sceneCode.GDJumpButtonObjects2.length = 0;
gdjs.New_32sceneCode.GDJumpButtonObjects3.length = 0;

gdjs.New_32sceneCode.eventsList2(runtimeScene);
return;

}

gdjs['New_32sceneCode'] = gdjs.New_32sceneCode;
