// --- Data Structures ---
const originalAllQuestions = {
    level1: [
        // --- LEVEL 1 – Easy (25 Questions) ---
        { question: "Who won the inaugural PKL season in 2014?", options: ["U Mumba", "Patna Pirates", "Jaipur Pink Panthers", "Bengal Warriors"], correctAnswer: "Jaipur Pink Panthers" },
        { question: "Who is known as the 'Dubki King'?", options: ["Pardeep Narwal", "Rahul Chaudhari", "Maninder Singh", "Pawan Sehrawat"], correctAnswer: "Pardeep Narwal" },
        { question: "Which team represents Tamil Nadu?", options: ["U Mumba", "Tamil Thalaivas", "Telugu Titans", "Patna Pirates"], correctAnswer: "Tamil Thalaivas" },
        { question: "What does 'All Out' mean in Kabaddi?", options: ["All players score points", "All raiders enter together", "All 7 players are out", "All defenders are out"], correctAnswer: "All 7 players are out" },
        { question: "Who is the owner of Jaipur Pink Panthers?", options: ["Akshay Kumar", "Abhishek Bachchan", "Salman Khan", "Ranveer Singh"], correctAnswer: "Abhishek Bachchan" },
        { question: "What is the standard number of players per team on the mat?", options: ["6", "5", "7", "8"], correctAnswer: "7" },
        { question: "Which PKL team is based in Mumbai?", options: ["Puneri Paltan", "Bengaluru Bulls", "U Mumba", "Telugu Titans"], correctAnswer: "U Mumba" },
        { question: "What color card is shown for a serious foul?", options: ["Red", "Green", "Blue", "Yellow"], correctAnswer: "Red" },
        { question: "Who won PKL Season 9?", options: ["Puneri Paltan", "Jaipur Pink Panthers", "Dabang Delhi", "Patna Pirates"], correctAnswer: "Jaipur Pink Panthers" },
        { question: "Who is referred to as “Hi-Flyer”?", options: ["Rahul Chaudhari", "Pawan Sehrawat", "Ajay Thakur", "Deepak Hooda"], correctAnswer: "Pawan Sehrawat" },
        { question: "What is a Super Tackle?", options: ["Tackling with bonus", "Tackle by one or two defenders", "3 or more defenders involved", "Tackle in opponent's court"], correctAnswer: "Tackle by one or two defenders" },
        { question: "Who was the PKL Season 7 MVP?", options: ["Naveen Kumar", "Pawan Sehrawat", "Fazel Atrachali", "Maninder Singh"], correctAnswer: "Naveen Kumar" },
        { question: "What is a raid?", options: ["When players swap sides", "When a defender attacks", "When a raider enters the opposition half to score", "Timeout session"], correctAnswer: "When a raider enters the opposition half to score" },
        { question: "Which team has the nickname 'Bulls'?", options: ["Telugu Titans", "Bengaluru Bulls", "Tamil Thalaivas", "Dabang Delhi"], correctAnswer: "Bengaluru Bulls" },
        { question: "Who scored the most raid points in PKL history?", options: ["Maninder Singh", "Pardeep Narwal", "Ajay Thakur", "Rahul Chaudhari"], correctAnswer: "Pardeep Narwal" },
        { question: "What is the kabaddi chant required during a raid?", options: ["Panga Panga", "Kabaddi Kabaddi", "Raid Now", "Touch Point"], correctAnswer: "Kabaddi Kabaddi" },
        { question: "What does a bonus point indicate?", options: ["A reward point", "Point scored on tackle", "Point awarded for raiding over bonus line", "Defensive failure"], correctAnswer: "Point awarded for raiding over bonus line" },
        { question: "What’s the duration of a PKL match?", options: ["40 mins", "60 mins", "20 mins", "45 mins"], correctAnswer: "40 mins" },
        { question: "Which team’s color is yellow & black?", options: ["U Mumba", "Telugu Titans", "Patna Pirates", "Bengaluru Bulls"], correctAnswer: "Telugu Titans" },
        { question: "Who was the captain of Patna Pirates in Season 3?", options: ["Manpreet Singh", "Rohit Kumar", "Pardeep Narwal", "Sandeep Narwal"], correctAnswer: "Manpreet Singh" },
        { question: "What is the maximum players allowed on bench?", options: ["7", "5", "9", "10"], correctAnswer: "7" },
        { question: "Who was the youngest MVP in PKL?", options: ["Arjun Deshwal", "Naveen Kumar", "Mohit Goyat", "Aslam Inamdar"], correctAnswer: "Naveen Kumar" },
        { question: "What is the full form of PKL?", options: ["Power Kabaddi League", "Pro Kabaddi League", "Players Kabaddi League", "Premier Kabaddi League"], correctAnswer: "Pro Kabaddi League" },
        { question: "Which team plays their home matches in Hyderabad?", options: ["Telugu Titans", "Bengaluru Bulls", "Dabang Delhi", "Jaipur Pink Panthers"], correctAnswer: "Telugu Titans" },
        { question: "How many points for an All-Out?", options: ["1", "2", "3", "5"], correctAnswer: "2" }
    ],
    level2: [
        // --- LEVEL 2 – Medium (25 Questions) ---
        { question: "Which Iranian player is famous for his defensive skills and has captained U Mumba?", options: ["Meraj Sheykh", "Fazel Atrachali", "Hadi Oshtorak", "Mohammad Nabibakhsh"], correctAnswer: "Fazel Atrachali" },
        { question: "Which team did Maninder Singh play for in Season 1?", options: ["Patna Pirates", "Jaipur Pink Panthers", "Bengal Warriors", "Dabang Delhi"], correctAnswer: "Jaipur Pink Panthers" },
        { question: "In which season did Patna Pirates win their first title?", options: ["Season 1", "Season 2", "Season 3", "Season 4"], correctAnswer: "Season 3" },
        { question: "Which team did Pawan Sehrawat start his PKL career with?", options: ["Tamil Thalaivas", "Patna Pirates", "Bengaluru Bulls", "U Mumba"], correctAnswer: "U Mumba" },
        { question: "Who is the only foreign player to score 300+ raid points in a season?", options: ["Mohammad Nabibakhsh", "Jang Kun Lee", "Meraj Sheykh", "None"], correctAnswer: "None" },
        { question: "Which team had a mascot called 'Singham'?", options: ["Haryana Steelers", "Puneri Paltan", "Tamil Thalaivas", "Jaipur Pink Panthers"], correctAnswer: "Haryana Steelers" },
        { question: "Who is known for his 'Running Hand Touch'?", options: ["Pawan Sehrawat", "Naveen Kumar", "Rahul Chaudhari", "Ajay Thakur"], correctAnswer: "Rahul Chaudhari" },
        { question: "What is the maximum points possible in a single successful Super Raid?", options: ["2", "3", "4", "5"], correctAnswer: "5" },
        { question: "Which team is coached by Rakesh Kumar (former India captain)?", options: ["Haryana Steelers", "Patna Pirates", "Telugu Titans", "Tamil Thalaivas"], correctAnswer: "Haryana Steelers" },
        { question: "Who won the Best Defender award in Season 6?", options: ["Nitesh Kumar", "Fazel Atrachali", "Surjeet Singh", "Sandeep Dhull"], correctAnswer: "Nitesh Kumar" },
        { question: "What technique is primarily used by corner defenders?", options: ["Chain tackle", "Dash", "Ankle Hold", "Block"], correctAnswer: "Ankle Hold" },
        { question: "What is the name of the bonus line in kabaddi?", options: ["Active Line", "Entry Line", "Baulk Line", "Bonus Line"], correctAnswer: "Bonus Line" },
        { question: "Which team defeated U Mumba in the Season 3 final?", options: ["Jaipur Pink Panthers", "Patna Pirates", "Bengaluru Bulls", "Bengal Warriors"], correctAnswer: "Patna Pirates" },
        { question: "Who was the most expensive player in PKL 2022 auction?", options: ["Pawan Sehrawat", "Pardeep Narwal", "Fazel Atrachali", "Maninder Singh"], correctAnswer: "Pawan Sehrawat" },
        { question: "What’s the maximum number of substitutions allowed per match?", options: ["3", "5", "7", "Unlimited"], correctAnswer: "5" },
        { question: "Who was the youngest debut raider in PKL?", options: ["Rohit Gulia", "Naveen Kumar", "Aslam Inamdar", "Mohit Goyat"], correctAnswer: "Naveen Kumar" },
        { question: "Which team finished top in Season 5 group stage?", options: ["Gujarat Giants", "Patna Pirates", "Haryana Steelers", "Bengal Warriors"], correctAnswer: "Gujarat Giants" },
        { question: "Who is the first player to cross 1000 total points in PKL history?", options: ["Pardeep Narwal", "Maninder Singh", "Ajay Thakur", "Rahul Chaudhari"], correctAnswer: "Rahul Chaudhari" },
        { question: "Who was Bengal Warriors' captain in Season 7 (they won it)?", options: ["Sukesh Hegde", "Maninder Singh", "Rinku Narwal", "Mohammad Nabibakhsh"], correctAnswer: "Mohammad Nabibakhsh" },
        { question: "Which team signed Korean raider Jang Kun Lee?", options: ["U Mumba", "Bengal Warriors", "Gujarat Giants", "Bengaluru Bulls"], correctAnswer: "Bengal Warriors" },
        { question: "Which team had never reached the final till Season 9?", options: ["Telugu Titans", "Dabang Delhi", "Haryana Steelers", "Gujarat Giants"], correctAnswer: "Telugu Titans" },
        { question: "In which season was the third-place playoff discontinued?", options: ["Season 4", "Season 6", "Season 2", "Season 3"], correctAnswer: "Season 4" },
        { question: "What’s the minimum defenders required on court to earn a Super Tackle?", options: ["1", "2", "3", "4"], correctAnswer: "3" },
        { question: "Which coach is also a former PKL winning captain?", options: ["Rakesh Kumar", "Anup Kumar", "Manjeet Chhillar", "Sandeep Narwal"], correctAnswer: "Rakesh Kumar" },
        { question: "Who was the MVP of Season 6?", options: ["Pardeep Narwal", "Fazel Atrachali", "Pawan Sehrawat", "Naveen Kumar"], correctAnswer: "Pawan Sehrawat" }
    ],
    level3: [
        // --- LEVEL 3 – Hard (25 Questions) ---
        { question: "Who holds the record for most Super Raids in a single season?", options: ["Naveen Kumar", "Pardeep Narwal", "Pawan Sehrawat", "Rohit Kumar"], correctAnswer: "Pardeep Narwal" },
        { question: "Which season introduced the 'New Young Player' (NYP) category?", options: ["Season 3", "Season 5", "Season 6", "Season 4"], correctAnswer: "Season 5" },
        { question: "What was the final score in the Season 7 final between Bengal Warriors and Dabang Delhi?", options: ["35–32", "39–34", "39–35", "40–37"], correctAnswer: "39–34" },
        { question: "Which PKL team is owned by the JSW Group?", options: ["Bengaluru Bulls", "Haryana Steelers", "Gujarat Giants", "Telugu Titans"], correctAnswer: "Haryana Steelers" },
        { question: "What is the nickname of Pardeep Narwal?", options: ["Dubki King", "Record Breaker", "Super Raider", "Mr. PKL"], correctAnswer: "Dubki King" },
        { question: "Which team did Ajay Thakur represent in Season 2?", options: ["Dabang Delhi", "Tamil Thalaivas", "Puneri Paltan", "Bengaluru Bulls"], correctAnswer: "Bengaluru Bulls" },
        { question: "Who was the top defender in Season 8?", options: ["Fazel Atrachali", "Sagar", "Nitesh Kumar", "Ankush"], correctAnswer: "Sagar" },
        { question: "Which franchise was introduced in Season 5?", options: ["Gujarat Giants", "Tamil Thalaivas", "UP Yoddhas", "All of the above"], correctAnswer: "All of the above" },
        { question: "In which PKL season did Pawan Sehrawat score 39 raid points in one match?", options: ["Season 7", "Season 6", "Season 5", "Season 8"], correctAnswer: "Season 7" },
        { question: "Which team did Surjeet Singh captain in Season 8?", options: ["Tamil Thalaivas", "Bengal Warriors", "UP Yoddhas", "Haryana Steelers"], correctAnswer: "Tamil Thalaivas" },
        { question: "What is the highest ever individual score in a single PKL match?", options: ["34", "36", "39", "40"], correctAnswer: "39" },
        { question: "Who performed the first '5-point raid' in PKL history?", options: ["Rohit Kumar", "Rahul Chaudhari", "Pardeep Narwal", "Ajay Thakur"], correctAnswer: "Pardeep Narwal" },
        { question: "Which team is called the 'Titans'?", options: ["UP Yoddhas", "Tamil Thalaivas", "Telugu Titans", "Gujarat Giants"], correctAnswer: "Telugu Titans" },
        { question: "Which team has had the most number of coaches till Season 9?", options: ["Tamil Thalaivas", "Bengal Warriors", "Telugu Titans", "UP Yoddhas"], correctAnswer: "Telugu Titans" },
        { question: "Who was the youngest captain in PKL history?", options: ["Surjeet Singh", "Rohit Kumar", "Fazel Atrachali", "Nitesh Kumar"], correctAnswer: "Nitesh Kumar" },
        { question: "Which defender executed the most successful tackles in PKL Season 9?", options: ["Sagar", "Ankush", "Sunil", "Jaideep"], correctAnswer: "Ankush" },
        { question: "In which season did the league adopt the zonal format?", options: ["Season 3", "Season 4", "Season 5", "Season 6"], correctAnswer: "Season 5" },
        { question: "Which player is known as 'Flying Thakur'?", options: ["Pardeep Narwal", "Rohit Kumar", "Ajay Thakur", "Maninder Singh"], correctAnswer: "Ajay Thakur" },
        { question: "Which Iranian raider played for Tamil Thalaivas?", options: ["Fazel Atrachali", "Meraj Sheykh", "Mohsen Maghsoudlou", "None of the above"], correctAnswer: "None of the above" },
        { question: "Which team had the longest winning streak in a single season?", options: ["Patna Pirates", "Jaipur Pink Panthers", "Dabang Delhi", "Bengaluru Bulls"], correctAnswer: "Patna Pirates" },
        { question: "Which foreign player captained Bengal Warriors?", options: ["Jang Kun Lee", "Mohammad Nabibakhsh", "Meraj Sheykh", "Abolfazl Maghsodlou"], correctAnswer: "Mohammad Nabibakhsh" },
        { question: "Who was the first to reach 600 tackle points?", options: ["Sandeep Narwal", "Fazel Atrachali", "Surjeet Singh", "Manjeet Chhillar"], correctAnswer: "Manjeet Chhillar" },
        { question: "Which coach has won PKL both as a player and a coach?", options: ["Rakesh Kumar", "Anup Kumar", "Randhir Singh", "None"], correctAnswer: "Rakesh Kumar" },
        { question: "Which team did Nitin Tomar debut with?", options: ["Puneri Paltan", "U Mumba", "Bengal Warriors", "Dabang Delhi"], correctAnswer: "Bengal Warriors" },
        { question: "In which season was Naveen Kumar awarded MVP?", options: ["Season 6", "Season 7", "Season 8", "Season 9"], correctAnswer: "Season 7" }
    ]
};

