function togglestartmenu(){
    if(startmenu.style.display != 'none'){
        startmenu.style.display = 'none';
    }
    else{
        startmenu.style.display = 'block';
    }
}
function togglesocialmedia(){
    if(socialmedia.style.display != 'none'){
        socialmedia.style.display = 'none';
    }
    else{
        socialmedia.style.display = 'block';
    }
}
function togglesettings(){
    if(settings.style.display != 'none'){
        settings.style.display = 'none';
    }
    else{
        settings.style.display = 'block';
        settings.style.zIndex = 800;
        browser.style.zIndex = 0;
        musiclibrary.style.zIndex = 0;
        utube.style.zIndex = 0;
        mystore.style.zIndex = 0;
    }
}
function closeprogrammsetting(){
    settings.style.display = 'none';
   }
//......................................................................................   
   function closeprogrammbrowser(){
    browser.style.display = 'none';
   }
function browseropen(){
    if(browser.style.display != 'none'){
        browser.style.display = 'none';
    }
    else{
        browser.style.display = 'block';
        settings.style.zIndex = 0;
        browser.style.zIndex = 800;
        musiclibrary.style.zIndex = 0;
        utube.style.zIndex = 0;
        mystore.style.zIndex = 0; 
    }
}
//.....................................................................................
function changeindex1(){
   if(settings.style.zIndex != 0){
    settings.style.zIndex = 0;
} 
else{
    settings.style.zIndex = 800;
    browser.style.zIndex = 0;
    musiclibrary.style.zIndex = 0;
    utube.style.zIndex = 0;
    mystore.style.zIndex = 0;
}
}
function changeindex2(){
    if(browser.style.zIndex != 0){
     browser.style.zIndex = 0;
 } 
 else{
    settings.style.zIndex = 0;
    browser.style.zIndex = 800;
    musiclibrary.style.zIndex = 0;
    utube.style.zIndex = 0;
    mystore.style.zIndex = 0; 
 }
 }
 function changeindex3(){
    if(musiclibrary.style.zIndex != 0){
        musiclibrary.style.zIndex = 0;
 } 
 else{
    settings.style.zIndex = 0;
    browser.style.zIndex = 0;
    musiclibrary.style.zIndex = 800;
    utube.style.zIndex = 0;
    mystore.style.zIndex = 0;
 }
 }
 function changeindex4(){
    if(utube.style.zIndex != 0){
     utube.style.zIndex = 0;
 } 
 else{
    settings.style.zIndex = 0;
    browser.style.zIndex = 0;
    musiclibrary.style.zIndex = 0;
    utube.style.zIndex = 800;
    mystore.style.zIndex = 0;
 }
 }
 function changeindex5(){
    if(mystore.style.zIndex != 0){
     mystore.style.zIndex = 0;
 } 
 else{
    settings.style.zIndex = 0;
    browser.style.zIndex = 0;
    musiclibrary.style.zIndex = 0;
    utube.style.zIndex = 0;
    mystore.style.zIndex = 800;
 }
 }

//.....................................................................................
function openmusic(){
    if(musiclibrary.style.display != 'none'){
        musiclibrary.style.display = 'none';
    }
    else{
        musiclibrary.style.display = 'block';
        settings.style.zIndex = 0;
        browser.style.zIndex = 0;
        musiclibrary.style.zIndex = 800;
        utube.style.zIndex = 0;
        mystore.style.zIndex = 0;
    }
}
function closeprogrammmusiclibrary(){
    musiclibrary.style.display = 'none';
   }
 //..................................................................................................................
   function openutube(){
    if(utube.style.display != 'none'){
        utube.style.display = 'none';
    }
    else{
        utube.style.display = 'block';
        settings.style.zIndex = 0;
        browser.style.zIndex = 0;
        musiclibrary.style.zIndex = 0;
        utube.style.zIndex = 800;
        mystore.style.zIndex = 0;
    }
}
function closeprogrammutube(){
    utube.style.display = 'none';
   }
//.................................................................................................................................
function openmystore(){
    if(mystore.style.display != 'none'){
        mystore.style.display = 'none';
    }
    else{
        mystore.style.display = 'block';
        settings.style.zIndex = 0;
        browser.style.zIndex = 0;
        musiclibrary.style.zIndex = 0;
        utube.style.zIndex = 0;
        mystore.style.zIndex = 800;
    }
}
function closeprogrammmystore(){
    mystore.style.display = 'none';
   }   


//.........................................................................................................................................
function wallchanger1(){
    document.querySelector('body').style.background = "url('wall2.jpg')";
}
function wallchanger2(){
    document.querySelector('body').style.background = "url('xp.jpg')";
}
function wallchanger3(){
    document.querySelector('body').style.background = "url('wallpaper3.jpg')";
}
function wallchanger4(){
    document.querySelector('body').style.background = "url('xp1920.jpg')";
}
//...........................................................................................................................................

