<?php
session_start();
if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit();
}
?>
<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>نظام شركة هوسكو للصناعات الحديدية</title>
</head>
<body>
    <header style="text-align: center; margin: 20px 0;">
        <img src="assets/azam.png" alt="شعار شركة هوسكو للصناعات الحديدية" style="max-width: 200px; height: auto;">
    </header>
    <h1>مرحبًا بك في نظام شركة هوسكو للصناعات الحديدية</h1>
    <ul>
        <li><a href="modules/invoices.php">إدارة الفواتير</a></li>
        <li><a href="modules/reports.php">التقارير</a></li>
    </ul>
    <a href="logout.php">تسجيل الخروج</a>
</body>
</html>