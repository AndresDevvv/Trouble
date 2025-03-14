document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = document.getElementById('audio-player');
    const lyricsContainer = document.getElementById('lyrics-container');
    const playBtn = document.getElementById('play-btn');
    const playIcon = document.getElementById('play-icon');
    const pauseIcon = document.getElementById('pause-icon');
    
    let isPlaying = false;
    
    setTimeout(() => {
        lyricsContainer.style.overflowY = 'scroll';
        lyricsContainer.style.overflowY = 'auto';
    }, 500);
    
    lyricsContainer.addEventListener('touchstart', function(e) {
        e.stopPropagation();
    });
    
    lyricsContainer.addEventListener('wheel', function(e) {
        e.stopPropagation();
    });
    
    playBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        
        if (isPlaying) {
            audioPlayer.pause();
            playIcon.style.display = 'block';
            pauseIcon.style.display = 'none';
        } else {
            audioPlayer.play().catch(error => {
                console.error('Playback failed:', error);
            });
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'block';
        }
        
        isPlaying = !isPlaying;
    });
    
    const lyricsData = {
    "data": [
        {
            "id": "1122782284",
            "type": "syllable-lyrics",
            "attributes": {
                "ttml": "<tt xmlns=\"http://www.w3.org/ns/ttml\" xmlns:itunes=\"http://music.apple.com/lyric-ttml-internal\" xmlns:ttm=\"http://www.w3.org/ns/ttml#metadata\" itunes:timing=\"Word\" xml:lang=\"en\"><head><metadata><ttm:agent type=\"person\" xml:id=\"v1\"/><iTunesMetadata xmlns=\"http://music.apple.com/lyric-ttml-internal\" leadingSilence=\"0.120\"><songwriters><songwriter>Chris Martin</songwriter><songwriter>Guy Berryman</songwriter><songwriter>Jonny Buckland</songwriter><songwriter>Will Champion</songwriter></songwriters></iTunesMetadata></metadata></head><body dur=\"4:30.731\"><div begin=\"29.420\" end=\"49.915\" itunes:songPart=\"Verse\"><p begin=\"29.420\" end=\"32.815\" itunes:key=\"L1\" ttm:agent=\"v1\"><span begin=\"29.420\" end=\"30.228\">Oh</span> <span begin=\"30.228\" end=\"31.394\">no,</span> <span begin=\"31.394\" end=\"31.763\">I</span> <span begin=\"31.763\" end=\"32.815\">see</span></p><p begin=\"34.774\" end=\"39.196\" itunes:key=\"L2\" ttm:agent=\"v1\"><span begin=\"34.774\" end=\"34.892\">A</span> <span begin=\"34.892\" end=\"35.939\">spider</span> <span begin=\"35.939\" end=\"36.635\">web</span> <span begin=\"36.635\" end=\"36.855\">is</span> <span begin=\"36.855\" end=\"37.760\">tangled</span> <span begin=\"37.760\" end=\"38.152\">up</span> <span begin=\"38.152\" end=\"38.587\">with</span> <span begin=\"38.587\" end=\"39.196\">me</span></p><p begin=\"39.506\" end=\"43.282\" itunes:key=\"L3\" ttm:agent=\"v1\"><span begin=\"39.506\" end=\"40.171\">And</span> <span begin=\"40.171\" end=\"40.415\">I</span> <span begin=\"40.415\" end=\"41.575\">lost</span> <span begin=\"41.575\" end=\"41.700\">my</span> <span begin=\"41.700\" end=\"43.282\">head</span></p><p begin=\"45.038\" end=\"49.915\" itunes:key=\"L4\" ttm:agent=\"v1\"><span begin=\"45.038\" end=\"45.459\">And</span> <span begin=\"45.459\" end=\"45.959\">thought</span> <span begin=\"45.959\" end=\"46.322\">of</span> <span begin=\"46.322\" end=\"46.911\">all</span> <span begin=\"46.911\" end=\"47.024\">the</span> <span begin=\"47.024\" end=\"47.934\">stupid</span> <span begin=\"47.934\" end=\"48.339\">things</span> <span begin=\"48.339\" end=\"48.821\">I'd</span> <span begin=\"48.821\" end=\"49.915\">said</span></p></div><div begin=\"1:07.162\" end=\"1:27.601\" itunes:songPart=\"Verse\"><p begin=\"1:07.162\" end=\"1:10.456\" itunes:key=\"L5\" ttm:agent=\"v1\"><span begin=\"1:07.162\" end=\"1:07.946\">Oh</span> <span begin=\"1:07.946\" end=\"1:09.077\">no,</span> <span begin=\"1:09.077\" end=\"1:09.719\">what's</span> <span begin=\"1:09.719\" end=\"1:10.456\">this?</span></p><p begin=\"1:12.544\" end=\"1:16.566\" itunes:key=\"L6\" ttm:agent=\"v1\"><span begin=\"1:12.544\" end=\"1:12.644\">A</span> <span begin=\"1:12.644\" end=\"1:13.673\">spider</span> <span begin=\"1:13.673\" end=\"1:14.143\">web</span> <span begin=\"1:14.143\" end=\"1:14.346\">and</span> <span begin=\"1:14.346\" end=\"1:14.691\">I'm</span> <span begin=\"1:14.691\" end=\"1:15.220\">caught</span> <span begin=\"1:15.220\" end=\"1:15.399\">in</span> <span begin=\"1:15.399\" end=\"1:15.631\">the</span> <span begin=\"1:15.631\" end=\"1:16.566\">middle</span></p><p begin=\"1:17.376\" end=\"1:20.687\" itunes:key=\"L7\" ttm:agent=\"v1\"><span begin=\"1:17.376\" end=\"1:17.875\">So</span> <span begin=\"1:17.875\" end=\"1:18.273\">I</span> <span begin=\"1:18.273\" end=\"1:19.368\">turn</span> <span begin=\"1:19.368\" end=\"1:19.802\">to</span> <span begin=\"1:19.802\" end=\"1:20.687\">run</span></p><p begin=\"1:22.800\" end=\"1:27.601\" itunes:key=\"L8\" ttm:agent=\"v1\"><span begin=\"1:22.800\" end=\"1:23.061\">And</span> <span begin=\"1:23.061\" end=\"1:23.644\">thought</span> <span begin=\"1:23.644\" end=\"1:23.912\">of</span> <span begin=\"1:23.912\" end=\"1:24.625\">all</span> <span begin=\"1:24.625\" end=\"1:24.725\">the</span> <span begin=\"1:24.725\" end=\"1:25.786\">stupid</span> <span begin=\"1:25.786\" end=\"1:26.238\">things</span> <span begin=\"1:26.238\" end=\"1:26.862\">I'd</span> <span begin=\"1:26.862\" end=\"1:27.601\">done</span></p></div><div begin=\"1:29.997\" end=\"1:55.513\" itunes:songPart=\"Chorus\"><p begin=\"1:29.997\" end=\"1:34.716\" itunes:key=\"L9\" ttm:agent=\"v1\"><span begin=\"1:29.997\" end=\"1:30.097\">And</span> <span begin=\"1:30.097\" end=\"1:31.477\">I,</span> <span begin=\"1:31.477\" end=\"1:31.579\">I</span> <span begin=\"1:31.579\" end=\"1:32.054\">never</span> <span begin=\"1:32.054\" end=\"1:32.364\">meant</span> <span begin=\"1:32.364\" end=\"1:32.643\">to</span> <span begin=\"1:32.643\" end=\"1:33.322\">cause</span> <span begin=\"1:33.322\" end=\"1:33.500\">you</span> <span begin=\"1:33.500\" end=\"1:34.716\">trouble</span></p><p begin=\"1:36.811\" end=\"1:40.942\" itunes:key=\"L10\" ttm:agent=\"v1\"><span begin=\"1:36.811\" end=\"1:36.911\">And</span> <span begin=\"1:36.911\" end=\"1:38.321\">I,</span> <span begin=\"1:38.321\" end=\"1:38.421\">I</span> <span begin=\"1:38.421\" end=\"1:38.857\">never</span> <span begin=\"1:38.857\" end=\"1:39.172\">meant</span> <span begin=\"1:39.172\" end=\"1:39.487\">to</span> <span begin=\"1:39.487\" end=\"1:39.785\">do</span> <span begin=\"1:39.785\" end=\"1:39.945\">you</span> <span begin=\"1:39.945\" end=\"1:40.942\">wrong</span></p><p begin=\"1:43.691\" end=\"1:48.461\" itunes:key=\"L11\" ttm:agent=\"v1\"><span begin=\"1:43.691\" end=\"1:43.862\">And</span> <span begin=\"1:43.862\" end=\"1:45.099\">I,</span> <span begin=\"1:45.099\" end=\"1:45.206\">well,</span> <span begin=\"1:45.206\" end=\"1:45.441\">if</span> <span begin=\"1:45.441\" end=\"1:45.782\">I</span> <span begin=\"1:45.782\" end=\"1:46.046\">ever</span> <span begin=\"1:46.046\" end=\"1:46.974\">caused</span> <span begin=\"1:46.974\" end=\"1:47.123\">you</span> <span begin=\"1:47.123\" end=\"1:48.461\">trouble</span></p><p begin=\"1:50.523\" end=\"1:55.513\" itunes:key=\"L12\" ttm:agent=\"v1\"><span begin=\"1:50.523\" end=\"1:50.897\">And</span> <span begin=\"1:50.897\" end=\"1:51.807\">oh,</span> <span begin=\"1:51.807\" end=\"1:52.057\">no,</span> <span begin=\"1:52.057\" end=\"1:52.259\">I</span> <span begin=\"1:52.259\" end=\"1:52.521\">never</span> <span begin=\"1:52.521\" end=\"1:52.866\">meant</span> <span begin=\"1:52.866\" end=\"1:53.128\">to</span> <span begin=\"1:53.128\" end=\"1:53.776\">do</span> <span begin=\"1:53.776\" end=\"1:54.008\">you</span> <span begin=\"1:54.008\" end=\"1:55.513\">harm</span></p></div><div begin=\"2:12.408\" end=\"2:32.171\" itunes:songPart=\"Verse\"><p begin=\"2:12.408\" end=\"2:15.765\" itunes:key=\"L13\" ttm:agent=\"v1\"><span begin=\"2:12.408\" end=\"2:13.186\">Oh,</span> <span begin=\"2:13.186\" end=\"2:14.305\">no,</span> <span begin=\"2:14.305\" end=\"2:14.656\">I</span> <span begin=\"2:14.656\" end=\"2:15.765\">see</span></p><p begin=\"2:17.704\" end=\"2:21.908\" itunes:key=\"L14\" ttm:agent=\"v1\"><span begin=\"2:17.704\" end=\"2:17.840\">A</span> <span begin=\"2:17.840\" end=\"2:18.905\">spider</span> <span begin=\"2:18.905\" end=\"2:19.357\">web</span> <span begin=\"2:19.357\" end=\"2:19.589\">and</span> <span begin=\"2:19.589\" end=\"2:20.005\">it's</span> <span begin=\"2:20.005\" end=\"2:20.458\">me</span> <span begin=\"2:20.458\" end=\"2:20.654\">in</span> <span begin=\"2:20.654\" end=\"2:20.898\">the</span> <span begin=\"2:20.898\" end=\"2:21.908\">middle</span></p><p begin=\"2:22.596\" end=\"2:26.145\" itunes:key=\"L15\" ttm:agent=\"v1\"><span begin=\"2:22.596\" end=\"2:23.136\">So</span> <span begin=\"2:23.136\" end=\"2:23.559\">I</span> <span begin=\"2:23.559\" end=\"2:24.671\">twist</span> <span begin=\"2:24.671\" end=\"2:24.951\">and</span> <span begin=\"2:24.951\" end=\"2:26.145\">turn</span></p><p begin=\"2:27.970\" end=\"2:32.171\" itunes:key=\"L16\" ttm:agent=\"v1\"><span begin=\"2:27.970\" end=\"2:28.409\">But</span> <span begin=\"2:28.409\" end=\"2:28.873\">here</span> <span begin=\"2:28.873\" end=\"2:29.296\">am</span> <span begin=\"2:29.296\" end=\"2:29.766\">I</span> <span begin=\"2:29.766\" end=\"2:30.141\">in</span> <span begin=\"2:30.141\" end=\"2:30.807\">my</span> <span begin=\"2:30.807\" end=\"2:31.253\">little</span> <span begin=\"2:31.253\" end=\"2:32.171\">bubble</span></p></div><div begin=\"2:34.449\" end=\"3:00.190\" itunes:songPart=\"Chorus\"><p begin=\"2:34.449\" end=\"2:40.028\" itunes:key=\"L17\" ttm:agent=\"v1\"><span begin=\"2:34.449\" end=\"2:35.049\">Singing</span> <span begin=\"2:35.049\" end=\"2:35.483\">out</span> <span begin=\"2:35.483\" end=\"2:36.364\">I,</span> <span begin=\"2:36.364\" end=\"2:36.840\">I</span> <span begin=\"2:36.840\" end=\"2:37.292\">never</span> <span begin=\"2:37.292\" end=\"2:37.631\">meant</span> <span begin=\"2:37.631\" end=\"2:37.899\">to</span> <span begin=\"2:37.899\" end=\"2:38.553\">cause</span> <span begin=\"2:38.553\" end=\"2:38.726\">you</span> <span begin=\"2:38.726\" end=\"2:40.028\">trouble</span></p><p begin=\"2:42.053\" end=\"2:46.303\" itunes:key=\"L18\" ttm:agent=\"v1\"><span begin=\"2:42.053\" end=\"2:42.171\">And</span> <span begin=\"2:42.171\" end=\"2:43.539\">I,</span> <span begin=\"2:43.539\" end=\"2:43.639\">I</span> <span begin=\"2:43.639\" end=\"2:44.069\">never</span> <span begin=\"2:44.069\" end=\"2:44.491\">meant</span> <span begin=\"2:44.491\" end=\"2:44.705\">to</span> <span begin=\"2:44.705\" end=\"2:45.104\">do</span> <span begin=\"2:45.104\" end=\"2:45.330\">you</span> <span begin=\"2:45.330\" end=\"2:46.303\">wrong</span></p><p begin=\"2:48.882\" end=\"2:53.684\" itunes:key=\"L19\" ttm:agent=\"v1\"><span begin=\"2:48.882\" end=\"2:48.982\">And</span> <span begin=\"2:48.982\" end=\"2:50.220\">I,</span> <span begin=\"2:50.220\" end=\"2:50.464\">well,</span> <span begin=\"2:50.464\" end=\"2:50.696\">if</span> <span begin=\"2:50.696\" end=\"2:50.898\">I</span> <span begin=\"2:50.898\" end=\"2:51.290\">ever</span> <span begin=\"2:51.290\" end=\"2:52.201\">caused</span> <span begin=\"2:52.201\" end=\"2:52.367\">you</span> <span begin=\"2:52.367\" end=\"2:53.684\">trouble</span></p><p begin=\"2:55.773\" end=\"3:00.190\" itunes:key=\"L20\" ttm:agent=\"v1\"><span begin=\"2:55.773\" end=\"2:56.064\">And</span> <span begin=\"2:56.064\" end=\"2:56.757\">oh,</span> <span begin=\"2:56.757\" end=\"2:57.216\">no,</span> <span begin=\"2:57.216\" end=\"2:57.365\">I</span> <span begin=\"2:57.365\" end=\"2:57.803\">never</span> <span begin=\"2:57.803\" end=\"2:58.251\">meant</span> <span begin=\"2:58.251\" end=\"2:58.464\">to</span> <span begin=\"2:58.464\" end=\"2:58.869\">do</span> <span begin=\"2:58.869\" end=\"2:59.264\">you</span> <span begin=\"2:59.264\" end=\"3:00.190\">harm</span></p></div><div begin=\"3:31.542\" end=\"3:51.972\" itunes:songPart=\"Outro\"><p begin=\"3:31.542\" end=\"3:37.617\" itunes:key=\"L21\" ttm:agent=\"v1\"><span begin=\"3:31.542\" end=\"3:32.166\">They</span> <span begin=\"3:32.166\" end=\"3:33.480\">spun</span> <span begin=\"3:33.480\" end=\"3:33.718\">a</span> <span begin=\"3:33.718\" end=\"3:35.634\">web</span> <span begin=\"3:35.634\" end=\"3:36.961\">for</span> <span begin=\"3:36.961\" end=\"3:37.617\">me</span></p><p begin=\"3:38.486\" end=\"3:44.364\" itunes:key=\"L22\" ttm:agent=\"v1\"><span begin=\"3:38.486\" end=\"3:38.991\">They</span> <span begin=\"3:38.991\" end=\"3:40.306\">spun</span> <span begin=\"3:40.306\" end=\"3:40.609\">a</span> <span begin=\"3:40.609\" end=\"3:42.328\">web</span> <span begin=\"3:42.328\" end=\"3:43.804\">for</span> <span begin=\"3:43.804\" end=\"3:44.364\">me</span></p><p begin=\"3:45.218\" end=\"3:51.972\" itunes:key=\"L23\" ttm:agent=\"v1\"><span begin=\"3:45.218\" end=\"3:45.842\">They</span> <span begin=\"3:45.842\" end=\"3:47.151\">spun</span> <span begin=\"3:47.151\" end=\"3:47.442\">a</span> <span begin=\"3:47.442\" end=\"3:49.150\">web</span> <span begin=\"3:49.150\" end=\"3:50.637\">for</span> <span begin=\"3:50.637\" end=\"3:51.972\">me</span></p></div></body></tt>",
                "playParams": {
                    "id": "AP_1122782284",
                    "kind": "lyric",
                    "catalogId": "1122782284",
                    "displayType": 3
                }
            }
        }
    ]
};
    
    let lyrics = [];
    const parser = new DOMParser();
    const ttmlDoc = parser.parseFromString(
        lyricsData.data[0].attributes.ttml,
        "text/xml"
    );
    
    function parseTime(timeStr) {
        if (!timeStr) return 0;
        
        if (timeStr.includes(':')) {
            const [min, sec] = timeStr.split(':');
            return parseInt(min) * 60 + parseFloat(sec);
        }
        
        return parseFloat(timeStr);
    }
    
    const divs = ttmlDoc.querySelectorAll('div');
    divs.forEach(div => {
        const songPart = div.getAttribute('itunes:songPart');
        
        div.querySelectorAll('p').forEach(paragraph => {
            const lineBegin = parseTime(paragraph.getAttribute('begin'));
            const lineEnd = parseTime(paragraph.getAttribute('end'));
            const lineKey = paragraph.getAttribute('itunes:key');
            
            let words = [];
            paragraph.querySelectorAll('span').forEach(span => {
                words.push({
                    begin: parseTime(span.getAttribute('begin')),
                    end: parseTime(span.getAttribute('end')),
                    text: span.textContent
                });
            });
            
            lyrics.push({
                songPart: songPart,
                key: lineKey,
                begin: lineBegin,
                end: lineEnd,
                words: words
            });
        });
    });
    
    function renderLyrics() {
        lyricsContainer.innerHTML = '';
        
        let lastSongPart = null;
        
        lyrics.forEach((line, index) => {
            const lineDiv = document.createElement('div');
            lineDiv.classList.add('lyrics-line');
            lineDiv.dataset.begin = line.begin;
            lineDiv.dataset.end = line.end;
            lineDiv.dataset.index = index;
            
            if (line.songPart && line.songPart !== lastSongPart) {
                lineDiv.dataset.part = line.songPart;
                lastSongPart = line.songPart;
            }
            
            line.words.forEach(word => {
                const wordSpan = document.createElement('span');
                wordSpan.classList.add('lyrics-word');
                wordSpan.dataset.begin = word.begin;
                wordSpan.dataset.end = word.end;
                wordSpan.textContent = word.text;
                
                lineDiv.appendChild(wordSpan);
                
                if (word !== line.words[line.words.length - 1]) {
                    lineDiv.appendChild(document.createTextNode(' '));
                }
            });
            
            lyricsContainer.appendChild(lineDiv);
        });
    }
    
    audioPlayer.addEventListener('canplaythrough', function() {
        audioPlayer.play().then(() => {
            isPlaying = true;
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'block';
        }).catch(error => {
            console.error('Autoplay failed:', error);
            const playOverlay = document.createElement('div');
            playOverlay.classList.add('play-overlay');
            playOverlay.innerHTML = '<p><i class="fas fa-play-circle"></i> Tap to Play</p>';
            document.body.appendChild(playOverlay);
            
            playOverlay.addEventListener('click', function() {
                audioPlayer.play().then(() => {
                    isPlaying = true;
                    playIcon.style.display = 'none';
                    pauseIcon.style.display = 'block';
                }).catch(console.error);
                playOverlay.remove();
            });
        });
    });
    
    function updateLyrics(currentTime) {
        document.querySelectorAll('.lyrics-line.active, .lyrics-word.active, .lyrics-line.prev-line, .lyrics-line.next-line')
               .forEach(el => {
                   el.classList.remove('active', 'prev-line', 'next-line');
                   if (el.classList.contains('lyrics-word')) {
                       el.style.transition = '';
                   }
               });
        
        let activeLine = null;
        let activeLineIndex = -1;
        for (let i = 0; i < lyrics.length; i++) {
            if (currentTime >= lyrics[i].begin && currentTime <= lyrics[i].end) {
                activeLine = document.querySelector(`.lyrics-line[data-index="${i}"]`);
                activeLineIndex = i;
                break;
            }
        }
        
        if (activeLine) {
            activeLine.classList.add('active');
            
            const containerHeight = lyricsContainer.clientHeight;
            const lineTop = activeLine.offsetTop;
            const lineHeight = activeLine.offsetHeight;
            
            const targetScrollPosition = lineTop - (containerHeight / 2) + (lineHeight / 2);
            
            lyricsContainer.scrollTo({
                top: Math.max(0, targetScrollPosition),
                behavior: 'smooth'
            });
            
            const words = activeLine.querySelectorAll('.lyrics-word');
            words.forEach(word => {
                const begin = parseFloat(word.dataset.begin);
                const end = parseFloat(word.dataset.end);
                
                if (currentTime >= begin && currentTime <= end) {
                    const wordDuration = end - begin;
                    const animDuration = Math.min(0.8, Math.max(0.2, wordDuration * 0.8));
                    word.style.transition = `all ${animDuration}s cubic-bezier(0.19, 1, 0.22, 1)`;
                    
                    word.classList.add('active');
                }
            });
            
            if (activeLineIndex > 0) {
                const prevLine = document.querySelector(`.lyrics-line[data-index="${activeLineIndex - 1}"]`);
                if (prevLine) {
                    prevLine.classList.add('prev-line');
                }
            }
            
            if (activeLineIndex < lyrics.length - 1) {
                const nextLine = document.querySelector(`.lyrics-line[data-index="${activeLineIndex + 1}"]`);
                if (nextLine) {
                    nextLine.classList.add('next-line');
                }
            }
        }
    }
     
    audioPlayer.addEventListener('timeupdate', () => {
        const currentTime = audioPlayer.currentTime;
        const duration = audioPlayer.duration;
        
        if (!isNaN(duration)) {
            updateLyrics(currentTime);
        }
    });
    
    audioPlayer.addEventListener('ended', () => {
        audioPlayer.currentTime = 0;
        audioPlayer.play().catch(console.error);
    });
    
    audioPlayer.addEventListener('loadedmetadata', () => {
        renderLyrics();
    });
    
    renderLyrics();
    
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space') {
            e.preventDefault();
            playBtn.click();
        }
    });
});
