document.getElementById("btn").addEventListener("click", function () {
  document.getElementById("response").innerText = "✅ You accepted the wish!";
  this.innerText = "Thanks ❤️";
  this.disabled = true;
 
  document.getElementById("dear-line").style.display = "none";
  document.getElementById("mouse-icon").style.display = "none";

 
});



// settime real 
    function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
    document.getElementById('realtime').textContent = timeString;
  }

  setInterval(updateTime, 1000)
  updateTime(); 






