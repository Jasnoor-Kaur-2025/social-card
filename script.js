const hide = () => {
    const popup = document.querySelector(".pop-up");
    popup.style.opacity = "0";  // Start fade effect
    setTimeout(() => popup.style.display = "none", 300); // Hide after animation
    document.querySelector(".top").classList.remove("hidden");
    document.querySelector(".bottom").classList.remove("hidden");
    document.querySelector(".top").classList.add("active");
    document.querySelector(".bottom").classList.add("active");

};

document.addEventListener("DOMContentLoaded", () => {
    let currentQuestion = 0;

    // Score counters for each result type
    let scores = [0, 0, 0, 0, 0, 0]; // Six possible results

    // Questions and answer mappings (Each answer links to an index in scores array)
    const questions = [
        { 
            question: "What’s your ideal way to spend the day?", 
            image: "q1.png",
            options: [
                { text: "Having fun and making jokes with friends!", index: 0 },
                { text: "Learning something new or working on self-improvement.", index: 1 },
                { text: "Enjoying peace and quiet, maybe with a good book.", index: 2 },
                { text: "Acting out different scenarios and making things dramatic!", index: 3 },
                { text: "Overthinking every decision but trying my best.", index: 4 }
            ]
        },
        { 
            question: "How do you react to unexpected situations?", 
            image: "q2.png",
            options: [
                { text: "Make a joke and go with the flow.", index: 0 },
                { text: "Analyze everything before reacting.", index: 1 },
                { text: "Stay calm and observe.", index: 2 },
                { text: "React dramatically and make it a big deal!", index: 3 },
                { text: "Panic a little, but try to handle it.", index: 4 }
            ]
        },
        { 
            question: "What role do you play in your friend group?", 
            image: "q3.png",
            options: [
                { text: "The fun one who always makes everyone laugh.", index: 0 },
                { text: "The responsible one who gives advice.", index: 1 },
                { text: "The quiet but wise one.", index: 2 },
                { text: "The leader who decides what we do.", index: 3 },
                { text: "The one who worries but cares a lot.", index: 4 }
            ]
        },
        { 
            question: "If you had to describe yourself in one word?", 
            image: "q4.png",
            options: [
                { text: "Playful", index: 0 },
                { text: "Intelligent", index: 1 },
                { text: "Thoughtful", index: 2 },
                { text: "Expressive", index: 3 },
                { text: "Loyal", index: 4 }
            ]
        },
        { 
            question: "How do you handle conflicts?", 
            image: "q5.png",
            options: [
                { text: "Make a joke to lighten the mood.", index: 0 },
                { text: "Try to reason things out and find a fair solution.", index: 1 },
                { text: "Stay quiet and let things settle naturally.", index: 2 },
                { text: "Get mad and argue until I win!", index: 3 },
                { text: "Feel bad and try to fix things quickly.", index: 4 }
            ]
        },
        { 
            question: "What motivates you the most?", 
            image: "q6.png",
            options: [
                { text: "Having fun and enjoying life!", index: 0 },
                { text: "Achieving my goals and proving myself.", index: 1 },
                { text: "The people I care about.", index: 2 },
                { text: "Recognition and being admired.", index: 3 },
                { text: "Wanting to feel safe and happy.", index: 4 }
            ]
        },
        { 
            question: "How do you react to a scary movie?", 
            image: "q7.png",
            options: [
                { text: "Laugh and make jokes about it.", index: 0 },
                { text: "Analyze every scene to see if it makes sense.", index: 1 },
                { text: "Watch quietly without reacting much.", index: 2 },
                { text: "Scream and cover my eyes!", index: 3 },
                { text: "Get scared, but stay because I don’t want to miss out.", index: 4 }
            ]
        },
        { 
            question: "How do you handle embarrassment?", 
            image: "q8.png",
            options: [
                { text: "Laugh it off like it was intentional.", index: 0 },
                { text: "Try to explain myself and correct the situation.", index: 1 },
                { text: "Ignore it and pretend nothing happened.", index: 2 },
                { text: "Act like it was part of a bigger dramatic moment.", index: 3 },
                { text: "Feel bad for a while but move on.", index: 4 }
            ]
        },
        { 
            question: "What’s your biggest strength?", 
            image: "q9.png",
            options: [
                { text: "My ability to make people laugh.", index: 0 },
                { text: "My intelligence and problem-solving skills.", index: 1 },
                { text: "My patience and emotional strength.", index: 2 },
                { text: "My creativity and dramatic flair.", index: 3 },
                { text: "My loyalty and kindness.", index: 4 }
            ]
        },
        { 
            question: "If you were in a tough situation, what would you do?", 
            image: "q10.png",
            options: [
                { text: "Find the humor in it and keep going.", index: 0 },
                { text: "Think of a logical solution before acting.", index: 1 },
                { text: "Stay calm and wait for the right moment.", index: 2 },
                { text: "React emotionally and fight back if needed!", index: 3 },
                { text: "Try my best and hope for support.", index: 4 }
            ]
        }
    ];

    function loadQuestion() {
        if (currentQuestion >= questions.length) {
            showResult();
            return;
        }

        let qData = questions[currentQuestion];
        document.querySelector(".top").innerHTML = `
            <h2>${qData.question}</h2>
            <img src="${qData.image}" alt="Question Image" style="width: 100%; max-width: 400px; border-radius: 10px; margin-top: 10px;">
        `;

        document.querySelector(".bottom").innerHTML = qData.options
            .map(option => 
                `<div class="opt" onclick="selectAnswer(${option.index})">${option.text}</div>`
            )
            .join("");
    }

    window.selectAnswer = (index) => {
        scores[index]++; // Increase score for selected option
        currentQuestion++;
        loadQuestion();
    };

    function showResult() {
        let maxIndex = scores.indexOf(Math.max(...scores));
        let resultText = ["ShinChan", "Kazama", "Bo", "Nene", "Masao", "Shiro"][maxIndex];  
        let imgResult = ["shin.png", "kazama.png", "bo.png", "nene.png", "masao.png", "shiro.png"];
    
        document.querySelector(".top").innerHTML = `
            <h2>You are: ${resultText}!</h2>
            <img class = "resultImage" src="${imgResult[maxIndex]}" alt="${resultText}" style="width: 90vw; border-radius: 10px; margin-top: 10px;">
        `;
    
        document.querySelector(".bottom").innerHTML = "";
    }
    
    loadQuestion();


});
