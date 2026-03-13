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

  <section id="projects" class="py-20 bg-gray-100">

    <div class="max-w-6xl mx-auto">

      <h2 class="text-3xl font-bold mb-10 text-center">Projects</h2>

      <div class="grid md:grid-cols-2 gap-8">

        <?php foreach ($projects as $project): ?>

          <div class="bg-white p-6 rounded-lg shadow">

            <h3 class="text-xl font-bold mb-2">
              <?php echo $project['title']; ?>
            </h3>

            <p class="text-gray-600 mb-2">
              <?php echo $project['description']; ?>
            </p>

            <p class="text-sm text-blue-500 mb-3">
              <?php echo implode(" | ", $project['tech']); ?>
            </p>

            <ul class="list-disc ml-5 text-gray-700">

              <?php foreach ($project['details'] as $detail): ?>
                <li><?php echo $detail; ?></li>
              <?php endforeach; ?>

            </ul>

          </div>

        <?php endforeach; ?>

      </div>

    </div>

  </section>

</body>

</html>