// --- Global State Variables ---
let userName = "";
let currentQuestionIndex = 0;
let currentScore = 0; // Score for the current level
let currentLevel = 1;
const totalLevels = Object.keys(originalAllQuestions).length;
const QUESTIONS_PER_ROUND = 10; // <<<< KEY CHANGE: Define how many questions are asked per round

let currentSessionQuestions = {}; // Holds shuffled questions for current session (up to 25 per level)
let userAnswers = []; // Stores answers for the current round: [{questionIndex: 0, selectedOption: "Paris", isCorrect: true}, ...]
let unlockedLevels = JSON.parse(localStorage.getItem('unlockedLevels')) || [1]; // Load or initialize unlocked levels

let myChart = null; // To hold the Chart.js instance for results

// --- DOM Elements ---
const startScreen = document.getElementById('start-screen');
const userNameInput = document.getElementById('userName');
const startButton = document.getElementById('startButton');
const levelRadios = document.querySelectorAll('input[name="level"]');

const quizContainer = document.getElementById('quiz-container');
const levelDisplay = document.getElementById('level-display');
const questionArea = document.getElementById('question-area');
const optionsContainer = document.getElementById('options-container');
const feedbackArea = document.getElementById('feedback-area');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const scoreArea = document.getElementById('score-area');

