const express = require('express');
const app = express();

// Serve all the files in '/' directory
app.use(express.static('.'));

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + server.address().port);
});
