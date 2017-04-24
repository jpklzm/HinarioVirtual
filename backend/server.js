import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import pontos from './src/data/routes/pontos'
const app = express();
const PORT = process.env.PORT || 9000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/v1', pontos);

(async() => {
  try {
    await mongoose.connect('mongodb://admin:admin@ds161099.mlab.com:61099/hinariovirtual');
    console.log('*** Connected ***');

    app.listen(PORT, () => {
			console.info('==> Listening on port %s.', PORT);
		});

  } catch (err) {
		console.log(err);
	}
})();

module.exports = app;
