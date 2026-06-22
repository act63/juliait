```html
<!DOCTYPE html>
<html lang="it">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Julia - ICDL Computer Essentials</title>

<script src="https://cdn.tailwindcss.com"></script>

<link rel="stylesheet"
href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">

<link rel="stylesheet" href="style.css">

</head>

<body class="bg-gray-950 text-gray-100 min-h-screen">

<div class="flex h-screen">

<div class="w-72 bg-gray-900 border-r border-gray-700 p-6 overflow-y-auto">

<h1 class="text-2xl font-bold text-cyan-400 mb-8">
Julia's ICDL
</h1>

<nav class="space-y-1">

<a href="#" onclick="showModule(0)"
class="nav-link active block py-3 px-4 rounded-lg">
🏠 Home
</a>

<a href="#" onclick="showModule(1)"
class="nav-link block py-3 px-4 rounded-lg">
1. Computer e dispositivi
</a>

<a href="#" onclick="showModule(2)"
class="nav-link block py-3 px-4 rounded-lg">
2. Desktop
</a>

<a href="#" onclick="showModule(3)"
class="nav-link block py-3 px-4 rounded-lg">
3. Testi
</a>

<a href="#" onclick="showModule(4)"
class="nav-link block py-3 px-4 rounded-lg">
4. File
</a>

<a href="#" onclick="showModule(5)"
class="nav-link block py-3 px-4 rounded-lg">
5. Reti
</a>

<a href="#" onclick="showModule(6)"
class="nav-link block py-3 px-4 rounded-lg">
6. Sicurezza
</a>

<hr class="border-gray-700 my-4">

<a href="#" onclick="showModule(7)"
class="nav-link block py-3 px-4 rounded-lg">
🃏 Flashcards
</a>

</nav>

</div>

<div class="flex-1 overflow-y-auto p-10">

<div id="module-0" class="module-content active">
<h1 class="text-4xl font-bold mb-5">
Ciao Julia 👋
</h1>

<p class="text-cyan-400">
Studia un modulo alla volta.
</p>
</div>

<div id="module-1" class="module-content">
<h2 class="text-3xl font-bold mb-4">
Computer e dispositivi
</h2>

<ul class="space-y-2">
<li>CPU</li>
<li>RAM</li>
<li>USB</li>
<li>Monitor</li>
</ul>
</div>

<div id="module-2" class="module-content">
<h2 class="text-3xl font-bold">
Desktop e impostazioni
</h2>
</div>

<div id="module-3" class="module-content">
<h2 class="text-3xl font-bold">
Testi e stampe
</h2>
</div>

<div id="module-4" class="module-content">
<h2 class="text-3xl font-bold">
Gestione file
</h2>
</div>

<div id="module-5" class="module-content">
<h2 class="text-3xl font-bold">
Reti
</h2>
</div>

<div id="module-6" class="module-content">
<h2 class="text-3xl font-bold">
Sicurezza
</h2>
</div>

<div id="module-7" class="module-content">

<h2 class="text-3xl font-bold mb-6">
🃏 Flashcards
</h2>

<div class="space-y-6">

<div class="flashcard">
<div class="card-inner">

<div class="card-front">
Cos'è ICT?
</div>

<div class="card-back">
Tecnologie dell’Informazione e Comunicazione
</div>

</div>
</div>

<div class="flashcard">
<div class="card-inner">

<div class="card-front">
Cos'è la CPU?
</div>

<div class="card-back">
Processore del computer
</div>

</div>
</div>

<div class="flashcard">
<div class="card-inner">

<div class="card-front">
RAM?
</div>

<div class="card-back">
Memoria temporanea
</div>

</div>
</div>

</div>

</div>

</div>

</div>

<script src="script.js"></script>

</body>
</html>
```
