'use strict';
angular.module('triplogApp.services', [])

.factory('dataService', function() {
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

  var flightData = [{
        airline: 'UNITED',
        miles: 7420,
        flightDate: '17-08-2005'
    }, {
        airline: 'UNITED',
        miles: 7490,
        flightDate: '31-08-2005'
    }, {
        airline: 'UNITED',
        miles: 7490,
        flightDate: '25-06-2006'
    }, {
        airline: 'UNITED',
        miles: 860,
        flightDate: '05-07-2006'
    }, {
        airline: 'UNITED',
        miles: 8350,
        flightDate: '04-08-2006'
    }, {
        airline: 'JETSTAR',
        miles: 4830,
        flightDate: '12-07-2008'
    }, {
        airline: 'JETSTAR',
        miles: 4830,
        flightDate: '23-07-2008'
    }, {
        airline: 'QANTAS',
        miles: 10600,
        flightDate: '02-05-2009'
    }, {
        airline: 'QANTAS',
        miles: 10600,
        flightDate: '30-05-2009'
    }, {
        airline: 'VIRGIN BLUE',
        miles: 438,
        flightDate: '27-06-2009'
    }, {
        airline: 'QANTAS',
        miles: 438,
        flightDate: '30-06-2009'
    }, {
        airline: 'TIGER AIRWAYS',
        miles: 722,
        flightDate: '22-08-2009'
    }, {
        airline: 'TIGER AIRWAYS',
        miles: 722,
        flightDate: '24-08-2009'
    }, {
        airline: 'TIGER AIRWAYS',
        miles: 438,
        flightDate: '08-09-2009'
    }, {
        airline: 'AIR ASIA',
        miles: 3921,
        flightDate: '09-09-2009'
    }, {
        airline: 'AIR ASIA',
        miles: 2698,
        flightDate: '10-09-2009'
    }, {
        airline: 'AIR ASIA',
        miles: 2258,
        flightDate: '20-09-2009'
    }, {
        airline: 'AIR ASIA',
        miles: 6520,
        flightDate: '21-09-2009'
    }, {
        airline: 'RYANAIR',
        miles: 810,
        flightDate: '24-09-2009'
    }, {
        airline: 'RYANAIR',
        miles: 810,
        flightDate: '28-09-2009'
    }, {
        airline: 'RYANAIR',
        miles: 636,
        flightDate: '17-10-2009'
    }, {
        airline: 'RYANAIR',
        miles: 660,
        flightDate: '18-10-2009'
    }, {
        airline: 'RYANAIR',
        miles: 301,
        flightDate: '07-11-2009'
    }, {
        airline: 'RYANAIR',
        miles: 301,
        flightDate: '08-11-2009'
    }, {
        airline: 'THOMAS COOK',
        miles: 2460,
        flightDate: '02-12-2009'
    }, {
        airline: 'EGYPT AIR',
        miles: 318,
        flightDate: '03-12-2009'
    }, {
        airline: 'EGYPT AIR',
        miles: 434,
        flightDate: '05-12-2009'
    }, {
        airline: 'THOMAS COOK',
        miles: 2460,
        flightDate: '09-12-2009'
    }, {
        airline: 'RYANAIR',
        miles: 562,
        flightDate: '09-01-2010'
    }, {
        airline: 'RYANAIR',
        miles: 562,
        flightDate: '11-01-2010'
    }, {
        airline: 'EASY JET',
        miles: 1480,
        flightDate: '12-02-2010'
    }, {
        airline: 'EASY JET',
        miles: 1480,
        flightDate: '17-02-2010'
    }, {
        airline: 'RYANAIR',
        miles: 825,
        flightDate: '14-03-2010'
    }, {
        airline: 'RYANAIR',
        miles: 825,
        flightDate: '15-03-2010'
    }, {
        airline: 'EASY JET',
        miles: 689,
        flightDate: '01-05-2010'
    }, {
        airline: 'RYANAIR',
        miles: 703,
        flightDate: '03-05-2010'
    }, {
        airline: 'RYANAIR',
        miles: 649,
        flightDate: '08-05-2010'
    }, {
        airline: 'RYANAIR',
        miles: 649,
        flightDate: '10-05-2010'
    }, {
        airline: 'RYANAIR',
        miles: 607,
        flightDate: '12-06-2010'
    }, {
        airline: 'RYANAIR',
        miles: 607,
        flightDate: '13-06-2010'
    }, {
        airline: 'LUFTHANSA',
        miles: 565,
        flightDate: '17-09-2010'
    }, {
        airline: 'LUFTHANSA',
        miles: 584,
        flightDate: '19-09-2010'
    }, {
        airline: 'KOREAN AIR',
        miles: 10690,
        flightDate: '24-09-2010'
    }, {
        airline: 'KOREAN AIR',
        miles: 5180,
        flightDate: '09-10-2010'
    }, {
        airline: 'KOREAN AIR',
        miles: 5510,
        flightDate: '10-10-2010'
    }, {
        airline: 'RYANAIR',
        miles: 592,
        flightDate: '16-10-2010'
    }, {
        airline: 'EASY JET',
        miles: 524,
        flightDate: '17-10-2010'
    }, {
        airline: 'RYANAIR',
        miles: 316,
        flightDate: '30-10-2010'
    }, {
        airline: 'EASY JET',
        miles: 349,
        flightDate: '31-10-2010'
    }, {
        airline: 'GERMAN WINGS',
        miles: 303,
        flightDate: '18-12-2010'
    }, {
        airline: 'GERMAN WINGS',
        miles: 303,
        flightDate: '19-12-2010'
    }, {
        airline: 'EASY JET',
        miles: 1410,
        flightDate: '16-01-2011'
    }, {
        airline: 'EASY JET',
        miles: 1410,
        flightDate: '19-01-2011'
    }, {
        airline: 'EASY JET',
        miles: 959,
        flightDate: '22-01-2011'
    }, {
        airline: 'EASY JET',
        miles: 959,
        flightDate: '24-01-2011'
    }, {
        airline: 'EASY JET',
        miles: 479,
        flightDate: '12-02-2011'
    }, {
        airline: 'EASY JET',
        miles: 479,
        flightDate: '13-02-2011'
    }, {
        airline: 'EASY JET',
        miles: 4480,
        flightDate: '11-03-2011'
    }, {
        airline: 'EASY JET',
        miles: 4480,
        flightDate: '14-03-2011'
    }, {
        airline: 'QANTAS',
        miles: 10600,
        flightDate: '02-04-2011'
    }, {
        airline: 'QANTAS',
        miles: 4580,
        flightDate: '28-04-2011'
    }, {
        airline: 'QANTAS',
        miles: 5990,
        flightDate: '01-05-2011'
    }, {
        airline: 'RYANAIR',
        miles: 905,
        flightDate: '04-06-2011'
    }, {
        airline: 'EASY JET',
        miles: 872,
        flightDate: '07-06-2011'
    }, {
        airline: 'RYANAIR',
        miles: 989,
        flightDate: '11-06-2011'
    }, {
        airline: 'RYANAIR',
        miles: 1040,
        flightDate: '13-06-2011'
    }, {
        airline: 'RYANAIR',
        miles: 415,
        flightDate: '24-09-2011'
    }, {
        airline: 'RYANAIR',
        miles: 415,
        flightDate: '26-09-2011'
    }, {
        airline: 'EASY JET',
        miles: 1008,
        flightDate: '08-10-2011'
    }, {
        airline: 'EASY JET',
        miles: 1008,
        flightDate: '09-10-2011'
    }, {
        airline: 'VIRGIN ATLANTIC',
        miles: 3440,
        flightDate: '12-11-2011'
    }, {
        airline: 'VIRGIN ATLANTIC',
        miles: 3440,
        flightDate: '20-11-2011'
    }, {
        airline: 'EASY JET',
        miles: 860,
        flightDate: '26-11-2011'
    }, {
        airline: 'EASY JET',
        miles: 860,
        flightDate: '28-11-2011'
    }, {
        airline: 'EASY JET',
        miles: 567,
        flightDate: '03-12-2011'
    }, {
        airline: 'EASY JET',
        miles: 567,
        flightDate: '04-12-2011'
    }, {
        airline: 'BMI',
        miles: 2286,
        flightDate: '23-12-2011'
    }, {
        airline: 'BMI',
        miles: 2286,
        flightDate: '28-12-2011'
    }, {
        airline: 'EASY JET',
        miles: 751,
        flightDate: '13-01-2012'
    }, {
        airline: 'EASY JET',
        miles: 751,
        flightDate: '15-01-2012'
    }, {
        airline: 'ICELAND EXPRESS',
        miles: 1200,
        flightDate: '18-02-2012'
    }, {
        airline: 'ICELANDAIR',
        miles: 1200,
        flightDate: '26-02-2012'
    }, {
        airline: 'WIZZ AIR',
        miles: 925,
        flightDate: '09-03-2012'
    }, {
        airline: 'EASY JET',
        miles: 925,
        flightDate: '11-03-2012'
    }, {
        airline: 'LUFTHANSA',
        miles: 1476,
        flightDate: '06-04-2012'
    }, {
        airline: 'EASY JET',
        miles: 1977,
        flightDate: '21-04-2012'
    }, {
        airline: 'EASY JET',
        miles: 1977,
        flightDate: '24-04-2012'
    }, {
        airline: 'RYANAIR',
        miles: 1320,
        flightDate: '05-05-2012'
    }, {
        airline: 'RYANAIR',
        miles: 1320,
        flightDate: '07-05-2012'
    }, {
        airline: 'BRITISH AIRWAYS',
        miles: 5990,
        flightDate: '01-06-2012'
    }, {
        airline: 'CATHAY PACIFIC',
        miles: 483,
        flightDate: '02-06-2012'
    }, {
        airline: 'CATHAY PACIFIC',
        miles: 483,
        flightDate: '07-06-2012'
    }, {
        airline: 'CATHAY PACIFIC',
        miles: 4580,
        flightDate: '08-06-2012'
    }, {
        airline: 'QANTAS',
        miles: 4680,
        flightDate: '17-06-2012'
    }, {
        airline: 'BRITISH AIRWAYS',
        miles: 5930,
        flightDate: '18-06-2012'
    }, {
        airline: 'NORWEGIAN AIR',
        miles: 581,
        flightDate: '20-07-2012'
    }, {
        airline: 'NORWEGIAN AIR',
        miles: 581,
        flightDate: '22-07-2012'
    }, {
        airline: 'RYANAIR',
        miles: 805,
        flightDate: '04-08-2012'
    }, {
        airline: 'RYANAIR',
        miles: 805,
        flightDate: '06-08-2012'
    }, {
        airline: 'RYANAIR',
        miles: 661,
        flightDate: '11-08-2012'
    }, {
        airline: 'NORWEGIAN AIR',
        miles: 665,
        flightDate: '15-08-2012'
    }, {
        airline: 'AER LINGUS',
        miles: 319,
        flightDate: '15-09-2012'
    }, {
        airline: 'AER LINGUS',
        miles: 279,
        flightDate: '17-09-2012'
    }, {
        airline: 'RYANAIR',
        miles: 717,
        flightDate: '20-10-2012'
    }, {
        airline: 'AER LINGUS',
        miles: 1000,
        flightDate: '21-10-2012'
    }, {
        airline: 'RYANAIR',
        miles: 293,
        flightDate: '01-12-2012'
    }, {
        airline: 'RYANAIR',
        miles: 293,
        flightDate: '03-12-2012'
    }, {
        airline: 'LUFTHANSA',
        miles: 675,
        flightDate: '21-12-2012'
    }, {
        airline: 'LUFTHANSA',
        miles: 1156,
        flightDate: '21-12-2012'
    }, {
        airline: 'TURKISH AIRLINES',
        miles: 339,
        flightDate: '22-12-2012'
    }, {
        airline: 'PEGASUS AIRLINES',
        miles: 451,
        flightDate: '25-12-2012'
    }, {
        airline: 'PEGASUS AIRLINES',
        miles: 205,
        flightDate: '28-12-2012'
    }, {
        airline: 'TURKISH AIRLINES',
        miles: 1156,
        flightDate: '31-12-2012'
    }, {
        airline: 'TURKISH AIRLINES',
        miles: 675,
        flightDate: '31-12-2012'
    }, {
        airline: 'RYANAIR',
        miles: 293,
        flightDate: '01-01-2013'
    }, {
        airline: 'AER LINGUS',
        miles: 994,
        flightDate: '09-02-2013'
    }, {
        airline: 'EASY JET',
        miles: 693,
        flightDate: '11-02-2013'
    }, {
        airline: 'AER LINGUS',
        miles: 301,
        flightDate: '12-02-2013'
    }, {
        airline: 'US AIRWAYS',
        miles: 3262,
        flightDate: '22-03-2013'
    }, {
        airline: 'AMERICAN AIRLINES',
        miles: 190,
        flightDate: '22-03-2013'
    }, {
        airline: 'AMERICAN AIRLINES',
        miles: 934,
        flightDate: '22-03-2013'
    }, {
        airline: 'US AIRWAYS',
        miles: 448,
        flightDate: '22-03-2013'
    }, {
        airline: 'JETBLUE',
        miles: 1102,
        flightDate: '25-03-2013'
    }, {
        airline: 'SPIRIT AIRLINES',
        miles: 581,
        flightDate: '27-03-2013'
    }, {
        airline: 'GREYHOUND',
        miles: 245,
        flightDate: '29-03-2013'
    }, {
        airline: 'US AIRWAYS',
        miles: 543,
        flightDate: '29-03-2013'
    }, {
        airline: 'US AIRWAYS',
        miles: 3262,
        flightDate: '02-04-2013'
    }, {
        airline: 'US AIRWAYS',
        miles: 95,
        flightDate: '02-04-2013'
    }, {
        airline: 'AER LINGUS',
        miles: 301,
        flightDate: '12-04-2013'
    }, {
        airline: 'EASY JET',
        miles: 522,
        flightDate: '13-04-2013'
    }, {
        airline: 'AER LINGUS',
        miles: 759,
        flightDate: '14-04-2013'
    }, {
        airline: 'RYANAIR',
        miles: 293,
        flightDate: '27-04-2013'
    }, {
        airline: 'RYANAIR',
        miles: 293,
        flightDate: '28-04-2013'
    }, {
        airline: 'RYANAIR',
        miles: 502,
        flightDate: '17-05-2013'
    }, {
        airline: 'RYANAIR',
        miles: 502,
        flightDate: '20-05-2013'
    }, {
        airline: 'AER LINGUS',
        miles: 715,
        flightDate: '01-06-2013'
    }, {
        airline: 'RYANAIR',
        miles: 720,
        flightDate: '05-06-2013'
    }, {
        airline: 'RYANAIR',
        miles: 206,
        flightDate: '14-06-2013'
    }, {
        airline: 'RYANAIR',
        miles: 206,
        flightDate: '16-06-2013'
    }, {
        airline: 'RYANAIR',
        miles: 301,
        flightDate: '20-06-2013'
    }, {
        airline: 'NORWEGIAN AIR',
        miles: 1788,
        flightDate: '21-06-2013'
    }, {
        airline: 'NORWEGIAN AIR',
        miles: 1788,
        flightDate: '23-06-2013'
    }, {
        airline: 'AER LINGUS',
        miles: 301,
        flightDate: '24-06-2013'
    }, {
        airline: 'RYANAIR',
        miles: 293,
        flightDate: '06-07-2013'
    }, {
        airline: 'RYANAIR',
        miles: 269,
        flightDate: '07-07-2013'
    }, {
        airline: 'RYANAIR',
        miles: 452,
        flightDate: '12-07-2013'
    }, {
        airline: 'RYANAIR',
        miles: 452,
        flightDate: '15-07-2013'
    }, {
        airline: 'CITIJET',
        miles: 296,
        flightDate: '30-08-2013'
    }, {
        airline: 'RYANAIR',
        miles: 301,
        flightDate: '01-09-2013'
    }, {
        airline: 'RYANAIR',
        miles: 1171,
        flightDate: '14-09-2013'
    }, {
        airline: 'RYANAIR',
        miles: 1171,
        flightDate: '17-09-2013'
    }, {
        airline: 'AER LINGUS',
        miles: 200,
        flightDate: '27-09-2013'
    }, {
        airline: 'AER LINGUS',
        miles: 200,
        flightDate: '29-09-2013'
    }, {
        airline: 'AER LINGUS',
        miles: 1136,
        flightDate: '04-10-2013'
    }, {
        airline: 'AER LINGUS',
        miles: 1136,
        flightDate: '06-10-2013'
    }, {
        airline: 'AER LINGUS',
        miles: 857,
        flightDate: '12-10-2013'
    }, {
        airline: 'AER LINGUS',
        miles: 745,
        flightDate: '14-10-2013'
    }, {
        airline: 'CITIJET',
        miles: 296,
        flightDate: '18-10-2013'
    }, {
        airline: 'NORWEGIAN AIR',
        miles: 929,
        flightDate: '19-10-2013'
    }, {
        airline: 'VUELING',
        miles: 835,
        flightDate: '27-10-2013'
    }, {
        airline: 'RYANAIR',
        miles: 549,
        flightDate: '28-10-2013'
    }, {
        airline: 'EASY JET',
        miles: 687,
        flightDate: '31-10-2013'
    }, {
        airline: 'EMIRATES',
        miles: 7044,
        flightDate: '02-11-2013'
    }, {
        airline: 'TIGER AIRWAYS',
        miles: 1202,
        flightDate: '04-11-2013'
    }, {
        airline: 'AIR MANDALAY',
        miles: 306,
        flightDate: '05-11-2013'
    }, {
        airline: 'AIR MANDALAY',
        miles: 124,
        flightDate: '08-11-2013'
    }, {
        airline: 'AIR MANDALAY',
        miles: 86,
        flightDate: '09-11-2013'
    }, {
        airline: 'AIR ASIA',
        miles: 618,
        flightDate: '10-11-2013'
    }, {
        airline: 'AIR ASIA',
        miles: 218,
        flightDate: '12-11-2013'
    }, {
        airline: 'AIR ASIA',
        miles: 571,
        flightDate: '15-11-2013'
    }, {
        airline: 'AIR ASIA',
        miles: 737,
        flightDate: '20-11-2013'
    }, {
        airline: 'AIR ASIA',
        miles: 608,
        flightDate: '21-11-2013'
    }, {
        airline: 'QANTAS',
        miles: 3908,
        flightDate: '22-11-2013'
    }, {
        airline: 'JETSTAR',
        miles: 1320,
        flightDate: '25-11-2013'
    }, {
        airline: 'JETSTAR',
        miles: 1204,
        flightDate: '02-12-2013'
    }, {
        airline: 'TIGER AIRWAYS',
        miles: 438,
        flightDate: '10-12-2013'
    }, {
        airline: 'TIGER AIRWAYS',
        miles: 438,
        flightDate: '16-12-2013'
    }, {
        airline: 'QANTAS',
        miles: 4281,
        flightDate: '02-01-2014'
    }, {
        airline: 'SCOOT',
        miles: 1592,
        flightDate: '04-01-2014'
    }, {
        airline: 'SCOOT',
        miles: 1592,
        flightDate: '08-01-2014'
    }, {
        airline: 'JETSTAR',
        miles: 184,
        flightDate: '09-01-2014'
    }, {
        airline: 'AIR ASIA',
        miles: 201,
        flightDate: '12-01-2014'
    }, {
        airline: 'AIR ASIA',
        miles: 201,
        flightDate: '15-01-2014'
    }, {
        airline: 'AIR ASIA',
        miles: 3921,
        flightDate: '16-01-2014'
    }, {
        airline: 'TIGER AIRWAYS',
        miles: 438,
        flightDate: '20-01-2014'
    }, {
        airline: 'TIGER AIRWAYS',
        miles: 1254,
        flightDate: '18-02-2014'
    }, {
        airline: 'TIGER AIRWAYS',
        miles: 1254,
        flightDate: '22-02-2014'
    }, {
        airline: 'JETSTAR',
        miles: 567,
        flightDate: '22-03-2014'
    }, {
        airline: 'JETSTAR',
        miles: 645,
        flightDate: '24-03-2014'
    }, {
        airline: 'VIRGIN ATLANTIC',
        miles: 723,
        flightDate: '18-04-2014'
    }, {
        airline: 'SINGAPORE AIRLINES',
        miles: 5936,
        flightDate: '19-04-2014'
    }, {
        airline: 'JET AIRWAYS',
        miles: 295,
        flightDate: '21-04-2014'
    }, {
        airline: 'SPICEJET',
        miles: 338,
        flightDate: '26-04-2014'
    }, {
        airline: 'SINGAPORE AIRLINES',
        miles: 5010,
        flightDate: '27-04-2014'
    }, {
        airline: 'VIRGIN ATLANTIC',
        miles: 2035,
        flightDate: '28-04-2014'
    }, {
        airline: 'JETSTAR',
        miles: 1225,
        flightDate: '23-05-2014'
    }, {
        airline: 'JETSTAR',
        miles: 1225,
        flightDate: '25-05-2014'
    }, {
        airline: 'JETSTAR',
        miles: 1341,
        flightDate: '07-06-2014'
    }, {
        airline: 'JETSTAR',
        miles: 1341,
        flightDate: '10-06-2014'
    }, {
        airline: 'QANTAS',
        miles: 487,
        flightDate: '16-08-2014'
    }, {
        airline: 'QANTAS',
        miles: 487,
        flightDate: '19-08-2014'
    }, {
        airline: 'JETSTAR',
        miles: 645,
        flightDate: '06-12-2014'
    }, {
        airline: 'JETSTAR',
        miles: 567,
        flightDate: '08-12-2014'
    }, {
        airline: 'AIR ASIA',
        miles: 213,
        flightDate: '26-12-2014'
    }, {
        airline: 'SCOOT',
        miles: 3908,
        flightDate: '26-12-2014'
    }, {
        airline: 'AIR ASIA',
        miles: 1613,
        flightDate: '27-12-2014'
    }, {
        airline: 'CEBU PACIFIC',
        miles: 350,
        flightDate: '01-01-2015'
    }, {
        airline: 'CEBU PACIFIC',
        miles: 1359,
        flightDate: '01-01-2015'
    }, {
        airline: 'BANGKOK AIRWAYS',
        miles: 289,
        flightDate: '03-01-2015'
    }, {
        airline: 'BANGKOK AIRWAYS',
        miles: 370,
        flightDate: '06-01-2015'
    }, {
        airline: 'BANGKOK AIRWAYS',
        miles: 289,
        flightDate: '06-01-2015'
    }, {
        airline: 'AIR ASIA',
        miles: 1122,
        flightDate: '09-01-2015'
    }, {
        airline: 'AIR ASIA',
        miles: 1219,
        flightDate: '10-01-2015'
    }, {
        airline: 'JETSTAR',
        miles: 2870,
        flightDate: '13-01-2015'
    }, {
        airline: 'JETSTAR',
        miles: 422,
        flightDate: '06-03-2015'
    }, {
        airline: 'JETSTAR',
        miles: 422,
        flightDate: '08-03-2015'
    }, {
        airline: 'SCOOT',
        miles: 3908,
        flightDate: '28-03-2015'
    }, {
        airline: 'MALAYSIA AIRLINES',
        miles: 2216,
        flightDate: '29-03-2015'
    }, {
        airline: 'TIGER AIRWAYS',
        miles: 184,
        flightDate: '06-04-2015'
    }, {
        airline: 'SCOOT',
        miles: 3908,
        flightDate: '06-04-2015'
    }, {
        airline: 'MALAYSIA AIRLINES',
        miles: 2032,
        flightDate: '06-04-2015'
    }, {
        airline: 'VIRGIN BLUE',
        miles: 438,
        flightDate: '28-07-2015'
    }, {
        airline: 'VIRGIN BLUE',
        miles: 438,
        flightDate: '03-08-2015'
    }, {
        airline: 'QANTAS',
        miles: 7044,
        flightDate: '29-08-2015'
    }, {
        airline: 'LAN',
        miles: 1891,
        flightDate: '29-08-2015'
    }, {
        airline: 'PERUVIAN AIRLINES',
        miles: 323,
        flightDate: '03-09-2015'
    }, {
        airline: 'LAN',
        miles: 1195,
        flightDate: '13-09-2015'
    }, {
        airline: 'QANTAS',
        miles: 7044,
        flightDate: '14-09-2015'
    }, {
        airline: 'JETSTAR',
        miles: 2035,
        flightDate: '25-12-2015'
    }, {
        airline: 'AIR ASIA',
        miles: 2570,
        flightDate: '28-12-2015'
    }, {
        airline: 'AIR ASIA',
        miles: 3323,
        flightDate: '29-12-2015'
    }, {
        airline: 'SCOOT',
        miles: 1357,
        flightDate: '08-01-2016'
    }, {
        airline: 'AIR ASIA',
        miles: 6103,
        flightDate: '11-01-2016'
    }, {
        airline: 'SCOOT',
        miles: 3908,
        flightDate: '19-03-2016'
    }, {
        airline: 'TIGER AIRWAYS',
        miles: 1377,
        flightDate: '20-03-2016'
    }, {
        airline: 'JETSTAR',
        miles: 390,
        flightDate: '23-03-2016'
    }, {
        airline: 'JETSTAR',
        miles: 391,
        flightDate: '26-03-2016'
    }, {
        airline: 'JETSTAR',
        miles: 678,
        flightDate: '27-03-2016'
    }, {
        airline: 'SCOOT',
        miles: 3908,
        flightDate: '28-03-2016'
  }];

  return {
    getVisitData: function() {
      return visitedData;
    },
    getFlightData: function() {
      return flightData;
    }
  };
});