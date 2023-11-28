<html>
    <head><title>Weather365</title>
    <link rel="stylesheet" href="../CSS/data.css" />
    </head>
    <body>
    <img id="bgv" src="../Media/AltEarthBGV.jpg" alt="" />
  
<?php
    if(isset($_POST["frm1"]) && $_POST["frm1"]!=null ){
            $server = "localhost";
            $username = "root";
            $passwd = "";
            $con = mysqli_connect($server,$username,$passwd);
            if(!$con){
                die("Could not connect".mysqli_connect_error());
            }
            mysqli_select_db($con,"weather365");
            $city = $_POST['frm1'];
            $date= $_POST['frm2'];
            $temp=$_POST['frm3'];
            $max=$_POST['frm4'];
            $min=$_POST['frm5'];
            $hum = $_POST['frm6'];
            $wspd = $_POST['frm7'];
            $sql = "INSERT INTO detail VALUES ('$city','$date','$temp','$max','$min','$hum','$wspd');";
            if(!mysqli_query($con,$sql)){
                die("error".mysqli_error($con));
            }
            mysqli_close($con);
        }
?>  <form action="otpt.php" >
    <button id="op4" style="height:10%">View Stored Locations' Data</button></form>
    </body>
</html>