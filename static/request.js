import $ from 'jquery';

console.log('Running request');
$.getJSON( 'returnJson.js', function( data ) {
    console.log(data);
});
