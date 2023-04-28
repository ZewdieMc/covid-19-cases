import { rest } from 'msw';
import mockCovidData from './mockData';

const handlers = [
  rest.get('https://disease.sh/v3/covid-19/countries', (req, res, ctx) => res(
    ctx.status(200), ctx.json(mockCovidData), ctx.delay(300),
  )),
];

export default handlers;
