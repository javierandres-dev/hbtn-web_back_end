// Return a Promise
export default function getResponseFromAPI() {
  return new Promise((res, rej) => {
    (true) ? res() : rej();
  })
}
