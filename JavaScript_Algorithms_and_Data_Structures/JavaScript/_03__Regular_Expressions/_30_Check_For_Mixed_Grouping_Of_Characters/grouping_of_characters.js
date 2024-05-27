

let myString = "Eleanor Roosevelt";
let myRegex = /(?=^(Franklin|Eleanor) \w*.*Roosevelt$)/g;
let result = myRegex.test(myString);


// Исправьте регулярное выражение так, чтобы оно проверяло имена 
// Franklin Roosevelt или Eleanor Roosevelt в строке myString с 
// учетом регистра, и оно должно было делать уступки для отчества.

// tests
// Ваше регулярное выражение myRegex должно вернуться true для строкиFranklin D. Roosevelt
// Ожидающий :Ваше регулярное выражение myRegex должно вернуться true для строкиEleanor Roosevelt
// Ожидающий :Ваше регулярное выражение myRegex должно вернуться false для строкиFranklin Roosevelt
// Ожидающий :Ваше регулярное выражение myRegex должно вернуться false для строкиFrank Roosevelt
// Ожидающий :Ваше регулярное выражение myRegex должно вернуться false для строкиFranklinRoosevelt
// Ожидающий :Ваше регулярное выражение myRegex должно вернуться false для строкиEleanorRoosevelt
// Ожидающий :Вы должны использовать .test()для проверки регулярного выражения.
// Ожидающий :Ваш результат должен вернуться true.

