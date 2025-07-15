export default function shortenText(text, startFrom = 0, wordCount = 30) {
  return text.split(' ').slice(startFrom, wordCount).join(' ');
}
