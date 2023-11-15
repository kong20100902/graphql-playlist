import express from 'express';
import { createHandler } from 'graphql-http/lib/use/express';
import { schema } from './schema/schema.js'
import pkg from 'graphql-playground-middleware-express';
const expressPlayground = pkg.default;
import mongoose from 'mongoose';
import cors from 'cors';


const app = express();

// allow cross-origin requests
app.use(cors());
mongoose.connect("mongodb+srv://kong20100902:0706aceACE@wenzhen-cluster.5q7vmo7.mongodb.net/?retryWrites=true&w=majority");
mongoose.connection.once('open', () => {
    console.log('connected to database');
});

app.use('/graphql', createHandler({schema}));
app.get('/playground', expressPlayground({ endpoint: '/graphql' }));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});
