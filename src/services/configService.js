let configuration = null;
const validOptions = ['assign'];

/* **************************** */
/* Helpers
/* **************************** */
function fetchFromObject(obj, key) {
  key = key !== undefined ? key : '';

  if (typeof obj === 'undefined') {
    return undefined;
  }

  const index = key.indexOf('.');

  if (index > -1) {
    return fetchFromObject(obj[key.substring(0, index)], key.substr(index + 1));
  }

  return obj[key];
}

function sayWarning(text) {
  if (process.env.NODE_ENV === 'development') {
    console.warn(text);
  }
}
export function set(newConfiguration, newOptions = {}) {
  if (configuration) {
    throw new Error('Configuration is already set');
  }

  if (newOptions) {
    for (const newOption in newOptions) {
      // Check if is a valid option
      if (validOptions.indexOf(newOption) !== -1) {
        // Check value of option
        const value = newOptions[newOption];
        if (typeof value !== 'boolean') {
          throw new Error(
            `Unexpected value type for ${newOption} : ${typeof value}, boolean expected`
          );
        }
      } else {
        throw new Error(`Unrecognised option '${newOption}' passed to set`);
      }
    }
  }

  if (newOptions.assign) {
    configuration = Object.assign(configuration, newConfiguration);
  } else {
    configuration = newConfiguration;
  }
}

export function get(key, fallbackValue) {
  if (!configuration) {
    sayWarning('react-global-configuration - Configuration has not been set.');
  }

  if (fallbackValue === undefined) {
    fallbackValue = null;
  }

  let value = fetchFromObject(configuration, key);

  // Fix to return null values
  if (value !== undefined) {
    return value;
  }

  if (key !== undefined) {
    value = fallbackValue;
  } else {
    sayWarning(`There is no value with the key: ${key}`);

    value = configuration;
  }

  return value;
}
