/// import cache, { Driver } from 'cache-facade'
import cache, { Driver } from '../src'

cache.setDriver(Driver.localStorage)

const countries = ['US', 'UK', 'JP']

const cachedCountries = cache.remember('countries', 30, () => countries)

const elm = document.getElementById('app')
if (elm) {
  elm.innerText = cachedCountries.join(', ')
}
