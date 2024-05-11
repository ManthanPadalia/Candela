<?php
    $servername = "localhost: 3306";
    $username = "root";
    $password = "";
    $dbname = "products";

    // Create connection
    $conn = mysqli_connect($servername, $username, $password, $dbname);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="candela.css">
</head>
<body>
    <header>
        <div class="navbar">
            <div class="nav-logo border">
                <a href="index.html"><div class="logo border"></div></a>
            </div>

            <div class="nav-address border">
                <p class="add-first">Community</p>
                <div class="location">
                    <i class="fa-solid fa-location-dot"></i>
                    <p class="add-second"> FET JU</p>
                </div>
            </div>

            <div class="nav-search">
                <input placeholder="   Search Items" class="search-input">
                <div class="search-icon">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>

            <div class="nav-account border">
                <a href="login.php" style="text-decoration: none; color: black;">
                    <p><span>Accounts</span></p>
                    <p class="second-line">Login / Register</p>
                </a>
            </div>
        </div>
        <div class="navbar2">
            <div class="menu border">
                <i class="fa-solid fa-bars"></i>
                <p>Categories</p>
            </div>
            <div class="options">
                <div class="a1 border-2 activities">
                    <p>Furniture</p>
                </div>
                <div class="a2 border-2 activities">
                    <p>Stationary</p>
                </div>
                <div class="a3 border-2 activities">
                    <p>Electronics</p>
                </div>
                <div class="a4 border-2 activities">
                    <p>Customer Service</p>
                </div>
                <div class="a5 border-2 activities">
                    <p>Sell</p>
                </div>
            </div>
        </div>            
    </header> 
    <div class="content-section">
        <?php
            $dbh = new PDO('mysql:host=localhost: 3306;dbname=products', 'root', '');
            $data = $dbh->query("select * FROM items")->fetchAll();
            $cnt=1;
            foreach ($data as $row) {
        ?>
        <div class="box1 box border-3">
            <div class="box-content">
                <h3><?php echo $row['Name'];?></h3 >
                <div class="box-img"><img src="uploadImage/<?php echo basename($row['Image']); ?>"width="100%" height="240px"></div>
                <h4>$<?php echo $row['Price'];?></h4>
            </div> 
        </div>
        <?php $cnt=$cnt+1;}?>
    </div>
    <footer>
        <div class="panel-1">
            <p>Back to top</p>
        </div>

        <div class="panel-2">
            <ul>
                <p>Get to Know Us</p>
                <a>Careers</a>
                <a>Blog</a>
                <a>About Candela</a>
                <a>Investor Relations</a>
                <a>Candela Devices</a>
                <a>Candela Science</a>
            </ul>
            <ul>
                <p>Get to Know Us</p>
                <a>Careers</a>
                <a>Blog</a>
                <a>About Candela</a>
                <a>Investor Relations</a>
                <a>Candela Devices</a>
                <a>Candela Science</a>
            </ul>
            <ul>
                <p>Get to Know Us</p>
                <a>Careers</a>
                <a>Blog</a>
                <a>About Candela</a>
                <a>Investor Relations</a>
                <a>Candela Devices</a>
                <a>Candela Science</a>
            </ul>
            <ul>
                <p>Get to Know Us</p>
                <a>Careers</a>
                <a>Blog</a>
                <a>About Candela</a>
                <a>Investor Relations</a>
                <a>Candela Devices</a>
                <a>Candela Science</a>
            </ul>
        </div>

        <div class="panel-3">
            <div class="logo"></div>
        </div>

        <div class="panel-4">
            <div class="pages">
                <a>Condition of Use</a>
                <a>Privacy Notice</a>
                <a>Your Ads Private Choice</a>
            </div>
            <div class="copyright">
                <i class="fa-regular fa-copyright"></i>
                <p>2023-2024, Candela.com, Inc. or its affiliates</p>
            </div>
        </div>
    </footer>
</body>
</html>