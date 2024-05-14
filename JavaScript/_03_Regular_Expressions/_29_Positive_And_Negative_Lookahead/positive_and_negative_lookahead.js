// Используйте предварительный просмотр 
// для pwRegexсопоставления паролей 
// длиной более 5 символов и состоящих из
// двух последовательных цифр.
// !!!
let sampleWord = "astronaut";
let pwRegex = /(?=\w{5,})(?=\D+\d{2})/g; 
let result = pwRegex.test(sampleWord);
// !!!
