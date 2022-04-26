import CryptoJS from "crypto-js";

export const encrypt = (data, secret) => {
  var ciphertext = CryptoJS.AES.encrypt(data, secret).toString();

  return ciphertext;
};

export const decrypt = (data, secret) => {
  var bytes = CryptoJS.AES.decrypt(data, secret);
  var originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
};
