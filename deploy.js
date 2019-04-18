var exeCute = require('exe');
const dotenv = require('dotenv');
dotenv.config();

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
    "envdir": "C:\\GitHub\\akumina-redux-widget\\build\\",
    "assetdirectory": "MyClient",
    "spdirectory": "DigitalWorkplace",
    "spurl": process.env.SP_URL_DEV,
    "spuser": process.env.SP_USER_DEV,
    "sppassword": process.env.SP_PASS_DEV
};

//use extra parameters if deploying different language widgets
//extra parameter -  langid 1033
//extra paramater -  langcode en-US

exeCute('.\\tools\\Akumina.SiteDeployer.exe options ' + args.options + ' envdir ' + args.envdir + ' assetdirectory ' + args.assetdirectory + ' spdirectory ' + args.spdirectory + ' spurl ' + args.spurl + ' spuser ' + args.spuser + ' sppassword ' + args.sppassword);
