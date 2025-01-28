# QuizMaker

QuizMaker is a web application that allows users to create and take quizzes. Users can input quiz data in JSON format, and the application will generate a quiz based on the provided data. The application also provides a detailed summary of the user's performance.

## Features

- Create quizzes by inputting JSON data
- Navigate to a questions page to take the quiz
- Detailed summary of performance, including:
  - Average time taken to answer questions
  - Time taken for correct and incorrect answers

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)
- Git

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/quizMaker.git
   cd quizMaker
   ```

2.Install the dependencies:

`npm install`

3.Start the development server:

`npm start`

4.Open your browser and navigate to `http://localhost:3000` to see the application in action.

### Usage

1. Enter your quiz data in JSON format in the provided textarea.
2. Click the "Create Quiz" button to generate the quiz.
3. Answer the questions on the questions page.
4. View the detailed summary of your performance after completing the quiz.

### Example JSON Data

Here is an example of the JSON data format expected by the application:

```
[
  {
    "question": "What is the capital of France?",
    "options": ["Paris", "London", "Berlin", "Madrid"],
    "answer": "Paris"
  },
  {
    "question": "What is 2 + 2?",
    "options": ["3", "4", "5", "6"],
    "answer": "4"
  }
]
```

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'Add some feature'`).
5.  Push to the branch (`git push origin feature/your-feature`).
6.  Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](vscode-file://vscode-app/c:/Users/lucar/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html 'LICENSE') file for details.

## Acknowledgments

- [React](vscode-file://vscode-app/c:/Users/lucar/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html 'https://reactjs.org/')
- [React Router](vscode-file://vscode-app/c:/Users/lucar/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html 'https://reactrouter.com/')
- [Toastify](vscode-file://vscode-app/c:/Users/lucar/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html 'https://fkhadra.github.io/react-toastify/')
