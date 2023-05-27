// ------------------------------------------------------evaluation function --------------------------------------------------------------//
// replace function
function replace_str(string) {
  let new_string = string;

  //remove the spaces
  new_string = new_string.replace(/\s/g, "");

  // replace the "\" slashes
  new_string = new_string.replace(/\\/g, "");

  // if there's sin(x), change it to Math.sin(x)
  new_string = new_string.replace(
    /sin\((.+?)\)/g,
    "Math.sin(($1 * Math.PI) / 180)"
  );

  // if there's cos(x), change it to Math.cos(x)
  new_string = new_string.replace(
    /cos\((.+?)\)/g,
    "Math.cos(($1 * Math.PI) / 180)"
  );

  // if there's tan(x), change it to Math.tan(x)
  new_string = new_string.replace(
    /tan\((.+?)\)/g,
    "Math.tan(($1 * Math.PI) / 180)"
  );

  // if there's cot(x), change it to Math.cot(x)
  new_string = new_string.replace(/cot\((.+?)\)/g, "cot(($1 * Math.PI) / 180)");

  // if there's sec(x), change it to Math.sec(x)
  new_string = new_string.replace(/sec\((.+?)\)/g, "sec(($1 * Math.PI) / 180)");

  // if there's csc(x), change it to Math.csc(x)
  new_string = new_string.replace(/csc\((.+?)\)/g, "csc(($1 * Math.PI) / 180)");

  // if there's a sin^{-1}(x), change it to asin(x)
  new_string = new_string.replace(
    /sin\^{-1}\((.+?)\)/g,
    "Math.asin(($1 * Math.PI) / 180)"
  );

  // if there's a cos^{-1}(x), change it to acos(x)
  new_string = new_string.replace(
    /cos\^{-1}\((.+?)\)/g,
    "Math.acos(($1 * Math.PI) / 180)"
  );

  // if there's a tan^{-1}(x), change it to atan(x)
  new_string = new_string.replace(
    /tan\^{-1}\((.+?)\)/g,
    "Math.atan(($1 * Math.PI) / 180)"
  );

  // if there's a cot^{-1}(x), change it to acot(x)
  new_string = new_string.replace(
    /cot\^{-1}\((.+?)\)/g,
    "acot(($1 * Math.PI) / 180)"
  );

  // if there's a sec^{-1}(x), change it to asec(x)
  new_string = new_string.replace(
    /sec\^{-1}\((.+?)\)/g,
    "asec(($1 * Math.PI) / 180)"
  );

  // if there's a csc^{-1}(x), change it to acsc(x)
  new_string = new_string.replace(
    /csc\^{-1}\((.+?)\)/g,
    "acsc(($1 * Math.PI) / 180)"
  );

  // replace the ^ with the **
  new_string = new_string.replace(/\^/g, "**");

  // if there's a sqrt{x}, make it so it changes to x**(1/2)
  new_string = new_string.replace(/sqrt{(.+?)}/g, "($1)**(1/2)");

  // if there's a sqrt[n]{x}, make it so it changes to x**(1/n)
  new_string = new_string.replace(/sqrt\[(.+?)\]{(.+?)}/g, "($2)**(1/$1)");

  // if  there's a log_x(y), make it so it changes to  log(x,y)
  new_string = new_string.replace(
    /log_(.+?)\((.+?)\)/g,
    "(Math.log($2)/Math.log($1))"
  );

  // if  there's a ln(x), make it so it changes to  log(x2.718281828459045)
  new_string = new_string.replace(
    /ln\((.+?)\)/g,
    "Math.log($1)/Math.log(2.718281828459045)"
  );

  // if there's a modulus |num|, change it to abs(num)
  new_string = new_string.replace(/\|(.+?)\|/g, "Math.abs($1)");

  // if there's a e, change it to 2.718281828459045
  new_string = new_string.replace(/e/g, "2.718281828459045");

  // if there's a pi, change it to 3.141592653589793
  new_string = new_string.replace(/pi/g, "3.141592653589793");

  // if there's a sigma(x), change it to sum(x)
  new_string = new_string.replace(/Sigma\((.+?)\)/g, "sum([$1])");

  //if there's a cdot change it to *
  new_string = new_string.replace(/cdot/g, "*");

  // if there's a frac{num}{den}, change it to num/den
  new_string = new_string.replace(/frac\{(.+?)\}\{(.+?)\}/g, "($1)/($2)");

  //if there's a %, change it to /100
  new_string = new_string.replace(/%/g, "/100");

  //remove the { and }
  new_string = new_string.replace(/\{/g, "");
  new_string = new_string.replace(/\}/g, "");

  return new_string;
}

