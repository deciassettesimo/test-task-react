export default function regExpEscape(text?: string) {
  return text && text.replace(/[-[\]{}()*+?.,\\^$|#]/gi, '\\$&');
}
