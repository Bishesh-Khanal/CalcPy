
// SIMULTANEOUS EQUATIONS
let simul_equations_box = document.getElementById('simul-eqns-box');
let simul_answer_box = document.getElementById('simul-answer-box');

// whenever the user clicks on any radio button, get what it is 

let simul_radio_btns = document.querySelectorAll("input[name = 'simul-inline-radio-group']");





let generate_simul_form = () => {
    let simul_selected = document.querySelector("input[name = 'simul-inline-radio-group']:checked");
    let val = simul_selected.value;

    // generate the appropriate form

    if (val == '1-val') {
        // generate 1 variable form 
        simul_answer_box.innerHTML = '';
        simul_equations_box.innerHTML = '';

        form_html = '<div id = "1-var-eqns" class = "grid rows gap-2">\
                    <div id="1-var-first-eq">\
                        <input type="text" placeholder="" class="input input-bordered p-0.5 input-sm w-12" id = "var-1-a1-value"/> \
                        <span class="text-sm variable">x</span>\
                        <span class="text-sm mx-2">=</span>\
                        <input type="text" placeholder="" class="input input-bordered p-0.5 input-sm w-12" id = "var-1-k1-value"/>\
                    </div>\
                </div>';
            
        ans_html = ' <div id = "1-val-ans" class="max-w-sm px-2 py-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 grid">\
                        <div class="values m-auto">\
                            <span>\
                                <span class="text-base variable">x</span>\
                                <span class="text-base">=</span>\
                                <span class="text-base" id = "var-1-x-ans">0</span>\
                            </span>\
                        </div>\
                    </div>';

        simul_equations_box.innerHTML += form_html;
        simul_answer_box.innerHTML += ans_html;
        return;
    }


    if (val == '2-val') {
        // generate 2 variable form 
        simul_answer_box.innerHTML = '';
        simul_equations_box.innerHTML = '';


        form_html = '<div id = "2-var-eqns" class = "grid rows gap-2">\
                    <div id="2-var-first-eq ">\
                        <input type="text" placeholder="" class="input input-bordered p-0.5 input-sm w-12" id = "var-2-a1-value"/> \
                        <span class="text-sm variable">x</span>\
                        <span class="text-sm mx-2">+</span>\
                        <input type="text" placeholder="" class="input input-bordered p-0.5 input-sm w-12" id = "var-2-b1-value"/> \
                        <span class="text-sm variable">y</span>\
                        <span class="text-sm mx-2">=</span>\
                        <input type="text" placeholder="" class="input input-bordered p-0.5 input-sm w-12" id = "var-2-k1-value"/>\
                    </div>\
                    <div id="2-var-second-eq">\
                        <input type="text" placeholder="" class="input input-bordered p-0.5 input-sm w-12" id = "var-2-a2-value"/> \
                        <span class="text-sm variable">x</span>\
                        <span class="text-sm mx-2">+</span>\
                        <input type="text" placeholder="" class="input input-bordered p-0.5 input-sm w-12" id = "var-2-b2-value"/>\
                        <span class="text-sm variable">y</span>\
                        <span class="text-sm mx-2">=</span>\
                        <input type="text" placeholder="" class="input input-bordered p-0.5 input-sm w-12" id = "var-2-k2-value"/>\
                    </div>\
                </div>';

            ans_html = ' <div id = "2-val-ans" class="max-w-sm px-2 py-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 grid">\
                            <div class="values m-auto">\
                                <span>\
                                    <span class="text-base variable">x</span>\
                                    <span class="text-base">=</span>\
                                    <span class="text-base" id = "var-2-x-ans">0</span>\
                                </span>\
                                <br>\
                                <span>\
                                    <span class="text-base variable">y</span>\
                                    <span class="text-base">=</span>\
                                    <span class="text-base" id = "var-2-y-ans">0</span>\
                                </span>\
                            </div>\
                        </div>';

        simul_equations_box.innerHTML += form_html;
        simul_answer_box.innerHTML += ans_html;
        return;
    }

    if (val == '3-val') {
        // generate 3 variable form 
        simul_answer_box.innerHTML = '';
        simul_equations_box.innerHTML = '';

        form_html = '<div id = "3-var-eqns" class = "grid rows gap-2">\
                    <div id="3-var-first-eq ">\
                        <input type="text" placeholder="" class="input input-bordered p-0.5 input-sm w-12" id = "var-3-a1-value"/> \
                        <span class="text-sm variable">x</span>\
                        <span class="text-sm mx-2">+</span>\
                        <input type="text" placeholder="" class="input input-bordered p-0.5 input-sm w-12" id = "var-3-b1-value"/>\
                        <span class="text-sm variable">y</span>\
                        <span class="text-sm mx-2">+</span>\
                        <input type="text" placeholder="" class="input input-bordered p-0.5 input-sm w-12"id = "var-3-c1-value"/>\
                        <span class="text-sm variable">z</span>\
                        <span class="text-sm mx-2">=</span>\
                        <input type="text" placeholder="" class="input input-bordered p-0.5 input-sm w-12" id = "var-3-k1-value"/>\
                    </div>\
                    <div id="3-var-second-eq">\
                        <input type="text" placeholder="" class="input input-bordered p-0.5 input-sm w-12" id = "var-3-a2-value"/> \
                        <span class="text-sm variable">x</span>\
                        <span class="text-sm mx-2">+</span>\
                        <input type="text" placeholder="" class="input input-bordered p-0.5 input-sm w-12" id = "var-3-b2-value"/>\
                        <span class="text-sm variable">y</span>\
                        <span class="text-sm mx-2">+</span>\
                        <input type="text" placeholder="" class="input input-bordered p-0.5 input-sm w-12" id = "var-3-c2-value"/>\
                        <span class="text-sm variable">z</span>\
                        <span class="text-sm mx-2">=</span>\
                        <input type="text" placeholder="" class="input input-bordered p-0.5 input-sm w-12" id = "var-3-k2-value"/>\
                    </div>\
                    <div id="3-var-third-eq">\
                        <input type="text" placeholder="" class="input input-bordered p-0.5 input-sm w-12" id = "var-3-a3-value"/>\
                        <span class="text-sm variable">x</span>\
                        <span class="text-sm mx-2">+</span>\
                        <input type="text" placeholder="" class="input input-bordered p-0.5 input-sm w-12" id = "var-3-b3-value"/>\
                        <span class="text-sm variable">y</span>\
                        <span class="text-sm mx-2">+</span>\
                        <input type="text" placeholder="" class="input input-bordered p-0.5 input-sm w-12" id = "var-3-c3-value"/>\
                        <span class="text-sm variable">z</span>\
                        <span class="text-sm mx-2">=</span>\
                        <input type="text" placeholder="" class="input input-bordered p-0.5 input-sm w-12" id = "var-3-k3-value"/>\
                    </div>\
                </div>';
        
            ans_html = ' <div id = "3-val-ans" class="max-w-sm px-2 py-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 grid">\
                            <div class="values m-auto">\
                                <span>\
                                    <span class="text-base variable">x</span>\
                                    <span class="text-base">=</span>\
                                    <span class="text-base" id = "var-3-x-ans">0</span>\
                                </span>\
                                <br>\
                                <span>\
                                    <span class="text-base variable">y</span>\
                                    <span class="text-base">=</span>\
                                    <span class="text-base" id = "var-3-y-ans">0</span>\
                                </span>\
                                <br>\
                                <span>\
                                    <span class="text-base variable">z</span>\
                                    <span class="text-base">=</span>\
                                    <span class="text-base" id = "var-3-z-ans">0</span>\
                                </span>\
                            </div>\
                        </div>';
        
        simul_answer_box.innerHTML += ans_html;
        simul_equations_box.innerHTML += form_html;
        return;
    }

    if (val == '4-val') {
        // generate 4 variable form 
        simul_answer_box.innerHTML = '';
        simul_equations_box.innerHTML = '';

        form_html = '<div id = "4-var-eqns" class = "grid rows gap-2">\
                    <div id="4-var-first-eq ">\
                        <input type="text" placeholder="" class="input input-bordered p-0.5 input-sm w-12" id = "var-4-a1-value"/> \
                        <span class="text-sm variable">x</span>\
                        <span class="text-sm mx-2">+</span>\
                        <input type="text" placeholder="" class="input input-bordered p-0.5 input-sm w-12" id = "var-4-b1-value"/>\
                        <span class="text-sm variable">y</span>\
                        <span class="text-sm mx-2">+</span>\
                        <input type="text" placeholder="" class="input input-bordered p-0.5 input-sm w-12" id = "var-4-c1-value"/>\
                        <span class="text-sm variable">z</span>\
                        <span class="text-sm mx-2">+</span>\
                        <input type="text" placeholder="" class="input input-bordered p-0.5 input-sm w-12" id = "var-4-d1-value"/>\
                        <span class="text-sm variable">w</span>\
                        <span class="text-sm mx-2">=</span>\
                        <input type="text" placeholder="" class="input input-bordered p-0.5 input-sm w-12" id = "var-4-k1-value"/>\
                    </div>\
                    <div id="4-var-second-eq">\
                        <input type="text" placeholder="" class="input input-bordered p-0.5 input-sm w-12" id = "var-4-a2-value"/>\
                        <span class="text-sm variable">x</span>\
                        <span class="text-sm mx-2">+</span>\
                        <input type="text" placeholder="" class="input input-bordered p-0.5 input-sm w-12" id = "var-4-b2-value"/>\
                        <span class="text-sm variable">y</span>\
                        <span class="text-sm mx-2">+</span>\
                        <input type="text" placeholder="" class="input input-bordered p-0.5 input-sm w-12" id = "var-4-c2-value"/>\
                        <span class="text-sm variable">z</span>\
                        <span class="text-sm mx-2">+</span>\
                        <input type="text" placeholder="" class="input input-bordered p-0.5 input-sm w-12" id = "var-4-d2-value"/>\
                        <span class="text-sm variable">w</span>\
                        <span class="text-sm mx-2">=</span>\
                        <input type="text" placeholder="" class="input input-bordered p-0.5 input-sm w-12" id = "var-4-k2-value"/>\
                    </div>\
                    <div id="4-var-third-eq">\
                        <input type="text" placeholder="" class="input input-bordered p-0.5 input-sm w-12" id = "var-4-a3-value"/> \
                        <span class="text-sm variable">x</span>\
                        <span class="text-sm mx-2">+</span>\
                        <input type="text" placeholder="" class="input input-bordered p-0.5 input-sm w-12" id = "var-4-b3-value"/>\
                        <span class="text-sm variable">y</span>\
                        <span class="text-sm mx-2">+</span>\
                        <input type="text" placeholder="" class="input input-bordered p-0.5 input-sm w-12" id = "var-4-c3-value"/>\
                        <span class="text-sm variable">z</span>\
                        <span class="text-sm mx-2">+</span>\
                        <input type="text" placeholder="" class="input input-bordered p-0.5 input-sm w-12" id = "var-4-d3-value"/>\
                        <span class="text-sm variable">w</span>\
                        <span class="text-sm mx-2">=</span>\
                        <input type="text" placeholder="" class="input input-bordered p-0.5 input-sm w-12" id = "var-4-k3-value"/>\
                    </div>\
                    <div id="4-var-fourth-eq">\
                        <input type="text" placeholder="" class="input input-bordered p-0.5 input-sm w-12" id = "var-4-a4-value"/> \
                        <span class="text-sm variable">x</span>\
                        <span class="text-sm mx-2">+</span>\
                        <input type="text" placeholder="" class="input input-bordered p-0.5 input-sm w-12" id = "var-4-b4-value"/>\
                        <span class="text-sm variable">y</span>\
                        <span class="text-sm mx-2">+</span>\
                        <input type="text" placeholder="" class="input input-bordered p-0.5 input-sm w-12" id = "var-4-c4-value"/> \
                        <span class="text-sm variable">z</span>\
                        <span class="text-sm mx-2">+</span>\
                        <input type="text" placeholder="" class="input input-bordered p-0.5 input-sm w-12" id = "var-4-d4-value"/>\
                        <span class="text-sm variable">w</span>\
                        <span class="text-sm mx-2">=</span>\
                        <input type="text" placeholder="" class="input input-bordered p-0.5 input-sm w-12" id = "k4-value"/>\
                    </div>\
                </div>';

        ans_html = ' <div id = "4-val-ans" class="max-w-sm px-2 py-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 grid">\
                        <div class="values m-auto">\
                            <span>\
                                <span class="text-base variable">x</span>\
                                <span class="text-base">=</span>\
                                <span class="text-base" id = "var-4-x-ans">0</span>\
                            </span>\
                            <br>\
                            <span>\
                                <span class="text-base variable">y</span>\
                                <span class="text-base">=</span>\
                                <span class="text-base" id = "var-4-y-ans">0</span>\
                            </span>\
                            <br>\
                            <span>\
                                <span class="text-base variable">z</span>\
                                <span class="text-base">=</span>\
                                <span class="text-base" id = "var-4-z-ans">0</span>\
                            </span>\
                            <br>\
                            <span>\
                                <span class="text-base variable">w</span>\
                                <span class="text-base">=</span>\
                                <span class="text-base" id = "w-ans">0</span>\
                            </span>\
                        </div>\
                    </div>';

        
        simul_answer_box.innerHTML += ans_html;
        simul_equations_box.innerHTML += form_html;
        return;
    }

    return;
}

