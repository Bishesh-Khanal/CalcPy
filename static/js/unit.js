// upon change of the unit-type select, update the unit select

let unitTypeSelect = document.getElementById('unit-type');
let unit_list_1 = document.getElementById('unit-list-1');
let unit_list_2 = document.getElementById('unit-list-2');

// options html maker

function make_options(column, options) {
    let html = '';
    html += '<div class="relative h-10 w-72 min-w-[200px]"> \n';
    html += '<select id = "units-'+column+'" class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-red-500 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"> \n';
    for (let i = 0; i < options.length; i++) {
        html += `<option value="${options[i].toLowerCase()}">${options[i]}</option> \n`;
    }
    html += '</select> \n';
    html += '<label class="before:content[\' \'] after:content[\' \'] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"> Select a unit </label>\n';
    html += '</div>';
    return html;
};





unitTypeSelect.addEventListener('change', function() {

    // get the selected unit type
    let unit_type = unitTypeSelect.value;

    // get the unit list for the selected unit type
    if (unit_type == 'area') {
        area_html_1 = make_options('1', ['Kilometer-Squared', 'Meter-Squared', 'Mile-Squared', 'Yard-Squared', 'Foot-Squared', 'Inch-Squared', 'Hectare', 'Acre']);
        area_html_2 = make_options('2', ['Kilometer-Squared', 'Meter-Squared', 'Mile-Squared', 'Yard-Squared', 'Foot-Squared', 'Inch-Squared', 'Hectare', 'Acre']);

        console.log(area_html_1);
        console.log(area_html_2);

        unit_list_1.innerHTML = area_html_1;
        unit_list_2.innerHTML = area_html_2;
        return;
    }

    if(unit_type == 'digital-storage') {
        ds_html_1 = make_options('1', ['Bit', 'Byte', 'KiloByte', 'MegaByte', 'GigaByte', 'TeraByte', 'PetaByte', 'ExaByte', 'ZettaByte', 'YottaByte']);
        ds_html_2 = make_options('2', ['Bit', 'Byte', 'KiloByte', 'MegaByte', 'GigaByte', 'TeraByte', 'PetaByte', 'ExaByte', 'ZettaByte', 'YottaByte']);

        unit_list_1.innerHTML = ds_html_1;
        unit_list_2.innerHTML = ds_html_2;

        return;
    }

    if (unit_type == 'energy') {
        energy_html_1 = make_options('1', ['Joule', 'KiloJoule', 'Calorie', 'KiloCalorie', 'Watt-Hour', 'KiloWatt-Hour', 'Electron-Volt', 'British-Thermal-Unit', 'US-Thermal-Unit', 'Foot-Pound']);
        energy_html_2 = make_options('2', ['Joule', 'KiloJoule', 'Calorie', 'KiloCalorie', 'Watt-Hour', 'KiloWatt-Hour', 'Electron-Volt', 'British-Thermal-Unit', 'US-Thermal-Unit', 'Foot-Pound']);

        unit_list_1.innerHTML = energy_html_1;
        unit_list_2.innerHTML = energy_html_2;

        return;
    }

    if(unit_type == 'frequency') {
        frequency_html_1 = make_options('1', ['Hertz', 'KiloHertz', 'MegaHertz', 'GigaHertz', 'TeraHertz']);
        frequency_html_2 = make_options('2', ['Hertz', 'KiloHertz', 'MegaHertz', 'GigaHertz', 'TeraHertz']);

        unit_list_1.innerHTML = frequency_html_1;
        unit_list_2.innerHTML = frequency_html_2;

        return;
    }



    if (unit_type == 'length') {
        length_html_1 = make_options('1', ['Kilometer', 'Meter', 'Centimeter', 'Millimeter', 'Micrometer', 'Nanometer', 'Mile', 'Yard', 'Foot',  'Inch']);
        length_html_2 = make_options('2', ['Kilometer', 'Meter', 'Centimeter', 'Millimeter', 'Micrometer', 'Nanometer', 'Mile', 'Yard', 'Foot',  'Inch']);

        unit_list_1.innerHTML = '';
        unit_list_2.innerHTML = '';

        unit_list_1.innerHTML = length_html_1;
        unit_list_2.innerHTML = length_html_2;

        return;
    }


    if (unit_type == 'mass') {
        mass_html_1 = make_options('1', ['Kilogram', 'Gram', 'Milligram', 'Microgram', 'Imperial-Ton', 'US-Ton', 'Stone', 'Pound', 'Ounce']);
        mass_html_2 = make_options('2', ['Kilogram', 'Gram', 'Milligram', 'Microgram', 'Imperial-Ton', 'US-Ton', 'Stone', 'Pound', 'Ounce']);

        unit_list_1.innerHTML = mass_html_1;
        unit_list_2.innerHTML = mass_html_2;

        return;
    }

    if (unit_type == 'temperature') {
        temperature_html_1 = make_options('1', ['Celsius', 'Fahrenheit', 'Kelvin']);
        temperature_html_2 = make_options('2', ['Celsius', 'Fahrenheit', 'Kelvin']);

        unit_list_1.innerHTML = temperature_html_1;
        unit_list_2.innerHTML = temperature_html_2;

        return;
    }

    if (unit_type == 'time') {
        time_html_1 = make_options('1', ['Nanosecond', 'Microsecond', 'Millisecond', 'Second', 'Minute', 'Hour', 'Day', 'Week', 'Month', 'Year']);
        time_html_2 = make_options('2', ['Nanosecond', 'Microsecond', 'Millisecond', 'Second', 'Minute', 'Hour', 'Day', 'Week', 'Month', 'Year']);

        unit_list_1.innerHTML = time_html_1;
        unit_list_2.innerHTML = time_html_2;

        return;
    }

    if (unit_type == 'volume') {
        volume_html_1 = make_options('1', ['Liter', 'Milliliter', 'US-Gallon', 'US-Quart', 'US-Pint', 'US-Cup', 'US-Fluid-Ounce', 'US-Tablespoon', 'US-Teaspoon', 'Cubic-Meter', 'Cubic-Centimeter', 'Imperial-Gallon', 'Imperial-Quart', 'Imperial-Pint', 'Imperial-Fluid-Ounce', 'Imperial-Tablespoon', 'Imperial-Teaspoon']);
        volume_html_2 = make_options('2', ['Liter', 'Milliliter', 'US-Gallon', 'US-Quart', 'US-Pint', 'US-Cup', 'US-Fluid-Ounce', 'US-Tablespoon', 'US-Teaspoon', 'Cubic-Meter', 'Cubic-Centimeter', 'Imperial-Gallon', 'Imperial-Quart', 'Imperial-Pint', 'Imperial-Fluid-Ounce', 'Imperial-Tablespoon', 'Imperial-Teaspoon']);

        unit_list_1.innerHTML = volume_html_1;
        unit_list_2.innerHTML = volume_html_2;

        return;
    }

    return;

});

