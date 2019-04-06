$(document).ready (function ()
                   {
                    function CreateDiv ()
                    {
                      var Time=Math.floor (Math.random ()*10001); // 0-10000 arasında bir değer üretir. Saniyeye çevirdiğimizde 0-10 saniye arasında bir değerdir.
                      var Interval=setInterval (function ()
                                                {
                                                  $("body").append ('<div style="background-color: rgb('+Math.floor (Math.random ()*255)+', '+Math.floor (Math.random ()*255)+', '+Math.floor (Math.random ()*255)+'); top: '+(Math.floor (Math.random ()*($(window).height ()-145))+46)+'px; left: '+Math.floor (Math.random ()*($(window).width ()-99))+'px;"></div>');
                                                  clearInterval (Interval);
                                                  CreateDiv ();
                                                }, Time);
                    }
                    CreateDiv ();
                    var Count=0;
                    $("body").on ("click", "div", function ()
                                                  {
                                                    $(this).fadeOut (500, function ()
                                                                          {
                                                                            $(this).remove ();
                                                                            Count++;
                                                                            $("p:nth-child(2)").html ("Tıklanılan Div Sayısı: "+Count);
                                                                          });
                                                  });
                    var HasSrc=false;
                    $(window).mousemove (function (eventObject)
                                         { 
                                          if (!HasSrc)
                                          {
                                            $("img").attr ("src", "Image/Follower.png");
                                            HasSrc=true;
                                          }
                                          $("img").css ({"top": eventObject.pageY-30+"px",
                                                         "left": eventObject.pageX-30+"px"});
                                         });
                   });