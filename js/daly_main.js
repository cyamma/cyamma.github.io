// Chropleth Life Expectancy
var format = function(d) {
    return d3.format(',.02f')(d) + ' Years';
}

// Initiating the Choropleth
var map0 = d3.geomap.choropleth()
    .geofile('data/countries.json')
    .column("2000 [YR2000]")
    .unitId('Country Code')
    .colors(colorbrewer.PuBu[9])
    .format(format)
    .legend(true);

var map1 = d3.geomap.choropleth()
    .geofile('data/countries.json')
    .column("2001 [YR2001]")
    .unitId('Country Code')
    .colors(colorbrewer.PuBu[9])
    .format(format)
    .legend(true);

var map2 = d3.geomap.choropleth()
    .geofile('data/countries.json')
    .column("2002 [YR2002]")
    .unitId('Country Code')
    .colors(colorbrewer.PuBu[9])
    .format(format)
    .legend(true);

var map3 = d3.geomap.choropleth()
    .geofile('data/countries.json')
    .column("2003 [YR2003]")
    .unitId('Country Code')
    .colors(colorbrewer.PuBu[9])
    .format(format)
    .legend(true);

var map4 = d3.geomap.choropleth()
    .geofile('data/countries.json')
    .column("2004 [YR2004]")
    .unitId('Country Code')
    .colors(colorbrewer.PuBu[9])
    .format(format)
    .legend(true);

var map5 = d3.geomap.choropleth()
    .geofile('data/countries.json')
    .column("2005 [YR2005]")
    .unitId('Country Code')
    .colors(colorbrewer.PuBu[9])
    .format(format)
    .legend(true);

var map6 = d3.geomap.choropleth()
    .geofile('data/countries.json')
    .column("2006 [YR2006]")
    .unitId('Country Code')
    .colors(colorbrewer.PuBu[9])
    .format(format)
    .legend(true);

var map7 = d3.geomap.choropleth()
    .geofile('data/countries.json')
    .column("2007 [YR2007]")
    .unitId('Country Code')
    .colors(colorbrewer.PuBu[9])
    .format(format)
    .legend(true);

var map8 = d3.geomap.choropleth()
    .geofile('data/countries.json')
    .column("2008 [YR2008]")
    .unitId('Country Code')
    .colors(colorbrewer.PuBu[9])
    .format(format)
    .legend(true);

var map9 = d3.geomap.choropleth()
    .geofile('data/countries.json')
    .column("2009 [YR2009]")
    .unitId('Country Code')
    .colors(colorbrewer.PuBu[9])
    .format(format)
    .legend(true);

var map10 = d3.geomap.choropleth()
    .geofile('data/countries.json')
    .column("2010 [YR2010]")
    .unitId('Country Code')
    .colors(colorbrewer.PuBu[9])
    .format(format)
    .legend(true);

var map11 = d3.geomap.choropleth()
    .geofile('data/countries.json')
    .column("2011 [YR2011]")
    .unitId('Country Code')
    .colors(colorbrewer.PuBu[9])
    .format(format)
    .legend(true);

var map12 = d3.geomap.choropleth()
    .geofile('data/countries.json')
    .column("2012 [YR2012]")
    .unitId('Country Code')
    .colors(colorbrewer.PuBu[9])
    .format(format)
    .legend(true);

var map13 = d3.geomap.choropleth()
    .geofile('data/countries.json')
    .column("2013 [YR2013]")
    .unitId('Country Code')
    .colors(colorbrewer.PuBu[9])
    .format(format)
    .legend(true);

var map14 = d3.geomap.choropleth()
    .geofile('data/countries.json')
    .column("2014 [YR2014]")
    .unitId('Country Code')
    .colors(colorbrewer.PuBu[9])
    .format(format)
    .legend(true);

// Load the data into the Choropleth

d3.csv('data/Life_Expectancy.csv', function(error, data) {
    d3.select('#map0')
        .datum(data)
        .call(map0.draw, map0);
});

d3.csv('data/Life_Expectancy.csv', function(error, data) {
    d3.select('#map1')
        .datum(data)
        .call(map1.draw, map1);
});

