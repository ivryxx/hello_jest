module.exports = {
  isEmail: (value) => {
    const [localPart, domain, ...etc] = value.split("@");
    // value가 이메일 형식에 맞으면 true, 형식에 맞지 않으면 false를 return 하도록 구현해보세요
    if (!localPart || !domain || etc.length) {
      return false;
    } else if (value.includes(" ")) {
      return false;
    } else if (value[0] === "-") {
      return false;
    }

    for (const word of localPart.split("")) {
      // if (!/^[0-9a-z+_-]+$/gi.test(word)) {
      //   return false;
       const allowedwords = [
         "a",
         "b",
         "c",
         "d",
         "e",
         "f",
         "g",
         "h",
         "i",
         "j",
         "k",
         "l",
         "m",
         "n",
         "o",
         "p",
         "q",
         "r",
         "s",
         "t",
         "u",
         "v",
         "w",
         "x",
         "y",
         "z",
         "A",
         "B",
         "C",
         "D",
         "E",
         "F",
         "G",
         "H",
         "I",
         "J",
         "K",
         "L",
         "M",
         "N",
         "O",
         "P",
         "Q",
         "R",
         "S",
         "T",
         "U",
         "V",
         "W",
         "X",
         "Y",
         "Z",
         "1",
         "2",
         "3",
         "4",
         "5",
         "6",
         "7",
         "8",
         "9",
         "0",
         "+",
         "-",
         "_",
       ];
       if (allowedwords.includes(word)) {
         return false;
       }
      const allowedwords = [
        "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
        "1","2","3","4","5","6","7","8","9","0","+","-","_"];
      if (allowedwords.includes(word)) {
        return false;
      }
    }

    return true;
  },
};
