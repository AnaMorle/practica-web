$(document).ready(function(){

    //slider
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        responsive: true
      });
      //post

      var post = [
        { 
          title: 'Prueba de titulo 1', 
          date: moment().format("MMMM Do YYYY"),
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam cursus nisi magna, quis posuere augue aliquet eu. Fusce ac lectus mollis, feugiat ex nec, ornare odio. Praesent dictum ut elit non mattis. Nam eget aliquam est. Aenean suscipit sodales cursus. Donec auctor, elit eu tempor fringilla, elit eros congue tellus, ac suscipit neque neque nec neque. Aenean non rutrum nunc. Curabitur purus turpis, gravida vitae mollis cursus, suscipit non tortor. Nunc sapien quam, luctus nec mauris ut, efficitur molestie nibh. Integer egestas est sit amet est ornare, nec accumsan dui maximus. Suspendisse augue ex, congue sed facilisis id, efficitur et augue. Cras pulvinar, est sit amet hendrerit porttitor, lectus augue lacinia mi, eget sagittis felis lorem vel ex. Vestibulum lobortis ipsum vitae velit scelerisque, rhoncus auctor neque molestie.  '
        },
        { 
          title: 'Prueba de titulo 2', 
          date: moment().format("MMMM Do YYYY"),
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam cursus nisi magna, quis posuere augue aliquet eu. Fusce ac lectus mollis, feugiat ex nec, ornare odio. Praesent dictum ut elit non mattis. Nam eget aliquam est. Aenean suscipit sodales cursus. Donec auctor, elit eu tempor fringilla, elit eros congue tellus, ac suscipit neque neque nec neque. Aenean non rutrum nunc. Curabitur purus turpis, gravida vitae mollis cursus, suscipit non tortor. Nunc sapien quam, luctus nec mauris ut, efficitur molestie nibh. Integer egestas est sit amet est ornare, nec accumsan dui maximus. Suspendisse augue ex, congue sed facilisis id, efficitur et augue. Cras pulvinar, est sit amet hendrerit porttitor, lectus augue lacinia mi, eget sagittis felis lorem vel ex. Vestibulum lobortis ipsum vitae velit scelerisque, rhoncus auctor neque molestie. '
        },
        { 
          title: 'Prueba de titulo 3', 
          date: moment().format("MMMM Do YYYY"),
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam cursus nisi magna, quis posuere augue aliquet eu. Fusce ac lectus mollis, feugiat ex nec, ornare odio. Praesent dictum ut elit non mattis. Nam eget aliquam est. Aenean suscipit sodales cursus. Donec auctor, elit eu tempor fringilla, elit eros congue tellus, ac suscipit neque neque nec neque. Aenean non rutrum nunc. Curabitur purus turpis, gravida vitae mollis cursus, suscipit non tortor. Nunc sapien quam, luctus nec mauris ut, efficitur molestie nibh. Integer egestas est sit amet est ornare, nec accumsan dui maximus. Suspendisse augue ex, congue sed facilisis id, efficitur et augue. Cras pulvinar, est sit amet hendrerit porttitor, lectus augue lacinia mi, eget sagittis felis lorem vel ex. Vestibulum lobortis ipsum vitae velit scelerisque, rhoncus auctor neque molestie.  '
        },
        { 
          title: 'Prueba de titulo 4', 
          date: moment().format("MMMM Do YYYY"),
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam cursus nisi magna, quis posuere augue aliquet eu. Fusce ac lectus mollis, feugiat ex nec, ornare odio. Praesent dictum ut elit non mattis. Nam eget aliquam est. Aenean suscipit sodales cursus. Donec auctor, elit eu tempor fringilla, elit eros congue tellus, ac suscipit neque neque nec neque. Aenean non rutrum nunc. Curabitur purus turpis, gravida vitae mollis cursus, suscipit non tortor. Nunc sapien quam, luctus nec mauris ut, efficitur molestie nibh. Integer egestas est sit amet est ornare, nec accumsan dui maximus. Suspendisse augue ex, congue sed facilisis id, efficitur et augue. Cras pulvinar, est sit amet hendrerit porttitor, lectus augue lacinia mi, eget sagittis felis lorem vel ex. Vestibulum lobortis ipsum vitae velit scelerisque, rhoncus auctor neque molestie. '
        }, 
        { 
          title: 'Prueba de titulo 5', 
          date: moment().format("MMMM Do YYYY"),
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam cursus nisi magna, quis posuere augue aliquet eu. Fusce ac lectus mollis, feugiat ex nec, ornare odio. Praesent dictum ut elit non mattis. Nam eget aliquam est. Aenean suscipit sodales cursus. Donec auctor, elit eu tempor fringilla, elit eros congue tellus, ac suscipit neque neque nec neque. Aenean non rutrum nunc. Curabitur purus turpis, gravida vitae mollis cursus, suscipit non tortor. Nunc sapien quam, luctus nec mauris ut, efficitur molestie nibh. Integer egestas est sit amet est ornare, nec accumsan dui maximus. Suspendisse augue ex, congue sed facilisis id, efficitur et augue. Cras pulvinar, est sit amet hendrerit porttitor, lectus augue lacinia mi, eget sagittis felis lorem vel ex. Vestibulum lobortis ipsum vitae velit scelerisque, rhoncus auctor neque molestie.  '
        }
      ];
      post.forEach((item , index) => {
        /*remplaza el contenido con la sig. plantilla*/
        var post = `
        <article class="post">
        <h2>${item.title}</h2>
        <span class="date">Fecha de publicacion</span>
        <p>
        ${item.content}
        </p>
        <a href="#" class="button-more">Leer más</a>

    </article>
    `;
    $("#posts").append(post);
      });

      //selector de tema
      var theme = $("#theme");
      $("#to-green").click(function(){
        theme.attr("href" , "Css/green.css");
        localStorage.setItem('tema','Css/green.css');
      });
      $("#to-red").click(function(){
        theme.attr("href" , "Css/red.css");
        localStorage.setItem('tema','Css/red.css');
      });     
      $("#to-blue").click(function(){
        theme.attr("href" , "Css/blue.css");
        localStorage.setItem('tema','Css/blue.css');
      });
//cargar ultimo tema elegido
     if(localStorage.getItem('tema') == null || localStorage.getItem('tema') == "Css/green.css"){
       localStorage.setItem('tema', "Css/green.css");
       theme.attr("href" , "Css/green.css");
     }else if(localStorage.getItem('tema') == "Css/red.css"){
      localStorage.setItem('tema', "Css/red.css");
      theme.attr("href" , "Css/red.css");
     }else if(localStorage.getItem('tema') == "Css/blue.css"){
      localStorage.setItem('tema', "Css/blue.css");
      theme.attr("href" , "Css/blue.css");
     }

     //scroll arriba

     $(".subir").click(function(e){
       e.preventDefault();
       $('html, body').animate({
         scrollTop: 0}, 500);
         return false;
     });

     //loggin
    $("#login, form").submit(function(){
      var form_name = $("#form_name").val();

      localStorage.setItem("form_name", form_name);
    });
    var form_name = localStorage.getItem("form_name");

    if(form_name != null || form_name != undefined){
      var about_parrafo = $("#about p");
    
    about_parrafo.html("<strong>Bienvenido " + form_name + "</strong> ");
    about_parrafo.append("<a href='' id='logout'> Cerrar sesión </a>")


    $("#login").hide();

    $("#logout").click(function(){
      localStorage.clear();
      location.reload();
    })
    }
});