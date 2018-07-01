[![npm version](https://badge.fury.io/js/onemile-router.svg)](https://badge.fury.io/js/cache-facade)
[![CircleCI](https://circleci.com/gh/acro5piano/dotenv-vault.svg?style=svg)](https://circleci.com/gh/acro5piano/cache-facade)

# Cache Facade

Browser Cache inspired by Laravel's `cache::remember`. You can reduce API call with fluent syntax.

# Installation

```
yarn add cache-facade
```

# Usage

```ts
import cache from 'cache-facade'

async someAsyncFunction() {
  const countries = await cache.remember('countries', 30, () => {
    return countryApi.get()
  })
  console.log(countries)
}
```

In the above example, `cache.remember` will look for saved cache first. Then, if cache found then return it. Else the third function's result will be passed. If over 30 minutes passed since the cache saved, Cache Facade will run the third function and save it.

# Syntax

## cache.remember

```ts
cache.remember(keyName: string, expiredTimeInMinutes: number, otherwise: () => Promise<any>)
```

## cache.setDriver

Set storage driver. Default is `localStorage`.

```ts
import cache, { Driver } from 'cache-facade'

cache.setDriver(Driver.memory)
cache.setDriver(Driver.localStorage)
```

# TODO

- [ ] React Native support. Add `AsyncStorage` Driver.
- [ ] Custom driver support.