// we apply dynamic change to the columns when the user changes the values in the input fields

// number validator 
function number_validator(number) {
    if (isNaN(number)) return false;
    number = Number(number);
    return true; 
}


// get the input fields 

let input_box_1 = document.getElementById('input-box-1');
let input_box_2 = document.getElementById('input-box-2');


function onChangeConversion1(){
    
    // get the value of the input box
    let input_value = input_box_1.value;

    // get the unit type
    let unit_type = unitTypeSelect.value;

    // get the units 
    let unit_1 = document.getElementById('units-1').value;
    let unit_2 = document.getElementById('units-2').value;

    // validate the input value
    if (!number_validator(input_value)) { input_box_2.value = ''; return; }

    // check if else for the unit type
    let result;

    if (unit_type == 'area') {

        // convert the input value to meter-squared
        if (unit_1 == 'kilometer-squared') result = input_value * 1000000;
        if (unit_1 == 'meter-squared') result = input_value;
        if (unit_1 == 'mile-squared') result = input_value * 2589988.110336;
        if (unit_1 == 'yard-squared') result = input_value * 0.83612736;
        if (unit_1 == 'foot-squared') result = input_value * 0.09290304;
        if (unit_1 == 'inch-squared') result = input_value * 0.00064516;
        if (unit_1 == 'hectare') result = input_value * 10000;
        if (unit_1 == 'acre') result = input_value * 4046.8564224;

        // convert the result to the desired unit
        if (unit_2 == 'kilometer-squared') result = result / 1000000;
        if (unit_2 == 'meter-squared') result = result;
        if (unit_2 == 'mile-squared') result = result / 2589988.110336;
        if (unit_2 == 'yard-squared') result = result / 0.83612736;
        if (unit_2 == 'foot-squared') result = result / 0.09290304;
        if (unit_2 == 'inch-squared') result = result / 0.00064516;
        if (unit_2 == 'hectare') result = result / 10000;
        if (unit_2 == 'acre') result = result / 4046.8564224;

        // set the value of the second input box
        input_box_2.value = result;
        return;
    }

    
    if (unit_type == 'digital-storage') {

        // convert the input value to bit
        if (unit_1 == 'bit') result = input_value;
        if (unit_1 == 'byte') result = input_value * 8;
        if (unit_1 == 'kilobyte') result = input_value * 8192;
        if (unit_1 == 'megabyte') result = input_value * 8388608;
        if (unit_1 == 'gigabyte') result = input_value * 8589934592;
        if (unit_1 == 'terabyte') result = input_value * 8796093022208;
        if (unit_1 == 'petabyte') result = input_value * 9007199254740992;
        if (unit_1 == 'exabyte') result = input_value * 9223372036854775808;
        if (unit_1 == 'zettabyte') result = input_value * 9444732965739290427392;
        if (unit_1 == 'yottabyte') result = input_value * 9671406556917033397649408;

        // convert the result to the desired unit
        if (unit_2 == 'bit') result = result;
        if (unit_2 == 'byte') result = result / 8;
        if (unit_2 == 'kilobyte') result = result / 8192;
        if (unit_2 == 'megabyte') result = result / 8388608;
        if (unit_2 == 'gigabyte') result = result / 8589934592;
        if (unit_2 == 'terabyte') result = result / 8796093022208;
        if (unit_2 == 'petabyte') result = result / 9007199254740992;
        if (unit_2 == 'exabyte') result = result / 9223372036854775808;
        if (unit_2 == 'zettabyte') result = result / 9444732965739290427392;
        if (unit_2 == 'yottabyte') result = result / 9671406556917033397649408;

        // set the value of the second input box    
        input_box_2.value = result;
        return;
    }

    if (unit_type == 'energy') {

        // convert the input value to joule
        if (unit_1 == 'joule') result = input_value;
        if (unit_1 == 'kilojoule') result = input_value * 1000;
        if (unit_1 == 'calorie') result = input_value * 4.184;
        if (unit_1 == 'kilocalorie') result = input_value * 4184;
        if (unit_1 == 'watt-hour') result = input_value * 3600;
        if (unit_1 == 'kilowatt-hour') result = input_value * 3600000;
        if (unit_1 == 'electron-volt') result = input_value * 1.602176634e-19;
        if (unit_1 == 'british-thermal-unit') result = input_value * 1055.05585262;
        if (unit_1 == 'us-thermal-unit') result = input_value * 1054.35026444;
        if (unit_1 == 'foot-pound') result = input_value * 1.3558179483314004;

        // convert the result to the desired unit
        if (unit_2 == 'joule') result = result;
        if (unit_2 == 'kilojoule') result = result / 1000;
        if (unit_2 == 'calorie') result = result / 4.184;
        if (unit_2 == 'kilocalorie') result = result / 4184;
        if (unit_2 == 'watt-hour') result = result / 3600;
        if (unit_2 == 'kilowatt-hour') result = result / 3600000;
        if (unit_2 == 'electron-volt') result = result / 1.602176634e-19;
        if (unit_2 == 'british-thermal-unit') result = result / 1055.05585262;
        if (unit_2 == 'us-thermal-unit') result = result / 1054.35026444;
        if (unit_2 == 'foot-pound') result = result / 1.3558179483314004;

        // set the value of the second input box
        input_box_2.value = result;
        return;
    }

    if (unit_type == 'frequency') {

        // convert the input value to hertz
        if (unit_1 == 'hertz') result = input_value;
        if (unit_1 == 'kilohertz') result = input_value * 1000;
        if (unit_1 == 'megahertz') result = input_value * 1000000;
        if (unit_1 == 'gigahertz') result = input_value * 1000000000;
        if (unit_1 == 'terahertz') result = input_value * 1000000000000;

        // convert the result to the desired unit
        if (unit_2 == 'hertz') result = result;
        if (unit_2 == 'kilohertz') result = result / 1000;
        if (unit_2 == 'megahertz') result = result / 1000000;
        if (unit_2 == 'gigahertz') result = result / 1000000000;
        if (unit_2 == 'terahertz') result = result / 1000000000000;

        // set the value of the second input box
        input_box_2.value = result;
        return;
    }

    if (unit_type == 'length') {

        // convert the input value to meter
        if (unit_1 == 'kilometer') result = input_value * 1000;
        if (unit_1 == 'meter') result = input_value;
        if (unit_1 == 'centimeter') result = input_value * 0.01;
        if (unit_1 == 'millimeter') result = input_value * 0.001;
        if (unit_1 == 'micrometer') result = input_value * 0.000001;
        if (unit_1 == 'nanometer') result = input_value * 0.000000001;
        if (unit_1 == 'mile') result = input_value * 1609.344;
        if (unit_1 == 'yard') result = input_value * 0.9144;
        if (unit_1 == 'foot') result = input_value * 0.3048;
        if (unit_1 == 'inch') result = input_value * 0.0254;

        // convert the result to the desired unit
        if (unit_2 == 'kilometer') result = result / 1000;
        if (unit_2 == 'meter') result = result;
        if (unit_2 == 'centimeter') result = result / 0.01;
        if (unit_2 == 'millimeter') result = result / 0.001;
        if (unit_2 == 'micrometer') result = result / 0.000001;
        if (unit_2 == 'nanometer') result = result / 0.000000001;
        if (unit_2 == 'mile') result = result / 1609.344;
        if (unit_2 == 'yard') result = result / 0.9144;
        if (unit_2 == 'foot') result = result / 0.3048;
        if (unit_2 == 'inch') result = result / 0.0254;

        // set the value of the second input box
        input_box_2.value = result;
        return;
    }

    if (unit_type == 'mass') {

        // convert the input value to kilogram
        if (unit_1 == 'kilogram') result = input_value;
        if (unit_1 == 'gram') result = input_value * 0.001;
        if (unit_1 == 'milligram') result = input_value * 0.000001;
        if (unit_1 == 'microgram') result = input_value * 0.000000001;
        if (unit_1 == 'imperial-ton') result = input_value * 1016.0469088;
        if (unit_1 == 'us-ton') result = input_value * 907.18474;
        if (unit_1 == 'stone') result = input_value * 6.35029318;
        if (unit_1 == 'pound') result = input_value * 0.45359237;
        if (unit_1 == 'ounce') result = input_value * 0.028349523125;

        // convert the result to the desired unit
        if (unit_2 == 'kilogram') result = result;
        if (unit_2 == 'gram') result = result / 0.001;
        if (unit_2 == 'milligram') result = result / 0.000001;
        if (unit_2 == 'microgram') result = result / 0.000000001;
        if (unit_2 == 'imperial-ton') result = result / 1016.0469088;
        if (unit_2 == 'us-ton') result = result / 907.18474;
        if (unit_2 == 'stone') result = result / 6.35029318;
        if (unit_2 == 'pound') result = result / 0.45359237;
        if (unit_2 == 'ounce') result = result / 0.028349523125;

        // set the value of the second input box
        input_box_2.value = result;
        return;
    }

    if (unit_type == 'temperature') {

        // convert the input value to celsius  
        if (unit_1 == 'celsius') result = input_value;
        if (unit_1 == 'fahrenheit') result = (input_value - 32) * 5 / 9;
        if (unit_1 == 'kelvin') result = input_value - 273.15;

        // convert the result to the desired unit
        if (unit_2 == 'celsius') result = result;
        if (unit_2 == 'fahrenheit') result = (result * 9 / 5) + 32;
        if (unit_2 == 'kelvin') result = result + 273.15;

        // set the value of the second input box
        input_box_2.value = result;
        return;
    }

    if (unit_type == 'time') {

        // convert the input value to second
        if (unit_1 == 'nanosecond') result = input_value * 0.000000001;
        if (unit_1 == 'microsecond') result = input_value * 0.000001;
        if (unit_1 == 'millisecond') result = input_value * 0.001;
        if (unit_1 == 'second') result = input_value;
        if (unit_1 == 'minute') result = input_value * 60;
        if (unit_1 == 'hour') result = input_value * 3600;
        if (unit_1 == 'day') result = input_value * 86400;
        if (unit_1 == 'week') result = input_value * 604800;
        if (unit_1 == 'month') result = input_value * 2629800;
        if (unit_1 == 'year') result = input_value * 31557600;

        // convert the result to the desired unit
        if (unit_2 == 'nanosecond') result = result / 0.000000001;
        if (unit_2 == 'microsecond') result = result / 0.000001;
        if (unit_2 == 'millisecond') result = result / 0.001;
        if (unit_2 == 'second') result = result;
        if (unit_2 == 'minute') result = result / 60;
        if (unit_2 == 'hour') result = result / 3600;
        if (unit_2 == 'day') result = result / 86400;
        if (unit_2 == 'week') result = result / 604800;
        if (unit_2 == 'month') result = result / 2629800;
        if (unit_2 == 'year') result = result / 31557600;
        
        // set the value of the second input box
        input_box_2.value = result;
        return;
    }

    if (unit_type == 'volume') {
        
        // convert the input value to liter
        if (unit_1 == 'liter') result = input_value;
        if (unit_1 == 'milliliter') result = input_value * 0.001;
        if (unit_1 == 'us-gallon') result = input_value * 3.785411784;
        if (unit_1 == 'us-quart') result = input_value * 0.946352946;
        if (unit_1 == 'us-pint') result = input_value * 0.473176473;
        if (unit_1 == 'us-cup') result = input_value * 0.2365882365;
        if (unit_1 == 'us-fluid-ounce') result = input_value * 0.0295735295625;
        if (unit_1 == 'us-tablespoon') result = input_value * 0.01478676478125;
        if (unit_1 == 'us-teaspoon') result = input_value * 0.00492892159375;
        if (unit_1 == 'cubic-meter') result = input_value * 1000;
        if (unit_1 == 'cubic-centimeter') result = input_value * 0.001;
        if (unit_1 == 'imperial-gallon') result = input_value * 4.54609;
        if (unit_1 == 'imperial-quart') result = input_value * 1.1365225;
        if (unit_1 == 'imperial-pint') result = input_value * 0.56826125;
        if (unit_1 == 'imperial-fluid-ounce') result = input_value * 0.0284130625;
        if (unit_1 == 'imperial-tablespoon') result = input_value * 0.0177581640625;
        if (unit_1 == 'imperial-teaspoon') result = input_value * 0.0059193880208333;

        // convert the result to the desired unit
        if (unit_2 == 'liter') result = result;
        if (unit_2 == 'milliliter') result = result / 0.001;
        if (unit_2 == 'us-gallon') result = result / 3.785411784;
        if (unit_2 == 'us-quart') result = result / 0.946352946;
        if (unit_2 == 'us-pint') result = result / 0.473176473;
        if (unit_2 == 'us-cup') result = result / 0.2365882365;
        if (unit_2 == 'us-fluid-ounce') result = result / 0.0295735295625;
        if (unit_2 == 'us-tablespoon') result = result / 0.01478676478125;
        if (unit_2 == 'us-teaspoon') result = result / 0.00492892159375;
        if (unit_2 == 'cubic-meter') result = result / 1000;
        if (unit_2 == 'cubic-centimeter') result = result / 0.001;
        if (unit_2 == 'imperial-gallon') result = result / 4.54609;
        if (unit_2 == 'imperial-quart') result = result / 1.1365225;
        if (unit_2 == 'imperial-pint') result = result / 0.56826125;
        if (unit_2 == 'imperial-fluid-ounce') result = result / 0.0284130625;
        if (unit_2 == 'imperial-tablespoon') result = result / 0.0177581640625;
        if (unit_2 == 'imperial-teaspoon') result = result / 0.0059193880208333;

        // set the value of the second input box
        input_box_2.value = result;
        return;
    }

    return;
}


