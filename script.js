window.onload = function () {
  // Function to fetch the list of quiz folders (directories)
  fetchQuizList();

  function fetchQuizList() {
    // List of quiz folders
    const quizFolders = [
      "Europske integracije",
      "Osnove radnih odnosa",
      "Osnove sustava državne uprave-pitanja",
      "Uredsko poslovanje u organima uprave-pitanja",
      "Osnove ustavnog sustava-pitanja",
    ]; // Add or modify as needed
    const quizListContainer = document.getElementById("quiz-list");

    quizFolders.forEach(function (quizName) {
      const quizItem = document.createElement("div");
      quizItem.classList.add("quiz-item");

      // Create a link for each quiz
      const quizLink = document.createElement("a");
      quizLink.href = `./kviz.html?folderName=${quizName}`;
      quizLink.textContent = `Ispit: ${quizName}`;

      quizItem.appendChild(quizLink);
      quizListContainer.appendChild(quizItem);
    });
  }
};
