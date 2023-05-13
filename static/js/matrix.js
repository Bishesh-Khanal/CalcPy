
generation_box_1 = document.getElementById('matrix-generation-box-1');
generation_box_2 = document.getElementById('matrix-generation-box-2');
answer_box = document.getElementById('answer-generation-box');


// generate matrices when the generation buttons are clicked

function generate_matrix (row, col, id) {

    let html = '';
    html += '<div id = "'+id+'-generated-matrix"class = " mb-4 grid grid-rows-'+ row +' gap-3 mt-2"> \n \n';
    for (let i = 0; i < row; i++) {
        html += '<div class = "flex row-num-'+ (i+1) +' gap-3"> \n';
        for (let j = 0; j < col; j++) {
            html += '<input type="text" id = "inp-'+ (i+1) + (j+1) +'" class="block mt-2 w-12 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"> \n';
        }
        html += '</div> \n \n';
    }
    html += '</div>\n';

    return html;
}   


// toast generator

function toast_generator (message) {
    var html = '';
    var html = '<div id="toast-bottom-right" class="fixed flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow right-5 bottom-5 dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800" role="alert"> \
                <div class="text-sm font-normal text-rose-400 "> <i class="bx bxs-radiation text-rose-600"></i> ' + message + ' </div>\
                </div>'

    return html;
} 


// number validator 

function number_validator(number) {
    if (isNaN(number)) return false;
    let num = Number(number);
    if (num < 1) return false;
    if(!Number.isInteger(num)) return false; 
    return true; 
}

function array_value_validator (number) {
    if (isNaN(number)) return false;
    number = Number(number);
    return true; 
}


function matrix_validator(arr) {
    let row = arr.length;
    let col = arr[0].length;

    // check if every value in the matrix is a number 
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++){
            if (!array_value_validator(arr[i][j])) return false;             
        }
    }
    return true;
}

// matrix to array 
function matrix_to_array(id) {

    // get the rows and columns of the matrix div 
    let matrix_div = document.getElementById(id);
    let rows = matrix_div.querySelectorAll('div');
    
    let row = rows.length;
    let col = rows[0].querySelectorAll('input').length;

    // create an empty array
    let arr = [];

    // loop through the matrix and push the values to the array
    for (let i = 0; i < row; i++) {
        arr.push([]);
        for (let j = 0; j < col; j++) {
            let mmm = document.getElementById(id).querySelector('#inp-'+ (i+1) + (j+1));
            arr[i].push(Number(mmm.value));
        }
    }

    return arr;
}


// array to matrix
function array_to_matrix(arr, matrix_name_id) {

    // change the matrix to a 2d array 
    let row = arr.length;
    let col = arr[0].length;



    // put the matrix input boxes in the id 
    let html = '';
    html += '<div id = "'+matrix_name_id+'-generated-matrix"class = " mb-4 grid grid-rows-'+ row +' gap-3 mt-2"> \n \n';
    for (let i = 0; i < row; i++) {
        html += '<div class = "flex row-num-'+ (i+1) +' gap-3"> \n';
        for (let j = 0; j < col; j++) {
            html += '<input type="text" id = "inp-'+ (i+1) + (j+1) +'" class="block mt-2 w-12 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"> \n';
        }
        html += '</div> \n \n';
    }

    // put the html in the answer box
    answer_box.insertAdjacentHTML('beforeend', html);


    // put the array values in the matrix input boxes
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) { 
            document.getElementById(matrix_name_id + '-generated-matrix').querySelector('#inp-'+ (i+1) + (j+1)).value = arr[i][j];
        }
    }

    return;
}


// first matrix generation 

first_generation_button = document.getElementById('generate-btn-1');
second_generation_button = document.getElementById('generate-btn-2');

