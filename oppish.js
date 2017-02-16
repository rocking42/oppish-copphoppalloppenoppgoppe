// First group looks for any two letter words containing a single quotation
// Second group looks for words with a single quotation as their second last character
// Third group looks for any one or two character words
// Fourth group is a negative lookahead for all double consanants and vowels
// Fifth group matches all remaining letters
module.exports = (word) => {
	return word.replace(/(\b[a-z]['][a-z]\b)|(['][a-z])|(\b[a-zA-Z]{1,2}\b)|(?!(bb|cc|dd|ff|gg|hh|jj|kk|ll|mm|nn|pp|qq|rr|ss|tt|vv|ww|xx|yy|zz|a|e|i|o|u))([a-zA-Z])/gi, `$2$5opp$1$3`);
};
