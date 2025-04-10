document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById("name");
    const numberInput = document.getElementById("number");
    const addressInput = document.getElementById("address");
    const submitButton = document.querySelector(".submit-button");
    const paymentOptions = document.querySelectorAll('input[name="payment-type"]');
const paymentBlock = document.getElementById("payment");

  
    function showError(input, message) {
        let wrapper = input.nextElementSibling;
      
        if (!wrapper || !wrapper.classList.contains("error-wrapper")) {
          wrapper = document.createElement("div");
          wrapper.className = "error-wrapper";
          input.insertAdjacentElement("afterend", wrapper);
        }
      
        wrapper.textContent = message;
      }
      
      function removeError(input) {
        const wrapper = input.nextElementSibling;
        if (wrapper && wrapper.classList.contains("error-wrapper")) {
          wrapper.textContent = "";
        }
      }
      
    function validateName() {
      const value = nameInput.value.trimStart();
      nameInput.value = value;
      removeError(nameInput);
  
      if (!value) {
        showError(nameInput, "Поле имени обязательно для заполнения.");
        return false;
      }
      if (/^\s/.test(value)) {
        showError(nameInput, "Имя не должно начинаться с пробела.");
        return false;
      }
      if (/\d/.test(value)) {
        showError(nameInput, "Имя не должно содержать цифры.");
        return false;
      }
      if (value.length > 40) {
        nameInput.value = value.slice(0, 40);
        showError(nameInput, "Имя не должно превышать 40 символов.");
        return false;
      }
      
      return true;
    }
  
    function validateNumber() {
        const value = numberInput.value;
        removeError(numberInput);
      
        if (!value) {
          showError(numberInput, "Поле номера обязательно для заполнения.");
          return false;
        }      
        return true;
      }
      
      
  
    function validateAddress() {
      const value = addressInput.value.trimStart();
      addressInput.value = value;
      removeError(addressInput);
  
      if (!value) {
        showError(addressInput, "Поле адреса обязательно для заполнения.");
        return false;
      }
      if (/^\s/.test(value)) {
        showError(addressInput, "Адрес не должен начинаться с пробела.");
        return false;
      }
      if (value.length > 50) {
        addressInput.value = value.slice(0, 50);
        showError(addressInput, "Адрес не должен превышать 50 символов.");
        return false;
      }
      
      return true;
    }
  
    function validatePayment() {
        const selected = [...paymentOptions].some(option => option.checked);
        let error = paymentBlock.querySelector(".error-wrapper");
      
        if (!selected) {
          if (!error) {
            error = document.createElement("div");
            error.className = "error-wrapper";
            error.style.color = "red";
            error.style.fontSize = "0.9em";
            error.style.marginTop = "4px";
            error.textContent = "Выберите способ оплаты.";
            paymentBlock.appendChild(error);
          }
          return false;
        } else if (error) {
          error.remove();
        }
      
        return true;
      }
      nameInput.addEventListener("input", () => {
        validateName();
      });

      nameInput.addEventListener("keydown", function (e) {
        const key = e.key;
        const isLetter = /^[a-zA-Zа-яА-ЯёЁ]$/.test(key);
        const allowedKeys = ["Backspace", "ArrowLeft", "ArrowRight", "Delete", "Tab"];
      
        if (!isLetter && !allowedKeys.includes(key)) {
          e.preventDefault(); 
        }
      });
      
    numberInput.addEventListener("input", () => {
        let value = numberInput.value.replace(/[^0-9+]/g, ""); 
      
        if (value.startsWith("+")) {
          if (!value.startsWith("+375")) {
            value = "+375";
          }
          if (value.length > 13) {
            value = value.slice(0, 13);
          }
        }
        
        else if (value.startsWith("8")) {
          if (!value.startsWith("80")) {
            value = "80";
          }
          if (value.length > 11) {
            value = value.slice(0, 11);
          }
        }

        else {
          value = "";
        }
      
        numberInput.value = value;
        validateNumber();
      });
      
      addressInput.addEventListener("input", () => {
        validateAddress();
      });
      
      addressInput.addEventListener("keydown", function (e) {
        const key = e.key;
        const isAllowed = /^[a-zA-Zа-яА-ЯёЁ0-9.,\s]$/.test(key);
        const allowedKeys = ["Backspace", "ArrowLeft", "ArrowRight", "Delete", "Tab"];
      
        if (!isAllowed && !allowedKeys.includes(key)) {
          e.preventDefault(); 
        }
      });
      
  
    
    submitButton.addEventListener("click", function (e) {
      e.preventDefault(); 
  
      const validName = validateName();
      const validNumber = validateNumber();
      const validAddress = validateAddress();
  
      if (validName && validNumber && validAddress) {
        
        
      }
      if (validName && validNumber && validAddress && validatePayment()) {
       
      }

    });
  });
  