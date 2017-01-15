var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json({limit: '50mb'}));

app.get('/get-chart-data', function (req, res) {
  var query = JSON.parse(req.query.query);
  console.log("Get chart data: " + JSON.stringify(query));
  console.log("Auth: " + req.get('Authorization'));
  res.json({
    "rows": [
      ["2017-01-09", 10],
      ["2017-01-10", 20],
      ["2017-01-11", 235],
      ["2017-01-12", 10],
      ["2017-01-13", 124],
      ["2017-01-14", 64],
      ["2017-01-15", 21]
    ],
    "total": 250
  });
});

app.get('/schema-dictionary', function (req, res) {
  console.log("Get schema dictionary");
  console.log("Auth: " + req.get('Authorization'));
  res.json([
    {
      "metrics": [ ["tvRevenue", ["revenue", "sales", "tv sales"] ] ],
      "dimensions": [ ["countryCode", ["country"] ] ],
      "predefinedFilters": [ ["ultraHdSeries", ["ultra hd series"] ] ],
      "filters": []
    },
    {
      "metrics": [ ["washingRevenue", ["washing machines revenue"] ] ],
      "dimensions": [ ["speed", ["speed"] ] ],
      "predefinedFilters": [],
      "filters": []
    }
  ])
});

var port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log('Statsbot API is listening on ' + port);
});
