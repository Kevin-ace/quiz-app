# React Quiz App

A modern, interactive quiz application built with React and Vite that tests users' knowledge on various technology-related topics.

## 🚀 Features

- Interactive quiz interface
- Real-time feedback on answers
- Score tracking
- Responsive design
- Progress tracking
- Final results display
- Option to retry quiz

## 🛠️ Technologies Used

- React 18
- Vite
- CSS3
- ESLint

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/quiz-app.git
```

2. Navigate to the project directory:

```bash
cd quiz-app
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

## 🎮 Usage

1. Start the quiz by clicking on any answer option
2. Select your answer from the four options provided
3. Get immediate feedback on your selection (green for correct, red for wrong)
4. Click "Next" to proceed to the next question
5. View your final score at the end
6. Choose to retry the quiz if desired

## 📁 Project Structure

```bash
quiz-app/
├── src/
│ ├── components/
│ │ └── Quiz/
│ │ ├── Quiz.jsx
│ │ └── Quiz.css
│ ├── assets/
│ │ └── data.js
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
├── public/
├── package.json
└── vite.config.js
```

## 🔧 Configuration

The quiz questions can be modified in the `data.js` file. Each question object should follow this structure:

```javascript
{
  question: "Your question here",
option1: "First option",
option2: "Second option",
option3: "Third option",
option4: "Fourth option",
ans: 1 // Number corresponding to correct option (1-4)
}
```

## 🎨 Customization

You can customize the appearance by modifying the CSS files:
- `Quiz.css` for quiz component styling
- `index.css` for global styles

## 📱 Responsive Design

The app is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

## 🚀 Deployment

Build the project for production:
```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

# quiz-app
