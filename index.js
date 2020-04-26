const verify = function () {
  const name = document.querySelector('#entered-name').value.trim();
  if (!name) return;
  console.log(name);
  document.querySelector('#main').className = 'hide';
  if (name.toLowerCase() !== 'raja') {
    return document.querySelector('#wrong').classList.remove('hide');
  }
  document.querySelector('#correct').classList.remove('hide');
  document.querySelector('#name').innerText = name;
};