const resultsContainer = document.getElementById('results-container');
const resultsChartCanvas = document.getElementById('resultsChart');
const levelUnlockMessage = document.getElementById('level-unlock-message');
const restartBtn = document.getElementById('restart-btn');

// --- Helper Functions ---

/**
 * Shuffles an array in place using the Fisher-Yates (Knuth) algorithm.
 * @param {Array} array - The array to shuffle.
 * @returns {Array} - The shuffled array.
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/**
 * Updates the score display.
 */
function updateScoreDisplay() {
    scoreArea.textContent = `Score: ${currentScore}/${userAnswers.length} | Level: ${currentLevel}`;
}

/**
 * Enables or disables level selection radio buttons based on unlocked levels.
 */
function updateLevelSelectionUI() {
    levelRadios.forEach(radio => {
        const level = parseInt(radio.value);
        if (unlockedLevels.includes(level)) {
            radio.disabled = false;
            radio.parentElement.classList.remove('opacity-50', 'cursor-not-allowed');
            radio.parentElement.classList.add('cursor-pointer');
        } else {
            radio.disabled = true;
            radio.parentElement.classList.add('opacity-50', 'cursor-not-allowed');
            radio.parentElement.classList.remove('cursor-pointer');
        }
    });
    // Ensure the highest unlocked level is selected by default if available
    const highestUnlockedLevel = Math.max(...unlockedLevels);
    // Only set checked if that level's radio button is not disabled
    const radioToSelect = document.querySelector(`input[name="level"][value="${highestUnlockedLevel}"]`);
    if (radioToSelect && !radioToSelect.disabled) {
        radioToSelect.checked = true;
    } else {
        // Fallback to Level 1 if higher levels are locked or not found (shouldn't happen with current logic)
        document.querySelector(`input[name="level"][value="1"]`).checked = true;
    }
}

