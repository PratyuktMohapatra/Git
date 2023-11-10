<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Event Handling</title>
</head>
<body>

  <button id="myButton">Click me</button>
  <input type="text" id="myInput" placeholder="Type something">
  <p id="output"></p>

  <script>
    document.addEventListener('DOMContentLoaded', function () {
      let button = document.getElementById('myButton');
      let output = document.getElementById('output');

      button.addEventListener('click', function () {
        output.textContent = 'Button Clicked!';
      });

      let inputField = document.getElementById('myInput');
      inputField.addEventListener('input', function () {
        output.textContent = 'Input Changed: ' + inputField.value;
      });
    });
  </script>

</body>
</html>
