

const contentHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};

/**
 *
 * @param url
 * @param body
 * @returns {*}
 * @constructor
 */
export function GET(url, params) {
  return fetch(url, {
    method: 'GET',
    headers: contentHeaders,
    body: JSON.stringify(params)
  });
}

/**
 *
 * @param url
 * @param body
 * @returns {*}
 * @constructor
 */
export function POST(url, params) {
  return fetch(url, {
    method: 'POST',
    headers: contentHeaders,
    body: JSON.stringify(params)
  });
}
