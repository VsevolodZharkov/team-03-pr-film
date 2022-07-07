/**
 *
 * @param {sting} key
 * @param {string} id
 * @returns true/false
 */
function isInLocalstorage(key, id) {
  const data = JSON.parse(localStorage.getItem(key));
  if (!data) {
    return false;
  }
  return !!data.find(el => el.id === Number(id));
}

export { isInLocalstorage };
