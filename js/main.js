$(document).ready(function (){

  var $container = $('#container');
  $container.imagesLoaded(function () {
    $('#container').masonry({
      itemSelector: '.item',
      columnWidth: function(containerWidth) {
        return containerWidth / 100;
      }
    });
  });

  $( function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
  } );

  $('#container').packery({
  // options
  itemSelector: '.item',
  gutter: 10
});

$grid.packery( 'bindDraggabillyEvents', draggie )
// initialize Packery
var $grid = $('#container').packery({
  itemSelector: '.item',
  // columnWidth helps with drop positioning
  columnWidth: 100
});

// make all grid-items draggable
$grid.find('.item').each( function( i, gridItem ) {
  var draggie = new Draggabilly( gridItem );
  // bind drag events to Packery
  $grid.packery( 'bindDraggabillyEvents', draggie );
});


});