first_generation_button.addEventListener('click', function() {
    //clear the previous matrix
    generation_box_1.innerHTML = '';
    
    // get the input values
    let row = document.getElementById('row-1').value;
    let col = document.getElementById('col-1').value;

    // validate the input values
    if (!number_validator(row) || !number_validator(col)) {
        document.body.insertAdjacentHTML('beforeend', toast_generator('Please enter valid inputs!'));
        
        // remove the toast after 3 seconds
        setTimeout(function() {
            document.getElementById('toast-bottom-right').remove();
        }
        , 3000);
        return;
    }

    // generate the matrix
    let html = generate_matrix(row, col, 'matrix-1');
    generation_box_1.insertAdjacentHTML('beforeend', html);

    return;
});


second_generation_button.addEventListener('click', function() {

        generation_box_2.innerHTML = '';

        // get the input values
        let row = document.getElementById('row-2').value;
        let col = document.getElementById('col-2').value;


        // validate the input values
        if (!number_validator(row) || !number_validator(col)) {
            document.body.insertAdjacentHTML('beforeend', toast_generator('Please enter valid inputs!'));
            
            // remove the toast after 3 seconds
            setTimeout(function() {
                document.getElementById('toast-bottom-right').remove();
            }
            , 3000);
            return;
        }

        // generate the matrix
        let html = generate_matrix(row, col, 'matrix-2');
        generation_box_2.insertAdjacentHTML('beforeend', html);

        return;
});



// arrayed-matrix operations 
// same rc valid checker 
function row_col_equal_checker(mat1, mat2) {
    // check if the rows and columns of the matrices are equal
    if (mat1.length != mat2.length || mat1[0].length != mat2[0].length) return false;
    return true;
}

// row2 = col1 valid checker
function row2_col1_checker(mat1, mat2) {
    // check if the rows and columns of the matrices are equal
    if (mat1[0].length == mat2.length) return true;
    return false;
}

//square matrix checker
function square_matrix_checker(mat) {
    // check if the rows and columns of the matrices are equal
    if (mat.length == mat[0].length) return true;
    return false;
}


// addition
function add_matrices (mat1, mat2) {
    
        // get the rows and columns of the matrix
        let row = mat1.length;
        let col = mat1[0].length;
    
        // create an empty array
        let arr = [];
    
        // loop through the matrix and push the values to the array
        for (let i = 0; i < row; i++) {
            arr.push([]);
            for (let j = 0; j < col; j++) {
                arr[i].push(mat1[i][j] + mat2[i][j]);
            }
        }
    
        return arr;
}


// subtraction
function subtract_matrices (mat1, mat2) {
        
            // get the rows and columns of the matrix
            let row = mat1.length;
            let col = mat1[0].length;
        
            // create an empty array
            let arr = [];
        
            // loop through the matrix and push the values to the array
            for (let i = 0; i < row; i++) {
                arr.push([]);
                for (let j = 0; j < col; j++) {
                    arr[i].push(mat1[i][j] - mat2[i][j]);
                }
            }
        
            return arr;
}


// multiplication
function multiply_matrices (mat1, mat2) {
                
            // get the rows and columns of the matrix
            let row = mat1.length;
            let col = mat2[0].length;
        
            // create an empty array
            let arr = [];
        
            // loop through the matrix and push the values to the array
            for (let i = 0; i < row; i++) {
                arr.push([]);
                for (let j = 0; j < col; j++) {
                    arr[i].push(0);
                    for (let k = 0; k < mat1[0].length; k++) {
                        arr[i][j] += mat1[i][k] * mat2[k][j];
                    }
                }
            }
        
            return arr;
}   


// determinant
function determinant(matrix) {
    if (matrix.length === 2) {
      return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
    }
    let det = 0;
    for (let i = 0; i < matrix.length; i++) {
      const subMatrix = [];
      for (let j = 1; j < matrix.length; j++) {
        subMatrix.push(matrix[j].filter((_, k) => k !== i));
      }
      const sign = i % 2 === 0 ? 1 : -1;
      det += sign * matrix[0][i] * determinant(subMatrix);
    }
    det = det.toFixed(2);
    return det;
}


// transpose
function transpose(matrix) {
    const result = [];
    for (let i = 0; i < matrix[0].length; i++) {
      result.push([]);
      for (let j = 0; j < matrix.length; j++) {
        result[i].push(matrix[j][i]);
      }
    }
    return result;
}