simul_radio_btns.forEach( simul_radioBtn => {
    simul_radioBtn.addEventListener('change', generate_simul_form);
});




// SIMULTANEOUS EQUTIONS SOLVING!

// number validator 
function number_validator(number) {
    if (isNaN(number)) return false;
    number = Number(number);
    return true; 
}

//toast function
function toast_generator (message) {
    var html = '';
    var html = '<div id="toast-bottom-right" class="fixed flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow right-5 bottom-5 dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800" role="alert"> \
                <div class="text-sm font-normal text-rose-400 "> <i class="bx bxs-radiation text-rose-600"></i> ' + message + ' </div>\
                </div>'

    return html;
} 


// first we need to know what the varible number is 

// on the press of the solve button we need to get the values of the variable number 

let simul_calc_btn = document.getElementById('simul-calc-btn');

simul_calc_btn.addEventListener('click', function() {

    // get the value of the variable number
    let simul_var_num = document.querySelector("input[name = 'simul-inline-radio-group']:checked").value;

    if (simul_var_num == '1-val'){

        // get the values of the equation
        let a1 = document.querySelector('#var-1-a1-value').value;
        let k1 = document.querySelector('#var-1-k1-value').value;
        let x = document.querySelector('#var-1-x-ans');

        // clear the answer box
        x.innerHTML = '';

        // validate the values
        if (!number_validator(a1) || !number_validator(k1)){
            let toast = toast_generator('Please enter valid numbers');
            document.body.innerHTML += toast;
            
            setTimeout(function() { document.getElementById('toast-bottom-right').remove(); }, 3000);
            return;
        }

        // calculate the answer
        let ans = (k1/a1).toFixed(2);

        if (!number_validator(ans)) x.innerHTML = 'NaN';
        else x.innerHTML = ans;

        return;
    }

    if (simul_var_num == '2-val'){

        // get the values of the equation
        let a1 = document.querySelector('#var-2-a1-value').value;
        let b1 = document.querySelector('#var-2-b1-value').value;
        let k1 = document.querySelector('#var-2-k1-value').value;

        let a2 = document.querySelector('#var-2-a2-value').value;
        let b2 = document.querySelector('#var-2-b2-value').value;
        let k2 = document.querySelector('#var-2-k2-value').value;

        let x = document.querySelector('#var-2-x-ans');
        let y = document.querySelector('#var-2-y-ans');

        // clear the answer box
        x.innerHTML = '';
        y.innerHTML = '';

        // validate the values
        if (!number_validator(a1) || !number_validator(b1) || !number_validator(k1) || !number_validator(a2) || !number_validator(b2) || !number_validator(k2)){
            let toast = toast_generator('Please enter valid numbers');
            document.body.innerHTML += toast;
            
            setTimeout(function() { document.getElementById('toast-bottom-right').remove(); }, 3000);
            return;
        }


        // calculate the answer
        let x_ans = ((k1*b2) - (k2*b1))/((a1*b2) - (a2*b1));
        let y_ans = ((k2*a1) - (k1*a2))/((a1*b2) - (a2*b1));

        if (!number_validator(x_ans)) x.innerHTML = 'NaN';
        else x.innerHTML = x_ans.toFixed(2);

        if (!number_validator(y_ans)) y.innerHTML = 'NaN';
        else y.innerHTML = y_ans.toFixed(2);

        return;
    }

    if (simul_var_num == '3-val'){

        // get the values of the equation
        let a1 = document.querySelector('#var-3-a1-value').value;
        let b1 = document.querySelector('#var-3-b1-value').value;
        let c1 = document.querySelector('#var-3-c1-value').value;
        let k1 = document.querySelector('#var-3-k1-value').value;

        let a2 = document.querySelector('#var-3-a2-value').value;
        let b2 = document.querySelector('#var-3-b2-value').value;
        let c2 = document.querySelector('#var-3-c2-value').value;
        let k2 = document.querySelector('#var-3-k2-value').value;

        let a3 = document.querySelector('#var-3-a3-value').value;
        let b3 = document.querySelector('#var-3-b3-value').value;
        let c3 = document.querySelector('#var-3-c3-value').value;
        let k3 = document.querySelector('#var-3-k3-value').value;

        let x = document.querySelector('#var-3-x-ans');
        let y = document.querySelector('#var-3-y-ans');
        let z = document.querySelector('#var-3-z-ans');

        // clear the answer box
        x.innerHTML = '';
        y.innerHTML = '';
        z.innerHTML = '';

        // validate the values
        if (!number_validator(a1) || !number_validator(b1) || !number_validator(c1) || !number_validator(k1) || !number_validator(a2) || !number_validator(b2) || !number_validator(c2) || !number_validator(k2) || !number_validator(a3) || !number_validator(b3) || !number_validator(c3) || !number_validator(k3)){
            let toast = toast_generator('Please enter valid numbers');
            document.body.innerHTML += toast;
            
            setTimeout(function() { document.getElementById('toast-bottom-right').remove(); }, 3000);
            return;
        }


        // calculate the answer
        let x_ans = ((k1*b2*c3) + (k2*b3*c1) + (k3*b1*c2) - (k1*b3*c2) - (k2*b1*c3) - (k3*b2*c1))/((a1*b2*c3) + (a2*b3*c1) + (a3*b1*c2) - (a1*b3*c2) - (a2*b1*c3) - (a3*b2*c1));
        let y_ans = ((k1*a3*c2) + (k2*a1*c3) + (k3*a2*c1) - (k1*a2*c3) - (k2*a3*c1) - (k3*a1*c2))/((a1*b2*c3) + (a2*b3*c1) + (a3*b1*c2) - (a1*b3*c2) - (a2*b1*c3) - (a3*b2*c1));
        let z_ans = ((k1*a2*b3) + (k2*a3*b1) + (k3*a1*b2) - (k1*a3*b2) - (k2*a1*b3) - (k3*a2*b1))/((a1*b2*c3) + (a2*b3*c1) + (a3*b1*c2) - (a1*b3*c2) - (a2*b1*c3) - (a3*b2*c1));

        if (!number_validator(x_ans)) x.innerHTML = 'NaN';
        else x.innerHTML = x_ans.toFixed(2);

        if (!number_validator(y_ans)) y.innerHTML = 'NaN';
        else y.innerHTML = y_ans.toFixed(2);

        if (!number_validator(z_ans)) z.innerHTML = 'NaN';
        else z.innerHTML = z_ans.toFixed(2);

        return;
    }

    if (simul_var_num == '4-val'){
        
        // get the values of the equation
        let a1 = document.querySelector('#var-4-a1-value').value;
        let b1 = document.querySelector('#var-4-b1-value').value;
        let c1 = document.querySelector('#var-4-c1-value').value;
        let d1 = document.querySelector('#var-4-d1-value').value;
        let k1 = document.querySelector('#var-4-k1-value').value;
        
        let a2 = document.querySelector('#var-4-a2-value').value;
        let b2 = document.querySelector('#var-4-b2-value').value;
        let c2 = document.querySelector('#var-4-c2-value').value;
        let d2 = document.querySelector('#var-4-d2-value').value;
        let k2 = document.querySelector('#var-4-k2-value').value;

        let a3 = document.querySelector('#var-4-a3-value').value;
        let b3 = document.querySelector('#var-4-b3-value').value;
        let c3 = document.querySelector('#var-4-c3-value').value;
        let d3 = document.querySelector('#var-4-d3-value').value;
        let k3 = document.querySelector('#var-4-k3-value').value;

        let a4 = document.querySelector('#var-4-a4-value').value;
        let b4 = document.querySelector('#var-4-b4-value').value;
        let c4 = document.querySelector('#var-4-c4-value').value;
        let d4 = document.querySelector('#var-4-d4-value').value;
        let k4 = document.querySelector('#var-4-k4-value').value;

        let x = document.querySelector('#var-4-x-ans');
        let y = document.querySelector('#var-4-y-ans');
        let z = document.querySelector('#var-4-z-ans');
        let w = document.querySelector('#var-4-w-ans');

        // clear the answer box
        x.innerHTML = '';
        y.innerHTML = '';
        z.innerHTML = '';
        w.innerHTML = '';

        // validate the values
        if (!number_validator(a1) || !number_validator(b1) || !number_validator(c1) || !number_validator(d1) || !number_validator(k1) || !number_validator(a2) || !number_validator(b2) || !number_validator(c2) || !number_validator(d2) || !number_validator(k2) || !number_validator(a3) || !number_validator(b3) || !number_validator(c3) || !number_validator(d3) || !number_validator(k3) || !number_validator(a4) || !number_validator(b4) || !number_validator(c4) || !number_validator(d4) || !number_validator(k4)){
            let toast = toast_generator('Please enter valid values');
            document.body.innerHTML += toast;

            // remove the toast after 3 seconds
            setTimeout(() => { document.querySelector('.toast').remove(); }, 3000);
            return;
        }

        // calculate the answer
        let x_ans = ((k1*b2*c3*d4) + (k2*b3*c4*d1) + (k3*b4*c1*d2) + (k4*b1*c2*d3) - (k1*b3*c2*d4) - (k2*b4*c3*d1) - (k3*b1*c4*d2) - (k4*b2*c1*d3))/((a1*b2*c3*d4) + (a2*b3*c4*d1) + (a3*b4*c1*d2) + (a4*b1*c2*d3) - (a1*b3*c2*d4) - (a2*b4*c3*d1) - (a3*b1*c4*d2) - (a4*b2*c1*d3));
        let y_ans = ((k1*a2*c3*d4) + (k2*a3*c4*d1) + (k3*a4*c1*d2) + (k4*a1*c2*d3) - (k1*a3*c2*d4) - (k2*a4*c3*d1) - (k3*a1*c4*d2) - (k4*a2*c1*d3))/((a1*b2*c3*d4) + (a2*b3*c4*d1) + (a3*b4*c1*d2) + (a4*b1*c2*d3) - (a1*b3*c2*d4) - (a2*b4*c3*d1) - (a3*b1*c4*d2) - (a4*b2*c1*d3));
        let z_ans = ((k1*a2*b3*d4) + (k2*a3*b4*d1) + (k3*a4*b1*d2) + (k4*a1*b2*d3) - (k1*a3*b2*d4) - (k2*a4*b3*d1) - (k3*a1*b4*d2) - (k4*a2*b1*d3))/((a1*b2*c3*d4) + (a2*b3*c4*d1) + (a3*b4*c1*d2) + (a4*b1*c2*d3) - (a1*b3*c2*d4) - (a2*b4*c3*d1) - (a3*b1*c4*d2) - (a4*b2*c1*d3));
        let w_ans = ((k1*a2*b3*c4) + (k2*a3*b4*c1) + (k3*a4*b1*c2) + (k4*a1*b2*c3) - (k1*a3*b2*c4) - (k2*a4*b3*c1) - (k3*a1*b4*c2) - (k4*a2*b1*c3))/((a1*b2*c3*d4) + (a2*b3*c4*d1) + (a3*b4*c1*d2) + (a4*b1*c2*d3) - (a1*b3*c2*d4) - (a2*b4*c3*d1) - (a3*b1*c4*d2) - (a4*b2*c1*d3));

        if (!number_validator(x_ans)) x.innerHTML = 'NaN';
        else x.innerHTML = x_ans.toFixed(2);

        if (!number_validator(y_ans)) y.innerHTML = 'NaN';
        else y.innerHTML = y_ans.toFixed(2);

        if (!number_validator(z_ans)) z.innerHTML = 'NaN';
        else z.innerHTML = z_ans.toFixed(2);

        if (!number_validator(w_ans)) w.innerHTML = 'NaN';
        else w.innerHTML = w_ans.toFixed(2);

        return;
    }

    return;

});



