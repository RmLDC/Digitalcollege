$(document).ready(function(){
    $(".clc").click(function(){
      $("#display").val($("#display").val() +$(this).val());
    });
    $(".clear").click(function(){
      $("#display").val('');
    }); 
    $(".resultado").click(function(){
      $("#display").val(eval($("#display").val()));
    });
  });