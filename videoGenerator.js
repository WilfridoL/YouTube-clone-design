// automating the creation of video elements with JSON
fetch('./data.json')
  .then(response => response.json()).then(data => {
    const videoBlock1 = data.videoBlck1;
    const shorts = data.shorts;
    const videoBlock2 = data.videoBlck2;
    // video container creator
    const content = document.querySelector('.content-videos');
    for (let i = 0; i < videoBlock1.length; i++) {
      const videoContainer = document.createElement('div');
      videoContainer.classList.add('divs')
      content.appendChild(videoContainer);
    }
    // element creator
    const videoContainers = document.querySelectorAll('.divs');
    for (let i = 0; i < videoContainers.length; i++) {
      // image elements
      const imgContainer = document.createElement('div');
      imgContainer.classList.add('video-img');
      const img = document.createElement('img');
      img.src = videoBlock1[i]['video-img'];
      img.classList.add('video');

      // video duration
      const videoDuration = document.createElement('div');
      videoDuration.classList.add('duration');
      videoDuration.textContent = videoBlock1[i]['video-duration'];
      imgContainer.appendChild(img);
      imgContainer.appendChild(videoDuration);
      videoContainers[i].appendChild(imgContainer);

      // text container
      const rowContainer = document.createElement('div');
      rowContainer.classList.add('row');

      // canal logo elements
      const logoContainer = document.createElement('div');
      logoContainer.classList.add('canal-logo');
      const imgLogo = document.createElement('img');
      imgLogo.src = videoBlock1[i]['canal-logo'];
      imgLogo.classList.add('logo');
      logoContainer.appendChild(imgLogo);
      rowContainer.appendChild(logoContainer);

      // tittle elements
      const textContainer = document.createElement('div');
      textContainer.classList.add('text');
      const tittle = document.createElement('h3');
      tittle.textContent = videoBlock1[i]['tittle-video'];

      // canal name
      const canalName = document.createElement('h5');
      canalName.textContent = videoBlock1[i]['canal-name'];

      // views numbers
      const views = document.createElement('h6');
      views.textContent = videoBlock1[i]['views'] + ' views';
      textContainer.appendChild(tittle);
      textContainer.appendChild(canalName);
      textContainer.appendChild(views);
      rowContainer.appendChild(textContainer);
      videoContainers[i].appendChild(rowContainer);

      // video options
      const videoOptions = document.createElement('div');
      videoOptions.classList.add('options');
      const optionsSymbol = document.createElement('img');
      optionsSymbol.src = videoBlock1[i]['options'];
      videoOptions.appendChild(optionsSymbol);
      rowContainer.appendChild(videoOptions);
    }
    // short container creator
    const contentShort = document.querySelector('.shorts-video');
    for (let i = 0; i < shorts.length; i++) {
      const shortContainer = document.createElement('div');
      shortContainer.classList.add('div-short')
      contentShort.appendChild(shortContainer);
    }
    // short generator
    const shortContainer = document.querySelectorAll('.div-short');
    for (let i = 0; i < shortContainer.length; i++) {
      // image elements
      const imgShortContainer = document.createElement('div');
      imgShortContainer.classList.add('short-img');
      const imgShort = document.createElement('img');
      imgShort.src = shorts[i]['shorts-img'];
      imgShort.classList.add('shorts');
      imgShortContainer.appendChild(imgShort);
      shortContainer[i].appendChild(imgShortContainer);

      // container text
      const textContainer = document.createElement('div');
      textContainer.classList.add('container-text');

      // tittle content
      const shortTittle = document.createElement('div');
      shortTittle.classList.add('short-tittle');
      const tittle = document.createElement('div');
      tittle.classList.add('tittle');
      const text = document.createElement('h3');
      text.textContent = shorts[i]['tittle-shorts'];
      tittle.appendChild(text);

      // views content
      const viewsShort = document.createElement('h6');
      viewsShort.textContent = `${shorts[i]['views'] + ' views'}`;

      // video options
      // const shortOptions = document.createElement('div');
      // shortOptions.classList.add('options-short');
      // const optionsShortSymbol = document.createElement('img');
      // optionsShortSymbol.src = shorts[i]['options'];
      // shortOptions.appendChild(optionsShortSymbol);

      shortTittle.appendChild(tittle);
      shortTittle.appendChild(viewsShort);
      textContainer.appendChild(shortTittle);
      // textContainer.appendChild(shortOptions);
      shortContainer[i].appendChild(textContainer);
    }

    // video generator 2
    const content2 = document.querySelector('.content2');
    for (let i = 0; i < videoBlock2.length; i++) {
      const videoContainer2 = document.createElement('div');
      videoContainer2.classList.add('divs2');
      content2.appendChild(videoContainer2);
    }    
  
    // element creator 2
    const contentVideo2 = document.querySelectorAll('.divs2');
    for(let i = 0; i < videoBlock2.length; i++){
      // image elements
      const imgContainer2 = document.createElement('div');
      imgContainer2.classList.add('video-img');
      const img2 = document.createElement('img');
      img2.src = videoBlock2[i]['video-img'];
      img2.classList.add('video');

      // video duration
      const videoDuration2 = document.createElement('div');
      videoDuration2.classList.add('duration');
      videoDuration2.textContent = videoBlock2[i]['video-duration'];
      imgContainer2.appendChild(img2);
      imgContainer2.appendChild(videoDuration2);
      contentVideo2[i].appendChild(imgContainer2);

      // text container
      const rowContainer2 = document.createElement('div');
      rowContainer2.classList.add('row');

      // canal logo elements
      const logoContainer2 = document.createElement('div');
      logoContainer2.classList.add('canal-logo');
      const imgLogo2 = document.createElement('img');
      imgLogo2.src = videoBlock2[i]['canal-logo'];
      imgLogo2.classList.add('logo');
      logoContainer2.appendChild(imgLogo2);
      rowContainer2.appendChild(logoContainer2);

      // tittle elements
      const textContainer2 = document.createElement('div');
      textContainer2.classList.add('text');
      const tittle2 = document.createElement('h3');
      tittle2.textContent = videoBlock2[i]['tittle-video'];

      // canal name
      const canalName2 = document.createElement('h5');
      canalName2.textContent = videoBlock2[i]['canal-name'];

      // views numbers
      const views2 = document.createElement('h6');
      views2.textContent = videoBlock2[i]['views'] + ' views';
      textContainer2.appendChild(tittle2);
      textContainer2.appendChild(canalName2);
      textContainer2.appendChild(views2);
      rowContainer2.appendChild(textContainer2);
      contentVideo2[i].appendChild(rowContainer2);

      // video options
      const videoOptions2 = document.createElement('div');
      videoOptions2.classList.add('options');
      const optionsSymbol2 = document.createElement('img');
      optionsSymbol2.src = videoBlock2[i]['options'];
      videoOptions2.appendChild(optionsSymbol2);
      rowContainer2.appendChild(videoOptions2);
    }
  });
