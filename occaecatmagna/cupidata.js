// Sample data representing rows of a table
var tableData = [
    { name: 'Alice', age: 25, city: 'New York' },
    { name: 'Bob', age: 30, city: 'San Francisco' },
    { name: 'Charlie', age: 28, city: 'Chicago' }
];

// Generating the table body
var tableBody = '';
for (var i = 0; i < tableData.length; i++) {
    tableBody += '<tr>';
    tableBody += '<td>' + tableData[i].name + '</td>';
    tableBody += '<td>' + tableData[i].age + '</td>';
    tableBody += '<td>' + tableData[i].city + '</td>';
    tableBody += '</tr>';
}

// Outputting the complete table HTML
var completeTable = '<table><tbody>' + tableBody + '</tbody></table>';
console.log(completeTable);
