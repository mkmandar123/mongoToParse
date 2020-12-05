import { MongoToParseError } from './src/error/mongo-to-parse-error';
import {
  MongoToParseQueryBase,
  ParseClassExtender,
  RequestQueryPayload,
  RequestCountPayload,
} from './src/transform/mongo-to-parse-query-base';

class MongoToParseQuery extends MongoToParseQueryBase {
  constructor() {
    super();
    this.setParse(Parse);
  }
}

export { MongoToParseQuery, MongoToParseError, ParseClassExtender, MongoToParseQueryBase, RequestQueryPayload, RequestCountPayload };