//inverse
function inverse(matrix) {
    const n = matrix.length;
    const identity = new Array(n).fill().map((_, i) => new Array(n).fill().map((_, j) => i === j ? 1 : 0));
  
    for (let i = 0; i < n; i++) {
      let pivot = matrix[i][i];
      if (pivot === 0) {
        for (let j = i + 1; j < n; j++) {
          if (matrix[j][i] !== 0) {
            [matrix[i], matrix[j]] = [matrix[j], matrix[i]];
            [identity[i], identity[j]] = [identity[j], identity[i]];
            pivot = matrix[i][i];
            break;
          }
        }
        if (pivot === 0) {
          throw new Error("Matrix is not invertible");
        }
      }
      const factor = 1 / pivot;
      for (let j = 0; j < n; j++) {
        matrix[i][j] *= factor;
        identity[i][j] *= factor;
      }
      for (let j = 0; j < n; j++) {
        if (j !== i) {
          const factor = matrix[j][i];
          for (let k = 0; k < n; k++) {
            matrix[j][k] -= factor * matrix[i][k];
            identity[j][k] -= factor * identity[i][k];
          }
        }
      }
    }

    // round all values to 2 decimal places
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            matrix[i][j] = matrix[i][j].toFixed(2);
            identity[i][j] = identity[i][j].toFixed(2);
        }  
    }
    return identity;
  }




// solve button 
solve_button = document.getElementById('equals-btn');

solve_button.addEventListener('click', function() {

    // get the operators 
    let operator = document.getElementById('operators').value;

    // check if the matrices are generated
    if ( document.getElementById('matrix-1-generated-matrix') == null || document.getElementById('matrix-2-generated-matrix') == null ) {
        document.body.insertAdjacentHTML('beforeend', toast_generator('Please generate the matrices first!'));
        
        // remove the toast after 3 seconds
        setTimeout(function() { document.getElementById('toast-bottom-right').remove(); }, 3000);
        return;
    }
        


    // get the matrices
    let mat1 = matrix_to_array('matrix-1-generated-matrix');
    let mat2 = matrix_to_array('matrix-2-generated-matrix');



    // validate the matrices
    if(!matrix_validator(mat1) || !matrix_validator(mat2)) {
        document.body.insertAdjacentHTML('beforeend', toast_generator('Please enter valid matrix values!'));
            
        // remove the toast after 3 seconds
        setTimeout(function() {
            document.getElementById('toast-bottom-right').remove();
        }
        , 3000);
        return;
    }


    // if they're valid then perform the operation
    let result = [];

    if (operator == 'plus') {
        if (row_col_equal_checker(mat1, mat2)) result = add_matrices(mat1, mat2);
        else {
            document.body.insertAdjacentHTML('beforeend', toast_generator('The matrices must have the same dimensions!'));
            
            // remove the toast after 3 seconds
            setTimeout(function() {
                document.getElementById('toast-bottom-right').remove();
            }
            , 3000);
            return;
        }
    } 


    else if (operator == 'minus'){
        if (row_col_equal_checker(mat1, mat2)) result = subtract_matrices(mat1, mat2);
        else {
            document.body.insertAdjacentHTML('beforeend', toast_generator('The matrices must have the same dimensions!'));
            
            // remove the toast after 3 seconds
            setTimeout(function() {
                document.getElementById('toast-bottom-right').remove();
            }
            , 3000);
            return;
        }
    }


    else if (operator == 'multiply') {
        if (row2_col1_checker(mat1, mat2)) result = multiply_matrices(mat1, mat2);
        else {
            document.body.insertAdjacentHTML('beforeend', toast_generator('The number of columns of the first matrix must be equal to the number of rows of the second matrix!'));
            
            // remove the toast after 3 seconds
            setTimeout(function() {
                document.getElementById('toast-bottom-right').remove();
            }
            , 3000);
            return;
        }
    }

    // display the result
    answer_box.innerHTML = '';
    answer_html = array_to_matrix(result, 'answer');
    
    return;
});



// determinant button 

