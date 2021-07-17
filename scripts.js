var Calculator = function() {
    var date = parseInt(
        document.getElementById("Form").elements.namedItem("date").value
        );
        var month = parseInt(
            document.getElementById("Form").elements.namedItem("month").value
          );
          var year = parseInt(
            document.getElementById("Form").elements.namedItem("year").value
          );
          var gender = document.getElementById("Form").elements.namedItem("gender")
            .value;
            var dateOfBirth = new Date(year + "/" + month + "/" + date);
            var weekDay = dateOfBirth.getDay();

            if (month < 1 || month > 12 || (month == 2 && date > 29)) {
                return (document.getElementById("alert2").innerHTML =
                  "INPUT A VALID MONTH!");
              } else if (date < 1 || date > 31) {
                return (document.getElementById("alert2").innerHTML =
                  "INPUT A VALID DATE!");
              } else if (year === NaN || year < 1900 || year > 2025) {
                document.getElementById("alert2").innerHTML =
                  "INPUT A VALID YEAR!";
              }
              var akanMale = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

              var akanFemale = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
            
              var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];