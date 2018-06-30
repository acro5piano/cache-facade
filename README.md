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
