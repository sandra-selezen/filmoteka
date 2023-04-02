export const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? [] : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

export const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set items error: ', error.message);
  }
};

export const removeLocal = (key, id) => {
  try {
    const locStorage = load(key);
    const restFilms = [...locStorage].filter(film => film.id != id);
    localStorage.setItem(key, JSON.stringify(restFilms));
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

export const clearLocal = () => {
  localStorage.clear();
};