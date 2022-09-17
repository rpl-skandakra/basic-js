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
    return resJson
  } catch (error) {
    console.error(error)
  }
}

const showData = async () => {
  try {
    const items = await fetchData()

    // Show data to html
    // 1. Get the container
    const container = document.getElementById('container')
    console.log(container);

    // 2. Mapping data
    // for (let index = 0; index < items.length; index++) {
    //   const item = items[index];
    //   ...
    // }
    items.map(item => {
      console.log(item);

      // 3. Convert data to html element
      const nameElement = document.createElement('p')
      nameElement.textContent = item.name
      const priceElement = document.createElement('p')
      priceElement.textContent = 'Price: ' + item.price

      const containerItemElement = document.createElement('div')
      containerItemElement.classList = 'container-item'
      containerItemElement.appendChild(nameElement)
      containerItemElement.appendChild(priceElement)

      // 4. Insert element to container
      container.appendChild(containerItemElement)
    })
  } catch (error) {
    console.error(error)    
  }
}

showData()
