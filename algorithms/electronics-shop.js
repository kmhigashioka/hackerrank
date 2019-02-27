/*
 * Complete the getMoneySpent function below.
 */
function getMoneySpent(keyboards, drives, b) {
  return keyboards.reduce((a, cv) =>
    Math.max(a, ...drives.map(usb => usb + cv).filter(t => b >= t))
  , -1);
}
