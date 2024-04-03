let submitBtn = document.getElementById("arrow");
submitBtn.addEventListener("click", function () {
  const birthDay = document.getElementById("b-day").value;
  const birthMonth = document.getElementById("b-month").value;
  const birthYear = document.getElementById("b-year").value;
  const currentDate = new Date();
  const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const outputYear = document.getElementById("output-year");
  const outputMonth = document.getElementById("output-month");
  const outputDay = document.getElementById("output-day");
  const invalidDayMsg = document.getElementById("invalid-b-day");
  const invalidMonthMsg = document.getElementById("invalid-b-month");
  const invalidYearMsg = document.getElementById("invalid-b-year");

  if (
    document.getElementById("b-day").checkValidity() == true &&
    document.getElementById("b-month").checkValidity() == true &&
    document.getElementById("b-year").checkValidity() == true
  ) {
    let currentDay = currentDate.getDate();
    let currentMonth = 1 + currentDate.getMonth();
    let currentYear = currentDate.getFullYear();
    if (birthDay > currentDay) {
      currentDay += months[currentMonth - 1];
      currentMonth -= 1;
    }
    if (birthMonth > currentMonth) {
      currentMonth += 12;
      currentYear -= 1;
    }
    let diffDay = currentDay - birthDay;
    let diffMonth = currentMonth - birthMonth;
    let diffYear = currentYear - birthYear;
    outputYear.innerText = diffYear;
    outputMonth.innerText = diffMonth;
    outputDay.innerText = diffDay;
  } else {
    if (document.getElementById("b-day").checkValidity() == false) {
      invalidDayMsg.style.display = "block";
    } else {
      invalidDayMsg.style.display = "none";
    }

    if (document.getElementById("b-month").checkValidity() == false) {
      invalidMonthMsg.style.display = "block";
    } else {
      invalidMonthMsg.style.display = "none";
    }

    if (document.getElementById("b-year").checkValidity() == false) {
      invalidYearMsg.style.display = "block";
    } else {
      invalidYearMsg.style.display = "none";
    }
  }
});