function opendocument(){
    if(docdiv.style.display != 'none'){
        docdiv.style.display = 'none';
    }
    else{
        docdiv.style.display = 'block';
        imgdiv.style.display = 'none'
        auddiv.style.display = 'none';
        viddiv.style.display = 'none';
        reddiv.style.display = 'none';
    }
   
}
function openimg(){
    if(imgdiv.style.display != 'none'){
        imgdiv.style.display = 'none';
    }
    else{
        imgdiv.style.display = 'block'
        docdiv.style.display = 'none';
        auddiv.style.display = 'none';
        viddiv.style.display = 'none';
        reddiv.style.display = 'none';
        greendiv.style.display = 'none';
        bluediv.style.display = 'none';
    }
   
}
function openaudio(){
    if(auddiv.style.display != 'none'){
        auddiv.style.display = 'none';
    }
    else{
        auddiv.style.display = 'block';
        imgdiv.style.display = 'none'
        viddiv.style.display = 'none';
        docdiv.style.display = 'none';
        reddiv.style.display = 'none';
        greendiv.style.display = 'none';
        bluediv.style.display = 'none';

    }
    
}
function openvideo(){
    if(viddiv.style.display != 'none'){
        viddiv.style.display = 'none';
    }
    else{
        viddiv.style.display = 'block';
        imgdiv.style.display = 'none'
        auddiv.style.display = 'none';
        docdiv.style.display = 'none';
        reddiv.style.display = 'none';
        greendiv.style.display = 'none';
        bluediv.style.display = 'none';
        
    }
    
    
}
function openred(){
    if(reddiv.style.display != 'none'){
        reddiv.style.display = 'none';
    }
    else{
        reddiv.style.display = 'block';
        greendiv.style.display = 'none';
        bluediv.style.display = 'none'; 
        viddiv.style.display = 'none';
        imgdiv.style.display = 'none'
        auddiv.style.display = 'none';
        docdiv.style.display = 'none';
        
    }
    
    
}
function openblue(){
    if(bluediv.style.display != 'none'){
        bluediv.style.display = 'none';
    }
    else{
        reddiv.style.display = 'none' 
        viddiv.style.display = 'none';
        imgdiv.style.display = 'none'
        auddiv.style.display = 'none';
        docdiv.style.display = 'none';
        greendiv.style.display = 'none';
        bluediv.style.display = 'block';
        
    }
    
    
}
function opengreen(){
    if(greendiv.style.display != 'none'){
        greendiv.style.display = 'none';
    }
    else{
        greendiv.style.display = 'block';
        bluediv.style.display = 'none';
        reddiv.style.display = 'none' 
        viddiv.style.display = 'none';
        imgdiv.style.display = 'none'
        auddiv.style.display = 'none';
        docdiv.style.display = 'none';
        
    }
    
    
}


//.......................................................................................................................
function Tred(){
   titlebar_setting.style.background = 'red';
   start.style.background = 'red';
   titlebar_browser.style.background = 'red';
   titlebar_musiclibrary.style.background = 'red';
   titlebar_mystore.style.background = 'red';

}
function Tgreen(){
    titlebar_setting.style.background = 'green';
    start.style.background = 'green';
    titlebar_browser.style.background = 'green';
    titlebar_musiclibrary.style.background = 'green';
    titlebar_mystore.style.background = 'green';
    

 }
 function Tblue(){
    titlebar_setting.style.background = 'rgb(0, 78, 146)';
    start.style.background = 'rgb(0, 78, 146)';
    titlebar_browser.style.background = 'rgb(0, 78, 146)';
    titlebar_musiclibrary.style.background = 'rgb(0, 78, 146)';
    titlebar_mystore.style.background = 'rgb(0, 78, 146)';

 }
 function Tpurple(){
    titlebar_setting.style.background = 'purple';
    start.style.background = 'purple';
    titlebar_browser.style.background = 'purple';
    titlebar_musiclibrary.style.background = 'purple';
    titlebar_mystore.style.background = 'purple';

 }
 function Twhite(){
    titlebar_setting.style.background = 'white';
    start.style.background = 'white';
    titlebar_browser.style.background = 'white';
    titlebar_musiclibrary.style.background = 'white';
    titlebar_mystore.style.background = 'white';

 }
 function Tdark(){
    titlebar_setting.style.background = 'rgb(21,21,21)';
    start.style.background = 'rgb(21,21,21)';
    titlebar_browser.style.background = 'rgb(21,21,21)';
    titlebar_musiclibrary.style.background = 'rgb(21,21,21)';
    titlebar_mystore.style.background = 'rgb(21,21,21)';

 }
 
