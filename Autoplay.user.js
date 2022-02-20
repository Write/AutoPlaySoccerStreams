// ==UserScript==
// @name        Autoplay
// @namespace   Autoplay Block Ads Soccerstreams
// @description AutoPlay and Block ads on Reddit Soccerstream's streams
// @downloadURL https://github.com/Write/AutoPlaySoccerStreams/raw/main/Autoplay.user.js
// @homepageURL https://github.com/Write/AutoPlaySoccerStreams
// @match       *://hockeyweb.site/*
// @match       *://weakstreams.com/*
// @match       *://givemenbastreams.com/*
// @match       *://uhdstreams.club/*
// @match       *://mygoodstream.pw/*
// @match       *://1stream.top/*
// @match       *://redditsport.live/*
// @match       *://uhdstreams.club/*
// @match       *://bdnewszh.com/*
// @match       *://thecyclingentertainment.com/*
// @match       *://scoresunday.com/*
// @match       *://sportinglive.co/*
// @match       *://cr7soccer.club/*
// @match       *://rsoccerstreams.com/*
// @match       *://*.rsoccerstreams.com/*
// @match       *://footybite.cc/*
// @match       *://*.footybite.cc/*
// @match       *://soccerstreams.net/*
// @match       *://*.soccerstreams.net/*
// @match       *://*techoreels.com/*
// @match       *://myoplay.club/*
// @match       *://fabtech.work/*
// @match       *://techstribes.com/*
// @match       *://elixx.xyz/*
// @match       *://sportsnest.co/*
// @match       *://papahd.club/*
// @match       *://hinhnenhd.info/*
// @match       *://gamerarcades.com/*
// @match       *://poscitech.com/*
// @match       *://bestnhl.com/*
// @match       *://jmutech.xyz/*
// @grant       none
// @version     5.5
// @author      -
// ==/UserScript==

