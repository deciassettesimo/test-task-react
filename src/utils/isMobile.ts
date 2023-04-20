export default function isMobile() {
  return (
    isMobile.android() ||
    isMobile.blackberry() ||
    isMobile.ios() ||
    isMobile.opera() ||
    isMobile.windows()
  );
}
isMobile.android = () => navigator.userAgent.match(/Android/i);
isMobile.blackberry = () => navigator.userAgent.match(/BlackBerry/i);
isMobile.ios = () => navigator.userAgent.match(/iPhone|iPad|iPod/i);
isMobile.opera = () => navigator.userAgent.match(/Opera Mini/i);
isMobile.windows = () => navigator.userAgent.match(/IEMobile/i);
