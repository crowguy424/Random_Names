let names = [
    "Aabad",
    "Aaban",
    "Aabid",
    "Muhammad",
    "Misbah",
    "Mujib",
    "Khan",
    "Kader",
    "Kabir"
];

document.getElementById("generateBtn").addEventListener("click", function() {
    const randomNames = [];
    
    while (randomNames.length < 3) {
        const randomIndex = Math.floor(Math.random() * names.length);
        const name = names[randomIndex];
        
        // Check for duplicates
        if (!randomNames.includes(name)) {
            randomNames.push(name);
        }
    }
    
    // Display the names
    const namesList = document.getElementById("randomNames");
    namesList.innerHTML = ""; // Clear previous names
    randomNames.forEach(name => {
        const nameElement = document.createElement("div");
        nameElement.classList.add("name");
        nameElement.innerText = name;
        namesList.appendChild(nameElement);
    });
});