(function() {
    'use strict';

    const current = window.location.href


  /* ----------------------- */
  /* Functions / Utils       */
  /* ----------------------- */
    function match(str, rule) {
        var escapeRegex = (str) => str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
        return new RegExp("^" + rule.split("*").map(escapeRegex).join(".*") + "$").test(str);
    }

    function addScript(text) {
        // Same as, document.head.appendChild(document.createElement('script')).innerHTML = e.target.innerHTML;
        var newScript = document.createElement('script');
        newScript.type = "application/javascript";
        newScript.textContent = text;
        var head = document.getElementsByTagName('head')[0];
        head.appendChild(newScript);
    }

    function pasteStyle(str) {
        var node = document.createElement('style');
        node.type = 'text/css';
        node.appendChild(document.createTextNode(str.replace(/;/g, ' !important;')));
        if (document.head !== null) {
            document.head.appendChild(node);
        }
        else {
          document.documentElement.appendChild(node);
        }
    }

    const checkElement = async selector => {
      while ( document.querySelector(selector) === null) {
        await new Promise( resolve => requestAnimationFrame(resolve) )
      }
      return document.querySelector(selector);
    };

    function pasteStyle(str) {
        var node = document.createElement('style');
        node.type = 'text/css';
        node.appendChild(document.createTextNode(str.replace(/;/g, ' !important;')));
        if (document.head !== null) {
            document.head.appendChild(node);
        } 
        else {
          // No head yet, stick it whereever
          document.documentElement.appendChild(node);
        }
    }

  /* ----------------------- */
  /* Every site              */
  /* ----------------------- */
  checkElement('#\\30').then((selector) => {
      console.log("Removing hot garbage");
      selector.remove()
  });
  checkElement('#ni-overlay').then((selector) => {
      console.log("Removing hot garbage");
      selector.remove()
  });

  
  /* ---------------------------------- */
  /* *://jmutech.xyz/* (AZULITO)        */
  /* ---------------------------------- */
  if ( match(current, "*://jmutech.xyz/*" ))  {
    console.dir("=== jmutech (Azulito) page ===")
    var hotgarbage = [ '.g1-column-1of3.g1-column.g1-sidebar-padded.g1-sidebar', '.g1-row-layout-page.g1-row.g1-footer > .g1-row-background', '.g1-footer', 'h1.g1-mega', 'div.g1-row:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)'];
    hotgarbage.forEach(e => {
      checkElement(e).then((selector) => {
          console.log('Removing hot garbage -- ' + e);
          selector.remove()
      });
    })
    
    var papastyle = `
    .g1-content-narrow > .twitter-tweet, .g1-content-narrow > aside, .g1-content-narrow > audio, .g1-content-narrow > blockquote, .g1-content-narrow > canvas, .g1-content-narrow > code, .g1-content-narrow > div, .g1-content-narrow > dl, .g1-content-narrow > figure, .g1-content-narrow > form, .g1-content-narrow > h1, .g1-content-narrow > h2, .g1-content-narrow > h3, .g1-content-narrow > h4, .g1-content-narrow > h5, .g1-content-narrow > h6, .g1-content-narrow > hr, .g1-content-narrow > iframe, .g1-content-narrow > ol, .g1-content-narrow > p, .g1-content-narrow > pre, .g1-content-narrow > section, .g1-content-narrow > table, .g1-content-narrow > ul, .g1-content-narrow > video 
    { max-width : 100% }
    
    .g1-column-2of3 {
      width: 100%
    }
    `
    pasteStyle(papastyle)
  }
  
  /* ------------------------------------------------- */
  /* *://thecyclingentertainment.com (CyclingStreams)  */
  /* Only work in Chrome                               */
  /* ------------------------------------------------- */
  if ( match(current, "*://thecyclingentertainment.com*" ))  {
    console.dir("=== thecyclingentertainment page ===")
    var hotgarbage = [ '.aft-sticky-sidebar.widget-area', '.masthead-banner', '.font-family-1.em-breadcrumbs', '.entry-title', '.primary-footer', '.site-info' ];
    hotgarbage.forEach(e => {
      checkElement(e).then((selector) => {
          console.log('Removing hot garbage -- ' + e);
          selector.remove()
      });
    })
    
    var papastyle = `#wrapper { margin : 0 }`
    pasteStyle(papastyle)
  }

  /* ----------------------- */
  /* *://bestnhl.com/*       */
  /* ----------------------- */
  if ( match(current, "*://bestnhl.com/soccer/stream*" ))  {
    console.dir("=== BestNHL page ===")
    var hotgarbage = [ '.bbevent.container', '.col-md-12' ];
    hotgarbage.forEach(e => {
      checkElement(e).then((selector) => {
          console.log('Removing hot garbage -- ' + e);
          selector.remove()
      });
    })
    
    var papastyle = `#wrapper { margin : 0 }`
    pasteStyle(papastyle)
  }
  
  /* ----------------------- */
  /* *://papahd.club/*       */
  /* ----------------------- */
  if ( match(current, "*://poscitech.com*") )  {
    console.dir("=== poscitech page ===")
    var hotgarbage = [ '#secondary', '#colophon', 'nav'];
    hotgarbage.forEach(e => {
      checkElement(e).then((selector) => {
          console.log('Removing hot garbage -- ' + e);
          selector.remove()
      });
    })
    
    var papastyle = `
    body, html,article {
      background: #141414;
    }
    .post-inner-content {
      padding: 0;
    }
    body.archive .post-inner-content, body.blog .post-inner-content, .post-inner-content:first-child {
      border: none;
    }`
    pasteStyle(papastyle)
  }

  
  /* ----------------------- */
  /* *://papahd.club/*       */
  /* ----------------------- */
  if ( match(current, "*://papahd.club*") )  {
    console.dir("=== Papahd page ===")
    var hotgarbage = [ '#credit', '#footer', '.sidebar.s1', '.sidebar.s2', 'a[href*=total]', 'a[href*=discord]'];
    hotgarbage.forEach(e => {
      checkElement(e).then((selector) => {
          console.log('Removing hot garbage -- ' + e);
          selector.remove()
      });
    })
    
    var papastyle = `#wrapper { margin : 0 }`
    pasteStyle(papastyle)
  }

  /* ----------------------- */
  /* rsoccerstreams.com/     */
  /* ----------------------- */
  if ( match(current, "*://*rsoccerstreams.com*") || match(current, "*://*soccerstreams.net*") || match(current, "*://*footybite.cc*") )  {
    console.dir("=== Main soccerstreams page ===")
    var hotgarbage = [ '.mt-3.mb-3.text-center', '.alert-warning.alert', '.alert-dismissible'];
    hotgarbage.forEach(e => {
      checkElement(e).then((selector) => {
          console.log('Removing hot garbage -- ' + e);
          selector.remove()
      });
    })
  }
  
  /* ----------------------- */
  /* bdnewszh.com            */
  /* ----------------------- */
  if (match(current, "*://bdnewszh.com*"))  {
    var hotgarbage = [ '.abblock-msg', '.capitalize', '.billboard-banner', '.footer', '.footer-sticky-banner', '.right-sticky-banner', '.left-sticky-banner', '.container.powerdby'];
    hotgarbage.forEach(e => {
      checkElement(e).then((selector) => {
          console.log('Removing hot garbage -- ' + e);
          selector.remove()
      });
    })
  }

  /* ----------------------- */
  /* weakstreams.com         */
  /* Liveonscore             */
  /* ----------------------- */
  if (match(current, "*://weakstreams.com*"))  {
  
    var hotgarbage = [ 'div [class*=styles__MatchInfo]', '.content-sidebar', 'div.discord', '#gamecard', '#footer-sidebar', 'h3', '#colophon', '.ads-placment', '.ads-placment','.ads-placment', '.site-info', 'div.adsbyvli', '.adsbyvli', 'a[style*=z-index\\:\\ 2147483647]',
                     'a[style*=width\\:\\ 2287]', 'a[style*=width\\:\\ 2287]', 'div[class*=row\\ ml-1\\ mr-1\\ pt-2\\ mt-4]'];
    hotgarbage.forEach(e => {
      checkElement(e).then((selector) => {
          console.log('Removing hot garbage -- ' + e);
          selector.remove()
      });
    })
    
    window.addEventListener("load", function() {
        var injectBeforeThis = document.querySelector('.entry-content')
        var newBtn = document.createElement('a')
        newBtn.className = 'button'
        newBtn.style = 'cursor: pointer;display:block; float:left;margin-bottom: 5px;margin-left:30px'
        newBtn.text = 'PLEIN ECRAN'
        newBtn.addEventListener('click', function(){ player.core.mediaControl.toggleFullscreen(); player.unmute(); player.play(); });
        injectBeforeThis.parentElement.insertBefore(newBtn, injectBeforeThis)
      
        var injectBeforeThis = document.querySelector('.entry-content')
        var newBtn = document.createElement('a')
        newBtn.className = 'button'
        newBtn.style = 'cursor: pointer; margin-left: 10px !important; display:block;float:right;margin-bottom: 5px;margin-right:30px'
        newBtn.text = 'RECHARGER PAGE'
        newBtn.addEventListener('click', function(){ document.location.reload(); });
        injectBeforeThis.parentElement.insertBefore(newBtn, injectBeforeThis)
    })
    
    var stylingWeakstreams = `
    html, body, #page, #content, .entry-content, .entry-header {
        background: #18191c;
    }
    #primary {
        padding-top: 15px;
    }
    .entry-header, .entry-title, .content-area, span, .site-name, .smtitle { color: rgb(205, 200, 194); }
    `
    
    pasteStyle(stylingWeakstreams);
  }

  /* ----------------------- */
  /* fabtech.work            */
  /* ----------------------- */
  if (match(current, "*://fabtech.work*"))  {
    var hotgarbage = [ '#secondary', '.g1-row-layout-page.g1-row.g1-footer > .g1-row-background', '.g1-column', '.g1-hb-shadow-off.g1-hb-sticky-off.g1-hb-boxed.g1-hb-row-2.g1-hb-row-b.g1-hb-row-normal.g1-hb-row.g1-row-layout-page.g1-row > .g1-row-background',
                     '.g1-hb-shadow-off.g1-hb-sticky-off.g1-hb-boxed.g1-hb-row-2.g1-hb-row-b.g1-hb-row-normal.g1-hb-row.g1-row-layout-page.g1-row > .g1-row-inner > .g1-dropable.g1-column'];
    hotgarbage.forEach(e => {
      checkElement(e).then((selector) => {
          console.log('Removing hot garbage -- ' + e);
          selector.remove()
      });
    })
    window.addEventListener("load", function() {
        var injectBeforeThis = document.querySelector('.g1-content-narrow.g1-typography-xl.entry-content')
        var newBtn = document.createElement('a')
        newBtn.className = 'button'
        newBtn.style = 'cursor: pointer;display:block; float:left;z-index:9999;position:fixed; padding:3px; font-weight: bold;box-shadow: 0px 0px 4px #cccccc6e;border-radius: 4px;'
        newBtn.text = 'PLEIN ECRAN'
        newBtn.addEventListener('click', function(){ player.requestFullscreen(); player.muted(false); player.play(); });
        injectBeforeThis.parentElement.insertBefore(newBtn, injectBeforeThis)
      
        var injectBeforeThis = document.querySelector('.entry-content')
        var newBtn = document.createElement('a')
        newBtn.className = 'button'
        newBtn.style = 'cursor: pointer; display:block;float:right;z-index:9999;position:sticky; padding:3px; font-weight: bold;box-shadow: 0px 0px 4px #cccccc6e;border-radius: 4px;'
        newBtn.text = 'RECHARGER PAGE'
        newBtn.addEventListener('click', function(){ document.location.reload(); });
        injectBeforeThis.parentElement.insertBefore(newBtn, injectBeforeThis)
    })
  }
  
  /* --------------------------- */
  /* http://givemenbastreams.com */
  /* --------------------------- */
  if (match(current, "*://givemenbastreams.com*"))  {
    var hotgarbage = [ '#secondary'];
    hotgarbage.forEach(e => {
      checkElement(e).then((selector) => {
          console.log('Removing hot garbage -- ' + e);
          selector.remove()
      });
    })
    window.addEventListener("load", function() {
        var injectBeforeThis = document.querySelector('.w-full.rounded.overflow-hidden.shadow-md.bg-white')
        var newBtn = document.createElement('a')
        newBtn.className = 'button'
        newBtn.style = 'cursor: pointer; display:block;float:right;z-index:9999;position:sticky; padding:3px; font-weight: bold;box-shadow: 0px 0px 4px #cccccc6e;border-radius: 4px;background: #ffffff26; margin-bottom: 5px;'
        newBtn.text = 'RECHARGER PAGE'
        newBtn.addEventListener('click', function(){ document.location.reload(); });
        injectBeforeThis.parentElement.insertBefore(newBtn, injectBeforeThis)
    })
  }
  
  /* ----------------------- */
  /* techstribes.com         */
  /* ----------------------- */
  if (match(current, "*://techstribes.com*"))  {
    var hotgarbage = [ '#live-chat-iframe', '#dismiss-btn' ];
    hotgarbage.forEach(e => {
      checkElement(e).then((selector) => {
          console.log('Removing hot garbage -- ' + e);
          selector.remove()
      });
    })
    
    checkElement('div[data-player]').then((selector) => {
      selector.style = "width: 100%";
    });
  }
  
  /* ----------------------- */
  /* techstribes.com         */
  /* ----------------------- */
  if (match(current, "*://sportsnest.co*"))  {
    var hotgarbage = [ '#close', 'tr', 'td', 'td', 'h4', '#ad', '.nv-top-header-wrap', '.nv-header-menu-block-wrap', '.nv-logo-section-wrapper', '.site-footer'];
    hotgarbage.forEach(e => {
      checkElement(e).then((selector) => {
          console.log('Removing hot garbage -- ' + e);
          selector.remove()
      });
    })
    
    checkElement('div[data-player]').then((selector) => {
      selector.style = "width: 100%";
    });
    
    var styleTechstribes = `
    #primary, #main, .cv-container, .entry-content, article, #player, .container {
      width: 100% !important;
    }
    `
    
    pasteStyle(styleTechstribes);
  }

  /* ----------------------- */
  /* myoplay.club            */
  /* ----------------------- */
  if (match(current, "*://myoplay.club*"))  {
    var hotgarbage = [ '.main-header.normal-header','.footer-widget-area', '.sub-footer', 'iframe[src^="https://video.ibm.com"]', '.letters.type.eae-at-animation', '.elementor-button-wrapper', '.eae-particle-21d35dd', '.elementor-shape-top', '.elementor-widget', '.elementor-top-section', '.elementor-widget-container', 'div[style^="position: fixed; display: block"]'];
    hotgarbage.forEach(e => {
      checkElement(e).then((selector) => {
          console.log('Removing hot garbage -- ' + e);
          selector.remove()
      });
    })
  }

  /* ----------------------- */
  /* 1stream.top             */
  /* ----------------------- */
  if (match(current, "*://1stream.top*"))  {
    checkElement('#main-header-right').then((selector) => {
        console.log("Removing garbage");
        selector.remove()
    });
  }

  /* ----------------------- */
  /* Redditsport.live        */
  /* ----------------------- */
  if (match(current, "*://redditsport.live/*"))  {
    checkElement('.col-sm-4').then((selector) => {
        console.log("Removing garbage");
        selector.remove()
    });
    checkElement('.col-sm-3').then((selector) => {
        console.log("Removing garbage");
        selector.remove()
    });
    checkElement('.col h2').then((selector) => {
        console.log("Removing garbage");
        selector.remove()
    });
   // debugger;
  }

    /* ------------ */
    /* Autoplay     */
    /* ------------ */

      /* Autoplay feature */
      /* Bitmovin autoplay*/
      setTimeout(function(){
            var bitmovinType = typeof bitmovin
            console.log = console.dir
            if (bitmovinType === 'object') {
                console.dir("=== Bitmovin Lecture ===")
              
                /* Special case for best NHL */
                if (match(current, "*://bestnhl.com/soccer/*")) {
                  console.dir("=== BESTNHL Handle AutoPlay with Bitmovin ===") 
                  /* Delaying bitmovin player detection to 500ms */
                  setTimeout(function(){
                  console.dir("=== BESTNHL / Bitmovin: Delayed try of play ===") 
                  if (bitmovin.player('my-player') !== "undefined") {
                   /* On essaie d'unmute le player et de jouer */
                    bitmovin.player('my-player').unmute()
                    bitmovin.player('my-player').play()
                    setTimeout(function(){
                      /* Le player est en pause, on mute et lecture */
                      console.dir("=== BESTNHL / Bitmovin : setTimeout")
                      if (!bitmovin.player('my-player').isPlaying()) {
                        console.dir("=== BESTNHL / Bitmovin : Player is paused. Trying to mute & play ===")
                        bitmovin.player('my-player').mute()
                        bitmovin.player('my-player').play()
                      }
                    }, 50);
                  }
                  }, 500);
                }
                else if (typeof player == 'object') {
                  /* On essaie d'unmute le player et de jouer */
                  player.unmute()
                  player.play()
                  setTimeout(function(){
                    /* Le player est en pause, on mute et lecture */
                    if (!player.isPlaying()) {
                      player.mute()
                      player.play()
                    }
                  }, 100);
                }
                else {
                  /* Player undefined, fallback to querySelector */
                  document.querySelector('video').muted = false
                  document.querySelector('video').play()
                  setTimeout(function(){
                    /* Le player est en pause, on mute et lecture */
                    if (document.querySelector('video').paused) {
                      console.log("=== Player is paused, mute and play. ===")
                      document.querySelector('video').muted = true
                      document.querySelector('video').play()
                    }

                  }, 100);
                }
            }
            else if (typeof Clappr === 'object') {
                console.dir('Clappr Autoplay')
                    document.querySelector('video').muted = false
                    /* simulate a click on player-poster */
                    document.querySelector('.player-poster').click()
                    var promise = document.querySelector('video').play()
                    if (promise !== undefined) {
                        promise.then(function() {
                            console.log('Clappr Auto play allowed')
                            // Autoplay started
                            document.querySelector('video').muted = false

                            player.unmute();
                        }).catch(error => {
                            console.log('Clappr Autoplay with sound not allowed')
                            // Autoplay not allowed!
                            document.querySelector('video').muted = true
                            document.querySelector('video').play()
                            player.setVolume(0)
                            player.mute();
                            document.querySelector('.player-poster').click()
                        });
                    }
                    else {
                        console.log('Clappr Autoplay not set')
                        player.mute();
                        document.querySelector('video').play()
                    }
            }
            else if (typeof videojs === 'function') {
                console.dir('Videojs Autoplay')
                    document.querySelector('video').muted = false
                    var promise = document.querySelector('video').play()
                    if (promise !== undefined) {
                        promise.then(function() {
                            console.log('Videojs Auto play allowed')
                            // Autoplay started
                            document.querySelector('video').muted = false
                        }).catch(error => {
                            console.log('Videojs Autoplay with sound not allowed')
                            // Autoplay not allowed!
                            document.querySelector('video').muted = true
                            document.querySelector('video').play()
                        });
                    }
                    else {
                        console.log('Videojs Autoplay not set')
                        document.querySelector('video').play()
                    }
        }
        else { console.dir("No player found to autoplay")}
      }, 500);

      /* Destroy js scripts */
      /* Also destroy js redirect */
      new MutationObserver((_, observer) => {
          var scripts = document.querySelectorAll('script');
          var currentScript
          scripts.forEach(function(e) {
              var ua = navigator.userAgent
              if (e.src.search('cdn4ads') >= 0) {
                  e.innerHTML = ''
                  e.remove()
              }
              if (e.src.search('suv4') >= 0) {
                  e.innerHTML = ''
                  e.remove()
              }
              if (e.src.search('v1.0.js') >= 0) {
                  e.innerHTML = ''
                  e.remove()
              }
              if (e.src.search('mahimeta') >= 0) {
                  e.innerHTML = ''
                  e.remove()
              }
              if (e.src.search('quant') >= 0) {
                  e.innerHTML = ''
                  e.remove()
              }
              if (e.src.search('ads') >= 0) {
                  e.innerHTML = ""
                  e.remove()
              }
              if (e.src.search('tag.js') >= 0) {
                  e.innerHTML = ''
                  e.remove()
              }
              if (e.src.search('tag.min.js') >= 0) {
                  e.innerHTML = ""
                  e.remove()
              }
              /* Whitelisting */
              if (match(current, '*techoreels.com*') || (match(current, '*https://bestnhl.com/*'))) {
                  return
              }
              if (e.textContent.search('window.location') >= 0 && e.textContent.search('darkreader') == -1 && e.textContent.search('universal-bypass') == -1) {
                  console.log("Mutation observer: window.location detected")
                  observer.disconnect()
                  currentScript = e.innerHTML;
                  currentScript = currentScript.replace(/eval\(function \(p, a, c, k, e, d\) {.*}/gm, '')

                  currentScript = currentScript.replace(/window.location.replace\(".*?"\)/g, 'console.log("snif snif")')
                  currentScript = currentScript.replace(/if\(window==window.top\) {window.location.replace\(".*"\);}/g, "")
                  currentScript = currentScript.replace(/if\ \(document\.referrer\.indexOf\(b\)\!=-1\){\n.*\n}/g, "")
                  currentScript = currentScript.replace(/if\(window==window.top\){\n.*\n}/g, "")
                  currentScript = currentScript.replace(/setInterval\(function\(\){\n.*\n}, .*\)/g, "")
                  e.innerHTML = ""
                  e.remove()
                  //console.log(currentScript)
                  addScript(currentScript)
                  }
              })
      }).observe(document.documentElement, { childList: true, subtree: true });
})();