d3.csv('data/Life_Expectancy.csv', function(error, data) {
    d3.select('#map2')
        .datum(data)
        .call(map2.draw, map2);
});

d3.csv('data/Life_Expectancy.csv', function(error, data) {
    d3.select('#map3')
        .datum(data)
        .call(map3.draw, map3);
});

d3.csv('data/Life_Expectancy.csv', function(error, data) {
    d3.select('#map4')
        .datum(data)
        .call(map4.draw, map4);
});

d3.csv('data/Life_Expectancy.csv', function(error, data) {
    d3.select('#map5')
        .datum(data)
        .call(map5.draw, map5);
});

d3.csv('data/Life_Expectancy.csv', function(error, data) {
    d3.select('#map6')
        .datum(data)
        .call(map6.draw, map6);
});

d3.csv('data/Life_Expectancy.csv', function(error, data) {
    d3.select('#map7')
        .datum(data)
        .call(map7.draw, map7);
});

d3.csv('data/Life_Expectancy.csv', function(error, data) {
    d3.select('#map8')
        .datum(data)
        .call(map8.draw, map8);
});

d3.csv('data/Life_Expectancy.csv', function(error, data) {
    d3.select('#map9')
        .datum(data)
        .call(map9.draw, map9);
});

d3.csv('data/Life_Expectancy.csv', function(error, data) {
    d3.select('#map10')
        .datum(data)
        .call(map10.draw, map10);
});

d3.csv('data/Life_Expectancy.csv', function(error, data) {
    d3.select('#map11')
        .datum(data)
        .call(map11.draw, map11);
});

d3.csv('data/Life_Expectancy.csv', function(error, data) {
    d3.select('#map12')
        .datum(data)
        .call(map12.draw, map12);
});

d3.csv('data/Life_Expectancy.csv', function(error, data) {
    d3.select('#map13')
        .datum(data)
        .call(map13.draw, map13);
});

d3.csv('data/Life_Expectancy.csv', function(error, data) {
    d3.select('#map14')
        .datum(data)
        .call(map14.draw, map14);
});

$(document).ready(function () {
  $('.group').hide();
  $('#option0').show();
  $('#selectMe').change(function () {
    $('.group').hide();
    $('#'+$(this).val()).show();
  })
});

// End of Choropleth Life Expectancy


// Line Graph Average Life Expectancy

// sets dimension and properties of the canvas
var margin = {top: 20, right: 40, bottom: 40, left: 38},
    width = 400 - margin.left - margin.right,
    height = 250 - margin.top - margin.bottom;

// passing the Year in format of 'mon'
var parseYear = d3.time.format("%Y").parse;

// life expectancy vs year
// Set the ranges of the x and y scale
var x = d3.time.scale().range([0, width]);
// minimum is height and maximum is 0, meaning no space between the joining of the axis
var y = d3.scale.linear().range([height, 0]);

// life expectancy vs gdp
// Set the ranges of the x and y scale
var x2 = d3.scale.linear().domain([300000000000, 30000000000000]).range([0, width]);
// minimum is height and maximum is 0, meaning no space between the joining of the axis
var y2 = d3.scale.linear().range([height, 0]);

// Define the axes, using tick to pass the format of 'mon'
// place the axis on the "bottom"
var xAxis = d3.svg.axis().scale(x)
    .orient("bottom").tickFormat(d3.time.format("%Y"));

var formatxAxis = d3.format('.2e');
var xAxis2 = d3.svg.axis()
    .orient("bottom").scale(x2).ticks(5, "s");

// displays the value to 1 decimal place
var formatyAxis = d3.format('.0f');

// displays the value on the y variables and to 1 decimal place
var yAxis = d3.svg.axis().scale(y)
    .orient("left").tickFormat(formatyAxis).ticks(10);

// creates variable line for shop 1 and 2
var valueline = d3.svg.line()
    .x(function(d) { return x(d.Year); })
    .y(function(d) { return y(d.lifeExpectancy); });

// for gdp vs le
var valuelinegdple = d3.svg.line()
    .x(function(d) { return x2(d.GDP); })
    .y(function(d) { return y2(d.lifeExpectancy); });
    
