<html>
    <div id = "clock"></div>
    <script>
        function showTime(){
            var date = new Date();
            var h = date.getHours();
            var m = date.getMinutes();
            var s = date.getSeconds();
    
            var time = h + ":" + m + ":" + s;
            document.getElementById("clock").innerText = time;
            document.getElementById("clock").textContent = time;
            
        }
        showTime()
    </script>
</html>