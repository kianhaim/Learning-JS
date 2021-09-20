import { async } from 'regenerator-runtime';
import { TIMEOUT_SEC } from './config.js';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const AJAX = async function (url, uploadData = undefined) {
  try {
    const fetchPromise = uploadData
      ? fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(uploadData),
        })
      : fetch(url);
    const res = await Promise.race([fetchPromise, timeout(TIMEOUT_SEC)]);
    // 'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886'
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data; // result the promise
  } catch (err) {
    throw err;
  }
};

console.log(data);
/*
export const getJSON = async function (url) {
  try {
    const fetchPromise = fetch(url);
    const res = await Promise.race([fetchPromise, timeout(TIMEOUT_SEC)]);
    // 'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886'
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data; // result the promise
  } catch (err) {
    throw err;
  }
};
/// Sending JSON fetch request
export const sendJSON = async function (url, uploadData) {
  try {
    const fetchPromise = fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(uploadData),
    });

    const res = await Promise.race([fetchPromise, timeout(TIMEOUT_SEC)]);
    // 'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886'
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data; // result the promise
  } catch (err) {
    throw err;
  }

};

*/
