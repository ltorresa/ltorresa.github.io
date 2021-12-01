// Created by iWeb 3.0.4 local-build-20201003

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-5,5,10,270),url:'home_files/stroke.png'},{rect:new IWRect(-5,-5,10,10),url:'home_files/stroke_1.png'},{rect:new IWRect(5,-5,241,10),url:'home_files/stroke_2.png'},{rect:new IWRect(246,-5,10,10),url:'home_files/stroke_3.png'},{rect:new IWRect(246,5,10,270),url:'home_files/stroke_4.png'},{rect:new IWRect(246,275,10,11),url:'home_files/stroke_5.png'},{rect:new IWRect(5,275,241,11),url:'home_files/stroke_6.png'},{rect:new IWRect(-5,275,10,11),url:'home_files/stroke_7.png'}],new IWSize(251,281))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('home_files/homeMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
