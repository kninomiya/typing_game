
function test() {
  $('#title_img').attr('src', window.questions[0].image_path);
}

/* eslint no-unused-vars: "off" */
function testColor() {
  const characterStrings = 'スーパーファミコン';
  const inputStrings = 'スーパー';
  const notInputedStrings = characterStrings.substring(inputStrings.length);

  $('#waku').append(`<span style='color: #0000FF'>${inputStrings}</span>`);
  $('#waku').append(`<span id='change1' style='color: #000000'>${notInputedStrings}</span>`);
}

/* eslint no-unused-vars: "off" */
function changeColor() {
  const idName = 'change1';
  document.getElementById(idName).style.color = '#FF0000';
}
;
