let stat_counterr = 1;

// tabs
const tabs = document.querySelectorAll(".tabs li");
const tabContentBoxes = document.querySelectorAll("#tab-content > div");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("is-active"));
    tab.classList.add("is-active");

    const target = tab.dataset.target;
    // console.log(target);
    tabContentBoxes.forEach((box) => {
      if (box.getAttribute("id") === target) {
        box.classList.remove("is-hidden");
      } else {
        box.classList.add("is-hidden");
      }
    });
  });
});

// desmos calculator api
var elt = document.getElementById("calculator");
var calculator = Desmos.GraphingCalculator(elt);
calculator.setExpression({ id: "graph1", latex: "y=x^2" });

//mathjax script
MathJax = {
  tex: {
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"],
    ],
  },
  svg: {
    fontCache: "global",
  },
};

// input add remove for stats

function add_windoww() {
  stat_counterr += 1;

  html =
    '<tr id = "row-' +
    stat_counterr +
    '"class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">\
            <td class="px-3 py-3">\
              <input type="text" id="y' +
    stat_counterr +
    '" class="block w-full py-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">\
            </td>\
           <td class="px-3 py-3">\
              <input type="text" id="x' +
    stat_counterr +
    '" class="block w-full py-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">\
           </td>\
           <td class="px-3 py-3">\
              <button onclick = "remove_windoww()" type="button" id = "add-row" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1 my-1 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">- </button>\
            </td>\
          </tr>';

  var parent = document.getElementById("table-body");
  parent.insertAdjacentHTML("beforeend", html);
}

function remove_windoww() {
  var parent = document.getElementById("table-of-data");

  // get the id of the parent row of which the cross button is pressed
  let parentDiv = event.target.parentNode.parentNode;

  parentDiv.remove();
  stat_counterr--;
  return;
}
