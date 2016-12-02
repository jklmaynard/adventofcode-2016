var keypad, alpha_num_keypad, code, codeCrack;

keypad = {
  '1': {'R':2, 'D':4},
  '2': {'R':3, 'L':1, 'D':5},
  '3': {'L':2, 'D':6},
  '4': {'U':1, 'R':5, 'D':7},
  '5': {'U':2, 'L':4, 'R':6, 'D':8},
  '6': {'L':5, 'U':3, 'D':9},
  '7': {'U':4, 'R':8},
  '8': {'L':7, 'U':5, 'R':9},
  '9': {'L':8, 'U':6}
}

alpha_num_keypad = {
  '1': {'D':'3'},
  '2': {'R':'3', 'D':'6'},
  '3': {'U':'1', 'L':'2', 'D':'7', 'R':'4'},
  '4': {'L':'3', 'D':'8'},
  '5': {'R':'6'},
  '6': {'L':'5', 'U':'2', 'R':'7', 'D':'A'},
  '7': {'L':'6', 'U':'3', 'R':'8', 'D':'B'},
  '8': {'L':'7', 'U':'4', 'R':'9', 'D':'C'},
  '9': {'L':'8'},
  'A': {'U':'6', 'R':'B'},
  'B': {'L':'A', 'U':'7', 'R':'C', 'D':'D'},
  'C': {'L':'B', 'U':'8'},
  'D': {'U':'B'}
}

//e.g., num1 = codeCrack(input1, keypad, 5) <-- part 1
//e.g., num3 = codeCrack(input3, alpha_num_keypad, num2) <-- part2
codeCrack = function(key, obj, num) {
  var keyArray = key.split('');
  for (var i = 0; i < keyArray.length; i++) {
    index = keyArray[i];
    if (obj[num][index] !== undefined) {
      num = obj[num][index];
    } else {
      num = num;
    }
  }
  console.log(num);
  return num;
};
