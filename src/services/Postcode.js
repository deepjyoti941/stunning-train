import axios from 'axios';

const API_URL = 'https://services.postcodeanywhere.co.uk/CapturePlus/Interactive/Find/v2.00/json3ex.ws';
const API_RESULT_URL = 'https://services.postcodeanywhere.co.uk/CapturePlus/Interactive/RetrieveFormatted/v2.00/json3ex.ws';

const PostCode = {
  getAddress: (searchItem) => {
    const params = `Key=YF42-AW94-RP61-CU84&Country=GBR&SearchTerm=${searchItem}&LanguagePreference=en&LastId=&SearchFor=Everything&$block=true&$cache=true`;
    return axios.get(`${API_URL}?${params}`);
  },

  setAddress: (addressIdParam) => {
    const params = `Key=YF42-AW94-RP61-CU84&Id=${addressIdParam}&$cache=true&$block=true&LastId=&SearchTerm=&field1format={PAFAddressKey}`;
    return axios.get(`${API_RESULT_URL}?${params}`);
  },

  formattAddress: (addressParam) => {
    console.log(addressParam);
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

    console.log(addressArr);
    // Create our formatted string and populate our model Object.
    if (addressArr.length > 0) {
      finalAddresObj.formattedAddress = addressArr.join('<br />');
    } else {
      finalAddresObj.formattedAddress = '';
    }
    console.log(finalAddresObj);
    return finalAddresObj;
  }
};

export default PostCode;
