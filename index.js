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