import axios from 'axios';

class PostcodeService {
  static getAddress(configs, searchItem) {
    console.log('configs, searchItem =>>', configs, searchItem);

    const { apiUrl, key, country } = configs;

    const params = `Key=${key}&Country=${country}&SearchTerm=${searchItem}&LanguagePreference=en&LastId=&SearchFor=Everything&$block=true&$cache=true`;
    return axios.get(`${apiUrl}?${params}`);
  }

  static setAddress(configs, addressIdParam) {
    const { apiResultUrl, key } = configs;
    const params = `Key=${key}&Id=${addressIdParam}&$cache=true&$block=true&LastId=&SearchTerm=&field1format={PAFAddressKey}`;
    return axios.get(`${apiResultUrl}?${params}`);
  }

  static formattAddress(addressParam) {
    const keyNamesArr = [
      'Field1',
      'BuildingName',
      'BuildingNumber',
      'SubBuilding',
      'City',
      'Street',
      'PostalCode',
      'CountryName'
    ];
    let i = 0;
    const keyNameArrLength = keyNamesArr.length;
    const finalAddresObj = {};
    let tempObjProperty = null;
    const addressArr = [];

    for (i; i < keyNameArrLength; i += 1) {
      tempObjProperty = addressParam[keyNamesArr[i]];
      finalAddresObj[keyNamesArr[i]] = tempObjProperty;
      if (
        keyNamesArr[i] !== keyNamesArr[0]
        && tempObjProperty !== ''
        && keyNamesArr[i] !== 'Type'
      ) {
        if (keyNamesArr[i] !== keyNamesArr[10]) {
          addressArr.push(tempObjProperty);
        }
      }
    }

    // Create our formatted string and populate our model Object.
    if (addressArr.length > 0) {
      finalAddresObj.formattedAddress = addressArr.join('<br />');
    } else {
      finalAddresObj.formattedAddress = '';
    }
    return finalAddresObj;
  }
}

export default PostcodeService;
