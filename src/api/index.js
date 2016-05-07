import teams from './teams';

export default function registerApiRoutes(app) {
  app.use('/api/teams', teams);
}
