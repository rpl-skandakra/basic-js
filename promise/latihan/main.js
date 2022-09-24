const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const resJson = await response.json();
    return resJson;
  } catch (error) {
    console.error(error);
  }
}

const generateElement = (element, text) => {
  const createdElement = document.createElement(element);
  createdElement.textContent = text;
  return createdElement;
}

const showData = async () => {
  try {
    const users = await fetchData('https://jsonplaceholder.typicode.com/users');
    console.log(users);

    const container = document.getElementById('container');

    users.map(user => {
      const nameElement = generateElement('h1', user.name);
      const emailElement = generateElement('p', user.email);

      const containerItem = document.createElement('div');
      containerItem.classList = 'container-item';
      containerItem.appendChild(nameElement);
      containerItem.appendChild(emailElement);

      container.appendChild(containerItem);
    });
  } catch (error) {
    console.error(error);
  }
}

showData();
