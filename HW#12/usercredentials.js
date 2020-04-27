<php>
$userid = $POST ["userid"];

$userpassword = $POST ["password"];

$userid = mysql_real_escape_string($userid);
$userpassword = my_sql_real_escape_string($userpassword);

$result = mysql_fetch_array($result);
if ($row ['userid'] == $userid && $row['password'] == $password) [
    alert "You're logged in" $row['username'];
    else {
        alert "Login unsuccessful";
    }
]

</php>
