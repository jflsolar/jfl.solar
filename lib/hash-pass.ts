import CryptoJS from "crypto-js";

export const hashPassword = (text: string, salt?: string) => {
  const lsalt = salt || CryptoJS.lib.WordArray.random(128 / 8).toString();

  return CryptoJS.PBKDF2(text, lsalt, { keySize: 256 / 32 }).toString();
};

// remove above version after migration to 2, and remove 2 here after migration
export const hashPassword2 = (text: string, salt?: string) => {
  const lsalt = salt || CryptoJS.lib.WordArray.random(128 / 8).toString();

  return [
    CryptoJS.PBKDF2(text, lsalt, { keySize: 256 / 32 }).toString(),
    lsalt,
  ];
};
