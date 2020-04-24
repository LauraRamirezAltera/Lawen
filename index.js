  var slider1 = document.getElementById('secondSectionLawen')
  if(slider1) {
      var tns_slider1 = tns({
          container: '#secondSectionLawen',
          navPosition:"bottom",
          controls:false,
          speed:1000,
          responsive: {
              420: {
                items: 1,
              },
              650: {
                items: 2,
              },
              920:{
                items: 3,  
              }
            }
      })
  }
  var slider2 = document.getElementById('fifthSectionLawen')
  if(slider1) {
      var tns_slider1 = tns({
          container: '#fifthSectionLawen',
          navPosition:"bottom",
          controls:false,
          speed:1000,
          responsive: {
              420: {
                items: 1,
              },
              650: {
                items: 2,
              },
              920:{
                items: 3,  
              }
            }
      })
  }
  var slider3 = document.getElementById('promoSectionLawen')
  if(slider1) {
      var tns_slider1 = tns({
          container: '#promoSectionLawen',
          navPosition:"bottom",
          controls:false,
          speed:1000,
          responsive: {
              420: {
                items: 1,
              },
              650: {
                items: 2,
              },
              920:{
                items: 2,  
              }
            }
      })
  }


  // Link scroll
var links = document.querySelectorAll(".navbar a[href^='#']");
for(var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
};

document.querySelector('.btn_first').addEventListener('click', function(e){
  e.preventDefault();
  document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
});

// Form validation
function formValidation() {

  var validations = 0;

  // Bloquear botón
  var button = document.getElementById('send');
  button.classList.add('disabled');

  // Mensajes de error
  var errorName = document.getElementById('error-name');
  var errorPhone = document.getElementById('error-phone');
  var errorMail = document.getElementById('error-mail');
  var errorMessage = document.getElementById('error-message');

  // Nombre
  var name = document.getElementById('form-name').value; 
  var rgx = /^[a-zA-Z\s]*$/;
  if( rgx.test(name) && name.length > 3 ) { 
    validations += 1;
    errorName.style.display = 'none';
  } else {
    errorName.style.display = 'block';
  }

  // Telefono
  var phone = document.getElementById('form-phone').value;
  var rgx = /^[0-9+]*$/;
  if( rgx.test(phone) && phone.length >= 9 ) {
    validations += 1;
    errorPhone.style.display = 'none';
  } else {
    errorPhone.style.display = 'block';
  }

  // Mail
  var mail = document.getElementById('form-mail').value;
  var rgx = /^([a-zA-ZñÑ0-9_.+-])+\@(([a-zA-ZñÑ0-9-])+\.)+([a-zA-ZñÑ0-9]{2,4})+$/;
  if( rgx.test(mail) ) {
    validations += 1;
    errorMail.style.display = 'none';
  } else {
    errorMail.style.display = 'block';
  }

  // Mensaje
  var message = document.getElementById('form-message').value;
  if( message.length > 3 ) {
    validations += 1;
    errorMessage.style.display = 'none';
  } else {
    errorMessage.style.display = 'block';
  }

  // Send
  function successResponse() {
    var success = document.getElementById('success-message');
    success.style.display = 'block'
    document.getElementById('form-name').value = '';
    document.getElementById('form-phone').value = '';
    document.getElementById('form-mail').value = '';
    document.getElementById('form-message').value = '';

    setTimeout( function(){
      success.style.display = 'none'
    }, 3000)
  }
 
  if( validations === 4 ) {
    $.post("./contact.php", $("#contact-form").serialize(), function(response) {
      var json = JSON.parse(JSON.stringify(eval("(" + response + ")")));
      if(json.success){
            successResponse()
      } else{
        $('#send-error').css({display: 'block'})
      } 

      button.classList.remove('disabled');   
    });
  }

}

document.getElementById('contact-form').addEventListener('submit', function(e){
  e.preventDefault()
  formValidation()
})