mat1_det_btn = document.getElementById('mat1-det-btn');
mat2_det_btn = document.getElementById('mat2-det-btn');
ans_det_btn = document.getElementById('ans-det-btn');

mat1_det_btn.addEventListener('click', function() {
    
        det_1_box = document.getElementById('mat1-det');
        det_1_box.innerHTML = '';

        // check if the matrix is generated
        if ( document.getElementById('matrix-1-generated-matrix') == null ) {
            document.body.insertAdjacentHTML('beforeend', toast_generator('Please generate the matrix first!'));
            
            // remove the toast after 3 seconds
            setTimeout(function() { document.getElementById('toast-bottom-right').remove(); }, 3000);
            return;
        }
            
        // get the matrix
        let mat1 = matrix_to_array('matrix-1-generated-matrix');

    
        // validate the matrix
        if(!matrix_validator(mat1)) {
            document.body.insertAdjacentHTML('beforeend', toast_generator('Please enter valid matrix values!'));
                
            // remove the toast after 3 seconds
            setTimeout(function() {
                document.getElementById('toast-bottom-right').remove();
            }
            , 3000);
            return;
        }
        

        //check if it's a square matrix
        if(!square_matrix_checker(mat1)) {
            document.body.insertAdjacentHTML('beforeend', toast_generator('The matrix must be a square matrix!'));
                
            // remove the toast after 3 seconds
            setTimeout(function() {
                document.getElementById('toast-bottom-right').remove();
            }
            , 3000);
            return;
        }
    
        // if it's valid then perform the operation
        let result = determinant(mat1);
    
        // display the result in the determinant box
        
        html = '<p class="text-lg font-medium"> | A | : ' + result + '</p>'
        det_1_box.innerHTML = '';
        det_1_box.insertAdjacentHTML('beforeend', html);
});


mat2_det_btn.addEventListener('click', function() {


        det_2_box = document.getElementById('mat2-det');
        det_2_box.innerHTML = '';

        // check if the matrix is generated
        if ( document.getElementById('matrix-2-generated-matrix') == null ) {
            document.body.insertAdjacentHTML('beforeend', toast_generator('Please generate the matrix first!'));
            
            // remove the toast after 3 seconds
            setTimeout(function() { document.getElementById('toast-bottom-right').remove(); }, 3000);
            return;
        }
            
        // get the matrix
        let mat2 = matrix_to_array('matrix-2-generated-matrix');

        // validate the matrix
        if(!matrix_validator(mat2)) {
            document.body.insertAdjacentHTML('beforeend', toast_generator('Please enter valid matrix values!'));
                
            // remove the toast after 3 seconds
            setTimeout(function() {
                document.getElementById('toast-bottom-right').remove();
            }
            , 3000);
            return;
        }

        //check if it's a square matrix
        if(!square_matrix_checker(mat2)) {
            document.body.insertAdjacentHTML('beforeend', toast_generator('The matrix must be a square matrix!'));

            // remove the toast after 3 seconds
            setTimeout(function() {
                document.getElementById('toast-bottom-right').remove();
            }
            , 3000);
            return;
        }

        // if it's valid then perform the operation
        let result = determinant(mat2);

        // display the result in the determinant box
        html = '<p class="text-lg font-medium"> | B | : ' + result + '</p>'
        det_2_box.insertAdjacentHTML('beforeend', html);
});



ans_det_btn.addEventListener('click', function() {

    ans_det_box = document.getElementById('ans-det');
    ans_det_box.innerHTML = '';

    // check if the matrix is generated
    if ( document.getElementById('answer-generated-matrix') == null ) {
        document.body.insertAdjacentHTML('beforeend', toast_generator('Please compute first!'));
        
        // remove the toast after 3 seconds
        setTimeout(function() { document.getElementById('toast-bottom-right').remove(); }, 3000);
        return;
    }

    // get the matrix
    let ans = matrix_to_array('answer-generated-matrix');

    // no need to validate the matrix

    let det = determinant(ans);

    // display the result in the determinant box
    
    html = '<p class="text-lg font-medium"> | Ans | : ' + det + '</p>'
    ans_det_box.insertAdjacentHTML('beforeend', html);
});


