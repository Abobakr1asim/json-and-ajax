
$(document).ready(function() {
    $("#hide").click(function(){$("table").hide();});
    $("#retrieve-resources").click(function() {
       // $("#display-resources").toggle();
        var displayResources = $("#display-resources");

        displayResources.text("Loading data from JSON source...");

        $.ajax({
            type: "GET",
            url: "js/data/json.json", // json.json file to serve results
            success: function(result) {
               // console.log(result);
                var output =
                    "<table class='table table-hover table-info'><thead class='thead-dark'><tr><th>id</th><th>name</th><th>email</th></thead><tbody>";
                for (var asim in result) {
                    output +=
                        "<tr class='table-bordered '><td class='table-danger'>" +
                        result[asim].id +
                        "</td><td>" +
                        result[asim].name +
                        "</td><td>" +
                        result[asim].email +
                        "</td></tr>";
                }
                output += "</tbody></table>";

                    displayResources.html(output);
                $("table").addClass("table");
            }
        });
    });
});