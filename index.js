// Get all the buttons as Nodelist
let presentBtns = document.querySelectorAll(".p");
let absentBtns = document.querySelectorAll(".a");

// Function to count all present and absent student as well as percentage
const countAttendence = () => {
  // Get all the required tags
  let allPresents = document.querySelectorAll(".presentFlag");
  let allAbsents = document.querySelectorAll(".absantFlag");
  let presentShow = document.getElementById("pt");
  let absentShow = document.getElementById("at");
  let presentPercentageShow = document.getElementById("pp");
  let absentPercentageShow = document.getElementById("ap");

  // Convert string to integer for calculation
  let presentCount = parseInt(allPresents.length);
  let absentCount = parseInt(allAbsents.length);

  // Updating DOM
  presentShow.innerHTML = presentCount;
  absentShow.innerHTML = absentCount;

  // Calculating Percentage
  let totalCount = presentCount + absentCount;
  let per_Present = parseInt((presentCount / totalCount) * 100);
  let per_Absent = parseInt((absentCount / totalCount) * 100);

  // Updating DOM
  presentPercentageShow.innerHTML = `${per_Present}%`;
  absentPercentageShow.innerHTML = `${per_Absent}%`;
};

// From Nodelist we get one single item inside the forEach function
presentBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.add("g-light");
    // Get the parent element / <tr> tag
    let studentInfo = btn.parentElement.parentElement;
    // Add a class to mark student as present
    studentInfo.classList.add("presentFlag");
    // Check if student is already absent
    if (btn.parentElement.parentElement.classList.contains("absantFlag")) {
      studentInfo.classList.remove("absantFlag");
      studentInfo.querySelector(".r-light").classList.remove("r-light");
    }
    countAttendence(); // Call countAttendence function
  });
});
absentBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.add("r-light");
    let studentInfo = btn.parentElement.parentElement;
    // Add a class to mark student as absent
    studentInfo.classList.add("absantFlag");
    // Check if student is already present
    if (btn.parentElement.parentElement.classList.contains("presentFlag")) {
      studentInfo.classList.remove("presentFlag");
      studentInfo.querySelector(".g-light").classList.remove("g-light");
    }
    countAttendence(); // call countAttendence function
  });
});
