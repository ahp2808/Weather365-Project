<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Weather365</title>
    <link rel="stylesheet" href="../CSS/data.css" />
  </head>

  <img id="bgv" src="../Media/AltEarthBGV.jpg" alt="" />
  
  <body>
  
    <div id="header">
      <img src="../Media/websiteLogo.png" alt="" width="3%" height="3%" />
      <a id="pwf" href="index.html">WEATHER365</a>
      <h1 id="msg">Get weather updates with a click!</h1>
    </div>
    <button id="op2" onclick="window.location.href='../wdet.html';" style="width: 10%; margin-left: 3%">
    Detailed Analysis</button>
      <button id="op4" onclick="window.location.href='../abt.html';" style="width: 10%; margin-left: 3%">About Us</button>
    <button id="op3" onclick="window.location.href='../aqi.html';" style="width: 10%; margin-left: 3%">
    Air Quality Details</button> 
     <div id="Wdetails">
      <div id="cont">
        <?php
            
                $server = "localhost";
                $username = "root";
                $passwd = "";
                $con = mysqli_connect($server,$username,$passwd);
                if(!$con){
                    die("Could not connect".mysqli_connect_error());
                }
                mysqli_select_db($con,"weather365");

                $sqlresult = mysqli_query($con,"SELECT * FROM detail;");
                echo "  <table style=\"border: #10d4ff solid 1px; color:white\" border = '1'>
                    <tr>
                    <th>Location</th>
                    <th>Date</th>
                    <th>Temp</th>
                    <th>Max_Temp</th>
                    <th>Min_Temp</th>
                    <th>Humidity</th>
                    <th>Wind_Speed</th>
                    </tr>";
                
                while($row = mysqli_fetch_array($sqlresult)){
                    echo "<tr>";
                    echo "<td>".$row['Location']."</td>";
                    echo "<td>".$row['Date']."</td>";
                    echo "<td>".$row['Temp']."</td>";
                    echo "<td>".$row['Max_Temp']."</td>";
                    echo "<td>".$row['Min_Temp']."</td>";
                    echo "<td>".$row['Humidity']."</td>";
                    echo "<td>".$row['Wind_Speed']."</td>";
                    echo "</tr>";
                }
                $row = mysqli_fetch_array($sqlresult);
                echo "".$row;
                echo "</table>";
                mysqli_close($con);
           
        ?> 
        <form action="../index.html">
        <button id="op4">HOME</button>
        </form>
      <h5 style="float: right; color: #00f4ff">
        <i
          >(Check your Internet Connection if Weather details aren't visible)</i
        >
      </h5>
    </div>
    </div>
  </body>
</html>
