<script>
  document.addEventListener("contextmenu", function(e){
    e.preventDefault();
  });
  document.onkeydown = function(e) {
    if (e.keyCode == 123) return false; // F12 disable
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) return false;
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) return false;
  }
</script>