// POLYNOMIAL EQUATIONS


// generate polynomial form  


const poly_radio_btns = document.querySelectorAll("input[name = 'poly-inline-radio-group']");
let poly_equations_box = document.getElementById('poly-eqns-box');
let poly_answer_box = document.getElementById('poly-answer-box');

let generate_poly_form = () => {
    let poly_selected = document.querySelector("input[name = 'poly-inline-radio-group']:checked").value;
    
    if(poly_selected == '2-deg'){

        poly_equations_box.innerHTML = '';
        poly_answer_box.innerHTML = '';

        form_html = '<div class="2-deg-eqn">\
                        <input type="text" placeholder="" class="input input-bordered p-0.5 input-sm w-12" id = "deg-2-a-value"/>\
                        <span class="text-sm">x²</span>\
                        <span class="text-sm mx-2">+</span>\
                        <input type="text" placeholder="" class="input input-bordered p-0.5 input-sm w-12" id = "deg-2-b-value"/>\
                        <span class="text-sm">x</span>\
                        <span class="text-sm mx-2">+</span>\
                        <input type="text" placeholder="" class="input input-bordered p-0.5 input-sm w-12" id = "deg-2-c-value"/>\
                        <span class="text-sm mx-2">=</span>\
                        <span class = "text-sm">0</span>\
                    </div>';

        ans_html = '<div class="max-w-sm px-2 py-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 grid">\
                        <div class="values m-auto">\
                            <span>\
                                <span class="text-base variable">x</span>\
                                <span class="text-base">=</span>\
                                <span class="text-base" id = "deg-2-x1">0</span>\
                            </span>\
                            <br>\
                            <span>\
                                <span class="text-base variable">x</span>\
                                <span class="text-base">=</span>\
                                <span class="text-base" id = "deg-2-x2">0</span>\
                            </span>\
                        </div>\
                    </div>';

        poly_answer_box.innerHTML += ans_html;
        poly_equations_box.innerHTML += form_html;

        return;
    }

    if(poly_selected == '3-deg'){

        // same as 2-def but with 3 variables

        poly_equations_box.innerHTML = '';
        poly_answer_box.innerHTML = '';

        form_html = '<div class="3-deg-eqn">\
                        <input type="text" placeholder="" class="input input-bordered p-0.5 input-sm w-12" id = "deg-3-a-value" />\
                        <span class="text-sm">x³</span>\
                        <span class="text-sm mx-2">+</span>\
                        <input type="text" placeholder="" class="input input-bordered p-0.5 input-sm w-12" id = "deg-3-b-value"/>\
                        <span class="text-sm">x²</span>\
                        <span class="text-sm mx-2">+</span>\
                        <input type="text" placeholder="" class="input input-bordered p-0.5 input-sm w-12" id = "deg-3-c-value"/>\
                        <span class="text-sm">x</span>\
                        <span class="text-sm mx-2">+</span>\
                        <input type="text" placeholder="" class="input input-bordered p-0.5 input-sm w-12" id = "deg-3-d-value"/>\
                        <span class="text-sm mx-2">=</span>\
                        <span class = "text-sm">0</span>\
                    </div>';
        
        ans_html = '<div class="max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 grid">\
                    <div class="values m-auto">\
                        <span>\
                            <span class="text-base variable">x</span>\
                            <span class="text-base">=</span>\
                            <span class="text-base" id = "deg-3-x1">0</span>\
                        </span>\
                        <br>\
                        <span>\
                            <span class="text-base variable">x</span>\
                            <span class="text-base">=</span>\
                            <span class="text-base" id = "deg-3-x2">0</span>\
                        </span>\
                        <br>\
                        <span>\
                            <span class="text-base variable">x</span>\
                            <span class="text-base">=</span>\
                            <span class="text-base" id = "deg-3-x3">0</span>\
                        </span>\
                    </div>\
                </div>';

        poly_answer_box.innerHTML += ans_html;
        poly_equations_box.innerHTML += form_html;

        return;
    }

    if(poly_selected == '4-deg'){
        // same as 2-def but with 3 variables

        poly_equations_box.innerHTML = '';
        poly_answer_box.innerHTML = '';

        form_html = '<div class="4-deg-eqn">\
                        <input type="text" placeholder="" class="input input-bordered p-0.5 input-sm w-12" id = "deg-4-a-value"/>\
                        <span class="text-sm">x⁴</span>\
                        <span class="text-sm mx-2">+</span>\
                        <input type="text" placeholder="" class="input input-bordered p-0.5 input-sm w-12" id = "deg-4-b-value"/>\
                        <span class="text-sm">x³</span>\
                        <span class="text-sm mx-2">+</span>\
                        <input type="text" placeholder="" class="input input-bordered p-0.5 input-sm w-12" id = "deg-4-c-value"/>\
                        <span class="text-sm">x²</span>\
                        <span class="text-sm mx-2">+</span>\
                        <input type="text" placeholder="" class="input input-bordered p-0.5 input-sm w-12" id = "deg-4-d-value"/>\
                        <span class="text-sm">x</span>\
                        <span class="text-sm mx-2">+</span>\
                        <input type="text" placeholder="" class="input input-bordered p-0.5 input-sm w-12" id = "deg-4-e-value"/>\
                        <span class="text-sm mx-2">=</span>\
                        <span class = "text-sm">0</span>\
                    </div>';
    
    
    ans_html = '<div class="max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 grid">\
                    <div class="values m-auto">\
                        <span>\
                            <span class="text-base variable">x</span>\
                            <span class="text-base">=</span>\
                            <span class="text-base" id = "deg-4-x1">0</span>\
                        </span>\
                        <br>\
                        <span>\
                            <span class="text-base variable">x</span>\
                            <span class="text-base">=</span>\
                            <span class="text-base" id = "deg-4-x2">0</span>\
                        </span>\
                        <br>\
                        <span>\
                            <span class="text-base variable">x</span>\
                            <span class="text-base">=</span>\
                            <span class="text-base" id = "deg-4-x3">0</span>\
                        </span>\
                        <br>\
                        <span>\
                            <span class="text-base variable">x</span>\
                            <span class="text-base">=</span>\
                            <span class="text-base" id = "deg-4-x4">0</span>\
                        </span>\
                    </div>\
                </div>';

        poly_answer_box.innerHTML += ans_html;
        poly_equations_box.innerHTML += form_html;
    }

    return;
}

