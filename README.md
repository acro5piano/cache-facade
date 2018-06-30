[![npm version](https://badge.fury.io/js/onemile-router.svg)](https://badge.fury.io/js/cache-facade)
[![CircleCI](https://circleci.com/gh/acro5piano/dotenv-vault.svg?style=svg)](https://circleci.com/gh/acro5piano/cache-facade)

# Cache Facade

Browser Cache inspired by Laravel's `cache::remember`

# Installation

```
yarn add cache-facade
```

# Usage

```ts
import cache from 'cache-facade'

const countries = cache.remember('countries', 30, () => {
  return countryApi.get()
})
```