function onChangeConversion2() {
        // get the value of the input box
        let input_value = input_box_2.value;

        // get the unit type
        let unit_type = unitTypeSelect.value;
    
        // get the units 
        let unit_1 = document.getElementById('units-1').value;
        let unit_2 = document.getElementById('units-2').value;
    
        // validate the input value
        if (!number_validator(input_value)) { input_box_1.value = ''; return; }
    
        // check if else for the unit type
        let result;
    
        if (unit_type == 'area') {
            
            // convert the input value to meter-squared
            if (unit_2 == 'kilometer-squared') result = input_value * 1000000;
            if (unit_2 == 'meter-squared') result = input_value;
            if (unit_2 == 'mile-squared') result = input_value * 2589988.110336;
            if (unit_2 == 'yard-squared') result = input_value * 0.83612736;
            if (unit_2 == 'foot-squared') result = input_value * 0.09290304;
            if (unit_2 == 'inch-squared') result = input_value * 0.00064516;
            if (unit_2 == 'hectare') result = input_value * 10000;
            if (unit_2 == 'acre') result = input_value * 4046.8564224;
    
            // convert the result to the desired unit
            if (unit_1 == 'kilometer-squared') result = result / 1000000;
            if (unit_1 == 'meter-squared') result = result;
            if (unit_1 == 'mile-squared') result = result / 2589988.110336;
            if (unit_1 == 'yard-squared') result = result / 0.83612736;
            if (unit_1 == 'foot-squared') result = result / 0.09290304;
            if (unit_1 == 'inch-squared') result = result / 0.00064516;
            if (unit_1 == 'hectare') result = result / 10000;
            if (unit_1 == 'acre') result = result / 4046.8564224;
    
            // set the value of the second input box
            input_box_1.value = result;
            return;
        }
    
        
        if (unit_type == 'digital-storage') {
    
            // convert the input value to bit
            if (unit_2 == 'bit') result = input_value;
            if (unit_2 == 'byte') result = input_value * 8;
            if (unit_2 == 'kilobyte') result = input_value * 8192;
            if (unit_2 == 'megabyte') result = input_value * 8388608;
            if (unit_2 == 'gigabyte') result = input_value * 8589934592;
            if (unit_2 == 'terabyte') result = input_value * 8796093022208;
            if (unit_2 == 'petabyte') result = input_value * 9007199254740992;
            if (unit_2 == 'exabyte') result = input_value * 9223372036854775808;
            if (unit_2 == 'zettabyte') result = input_value * 9444732965739290427392;
            if (unit_2 == 'yottabyte') result = input_value * 9671406556917033397649408;
    
            // convert the result to the desired unit
            if (unit_1 == 'bit') result = result;
            if (unit_1 == 'byte') result = result / 8;
            if (unit_1 == 'kilobyte') result = result / 8192;
            if (unit_1 == 'megabyte') result = result / 8388608;
            if (unit_1 == 'gigabyte') result = result / 8589934592;
            if (unit_1 == 'terabyte') result = result / 8796093022208;
            if (unit_1 == 'petabyte') result = result / 9007199254740992;
            if (unit_1 == 'exabyte') result = result / 9223372036854775808;
            if (unit_1 == 'zettabyte') result = result / 9444732965739290427392;
            if (unit_1 == 'yottabyte') result = result / 9671406556917033397649408;
    
            // set the value of the second input box    
            input_box_1.value = result;
            return;
        }
    
        if (unit_type == 'energy') {
    
            // convert the input value to joule
            if (unit_2 == 'joule') result = input_value;
            if (unit_2 == 'kilojoule') result = input_value * 1000;
            if (unit_2 == 'calorie') result = input_value * 4.184;
            if (unit_2 == 'kilocalorie') result = input_value * 4184;
            if (unit_2 == 'watt-hour') result = input_value * 3600;
            if (unit_2 == 'kilowatt-hour') result = input_value * 3600000;
            if (unit_2 == 'electron-volt') result = input_value * 1.602176634e-19;
            if (unit_2 == 'british-thermal-unit') result = input_value * 1055.05585262;
            if (unit_2 == 'us-thermal-unit') result = input_value * 1054.35026444;
            if (unit_2 == 'foot-pound') result = input_value * 1.3558179483314004;
    
            // convert the result to the desired unit
            if (unit_1 == 'joule') result = result;
            if (unit_1 == 'kilojoule') result = result / 1000;
            if (unit_1 == 'calorie') result = result / 4.184;
            if (unit_1 == 'kilocalorie') result = result / 4184;
            if (unit_1 == 'watt-hour') result = result / 3600;
            if (unit_1 == 'kilowatt-hour') result = result / 3600000;
            if (unit_1 == 'electron-volt') result = result / 1.602176634e-19;
            if (unit_1 == 'british-thermal-unit') result = result / 1055.05585262;
            if (unit_1 == 'us-thermal-unit') result = result / 1054.35026444;
            if (unit_1 == 'foot-pound') result = result / 1.3558179483314004;
    
            // set the value of the second input box
            input_box_1.value = result;
            return;
        }
    
        if (unit_type == 'frequency') {
    
            // convert the input value to hertz
            if (unit_2 == 'hertz') result = input_value;
            if (unit_2 == 'kilohertz') result = input_value * 1000;
            if (unit_2 == 'megahertz') result = input_value * 1000000;
            if (unit_2 == 'gigahertz') result = input_value * 1000000000;
            if (unit_2 == 'terahertz') result = input_value * 1000000000000;
            
            // convert the result to the desired unit
            if (unit_1 == 'hertz') result = result;
            if (unit_1 == 'kilohertz') result = result / 1000;
            if (unit_1 == 'megahertz') result = result / 1000000;
            if (unit_1 == 'gigahertz') result = result / 1000000000;
            if (unit_1 == 'terahertz') result = result / 1000000000000;
    
            // set the value of the second input box
            input_box_1.value = result;
            return;
        }
    
        if (unit_type == 'length') {
    
            // convert the input value to meter
            if (unit_2 == 'kilometer') result = input_value * 1000;
            if (unit_2 == 'meter') result = input_value;
            if (unit_2 == 'centimeter') result = input_value * 0.01;
            if (unit_2 == 'millimeter') result = input_value * 0.001;
            if (unit_2 == 'micrometer') result = input_value * 0.000001;
            if (unit_2 == 'nanometer') result = input_value * 0.000000001;
            if (unit_2 == 'mile') result = input_value * 1609.344;
            if (unit_2 == 'yard') result = input_value * 0.9144;
            if (unit_2 == 'foot') result = input_value * 0.3048;
            if (unit_2 == 'inch') result = input_value * 0.0254;
    
            // convert the result to the desired unit
            if (unit_1 == 'kilometer') result = result / 1000;
            if (unit_1 == 'meter') result = result;
            if (unit_1 == 'centimeter') result = result / 0.01;
            if (unit_1 == 'millimeter') result = result / 0.001;
            if (unit_1 == 'micrometer') result = result / 0.000001;
            if (unit_1 == 'nanometer') result = result / 0.000000001;
            if (unit_1 == 'mile') result = result / 1609.344;
            if (unit_1 == 'yard') result = result / 0.9144;
            if (unit_1 == 'foot') result = result / 0.3048;
            if (unit_1 == 'inch') result = result / 0.0254;
    
            // set the value of the second input box
            input_box_1.value = result;
            return;
        }
    
        if (unit_type == 'mass') {
    
            // convert the input value to kilogram
            if (unit_2 == 'kilogram') result = input_value;
            if (unit_2 == 'gram') result = input_value * 0.001;
            if (unit_2 == 'milligram') result = input_value * 0.000001;
            if (unit_2 == 'microgram') result = input_value * 0.000000001;
            if (unit_2 == 'imperial-ton') result = input_value * 1016.0469088;
            if (unit_2 == 'us-ton') result = input_value * 907.18474;
            if (unit_2 == 'stone') result = input_value * 6.35029318;
            if (unit_2 == 'pound') result = input_value * 0.45359237;
            if (unit_2 == 'ounce') result = input_value * 0.028349523125;
    
            // convert the result to the desired unit
            if (unit_1 == 'kilogram') result = result;
            if (unit_1 == 'gram') result = result / 0.001;
            if (unit_1 == 'milligram') result = result / 0.000001;
            if (unit_1 == 'microgram') result = result / 0.000000001;
            if (unit_1 == 'imperial-ton') result = result / 1016.0469088;
            if (unit_1 == 'us-ton') result = result / 907.18474;
            if (unit_1 == 'stone') result = result / 6.35029318;
            if (unit_1 == 'pound') result = result / 0.45359237;
            if (unit_1 == 'ounce') result = result / 0.028349523125;
    
            // set the value of the second input box
            input_box_1.value = result;
            return;
        }
    
        if (unit_type == 'temperature') {
    
            // convert the input value to celsius  
            if (unit_2 == 'celsius') result = input_value;
            if (unit_2 == 'fahrenheit') result = (input_value - 32) * 5 / 9;
            if (unit_2 == 'kelvin') result = input_value - 273.15;
    
            // convert the result to the desired unit
            if (unit_1 == 'celsius') result = result;
            if (unit_1 == 'fahrenheit') result = (result * 9 / 5) + 32;
            if (unit_1 == 'kelvin') result = result + 273.15;
    
            // set the value of the second input box
            input_box_1.value = result;
            return;
        }
    
        if (unit_type == 'time') {
    
            // convert the input value to second
            if (unit_2 == 'nanosecond') result = input_value * 0.000000001;
            if (unit_2 == 'microsecond') result = input_value * 0.000001;
            if (unit_2 == 'millisecond') result = input_value * 0.001;
            if (unit_2 == 'second') result = input_value;
            if (unit_2 == 'minute') result = input_value * 60;
            if (unit_2 == 'hour') result = input_value * 3600;
            if (unit_2 == 'day') result = input_value * 86400;
            if (unit_2 == 'week') result = input_value * 604800;
            if (unit_2 == 'month') result = input_value * 2629800;
            if (unit_2 == 'year') result = input_value * 31557600;
    
            // convert the result to the desired unit
            if (unit_1 == 'nanosecond') result = result / 0.000000001;
            if (unit_1 == 'microsecond') result = result / 0.000001;
            if (unit_1 == 'millisecond') result = result / 0.001;
            if (unit_1 == 'second') result = result;
            if (unit_1 == 'minute') result = result / 60;
            if (unit_1 == 'hour') result = result / 3600;
            if (unit_1 == 'day') result = result / 86400;
            if (unit_1 == 'week') result = result / 604800;
            if (unit_1 == 'month') result = result / 2629800;
            if (unit_1 == 'year') result = result / 31557600;
            
            // set the value of the second input box
            input_box_1.value = result;
            return;
        }
    
        if (unit_type == 'volume') {
            
            // convert the input value to liter
            if (unit_2 == 'liter') result = input_value;
            if (unit_2 == 'milliliter') result = input_value * 0.001;
            if (unit_2 == 'us-gallon') result = input_value * 3.785411784;
            if (unit_2 == 'us-quart') result = input_value * 0.946352946;
            if (unit_2 == 'us-pint') result = input_value * 0.473176473;
            if (unit_2 == 'us-cup') result = input_value * 0.2365882365;
            if (unit_2 == 'us-fluid-ounce') result = input_value * 0.0295735295625;
            if (unit_2 == 'us-tablespoon') result = input_value * 0.01478676478125;
            if (unit_2 == 'us-teaspoon') result = input_value * 0.00492892159375;
            if (unit_2 == 'cubic-meter') result = input_value * 1000;
            if (unit_2 == 'cubic-centimeter') result = input_value * 0.001;
            if (unit_2 == 'imperial-gallon') result = input_value * 4.54609;
            if (unit_2 == 'imperial-quart') result = input_value * 1.1365225;
            if (unit_2 == 'imperial-pint') result = input_value * 0.56826125;
            if (unit_2 == 'imperial-fluid-ounce') result = input_value * 0.0284130625;
            if (unit_2 == 'imperial-tablespoon') result = input_value * 0.0177581640625;
            if (unit_2 == 'imperial-teaspoon') result = input_value * 0.0059193880208333;
    
            // convert the result to the desired unit
            if (unit_1 == 'liter') result = result;
            if (unit_1 == 'milliliter') result = result / 0.001;
            if (unit_1 == 'us-gallon') result = result / 3.785411784;
            if (unit_1 == 'us-quart') result = result / 0.946352946;
            if (unit_1 == 'us-pint') result = result / 0.473176473;
            if (unit_1 == 'us-cup') result = result / 0.2365882365;
            if (unit_1 == 'us-fluid-ounce') result = result / 0.0295735295625;
            if (unit_1 == 'us-tablespoon') result = result / 0.01478676478125;
            if (unit_1 == 'us-teaspoon') result = result / 0.00492892159375;
            if (unit_1 == 'cubic-meter') result = result / 1000;
            if (unit_1 == 'cubic-centimeter') result = result / 0.001;
            if (unit_1 == 'imperial-gallon') result = result / 4.54609;
            if (unit_1 == 'imperial-quart') result = result / 1.1365225;
            if (unit_1 == 'imperial-pint') result = result / 0.56826125;
            if (unit_1 == 'imperial-fluid-ounce') result = result / 0.0284130625;
            if (unit_1 == 'imperial-tablespoon') result = result / 0.0177581640625;
            if (unit_1 == 'imperial-teaspoon') result = result / 0.0059193880208333;
    
            // set the value of the second input box
            input_box_1.value = result;
            return;
        }
    
        return;
}


input_box_1.addEventListener('input', onChangeConversion1);
input_box_2.addEventListener('input', onChangeConversion2);

document.getElementById('un').classList.add('active');