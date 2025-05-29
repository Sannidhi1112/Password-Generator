function include() {
    const length = parseInt(document.getElementById("length").value);
    const includeLetters = document.getElementById("letters").checked;
    const includeNumbers = document.getElementById("numbers").checked;
    const includeSymbols = document.getElementById("symbols").checked;
    const output = document.getElementById("password");
  
    let characters = "";
  
    // Add character sets based on user choices
    if (includeLetters) {
      characters += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (includeNumbers) {
      characters += "0123456789";
    }
    if (includeSymbols) {
      characters += "!@#$%^&*()_+-=[]{}|;:',.<>/?";
    }
  
    // Validation: no options selected or invalid length
    if (characters === "") {
      alert("Please select at least one character type.");
      return;
    }
  
    if (isNaN(length) || length < 8 || length > 128) {
      alert("Please enter a valid password length between 8 and 128.");
      return;
    }
  
    // Generate the password
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
  
    // Output the generated password
    output.value = password;
  }
  