import { RedisClient } from './redis.type';
import { Store, Cache } from 'cache-manager';

export interface RedisCache extends Cache {
  store: RedisStore;
}

interface RedisStore extends Store {
  getClient: () => RedisClient;
}
