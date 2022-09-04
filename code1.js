gdjs._1057_1086_1074_1077_1090_1089_1082Code = {};
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDHomeButtonObjects1= [];
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDHomeButtonObjects2= [];
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite6Objects1= [];
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite6Objects2= [];
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite9Objects1= [];
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite9Objects2= [];
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPlayButtonObjects1= [];
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPlayButtonObjects2= [];
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPlayButton2Objects1= [];
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPlayButton2Objects2= [];
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPauseButtonObjects1= [];
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPauseButtonObjects2= [];
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPauseButton2Objects1= [];
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPauseButton2Objects2= [];
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDExpandButtonObjects1= [];
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDExpandButtonObjects2= [];
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDExpandButton2Objects1= [];
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDExpandButton2Objects2= [];
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewTiledSpriteObjects1= [];
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewTiledSpriteObjects2= [];
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDSovetskObjects1= [];
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDSovetskObjects2= [];
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDFull_95SovetskObjects1= [];
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDFull_95SovetskObjects2= [];
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewTextObjects1= [];
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewTextObjects2= [];
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewText2Objects1= [];
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewText2Objects2= [];
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite2Objects1= [];
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite2Objects2= [];
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite3Objects1= [];
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite3Objects2= [];
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite4Objects1= [];
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite4Objects2= [];
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite5Objects1= [];
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite5Objects2= [];
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite7Objects1= [];
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite7Objects2= [];
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite8Objects1= [];
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite8Objects2= [];

gdjs._1057_1086_1074_1077_1090_1089_1082Code.conditionTrue_0 = {val:false};
gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0 = {val:false};
gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition1IsTrue_0 = {val:false};


