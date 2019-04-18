var exeCute = require('exe');


var options = [];


options.push("layouts");
options.push("pages");
options.push("controls");
options.push("widgets");



//options.push("masterpage");
//options.push("js");
//options.push("css");
//options.push("lists");
//options.push("layouts");
//options.push("contentfiles");
//options.push("imagefiles");
//options.push("updatelists");
//options.push("homepage");
//options.push("fonts");


var args = {
    "options": options.toString(),
    "envdir": "C:\\GitHub\\AkuminaDev\\akumina-redux-widget\\build\\",
    "assetdirectory": "MyClient",
    "spdirectory": "DigitalWorkplace",
    "spurl": spUrlDev,
    "spuser": spUserDev,
    "sppassword": spPassDev
};

//use extra parameters if deploying different language widgets
//extra parameter -  langid 1033
//extra paramater -  langcode en-US

exeCute('.\\tools\\Akumina.SiteDeployer.exe options ' + args.options + ' envdir ' + args.envdir + ' assetdirectory ' + args.assetdirectory + ' spdirectory ' + args.spdirectory + ' spurl ' + args.spurl + ' spuser ' + args.spuser + ' sppassword ' + args.sppassword);
