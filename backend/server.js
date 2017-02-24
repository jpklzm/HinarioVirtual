import bodyParser from 'body-parser';
import express from 'express';
import fs from 'fs';
import graphqlHTTP from 'express-graphql';
import graphqlSchema from './src/data/schema';
import mongoose from 'mongoose';
import { graphql } from 'graphql';
import { introspectionQuery } from 'graphql/utilities';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json({ type: '*/*' }));

(async() => {
  try {
    const schema = graphqlSchema();

    await mongoose.connect('mongodb://admin:admin@ds161099.mlab.com:61099/hinariovirtual');
    console.log('*** Connected ***');

    app.use('/graphql', graphqlHTTP(req => ({
      schema,
      graphiql: true
    })));

    const jsonSchema = await graphql(schema, introspectionQuery);
		await fs.writeFile('src/data/schema.json', JSON.stringify(jsonSchema, null, 2), err => {
			if (err) throw err;

			console.log('schema.json created successfully.');
		});

    app.listen(PORT, () => {
			console.info('==> Listening on port %s.', PORT);
		});
  } catch (err) {
		console.log(err);
	}
})();
