<script>
  var popLink = document.getElementById("popup-link");
  var popWindow = document.getElementById("popup-window");
  var closeButton = document.getElementById("close-button");
    popupLink.addEventListener("click", function(event) {
    event.preventDefault();
    popupWindow.style.display = "block";
  });
    closeButton.addEventListener("click", function() {
    popupWindow.style.display = "none";
  });
</script>