gdjs._1057_1086_1074_1077_1090_1089_1082Code.mapOfGDgdjs_46_951057_951086_951074_951077_951090_951089_951082Code_46GDPlayButtonObjects1Objects = Hashtable.newFrom({"PlayButton": gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPlayButtonObjects1});
gdjs._1057_1086_1074_1077_1090_1089_1082Code.eventsList0 = function(runtimeScene) {

{


gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val = false;
{
gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Sovetsk"), gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDSovetskObjects1);
{for(var i = 0, len = gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDSovetskObjects1.length ;i < len;++i) {
    gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDSovetskObjects1[i].play();
}
}}

}


};gdjs._1057_1086_1074_1077_1090_1089_1082Code.mapOfGDgdjs_46_951057_951086_951074_951077_951090_951089_951082Code_46GDPlayButtonObjects1Objects = Hashtable.newFrom({"PlayButton": gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPlayButtonObjects1});
gdjs._1057_1086_1074_1077_1090_1089_1082Code.mapOfGDgdjs_46_951057_951086_951074_951077_951090_951089_951082Code_46GDPauseButtonObjects1Objects = Hashtable.newFrom({"PauseButton": gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPauseButtonObjects1});
gdjs._1057_1086_1074_1077_1090_1089_1082Code.eventsList1 = function(runtimeScene) {

{


gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val = false;
{
gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Sovetsk"), gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDSovetskObjects1);
{for(var i = 0, len = gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDSovetskObjects1.length ;i < len;++i) {
    gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDSovetskObjects1[i].pause();
}
}}

}


};gdjs._1057_1086_1074_1077_1090_1089_1082Code.mapOfGDgdjs_46_951057_951086_951074_951077_951090_951089_951082Code_46GDPauseButtonObjects1Objects = Hashtable.newFrom({"PauseButton": gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPauseButtonObjects1});
gdjs._1057_1086_1074_1077_1090_1089_1082Code.mapOfGDgdjs_46_951057_951086_951074_951077_951090_951089_951082Code_46GDHomeButtonObjects1Objects = Hashtable.newFrom({"HomeButton": gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDHomeButtonObjects1});
gdjs._1057_1086_1074_1077_1090_1089_1082Code.eventsList2 = function(runtimeScene) {

{


gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val = false;
{
gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Главная карта", false);
}}

}


};gdjs._1057_1086_1074_1077_1090_1089_1082Code.mapOfGDgdjs_46_951057_951086_951074_951077_951090_951089_951082Code_46GDHomeButtonObjects1Objects = Hashtable.newFrom({"HomeButton": gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDHomeButtonObjects1});
gdjs._1057_1086_1074_1077_1090_1089_1082Code.mapOfGDgdjs_46_951057_951086_951074_951077_951090_951089_951082Code_46GDNewSprite6Objects1Objects = Hashtable.newFrom({"NewSprite6": gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite6Objects1});
gdjs._1057_1086_1074_1077_1090_1089_1082Code.mapOfGDgdjs_46_951057_951086_951074_951077_951090_951089_951082Code_46GDNewText2Objects1Objects = Hashtable.newFrom({"NewText2": gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewText2Objects1});
gdjs._1057_1086_1074_1077_1090_1089_1082Code.mapOfGDgdjs_46_951057_951086_951074_951077_951090_951089_951082Code_46GDNewSprite5Objects1Objects = Hashtable.newFrom({"NewSprite5": gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite5Objects1});
gdjs._1057_1086_1074_1077_1090_1089_1082Code.mapOfGDgdjs_46_951057_951086_951074_951077_951090_951089_951082Code_46GDNewSprite7Objects1Objects = Hashtable.newFrom({"NewSprite7": gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite7Objects1});
gdjs._1057_1086_1074_1077_1090_1089_1082Code.mapOfGDgdjs_46_951057_951086_951074_951077_951090_951089_951082Code_46GDNewSprite8Objects1Objects = Hashtable.newFrom({"NewSprite8": gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite8Objects1});
gdjs._1057_1086_1074_1077_1090_1089_1082Code.eventsList3 = function(runtimeScene) {

{


gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val = false;
{
gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ExpandButton"), gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDExpandButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("PauseButton"), gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPauseButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPlayButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Sovetsk"), gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDSovetskObjects1);
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite5Objects1.length = 0;

gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite7Objects1.length = 0;

gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite8Objects1.length = 0;

gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewText2Objects1.length = 0;

{for(var i = 0, len = gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDSovetskObjects1.length ;i < len;++i) {
    gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDSovetskObjects1[i].hide();
}
}{for(var i = 0, len = gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPlayButtonObjects1.length ;i < len;++i) {
    gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPlayButtonObjects1[i].hide();
}
}{for(var i = 0, len = gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPauseButtonObjects1.length ;i < len;++i) {
    gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPauseButtonObjects1[i].hide();
}
}{for(var i = 0, len = gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewTextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite4Objects1[i].hide();
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._1057_1086_1074_1077_1090_1089_1082Code.mapOfGDgdjs_46_951057_951086_951074_951077_951090_951089_951082Code_46GDNewText2Objects1Objects, 27, 97, "18");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._1057_1086_1074_1077_1090_1089_1082Code.mapOfGDgdjs_46_951057_951086_951074_951077_951090_951089_951082Code_46GDNewSprite5Objects1Objects, 42, 420, "12");
}{for(var i = 0, len = gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite5Objects1[i].setSize(410, 256);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._1057_1086_1074_1077_1090_1089_1082Code.mapOfGDgdjs_46_951057_951086_951074_951077_951090_951089_951082Code_46GDNewSprite7Objects1Objects, 490, 420, "12");
}{for(var i = 0, len = gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite7Objects1[i].setSize(410, 256);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._1057_1086_1074_1077_1090_1089_1082Code.mapOfGDgdjs_46_951057_951086_951074_951077_951090_951089_951082Code_46GDNewSprite8Objects1Objects, 938, 255, "12");
}{for(var i = 0, len = gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite8Objects1[i].setSize(290, 420);
}
}{for(var i = 0, len = gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDExpandButtonObjects1.length ;i < len;++i) {
    gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDExpandButtonObjects1[i].hide();
}
}}

}


};gdjs._1057_1086_1074_1077_1090_1089_1082Code.mapOfGDgdjs_46_951057_951086_951074_951077_951090_951089_951082Code_46GDNewSprite6Objects1Objects = Hashtable.newFrom({"NewSprite6": gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite6Objects1});
gdjs._1057_1086_1074_1077_1090_1089_1082Code.mapOfGDgdjs_46_951057_951086_951074_951077_951090_951089_951082Code_46GDNewSprite9Objects1Objects = Hashtable.newFrom({"NewSprite9": gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite9Objects1});
gdjs._1057_1086_1074_1077_1090_1089_1082Code.eventsList4 = function(runtimeScene) {

{


gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val = false;
{
gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Советск", false);
}}

}


};gdjs._1057_1086_1074_1077_1090_1089_1082Code.mapOfGDgdjs_46_951057_951086_951074_951077_951090_951089_951082Code_46GDNewSprite9Objects1Objects = Hashtable.newFrom({"NewSprite9": gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite9Objects1});
gdjs._1057_1086_1074_1077_1090_1089_1082Code.mapOfGDgdjs_46_951057_951086_951074_951077_951090_951089_951082Code_46GDExpandButtonObjects1Objects = Hashtable.newFrom({"ExpandButton": gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDExpandButtonObjects1});
gdjs._1057_1086_1074_1077_1090_1089_1082Code.mapOfGDgdjs_46_951057_951086_951074_951077_951090_951089_951082Code_46GDPlayButton2Objects1Objects = Hashtable.newFrom({"PlayButton2": gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPlayButton2Objects1});
gdjs._1057_1086_1074_1077_1090_1089_1082Code.mapOfGDgdjs_46_951057_951086_951074_951077_951090_951089_951082Code_46GDPauseButton2Objects1Objects = Hashtable.newFrom({"PauseButton2": gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPauseButton2Objects1});
gdjs._1057_1086_1074_1077_1090_1089_1082Code.mapOfGDgdjs_46_951057_951086_951074_951077_951090_951089_951082Code_46GDExpandButton2Objects1Objects = Hashtable.newFrom({"ExpandButton2": gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDExpandButton2Objects1});
gdjs._1057_1086_1074_1077_1090_1089_1082Code.eventsList5 = function(runtimeScene) {

{


gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val = false;
{
gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Full_Sovetsk"), gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDFull_95SovetskObjects1);
gdjs.copyArray(runtimeScene.getObjects("Sovetsk"), gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDSovetskObjects1);
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDExpandButton2Objects1.length = 0;

gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPauseButton2Objects1.length = 0;

gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPlayButton2Objects1.length = 0;

{for(var i = 0, len = gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDSovetskObjects1.length ;i < len;++i) {
    gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDSovetskObjects1[i].pause();
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._1057_1086_1074_1077_1090_1089_1082Code.mapOfGDgdjs_46_951057_951086_951074_951077_951090_951089_951082Code_46GDPlayButton2Objects1Objects, 30, 652, "20");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._1057_1086_1074_1077_1090_1089_1082Code.mapOfGDgdjs_46_951057_951086_951074_951077_951090_951089_951082Code_46GDPauseButton2Objects1Objects, 80, 652, "20");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._1057_1086_1074_1077_1090_1089_1082Code.mapOfGDgdjs_46_951057_951086_951074_951077_951090_951089_951082Code_46GDExpandButton2Objects1Objects, 130, 652, "20");
}{for(var i = 0, len = gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDFull_95SovetskObjects1.length ;i < len;++i) {
    gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDFull_95SovetskObjects1[i].setZOrder(15);
}
}}

}


};gdjs._1057_1086_1074_1077_1090_1089_1082Code.mapOfGDgdjs_46_951057_951086_951074_951077_951090_951089_951082Code_46GDExpandButtonObjects1Objects = Hashtable.newFrom({"ExpandButton": gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDExpandButtonObjects1});
gdjs._1057_1086_1074_1077_1090_1089_1082Code.mapOfGDgdjs_46_951057_951086_951074_951077_951090_951089_951082Code_46GDPlayButton2Objects1Objects = Hashtable.newFrom({"PlayButton2": gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPlayButton2Objects1});
gdjs._1057_1086_1074_1077_1090_1089_1082Code.eventsList6 = function(runtimeScene) {

{


gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val = false;
{
gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Full_Sovetsk"), gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDFull_95SovetskObjects1);
{for(var i = 0, len = gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDFull_95SovetskObjects1.length ;i < len;++i) {
    gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDFull_95SovetskObjects1[i].play();
}
}}

}


};gdjs._1057_1086_1074_1077_1090_1089_1082Code.mapOfGDgdjs_46_951057_951086_951074_951077_951090_951089_951082Code_46GDPlayButton2Objects1Objects = Hashtable.newFrom({"PlayButton2": gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPlayButton2Objects1});
gdjs._1057_1086_1074_1077_1090_1089_1082Code.mapOfGDgdjs_46_951057_951086_951074_951077_951090_951089_951082Code_46GDPauseButton2Objects1Objects = Hashtable.newFrom({"PauseButton2": gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPauseButton2Objects1});
gdjs._1057_1086_1074_1077_1090_1089_1082Code.eventsList7 = function(runtimeScene) {

{


gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val = false;
{
gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Full_Sovetsk"), gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDFull_95SovetskObjects1);
{for(var i = 0, len = gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDFull_95SovetskObjects1.length ;i < len;++i) {
    gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDFull_95SovetskObjects1[i].pause();
}
}}

}


};gdjs._1057_1086_1074_1077_1090_1089_1082Code.mapOfGDgdjs_46_951057_951086_951074_951077_951090_951089_951082Code_46GDPauseButton2Objects1Objects = Hashtable.newFrom({"PauseButton2": gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPauseButton2Objects1});
gdjs._1057_1086_1074_1077_1090_1089_1082Code.mapOfGDgdjs_46_951057_951086_951074_951077_951090_951089_951082Code_46GDExpandButton2Objects1Objects = Hashtable.newFrom({"ExpandButton2": gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDExpandButton2Objects1});
gdjs._1057_1086_1074_1077_1090_1089_1082Code.eventsList8 = function(runtimeScene) {

{


gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val = false;
{
gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val) {
/* Reuse gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDExpandButton2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("Full_Sovetsk"), gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDFull_95SovetskObjects1);
gdjs.copyArray(runtimeScene.getObjects("PauseButton2"), gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPauseButton2Objects1);
gdjs.copyArray(runtimeScene.getObjects("PlayButton2"), gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPlayButton2Objects1);
{for(var i = 0, len = gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDFull_95SovetskObjects1.length ;i < len;++i) {
    gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDFull_95SovetskObjects1[i].pause();
}
}{for(var i = 0, len = gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDFull_95SovetskObjects1.length ;i < len;++i) {
    gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDFull_95SovetskObjects1[i].setZOrder(0);
}
}{for(var i = 0, len = gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPlayButton2Objects1.length ;i < len;++i) {
    gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPlayButton2Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPauseButton2Objects1.length ;i < len;++i) {
    gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPauseButton2Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDExpandButton2Objects1.length ;i < len;++i) {
    gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDExpandButton2Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs._1057_1086_1074_1077_1090_1089_1082Code.mapOfGDgdjs_46_951057_951086_951074_951077_951090_951089_951082Code_46GDExpandButton2Objects1Objects = Hashtable.newFrom({"ExpandButton2": gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDExpandButton2Objects1});
gdjs._1057_1086_1074_1077_1090_1089_1082Code.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPlayButtonObjects1);

gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val = false;
{
gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._1057_1086_1074_1077_1090_1089_1082Code.mapOfGDgdjs_46_951057_951086_951074_951077_951090_951089_951082Code_46GDPlayButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val) {
/* Reuse gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPlayButtonObjects1 */
{for(var i = 0, len = gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPlayButtonObjects1.length ;i < len;++i) {
    gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPlayButtonObjects1[i].setColor("30;41;228");
}
}
{ //Subevents
gdjs._1057_1086_1074_1077_1090_1089_1082Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPlayButtonObjects1);

gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val = false;
{
gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._1057_1086_1074_1077_1090_1089_1082Code.mapOfGDgdjs_46_951057_951086_951074_951077_951090_951089_951082Code_46GDPlayButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val) {
/* Reuse gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPlayButtonObjects1 */
{for(var i = 0, len = gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPlayButtonObjects1.length ;i < len;++i) {
    gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPlayButtonObjects1[i].setColor("0;0;0");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PauseButton"), gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPauseButtonObjects1);

gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val = false;
{
gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._1057_1086_1074_1077_1090_1089_1082Code.mapOfGDgdjs_46_951057_951086_951074_951077_951090_951089_951082Code_46GDPauseButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val) {
/* Reuse gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPauseButtonObjects1 */
{for(var i = 0, len = gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPauseButtonObjects1.length ;i < len;++i) {
    gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPauseButtonObjects1[i].setColor("30;41;228");
}
}
{ //Subevents
gdjs._1057_1086_1074_1077_1090_1089_1082Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PauseButton"), gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPauseButtonObjects1);

gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val = false;
{
gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._1057_1086_1074_1077_1090_1089_1082Code.mapOfGDgdjs_46_951057_951086_951074_951077_951090_951089_951082Code_46GDPauseButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val) {
/* Reuse gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPauseButtonObjects1 */
{for(var i = 0, len = gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPauseButtonObjects1.length ;i < len;++i) {
    gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPauseButtonObjects1[i].setColor("0;0;0");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("HomeButton"), gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDHomeButtonObjects1);

gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val = false;
{
gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._1057_1086_1074_1077_1090_1089_1082Code.mapOfGDgdjs_46_951057_951086_951074_951077_951090_951089_951082Code_46GDHomeButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val) {
/* Reuse gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDHomeButtonObjects1 */
{for(var i = 0, len = gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDHomeButtonObjects1.length ;i < len;++i) {
    gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDHomeButtonObjects1[i].setOpacity(255);
}
}
{ //Subevents
gdjs._1057_1086_1074_1077_1090_1089_1082Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("HomeButton"), gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDHomeButtonObjects1);

gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val = false;
{
gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._1057_1086_1074_1077_1090_1089_1082Code.mapOfGDgdjs_46_951057_951086_951074_951077_951090_951089_951082Code_46GDHomeButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val) {
/* Reuse gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDHomeButtonObjects1 */
{for(var i = 0, len = gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDHomeButtonObjects1.length ;i < len;++i) {
    gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDHomeButtonObjects1[i].setOpacity(127.5);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite6Objects1);

gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val = false;
{
gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._1057_1086_1074_1077_1090_1089_1082Code.mapOfGDgdjs_46_951057_951086_951074_951077_951090_951089_951082Code_46GDNewSprite6Objects1Objects, runtimeScene, true, false);
}if (gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val) {
/* Reuse gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite6Objects1 */
{for(var i = 0, len = gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite6Objects1[i].setOpacity(255);
}
}
{ //Subevents
gdjs._1057_1086_1074_1077_1090_1089_1082Code.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite6Objects1);

gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val = false;
{
gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._1057_1086_1074_1077_1090_1089_1082Code.mapOfGDgdjs_46_951057_951086_951074_951077_951090_951089_951082Code_46GDNewSprite6Objects1Objects, runtimeScene, true, true);
}if (gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val) {
/* Reuse gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite6Objects1 */
{for(var i = 0, len = gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite6Objects1[i].setOpacity(127.5);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite9"), gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite9Objects1);

gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val = false;
{
gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._1057_1086_1074_1077_1090_1089_1082Code.mapOfGDgdjs_46_951057_951086_951074_951077_951090_951089_951082Code_46GDNewSprite9Objects1Objects, runtimeScene, true, false);
}if (gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val) {
/* Reuse gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite9Objects1 */
{for(var i = 0, len = gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite9Objects1.length ;i < len;++i) {
    gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite9Objects1[i].setOpacity(255);
}
}
{ //Subevents
gdjs._1057_1086_1074_1077_1090_1089_1082Code.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite9"), gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite9Objects1);

gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val = false;
{
gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._1057_1086_1074_1077_1090_1089_1082Code.mapOfGDgdjs_46_951057_951086_951074_951077_951090_951089_951082Code_46GDNewSprite9Objects1Objects, runtimeScene, true, true);
}if (gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val) {
/* Reuse gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite9Objects1 */
{for(var i = 0, len = gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite9Objects1.length ;i < len;++i) {
    gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite9Objects1[i].setOpacity(127.5);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ExpandButton"), gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDExpandButtonObjects1);

gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val = false;
{
gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._1057_1086_1074_1077_1090_1089_1082Code.mapOfGDgdjs_46_951057_951086_951074_951077_951090_951089_951082Code_46GDExpandButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val) {
/* Reuse gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDExpandButtonObjects1 */
{for(var i = 0, len = gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDExpandButtonObjects1.length ;i < len;++i) {
    gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDExpandButtonObjects1[i].setColor("30;41;228");
}
}
{ //Subevents
gdjs._1057_1086_1074_1077_1090_1089_1082Code.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ExpandButton"), gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDExpandButtonObjects1);

gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val = false;
{
gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._1057_1086_1074_1077_1090_1089_1082Code.mapOfGDgdjs_46_951057_951086_951074_951077_951090_951089_951082Code_46GDExpandButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val) {
/* Reuse gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDExpandButtonObjects1 */
{for(var i = 0, len = gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDExpandButtonObjects1.length ;i < len;++i) {
    gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDExpandButtonObjects1[i].setColor("0;0;0");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton2"), gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPlayButton2Objects1);

gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val = false;
{
gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._1057_1086_1074_1077_1090_1089_1082Code.mapOfGDgdjs_46_951057_951086_951074_951077_951090_951089_951082Code_46GDPlayButton2Objects1Objects, runtimeScene, true, false);
}if (gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val) {
/* Reuse gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPlayButton2Objects1 */
{for(var i = 0, len = gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPlayButton2Objects1.length ;i < len;++i) {
    gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPlayButton2Objects1[i].setColor("30;41;228");
}
}
{ //Subevents
gdjs._1057_1086_1074_1077_1090_1089_1082Code.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton2"), gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPlayButton2Objects1);

gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val = false;
{
gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._1057_1086_1074_1077_1090_1089_1082Code.mapOfGDgdjs_46_951057_951086_951074_951077_951090_951089_951082Code_46GDPlayButton2Objects1Objects, runtimeScene, true, true);
}if (gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val) {
/* Reuse gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPlayButton2Objects1 */
{for(var i = 0, len = gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPlayButton2Objects1.length ;i < len;++i) {
    gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPlayButton2Objects1[i].setColor("0;0;0");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PauseButton2"), gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPauseButton2Objects1);

gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val = false;
{
gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._1057_1086_1074_1077_1090_1089_1082Code.mapOfGDgdjs_46_951057_951086_951074_951077_951090_951089_951082Code_46GDPauseButton2Objects1Objects, runtimeScene, true, false);
}if (gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val) {
/* Reuse gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPauseButton2Objects1 */
{for(var i = 0, len = gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPauseButton2Objects1.length ;i < len;++i) {
    gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPauseButton2Objects1[i].setColor("30;41;228");
}
}
{ //Subevents
gdjs._1057_1086_1074_1077_1090_1089_1082Code.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PauseButton2"), gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPauseButton2Objects1);

gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val = false;
{
gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._1057_1086_1074_1077_1090_1089_1082Code.mapOfGDgdjs_46_951057_951086_951074_951077_951090_951089_951082Code_46GDPauseButton2Objects1Objects, runtimeScene, true, true);
}if (gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val) {
/* Reuse gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPauseButton2Objects1 */
{for(var i = 0, len = gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPauseButton2Objects1.length ;i < len;++i) {
    gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPauseButton2Objects1[i].setColor("0;0;0");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ExpandButton2"), gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDExpandButton2Objects1);

gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val = false;
{
gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._1057_1086_1074_1077_1090_1089_1082Code.mapOfGDgdjs_46_951057_951086_951074_951077_951090_951089_951082Code_46GDExpandButton2Objects1Objects, runtimeScene, true, false);
}if (gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val) {
/* Reuse gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDExpandButton2Objects1 */
{for(var i = 0, len = gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDExpandButton2Objects1.length ;i < len;++i) {
    gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDExpandButton2Objects1[i].setColor("30;41;228");
}
}
{ //Subevents
gdjs._1057_1086_1074_1077_1090_1089_1082Code.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ExpandButton2"), gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDExpandButton2Objects1);

gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val = false;
{
gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._1057_1086_1074_1077_1090_1089_1082Code.mapOfGDgdjs_46_951057_951086_951074_951077_951090_951089_951082Code_46GDExpandButton2Objects1Objects, runtimeScene, true, true);
}if (gdjs._1057_1086_1074_1077_1090_1089_1082Code.condition0IsTrue_0.val) {
/* Reuse gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDExpandButton2Objects1 */
{for(var i = 0, len = gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDExpandButton2Objects1.length ;i < len;++i) {
    gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDExpandButton2Objects1[i].setColor("0;0;0");
}
}}

}


};

gdjs._1057_1086_1074_1077_1090_1089_1082Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDHomeButtonObjects1.length = 0;
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDHomeButtonObjects2.length = 0;
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite6Objects1.length = 0;
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite6Objects2.length = 0;
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite9Objects1.length = 0;
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite9Objects2.length = 0;
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPlayButtonObjects1.length = 0;
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPlayButtonObjects2.length = 0;
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPlayButton2Objects1.length = 0;
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPlayButton2Objects2.length = 0;
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPauseButtonObjects1.length = 0;
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPauseButtonObjects2.length = 0;
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPauseButton2Objects1.length = 0;
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDPauseButton2Objects2.length = 0;
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDExpandButtonObjects1.length = 0;
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDExpandButtonObjects2.length = 0;
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDExpandButton2Objects1.length = 0;
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDExpandButton2Objects2.length = 0;
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewTiledSpriteObjects1.length = 0;
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewTiledSpriteObjects2.length = 0;
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDSovetskObjects1.length = 0;
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDSovetskObjects2.length = 0;
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDFull_95SovetskObjects1.length = 0;
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDFull_95SovetskObjects2.length = 0;
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewTextObjects1.length = 0;
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewTextObjects2.length = 0;
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewText2Objects1.length = 0;
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewText2Objects2.length = 0;
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite2Objects1.length = 0;
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite2Objects2.length = 0;
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite3Objects1.length = 0;
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite3Objects2.length = 0;
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite4Objects1.length = 0;
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite4Objects2.length = 0;
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite5Objects1.length = 0;
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite5Objects2.length = 0;
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite7Objects1.length = 0;
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite7Objects2.length = 0;
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite8Objects1.length = 0;
gdjs._1057_1086_1074_1077_1090_1089_1082Code.GDNewSprite8Objects2.length = 0;

gdjs._1057_1086_1074_1077_1090_1089_1082Code.eventsList9(runtimeScene);
return;

}

gdjs['_1057_1086_1074_1077_1090_1089_1082Code'] = gdjs._1057_1086_1074_1077_1090_1089_1082Code;
