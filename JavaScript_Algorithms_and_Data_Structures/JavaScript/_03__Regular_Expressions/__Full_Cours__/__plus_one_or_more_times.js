

   'a'.match(/a+/g); // ["a"]
   'aa'.match(/a+/g); // ["aa"]
   'aaa'.match(/a+/g); // ["aaa"]
   'aaaa'.match(/a+/g); // ["aaaa"]
   'abab'.match(/a+/g); // ["a", "a"]
   'abab'.match(/a+/g); // ["a", "a"]
   console.log('a a abc bca aa'.match(/a+/g)); // ["a", "a", "a", "a", "aa"]
   