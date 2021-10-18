   // This code loads the IFrame Player API code asynchronously.
   var tag = document.createElement('script');

   tag.src = "https://www.youtube.com/iframe_api";
   var firstScriptTag = document.getElementsByTagName('script')[0];
   firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

   // This function creates an <iframe> (and YouTube player)
   //    after the API code downloads.
   function onYouTubeIframeAPIReady() {
     //  <div id="player"> -> html 파일 안의 id = player 인 요소
     new YT.Player('player', {
       videoId: 'An6LvWQuj_8', // 최초 재생할 유튜브 영상 ID
       playerVars: {
         autoplay: true, // 자동 재생 유무
         loop: true, // 반복 재생 유무
         playlist: 'An6LvWQuj_8' // 반복 재생할 유투브 영상 ID 목록
       },
       events: {
         onReady: function (event) {
          event.target.mute() // 음소거
         }
       }
     });
   }