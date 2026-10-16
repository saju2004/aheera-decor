/**
 * Safe localStorage wrapper with memory fallback if private browsing blocks it
 */
const memoryStorage = {};

export function getStorageItem(key, defaultValue = null) {
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (err) {
    console.warn(`localStorage read error for key "${key}":`, err);
    return memoryStorage[key] !== undefined ? memoryStorage[key] : defaultValue;
  }
}

export function setStorageItem(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.warn(`localStorage write error for key "${key}":`, err);
    memoryStorage[key] = value;
  }
}

export function removeStorageItem(key) {
  try {
    window.localStorage.removeItem(key);
  } catch (err) {
    delete memoryStorage[key];
  }
}
