/* eslint-disable no-underscore-dangle */

async function loadData(func, args) {
  if (process.env.__SERVER__) {
    return func(args)
  }

  if (window.__PRELOADED_STATE__) {
    return window.__PRELOADED_STATE__
  }

  const result = await func(args)
  window.__PRELOADED_STATE__ = result

  return result
}

export default loadData