// display matrices based on arguments (arr, box_id) 

function display_matrix(arr) {

    // get the row and column length
    let row = arr.length;
    let col = arr[0].length;

    let html = '';
    // iterate through the array and display the matrix
    html += '$$ \\begin{bmatrix} ';
    for(let i = 0; i < row; i++) {
        for(let j = 0; j < col; j++) {
            html += arr[i][j];
            if(j != col - 1) html += ' & ';
        }
        if(i != row - 1) html += ' \\\\ ';
    }
    html += '\\end{bmatrix} $$'; 
    return html;
}       

mat1_transpose_btn = document.getElementById('mat1-tra-btn');
mat2_transpose_btn = document.getElementById('mat2-tra-btn');
ans_transpose_btn = document.getElementById('ans-tra-btn');

let tra1_cont = document.getElementById('mat1-tra');
let tra2_cont = document.getElementById('mat2-tra');
let tra_ans_cont = document.getElementById('ans-tra');

function generate_latex_matrix(arr) {
    
    let html = '';

    // get the row and column length
    let row = arr.length;
    let col = arr[0].length;

    // iterate through the array and display the matrix
    html += '\\begin{pmatrix} ';
    for(let i = 0; i < row; i++) {
        for(let j = 0; j < col; j++) {
            html += Number(arr[i][j]);
            if(j != col - 1) html += ' & ';   
        }
        if(i != row - 1) html += ' \\\\ ';
    }

    html += '\\end{pmatrix}';

    return html;
}



mat1_transpose_btn.addEventListener('click', function() {

    mat1_transpose_box = document.getElementById('mat1-tra');
    mat1_transpose_box.innerHTML = '';

    // check if the matrix is generated
    if ( document.getElementById('matrix-1-generated-matrix') == null ) {
        document.body.insertAdjacentHTML('beforeend', toast_generator('Please generate the matrix first!'));
        
        // remove the toast after 3 seconds
        setTimeout(function() { document.getElementById('toast-bottom-right').remove(); }, 3000);
        return;
    }


    // get the matrix
    let mat1 = matrix_to_array('matrix-1-generated-matrix');

    // validate the matrix
    if(!matrix_validator(mat1)) {
        document.body.insertAdjacentHTML('beforeend', toast_generator('Please enter valid matrix values!'));
            
        // remove the toast after 3 seconds
        setTimeout(function() {
            document.getElementById('toast-bottom-right').remove();
        }
        , 3000);
        return;
    }

    // if it's valid then perform the operation
    let result = transpose(mat1);

    let transpose_result = display_matrix(result);

    // display the result in the transpose box

    html = transpose_result;
    let newdiv = document.createElement('div');
    newdiv.style = "text-align: center;";
    newdiv.innerHTML = html;

    MathJax.typesetPromise([newdiv]).then(() => {
        newdiv.outerHTML = newdiv.innerHTML;

        tra1_cont.appendChild(newdiv);
    });

    return;
});



mat2_transpose_btn.addEventListener('click', function() {

    mat2_transpose_box = document.getElementById('mat2-tra');
    mat2_transpose_box.innerHTML = '';

    // check if the matrix is generated
    if ( document.getElementById('matrix-2-generated-matrix') == null ) {
        document.body.insertAdjacentHTML('beforeend', toast_generator('Please generate the matrix first!'));
        
        // remove the toast after 3 seconds
        setTimeout(function() { document.getElementById('toast-bottom-right').remove(); }, 3000);
        return;
    }


    // get the matrix
    let mat2 = matrix_to_array('matrix-2-generated-matrix');

    // validate the matrix
    if(!matrix_validator(mat2)) {
        document.body.insertAdjacentHTML('beforeend', toast_generator('Please enter valid matrix values!'));
            
        // remove the toast after 3 seconds
        setTimeout(function() {
            document.getElementById('toast-bottom-right').remove();
        }
        , 3000);
        return;
    }

    // if it's valid then perform the operation
    let result = transpose(mat2);

    let transpose_result = display_matrix(result);

    // display the result in the transpose box

    html = transpose_result;
    let newdiv = document.createElement('div');
    newdiv.style = "text-align: center;";
    newdiv.innerHTML = html;

    MathJax.typesetPromise([newdiv]).then(() => {
        newdiv.outerHTML = newdiv.innerHTML;

        tra2_cont.appendChild(newdiv);
    });

    return;

});