// --- Quiz Logic Functions ---

/**
 * Initializes the quiz based on user name and selected level.
 */
function initializeQuiz() {
    // Get selected level from radio buttons
    const selectedLevelInput = document.querySelector('input[name="level"]:checked');
    currentLevel = parseInt(selectedLevelInput.value);

    // Hide start screen, show quiz container
    startScreen.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    resultsContainer.classList.add('hidden'); // Ensure results are hidden if coming from a restart

    // Set up and start the quiz for the selected level
    startNewLevelQuiz();
}

/**
 * Sets up a new quiz session for the current level (shuffles questions, resets state).
 */
function startNewLevelQuiz() {
    currentQuestionIndex = 0;
    currentScore = 0;
    userAnswers = []; // Reset user answers for the new level/session

    // Shuffle questions for all levels at the start of a new quiz session
    currentSessionQuestions = {};
    for (const levelKey in originalAllQuestions) {
        if (originalAllQuestions.hasOwnProperty(levelKey)) {
            const levelQuestionsCopy = [...originalAllQuestions[levelKey]];
            // Shuffle the 25 questions, but we will only use the first 10
            currentSessionQuestions[levelKey] = shuffleArray(levelQuestionsCopy);
        }
    }

    // Update UI for quiz start
    levelDisplay.textContent = `Level ${currentLevel}`;
    quizContainer.classList.remove('hidden'); // Make sure quiz is visible
    resultsContainer.classList.add('hidden'); // Hide results if visible

    loadQuestion(); // Load the first question
}

