
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'HRC Calculator' });
};

/**
+   \brief calculate
+
+       This function will calculate the HRC
+
+   \author Salvatore D'Agostino
+   \date  2013-04-16 21:12
+   \param res   The result
+
+   \return The result of the calculation
**/
function calculate(res,kva)
{
    console.log("Doing Calculation with total: " + kva);

    var result = 0.0;
    var denominator = Math.sqrt(3) * 600;
    var numerator = kva * 1.25;

    result = Math.round((numerator / denominator) * 10000) / 10;
    json = JSON.stringify(result);

    res.writeHead(200, {'content-type':'application/json', 'content-length':json.length});
    res.end(json);

}// END function calculate
exports.calculate = calculate;