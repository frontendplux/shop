<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/PHPMailer/src/Exception.php';
require __DIR__ . '/PHPMailer/src/PHPMailer.php';
require __DIR__ . '/PHPMailer/src/SMTP.php';

function sendmail($to, $subject, $message)
{
    $from = "nelsonlipp@comcast.net";
    $namefrom = "madDogStudio";
    try {
        $mail = new PHPMailer(true);

        $mail->isSMTP();
        $mail->Host       = 'smtp.comcast.net';
        $mail->SMTPAuth   = true;
        $mail->Username   = $from;
        $mail->Password   = 'HomeRunNelly$!'; // safer
        // Port 465 = SMTPS
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port       = 465;

        $mail->setFrom($from, $namefrom);
        $mail->addAddress($to);

        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body    = $message;
        $mail->AltBody = strip_tags($message);

        $mail->send();

        return true;

    } catch (Exception $e) {

        error_log($mail->ErrorInfo);

        return false;
    }
}

sendmail('samuelsunday752@gmail.com',"code checker ",'I just wanted to take a moment to tell you how much I appreciate having you in my life. Your kindness, support, and positivity always brighten my day. You have a way of making even the toughest situations feel manageable, and I’m grateful for the laughter and encouragement you bring.

Thank you for being such a wonderful friend. I truly value our bond and look forward to creating more great memories together.

Warm regards, codeGod');

?>