/**
 * Loads and displays the current question and its options.
 */
function loadQuestion() {
    // const questionsForCurrentLevel = currentSessionQuestions[`level${currentLevel}`]; // Still get all 25 shuffled questions
    // No need to get questionsForCurrentLevel here, just use currentSessionQuestions
    // We only care about currentQuestionIndex relative to QUESTIONS_PER_ROUND

    // <<<< KEY CHANGE: Check if we've completed the 10 questions for the current round
    if (currentQuestionIndex >= QUESTIONS_PER_ROUND || currentQuestionIndex < 0) {
        showLevelResults(); // 10 questions for level answered, show results
        return;
    }

    // Get the current question from the SHUFFLED list for the current level
    const currentQ = currentSessionQuestions[`level${currentLevel}`][currentQuestionIndex];

    questionArea.textContent = currentQ.question;
    optionsContainer.innerHTML = ''; // Clear previous options
    feedbackArea.textContent = ''; // Clear previous feedback

    currentQ.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-btn', 'bg-gray-200', 'text-gray-800', 'hover:bg-indigo-200', 'py-3', 'px-4', 'rounded-md', 'text-left', 'w-full', 'transition-colors', 'duration-200');
        button.onclick = () => selectAnswer(option); // Attach click handler
        optionsContainer.appendChild(button);
    });

    // --- Button Visibility Logic ---
    prevBtn.classList.toggle('hidden', currentQuestionIndex === 0);

    // <<<< KEY CHANGE: Next button logic based on QUESTIONS_PER_ROUND
    if (currentQuestionIndex === QUESTIONS_PER_ROUND - 1) {
        nextBtn.textContent = "Show Results";
    } else {
        nextBtn.textContent = "Next Question";
    }
    nextBtn.disabled = true; // Disable next button until an answer is selected

    // Re-select previously chosen answer if exists for navigation
    const existingAnswer = userAnswers.find(ans => ans.questionIndex === currentQuestionIndex);
    if (existingAnswer) {
        selectAnswer(existingAnswer.selectedOption, true); // true to indicate re-selection
    } else {
        // If no answer selected yet, ensure options are enabled
        document.querySelectorAll('.option-btn').forEach(btn => btn.disabled = false);
    }

    updateScoreDisplay();
}