poly_radio_btns.forEach( poly_radioBtn => {
    poly_radioBtn.addEventListener('change', generate_poly_form);
});



// POLYNOPMIAL SOLVER

let poly_solve_btn = document.querySelector('#poly-calc-btn');

// cube root function
function cuberoot(x) {
    var y = Math.cbrt(x);
    return y;
}

function roundToTwoDecimalPlaces(num) {
  var roundedNum = Math.ceil(num * 100) / 100;
  return roundedNum.toFixed(2);
}


function cubicRoots(a, b, c, d) {
    if (Math.abs(a) < 1e-8) { // Quadratic case, ax^2+bx+c=0
        a = b; b = c; c = d;
        if (Math.abs(a) < 1e-8) { // Linear case, ax+b=0
            a = b; b = c;
            if (Math.abs(a) < 1e-8) // Degenerate case
                return [];
            return [-b/a];
        }

        var D = b*b - 4*a*c;
        if (Math.abs(D) < 1e-8)
            return [-b/(2*a)];
        else if (D > 0)
            return [(-b+Math.sqrt(D))/(2*a), (-b-Math.sqrt(D))/(2*a)];
        return [];
    }

    // Convert to depressed cubic t^3+pt+q = 0 (subst x = t - b/3a)
    var p = (3*a*c - b*b)/(3*a*a);
    var q = (2*b*b*b - 9*a*b*c + 27*a*a*d)/(27*a*a*a);
    var roots;

    if (Math.abs(p) < 1e-8) { // p = 0 -> t^3 = -q -> t = -q^1/3
        roots = [cuberoot(-q)];
    } else if (Math.abs(q) < 1e-8) { // q = 0 -> t^3 + pt = 0 -> t(t^2+p)=0
        roots = [0].concat(p < 0 ? [Math.sqrt(-p), -Math.sqrt(-p)] : []);
    } else {
        var D = q*q/4 + p*p*p/27;
        if (Math.abs(D) < 1e-8) {       // D = 0 -> two roots
            roots = [-1.5*q/p, 3*q/p];
        } else if (D > 0) {             // Only one real root
            var u = cuberoot(-q/2 - Math.sqrt(D));
            roots = [u - p/(3*u)];
        } else {                        // D < 0, three roots, but needs to use complex numbers/trigonometric solution
            var u = 2*Math.sqrt(-p/3);
            var t = Math.acos(3*q/p/u)/3;  // D < 0 implies p < 0 and acos argument in [-1..1]
            var k = 2*Math.PI/3;
            roots = [u*Math.cos(t), u*Math.cos(t-k), u*Math.cos(t-2*k)];
        }
    }

    // Convert back from depressed cubic
    for (var i = 0; i < roots.length; i++)
        roots[i] -= b/(3*a);

    for(let i = 0; i < roots.length; i++) {
        roots [ i ] = roundToTwoDecimalPlaces(roots[i]);
    }
    
    return roots;
}


