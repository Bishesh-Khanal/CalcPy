// change the titles of table columns when the radio buttons are changed 

let data_types = document.querySelectorAll('input[name="table-type"]');
let x_title = document.getElementById('x-title');
let y_title = document.getElementById('y-title');


data_types.forEach((data_type) => {
    data_type.addEventListener('change', function() {
        //get checked radio button
        let checked_radio = document.querySelector('input[name="table-type"]:checked');

        if(checked_radio.value == 'class-interval'){
            y_title.textContent = 'C.I.';
            x_title.textContent = 'FREQ';
            return;
        }

        if(checked_radio.value == 'discreete'){
            y_title.textContent = 'DATA';
            x_title.textContent = 'FREQ';
            return;
        }
        return;
    });
    return;
});



function toast_generator (message) {
    var html = '';
    var html = '<div id="toast-bottom-right" class="fixed flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow right-5 bottom-5 dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800" role="alert"> \
                <div class="text-sm font-normal text-rose-400 "> <i class="bx bxs-radiation text-rose-600"></i> ' + message + ' </div>\
                </div>'

    return html;
} 

function sortArray(array) {
    return array.sort(function(a, b) {
      return a[0] - b[0];
    });
  }

// compute 

let compute_btn = document.getElementById('compute-btn');


