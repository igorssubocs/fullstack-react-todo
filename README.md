# Task Manager App

Fullstack task management application using **MERN stack**.

## Technical Stack

### Frontend
- **Vite**
- **React**
- **JavaScript**
- **Tailwind CSS**
- **React Router**
- **Lucide React**

### Backend
- **Node.js**
- **Express.js**
- **MongoDB**

## Functional
- Creating tasks with a name and description
- Editing tasks
- Deleting tasks
- Searching for problems using the trigram algorithm
- Responsive design


## Technical details

### Trigram search
The app uses an n-gram algorithm (trigram) for intelligent search:
- Breaks text into trigrams (sequences of 3 characters)
- Compares query trigrams with trigrams in tasks
- Ranks results by relevance
- Priority: match in title > match in description