// creates container for the svg
var svgAvgLineGraph = d3.select("#avgLinegraph")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", 
              "translate(" + margin.left + "," + margin.top + ")");

var svgGDPvsLE = d3.select("#GDPvsLEgraph")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", 
              "translate(" + margin.left + "," + margin.top + ")");

// defining the tooltips
var ttLE = d3.select("body").append('div')  
    .attr("class", "tooltip")               
    .style("opacity", 0);

var ttGDPvsLE = d3.select("body").append('div')  
    .attr("class", "tooltip")               
    .style("opacity", 0);

//variables for the tooltips, storing the Strings
var incometext = "Years: ";
var decimaltext = "";

var yearsText = "Years: ";
var gdpText = "GDP: $";

// reads in the data.csv and its attributes
d3.csv("data/leGDP.csv", function(error, data) {
    data.forEach(function(d) {
        d.Year = parseYear(String(d.Year));
        d.lifeExpectancy = +d.lifeExpectancy;
        d.GDP = +d.GDP;
    });

    // AVG Line Graph

    // scales the x and y to fit the requirment of Year and shops
    x.domain(d3.extent(data, function(d) { return d.Year; }));
    y.domain([65, d3.max(data, function(d) { return Math.max(d.lifeExpectancy); }) + 1]);

    // Add the time-series line through the values for Shop 1
    svgAvgLineGraph.append("path")
        .attr("class", "line")
        .style("stroke", "lightblue")
        .attr("d", valueline(data));

    // Add the scatterplot for Shop 1
    svgAvgLineGraph.selectAll("dot")
        .data(data)
      .enter().append("circle")
        .attr("r", 3.5)
        .attr("cx", function(d) { return x(d.Year); })
        .attr("cy", function(d) { return y(d.lifeExpectancy); })
        .attr("fill", "blue")
        // displays box showing income when mouse hovers over
        .on("mouseover", function(d) {       
            ttLE.transition()        
                .duration(200) // duration of the tooltip during first hover over     
                .style("opacity", .9);      
            ttLE .html(incometext + "<br/>" + d3.round(d.lifeExpectancy, 2) + decimaltext) // displays the text "income: " and the value in 1 decimal place 
                .style("left", (d3.event.pageX - 40) + "px")     
                .style("top", (d3.event.pageY - 30) + "px");    
            })                  
        .on("mouseout", function(d) {       
            ttLE.transition()        
                .duration(200) // duration of how long the tooltip lasts after hover off  
                .style("opacity", 0);   
        });
    
    // Adds in the x Axis
    svgAvgLineGraph.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    // Adds in the y Axis
    svgAvgLineGraph.append("g") //groups class
        .attr("class", "y axis")
        .call(yAxis);

    // add main title to the graph
    svgAvgLineGraph.append("text")
        .attr("x", (width / 2))
        .attr("y", -4)
        .attr("text-anchor", "middle")
        .style("font-size", "16px")
        .style("text-decoration", "underline")
        .text("Average Life Expectancy Over the Years")

    // add the label of the x axis
    svgAvgLineGraph.append("text")
        .attr("x", (width / 2))
        .attr("y", height + (margin.bottom - 7))
        .style("text-anchor", "middle") 
        .text("Time (Year)");

    // add the label of the y axis
    svgAvgLineGraph.append("text")
        .attr("x", 7 - margin.left)
        .attr("y", (height / 2))
        .attr("text-anchor", "middle")
        .text("LE");

    // GDP vs LE graph

    // scales the x and y to fit the requirment of Year and shops
    x2.domain(d3.extent(data, function(d) { return d.GDP; }));
    y2.domain([65, d3.max(data, function(d) { return Math.max(d.lifeExpectancy); }) + 1]);

    // Add the scatterplot for Shop 1
    svgGDPvsLE.selectAll("dot")
        .data(data)
      .enter().append("circle")
        .attr("r", 3.5)
        .attr("cx", function(d) { return x2(d.GDP); })
        .attr("cy", function(d) { return y2(d.lifeExpectancy); })
        .attr("fill", "blue")
        // displays box showing income when mouse hovers over
        .on("mouseover", function(d) {       
            ttGDPvsLE.transition()        
                .duration(200) // duration of the tooltip during first hover over     
                .style("opacity", .9);      
            ttGDPvsLE.html(yearsText + "<br/>" + d3.round(d.lifeExpectancy, 2) + "<br/>" + gdpText + d.GDP) // displays the text "income: " and the value in 1 decimal place 
                .style("left", (d3.event.pageX - 40) + "px")     
                .style("top", (d3.event.pageY - 30) + "px");    
            })                  
        .on("mouseout", function(d) {       
            ttGDPvsLE.transition()        
                .duration(200) // duration of how long the tooltip lasts after hover off  
                .style("opacity", 0);   
        });
    
    // Adds in the x Axis
    svgGDPvsLE.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis2);

    // Adds in the y Axis
    svgGDPvsLE.append("g") //groups class
        .attr("class", "y axis")
        .call(yAxis);

    // add main title to the graph
    svgGDPvsLE.append("text")
        .attr("x", (width / 2))
        .attr("y", -4)
        .attr("text-anchor", "middle")
        .style("font-size", "16px")
        .style("text-decoration", "underline")
        .text("Average Life Expectancy and GDP")

    // add the label of the x axis
    svgGDPvsLE.append("text")
        .attr("x", (width / 2))
        .attr("y", height + (margin.bottom - 7))
        .style("text-anchor", "middle") 
        .text("GDP ($)");

    // add the label of the y axis
    svgGDPvsLE.append("text")
        .attr("x", 7 - margin.left)
        .attr("y", (height / 2))
        .attr("text-anchor", "middle")
        .text("LE");
});

