<?php
include('../includes/db.php');
header('Content-Type: text/html; charset=utf-8');
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $client_name = $_POST['client_name'];
    $amount = $_POST['amount'];
    $sql = "INSERT INTO invoices (client_name, amount) VALUES ('$client_name', '$amount')";
    $conn->query($sql);
}
?>
<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>إدارة الفواتير - نظام شركة هوسكو للصناعات الحديدية</title>
</head>
<body>
    <header style="text-align: center; margin: 20px 0;">
        <img src="../assets/azam.png" alt="شعار شركة هوسكو للصناعات الحديدية" style="max-width: 200px; height: auto;">
    </header>
    <h1>إدارة الفواتير - شركة هوسكو للصناعات الحديدية</h1>
    <form method="POST">
        <label>اسم العميل:</label>
        <input type="text" name="client_name" required>
        <label>المبلغ:</label>
        <input type="number" name="amount" required>
        <button type="submit">إضافة</button>
    </form>

    <h2>الفواتير:</h2>
    <table>
        <tr>
            <th>ID</th>
            <th>اسم العميل</th>
            <th>المبلغ</th>
            <th>تاريخ الإضافة</th>
        </tr>
        <?php
        $result = $conn->query("SELECT * FROM invoices");
        while ($row = $result->fetch_assoc()) {
            echo "<tr><td>{$row['id']}</td><td>{$row['client_name']}</td><td>{$row['amount']}</td><td>{$row['created_at']}</td></tr>";
        }
        ?>
    </table>
</body>
</html>