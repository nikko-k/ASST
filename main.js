#!/usr/bin/env node
const timestampBeforeScanStarted = Date.now() / 1000 | 0;
process.stdout.write('\033c'); // Clear screen

// Imports
const config = require("./config.js");
const yargs = require("yargs/yargs");
const { hideBin } = require('yargs/helpers');

const argv = yargs(hideBin(process.argv)).argv

var start = "";

// Global Variables
// none for now

config.DEFAULT_PROJECT_PATH_TO_SCAN = argv.path || argv.p || config.DEFAULT_PROJECT_PATH_TO_SCAN;
config.HTML_REPORT_FILE_NAME_AND_PATH = argv.report || argv.r || config.HTML_REPORT_FILE_NAME_AND_PATH;

// Main
if(config.USED_PROGRAMMING_LANGUAGE.toLowerCase() == "php"){
	start = require("./langs/php");
}
else if(config.USED_PROGRAMMING_LANGUAGE.toLowerCase() == "c#"){
	start = require("./langs/c#");
}
else {
	console.log();
	consol.log("Invalid chosen programming language, exiting..");
	process.exit();
}

if(start != ""){
	new start();
	
	const totalScanTime = (Date.now() / 1000 | 0) - timestampBeforeScanStarted;
	console.log("Total scan time: " + totalScanTime + " Seconds");
	console.log();
}

