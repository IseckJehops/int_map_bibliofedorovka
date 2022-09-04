gdjs._1043_1091_1089_1077_1074Code = {};
gdjs._1043_1091_1089_1077_1074Code.GDHomeButtonObjects1= [];
gdjs._1043_1091_1089_1077_1074Code.GDHomeButtonObjects2= [];
gdjs._1043_1091_1089_1077_1074Code.GDNewSprite6Objects1= [];
gdjs._1043_1091_1089_1077_1074Code.GDNewSprite6Objects2= [];
gdjs._1043_1091_1089_1077_1074Code.GDNewSprite9Objects1= [];
gdjs._1043_1091_1089_1077_1074Code.GDNewSprite9Objects2= [];
gdjs._1043_1091_1089_1077_1074Code.GDPlayButtonObjects1= [];
gdjs._1043_1091_1089_1077_1074Code.GDPlayButtonObjects2= [];
gdjs._1043_1091_1089_1077_1074Code.GDPlayButton2Objects1= [];
gdjs._1043_1091_1089_1077_1074Code.GDPlayButton2Objects2= [];
gdjs._1043_1091_1089_1077_1074Code.GDPauseButtonObjects1= [];
gdjs._1043_1091_1089_1077_1074Code.GDPauseButtonObjects2= [];
gdjs._1043_1091_1089_1077_1074Code.GDPauseButton2Objects1= [];
gdjs._1043_1091_1089_1077_1074Code.GDPauseButton2Objects2= [];
gdjs._1043_1091_1089_1077_1074Code.GDExpandButtonObjects1= [];
gdjs._1043_1091_1089_1077_1074Code.GDExpandButtonObjects2= [];
gdjs._1043_1091_1089_1077_1074Code.GDExpandButton2Objects1= [];
gdjs._1043_1091_1089_1077_1074Code.GDExpandButton2Objects2= [];
gdjs._1043_1091_1089_1077_1074Code.GDNewTiledSpriteObjects1= [];
gdjs._1043_1091_1089_1077_1074Code.GDNewTiledSpriteObjects2= [];
gdjs._1043_1091_1089_1077_1074Code.GDGusevObjects1= [];
gdjs._1043_1091_1089_1077_1074Code.GDGusevObjects2= [];
gdjs._1043_1091_1089_1077_1074Code.GDFull_95GusevObjects1= [];
gdjs._1043_1091_1089_1077_1074Code.GDFull_95GusevObjects2= [];
gdjs._1043_1091_1089_1077_1074Code.GDNewTextObjects1= [];
gdjs._1043_1091_1089_1077_1074Code.GDNewTextObjects2= [];
gdjs._1043_1091_1089_1077_1074Code.GDNewText2Objects1= [];
gdjs._1043_1091_1089_1077_1074Code.GDNewText2Objects2= [];
gdjs._1043_1091_1089_1077_1074Code.GDNewSpriteObjects1= [];
gdjs._1043_1091_1089_1077_1074Code.GDNewSpriteObjects2= [];
gdjs._1043_1091_1089_1077_1074Code.GDNewSprite2Objects1= [];
gdjs._1043_1091_1089_1077_1074Code.GDNewSprite2Objects2= [];
gdjs._1043_1091_1089_1077_1074Code.GDLeftArrowRoundButtonObjects1= [];
gdjs._1043_1091_1089_1077_1074Code.GDLeftArrowRoundButtonObjects2= [];
gdjs._1043_1091_1089_1077_1074Code.GDRightArrowRoundButtonObjects1= [];
gdjs._1043_1091_1089_1077_1074Code.GDRightArrowRoundButtonObjects2= [];

gdjs._1043_1091_1089_1077_1074Code.conditionTrue_0 = {val:false};
gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0 = {val:false};
gdjs._1043_1091_1089_1077_1074Code.condition1IsTrue_0 = {val:false};


