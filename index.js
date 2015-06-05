
var _ = require('lodash');
var fs = require('fs');
var path = require('path');

var detailsReports = 'reports\\AM\\detailreport';
var summaryReports = 'reports\\AM\\summaryreport';
var reportCard = 'reports\\AM\\reportCard';

var detReportFileList = fs.readdirSync(detailsReports);
var summaryReportsFileList = fs.readdirSync(summaryReports);
var reportCardFileList = fs.readdirSync(reportCard);


var files = detReportFileList.concat(summaryReportsFileList).concat(reportCardFileList);

//console.log(files);


//console.log(detReportFileList);
//console.log(summaryReportsFileList);
//console.log(reportCardFileList);


var date = {
    "detailReport" : null,
    "reportCard" : null,
    "summaryReport" : null
};

var dateV2 = {};

var list = [];

//date.detailReport = detReportFileList;
//date.reportCard = reportCardFileList;
//date.summaryReport = summaryReportsFileList;


_.each(files , function (f) {
    //console.log(f);
    var dateVal = f.substring(0,10);
    var reportType = path.basename(f.substring(14),'.html');
    //console.log(reportType);
    //dateV2[reportType] = f;
    list.[dateVal].push[reportType] = f;

});




//list['date'] = date;

//dateV2.date.detailReport = "detailreport";

console.log(list);
console.log(dateV2);