// End of Line Graph Average Life Expectancy

// manually creating the data of type java (json) for the motion chart
var data = [{
        "name": "East Asia & Pacific",
        "region": "East Asia & Pacific",
        "population": [
            [2000, 2045719304],
            [2001, 2064256190],
            [2002, 2081838347],
            [2003, 2098591772],
            [2004, 2114733687],
            [2005, 2130532480],
            [2006, 2146003642],
            [2007, 2160752291],
            [2008, 2175660860],
            [2009, 2190177014],
            [2010, 2204603357],
            [2011, 2219099361],
            [2012, 2233925733],
            [2013, 2248909163],
            [2014, 2264058207]
    ], 
        "lifeExpectancy": [
            [2000, 71.39],
            [2001, 71.76],
            [2002, 72.12],
            [2003, 72.46],
            [2004, 72.79],
            [2005, 73.06],
            [2006, 73.34],
            [2007, 73.58],
            [2008, 73.80],
            [2009, 74.02],
            [2010, 74.19],
            [2011, 74.35],
            [2012, 74.55],
            [2013, 74.74],
            [2014, 74.93]
    ],
        "gdp": [
            [2000, 8123810615617],
            [2001, 7558788091252],
            [2002, 7688845195207],
            [2003, 8454649250834],
            [2004, 9482314200450],
            [2005, 10095963405729],
            [2006, 10719924071846],
            [2007, 12017044907374],
            [2008, 13859361240763],
            [2009, 14266092173115],
            [2010, 16646691111278],
            [2011, 19273060936197],
            [2012, 20639939934217],
            [2013, 20854948941187],
            [2014, 21467980438307]
    ]
}, {
        "name": "Europe & Central Asia",
        "region": "Europe & Central Asia",
        "population": [
            [2000, 861962323],
            [2001, 863464756],
            [2002, 865165049],
            [2003, 867444690],
            [2004, 870039128],
            [2005, 872691148],
            [2006, 875386168],
            [2007, 878398727],
            [2008, 881895816],
            [2009, 885550281],
            [2010, 889046791],
            [2011, 892467445],
            [2012, 894249380],
            [2013, 899572111],
            [2014, 901978575]
    ], 
        "lifeExpectancy": [
            [2000, 73.02],
            [2001, 73.34],
            [2002, 73.40],
            [2003, 73.51],
            [2004, 73.94],
            [2005, 74.09],
            [2006, 74.57],
            [2007, 74.92],
            [2008, 75.17],
            [2009, 75.55],
            [2010, 75.84],
            [2011, 76.37],
            [2012, 76.56],
            [2013, 76.79],
            [2014, 76.89]
    ],
        "gdp": [
            [2000, 9925562058489],
            [2001, 10032194932465],
            [2002, 10979001413361],
            [2003, 13382990678394],
            [2004, 15605965132081],
            [2005, 16622711281309],
            [2006, 17995939923015],
            [2007, 21037510725765],
            [2008, 23096069362154],
            [2009, 20329892575827],
            [2010, 20833169212840],
            [2011, 22937131867929],
            [2012, 22008064602331],
            [2013, 22951201156421],
            [2014, 23183777043004]
    ]
}, {
    "name": "Latin America & Caribbean",
        "region": "Latin America & Caribbean",
        "population": [
            [2000, 525886558],
            [2001, 533449671],
            [2002, 540884684],
            [2003, 548225528],
            [2004, 555515431],
            [2005, 562783235],
            [2006, 570029991],
            [2007, 577248307],
            [2008, 584435842],
            [2009, 591577623],
            [2010, 598662941],
            [2011, 605674766],
            [2012, 612617659],
            [2013, 619487209],
            [2014, 626269527]
    ], 
        "lifeExpectancy": [
            [2000, 71.51],
            [2001, 71.83],
            [2002, 72.13],
            [2003, 72.41],
            [2004, 72.67],
            [2005, 72.92],
            [2006, 73.15],
            [2007, 73.38],
            [2008, 73.60],
            [2009, 73.82],
            [2010, 74.04],
            [2011, 74.26],
            [2012, 74.49],
            [2013, 74.71],
            [2014, 74.94],
    ],
        "gdp": [
            [2000, 2263130225780],
            [2001, 2205568775012],
            [2002, 1977354954128],
            [2003, 2037300320655],
            [2004, 2368638258036],
            [2005, 2867409575251],
            [2006, 3366096540635],
            [2007, 3978237572380],
            [2008, 4621168880663],
            [2009, 4344426603213],
            [2010, 5373441134711],
            [2011, 6087975652209],
            [2012, 6169327651783],
            [2013, 6345519376542],
            [2014, 6253493117689]
    ]
}, {
    "name": "Middle East & North Africa",
        "region": "Middle East & North Africa",
        "population": [
            [2000, 315152002],
            [2001, 321230141],
            [2002, 327306993],
            [2003, 333494898],
            [2004, 339941989],
            [2005, 346735318],
            [2006, 353923119],
            [2007, 361451154],
            [2008, 369228612],
            [2009, 377133473],
            [2010, 384945112],
            [2011, 393003905],
            [2012, 401144535],
            [2013, 409324396],
            [2014, 417451788]
    ], 
        "lifeExpectancy": [
            [2000, 69.74],
            [2001, 70.01],
            [2002, 70.26],
            [2003, 70.49],
            [2004, 70.73],
            [2005, 70.95],
            [2006, 71.19],
            [2007, 71.41],
            [2008, 71.63],
            [2009, 71.86],
            [2010, 72.07],
            [2011, 72.26],
            [2012, 72.44],
            [2013, 72.63],
            [2014, 72.82]
    ],
        "gdp": [
            [2000, 961691134198],
            [2001, 965250458459],
            [2002, 961443148947],
            [2003, 1082750053478],
            [2004, 1258781818295],
            [2005, 1517131605864],
            [2006, 1776265999918],
            [2007, 2110398484126],
            [2008, 2636340485393],
            [2009, 2350793490211],
            [2010, 2736460934534],
            [2011, 3280166467260],
            [2012, 3550021490730],
            [2013, 3576594801386],
            [2014, 3520091046667]
    ]
}, {
        "name": "North America",
        "region": "North America",
        "population": [
            [2000, 312993944],
            [2001, 316113359],
            [2002, 319050105],
            [2003, 321847258],
            [2004, 324864038],
            [2005, 327892753],
            [2006, 331014940],
            [2007, 334184023],
            [2008, 337405012],
            [2009, 340465736],
            [2010, 343417455],
            [2011, 346128976],
            [2012, 348928352],
            [2013, 351718031],
            [2014, 354465895]
    ], 
        "lifeExpectancy": [
            [2000, 66.66],
            [2001, 66.98],
            [2002, 67.28],
            [2003, 67.59],
            [2004, 67.89],
            [2005, 68.18],
            [2006, 68.47],
            [2007, 68.76],
            [2008, 69.03],
            [2009, 69.32],
            [2010, 69.59],
            [2011, 69.85],
            [2012, 70.10],
            [2013, 70.34],
            [2014, 70.58]
    ],
        "gdp": [
            [2000, 11027715147894],
            [2001, 11358221425149],
            [2002, 11733982930033],
            [2003, 12402608291469],
            [2004, 13297813932823],
            [2005, 14262738384226],
            [2006, 15172055119875],
            [2007, 15941401754545],
            [2008, 16267310484701],
            [2009, 15795385199538],
            [2010, 16584130197731],
            [2011, 17312273132799],
            [2012, 18001411134432],
            [2013, 18612590885409],
            [2014, 19210139300922]
    ]
}, {
        "name": "South Asia",
        "region": "South Asia",
        "population": [
            [2000, 1386406570],
            [2001, 1411288216],
            [2002, 1436509869],
            [2003, 1461691023],
            [2004, 1486610311],
            [2005, 1511135613],
            [2006, 1535287611],
            [2007, 1559056624],
            [2008, 1582576481],
            [2009, 1605926788],
            [2010, 1629223562],
            [2011, 1652487921],
            [2012, 1675019307],
            [2013, 1698093032],
            [2014, 1721152580]
    ], 
        "lifeExpectancy": [
            [2000, 62.91],
            [2001, 63.30],
            [2002, 63.69],
            [2003, 64.07],
            [2004, 64.44],
            [2005, 64.80],
            [2006, 65.18],
            [2007, 65.55],
            [2008, 65.93],
            [2009, 66.31],
            [2010, 66.70],
            [2011, 67.07],
            [2012, 67.44],
            [2013, 67.79],
            [2014, 68.12]
    ],
        "gdp": [
            [2000, 629218213749],
            [2001, 645830778947],
            [2002, 679729515374],
            [2003, 793221517960],
            [2004, 919797959629],
            [2005, 1053910008265],
            [2006, 1204953472747],
            [2007, 1526158574232],
            [2008, 1552632048542],
            [2009, 1706841276033],
            [2010, 2093718920591],
            [2011, 2284614000522],
            [2012, 2301943612415],
            [2013, 2361515495718],
            [2014, 2588688024255]
    ]
    }, {
        "name": "Sub-Saharan Africa",
        "region": "Sub-Saharan Africa",
        "population": [
            [2000, 667742098],
            [2001, 685795280],
            [2002, 704102354],
            [2003, 722925207],
            [2004, 742396040],
            [2005, 762555740],
            [2006, 783427658],
            [2007, 805010175],
            [2008, 827287676],
            [2009, 850225069],
            [2010, 873800152],
            [2011, 898002051],
            [2012, 922840423],
            [2013, 948287652],
            [2014, 974315197]
    ], 
        "lifeExpectancy": [
            [2000, 50.34],
            [2001, 50.62],
            [2002, 51.00],
            [2003, 51.49],
            [2004, 52.06],
            [2005, 52.72],
            [2006, 53.43],
            [2007, 54.18],
            [2008, 54.93],
            [2009, 55.65],
            [2010, 56.34],
            [2011, 56.97],
            [2012, 57.55],
            [2013, 58.08],
            [2014, 58.56]
    ],
        "gdp": [
            [2000, 362910349544],
            [2001, 337643820425],
            [2002, 363597131427],
            [2003, 465146666702],
            [2004, 578127924150],
            [2005, 683807337957],
            [2006, 798705220927],
            [2007, 920818950602],
            [2008, 1049509664538],
            [2009, 996042982341],
            [2010, 1336840906464],
            [2011, 1510556040409],
            [2012, 1582355692308],
            [2013, 1667560287073],
            [2014, 1745241568844]
    ]
}];

