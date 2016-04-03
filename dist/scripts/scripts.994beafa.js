"use strict";angular.module("triplogApp",["datamaps"]),angular.module("triplogApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"];var b=[{code:"SGP",name:"SINGAPORE",visited:"28-03-2016",days:1,tags:["COUNTRIES","ASIA"]},{code:"VNM",name:"VIETNAM",visited:"27-03-2016",days:7,tags:["COUNTRIES","ASIA","BICYCLE"]},{code:"SGP",name:"SINGAPORE",visited:"20-03-2016",days:1,tags:["COUNTRIES","ASIA"]},{code:"TWN",name:"TAIWAN",visited:"11-01-2016",days:3,tags:["ASIA","COUNTRIES"]},{code:"JPN",name:"JAPAN",visited:"08-01-2016",days:10,tags:["COUNTRIES","ASIA","DRIVEN"]},{code:"MYS",name:"MALAYSIA",visited:"29-12-2015",days:1,tags:["ASIA","COUNTRIES"]},{code:"AUS",name:"AUSTRALIA",visited:"28-12-2015",days:3,tags:["OCEANIA","COUNTRIES","DRIVEN","BICYCLE"]},{code:"CHL",name:"CHILE",visited:"14-09-2015",days:7,tags:["COUNTRIES","SOUTH AMERICA"]},{code:"BOL",name:"BOLIVIA",visited:"08-09-2015",days:7,tags:["COUNTRIES","SOUTH AMERICA"]},{code:"PER",name:"PERU",visited:"03-09-2015",days:4,tags:["COUNTRIES","SOUTH AMERICA"]},{code:"AUS",name:"AUSTRALIA",visited:"03-08-2015",days:6,tags:["OCEANIA","COUNTRIES","DRIVEN","BICYCLE"]},{code:"NPL",name:"NEPAL",visited:"06-04-2015",days:8,tags:["COUNTRIES","ASIA"]},{code:"SGP",name:"SINGAPORE",visited:"29-03-2015",days:1,tags:["COUNTRIES","ASIA"]},{code:"AUS",name:"AUSTRALIA",visited:"08-03-2015",days:2,tags:["OCEANIA","COUNTRIES","DRIVEN","BICYCLE"]},{code:"IDN",name:"INDONESIA",visited:"13-01-2015",days:4,tags:["ASIA","COUNTRIES"]},{code:"MYS",name:"MALAYSIA",visited:"10-01-2015",days:1,tags:["ASIA","COUNTRIES"]},{code:"THA",name:"THAILAND",visited:"09-01-2015",days:8,tags:["COUNTRIES","ASIA","DRIVEN"]},{code:"PHL",name:"PHILIPPINES",visited:"01-01-2015",days:6,tags:["COUNTRIES","ASIA"]},{code:"MYS",name:"MALAYSIA",visited:"27-12-2014",days:1,tags:["ASIA","COUNTRIES"]},{code:"AUS",name:"AUSTRALIA",visited:"08-12-2014",days:3,tags:["OCEANIA","COUNTRIES","DRIVEN","BICYCLE"]},{code:"AUS",name:"AUSTRALIA",visited:"19-08-2014",days:4,tags:["OCEANIA","COUNTRIES","DRIVEN","BICYCLE"]},{code:"NZL",name:"NEW ZEALAND",visited:"10-06-2014",days:4,tags:["COUNTRIES","OCEANIA","DRIVEN"]},{code:"AUS",name:"AUSTRALIA",visited:"26-05-2014",days:2,tags:["OCEANIA","COUNTRIES","DRIVEN","BICYCLE"]},{code:"IND",name:"INDIA",visited:"27-04-2014",days:8,tags:["COUNTRIES","ASIA"]},{code:"AUS",name:"AUSTRALIA",visited:"24-03-2014",days:3,tags:["OCEANIA","COUNTRIES","DRIVEN","BICYCLE"]},{code:"AUS",name:"AUSTRALIA",visited:"21-02-2014",days:4,tags:["OCEANIA","COUNTRIES","DRIVEN","BICYCLE"]},{code:"AUS",name:"AUSTRALIA",visited:"20-01-2014",days:4,tags:["OCEANIA","COUNTRIES","DRIVEN","BICYCLE"]},{code:"MYS",name:"MALAYSIA",visited:"16-01-2014",days:6,tags:["ASIA","COUNTRIES"]},{code:"CHN",name:"MACAU",visited:"08-01-2014",days:1,tags:["ASIA","COUNTRIES"]},{code:"HKG",name:"HONG KONG",visited:"08-01-2014",days:3,tags:["ASIA","COUNTRIES"]},{code:"SGP",name:"SINGAPORE",visited:"03-01-2014",days:2,tags:["COUNTRIES","ASIA"]},{code:"AUS",name:"AUSTRALIA",visited:"16-12-2013",days:7,tags:["OCEANIA","COUNTRIES","DRIVEN","BICYCLE"]},{code:"NZL",name:"NEW ZEALAND",visited:"02-12-2013",days:7,tags:["COUNTRIES","OCEANIA","DRIVEN"]},{code:"SGP",name:"SINGAPORE",visited:"22-11-2013",days:1,tags:["COUNTRIES","ASIA"]},{code:"THA",name:"THAILAND",visited:"21-11-2013",days:6,tags:["COUNTRIES","ASIA","DRIVEN"]},{code:"KHM",name:"CAMBODIA",visited:"15-11-2013",days:3,tags:["COUNTRIES","ASIA"]},{code:"THA",name:"THAILAND",visited:"12-11-2013",days:2,tags:["COUNTRIES","ASIA","DRIVEN"]},{code:"MMR",name:"MYANMAR",visited:"10-11-2013",days:7,tags:["COUNTRIES","ASIA","BICYCLE"]},{code:"SGP",name:"SINGAPORE",visited:"04-11-2013",days:2,tags:["COUNTRIES","ASIA"]},{code:"GBR",name:"ENGLAND",visited:"01-11-2013",days:1,tags:["COUNTRIES","EUROPE","UNITED KINGDOM","DRIVEN","BICYCLE"]},{code:"ESP",name:"SPAIN",visited:"31-10-2013",days:4,tags:["EUROPE","COUNTRIES"]},{code:"HRV",name:"CROATIA",visited:"27-10-2013",days:5,tags:["COUNTRIES","EUROPE","EASTERN EUROPE"]},{code:"MNE",name:"MONTENERGRO",visited:"26-10-2013",days:3,tags:["COUNTRIES","EASTERN EUROPE","EUROPE"]},{code:"BIH",name:"BOSNIA AND HERZEGOVINA",visited:"21-10-2013",days:1,tags:["COUNTRIES","EASTERN EUROPE","EUROPE"]},{code:"GBR",name:"ENGLAND",visited:"18-10-2013",days:1,tags:["COUNTRIES","EUROPE","UNITED KINGDOM","DRIVEN","BICYCLE"]},{code:"DEU",name:"GERMANY",visited:"14-10-2013",days:3,tags:["EUROPE","COUNTRIES","TOUR","DRIVEN"]},{code:"PRT",name:"PORTUGAL",visited:"06-10-2013",days:3,tags:["EUROPE","COUNTRIES","DRIVEN"]},{code:"GBR",name:"WALES",visited:"29-09-2013",days:3,tags:["UNITED KINGDOM","COUNTRIES","EUROPE","DRIVEN"]},{code:"HRV",name:"CROATIA",visited:"17-09-2013",days:4,tags:["COUNTRIES","EUROPE","EASTERN EUROPE"]},{code:"GBR",name:"ENGLAND",visited:"01-09-2013",days:3,tags:["COUNTRIES","EUROPE","UNITED KINGDOM","DRIVEN","BICYCLE"]},{code:"FRA",name:"FRANCE",visited:"14-07-2013",days:3,tags:["EUROPE","COUNTRIES"]},{code:"GBR",name:"ENGLAND",visited:"07-07-2013",days:2,tags:["COUNTRIES","EUROPE","UNITED KINGDOM","DRIVEN","BICYCLE"]},{code:"ESP",name:"SPAIN",visited:"23-06-2013",days:3,tags:["EUROPE","COUNTRIES"]},{code:"GBR",name:"WALES",visited:"16-06-2013",days:2,tags:["UNITED KINGDOM","COUNTRIES","EUROPE","DRIVEN"]},{code:"GBR",name:"NORTHERN IRELAND",visited:"09-06-2013",days:1,tags:["UNITED KINGDOM","COUNTRIES","EUROPE","DRIVEN"]},{code:"ESP",name:"SPAIN",visited:"06-06-2013",days:5,tags:["EUROPE","COUNTRIES"]},{code:"IRL",name:"IRELAND",visited:"26-05-2013",days:2,tags:["EUROPE","COUNTRIES","DRIVEN","BICYCLE"]},{code:"BEL",name:"BELGIUM",visited:"19-05-2013",days:2,tags:["EUROPE","COUNTRIES"]},{code:"IRL",name:"IRELAND",visited:"05-05-2013",days:4,tags:["EUROPE","COUNTRIES","DRIVEN","BICYCLE"]},{code:"GBR",name:"ENGLAND",visited:"28-04-2013",days:2,tags:["COUNTRIES","EUROPE","UNITED KINGDOM","DRIVEN","BICYCLE"]},{code:"FRA",name:"FRANCE",visited:"14-04-2013",days:2,tags:["EUROPE","COUNTRIES"]},{code:"USA",name:"USA",visited:"02-04-2013",days:15,tags:["NORTH AMERICA","COUNTRIES","BICYCLE"]},{code:"ITA",name:"ITALY",visited:"11-02-2013",days:3,tags:["COUNTRIES","EUROPE","TOUR"]},{code:"GBR",name:"ENGLAND",visited:"01-01-2013",days:2,tags:["COUNTRIES","EUROPE","UNITED KINGDOM","DRIVEN","BICYCLE"]},{code:"TUR",name:"TURKEY",visited:"30-12-2012",days:9,tags:["MIDDLE EAST","EUROPE","COUNTRIES"]},{code:"AUT",name:"AUSTRIA",visited:"17-12-2012",days:3,tags:["COUNTRIES","EUROPE","TOUR"]},{code:"GBR",name:"ENGLAND",visited:"02-12-2012",days:2,tags:["COUNTRIES","EUROPE","UNITED KINGDOM","DRIVEN","BICYCLE"]},{code:"ITA",name:"ITALY",visited:"21-10-2012",days:2,tags:["COUNTRIES","EUROPE","TOUR"]},{code:"IRL",name:"IRELAND",visited:"17-09-2012",days:2,tags:["EUROPE","COUNTRIES","DRIVEN","BICYCLE"]},{code:"NOR",name:"NORWAY",visited:"15-08-2012",days:5,tags:["EUROPE","SCANDINAVIA","COUNTRIES"]},{code:"SWE",name:"SWEEDEN",visited:"06-08-2012",days:3,tags:["EUROPE","SCANDINAVIA","COUNTRIES"]},{code:"NOR",name:"NORWAY",visited:"24-07-2012",days:4,tags:["EUROPE","SCANDINAVIA","COUNTRIES"]},{code:"AUS",name:"AUSTRALIA",visited:"17-06-2012",days:12,tags:["OCEANIA","COUNTRIES","DRIVEN","BICYCLE"]},{code:"TWN",name:"TAIWAN",visited:"06-06-2012",days:5,tags:["ASIA","COUNTRIES"]},{code:"MLT",name:"MALTA",visited:"07-05-2012",days:3,tags:["EUROPE","COUNTRIES"]},{code:"CYP",name:"CYPRUS",visited:"24-04-2012",days:5,tags:["EUROPE","COUNTRIES","DRIVEN"]},{code:"FRA",name:"FRANCE",visited:"09-04-2012",days:4,tags:["EUROPE","COUNTRIES"]},{code:"RUS",name:"RUSSIA",visited:"06-04-2012",days:7,tags:["EUROPE","EASTERN EUROPE","COUNTRIES"]},{code:"HUN",name:"BUDAPEST",visited:"11-03-2012",days:3,tags:["EASTERN EUROPE","EUROPE","COUNTRIES"]},{code:"ISL",name:"ICELAND",visited:"26-02-2012",days:8,tags:["SCANDINAVIA","EUROPE","COUNTRIES"]},{code:"FRA",name:"FRANCE",visited:"22-01-2012",days:2,tags:["EUROPE","COUNTRIES"]},{code:"SVN",name:"SLOVENIA",visited:"15-01-2012",days:3,tags:["EUROPE","EASTERN EUROPE","COUNTRIES"]},{code:"JOR",name:"JORDAN",visited:"28-12-2011",days:6,tags:["AFRICA","MIDDLE EAST","COUNTRIES"]},{code:"DNK",name:"DENMARK",visited:"04-12-2011",days:2,tags:["SCANDINAVIA","EUROPE","COUNTRIES"]},{code:"POL",name:"POLAND",visited:"28-11-2011",days:3,tags:["EUROPE","EASTERN EUROPE","COUNTRIES"]},{code:"USA",name:"USA",visited:"20-11-2011",days:9,tags:["NORTH AMERICA","COUNTRIES","BICYCLE"]},{code:"GBR",name:"ENGLAND",visited:"06-11-2011",days:2,tags:["COUNTRIES","EUROPE","UNITED KINGDOM","DRIVEN","BICYCLE"]},{code:"EST",name:"ESTONIA",visited:"09-10-2011",days:2,tags:["EUROPE","EASTERN EUROPE","COUNTRIES"]},{code:"IRL",name:"IRELAND",visited:"26-09-2011",days:3,tags:["EUROPE","COUNTRIES","DRIVEN","BICYCLE"]},{code:"GBR",name:"ENGLAND",visited:"29-08-2011",days:3,tags:["COUNTRIES","EUROPE","UNITED KINGDOM","DRIVEN","BICYCLE"]},{code:"BEL",name:"BELGIUM",visited:"01-07-2011",days:4,tags:["EUROPE","COUNTRIES"]},{code:"ESP",name:"SPAIN",visited:"13-06-2011",days:3,tags:["EUROPE","COUNTRIES"]},{code:"ITA",name:"ITALY",visited:"07-06-2011",days:4,tags:["COUNTRIES","EUROPE","TOUR"]},{code:"VAT",name:"VATICAN CITY",visited:"06-06-2011",days:1,tags:["COUNTRIES","EUROPE"]},{code:"FRA",name:"FRANCE",visited:"30-05-2011",days:3,tags:["EUROPE","COUNTRIES"]},{code:"HKG",name:"HONG KONG",visited:"01-05-2011",days:3,tags:["ASIA","COUNTRIES"]},{code:"AUS",name:"AUSTRALIA",visited:"25-04-2011",days:3,tags:["OCEANIA","COUNTRIES","DRIVEN","BICYCLE"]},{code:"AUS",name:"AUSTRALIA",visited:"15-04-2011",days:5,tags:["OCEANIA","COUNTRIES","DRIVEN","BICYCLE"]},{code:"ITA",name:"ITALY",visited:"14-03-2011",days:4,tags:["COUNTRIES","EUROPE","TOUR"]},{code:"FRA",name:"FRANCE",visited:"13-02-2011",days:2,tags:["EUROPE","COUNTRIES"]},{code:"PRT",name:"PORTUGAL",visited:"24-01-2011",days:3,tags:["EUROPE","COUNTRIES","DRIVEN"]},{code:"MAR",name:"MOROCCO",visited:"19-01-2011",days:4,tags:["AFRICA","COUNTRIES"]},{code:"DEU",name:"GERMANY",visited:"19-12-2010",days:2,tags:["EUROPE","COUNTRIES","TOUR","DRIVEN"]},{code:"BEL",name:"BELGIUM",visited:"12-11-2010",days:2,tags:["EUROPE","COUNTRIES"]},{code:"GBR",name:"NORTHERN IRELAND",visited:"31-10-2010",days:2,tags:["UNITED KINGDOM","COUNTRIES","EUROPE","DRIVEN"]},{code:"FRA",name:"FRANCE",visited:"17-10-2010",days:2,tags:["EUROPE","COUNTRIES"]},{code:"KOR",name:"SOUTH KOREA",visited:"10-10-2010",days:2,tags:["ASIA","COUNTRIES"]},{code:"DEU",name:"GERMANY",visited:"19-09-2010",days:2,tags:["EUROPE","COUNTRIES","TOUR","DRIVEN"]},{code:"GBR",name:"SCOTLAND",visited:"30-08-2010",days:3,tags:["UNITED KINGDOM","COUNTRIES","EUROPE"]},{code:"GBR",name:"ENGLAND",visited:"12-07-2010",days:1,tags:["COUNTRIES","EUROPE","UNITED KINGDOM","DRIVEN","BICYCLE"]},{code:"GBR",name:"ENGLAND",visited:"28-06-2010",days:4,tags:["COUNTRIES","EUROPE","UNITED KINGDOM","DRIVEN","BICYCLE"]},{code:"ITA",name:"ITALY",visited:"13-06-2010",days:2,tags:["COUNTRIES","EUROPE","TOUR"]},{code:"GBR",name:"ENGLAND",visited:"31-05-2010",days:3,tags:["COUNTRIES","EUROPE","UNITED KINGDOM","DRIVEN","BICYCLE"]},{code:"FRA",name:"FRANCE",visited:"25-05-2010",days:4,tags:["EUROPE","COUNTRIES"]},{code:"ITA",name:"ITALY",visited:"10-05-2010",days:3,tags:["COUNTRIES","EUROPE","TOUR"]},{code:"ESP",name:"SPAIN",visited:"03-05-2010",days:3,tags:["EUROPE","COUNTRIES"]},{code:"GBR",name:"SCOTLAND",visited:"05-04-2010",days:4,tags:["UNITED KINGDOM","COUNTRIES","EUROPE"]},{code:"SWE",name:"SWEEDEN",visited:"15-03-2010",days:2,tags:["EUROPE","SCANDINAVIA","COUNTRIES"]},{code:"FRA",name:"FRANCE",visited:"22-02-2010",days:2,tags:["EUROPE","COUNTRIES"]},{code:"GRC",name:"GREECE",visited:"17-02-2010",days:6,tags:["EUROPE","COUNTRIES"]},{code:"DEU",name:"GERMANY",visited:"11-01-2010",days:3,tags:["EUROPE","COUNTRIES","TOUR","DRIVEN"]},{code:"EGY",name:"EGYPT",visited:"09-12-2009",days:10,tags:["AFRICA","MIDDLE EAST","COUNTRIES"]},{code:"GBR",name:"ENGLAND",visited:"15-11-2009",days:3,tags:["COUNTRIES","EUROPE","UNITED KINGDOM","DRIVEN","BICYCLE"]},{code:"IRL",name:"IRELAND",visited:"08-11-2009",days:2,tags:["EUROPE","COUNTRIES","DRIVEN","BICYCLE"]},{code:"NOR",name:"NORWAY",visited:"18-10-2009",days:2,tags:["EUROPE","SCANDINAVIA","COUNTRIES"]},{code:"ESP",name:"SPAIN",visited:"28-09-2009",days:4,tags:["EUROPE","COUNTRIES"]},{code:"CHN",name:"CHINA",visited:"24-09-2009",days:9,tags:["ASIA","COUNTRIES"]},{code:"MYS",name:"MALAYSIA",visited:"09-09-2009",days:2,tags:["ASIA","COUNTRIES"]},{code:"AUS",name:"AUSTRALIA",visited:"24-08-2009",days:4,tags:["OCEANIA","COUNTRIES","DRIVEN","BICYCLE"]},{code:"AUS",name:"AUSTRALIA",visited:"30-06-2009",days:4,tags:["OCEANIA","COUNTRIES","DRIVEN","BICYCLE"]},{code:"NLD",name:"NETHERLANDS",visited:"29-05-2009",days:2,tags:["EUROPE","COUNTRIES"]},{code:"CZE",name:"CZECH REPUBLIC",visited:"26-05-2009",days:2,tags:["EUROPE","COUNTRIES","TOUR"]},{code:"DEU",name:"GERMANY",visited:"24-05-2009",days:2,tags:["EUROPE","COUNTRIES","TOUR","DRIVEN"]},{code:"AUT",name:"AUSTRIA",visited:"24-05-2009",days:2,tags:["COUNTRIES","EUROPE","TOUR"]},{code:"ITA",name:"ITALY",visited:"21-05-2009",days:6,tags:["COUNTRIES","EUROPE","TOUR"]},{code:"VAT",name:"VATICAN CITY",visited:"18-05-2009",days:1,tags:["COUNTRIES","EUROPE"]},{code:"FRA",name:"FRANCE",visited:"14-05-2009",days:1,tags:["EUROPE","COUNTRIES"]},{code:"MCO",name:"MONACO",visited:"13-05-2009",days:1,tags:["COUNTRIES","EUROPE"]},{code:"FRA",name:"FRANCE",visited:"11-05-2009",days:3,tags:["EUROPE","COUNTRIES"]},{code:"GBR",name:"ENGLAND",visited:"08-05-2009",days:5,tags:["COUNTRIES","EUROPE","UNITED KINGDOM","DRIVEN","BICYCLE"]},{code:"JPN",name:"JAPAN",visited:"23-07-2008",days:10,tags:["COUNTRIES","ASIA","DRIVEN"]},{code:"VNM",name:"VIETNAM",visited:"31-01-2007",days:24,tags:["COUNTRIES","ASIA","BICYCLE"]},{code:"USA",name:"USA",visited:"05-07-2006",days:11,tags:["NORTH AMERICA","COUNTRIES","BICYCLE"]},{code:"USA",name:"USA",visited:"31-08-2005",days:14,tags:["NORTH AMERICA","COUNTRIES","BICYCLE"]}],c=0,d=0,e=0,f={};b.forEach(function(a){var b=f[a.code]||{};f[a.code]={code:a.code,name:a.name,totalVisits:1+(b.totalVisits||0),totalDays:a.days+(b.days||0)},e+=1,d+=a.days});var g=[];for(var h in f)g.push(f[h]),c+=1;var i={},j=g.map(function(a){return a.totalVisits}),k=Math.min.apply(null,j),l=Math.max.apply(null,j)-k+1,m=function(a){return"level"+Math.floor((a-k)/l*5)};g.forEach(function(a){var b=a.code,c=a.totalVisits;i[b]={fillKey:m(c)}}),a.totalCountries=c,a.totalDays=d,a.totalVisits=e,a.mapObject={scope:"world",options:{width:900},geographyConfig:{highlighBorderColor:"#EAA9A8",highlighBorderWidth:2,popupTemplate:function(a,b){return'<div class="hoverinfo"><strong>Hello'+a+b+"</strong></div>"}},fills:{defaultFill:"#C3C4B6",level0:"#859DBF",level1:"#51759F",level2:"#36608F",level3:"#1C4C7F",level4:"#02386F"},data:i}}]);