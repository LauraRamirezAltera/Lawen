<?php 
   try {
       $name = $_POST["name"];
       $email = $_POST["mail"];
       $phone = $_POST["phone"];
       $message = $_POST["message"];

       $error = [];
        
    //    if (strlen($name) < 2) {
    //        $error['name'] = "Ingresa tu nombre";
           
    //    }
       
    //    if (!preg_match('/^[a-z0-9&\'\.\-_\+]+@[a-z0-9\-]+\.([a-z0-9\-]+\.)*+[a-z]{2}/is', $email)) {
    //        $error['email'] = "Ingresa un email valido ";
    //    }
       
    //    if (strlen($subject) < 6) {
    //        $error['subject'] = "Ingrese un asunto de al menos 6 caracteres";
    //    }
       
    //    if (strlen($message) < 3) {
    //        $error['message'] = "Ingresa un mensaje.";
    //    }
       
       
       if (!$error) {
           // cc milton@altera.cl;felipe@altera.cl;becheverria@altera.cl;soporte@altera.cl
           $data = array(
               "user" => "contacto@altera.cl",
               "pass" => "P67Hmj5TSaVw8r5PXUCUZAkd",
               "to" => "contacto@lawensalud.cl",
               "from" => 'contacto@altera.cl',
               "reply_to" => $email,
               "sender_name" => $name . " - Contacto Lawen",
               "html" => "De: ".$name."<br>"."Correo: ".$email."<br>"."Teléfono: ".$phone."<br><br>".$message."<br>",
               "text" => "De: ".$name."<br>"."Correo: ".$email."<br>"."Teléfono: ".$phone."<br><br>".$message."<br>",
               "subject" => 'Formulario de Contacto - Lawen',
               "tag" => "Contacto-Lawen"
           );
           
           $data_string = json_encode($data);
           
           $ch = curl_init('https://mailpremium.altera.cl/api/mail/send');
           curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
           curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
           curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
           curl_setopt($ch, CURLOPT_HTTPHEADER, array(
               'Content-Type: application/json',
               'Content-Length: '. strlen($data_string),
               'api-key: '."uZ5SbR7/Fm52lIvARimxaRaIFHuVRL/6"
           ));
           
           $output = json_decode( curl_exec($ch), true);

            if ($output['success'] === FALSE) {
                 echo "{ 'success' : false, 'error' : 'Error de envio'}";
            }else {
                
                // $url = 'https://www.altera.cl/landing.php?utm_source=web&utm_medium=formulario_contacto';
                // str_replace(" ", "&nbsp;", $name);
               
                echo "{ 'success' : true}";
               // echo "Su mensaje a sido enviado! Nos Contactaremos con Usted.";
               
            }
             
       }else{
           
           $response = (isset($error['name'])) ? '<li>' . $error['name'] . '</li> \n' : '';
           $response .= (isset($error['email'])) ? '<li>' . $error['email'] . '</li> \n' : '';
           $response .= (isset($error['subject'])) ? '<li>' . $error['subject'] . '</li>' : '';
           $response .= (isset($error['message'])) ? '<li>' . $error['message'] . '</li>' : '';
           str_replace(" ", "&nbsp;", $response);
           echo "{ 'success' : false, 'error' : '".$response."'}";
       }
       
   } catch (Exception $e) {
       echo $e;
   }
	
?>