ans_transpose_btn.addEventListener('click', function() {

    ans_transpose_box = document.getElementById('ans-tra');
    ans_transpose_box.innerHTML = '';

    // check if the matrix is generated
    if ( document.getElementById('answer-generated-matrix') == null ) {
        document.body.insertAdjacentHTML('beforeend', toast_generator('Please generate the matrix first!'));
        
        // remove the toast after 3 seconds
        setTimeout(function() { document.getElementById('toast-bottom-right').remove(); }, 3000);
        return;
    }


    // get the matrix
    let ans = matrix_to_array('answer-generated-matrix');


    // no need to validate the matrix as it's already validated

    let result = transpose(ans);

    let transpose_result = display_matrix(result);

    // display the result in the transpose box

    html = transpose_result;
    let newdiv = document.createElement('div');
    newdiv.style = "text-align: center;";
    newdiv.innerHTML = html;

    MathJax.typesetPromise([newdiv]).then(() => {
        newdiv.outerHTML = newdiv.innerHTML;

        tra_ans_cont.appendChild(newdiv);
    });

    return;

});




// inverse of a matrix

mat1_inv_btn = document.getElementById('mat1-inv-btn');
mat2_inv_btn = document.getElementById('mat2-inv-btn');
ans_inv_btn = document.getElementById('ans-inv-btn');


let inv1_cont = document.getElementById('mat1-inv');
let inv2_cont = document.getElementById('mat2-inv');
let inv_ans_cont = document.getElementById('ans-inv');



mat1_inv_btn.addEventListener('click', function() {


    mat1_inv_box = document.getElementById('mat1-inv');
    mat1_inv_box.innerHTML = '';

    // check if the matrix is generated
    if ( document.getElementById('matrix-1-generated-matrix') == null ) {
        document.body.insertAdjacentHTML('beforeend', toast_generator('Please generate the matrix first!'));
        
        // remove the toast after 3 seconds
        setTimeout(function() { document.getElementById('toast-bottom-right').remove(); }, 3000);
        return;
    }


    // get the matrix
    let mat1 = matrix_to_array('matrix-1-generated-matrix');

    // validate the matrix
    if(!matrix_validator(mat1)) {
        document.body.insertAdjacentHTML('beforeend', toast_generator('Please enter valid matrix values!'));
            
        // remove the toast after 3 seconds
        setTimeout(function() {
            document.getElementById('toast-bottom-right').remove();
        }
        , 3000);
        return;
    }

    // check if the matrix is square
    if (!square_matrix_checker(mat1)) {
        document.body.insertAdjacentHTML('beforeend', toast_generator('Please enter a square matrix!'));
            
        // remove the toast after 3 seconds
        setTimeout(function() {
            document.getElementById('toast-bottom-right').remove();
        }
        , 3000);
        return;
    }

    // if the matrix is square check the determinant
    let det = determinant(mat1);

    if (det == 0) {
        document.body.insertAdjacentHTML('beforeend', toast_generator('The matrix is singular!'));
            
        // remove the toast after 3 seconds
        setTimeout(function() {
            document.getElementById('toast-bottom-right').remove();
        }
        , 3000);
        return;
    }

    let result = inverse(mat1);

    let inverse_result = display_matrix(result);

    // display the result in the inverse box
    html = inverse_result;
    let newdiv = document.createElement('div');
    newdiv.style = "text-align: center;";
    newdiv.innerHTML = html;

    MathJax.typesetPromise([newdiv]).then(() => {
        newdiv.outerHTML = newdiv.innerHTML;

        inv1_cont.appendChild(newdiv);
    });

    return;
    
});


