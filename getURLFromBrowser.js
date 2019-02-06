var theEnvName; var theFullText;
var envFull = window.location.href;
alert('the full url : ' + envFull);
var path = new URL(window.location.href).pathname;
alert('current application path : ' + path);
if ((envFull.charAt(0) === 'h') && (envFull.charAt(1) === 't') && (envFull.charAt(2) === 't') && (envFull.charAt(3) === 'p') && (envFull.charAt(4) === 's')) { envFull = envFull.slice(8); var splitEnv = envFull.split('/')[0]; theEnvName = splitEnv.replace(".prod", ""); theEnvName = splitEnv.replace(".healthaxis.net", ""); }
if ((envFull.charAt(0) === 'h') && (envFull.charAt(1) === 't') && (envFull.charAt(2) === 't') && (envFull.charAt(3) === 'p')) { envFull = envFull.slice(7); var splitEnv = envFull.split('/')[0]; theEnvName = splitEnv.replace(".prod", ""); theEnvName = splitEnv.replace(".healthaxis.net", ""); }
theFullText = theEnvName; var splitPath = path.split("/"); splitPath.forEach(function (element) { if (element.length != 0) { theFullText = theFullText + " - " + element; } });
alert('removed http:// or https:// removed .prod and .healthaxis.net. Took the path and split it from the / and replaced that with -');
alert('the final text that will be displayed is');
alert(theFullText );
