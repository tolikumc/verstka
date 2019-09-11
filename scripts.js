$( "#toggle" ).click(function() {
    this.classList.toggle('active');
    $( "#content" ).slideToggle( "slow" );
});

  $( "#toggle2" ).click(function() {
    this.classList.toggle('active');
    $( "#content2" ).slideToggle( "slow" );
  });

  $( "#toggle3" ).click(function() {
    this.classList.toggle('active');
    $( "#content3" ).slideToggle( "slow" );
  });


  $('#currency-select').change(function(e) {
    $('.currency').text(e.target.value)
  })


  function copyUrl(){
    var copyUrl = document.getElementById("urlInput");
    console.log(copyUrl);
    
    copyUrl.select();
    copyUrl.setSelectionRange(0, 99999);
    document.execCommand("copy");
  }