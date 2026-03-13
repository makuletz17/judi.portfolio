<?php include "data.php"; ?>

<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>
        <?php echo $profile['name']; ?> Portfolio
    </title>

    <script src="https://cdn.tailwindcss.com"></script>

</head>

<body class="bg-gray-100 text-gray-800">

    <?php include "components/header.php"; ?>
    <?php include "components/hero.php"; ?>
    <?php include "components/about.php"; ?>
    <?php include "components/skills.php"; ?>
    <?php include "components/projects.php"; ?>
    <?php include "components/contact.php"; ?>
    <?php include "components/footer.php"; ?>

</body>

</html>