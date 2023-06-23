(function (d, e, v, s, i, t, E) {
  d['GoogleDevelopersObject'] = i;
  t = e.createElement(v);
  t.async = 1;
  t.src = s;
  E = e.getElementsByTagName(v)[0];
  E.parentNode.insertBefore(t, E);
})(
  window,
  document,
  'script',
  'js/app_loader.js',
  '[12,"en",null,"js/devsite_app_module.js"]'
)

function getRandomInt(maxi) {
  return Math.floor(Math.random() * (maxi + 1));
}

function shuffleArray(array) {
  for (i = array.length - 1; i > 0; i--) {
    rndi = getRandomInt(i);

    tmp = array[i];
    array[i] = array[rndi];
    array[rndi] = tmp;
  }
}

let doc_questions = document.querySelector(".questions");
const questions_elements = doc_questions.cloneNode(true);
let questions = [...questions_elements.getElementsByClassName("filterDiv")];
const active_questions = [];
const active_sources = [];
const default_source = "official";

const arrow_left = document.getElementById("link-arrow-left");
const arrow_right = document.getElementById("link-arrow-right");
const arrow_left_show = document.getElementsByClassName("steps-link-arrow-left")[0];
const arrow_right_show = document.getElementsByClassName("steps-link-arrow-right")[0];
const slider = document.getElementsByClassName("slider")[0];
const checkBox = document.getElementsByClassName("toggle-checkbox")[0];
const ckb_incorrects = document.getElementById('incorrects');
let last_q = 1;

function updateShowQuestions() {
  const checkbox_text =  document.getElementsByClassName("toggle-label")[0];
  checkbox_text.textContent = "Show the " + active_questions.length + " questions";
}

function showQuestions() {
  doc_questions.innerHTML = "";
  active_questions.length = 0;

  for (const q of questions) {
    const new_q = q.cloneNode(true)
    doc_questions.appendChild(new_q);

    for (const source of active_sources){
      if (new_q.className.indexOf(source) > -1) {
        active_questions.push(new_q)
      }
    }
  }

  updateActiveQuestions();
  last_q = 1;
  showSubQuestions();
  updateShowQuestions();
  MathJax.Hub.Typeset();
}

function check_default() {
  const chk_source = document.getElementById(default_source);
  chk_source.checked = true;
}

function resetQuestions() {
  ckb_incorrects.checked = false;
  showQuestions();
}

function removeControls() {
  w3RemoveClass(arrow_left_show, "show");
  w3RemoveClass(arrow_right_show, "show");
  w3RemoveClass(slider, "show");
}

function showSubQuestions() {

  for (q of doc_questions.getElementsByClassName("filterDiv")) {
    q.style.display = 'none';
  }

  if (checkBox.checked == true){
    for (q of active_questions) {
      q.style.display = 'block';
    }
    removeControls();
  } 
  else {
    if (active_questions.length > 0) {
      w3AddClass(slider, "show");
  
      prev_next_question(last_q);
      slider.max = active_questions.length;
      slider.value =  last_q;
    }
    else {
      removeControls();
    }
  }
}

function shuffleQuestions() {
  shuffleArray(questions);
  ckb_incorrects.checked = false;
  showQuestions();
  questions = [...questions_elements.getElementsByClassName("filterDiv")];
}

function check_incorrect(q) {
  const q_elements = q.children[0].children[0].children;

  for (const element of q_elements)
    if (element.className == 'devsite-multiple-choice-answer')
      if (element.lastElementChild.childElementCount)
        if (element.lastElementChild.firstElementChild.innerText == 'Incorrect.') 
          return true

  return false
}

function updateActiveQuestions() {
  active_questions.length = 0;

  for (const q of doc_questions.getElementsByClassName("filterDiv")) {
    for (const source of active_sources){
      if (q.className.indexOf(source) > -1) {
        if (ckb_incorrects.checked) {
          if (check_incorrect(q)){
            active_questions.push(q);
          }
        }
        else {
          active_questions.push(q)
        }
      }
    }
  }
}

function filterSelection(c) {
  const chk_source = document.getElementById(c);

  if (chk_source.checked == true) {
    if(~active_sources.includes(c)){
      active_sources.push(c);
    }
  }
  else {
    if(active_sources.includes(c)){
      const index = active_sources.indexOf(c);
      active_sources.splice(index, 1);
    }
  }

  updateActiveQuestions();  
  last_q = 1;
  showSubQuestions();
  updateShowQuestions();
}

function prev_next_question(nq) {
  active_questions[last_q-1].style.display = 'none';
  active_questions[nq-1].style.display = 'block';
  slider.value = nq;

  if (active_questions.length == 1) {
    removeControls();
  }
  else if (nq == 1) {
    w3RemoveClass(arrow_left_show, "show");
    w3AddClass(arrow_right_show, "show");
    arrow_right.setAttribute('onclick', 'prev_next_question(2)')
  } 
  else if (nq == active_questions.length) {
    w3RemoveClass(arrow_right_show, "show");
    arrow_left.setAttribute('onclick', 'prev_next_question('+ (nq - 1) + ')');
  }
  else {
    w3AddClass(arrow_left_show, "show");
    w3AddClass(arrow_right_show, "show");
    arrow_left.setAttribute('onclick', 'prev_next_question(' + (nq - 1) + ')');
    arrow_right.setAttribute('onclick', 'prev_next_question(' + (nq + 1)  + ')');
  }

  last_q = nq;
}

function resizeImages() {
  const images = document.getElementsByTagName('img');

  for (const img of images) {
    max_width = 600;
    if (img.width > max_width) {
      img.width = max_width
    }
    else {
      img.width = img.width
    }
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");

  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");

  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

window.addEventListener('load', function () {
  const home_section = document.getElementById("home_section");
  home_section.setAttribute('expanded', null)
})

slider.oninput = function() {
  prev_next_question(+this.value);
}

resizeImages();
check_default();
filterSelection(default_source);