mat2_inv_btn.addEventListener('click', function() {

    mat2_inv_box = document.getElementById('mat2-inv');
    mat2_inv_box.innerHTML = '';

    // check if the matrix is generated
    if ( document.getElementById('matrix-2-generated-matrix') == null ) {
        document.body.insertAdjacentHTML('beforeend', toast_generator('Please generate the matrix first!'));
        
        // remove the toast after 3 seconds
        setTimeout(function() { document.getElementById('toast-bottom-right').remove(); }, 3000);
        return;
    }


    // get the matrix
    let mat2 = matrix_to_array('matrix-2-generated-matrix');

    // validate the matrix
    if(!matrix_validator(mat2)) {
        document.body.insertAdjacentHTML('beforeend', toast_generator('Please enter valid matrix values!'));
            
        // remove the toast after 3 seconds
        setTimeout(function() {
            document.getElementById('toast-bottom-right').remove();
        }
        , 3000);
        return;
    }

    // check if the matrix is square
    if (!square_matrix_checker(mat2)) {
        document.body.insertAdjacentHTML('beforeend', toast_generator('Please enter a square matrix!'));
            
        // remove the toast after 3 seconds
        setTimeout(function() {
            document.getElementById('toast-bottom-right').remove();
        }
        , 3000);
        return;
    }

    // check the determinant
    let det = determinant(mat2);

    if (det == 0) {
        document.body.insertAdjacentHTML('beforeend', toast_generator('The matrix is singular!'));
            
        // remove the toast after 3 seconds
        setTimeout(function() {
            document.getElementById('toast-bottom-right').remove();
        }
        , 3000);
        return;
    }

    let result = inverse(mat2);

    let inverse_result = display_matrix(result);

    // display the result in the inverse box
    html = inverse_result;
    let newdiv = document.createElement('div');
    newdiv.style = "text-align: center;";
    newdiv.innerHTML = html;

    MathJax.typesetPromise([newdiv]).then(() => {
        newdiv.outerHTML = newdiv.innerHTML;

        inv2_cont.appendChild(newdiv);
    });

    return;

});


ans_inv_btn.addEventListener('click', function() {

    ans_inv_box = document.getElementById('ans-inv');
    ans_inv_box.innerHTML = '';

    // check if the matrix is generated
    if ( document.getElementById('answer-generated-matrix') == null ) {
        document.body.insertAdjacentHTML('beforeend', toast_generator('Please generate the matrix first!'));
        
        // remove the toast after 3 seconds
        setTimeout(function() { document.getElementById('toast-bottom-right').remove(); }, 3000);
        return;
    }


    // get the matrix
    let ans = matrix_to_array('answer-generated-matrix');

    // validate the matrix
    if(!matrix_validator(ans)) {
        document.body.insertAdjacentHTML('beforeend', toast_generator('Please enter valid matrix values!'));
            
        // remove the toast after 3 seconds
        setTimeout(function() {
            document.getElementById('toast-bottom-right').remove();
        }
        , 3000);
        return;
    }

    // check if the matrix is square
    if (!square_matrix_checker(ans)) {
        document.body.insertAdjacentHTML('beforeend', toast_generator('Please enter a square matrix!'));
            
        // remove the toast after 3 seconds
        setTimeout(function() {
            document.getElementById('toast-bottom-right').remove();
        }
        , 3000);
        return;
    }

    // check the determinant
    let det = determinant(ans);

    if (det == 0) {
        document.body.insertAdjacentHTML('beforeend', toast_generator('The matrix is singular!'));
            
        // remove the toast after 3 seconds
        setTimeout(function() {
            document.getElementById('toast-bottom-right').remove();
        }
        , 3000);
        return;
    }

    let result = inverse(ans);

    let inverse_result = display_matrix(result);

    // display the result in the inverse box
    html = inverse_result;
    let newdiv = document.createElement('div');
    newdiv.style = "text-align: center;";
    newdiv.innerHTML = html;

    MathJax.typesetPromise([newdiv]).then(() => {
        newdiv.outerHTML = newdiv.innerHTML;

        inv_ans_cont.appendChild(newdiv);
    });

    return;


});