gdjs._1043_1091_1089_1077_1074Code.mapOfGDgdjs_46_951043_951091_951089_951077_951074Code_46GDPlayButtonObjects1Objects = Hashtable.newFrom({"PlayButton": gdjs._1043_1091_1089_1077_1074Code.GDPlayButtonObjects1});
gdjs._1043_1091_1089_1077_1074Code.eventsList0 = function(runtimeScene) {

{


gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val = false;
{
gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Gusev"), gdjs._1043_1091_1089_1077_1074Code.GDGusevObjects1);
{for(var i = 0, len = gdjs._1043_1091_1089_1077_1074Code.GDGusevObjects1.length ;i < len;++i) {
    gdjs._1043_1091_1089_1077_1074Code.GDGusevObjects1[i].play();
}
}}

}


};gdjs._1043_1091_1089_1077_1074Code.mapOfGDgdjs_46_951043_951091_951089_951077_951074Code_46GDPlayButtonObjects1Objects = Hashtable.newFrom({"PlayButton": gdjs._1043_1091_1089_1077_1074Code.GDPlayButtonObjects1});
gdjs._1043_1091_1089_1077_1074Code.mapOfGDgdjs_46_951043_951091_951089_951077_951074Code_46GDPauseButtonObjects1Objects = Hashtable.newFrom({"PauseButton": gdjs._1043_1091_1089_1077_1074Code.GDPauseButtonObjects1});
gdjs._1043_1091_1089_1077_1074Code.eventsList1 = function(runtimeScene) {

{


gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val = false;
{
gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Gusev"), gdjs._1043_1091_1089_1077_1074Code.GDGusevObjects1);
{for(var i = 0, len = gdjs._1043_1091_1089_1077_1074Code.GDGusevObjects1.length ;i < len;++i) {
    gdjs._1043_1091_1089_1077_1074Code.GDGusevObjects1[i].pause();
}
}}

}


};gdjs._1043_1091_1089_1077_1074Code.mapOfGDgdjs_46_951043_951091_951089_951077_951074Code_46GDPauseButtonObjects1Objects = Hashtable.newFrom({"PauseButton": gdjs._1043_1091_1089_1077_1074Code.GDPauseButtonObjects1});
gdjs._1043_1091_1089_1077_1074Code.mapOfGDgdjs_46_951043_951091_951089_951077_951074Code_46GDHomeButtonObjects1Objects = Hashtable.newFrom({"HomeButton": gdjs._1043_1091_1089_1077_1074Code.GDHomeButtonObjects1});
gdjs._1043_1091_1089_1077_1074Code.eventsList2 = function(runtimeScene) {

{


gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val = false;
{
gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Главная карта", false);
}}

}


};gdjs._1043_1091_1089_1077_1074Code.mapOfGDgdjs_46_951043_951091_951089_951077_951074Code_46GDHomeButtonObjects1Objects = Hashtable.newFrom({"HomeButton": gdjs._1043_1091_1089_1077_1074Code.GDHomeButtonObjects1});
gdjs._1043_1091_1089_1077_1074Code.mapOfGDgdjs_46_951043_951091_951089_951077_951074Code_46GDNewSprite6Objects1Objects = Hashtable.newFrom({"NewSprite6": gdjs._1043_1091_1089_1077_1074Code.GDNewSprite6Objects1});
gdjs._1043_1091_1089_1077_1074Code.mapOfGDgdjs_46_951043_951091_951089_951077_951074Code_46GDNewText2Objects1Objects = Hashtable.newFrom({"NewText2": gdjs._1043_1091_1089_1077_1074Code.GDNewText2Objects1});
gdjs._1043_1091_1089_1077_1074Code.eventsList3 = function(runtimeScene) {

{


gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val = false;
{
gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ExpandButton"), gdjs._1043_1091_1089_1077_1074Code.GDExpandButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Gusev"), gdjs._1043_1091_1089_1077_1074Code.GDGusevObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._1043_1091_1089_1077_1074Code.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("PauseButton"), gdjs._1043_1091_1089_1077_1074Code.GDPauseButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs._1043_1091_1089_1077_1074Code.GDPlayButtonObjects1);
gdjs._1043_1091_1089_1077_1074Code.GDNewText2Objects1.length = 0;

{for(var i = 0, len = gdjs._1043_1091_1089_1077_1074Code.GDGusevObjects1.length ;i < len;++i) {
    gdjs._1043_1091_1089_1077_1074Code.GDGusevObjects1[i].hide();
}
}{for(var i = 0, len = gdjs._1043_1091_1089_1077_1074Code.GDPlayButtonObjects1.length ;i < len;++i) {
    gdjs._1043_1091_1089_1077_1074Code.GDPlayButtonObjects1[i].hide();
}
}{for(var i = 0, len = gdjs._1043_1091_1089_1077_1074Code.GDPauseButtonObjects1.length ;i < len;++i) {
    gdjs._1043_1091_1089_1077_1074Code.GDPauseButtonObjects1[i].hide();
}
}{for(var i = 0, len = gdjs._1043_1091_1089_1077_1074Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs._1043_1091_1089_1077_1074Code.GDNewTextObjects1[i].hide();
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._1043_1091_1089_1077_1074Code.mapOfGDgdjs_46_951043_951091_951089_951077_951074Code_46GDNewText2Objects1Objects, 27, 97, "18");
}{for(var i = 0, len = gdjs._1043_1091_1089_1077_1074Code.GDExpandButtonObjects1.length ;i < len;++i) {
    gdjs._1043_1091_1089_1077_1074Code.GDExpandButtonObjects1[i].hide();
}
}}

}


};gdjs._1043_1091_1089_1077_1074Code.mapOfGDgdjs_46_951043_951091_951089_951077_951074Code_46GDNewSprite6Objects1Objects = Hashtable.newFrom({"NewSprite6": gdjs._1043_1091_1089_1077_1074Code.GDNewSprite6Objects1});
gdjs._1043_1091_1089_1077_1074Code.mapOfGDgdjs_46_951043_951091_951089_951077_951074Code_46GDNewSprite9Objects1Objects = Hashtable.newFrom({"NewSprite9": gdjs._1043_1091_1089_1077_1074Code.GDNewSprite9Objects1});
gdjs._1043_1091_1089_1077_1074Code.eventsList4 = function(runtimeScene) {

{


gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val = false;
{
gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Гусев", false);
}}

}


};gdjs._1043_1091_1089_1077_1074Code.mapOfGDgdjs_46_951043_951091_951089_951077_951074Code_46GDNewSprite9Objects1Objects = Hashtable.newFrom({"NewSprite9": gdjs._1043_1091_1089_1077_1074Code.GDNewSprite9Objects1});
gdjs._1043_1091_1089_1077_1074Code.mapOfGDgdjs_46_951043_951091_951089_951077_951074Code_46GDExpandButtonObjects1Objects = Hashtable.newFrom({"ExpandButton": gdjs._1043_1091_1089_1077_1074Code.GDExpandButtonObjects1});
gdjs._1043_1091_1089_1077_1074Code.mapOfGDgdjs_46_951043_951091_951089_951077_951074Code_46GDPlayButton2Objects1Objects = Hashtable.newFrom({"PlayButton2": gdjs._1043_1091_1089_1077_1074Code.GDPlayButton2Objects1});
gdjs._1043_1091_1089_1077_1074Code.mapOfGDgdjs_46_951043_951091_951089_951077_951074Code_46GDPauseButton2Objects1Objects = Hashtable.newFrom({"PauseButton2": gdjs._1043_1091_1089_1077_1074Code.GDPauseButton2Objects1});
gdjs._1043_1091_1089_1077_1074Code.mapOfGDgdjs_46_951043_951091_951089_951077_951074Code_46GDExpandButton2Objects1Objects = Hashtable.newFrom({"ExpandButton2": gdjs._1043_1091_1089_1077_1074Code.GDExpandButton2Objects1});
gdjs._1043_1091_1089_1077_1074Code.eventsList5 = function(runtimeScene) {

{


gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val = false;
{
gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Full_Gusev"), gdjs._1043_1091_1089_1077_1074Code.GDFull_95GusevObjects1);
gdjs.copyArray(runtimeScene.getObjects("Gusev"), gdjs._1043_1091_1089_1077_1074Code.GDGusevObjects1);
gdjs._1043_1091_1089_1077_1074Code.GDExpandButton2Objects1.length = 0;

gdjs._1043_1091_1089_1077_1074Code.GDPauseButton2Objects1.length = 0;

gdjs._1043_1091_1089_1077_1074Code.GDPlayButton2Objects1.length = 0;

{for(var i = 0, len = gdjs._1043_1091_1089_1077_1074Code.GDGusevObjects1.length ;i < len;++i) {
    gdjs._1043_1091_1089_1077_1074Code.GDGusevObjects1[i].pause();
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._1043_1091_1089_1077_1074Code.mapOfGDgdjs_46_951043_951091_951089_951077_951074Code_46GDPlayButton2Objects1Objects, 30, 652, "20");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._1043_1091_1089_1077_1074Code.mapOfGDgdjs_46_951043_951091_951089_951077_951074Code_46GDPauseButton2Objects1Objects, 80, 652, "20");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._1043_1091_1089_1077_1074Code.mapOfGDgdjs_46_951043_951091_951089_951077_951074Code_46GDExpandButton2Objects1Objects, 130, 652, "20");
}{for(var i = 0, len = gdjs._1043_1091_1089_1077_1074Code.GDFull_95GusevObjects1.length ;i < len;++i) {
    gdjs._1043_1091_1089_1077_1074Code.GDFull_95GusevObjects1[i].setZOrder(15);
}
}}

}


};gdjs._1043_1091_1089_1077_1074Code.mapOfGDgdjs_46_951043_951091_951089_951077_951074Code_46GDExpandButtonObjects1Objects = Hashtable.newFrom({"ExpandButton": gdjs._1043_1091_1089_1077_1074Code.GDExpandButtonObjects1});
gdjs._1043_1091_1089_1077_1074Code.mapOfGDgdjs_46_951043_951091_951089_951077_951074Code_46GDPlayButton2Objects1Objects = Hashtable.newFrom({"PlayButton2": gdjs._1043_1091_1089_1077_1074Code.GDPlayButton2Objects1});
gdjs._1043_1091_1089_1077_1074Code.eventsList6 = function(runtimeScene) {

{


gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val = false;
{
gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Full_Gusev"), gdjs._1043_1091_1089_1077_1074Code.GDFull_95GusevObjects1);
{for(var i = 0, len = gdjs._1043_1091_1089_1077_1074Code.GDFull_95GusevObjects1.length ;i < len;++i) {
    gdjs._1043_1091_1089_1077_1074Code.GDFull_95GusevObjects1[i].play();
}
}}

}


};gdjs._1043_1091_1089_1077_1074Code.mapOfGDgdjs_46_951043_951091_951089_951077_951074Code_46GDPlayButton2Objects1Objects = Hashtable.newFrom({"PlayButton2": gdjs._1043_1091_1089_1077_1074Code.GDPlayButton2Objects1});
gdjs._1043_1091_1089_1077_1074Code.mapOfGDgdjs_46_951043_951091_951089_951077_951074Code_46GDPauseButton2Objects1Objects = Hashtable.newFrom({"PauseButton2": gdjs._1043_1091_1089_1077_1074Code.GDPauseButton2Objects1});
gdjs._1043_1091_1089_1077_1074Code.eventsList7 = function(runtimeScene) {

{


gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val = false;
{
gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Full_Gusev"), gdjs._1043_1091_1089_1077_1074Code.GDFull_95GusevObjects1);
{for(var i = 0, len = gdjs._1043_1091_1089_1077_1074Code.GDFull_95GusevObjects1.length ;i < len;++i) {
    gdjs._1043_1091_1089_1077_1074Code.GDFull_95GusevObjects1[i].pause();
}
}}

}


};gdjs._1043_1091_1089_1077_1074Code.mapOfGDgdjs_46_951043_951091_951089_951077_951074Code_46GDPauseButton2Objects1Objects = Hashtable.newFrom({"PauseButton2": gdjs._1043_1091_1089_1077_1074Code.GDPauseButton2Objects1});
gdjs._1043_1091_1089_1077_1074Code.mapOfGDgdjs_46_951043_951091_951089_951077_951074Code_46GDExpandButton2Objects1Objects = Hashtable.newFrom({"ExpandButton2": gdjs._1043_1091_1089_1077_1074Code.GDExpandButton2Objects1});
gdjs._1043_1091_1089_1077_1074Code.eventsList8 = function(runtimeScene) {

{


gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val = false;
{
gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val) {
/* Reuse gdjs._1043_1091_1089_1077_1074Code.GDExpandButton2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("Full_Gusev"), gdjs._1043_1091_1089_1077_1074Code.GDFull_95GusevObjects1);
gdjs.copyArray(runtimeScene.getObjects("PauseButton2"), gdjs._1043_1091_1089_1077_1074Code.GDPauseButton2Objects1);
gdjs.copyArray(runtimeScene.getObjects("PlayButton2"), gdjs._1043_1091_1089_1077_1074Code.GDPlayButton2Objects1);
{for(var i = 0, len = gdjs._1043_1091_1089_1077_1074Code.GDFull_95GusevObjects1.length ;i < len;++i) {
    gdjs._1043_1091_1089_1077_1074Code.GDFull_95GusevObjects1[i].pause();
}
}{for(var i = 0, len = gdjs._1043_1091_1089_1077_1074Code.GDFull_95GusevObjects1.length ;i < len;++i) {
    gdjs._1043_1091_1089_1077_1074Code.GDFull_95GusevObjects1[i].setZOrder(0);
}
}{for(var i = 0, len = gdjs._1043_1091_1089_1077_1074Code.GDPlayButton2Objects1.length ;i < len;++i) {
    gdjs._1043_1091_1089_1077_1074Code.GDPlayButton2Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs._1043_1091_1089_1077_1074Code.GDPauseButton2Objects1.length ;i < len;++i) {
    gdjs._1043_1091_1089_1077_1074Code.GDPauseButton2Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs._1043_1091_1089_1077_1074Code.GDExpandButton2Objects1.length ;i < len;++i) {
    gdjs._1043_1091_1089_1077_1074Code.GDExpandButton2Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs._1043_1091_1089_1077_1074Code.mapOfGDgdjs_46_951043_951091_951089_951077_951074Code_46GDExpandButton2Objects1Objects = Hashtable.newFrom({"ExpandButton2": gdjs._1043_1091_1089_1077_1074Code.GDExpandButton2Objects1});
gdjs._1043_1091_1089_1077_1074Code.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs._1043_1091_1089_1077_1074Code.GDPlayButtonObjects1);

gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val = false;
{
gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._1043_1091_1089_1077_1074Code.mapOfGDgdjs_46_951043_951091_951089_951077_951074Code_46GDPlayButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val) {
/* Reuse gdjs._1043_1091_1089_1077_1074Code.GDPlayButtonObjects1 */
{for(var i = 0, len = gdjs._1043_1091_1089_1077_1074Code.GDPlayButtonObjects1.length ;i < len;++i) {
    gdjs._1043_1091_1089_1077_1074Code.GDPlayButtonObjects1[i].setColor("30;41;228");
}
}
{ //Subevents
gdjs._1043_1091_1089_1077_1074Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs._1043_1091_1089_1077_1074Code.GDPlayButtonObjects1);

gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val = false;
{
gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._1043_1091_1089_1077_1074Code.mapOfGDgdjs_46_951043_951091_951089_951077_951074Code_46GDPlayButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val) {
/* Reuse gdjs._1043_1091_1089_1077_1074Code.GDPlayButtonObjects1 */
{for(var i = 0, len = gdjs._1043_1091_1089_1077_1074Code.GDPlayButtonObjects1.length ;i < len;++i) {
    gdjs._1043_1091_1089_1077_1074Code.GDPlayButtonObjects1[i].setColor("0;0;0");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PauseButton"), gdjs._1043_1091_1089_1077_1074Code.GDPauseButtonObjects1);

gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val = false;
{
gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._1043_1091_1089_1077_1074Code.mapOfGDgdjs_46_951043_951091_951089_951077_951074Code_46GDPauseButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val) {
/* Reuse gdjs._1043_1091_1089_1077_1074Code.GDPauseButtonObjects1 */
{for(var i = 0, len = gdjs._1043_1091_1089_1077_1074Code.GDPauseButtonObjects1.length ;i < len;++i) {
    gdjs._1043_1091_1089_1077_1074Code.GDPauseButtonObjects1[i].setColor("30;41;228");
}
}
{ //Subevents
gdjs._1043_1091_1089_1077_1074Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PauseButton"), gdjs._1043_1091_1089_1077_1074Code.GDPauseButtonObjects1);

gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val = false;
{
gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._1043_1091_1089_1077_1074Code.mapOfGDgdjs_46_951043_951091_951089_951077_951074Code_46GDPauseButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val) {
/* Reuse gdjs._1043_1091_1089_1077_1074Code.GDPauseButtonObjects1 */
{for(var i = 0, len = gdjs._1043_1091_1089_1077_1074Code.GDPauseButtonObjects1.length ;i < len;++i) {
    gdjs._1043_1091_1089_1077_1074Code.GDPauseButtonObjects1[i].setColor("0;0;0");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("HomeButton"), gdjs._1043_1091_1089_1077_1074Code.GDHomeButtonObjects1);

gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val = false;
{
gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._1043_1091_1089_1077_1074Code.mapOfGDgdjs_46_951043_951091_951089_951077_951074Code_46GDHomeButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val) {
/* Reuse gdjs._1043_1091_1089_1077_1074Code.GDHomeButtonObjects1 */
{for(var i = 0, len = gdjs._1043_1091_1089_1077_1074Code.GDHomeButtonObjects1.length ;i < len;++i) {
    gdjs._1043_1091_1089_1077_1074Code.GDHomeButtonObjects1[i].setOpacity(255);
}
}
{ //Subevents
gdjs._1043_1091_1089_1077_1074Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("HomeButton"), gdjs._1043_1091_1089_1077_1074Code.GDHomeButtonObjects1);

gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val = false;
{
gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._1043_1091_1089_1077_1074Code.mapOfGDgdjs_46_951043_951091_951089_951077_951074Code_46GDHomeButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val) {
/* Reuse gdjs._1043_1091_1089_1077_1074Code.GDHomeButtonObjects1 */
{for(var i = 0, len = gdjs._1043_1091_1089_1077_1074Code.GDHomeButtonObjects1.length ;i < len;++i) {
    gdjs._1043_1091_1089_1077_1074Code.GDHomeButtonObjects1[i].setOpacity(127.5);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs._1043_1091_1089_1077_1074Code.GDNewSprite6Objects1);

gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val = false;
{
gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._1043_1091_1089_1077_1074Code.mapOfGDgdjs_46_951043_951091_951089_951077_951074Code_46GDNewSprite6Objects1Objects, runtimeScene, true, false);
}if (gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val) {
/* Reuse gdjs._1043_1091_1089_1077_1074Code.GDNewSprite6Objects1 */
{for(var i = 0, len = gdjs._1043_1091_1089_1077_1074Code.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs._1043_1091_1089_1077_1074Code.GDNewSprite6Objects1[i].setOpacity(255);
}
}
{ //Subevents
gdjs._1043_1091_1089_1077_1074Code.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs._1043_1091_1089_1077_1074Code.GDNewSprite6Objects1);

gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val = false;
{
gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._1043_1091_1089_1077_1074Code.mapOfGDgdjs_46_951043_951091_951089_951077_951074Code_46GDNewSprite6Objects1Objects, runtimeScene, true, true);
}if (gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val) {
/* Reuse gdjs._1043_1091_1089_1077_1074Code.GDNewSprite6Objects1 */
{for(var i = 0, len = gdjs._1043_1091_1089_1077_1074Code.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs._1043_1091_1089_1077_1074Code.GDNewSprite6Objects1[i].setOpacity(127.5);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite9"), gdjs._1043_1091_1089_1077_1074Code.GDNewSprite9Objects1);

gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val = false;
{
gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._1043_1091_1089_1077_1074Code.mapOfGDgdjs_46_951043_951091_951089_951077_951074Code_46GDNewSprite9Objects1Objects, runtimeScene, true, false);
}if (gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val) {
/* Reuse gdjs._1043_1091_1089_1077_1074Code.GDNewSprite9Objects1 */
{for(var i = 0, len = gdjs._1043_1091_1089_1077_1074Code.GDNewSprite9Objects1.length ;i < len;++i) {
    gdjs._1043_1091_1089_1077_1074Code.GDNewSprite9Objects1[i].setOpacity(255);
}
}
{ //Subevents
gdjs._1043_1091_1089_1077_1074Code.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite9"), gdjs._1043_1091_1089_1077_1074Code.GDNewSprite9Objects1);

gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val = false;
{
gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._1043_1091_1089_1077_1074Code.mapOfGDgdjs_46_951043_951091_951089_951077_951074Code_46GDNewSprite9Objects1Objects, runtimeScene, true, true);
}if (gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val) {
/* Reuse gdjs._1043_1091_1089_1077_1074Code.GDNewSprite9Objects1 */
{for(var i = 0, len = gdjs._1043_1091_1089_1077_1074Code.GDNewSprite9Objects1.length ;i < len;++i) {
    gdjs._1043_1091_1089_1077_1074Code.GDNewSprite9Objects1[i].setOpacity(127.5);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ExpandButton"), gdjs._1043_1091_1089_1077_1074Code.GDExpandButtonObjects1);

gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val = false;
{
gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._1043_1091_1089_1077_1074Code.mapOfGDgdjs_46_951043_951091_951089_951077_951074Code_46GDExpandButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val) {
/* Reuse gdjs._1043_1091_1089_1077_1074Code.GDExpandButtonObjects1 */
{for(var i = 0, len = gdjs._1043_1091_1089_1077_1074Code.GDExpandButtonObjects1.length ;i < len;++i) {
    gdjs._1043_1091_1089_1077_1074Code.GDExpandButtonObjects1[i].setColor("30;41;228");
}
}
{ //Subevents
gdjs._1043_1091_1089_1077_1074Code.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ExpandButton"), gdjs._1043_1091_1089_1077_1074Code.GDExpandButtonObjects1);

gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val = false;
{
gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._1043_1091_1089_1077_1074Code.mapOfGDgdjs_46_951043_951091_951089_951077_951074Code_46GDExpandButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val) {
/* Reuse gdjs._1043_1091_1089_1077_1074Code.GDExpandButtonObjects1 */
{for(var i = 0, len = gdjs._1043_1091_1089_1077_1074Code.GDExpandButtonObjects1.length ;i < len;++i) {
    gdjs._1043_1091_1089_1077_1074Code.GDExpandButtonObjects1[i].setColor("0;0;0");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton2"), gdjs._1043_1091_1089_1077_1074Code.GDPlayButton2Objects1);

gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val = false;
{
gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._1043_1091_1089_1077_1074Code.mapOfGDgdjs_46_951043_951091_951089_951077_951074Code_46GDPlayButton2Objects1Objects, runtimeScene, true, false);
}if (gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val) {
/* Reuse gdjs._1043_1091_1089_1077_1074Code.GDPlayButton2Objects1 */
{for(var i = 0, len = gdjs._1043_1091_1089_1077_1074Code.GDPlayButton2Objects1.length ;i < len;++i) {
    gdjs._1043_1091_1089_1077_1074Code.GDPlayButton2Objects1[i].setColor("30;41;228");
}
}
{ //Subevents
gdjs._1043_1091_1089_1077_1074Code.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton2"), gdjs._1043_1091_1089_1077_1074Code.GDPlayButton2Objects1);

gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val = false;
{
gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._1043_1091_1089_1077_1074Code.mapOfGDgdjs_46_951043_951091_951089_951077_951074Code_46GDPlayButton2Objects1Objects, runtimeScene, true, true);
}if (gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val) {
/* Reuse gdjs._1043_1091_1089_1077_1074Code.GDPlayButton2Objects1 */
{for(var i = 0, len = gdjs._1043_1091_1089_1077_1074Code.GDPlayButton2Objects1.length ;i < len;++i) {
    gdjs._1043_1091_1089_1077_1074Code.GDPlayButton2Objects1[i].setColor("0;0;0");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PauseButton2"), gdjs._1043_1091_1089_1077_1074Code.GDPauseButton2Objects1);

gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val = false;
{
gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._1043_1091_1089_1077_1074Code.mapOfGDgdjs_46_951043_951091_951089_951077_951074Code_46GDPauseButton2Objects1Objects, runtimeScene, true, false);
}if (gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val) {
/* Reuse gdjs._1043_1091_1089_1077_1074Code.GDPauseButton2Objects1 */
{for(var i = 0, len = gdjs._1043_1091_1089_1077_1074Code.GDPauseButton2Objects1.length ;i < len;++i) {
    gdjs._1043_1091_1089_1077_1074Code.GDPauseButton2Objects1[i].setColor("30;41;228");
}
}
{ //Subevents
gdjs._1043_1091_1089_1077_1074Code.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PauseButton2"), gdjs._1043_1091_1089_1077_1074Code.GDPauseButton2Objects1);

gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val = false;
{
gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._1043_1091_1089_1077_1074Code.mapOfGDgdjs_46_951043_951091_951089_951077_951074Code_46GDPauseButton2Objects1Objects, runtimeScene, true, true);
}if (gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val) {
/* Reuse gdjs._1043_1091_1089_1077_1074Code.GDPauseButton2Objects1 */
{for(var i = 0, len = gdjs._1043_1091_1089_1077_1074Code.GDPauseButton2Objects1.length ;i < len;++i) {
    gdjs._1043_1091_1089_1077_1074Code.GDPauseButton2Objects1[i].setColor("0;0;0");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ExpandButton2"), gdjs._1043_1091_1089_1077_1074Code.GDExpandButton2Objects1);

gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val = false;
{
gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._1043_1091_1089_1077_1074Code.mapOfGDgdjs_46_951043_951091_951089_951077_951074Code_46GDExpandButton2Objects1Objects, runtimeScene, true, false);
}if (gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val) {
/* Reuse gdjs._1043_1091_1089_1077_1074Code.GDExpandButton2Objects1 */
{for(var i = 0, len = gdjs._1043_1091_1089_1077_1074Code.GDExpandButton2Objects1.length ;i < len;++i) {
    gdjs._1043_1091_1089_1077_1074Code.GDExpandButton2Objects1[i].setColor("30;41;228");
}
}
{ //Subevents
gdjs._1043_1091_1089_1077_1074Code.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ExpandButton2"), gdjs._1043_1091_1089_1077_1074Code.GDExpandButton2Objects1);

gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val = false;
{
gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._1043_1091_1089_1077_1074Code.mapOfGDgdjs_46_951043_951091_951089_951077_951074Code_46GDExpandButton2Objects1Objects, runtimeScene, true, true);
}if (gdjs._1043_1091_1089_1077_1074Code.condition0IsTrue_0.val) {
/* Reuse gdjs._1043_1091_1089_1077_1074Code.GDExpandButton2Objects1 */
{for(var i = 0, len = gdjs._1043_1091_1089_1077_1074Code.GDExpandButton2Objects1.length ;i < len;++i) {
    gdjs._1043_1091_1089_1077_1074Code.GDExpandButton2Objects1[i].setColor("0;0;0");
}
}}

}


};

gdjs._1043_1091_1089_1077_1074Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._1043_1091_1089_1077_1074Code.GDHomeButtonObjects1.length = 0;
gdjs._1043_1091_1089_1077_1074Code.GDHomeButtonObjects2.length = 0;
gdjs._1043_1091_1089_1077_1074Code.GDNewSprite6Objects1.length = 0;
gdjs._1043_1091_1089_1077_1074Code.GDNewSprite6Objects2.length = 0;
gdjs._1043_1091_1089_1077_1074Code.GDNewSprite9Objects1.length = 0;
gdjs._1043_1091_1089_1077_1074Code.GDNewSprite9Objects2.length = 0;
gdjs._1043_1091_1089_1077_1074Code.GDPlayButtonObjects1.length = 0;
gdjs._1043_1091_1089_1077_1074Code.GDPlayButtonObjects2.length = 0;
gdjs._1043_1091_1089_1077_1074Code.GDPlayButton2Objects1.length = 0;
gdjs._1043_1091_1089_1077_1074Code.GDPlayButton2Objects2.length = 0;
gdjs._1043_1091_1089_1077_1074Code.GDPauseButtonObjects1.length = 0;
gdjs._1043_1091_1089_1077_1074Code.GDPauseButtonObjects2.length = 0;
gdjs._1043_1091_1089_1077_1074Code.GDPauseButton2Objects1.length = 0;
gdjs._1043_1091_1089_1077_1074Code.GDPauseButton2Objects2.length = 0;
gdjs._1043_1091_1089_1077_1074Code.GDExpandButtonObjects1.length = 0;
gdjs._1043_1091_1089_1077_1074Code.GDExpandButtonObjects2.length = 0;
gdjs._1043_1091_1089_1077_1074Code.GDExpandButton2Objects1.length = 0;
gdjs._1043_1091_1089_1077_1074Code.GDExpandButton2Objects2.length = 0;
gdjs._1043_1091_1089_1077_1074Code.GDNewTiledSpriteObjects1.length = 0;
gdjs._1043_1091_1089_1077_1074Code.GDNewTiledSpriteObjects2.length = 0;
gdjs._1043_1091_1089_1077_1074Code.GDGusevObjects1.length = 0;
gdjs._1043_1091_1089_1077_1074Code.GDGusevObjects2.length = 0;
gdjs._1043_1091_1089_1077_1074Code.GDFull_95GusevObjects1.length = 0;
gdjs._1043_1091_1089_1077_1074Code.GDFull_95GusevObjects2.length = 0;
gdjs._1043_1091_1089_1077_1074Code.GDNewTextObjects1.length = 0;
gdjs._1043_1091_1089_1077_1074Code.GDNewTextObjects2.length = 0;
gdjs._1043_1091_1089_1077_1074Code.GDNewText2Objects1.length = 0;
gdjs._1043_1091_1089_1077_1074Code.GDNewText2Objects2.length = 0;
gdjs._1043_1091_1089_1077_1074Code.GDNewSpriteObjects1.length = 0;
gdjs._1043_1091_1089_1077_1074Code.GDNewSpriteObjects2.length = 0;
gdjs._1043_1091_1089_1077_1074Code.GDNewSprite2Objects1.length = 0;
gdjs._1043_1091_1089_1077_1074Code.GDNewSprite2Objects2.length = 0;
gdjs._1043_1091_1089_1077_1074Code.GDLeftArrowRoundButtonObjects1.length = 0;
gdjs._1043_1091_1089_1077_1074Code.GDLeftArrowRoundButtonObjects2.length = 0;
gdjs._1043_1091_1089_1077_1074Code.GDRightArrowRoundButtonObjects1.length = 0;
gdjs._1043_1091_1089_1077_1074Code.GDRightArrowRoundButtonObjects2.length = 0;

gdjs._1043_1091_1089_1077_1074Code.eventsList9(runtimeScene);
return;

}

gdjs['_1043_1091_1089_1077_1074Code'] = gdjs._1043_1091_1089_1077_1074Code;