function yMC(d) {
    return d.lifeExpectancy;
}

function xMC(d) {
    return d.gdp;
}

function radius(d) {
    return d.population;
}

function color(d) {
    return d.region;
}

function key(d) {
    return d.name;
}

var region = ""; // default constructor 

var marginMC = { //dimension
    top: 19.5,
    right: 19.5,
    bottom: 19.5,
    left: 39.5
},
    widthMC = 960 - marginMC.right,
    heightMC = 500 - marginMC.top - marginMC.bottom,
    yearMargin = 10;

// defining the range for the scale of x axis and y axis, as well as the scale for the radius
var xScaleMC = d3.scale.linear().domain([300000000000, 30000000000000]).range([0, widthMC - yearMargin]),
    yScaleMC = d3.scale.linear().domain([45, 80]).range([heightMC, 0]),
    radiusScale = d3.scale.linear().domain([300000000, 3000000000]).range([5, 60]),
    colorScale = d3.scale.category20(); // using cat20 as the default categorical color for the circles

// Defining the x and y acis
var formatter = d3.format(".0"); //default formatter
var xAxisMC = d3.svg.axis().orient("bottom").scale(xScaleMC).ticks(15, "s"), //defining prop for scale - 7 ticks
    yAxisMC = d3.svg.axis().scale(yScaleMC).orient("left").tickFormat(formatter);

