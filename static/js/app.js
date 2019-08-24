var tableData = data;
var tbody = d3.select("tbody");

tableData.forEach((sighting) => {
  var row = tbody.append("tr");
  Object.entries(sighting).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

// select the button
var button = d3.select("#filter-btn");
// complete the click handler for the form
button.on("click", function () {
  // select the input element and get the raw HTML node
  var input = d3.select("#datetime");
  // get the value property of the input element
  var filtered_value = input.property("value");
  console.log(filtered_value);
  // use the form input to filter the data by datetime
  var filteredData = tableData.filter(item => {
    return item.datetime === filtered_value;
  });

  tbody.html("");
  
  filteredData.forEach((filteredSighting) => {
    var row = tbody.append("tr");
    Object.entries(filteredSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
});
