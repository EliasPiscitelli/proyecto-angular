import { Component, OnInit, ViewChild } from '@angular/core';
import { ClipboardJS } from '../../../assets/clipboard/clipboard.js-master/dist/clipboard.min.js';
declare var $:any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  @ViewChild('textos') textos;

  constructor() {
    

   }

  ngOnInit() {

   $("#lanzar-popup").click(function () {
            $("#popup").toggle("slide", 1500);
        });

    $("#boton2").click(function () {
            $("#popup2").toggle("slide", 1500);
        });

    $("#boton3").click(function () {
            $("#popup3").toggle("slide", 1500);
        });

     $("#boton4").click(function () {
            $("#popup4").toggle("slide", 1500);
        });
   

     $("#boton5").click(function () {
            $("#popup5").toggle("slide", 1500);
        });

  // Copiar Contenido al portapapeles


var btn = document.getElementById('#copy-button');
var clipboard = new clipboard('#copy-button');

 clipboard.on('success', function(e) {
        console.log(e);
    });

    clipboard.on('error', function(e) {
        console.log(e);
    });

var btn = document.getElementById('#copy-button2');
var clipboard = new ClipboardJS('#copy-button2');
 clipboard.on('success', function(e) {
        console.log(e);
    });

    clipboard.on('error', function(e) {
        console.log(e);
    });

var btn = document.getElementById('#copy-button3');
var clipboard = new ClipboardJS('#copy-button3');
 clipboard.on('success', function(e) {
        console.log(e);
    });

    clipboard.on('error', function(e) {
        console.log(e);
    });
var btn = document.getElementById('#copy-text4');
 var clipboard = new ClipboardJS('#copy-text4'); 
    clipboard.on('success', function(e) {
        console.log(e);
    });

    clipboard.on('error', function(e) {
        console.log(e);
    });



/*
var btn = document.getElementById('#copy-a');
var clipboard = new ClipboardJS('#copy-a');
 clipboard.on('success', function(e) {
        console.log(e);
    });

    clipboard.on('error', function(e) {
        console.log(e);
    });
*/
var btn = document.getElementById('#copy-button5');
var clipboard = new ClipboardJS('#copy-button5');
 clipboard.on('success', function(e) {
        console.log(e);
    });

    clipboard.on('error', function(e) {
        console.log(e);
    });
/*
  function copyToClipboard(elemento) {
    var $temp = $("<input>")
      $(".container").append($temp);
      $temp.val($(elemento).text()).select();
    document.execCommand("copy");
        $temp.remove();
}

 */   




  }


  

  

}