compute_btn.addEventListener('click', function() {


    // get the checked radio button
    let checked_radio = document.querySelector('input[name="table-type"]:checked').value;

    // get thhe number of rows in the table filled by the user
    let rows = document.getElementById('table-body').rows.length;
    

    // get the data in the rows and put in it an array of arrays in which each child array is a two element array | data = [ [1,2], [3,4], [5,6] ]
    let data = [];

    for(let i = 1; i <= rows; i++){
        let x = document.getElementById('x'+i).value;
        let y = document.getElementById('y'+i).value;
        data.push([y,x]);
    }

    
    

    if (checked_radio == 'discreete') {

        // arrage the data in ascending order of the x values
        data = sortArray(data);

        // validity checker of the inputs 
        for(let i = 0; i < data.length; i++){
            if(isNaN(data[i][0]) || isNaN(data[i][1] || data[i][0] == '' || data[i][1] == '')){
                html = toast_generator('Please fill all the fields with numbers');
                document.body.innerHTML += html;

                // remove the toast after 3 seconds
                setTimeout(function(){ 
                    document.getElementById('toast-bottom-right').remove();
                }, 3000);
                return;
            }
        }

        // create a row x 3 table to put the data in it    data | freq | c.f  [[1,2,3], [2,3,4], [3,4,5]]
        let table = [];
        let cff = 0;
        for(let i = 0; i < data.length; i++){
            xx = data[i][0];
            yy = data[i][1];
            cff += parseInt(yy);
            table.push([xx, yy, cff]);
        }
        
        // get the total frequency 
        let total_freq = table[table.length - 1][2];
        
        // get the mean
        let meanval = 0;
        for(let i = 0; i < table.length; i++){ meanval += table[i][0] * table[i][1]; }
        meanval = meanval / total_freq;

        // get the min and max
        let minimum = table[0][0];
        let maximum = table[table.length - 1][0];

        // get the q1, median and q3
        let q1_index = (total_freq + 1) / 4;
        let median_index = (total_freq + 1) / 2;
        let q3_index = 3 * (total_freq + 1) / 4;

        // get the closest largest cf to the q1, median and q3 indexes and get the corresponding x value
        let q1_val = 0;
        let mediann = 0;
        let q3_val = 0;

        for(let i = 0; i < table.length; i++){
            if(table[i][2] >= q1_index){
                q1_val = table[i][0];
                break;
            }
        }

        for(let i = 0; i < table.length; i++){
            if(table[i][2] >= median_index){
                mediann = table[i][0];
                break;
            }
        }

        for(let i = 0; i < table.length; i++){
            if(table[i][2] >= q3_index){
                q3_val = table[i][0];
                break;
            }
        }


        // get the standard deviation
        let std = 0;
        for(let i = 0; i < table.length; i++){
            std += table[i][1] * Math.pow(table[i][0] - meanval, 2);
        }
        std = Math.sqrt(std / total_freq);
        
        // get the variance
        let variance = Math.pow(std, 2);
        

        // put the results in the table
        document.getElementById('mean').textContent = meanval.toFixed(2);
        document.getElementById('std').textContent = std.toFixed(2);
        document.getElementById('min').textContent = minimum;
        document.getElementById('max').textContent = maximum;
        document.getElementById('q1').textContent = q1_val;
        document.getElementById('med').textContent = mediann;
        document.getElementById('q3').textContent = q3_val;
        document.getElementById('var').textContent = variance.toFixed(2);

        
        
        // if there are any previous canvases, destroy them 
        
        if(document.getElementById('bar-graph-render') != null){ document.getElementById('bar-graph-render').remove(); }
        if(document.getElementById('box-plot-render') != null){ document.getElementById('box-plot-render').remove(); }

        // create the canvases
        document.getElementById('bar-graph').innerHTML += '<canvas id = "bar-graph-render" height = "400" width = "400"></canvas>'
        document.getElementById('box-plot').innerHTML += '<canvas id = "box-plot-render" height = "400" width = "400""></canvas>'
        
        let ctx1 = document.getElementById('bar-graph-render');
        let ctx2 = document.getElementById('box-plot-render');



        let labels_for_chart = []; 
        let data_for_chart = [];

        for(let i = 0; i < table.length; i++){
            labels_for_chart.push(table[i][0]);
            data_for_chart.push(table[i][1]);
        }

        // create the bar graph
        let bar_graph = new Chart(ctx1, {
            type: 'bar',
            data: {
                labels: labels_for_chart,
                datasets: [{
                    label: 'Frequency',
                    data: data_for_chart,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        let x = 1; 
        let min = minimum;
        let max = maximum;
        let median = mediann;
        let q1 = q1_val;
        let q3 = q3_val;
        let mean = meanval;

        console.log(x, min, max, median, q1, q3, mean);
        // create the box plot
        let box_plot = new Chart(ctx2, {
            type: 'boxplot',
            data: {
                labels: ['', '', '', '', '', ''],
              datasets: [{
                label: 'Frequency',
                outlierColor: '#999999',
                data: [{
                    x : x, 
                    min: min, 
                    max: max,
                    median: median,
                    q1: q1,
                    q3: q3,
                  }],
                borderWidth: 1
              }]
            },
            options: {
                scales: {
                  y: {
                    min: 0,
                    max: 100,
                    ticks: {
                        stepSize: 10
                    }
                  }
                }
              }
          });

    

    }

    if (checked_radio == 'class-interval') {

        // the inputs will be in the form m-n, n-o, o-p and so on
        // well will have the child array in such form: [lower-limit, upper-limit, frequency, cf, middle-value ]

        // validate the data 
        // if it contains any non-number except the '-' sign, return an error
        for(let i = 0; i < data.length; i++){
            let temp = data[i][0].split('-');
            if(isNaN(temp[0]) || isNaN(temp[1])){
                html = toast_generator('Please fill all the fields with numbers');
                document.body.innerHTML += html;

                // remove the toast after 3 seconds
                setTimeout(function(){
                    document.getElementById('toast-bottom-right').remove();
                }, 3000);
                return;
            }
        }

        // get the data 
        let pre_cont_data = [];
        for(let i = 0; i < data.length; i++){
            let temp = data[i][0].split('-');
            let lower_limit = parseInt(temp[0]);
            let upper_limit = parseInt(temp[1]);
            let frequency = parseInt(data[i][1]);
            pre_cont_data.push([lower_limit, upper_limit, frequency]);
        }

        // sort the data in ascending order of the lower limit
        pre_cont_data = sortArray(pre_cont_data);
        
        // a new array has to be created to put the data in it in the form [lower-limit, upper-limit, frequency, cf, middle-value ]
        let cont_data = [];
        let cf = 0;
        let middle_value = 0;
        for(let i = 0; i < pre_cont_data.length; i++){
            let lower_limit = pre_cont_data[i][0];
            let upper_limit = pre_cont_data[i][1];
            let frequency = pre_cont_data[i][2];
            cf += frequency;
            middle_value = (lower_limit + upper_limit) / 2;
            cont_data.push([lower_limit, upper_limit, frequency, cf, middle_value]);
        }

        // get the total frequency
        let total_freq = cont_data[cont_data.length - 1][3];

        // get the mean
        let mean = 0;
        for(let i = 0; i < cont_data.length; i++){ mean += cont_data[i][4] * cont_data[i][2]; }
        mean = mean / total_freq;

        // get the min and max
        let min = cont_data[0][0];
        let max = cont_data[cont_data.length - 1][1];

       // get the q1, median and q3

        // for q1
        let q1_index = (total_freq + 1) / 4;
         
        // get the closest largest cf to the q1 

        let q1_closest_cf = 0;
        for(let i = 0; i < cont_data.length; i++){
            if(cont_data[i][3] >= q1_index){
                q1_closest_cf = cont_data[i][3];
                break;
            }
        }

        // get the corresponding upper, lower limits and frequency and the cf of the previous class
        let q1_upper_limit = 0;
        let q1_lower_limit = 0;
        let q1_frequency = 0;
        let q1_previous_cf = 0;

        for(let i = 0; i < cont_data.length; i++){
            if(cont_data[i][3] == q1_closest_cf){
                q1_upper_limit = cont_data[i][1];
                q1_lower_limit = cont_data[i][0];
                q1_frequency = cont_data[i][2];
                if (i != 0) { q1_previous_cf = cont_data[i - 1][3]; }
                break;
            }
        }

        // get the q1
        let q1 = q1_lower_limit + ((q1_index - q1_previous_cf) / q1_frequency) * (q1_upper_limit - q1_lower_limit);

        // for median

        let median_index = (total_freq + 1) / 2;

        // get the closest largest cf to the median

        let median_closest_cf = 0;
        for(let i = 0; i < cont_data.length; i++){
            if(cont_data[i][3] >= median_index){
                median_closest_cf = cont_data[i][3];
                break;
            }
        }

        // get the corresponding upper, lower limits and frequency and the cf of the previous class
        let median_upper_limit = 0;
        let median_lower_limit = 0;
        let median_frequency = 0;
        let median_previous_cf = 0;

        for(let i = 0; i < cont_data.length; i++){
            if(cont_data[i][3] == median_closest_cf){
                median_upper_limit = cont_data[i][1];
                median_lower_limit = cont_data[i][0];
                median_frequency = cont_data[i][2];
                if(i != 0){ median_previous_cf = cont_data[i - 1][3];  }
                break;
            }
        }

        // get the median
        let median = median_lower_limit + ((median_index - median_previous_cf) / median_frequency) * (median_upper_limit - median_lower_limit);

        // for q3

        let q3_index = 3 * (total_freq + 1) / 4;

        // get the closest largest cf to the q3
        
        let q3_closest_cf = 0;
        for(let i = 0; i < cont_data.length; i++){
            if(cont_data[i][3] >= q3_index){
                q3_closest_cf = cont_data[i][3];
                break;
            }
        }

        // get the corresponding upper, lower limits and frequency and the cf of the previous class
        let q3_upper_limit = 0;
        let q3_lower_limit = 0;
        let q3_frequency = 0;
        let q3_previous_cf = 0;
        
        for(let i = 0; i < cont_data.length; i++){
            if(cont_data[i][3] == q3_closest_cf){
                q3_upper_limit = cont_data[i][1];
                q3_lower_limit = cont_data[i][0];
                q3_frequency = cont_data[i][2];
                if(i != 0){ q3_previous_cf = cont_data[i - 1][3];  }
                break;
            }
        }

        // get the q3
        let q3 = q3_lower_limit + ((q3_index - q3_previous_cf) / q3_frequency) * (q3_upper_limit - q3_lower_limit);


        // for standard deviation
        let std = 0;
        for(let i = 0; i < cont_data.length; i++){
            std += cont_data[i][2] * Math.pow(cont_data[i][4] - mean, 2);
        }
        std = Math.sqrt(std / total_freq);

        // for variance
        let variance = Math.pow(std, 2);

        //put the results in the table
        document.getElementById('mean').textContent = mean.toFixed(2);
        document.getElementById('std').textContent = std.toFixed(2);
        document.getElementById('min').textContent = min;
        document.getElementById('max').textContent = max;
        document.getElementById('q1').textContent = q1.toFixed(2);
        document.getElementById('med').textContent = median.toFixed(2);
        document.getElementById('q3').textContent = q3.toFixed(2);
        document.getElementById('var').textContent = variance.toFixed(2);


        // create the graphs and put them in the tabs

        // if there are any previous canvases, destroy them
        if(document.getElementById('bar-graph-render') != null){ document.getElementById('bar-graph-render').remove(); }
        if(document.getElementById('box-plot-render') != null){ document.getElementById('box-plot-render').remove(); }

        // create the canvases
        document.getElementById('bar-graph').innerHTML += '<canvas id = "bar-graph-render" height = "400" width = "400"></canvas>'
        document.getElementById('box-plot').innerHTML += '<canvas id = "box-plot-render" height = "400" width = "400""></canvas>'

        let ctx1 = document.getElementById('bar-graph-render');
        let ctx2 = document.getElementById('box-plot-render');

        let labels_for_chart = [];
        let data_for_chart = [];

        for(let i = 0; i < cont_data.length; i++){
            labels_for_chart.push(cont_data[i][0] + '-' + cont_data[i][1]);
            data_for_chart.push(cont_data[i][2]);
        }
        
        // create the bar graph
        let bar_graph = new Chart(ctx1, {
            type: 'bar',
            data: {
                labels: labels_for_chart,
                datasets: [{
                    label: 'Frequency',
                    data: data_for_chart,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        
        // create the box plot
        let box_plot = new Chart(ctx2, {
            type: 'boxplot',
            data: {
                labels: ['', '', '', '', '', ''],
                datasets: [{
                    label: 'Frequency',
                    outlierColor: '#999999',
                    data: [{
                        x : 1,
                        min: min,
                        max: max,
                        median: median,
                        q1: q1,
                        q3: q3,
                    }],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        min: 0,
                        max: 100,
                        ticks: {
                            stepSize: 10
                        }
                    }
                }
            }
        });

        return;
    }
    return;
});

document.getElementById('st').classList.add('active');













