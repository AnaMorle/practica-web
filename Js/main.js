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


});