//boxwork container for the svg
var motionchartSVG = d3.select("#motionchart").append("svg")
    .attr("width", widthMC + marginMC.left + marginMC.right)
    .attr("height", heightMC + marginMC.top + marginMC.bottom)
    .append("g")
    .attr("transform", "translate(" + marginMC.left + "," + marginMC.top + ")");

// place x axis in the container, translate it, distaince is 0, touch the y axis
motionchartSVG.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + heightMC + ")")
    .call(xAxisMC);

// place y axis in the container
motionchartSVG.append("g")
    .attr("class", "y axis")
    .call(yAxisMC);

// places label on the x axis
motionchartSVG.append("text")
    .attr("class", "x label")
    .attr("text-anchor", "end")
    .attr("x", widthMC)
    .attr("y", heightMC - 2)
    .text("GDP ($ Trillions)"); // add label for the X axis

// Label for y axis
motionchartSVG.append("text")
    .attr("class", "y label")
    .attr("text-anchor", "end")
    .attr("y", 6)
    .attr("dy", ".75em") // distance between text and y-axis
    .attr("transform", "rotate(-90)") // rotate label so it's vertical
    .text("Life Expectancy (Year)"); // add label for the y axis

// transition
var label = motionchartSVG.append("text")
    .attr("class", "year label")
    .attr("text-anchor", "end")
    .attr("y", heightMC - 24)
    .attr("x", widthMC)
    .text(2000); // places the year label

