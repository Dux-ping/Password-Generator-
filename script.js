document.getElementById("generateBtn").addEventListener("click", function () {
  const length = document.getElementById("passwordLength").value;
  const useUppercase = document.getElementById("uppercase").checked;
  const useLowercase = document.getElementById("lowercase").checked;
  const useNumbers = document.getElementById("numbers").checked;
  const useSymbols = document.getElementById("symbols").checked;

  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

  let allChars = "";
  if (useUppercase) allChars += uppercaseChars;
  if (useLowercase) allChars += lowercaseChars;
  if (useNumbers) allChars += numberChars;
  if (useSymbols) allChars += symbolChars;

  if (allChars === "") {
    document.getElementById("error-message").innerText =
      "Please select at least one character type";
    document.getElementById("generated-password").innerText = "";
    return;
  }

  document.getElementById("error-message").innerText = ""; // Clear error message if character type is selected

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  document.getElementById("generated-password").innerText = password;
});

document.getElementById("copyBtn").addEventListener("click", function () {
  const password = document.getElementById("generated-password").innerText;
  navigator.clipboard.writeText(password).then(() => {
    document.getElementById("copy-message").innerText = "Password copied to clipboard";
    setTimeout(function () {
      document.getElementById("copy-message").innerText = "";
    }, 3000); // Clear copy message after 3 seconds
  });
});
