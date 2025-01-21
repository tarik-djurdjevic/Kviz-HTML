# Quiz Website with JSON Generator

This repository contains:

- A Python script (`generator-pitanja.py`) to extract questions and answers from Word documents and convert them into a JSON format required for the website.
- A static website that displays the quiz with basic functionalities built using vanilla JavaScript.

## Features

1. **Automated JSON Generation**:

   - The questions and answers are extracted from Word documents using the provided Python script.
   - This eliminates the need for manual insertion of questions and answers.
   - The script processes the Word document and outputs a JSON file instantly, enabling rapid quiz generation.

2. **Static Website**:
   - A simple website built in vanilla JavaScript to display the quiz.
   - Basic functionalities include rendering questions, capturing answers, and showing results.

## Data Source

The questions and answers were sourced from: [Državni Ispit Questions](https://drzavni-ispit.foto55.com/ispitna%20pitanja.html).

## How It Works

1. Run the Python script (`generator-pitanja.py`) to generate the JSON file from a Word document.
2. Place the generated JSON file in the appropriate location for the website.
3. Open the static website to take the quiz using the new set of questions and answers.

## Benefits

- Quickly generate new quizzes with minimal effort.
- A tool designed for easier learning, built to streamline the process of studying for exams.

## Demo

Visit the live website: [Quiz Website](https://tarik-djurdjevic.github.io/Kviz-HTML/)

## How to Use

1. Clone this repository:
   ```bash
   git clone https://github.com/tarik-djurdjevic/Kviz-HTML.git
   ```
2. Ensure you have Python installed.
3. Run the `generator-pitanja.py` script:
   ```bash
   python generator-pitanja.py
   ```
4. Place the generated JSON file into the website directory.
5. Open `index.html` in your browser to start the quiz.

## Technologies Used

- **Python**: For processing Word documents and generating JSON files.
- **HTML/CSS/JavaScript**: To create the static website.

## Author

This project was created by Tarik Djurdjevic for easier learning and rapid quiz generation.

---

Feel free to fork, use, or modify this project as needed!
