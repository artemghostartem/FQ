<?php

/* https://api.telegram.org/bot758382664:AAE0U8zYoAw2rikLO_Q_006P5jilBumZSN4/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['name'];
$phone = $_POST['phone'];
$qrew = $_POST['qrew'];
$email = $_POST['email'];
$token = "1321731732:AAGeazUZTgS6yhOpNDW6SG6pZJd_3_D3kHo";
$chat_id = "-413654750";
$arr = array(
  'Имя: ' => $name,
  'Номер телефона: ' => $phone,
  'Название команды: ' => $qrew,
  'E-mail: ' => $email,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thank-you.html');
} else {
  echo "Error";
}
?>