// places text for the region representation
var country = motionchartSVG.append("text")
    .attr("class", "country")
    .attr("y", heightMC - marginMC.bottom)
    .attr("x", marginMC.left)
    .text("");

// load data
draw(data);

function draw(nations) {

    var regions = "";

    // bisector
    var bisect = d3.bisector(function (d) {
        return d[0];
    });

    // add the circle for all region, set default to 2000
    var tooltip = d3.select("body")
        .append("div")
        .style("position", "absolute") //allow overaly
        .style("z-index", "10")
        .style("visibility", "hidden") // hide
        // .text("tooltop");

    // tooltip.text("tooltip");

    var dots = motionchartSVG.append("g")
        .attr("class", "dots"); //circle to represent the region

    var dot = dots.selectAll(".dot") // places the circle
        .data(interpolateData(2000)) //default at 2000
        .enter().append("circle")
        .attr("class", "dot")
        .style("fill", function (d) {
        return colorScale(color(d)); 
    })
        // creating the tooltip for hover over, defining what the user sees
        .on("mouseover", function (d) { 
        tooltip.html("<b>Country Region:</b> " + d.name + "<br><b>Life Expectancy:</b> " + d.lifeExpectancy.toFixed(2) + "<br><b>GDP:</b></br>" +  d.gdp.toFixed(0) + "<br><b>Population:</b></br>" + d.population.toFixed(0));
        tooltip.attr('class', 'd3-tip');
        return tooltip.style("visibility", "visible"); //show
    })
        .on("mousemove", function (d) {
        tooltip.html("<strong>Country Region:</strong> " + d.name + "<br><b>Life Expectancy:</b> " + d.lifeExpectancy.toFixed(2) + "<br><b>GDP:</b></br>" +  d.gdp.toFixed(0) + "<br><b>Population:</b></br>" + d.population.toFixed(0));
        return tooltip.style("top", (d3.event.pageY - 10) + "px").style("left", (d3.event.pageX + 10) + "px"); // follow the tooltip, show only when clicked
    })
        .on("mouseout", function (d) {
        return tooltip.style("visibility", "hidden"); //upon hoveroff of the circle, hide
    })
        .on("click", function (d) { // selects region, click on circle
        if (region === d.name) {
            region = ""; //default constructor
        } else {
            region = d.name;
        }
        country.text(region); //places text on the bottom, sets opacity factor when clicked.
        dot.style("opacity", function (d) {
            return region === "" && regions.indexOf(d.name) != -1 || region === d.name ? 1.0 : 0.1;
        });
    })
        .call(position)
        .sort(order);


    // Add an overlay for year text
    var box = label.node().getBBox();

    var overlay = motionchartSVG.append("rect") //overaly of type rectangle
        .attr("class", "overlay")
        .attr("x", box.x)
        .attr("y", box.y)
        .attr("width", box.width)
        .attr("height", box.height)
        .on("mouseover", permitInteraction);

    // Sets the timer for the duration of the transitioning
    motionchartSVG.transition()
        .duration(25000)
        .ease("linear")
        .tween("year", tweenYear)
        .each("end", permitInteraction);

    // places the circle on the graph based on the gdp and life expectancy
    function position(dot) {
        dot.attr("cx", function (d) {
            return xScaleMC(xMC(d));
        })
            .attr("cy", function (d) {
            return yScaleMC(yMC(d));
        })
            .attr("r", function (d) {
            return radiusScale(radius(d));
        });
    }

    // if circles overlay, the smallest circle is placed on top
    function order(a, b) {
        return radius(b) - radius(a);
    }

    // Allow interaction after the transition ends
    function permitInteraction() {
        var yearScale = d3.scale.linear()
            .domain([2000, 2014]) // year 2000 to 2014
            .range([box.x + 10, box.x + box.width - 10])
            .clamp(true);


        // discontinue the automatic transition if cursor hovers over the year text
        motionchartSVG.transition().duration(0);

        overlay.on("mouseover", mouseover)
            .on("mouseout", mouseout)
            .on("mousemove", mousemove)
            .on("touchmove", mousemove);

        function mouseover() {
            label.classed("active", true);
        }

        function mouseout() {
            label.classed("active", false);
        }

        function mousemove() {
            displayYear(yearScale.invert(d3.mouse(this)[0]));
        }
    }
    // tweens entire chart by year then data
    // redraw circle for interpolated data
    function tweenYear() {
        var year = d3.interpolateNumber(2000, 2014);
        return function (t) {
            displayYear(year(t));
        };
    }

    // update chart to show the year selected on the text
    function displayYear(year) {
        dot.data(interpolateData(year), key).call(position).sort(order);
        label.text(Math.round(year));
    }
    // Interpolates the data
    function interpolateData(year) {
        return nations.map(function (d) {
            return {
                name: d.name,
                region: d.region,
                lifeExpectancy: interpolateValues(d.lifeExpectancy, year),
                population: interpolateValues(d.population, year),
                gdp: interpolateValues(d.gdp, year)
            };
        });
    }

    // locates value for the specified year from data
    function interpolateValues(values, year) {
        var i = bisect.left(values, year, 0, values.length - 1),
            a = values[i];
        if (i > 0) {
            var b = values[i - 1],
                t = (year - a[0]) / (b[0] - a[0]);
            return a[1] * (1 - t) + b[1] * t;
        }
        return a[1];
    }
}
// End of motion chart