// sum function
function sum(arguments) {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

function csc(x) {
  return 1 / Math.sin(x);
}

function sec(x) {
  return 1 / Math.cos(x);
}

function cot(x) {
  return 1 / Math.tan(x);
}

function acsc(x) {
  return Math.asin(1 / x);
}

function asec(x) {
  return Math.acos(1 / x);
}

function acot(x) {
  return Math.atan(1 / x);
}

function evaluate(mathField) {
  // get the latex of the mathfield

  let result = 0;

  let latex = mathField.latex();

  if (latex == "") {
    return "";
  }
  let eval_latex = replace_str(latex);
  // evaluate the latex
  try {
    result = Number(eval(eval_latex));
  } catch (err) {
    //ignore
  }
  return result.toFixed(3);
}
// ------------------------------------------------------evaluation function --------------------------------------------------------------//

let mathFields = []; // an array to store all mathfield instances
let counter = 1;

let mathFieldSpan_1 = document.getElementById("problem-input-1");
let MQ = MathQuill.getInterface(2); // for backcompat
let mathField_1 = MQ.MathField(mathFieldSpan_1, {
  handlers: {
    edit: function () {
      // event listener for when the mathfield is edited
      let result = evaluate(mathField_1);

      let answer_box = document.getElementById("answer-btn-1");

      if (result == "") {
        answer_box.textContent = "";
        return;
      }

      if (isNaN(result)) {
        answer_box.textContent = "NaN";
        return;
      }

      answer_box.textContent = result;
      return;
    },
  },
});
mathFields.push(mathField_1);

// this is the active input box
let active_input_box = "";

// throw id function
function throw_id() {
  let div = event.target.parentNode;

  let div_id = div.id;

  let input_box = "";

  // if the div_id contains "input-box", then get its children
  if (div_id.includes("input-row")) {
    let spans = div.children;
    input_box = spans[1].id;
  } else {
    input_box = div_id;
  }

  active_input_box = input_box;
  return;
}

// add something to tthe math field in the active input box
function add_to_math_field(value) {
  // get the last number in the active_input_box
  let lastnum = active_input_box.slice(-1);

  // the mathfield is in the lastnum index-1 of the mathFields array
  let mathField = mathFields[lastnum - 1];
  mathField.write(value);
}

// input add remove for home

function add_window() {
  counter++;

  html =
    ' <div id = "input-row-' +
    counter +
    '" class="flex w-full mb-1">\
      <button onclick = "remove_window()" id = "del-btn-' +
    counter +
    '" type="button" class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600" > <i class="bx bx-window-close text-xl"></i> </button>\
      <span onclick = "throw_id();" id = "problem-input-' +
    counter +
    '" type="text" class="w-4/5 math-field rounded-none bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-r-0" > </span>\
      <button id = "answer-btn-' +
    counter +
    '" type="button" class="w-1/5 inline-flex items-center px-3 text-sm text-gray-900 bg-gray-50 border border-l-0 border-gray-300 rounded-r-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600" >  </button>\
    </div> ';

  var parent = document.getElementById("io-box");
  parent.insertAdjacentHTML("beforeend", html);

  // generate the mathfield instance
  let mathFieldSpan = document.getElementById("problem-input-" + counter);
  let answer_btn = document.getElementById("answer-btn-" + counter);
  let MQ = MathQuill.getInterface(2); // for backcompat
  let mathField = MQ.MathField(mathFieldSpan, {
    handlers: {
      edit: function () {
        let result = evaluate(mathField);

        if (result == "") {
          answer_btn.textContent = "";
          return;
        }

        if (isNaN(result)) {
          answer_btn.textContent = "NaN";
          return;
        }

        answer_btn.textContent = result;
      },
    },
  });
  mathFields.push(mathField);

  return;
}

function remove_window() {
  // get the id of the parent of the button
  let parentDiv = event.target.parentNode.parentNode;

  if (parentDiv.id == "io-box") {
    // if the parent div is io box, don't delete it, instead clear the input
    let parent = event.target.parentNode;
    // remove the input
    parent.remove();
    return;
  }

  // if the parent div is not io box, delete it
  parentDiv.remove();
  return;
}

// get the ids of all buttons
let squared_btn = document.getElementById("squared-btn");
let root_btn = document.getElementById("root-btn");
let log_yx_btn = document.getElementById("log-yx-btn");
let left_parenthesis_btn = document.getElementById("left-parenthesis-btn");

let x_power_y_btn = document.getElementById("x-power-y-btn");
let y_root_x_btn = document.getElementById("y-root-x-btn");
let ln_btn = document.getElementById("ln-btn");
let right_parenthesis_btn = document.getElementById("right-parenthesis-btn");

let modulus_btn = document.getElementById("modulus-btn");
let pi_btn = document.getElementById("pi-btn");
let e_btn = document.getElementById("e-btn");
let sigma_btn = document.getElementById("sigma-btn");

let sin_btn = document.getElementById("sin-btn");
let csc_btn = document.getElementById("csc-btn");
let sin_inverse_btn = document.getElementById("sin-inverse-btn");
let csc_inverse_btn = document.getElementById("csc-inverse-btn");

let cos_btn = document.getElementById("cos-btn");
let sec_btn = document.getElementById("sec-btn");
let cos_inverse_btn = document.getElementById("cos-inverse-btn");
let sec_inverse_btn = document.getElementById("sec-inverse-btn");

let tan_btn = document.getElementById("tan-btn");
let cot_btn = document.getElementById("cot-btn");
let tan_inverse_btn = document.getElementById("tan-inverse-btn");
let cot_inverse_btn = document.getElementById("cot-inverse-btn");

// numpad buttons
let seven_btn = document.getElementById("seven-btn");
let four_btn = document.getElementById("four-btn");
let one_btn = document.getElementById("one-btn");
let zero_btn = document.getElementById("zero-btn");

let eight_btn = document.getElementById("eight-btn");
let five_btn = document.getElementById("five-btn");
let two_btn = document.getElementById("two-btn");
let decimal_btn = document.getElementById("decimal-btn");

let nine_btn = document.getElementById("nine-btn");
let six_btn = document.getElementById("six-btn");
let three_btn = document.getElementById("three-btn");
let ans_btn = document.getElementById("ans-btn");

let divide_btn = document.getElementById("divide-btn");
let multiply_btn = document.getElementById("multiply-btn");
let subtract_btn = document.getElementById("subtract-btn");
let add_btn = document.getElementById("add-btn");

// other buttons
let percentage_btn = document.getElementById("percentage-btn");
let clear_btn = document.getElementById("clear-btn");
let ac_btn = document.getElementById("ac-btn");
let enter_btn = document.getElementById("enter-btn");

// clear active input box mathfield
function clear_active_input_box() {
  // get the last number in the active_input_box
  let lastnum = active_input_box.slice(-1);

  // the mathfield is in the lastnum index-1 of the mathFields array
  let mathField = mathFields[lastnum - 1];
  mathField.latex("");
}

// add event listeners to all the buttons

squared_btn.addEventListener("click", function () {
  add_to_math_field("\\^2");
});

root_btn.addEventListener("click", function () {
  add_to_math_field("\\sqrt{}");
});

log_yx_btn.addEventListener("click", function () {
  add_to_math_field("\\log_{}({})");
});

left_parenthesis_btn.addEventListener("click", function () {
  add_to_math_field("(");
});

x_power_y_btn.addEventListener("click", function () {
  add_to_math_field("^{}");
});

y_root_x_btn.addEventListener("click", function () {
  add_to_math_field("\\sqrt[]{}");
});

ln_btn.addEventListener("click", function () {
  add_to_math_field("\\ln({})");
});

right_parenthesis_btn.addEventListener("click", function () {
  add_to_math_field(")");
});

modulus_btn.addEventListener("click", function () {
  add_to_math_field("|{ }|");
});

pi_btn.addEventListener("click", function () {
  add_to_math_field("\\pi");
});

e_btn.addEventListener("click", function () {
  add_to_math_field("e");
});

sigma_btn.addEventListener("click", function () {
  add_to_math_field("\\Sigma({})");
});

sin_btn.addEventListener("click", function () {
  add_to_math_field("\\sin({})");
});

csc_btn.addEventListener("click", function () {
  add_to_math_field("\\csc({})");
});

sin_inverse_btn.addEventListener("click", function () {
  add_to_math_field("\\sin^{-1}({})");
});

csc_inverse_btn.addEventListener("click", function () {
  add_to_math_field("\\csc^{-1}({})");
});

cos_btn.addEventListener("click", function () {
  add_to_math_field("\\cos({})");
});

sec_btn.addEventListener("click", function () {
  add_to_math_field("\\sec({})");
});

cos_inverse_btn.addEventListener("click", function () {
  add_to_math_field("\\cos^{-1}({})");
});

sec_inverse_btn.addEventListener("click", function () {
  add_to_math_field("\\sec^{-1}({})");
});

tan_btn.addEventListener("click", function () {
  add_to_math_field("\\tan({})");
});

cot_btn.addEventListener("click", function () {
  add_to_math_field("\\cot({})");
});

tan_inverse_btn.addEventListener("click", function () {
  add_to_math_field("\\tan^{-1}({})");
});

cot_inverse_btn.addEventListener("click", function () {
  add_to_math_field("\\cot^{-1}({})");
});

seven_btn.addEventListener("click", function () {
  add_to_math_field("7");
});

four_btn.addEventListener("click", function () {
  add_to_math_field("4");
});

one_btn.addEventListener("click", function () {
  add_to_math_field("1");
});

zero_btn.addEventListener("click", function () {
  add_to_math_field("0");
});

eight_btn.addEventListener("click", function () {
  add_to_math_field("8");
});

five_btn.addEventListener("click", function () {
  add_to_math_field("5");
});

two_btn.addEventListener("click", function () {
  add_to_math_field("2");
});

decimal_btn.addEventListener("click", function () {
  add_to_math_field(".");
});

nine_btn.addEventListener("click", function () {
  add_to_math_field("9");
});

six_btn.addEventListener("click", function () {
  add_to_math_field("6");
});

three_btn.addEventListener("click", function () {
  add_to_math_field("3");
});

// answer button stores the last calculated ans

// ans_btn.addEventListener("click", function () {
//   add_to_math_field("\\ans");
// });

divide_btn.addEventListener("click", function () {
  add_to_math_field("\\frac{}{}");
});

multiply_btn.addEventListener("click", function () {
  add_to_math_field("\\cdot");
});

subtract_btn.addEventListener("click", function () {
  add_to_math_field("-");
});

add_btn.addEventListener("click", function () {
  add_to_math_field("+");
});

percentage_btn.addEventListener("click", function () {
  add_to_math_field("\\%");
});

clear_btn.addEventListener("click", function () {
  // clears the active input box math field
  clear_active_input_box();
});

ac_btn.addEventListener("click", function () {
  // clears all the input boxes
  for (let i = 0; i < mathFields.length; i++) {
    mathFields[i].latex("");
  }
});
