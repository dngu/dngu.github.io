'use strict';

/**
 * @ngdoc function
 * @name triplogApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the triplogApp
 */
angular.module('triplogApp')
  .controller('MainCtrl', function ($scope, moment, $timeout) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var visitedData = [
    	{
	        code: 'USA',
	        name: 'USA',
	        visited: '31-08-2005',
	        days: 14,
	        tags: ['NORTH AMERICA', 'COUNTRIES', 'BICYCLE']
	    }, {
	        code: 'USA',
	        name: 'USA',
	        visited: '05-07-2006',
	        days: 11,
	        tags: ['NORTH AMERICA', 'COUNTRIES', 'BICYCLE']
	    }, {
	        code: 'VNM',
	        name: 'VIETNAM',
	        visited: '31-01-2007',
	        days: 24,
	        tags: ['COUNTRIES', 'ASIA', 'BICYCLE']
	    }, {
	        code: 'JPN',
	        name: 'JAPAN',
	        visited: '23-07-2008',
	        days: 10,
	        tags: ['COUNTRIES', 'ASIA', 'DRIVEN']
	    }, {
	        code: 'GBR',
	        name: 'ENGLAND',
	        visited: '08-05-2009',
	        days: 5,
	        tags: ['COUNTRIES', 'EUROPE', 'UNITED KINGDOM', 'DRIVEN', 'BICYCLE']
	    }, {
	        code: 'FRA',
	        name: 'FRANCE',
	        visited: '11-05-2009',
	        days: 3,
	        tags: ['EUROPE', 'COUNTRIES']
	    }, {
	        code: 'MCO',
	        name: 'MONACO',
	        visited: '13-05-2009',
	        days: 1,
	        tags: ['COUNTRIES', 'EUROPE']
	    }, {
	        code: 'FRA',
	        name: 'FRANCE',
	        visited: '14-05-2009',
	        days: 1,
	        tags: ['EUROPE', 'COUNTRIES']
	    }, {
	        code: 'VAT',
	        name: 'VATICAN CITY',
	        visited: '18-05-2009',
	        days: 1,
	        tags: ['COUNTRIES', 'EUROPE']
	    }, {
	        code: 'ITA',
	        name: 'ITALY',
	        visited: '21-05-2009',
	        days: 6,
	        tags: ['COUNTRIES', 'EUROPE', 'TOUR']
	    }, {
	        code: 'AUT',
	        name: 'AUSTRIA',
	        visited: '24-05-2009',
	        days: 2,
	        tags: ['COUNTRIES', 'EUROPE', 'TOUR']
	    }, {
	        code: 'DEU',
	        name: 'GERMANY',
	        visited: '24-05-2009',
	        days: 2,
	        tags: ['EUROPE', 'COUNTRIES', 'TOUR', 'DRIVEN']
	    }, {
	        code: 'CZE',
	        name: 'CZECH REPUBLIC',
	        visited: '26-05-2009',
	        days: 2,
	        tags: ['EUROPE', 'COUNTRIES', 'TOUR']
	    }, {
	        code: 'NLD',
	        name: 'NETHERLANDS',
	        visited: '29-05-2009',
	        days: 2,
	        tags: ['EUROPE', 'COUNTRIES']
	    }, {
	        code: 'AUS',
	        name: 'AUSTRALIA',
	        visited: '30-06-2009',
	        days: 4,
	        tags: ['OCEANIA', 'COUNTRIES', 'DRIVEN', 'BICYCLE']
	    }, {
	        code: 'AUS',
	        name: 'AUSTRALIA',
	        visited: '24-08-2009',
	        days: 4,
	        tags: ['OCEANIA', 'COUNTRIES', 'DRIVEN', 'BICYCLE']
	    }, {
	        code: 'MYS',
	        name: 'MALAYSIA',
	        visited: '09-09-2009',
	        days: 2,
	        tags: ['ASIA', 'COUNTRIES']
	    }, {
	        code: 'CHN',
	        name: 'CHINA',
	        visited: '24-09-2009',
	        days: 9,
	        tags: ['ASIA', 'COUNTRIES']
	    }, {
	        code: 'ESP',
	        name: 'SPAIN',
	        visited: '28-09-2009',
	        days: 4,
	        tags: ['EUROPE', 'COUNTRIES']
	    }, {
	        code: 'NOR',
	        name: 'NORWAY',
	        visited: '18-10-2009',
	        days: 2,
	        tags: ['EUROPE', 'SCANDINAVIA', 'COUNTRIES']
	    }, {
	        code: 'IRL',
	        name: 'IRELAND',
	        visited: '08-11-2009',
	        days: 2,
	        tags: ['EUROPE', 'COUNTRIES', 'DRIVEN', 'BICYCLE']
	    }, {
	        code: 'GBR',
	        name: 'ENGLAND',
	        visited: '15-11-2009',
	        days: 3,
	        tags: ['COUNTRIES', 'EUROPE', 'UNITED KINGDOM', 'DRIVEN', 'BICYCLE']
	    }, {
	        code: 'EGY',
	        name: 'EGYPT',
	        visited: '09-12-2009',
	        days: 10,
	        tags: ['AFRICA', 'MIDDLE EAST', 'COUNTRIES']
	    }, {
	        code: 'DEU',
	        name: 'GERMANY',
	        visited: '11-01-2010',
	        days: 3,
	        tags: ['EUROPE', 'COUNTRIES', 'TOUR', 'DRIVEN']
	    }, {
	        code: 'GRC',
	        name: 'GREECE',
	        visited: '17-02-2010',
	        days: 6,
	        tags: ['EUROPE', 'COUNTRIES']
	    }, {
	        code: 'FRA',
	        name: 'FRANCE',
	        visited: '22-02-2010',
	        days: 2,
	        tags: ['EUROPE', 'COUNTRIES']
	    }, {
	        code: 'SWE',
	        name: 'SWEEDEN',
	        visited: '15-03-2010',
	        days: 2,
	        tags: ['EUROPE', 'SCANDINAVIA', 'COUNTRIES']
	    }, {
	        code: 'GBR',
	        name: 'SCOTLAND',
	        visited: '05-04-2010',
	        days: 4,
	        tags: ['UNITED KINGDOM', 'COUNTRIES', 'EUROPE']
	    }, {
	        code: 'ESP',
	        name: 'SPAIN',
	        visited: '03-05-2010',
	        days: 3,
	        tags: ['EUROPE', 'COUNTRIES']
	    }, {
	        code: 'ITA',
	        name: 'ITALY',
	        visited: '10-05-2010',
	        days: 3,
	        tags: ['COUNTRIES', 'EUROPE', 'TOUR']
	    }, {
	        code: 'FRA',
	        name: 'FRANCE',
	        visited: '25-05-2010',
	        days: 4,
	        tags: ['EUROPE', 'COUNTRIES']
	    }, {
	        code: 'GBR',
	        name: 'ENGLAND',
	        visited: '31-05-2010',
	        days: 3,
	        tags: ['COUNTRIES', 'EUROPE', 'UNITED KINGDOM', 'DRIVEN', 'BICYCLE']
	    }, {
	        code: 'ITA',
	        name: 'ITALY',
	        visited: '13-06-2010',
	        days: 2,
	        tags: ['COUNTRIES', 'EUROPE', 'TOUR']
	    }, {
	        code: 'GBR',
	        name: 'ENGLAND',
	        visited: '28-06-2010',
	        days: 4,
	        tags: ['COUNTRIES', 'EUROPE', 'UNITED KINGDOM', 'DRIVEN', 'BICYCLE']
	    }, {
	        code: 'GBR',
	        name: 'ENGLAND',
	        visited: '12-07-2010',
	        days: 1,
	        tags: ['COUNTRIES', 'EUROPE', 'UNITED KINGDOM', 'DRIVEN', 'BICYCLE']
	    }, {
	        code: 'GBR',
	        name: 'SCOTLAND',
	        visited: '30-08-2010',
	        days: 3,
	        tags: ['UNITED KINGDOM', 'COUNTRIES', 'EUROPE']
	    }, {
	        code: 'DEU',
	        name: 'GERMANY',
	        visited: '19-09-2010',
	        days: 2,
	        tags: ['EUROPE', 'COUNTRIES', 'TOUR', 'DRIVEN']
	    }, {
	        code: 'KOR',
	        name: 'SOUTH KOREA',
	        visited: '10-10-2010',
	        days: 2,
	        tags: ['ASIA', 'COUNTRIES']
	    }, {
	        code: 'FRA',
	        name: 'FRANCE',
	        visited: '17-10-2010',
	        days: 2,
	        tags: ['EUROPE', 'COUNTRIES']
	    }, {
	        code: 'GBR',
	        name: 'NORTHERN IRELAND',
	        visited: '31-10-2010',
	        days: 2,
	        tags: ['UNITED KINGDOM', 'COUNTRIES', 'EUROPE', 'DRIVEN']
	    }, {
	        code: 'BEL',
	        name: 'BELGIUM',
	        visited: '12-11-2010',
	        days: 2,
	        tags: ['EUROPE', 'COUNTRIES']
	    }, {
	        code: 'DEU',
	        name: 'GERMANY',
	        visited: '19-12-2010',
	        days: 2,
	        tags: ['EUROPE', 'COUNTRIES', 'TOUR', 'DRIVEN']
	    }, {
	        code: 'MAR',
	        name: 'MOROCCO',
	        visited: '19-01-2011',
	        days: 4,
	        tags: ['AFRICA', 'COUNTRIES']
	    }, {
	        code: 'PRT',
	        name: 'PORTUGAL',
	        visited: '24-01-2011',
	        days: 3,
	        tags: ['EUROPE', 'COUNTRIES', 'DRIVEN']
	    }, {
	        code: 'FRA',
	        name: 'FRANCE',
	        visited: '13-02-2011',
	        days: 2,
	        tags: ['EUROPE', 'COUNTRIES']
	    }, {
	        code: 'ITA',
	        name: 'ITALY',
	        visited: '14-03-2011',
	        days: 4,
	        tags: ['COUNTRIES', 'EUROPE', 'TOUR']
	    }, {
	        code: 'AUS',
	        name: 'AUSTRALIA',
	        visited: '15-04-2011',
	        days: 5,
	        tags: ['OCEANIA', 'COUNTRIES', 'DRIVEN', 'BICYCLE']
	    }, {
	        code: 'AUS',
	        name: 'AUSTRALIA',
	        visited: '25-04-2011',
	        days: 3,
	        tags: ['OCEANIA', 'COUNTRIES', 'DRIVEN', 'BICYCLE']
	    }, {
	        code: 'HKG',
	        name: 'HONG KONG',
	        visited: '01-05-2011',
	        days: 3,
	        tags: ['ASIA', 'COUNTRIES']
	    }, {
	        code: 'FRA',
	        name: 'FRANCE',
	        visited: '30-05-2011',
	        days: 3,
	        tags: ['EUROPE', 'COUNTRIES']
	    }, {
	        code: 'VAT',
	        name: 'VATICAN CITY',
	        visited: '06-06-2011',
	        days: 1,
	        tags: ['COUNTRIES', 'EUROPE']
	    }, {
	        code: 'ITA',
	        name: 'ITALY',
	        visited: '07-06-2011',
	        days: 4,
	        tags: ['COUNTRIES', 'EUROPE', 'TOUR']
	    }, {
	        code: 'ESP',
	        name: 'SPAIN',
	        visited: '13-06-2011',
	        days: 3,
	        tags: ['EUROPE', 'COUNTRIES']
	    }, {
	        code: 'BEL',
	        name: 'BELGIUM',
	        visited: '01-07-2011',
	        days: 4,
	        tags: ['EUROPE', 'COUNTRIES']
	    }, {
	        code: 'GBR',
	        name: 'ENGLAND',
	        visited: '29-08-2011',
	        days: 3,
	        tags: ['COUNTRIES', 'EUROPE', 'UNITED KINGDOM', 'DRIVEN', 'BICYCLE']
	    }, {
	        code: 'IRL',
	        name: 'IRELAND',
	        visited: '26-09-2011',
	        days: 3,
	        tags: ['EUROPE', 'COUNTRIES', 'DRIVEN', 'BICYCLE']
	    }, {
	        code: 'EST',
	        name: 'ESTONIA',
	        visited: '09-10-2011',
	        days: 2,
	        tags: ['EUROPE', 'EASTERN EUROPE', 'COUNTRIES']
	    }, {
	        code: 'GBR',
	        name: 'ENGLAND',
	        visited: '06-11-2011',
	        days: 2,
	        tags: ['COUNTRIES', 'EUROPE', 'UNITED KINGDOM', 'DRIVEN', 'BICYCLE']
	    }, {
	        code: 'USA',
	        name: 'USA',
	        visited: '20-11-2011',
	        days: 9,
	        tags: ['NORTH AMERICA', 'COUNTRIES', 'BICYCLE']
	    }, {
	        code: 'POL',
	        name: 'POLAND',
	        visited: '28-11-2011',
	        days: 3,
	        tags: ['EUROPE', 'EASTERN EUROPE', 'COUNTRIES']
	    }, {
	        code: 'DNK',
	        name: 'DENMARK',
	        visited: '04-12-2011',
	        days: 2,
	        tags: ['SCANDINAVIA', 'EUROPE', 'COUNTRIES']
	    }, {
	        code: 'JOR',
	        name: 'JORDAN',
	        visited: '28-12-2011',
	        days: 6,
	        tags: ['AFRICA', 'MIDDLE EAST', 'COUNTRIES']
	    }, {
	        code: 'SVN',
	        name: 'SLOVENIA',
	        visited: '15-01-2012',
	        days: 3,
	        tags: ['EUROPE', 'EASTERN EUROPE', 'COUNTRIES']
	    }, {
	        code: 'FRA',
	        name: 'FRANCE',
	        visited: '22-01-2012',
	        days: 2,
	        tags: ['EUROPE', 'COUNTRIES']
	    }, {
	        code: 'ISL',
	        name: 'ICELAND',
	        visited: '26-02-2012',
	        days: 8,
	        tags: ['SCANDINAVIA', 'EUROPE', 'COUNTRIES']
	    }, {
	        code: 'HUN',
	        name: 'BUDAPEST',
	        visited: '11-03-2012',
	        days: 3,
	        tags: ['EASTERN EUROPE', 'EUROPE', 'COUNTRIES']
	    }, {
	        code: 'RUS',
	        name: 'RUSSIA',
	        visited: '06-04-2012',
	        days: 7,
	        tags: ['EUROPE', 'EASTERN EUROPE', 'COUNTRIES']
	    }, {
	        code: 'FRA',
	        name: 'FRANCE',
	        visited: '09-04-2012',
	        days: 4,
	        tags: ['EUROPE', 'COUNTRIES']
	    }, {
	        code: 'CYP',
	        name: 'CYPRUS',
	        visited: '24-04-2012',
	        days: 5,
	        tags: ['EUROPE', 'COUNTRIES', 'DRIVEN']
	    }, {
	        code: 'MLT',
	        name: 'MALTA',
	        visited: '07-05-2012',
	        days: 3,
	        tags: ['EUROPE', 'COUNTRIES']
	    }, {
	        code: 'TWN',
	        name: 'TAIWAN',
	        visited: '06-06-2012',
	        days: 5,
	        tags: ['ASIA', 'COUNTRIES']
	    }, {
	        code: 'AUS',
	        name: 'AUSTRALIA',
	        visited: '17-06-2012',
	        days: 12,
	        tags: ['OCEANIA', 'COUNTRIES', 'DRIVEN', 'BICYCLE']
	    }, {
	        code: 'NOR',
	        name: 'NORWAY',
	        visited: '24-07-2012',
	        days: 4,
	        tags: ['EUROPE', 'SCANDINAVIA', 'COUNTRIES']
	    }, {
	        code: 'SWE',
	        name: 'SWEEDEN',
	        visited: '06-08-2012',
	        days: 3,
	        tags: ['EUROPE', 'SCANDINAVIA', 'COUNTRIES']
	    }, {
	        code: 'NOR',
	        name: 'NORWAY',
	        visited: '15-08-2012',
	        days: 5,
	        tags: ['EUROPE', 'SCANDINAVIA', 'COUNTRIES']
	    }, {
	        code: 'IRL',
	        name: 'IRELAND',
	        visited: '17-09-2012',
	        days: 2,
	        tags: ['EUROPE', 'COUNTRIES', 'DRIVEN', 'BICYCLE']
	    }, {
	        code: 'ITA',
	        name: 'ITALY',
	        visited: '21-10-2012',
	        days: 2,
	        tags: ['COUNTRIES', 'EUROPE', 'TOUR']
	    }, {
	        code: 'GBR',
	        name: 'ENGLAND',
	        visited: '02-12-2012',
	        days: 2,
	        tags: ['COUNTRIES', 'EUROPE', 'UNITED KINGDOM', 'DRIVEN', 'BICYCLE']
	    }, {
	        code: 'AUT',
	        name: 'AUSTRIA',
	        visited: '17-12-2012',
	        days: 3,
	        tags: ['COUNTRIES', 'EUROPE', 'TOUR']
	    }, {
	        code: 'TUR',
	        name: 'TURKEY',
	        visited: '30-12-2012',
	        days: 9,
	        tags: ['MIDDLE EAST', 'EUROPE', 'COUNTRIES']
	    }, {
	        code: 'GBR',
	        name: 'ENGLAND',
	        visited: '01-01-2013',
	        days: 2,
	        tags: ['COUNTRIES', 'EUROPE', 'UNITED KINGDOM', 'DRIVEN', 'BICYCLE']
	    }, {
	        code: 'ITA',
	        name: 'ITALY',
	        visited: '11-02-2013',
	        days: 3,
	        tags: ['COUNTRIES', 'EUROPE', 'TOUR']
	    }, {
	        code: 'USA',
	        name: 'USA',
	        visited: '02-04-2013',
	        days: 15,
	        tags: ['NORTH AMERICA', 'COUNTRIES', 'BICYCLE']
	    }, {
	        code: 'FRA',
	        name: 'FRANCE',
	        visited: '14-04-2013',
	        days: 2,
	        tags: ['EUROPE', 'COUNTRIES']
	    }, {
	        code: 'GBR',
	        name: 'ENGLAND',
	        visited: '28-04-2013',
	        days: 2,
	        tags: ['COUNTRIES', 'EUROPE', 'UNITED KINGDOM', 'DRIVEN', 'BICYCLE']
	    }, {
	        code: 'IRL',
	        name: 'IRELAND',
	        visited: '05-05-2013',
	        days: 4,
	        tags: ['EUROPE', 'COUNTRIES', 'DRIVEN', 'BICYCLE']
	    }, {
	        code: 'BEL',
	        name: 'BELGIUM',
	        visited: '19-05-2013',
	        days: 2,
	        tags: ['EUROPE', 'COUNTRIES']
	    }, {
	        code: 'IRL',
	        name: 'IRELAND',
	        visited: '26-05-2013',
	        days: 2,
	        tags: ['EUROPE', 'COUNTRIES', 'DRIVEN', 'BICYCLE']
	    }, {
	        code: 'ESP',
	        name: 'SPAIN',
	        visited: '06-06-2013',
	        days: 5,
	        tags: ['EUROPE', 'COUNTRIES']
	    }, {
	        code: 'GBR',
	        name: 'NORTHERN IRELAND',
	        visited: '09-06-2013',
	        days: 1,
	        tags: ['UNITED KINGDOM', 'COUNTRIES', 'EUROPE', 'DRIVEN']
	    }, {
	        code: 'GBR',
	        name: 'WALES',
	        visited: '16-06-2013',
	        days: 2,
	        tags: ['UNITED KINGDOM', 'COUNTRIES', 'EUROPE', 'DRIVEN']
	    }, {
	        code: 'ESP',
	        name: 'SPAIN',
	        visited: '23-06-2013',
	        days: 3,
	        tags: ['EUROPE', 'COUNTRIES']
	    }, {
	        code: 'GBR',
	        name: 'ENGLAND',
	        visited: '07-07-2013',
	        days: 2,
	        tags: ['COUNTRIES', 'EUROPE', 'UNITED KINGDOM', 'DRIVEN', 'BICYCLE']
	    }, {
	        code: 'FRA',
	        name: 'FRANCE',
	        visited: '14-07-2013',
	        days: 3,
	        tags: ['EUROPE', 'COUNTRIES']
	    }, {
	        code: 'GBR',
	        name: 'ENGLAND',
	        visited: '01-09-2013',
	        days: 3,
	        tags: ['COUNTRIES', 'EUROPE', 'UNITED KINGDOM', 'DRIVEN', 'BICYCLE']
	    }, {
	        code: 'HRV',
	        name: 'CROATIA',
	        visited: '17-09-2013',
	        days: 4,
	        tags: ['COUNTRIES', 'EUROPE', 'EASTERN EUROPE']
	    }, {
	        code: 'GBR',
	        name: 'WALES',
	        visited: '29-09-2013',
	        days: 3,
	        tags: ['UNITED KINGDOM', 'COUNTRIES', 'EUROPE', 'DRIVEN']
	    }, {
	        code: 'PRT',
	        name: 'PORTUGAL',
	        visited: '06-10-2013',
	        days: 3,
	        tags: ['EUROPE', 'COUNTRIES', 'DRIVEN']
	    }, {
	        code: 'DEU',
	        name: 'GERMANY',
	        visited: '14-10-2013',
	        days: 3,
	        tags: ['EUROPE', 'COUNTRIES', 'TOUR', 'DRIVEN']
	    }, {
	        code: 'GBR',
	        name: 'ENGLAND',
	        visited: '18-10-2013',
	        days: 1,
	        tags: ['COUNTRIES', 'EUROPE', 'UNITED KINGDOM', 'DRIVEN', 'BICYCLE']
	    }, {
	        code: 'BIH',
	        name: 'BOSNIA AND HERZEGOVINA',
	        visited: '21-10-2013',
	        days: 1,
	        tags: ['COUNTRIES', 'EASTERN EUROPE', 'EUROPE']
	    }, {
	        code: 'MNE',
	        name: 'MONTENERGRO',
	        visited: '26-10-2013',
	        days: 3,
	        tags: ['COUNTRIES', 'EASTERN EUROPE', 'EUROPE']
	    }, {
	        code: 'HRV',
	        name: 'CROATIA',
	        visited: '27-10-2013',
	        days: 5,
	        tags: ['COUNTRIES', 'EUROPE', 'EASTERN EUROPE']
	    }, {
	        code: 'ESP',
	        name: 'SPAIN',
	        visited: '31-10-2013',
	        days: 4,
	        tags: ['EUROPE', 'COUNTRIES']
	    }, {
	        code: 'GBR',
	        name: 'ENGLAND',
	        visited: '01-11-2013',
	        days: 1,
	        tags: ['COUNTRIES', 'EUROPE', 'UNITED KINGDOM', 'DRIVEN', 'BICYCLE']
	    }, {
	        code: 'SGP',
	        name: 'SINGAPORE',
	        visited: '04-11-2013',
	        days: 2,
	        tags: ['COUNTRIES', 'ASIA']
	    }, {
	        code: 'MMR',
	        name: 'MYANMAR',
	        visited: '10-11-2013',
	        days: 7,
	        tags: ['COUNTRIES', 'ASIA', 'BICYCLE']
	    }, {
	        code: 'THA',
	        name: 'THAILAND',
	        visited: '12-11-2013',
	        days: 2,
	        tags: ['COUNTRIES', 'ASIA', 'DRIVEN']
	    }, {
	        code: 'KHM',
	        name: 'CAMBODIA',
	        visited: '15-11-2013',
	        days: 3,
	        tags: ['COUNTRIES', 'ASIA']
	    }, {
	        code: 'THA',
	        name: 'THAILAND',
	        visited: '21-11-2013',
	        days: 6,
	        tags: ['COUNTRIES', 'ASIA', 'DRIVEN']
	    }, {
	        code: 'SGP',
	        name: 'SINGAPORE',
	        visited: '22-11-2013',
	        days: 1,
	        tags: ['COUNTRIES', 'ASIA']
	    }, {
	        code: 'NZL',
	        name: 'NEW ZEALAND',
	        visited: '02-12-2013',
	        days: 7,
	        tags: ['COUNTRIES', 'OCEANIA', 'DRIVEN']
	    }, {
	        code: 'AUS',
	        name: 'AUSTRALIA',
	        visited: '16-12-2013',
	        days: 7,
	        tags: ['OCEANIA', 'COUNTRIES', 'DRIVEN', 'BICYCLE']
	    }, {
	        code: 'SGP',
	        name: 'SINGAPORE',
	        visited: '03-01-2014',
	        days: 2,
	        tags: ['COUNTRIES', 'ASIA']
	    }, {
	        code: 'HKG',
	        name: 'HONG KONG',
	        visited: '08-01-2014',
	        days: 3,
	        tags: ['ASIA', 'COUNTRIES']
	    }, {
	        code: 'CHN',
	        name: 'MACAU',
	        visited: '08-01-2014',
	        days: 1,
	        tags: ['ASIA', 'COUNTRIES']
	    }, {
	        code: 'MYS',
	        name: 'MALAYSIA',
	        visited: '16-01-2014',
	        days: 6,
	        tags: ['ASIA', 'COUNTRIES']
	    }, {
	        code: 'AUS',
	        name: 'AUSTRALIA',
	        visited: '20-01-2014',
	        days: 4,
	        tags: ['OCEANIA', 'COUNTRIES', 'DRIVEN', 'BICYCLE']
	    }, {
	        code: 'AUS',
	        name: 'AUSTRALIA',
	        visited: '21-02-2014',
	        days: 4,
	        tags: ['OCEANIA', 'COUNTRIES', 'DRIVEN', 'BICYCLE']
	    }, {
	        code: 'AUS',
	        name: 'AUSTRALIA',
	        visited: '24-03-2014',
	        days: 3,
	        tags: ['OCEANIA', 'COUNTRIES', 'DRIVEN', 'BICYCLE']
	    }, {
	        code: 'IND',
	        name: 'INDIA',
	        visited: '27-04-2014',
	        days: 8,
	        tags: ['COUNTRIES', 'ASIA']
	    }, {
	        code: 'AUS',
	        name: 'AUSTRALIA',
	        visited: '26-05-2014',
	        days: 2,
	        tags: ['OCEANIA', 'COUNTRIES', 'DRIVEN', 'BICYCLE']
	    }, {
	        code: 'NZL',
	        name: 'NEW ZEALAND',
	        visited: '10-06-2014',
	        days: 4,
	        tags: ['COUNTRIES', 'OCEANIA', 'DRIVEN']
	    }, {
	        code: 'AUS',
	        name: 'AUSTRALIA',
	        visited: '19-08-2014',
	        days: 4,
	        tags: ['OCEANIA', 'COUNTRIES', 'DRIVEN', 'BICYCLE']
	    }, {
	        code: 'AUS',
	        name: 'AUSTRALIA',
	        visited: '08-12-2014',
	        days: 3,
	        tags: ['OCEANIA', 'COUNTRIES', 'DRIVEN', 'BICYCLE']
	    }, {
	        code: 'MYS',
	        name: 'MALAYSIA',
	        visited: '27-12-2014',
	        days: 1,
	        tags: ['ASIA', 'COUNTRIES']
	    }, {
	        code: 'PHL',
	        name: 'PHILIPPINES',
	        visited: '01-01-2015',
	        days: 6,
	        tags: ['COUNTRIES', 'ASIA']
	    }, {
	        code: 'THA',
	        name: 'THAILAND',
	        visited: '09-01-2015',
	        days: 8,
	        tags: ['COUNTRIES', 'ASIA', 'DRIVEN']
	    }, {
	        code: 'MYS',
	        name: 'MALAYSIA',
	        visited: '10-01-2015',
	        days: 1,
	        tags: ['ASIA', 'COUNTRIES']
	    }, {
	        code: 'IDN',
	        name: 'INDONESIA',
	        visited: '13-01-2015',
	        days: 4,
	        tags: ['ASIA', 'COUNTRIES']
	    }, {
	        code: 'AUS',
	        name: 'AUSTRALIA',
	        visited: '08-03-2015',
	        days: 2,
	        tags: ['OCEANIA', 'COUNTRIES', 'DRIVEN', 'BICYCLE']
	    }, {
	        code: 'SGP',
	        name: 'SINGAPORE',
	        visited: '29-03-2015',
	        days: 1,
	        tags: ['COUNTRIES', 'ASIA']
	    }, {
	        code: 'NPL',
	        name: 'NEPAL',
	        visited: '06-04-2015',
	        days: 8,
	        tags: ['COUNTRIES', 'ASIA']
	    }, {
	        code: 'AUS',
	        name: 'AUSTRALIA',
	        visited: '03-08-2015',
	        days: 6,
	        tags: ['OCEANIA', 'COUNTRIES', 'DRIVEN', 'BICYCLE']
	    }, {
	        code: 'PER',
	        name: 'PERU',
	        visited: '03-09-2015',
	        days: 4,
	        tags: ['COUNTRIES', 'SOUTH AMERICA']
	    }, {
	        code: 'BOL',
	        name: 'BOLIVIA',
	        visited: '08-09-2015',
	        days: 7,
	        tags: ['COUNTRIES', 'SOUTH AMERICA']
	    }, {
	        code: 'CHL',
	        name: 'CHILE',
	        visited: '14-09-2015',
	        days: 7,
	        tags: ['COUNTRIES', 'SOUTH AMERICA']
	    }, {
	        code: 'AUS',
	        name: 'AUSTRALIA',
	        visited: '28-12-2015',
	        days: 3,
	        tags: ['OCEANIA', 'COUNTRIES', 'DRIVEN', 'BICYCLE']
	    }, {
	        code: 'MYS',
	        name: 'MALAYSIA',
	        visited: '29-12-2015',
	        days: 1,
	        tags: ['ASIA', 'COUNTRIES']
	    }, {
	        code: 'JPN',
	        name: 'JAPAN',
	        visited: '08-01-2016',
	        days: 10,
	        tags: ['COUNTRIES', 'ASIA', 'DRIVEN']
	    }, {
	        code: 'TWN',
	        name: 'TAIWAN',
	        visited: '11-01-2016',
	        days: 3,
	        tags: ['ASIA', 'COUNTRIES']
	    }, {
	        code: 'SGP',
	        name: 'SINGAPORE',
	        visited: '20-03-2016',
	        days: 1,
	        tags: ['COUNTRIES', 'ASIA']
	    }, {
	        code: 'VNM',
	        name: 'VIETNAM',
	        visited: '27-03-2016',
	        days: 7,
	        tags: ['COUNTRIES', 'ASIA', 'BICYCLE']
	    }, {
	        code: 'SGP',
	        name: 'SINGAPORE',
	        visited: '28-03-2016',
	        days: 1,
	        tags: ['COUNTRIES', 'ASIA']
	    }
	];

    var totalCountries = 0;
    var totalDays = 0;
    var totalVisits = 0; 

    var startDate = moment('2005-08-31');
    var currentDate = moment();

    $scope.displayDate = currentDate.format('MMMM YYYY');
    $scope.numMonths = Math.floor(moment.duration(currentDate.diff(startDate)).asMonths());

    visitedData.forEach(function(v) {
    	v.visited = moment(v.visited, 'DD-MM-YYYY');
    });

	var lookupMap = {};
	var series = [];
    var dataset = {};

    var onlyValues;
	var minValue;
	var maxValue;

	var calculatePaletteLevel = function (score) {
	    return 'level' + Math.floor((score - minValue)/maxValue * 5); 
	};

    var refreshMap = function(filterDate) {
    	totalCountries = 0;
    	totalDays = 0;
     	totalVisits = 0; 

    	lookupMap = {};
    	for (var i = 0; i < visitedData.length; i++) {
    		var v = visitedData[i];
    		if (v.visited.isAfter(filterDate)) {
    			break;
    		}
	    	var curr = lookupMap[v.code] || {};
	    	lookupMap[v.code] = {
	    		code: v.code,
	    		name: v.name,
	    		totalVisits: 1 + (curr.totalVisits || 0),
	    		totalDays: v.days + (curr.totalDays || 0)
	    	};
	    	totalVisits = totalVisits + 1;
	    	totalDays = totalDays + v.days;
    	}

		series = [];
		for (var key in lookupMap) {
		    series.push(lookupMap[key]);
		    totalCountries = totalCountries + 1;
		}

		// Datamaps expect data in format:
	    // { 'USA': { 'fillKey': 'level0'}, 'FRA': { 'fillKey': 'level1'} }
	    onlyValues = onlyValues || series.map(function(obj){ return obj.totalVisits; });
	    minValue = minValue || Math.min.apply(null, onlyValues);
	    maxValue = maxValue || Math.max.apply(null, onlyValues) - minValue + 1;

		dataset = {};

		series.forEach(function(item){
	        // item example value ['USA', 70]
	        var iso = item.code, value = item.totalVisits;
	        dataset[iso] = { fillKey: calculatePaletteLevel(value) };
	    });

		$scope.totalCountries = totalCountries;
	    $scope.totalDays = totalDays;
	    $scope.totalVisits = totalVisits;

	    $scope.mapObject = {
		  scope: 'world',
		  options: {
		    width: 900
		  },
		  geographyConfig: {
		    highlighBorderColor: '#EAA9A8',
		    highlighBorderWidth: 2,
		    popupTemplate: function(geo) {
	            return '<div class="hoverinfo"><strong>' + geo.properties.name + '<br/>Total Days Visited: ' + lookupMap[geo.id].totalDays + '<br/>Total Visits: ' + lookupMap[geo.id].totalVisits + '</strong></div>';
	        }
		  },
		  fills: {
		    defaultFill: '#C3C4B6',
	    	level0: '#859DBF',
	    	level1: '#51759F',
	    	level2: '#36608F',
	    	level3: '#1C4C7F',
	    	level4: '#02386F'
		  },
		  data: dataset
		};
    };

    refreshMap(currentDate);

    $scope.refreshMap = function(numMonths) {
    	var filterDate = moment('2005-08-31').add(numMonths, 'months');
    	$scope.displayDate = filterDate.format('MMMM YYYY');
    	refreshMap(filterDate);
    };

    var increaseNumMonths = function() {
    	if ($scope.numMonths < 180) {
    		$scope.numMonths = $scope.numMonths + 3;
    		$scope.refreshMap($scope.numMonths);
    		$timeout(increaseNumMonths, 750);
    	}
    };

    $scope.startPlayback = function() {
    	$scope.numMonths = 0;
    	$scope.refreshMap(0);
    	$timeout(increaseNumMonths, 750);
    };
  });
