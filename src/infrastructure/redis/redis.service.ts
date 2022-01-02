import { RedisKeyType, RedisValueType } from './redis.type';

export interface RedisService {
  increase(key: RedisKeyType): Promise<number>;
  decrease(key: RedisKeyType): Promise<number>;

  getset(key: RedisKeyType, value: RedisValueType): Promise<string>;
  delete(key: RedisKeyType): Promise<boolean>;
}
