import { Inject, Injectable } from '@nestjs/common';
import { RedisService } from './redis.service';
import {
  RedisClient,
  RedisKeyType,
  RedisValueType,
  RedisProviderToken,
} from './redis.type';

@Injectable()
export class RedisServiceImpl implements RedisService {
  constructor(
    @Inject(RedisProviderToken.REDIS_CLIENT)
    private readonly redisClient: RedisClient,
  ) {}

  public increase(key: RedisKeyType): Promise<number> {
    return new Promise<number>((resolve, reject) =>
      this.redisClient.incr(key, (error: Error, value: number) => {
        if (error) reject(error);
        resolve(value);
      }),
    );
  }

  public decrease(key: RedisKeyType): Promise<number> {
    return new Promise<number>((resolve, reject) =>
      this.redisClient.decr(key, (error: Error, value: number) => {
        if (error) reject(error);
        resolve(value);
      }),
    );
  }

  public getset(key: RedisKeyType, value: RedisValueType): Promise<string> {
    return new Promise<string>((resolve, reject) =>
      this.redisClient.getset(key, value, (error: Error, oldValue: string) => {
        if (error) reject(error);
        resolve(oldValue);
      }),
    );
  }

  public delete(key: RedisKeyType): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) =>
      this.redisClient.del(key, (error: Error, value: number) => {
        if (error) reject(error);
        resolve(!!value);
      }),
    );
  }
}
