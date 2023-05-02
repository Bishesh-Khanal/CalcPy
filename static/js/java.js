// tabs 
const tabs = document.querySelectorAll('.tabs li');
const tabContentBoxes = document.querySelectorAll('#tab-content > div');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(item => item.classList.remove('is-active'));
    tab.classList.add('is-active');

    const target = tab.dataset.target;
    // console.log(target);
    tabContentBoxes.forEach(box => {
      if (box.getAttribute('id') === target) {
        box.classList.remove('is-hidden');
      } else {
        box.classList.add('is-hidden');
      }
    })
  })
})

// desmos calculator api
var elt = document.getElementById('calculator');
var calculator = Desmos.GraphingCalculator(elt);
calculator.setExpression({ id: 'graph1', latex: 'y=x^2' });


//mathjax script 
MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']]
  },
  svg: {
    fontCache: 'global'
  }
};


// input add remove for home
var counter = 1; 
 
function add_window() {
    counter++;
    
    html = '<div class = "input-thingy" id = "input_thingy' + counter +'">\
    <label class="input-group mt-2">\
        <input type="text" placeholder="" class="input input-bordered w-full" />\
        <button class = "btn" onclick = "remove_window();" id = "del_btn_'+counter+'" value = "' + counter +'">X</button>\
    </label>\
    </div>';

    var parent = document.getElementById("io-box");
    parent.insertAdjacentHTML('beforeend', html);
}

function remove_window() {
    var parent = document.getElementById("io-box");

    // get value of the button clicked
    var btn_value = event.target.value;
    if (btn_value != 1) {
      var child = document.getElementById("input_thingy" + btn_value);
    parent.removeChild(child);
    }

    return;
}


// input add remove for stats

var counterr = 1;

function add_windoww() {

    counterr++;

    html ='<tr class = "row-'+counterr+'" id = "row-' +counterr+ '" >\
      <th></th>\
      <td><input type="text" placeholder="..." class="input input-bordered input-sm w-full max-w-xs" /></td>\
      <td><input type="text" placeholder="..." class="input input-bordered input-sm w-full max-w-xs" /></td>\
      <td><button class="btn btn-sm btn-outline btn-error" value = "'+counterr+'" onclick = "remove_windoww()" id = "del-btn-'+counterr+'">-</button></td>\
      <th></th>\
    </tr>'

    var parent = document.getElementById("table-of-data");
    parent.insertAdjacentHTML('beforeend', html);
}

function remove_windoww() {

  var parent = document.getElementById("table-of-data");

  // get value of button clicked
  var btn_value = event.target.value;
  if (btn_value != 1) {
    var child = document.getElementById("row-" + btn_value);
    parent.removeChild(child);
  }

  return;
}









