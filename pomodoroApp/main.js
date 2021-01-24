'use strict';

{

  let timer = document.querySelector('.timer');
  var count = 1500;
  timer.textContent = count;

  let startbtn = document.querySelector('.startbtn');
  let stopbtn = document.querySelector('.stopbtn');
  let resetbtn = document.querySelector('.resetbtn');

  stopbtn.disabled = true;
  resetbtn.disabled = true;
  
  startbtn.addEventListener('click', () => {
    startTime();
    startbtn.disabled = true;
    stopbtn.disabled = false;
    resetbtn.disabled = false;
  });
  
  function startTime() {
    count--;
    timer.textContent = count;
    reflesh();
  }

  function reflesh() {
    let timeId = setTimeout(startTime, 1000);
    stopbtn.addEventListener('click', () => {
      clearTimeout(timeId);
      startbtn.disabled = false;
    });
    resetbtn.addEventListener('click', () => {
      clearTimeout(timeId);
      count = 1500;
      timer.textContent = count;
      startbtn.disabled = false;
      stopbtn.disabled = true;
      resetbtn.disabled = true;
    });
    if(count === 0) {
      window.alert('gooooood!!!')
      clearTimeout(timeId);
      count = 1500;
      timer.textContent = count;
      startbtn.disabled = false;
      stopbtn.disabled = true;
      resetbtn.disabled = true;
    }
  }

}