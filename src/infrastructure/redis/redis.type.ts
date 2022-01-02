import Redis from 'redis';

export type RedisClient = Redis.RedisClient;
export type RedisKeyType = string;
export type RedisValueType = string;

export const enum RedisProviderToken {
  REDIS_CLIENT = 'REDIS_CLIENT_TOKEN',
}