/**
 * Handles user selecting an answer. Stores it and provides feedback.
 * @param {string} selectedOption - The option text selected by the user.
 * @param {boolean} [isReloading=false] - True if this is a re-selection due to navigation.
 */
function selectAnswer(selectedOption, isReloading = false) {
    // Get the current question from the SHUFFLED list for the current level
    const currentQ = currentSessionQuestions[`level${currentLevel}`][currentQuestionIndex];
    const isCorrect = (selectedOption === currentQ.correctAnswer);

    // Find or create answer record for this question
    let answerRecord = userAnswers.find(ans => ans.questionIndex === currentQuestionIndex);
    if (!answerRecord) {
        answerRecord = { questionIndex: currentQuestionIndex, selectedOption: selectedOption, isCorrect: isCorrect };
        userAnswers.push(answerRecord);
    } else {
        // Update existing answer if user changes their mind or navigates back
        answerRecord.selectedOption = selectedOption;
        answerRecord.isCorrect = isCorrect;
    }

    // Recalculate current score based on all recorded correct answers for the current round
    // Only count answers up to the current question index to reflect actual progress
    currentScore = userAnswers.filter(ans => ans.isCorrect && ans.questionIndex < QUESTIONS_PER_ROUND).length;


    // Visual feedback
    const optionButtons = document.querySelectorAll('.option-btn');
    optionButtons.forEach(button => {
        button.disabled = true; // Disable all options after selection
        button.classList.remove('hover:bg-indigo-200'); // Remove hover effect

        if (button.textContent === selectedOption) {
            button.style.backgroundColor = isCorrect ? '#A7F3D0' : '#FECACA'; // Tailwind green-200 / red-200
        } else if (button.textContent === currentQ.correctAnswer) {
            button.style.backgroundColor = '#A7F3D0'; // Tailwind green-200 for correct
        } else {
            button.style.backgroundColor = ''; // Reset others
        }
    });

    if (!isReloading) {
        feedbackArea.textContent = isCorrect ? "Correct!" : `Incorrect! The correct answer was "${currentQ.correctAnswer}".`;
        feedbackArea.style.color = isCorrect ? "green" : "red";
    }

    nextBtn.disabled = false; // Enable next button after any selection
    updateScoreDisplay();
}

/**
 * Moves to the next question or shows results.
 */
function nextQuestion() {
    // <<<< KEY CHANGE: Check against QUESTIONS_PER_ROUND
    if (currentQuestionIndex < QUESTIONS_PER_ROUND - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        // Last question of the level, show results
        showLevelResults();
    }
}

