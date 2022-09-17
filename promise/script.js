/**
 * Promise
 */
// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Hello')
//   }, 3000)
// })

// myPromise
//   .then(value => {
//     console.log(value)
//     return value
//   })
//   .then(value => {
//     console.log(value);
//     setTimeout(() => {
//       console.log('Action 2');
//     }, 3000);
//   })
//   .catch(error => {
//     console.log(error);
//   })

// console.log('run');

/**
 * Async await
 */

// async function fetchData() {
//   ...
// }

const fetchData = async () => {
  try {
    const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json')
    console.log(response);
    const resJson = await response.json()
    console.log(resJson);
  } catch (error) {
    console.error(error)
  }
}

fetchData()
