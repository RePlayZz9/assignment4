$(document).ready(function() {
    function checkName() {
      const nameId = $('#nameId');
      const surnameId = $('#surnameId');
  
      for (let lett of nameId.val()) {
        if (!isNaN(lett)) {
          alert('Numbers in the name field are not allowed');
          return false;
        }
      }
  
      for (let lett of surnameId.val()) {
        if (!isNaN(lett)) {
          alert('Numbers in the surname field are not allowed');
          return false;
        }
      }
  
      return true;
    }
  
    const emailInput = $('#emailInput');
  
    function checkEmail() {
      if (emailInput.val().includes('@') && emailInput.val().includes('.')) {
        return true;
      } else {
        emailInput.val('');
        alert('Wrong mail form');
        return false;
      }
    }
  
    function checkPhone() {
      const phoneInp = $('#phoneInp').val();
      if (phoneInp[0] == '+' && phoneInp.length == 12) {
        return true;
      } else {
        alert('Incorrect number form');
        return false;
      }
    }
  
    const birthInp = $('#birthInp');
    birthInp.on('change', function checkDate() {
      if (+birthInp.val().split('-')[0] > new Date().getFullYear() - 122) {
        return true;
      } else {
        alert('You entered the wrong year');
        birthInp.val('');
        return false;
      }
    });
  
    const submitBtn = $('#submitBtn');
    submitBtn.on('click', function() {
      if (checkName() && checkPhone() && checkEmail()) {
        alert('You have successfully registered!');
      } else {
        alert('Fix the errors and resend');
      }
    });
  });
  
  $('#submitBtn').css('background-color', '#cf7e21');
  $('#submitBtn').text('Confirm');