poly_solve_btn.addEventListener('click', function() {

    // get the selected polynomial degree
    let poly_selected = document.querySelector('input[name="poly-inline-radio-group"]:checked').value;

    if (poly_selected == '2-deg'){
        // get the values of the input fields
        let a = document.querySelector('#deg-2-a-value').value;
        let b = document.querySelector('#deg-2-b-value').value;
        let c = document.querySelector('#deg-2-c-value').value;

        // validate the input fields
        if (!number_validator(a) || !number_validator(b) || !number_validator(c)){
            let toast = toast_generator('Please enter valid inputs!');  
            document.body.innerHTML += toast;

            // remove the toast after 3 seconds
            setTimeout(function(){ document.querySelector('#toast-bottom-right').remove(); }, 3000);
            return;
        }

        // calculate the roots 
        let x1 = (-b + Math.sqrt((b*b) - (4*a*c)))/(2*a);
        let x2 = (-b - Math.sqrt((b*b) - (4*a*c)))/(2*a);

        // clear the previous answers
        let x1_box = document.querySelector('#deg-2-x1');
        let x2_box = document.querySelector('#deg-2-x2');

        x1_box.innerHTML = '';
        x2_box.innerHTML = '';

        // display the answers
        if (!number_validator(x1)) x1_box.innerHTML = 'NaN';
        else x1_box.innerHTML = x1.toFixed(2);

        if (!number_validator(x2)) x2_box.innerHTML = 'NaN';
        else x2_box.innerHTML = x2.toFixed(2);

        return;
    }

    if (poly_selected == '3-deg'){

        // get the values of the input fields
        let a = document.querySelector('#deg-3-a-value').value;
        let b = document.querySelector('#deg-3-b-value').value;
        let c = document.querySelector('#deg-3-c-value').value;
        let d = document.querySelector('#deg-3-d-value').value;


        // validate the input fields
        if (!number_validator(a) || !number_validator(b) || !number_validator(c)){
            let toast = toast_generator('Please enter valid inputs!');  
            document.body.innerHTML += toast;

            // remove the toast after 3 seconds
            setTimeout(function(){ document.querySelector('#toast-bottom-right').remove(); }, 3000);
            return;
        }

        // calculate the  cubic roots 
        let roots = cubicRoots(a, b, c, d);

        // clear the previous answers
        let x1_box = document.querySelector('#deg-3-x1');
        let x2_box = document.querySelector('#deg-3-x2');
        let x3_box = document.querySelector('#deg-3-x3');

        x1_box.innerHTML = '';
        x2_box.innerHTML = '';
        x3_box.innerHTML = '';
        
        // display the answers
        if (!number_validator(roots[0])) x1_box.innerHTML = 'NaN';
        else x1_box.innerHTML = roots[0];

        if (!number_validator(roots[1])) x2_box.innerHTML = 'NaN';
        else x2_box.innerHTML = roots[1];

        if (!number_validator(roots[2])) x3_box.innerHTML = 'NaN';
        else x3_box.innerHTML = roots[2];

        return;
    }

    if (poly_selected == '4-deg'){

        // get the values of the input fields
        let a = document.querySelector('#deg-4-a-value').value;
        let b = document.querySelector('#deg-4-b-value').value;
        let c = document.querySelector('#deg-4-c-value').value;
        let d = document.querySelector('#deg-4-d-value').value;
        let e = document.querySelector('#deg-4-e-value').value;

        // validate the input fields
        if (!number_validator(a) || !number_validator(b) || !number_validator(c)){

            let toast = toast_generator('Please enter valid inputs!');  
            document.body.innerHTML += toast;

            // remove the toast after 3 seconds
            setTimeout(function(){ document.querySelector('#toast-bottom-right').remove(); }, 3000);
            return;
        }

        // calculate the roots
        let root = nerdamer.solve('a*x^4 + b*x^3 + c*x^2 + d*x + e = 0', 'x');

        // root is an array
        root = root.toString();

        // clear the previous answers
        let x1_box = document.querySelector('#deg-4-x1');
        let x2_box = document.querySelector('#deg-4-x2');
        let x3_box = document.querySelector('#deg-4-x3');
        let x4_box = document.querySelector('#deg-4-x4');

        x1_box.innerHTML = '';
        x2_box.innerHTML = '';
        x3_box.innerHTML = '';
        x4_box.innerHTML = '';

        // display the answers
        if (!number_validator(root[0])) x1_box.innerHTML = 'NaN';
        else x1_box.innerHTML = root[0];

        if (!number_validator(root[1])) x2_box.innerHTML = 'NaN';
        else x2_box.innerHTML = root[1];

        if (!number_validator(root[2])) x3_box.innerHTML = 'NaN';
        else x3_box.innerHTML = root[2];

        if (!number_validator(root[3])) x4_box.innerHTML = 'NaN';
        else x4_box.innerHTML = root[3];

        return;
    }

    return;
}); 

