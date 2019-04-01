import express, { Express, Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import { fileServerRouter } from './router/fileServer';
import { launcherServerRouter } from './router/launcherServer';
import { storagesServerRouter } from './router/storageServer';
import { projectsServerRouter } from './router/projectServer';

const app: Express = express();

app.all('*', function(req: Request, res: Response, next: NextFunction) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req: Request, res: Response) {
  res.send('fortest');
});

app.use('/api/fileserver', fileServerRouter);
app.use('/api/launcher', launcherServerRouter);
app.use('/api/storages', storagesServerRouter);
app.use('/api/projects', projectsServerRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${port}`);
});