/**
 * Moves to the previous question.
 */
function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

/**
 * Displays the results for the current level in a pie chart.
 * Checks for level unlocks.
 */
function showLevelResults() {
    // <<<< KEY CHANGE: totalQuestionsInLevel is now fixed at QUESTIONS_PER_ROUND
    const totalQuestionsInLevel = QUESTIONS_PER_ROUND;

    // Hide quiz elements, show results container
    quizContainer.classList.add('hidden');
    resultsContainer.classList.remove('hidden');

    // Calculate correct and incorrect answers for the chart based on the 10 questions answered
    const correctCount = userAnswers.filter(ans => ans.isCorrect && ans.questionIndex < QUESTIONS_PER_ROUND).length;
    const incorrectCount = totalQuestionsInLevel - correctCount;

    // Render Chart.js pie chart
    if (myChart) {
        myChart.destroy(); // Destroy previous chart instance if exists
    }
    myChart = new Chart(resultsChartCanvas, {
        type: 'pie',
        data: {
            labels: ['Correct Answers', 'Incorrect Answers'],
            datasets: [{
                data: [correctCount, incorrectCount],
                backgroundColor: ['#34D399', '#EF4444'], // Tailwind green-500, red-500
                borderColor: ['#10B981', '#DC2626'], // Darker shades for border
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        font: {
                            size: 14
                        }
                    }
                },
                title: {
                    display: true,
                    text: `Level ${currentLevel} Results for ${userName}`,
                    font: {
                        size: 20,
                        weight: 'bold'
                    },
                    color: '#1F2937' // Tailwind gray-800
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed !== null) {
                                label += context.parsed;
                            }
                            return label;
                        }
                    }
                }
            }
        }
    });

    // Level Unlock Logic & Message
    if (correctCount >= 5 && currentLevel < totalLevels) {
        levelUnlockMessage.textContent = `Excellent, ${userName}! You scored ${correctCount} correct answers. Level ${currentLevel + 1} is now unlocked!`;
        levelUnlockMessage.style.color = 'green';
        if (!unlockedLevels.includes(currentLevel + 1)) {
            unlockedLevels.push(currentLevel + 1);
            localStorage.setItem('unlockedLevels', JSON.stringify(unlockedLevels));
            updateLevelSelectionUI(); // Update UI on the start screen
        }
    } else if (currentLevel === totalLevels && correctCount >= 5) {
        levelUnlockMessage.textContent = `Fantastic, ${userName}! You've completed all levels with a score of ${correctCount}!`;
        levelUnlockMessage.style.color = 'blue';
    } else {
        levelUnlockMessage.textContent = `Good effort, ${userName}! You scored ${correctCount} correct answers. You need 5 correct answers to unlock the next level. Try again!`;
        levelUnlockMessage.style.color = 'red';
    }
}

/**
 * Restarts the quiz. Goes back to the start screen for level selection.
 */
function restartQuiz() {
    currentLevel = 1; // Reset current level to 1 when restarting
    currentQuestionIndex = 0; // Reset question index
    currentScore = 0; // Reset score
    userAnswers = []; // Clear answers

    // Hide result container, show start screen
    resultsContainer.classList.add('hidden');
    startScreen.classList.remove('hidden');
    userNameInput.value = ""; // Clear username input field
    userName = ""; // Clear stored username

    updateLevelSelectionUI(); // Ensure level selection is correctly displayed (L1 selected, others locked/unlocked based on storage)
}


// --- Event Listeners ---
document.addEventListener('DOMContentLoaded', () => {
    updateLevelSelectionUI(); // Initialize level radio buttons based on localStorage on page load

    startButton.addEventListener('click', () => {
        userName = userNameInput.value.trim();
        if (userName) {
            initializeQuiz(); // This will handle showing quiz and starting the selected level
        } else {
            alert("Please enter your name to start the quiz!");
        }
    });

    nextBtn.addEventListener('click', nextQuestion);
    prevBtn.addEventListener('click', prevQuestion);
    restartBtn.addEventListener('click', restartQuiz); // For the button on the results screen
});