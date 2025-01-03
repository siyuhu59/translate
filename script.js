const content_data = [
    // translate to English 아카이브.. 키리누키.. 매번 기다리시나요?
    ["아카이브.. 키리누키.. 매번 기다리시나요?", "Archive.. Kirinuki.. Do you wait every time?"],
    // 청해가 안되서 아카이브 데워먹고, 키리누키만 찾아다니던 일상. 실시간 자막을 통해 라이브 시청기회!
    ["청해가 안되서 아카이브 데워먹고, 키리누키만 찾아다니던 일상. 실시간 자막을 통해 라이브 시청기회!", "Daily life of eating up the archive because it's not clear, and looking for Kirinuki. Live viewing opportunity through real-time subtitles!"],
    ["시작하기", "Get Started"],

    // 들어가도 들리지 않아 얼굴만 쳐다보던 나날들
    ["들어가도 들리지 않아 얼굴만 쳐다보던 나날들", "Days when I only looked at the face because I couldn't hear even if I went in"],
    // 이제는 말소리까지 놓치지 마세요. 언어 장벽 때문에 버튜버의 생생한 웃음 포인트를 놓치고 있었다면, 지금부터는 자막으로 제대로 즐겨보세요!
    ["이제는 말소리까지 놓치지 마세요. 언어 장벽 때문에 버튜버의 생생한 웃음 포인트를 놓치고 있었다면, 지금부터는 자막으로 제대로 즐겨보세요!", "Don't miss the sound now. If you missed the vivid laughing points of the YouTuber due to the language barrier, enjoy it properly with subtitles from now on!"],
    
    
    // 버튜버 내 사용되는 은어, 의성어도 완벽 번역
    ["버튜버 내 사용되는 은어, 의성어도 완벽 번역", "Perfect translation of slang and onomatopoeia used in YouTuber"],
    // 놓치더라도 자막 다시보기로 문맥 이해
    ["놓치더라도 자막 다시보기로 문맥 이해", "Even if you miss it, understand the context with subtitle replay"],


    // 기능 소개
    ["기능 소개", "Feature Introduction"],
    // 실시간 자막
    ["실시간 자막", "Real-time Subtitles"],
    // 라이브 방송 중에도 자막을 통해 영상을 이해할 수 있습니다.
    ["라이브 방송 중에도 자막을 통해 영상을 이해할 수 있습니다.", "You can understand the video through subtitles even during live broadcasts."],

    // 자막 다시보기
    ["자막 다시보기", "Subtitle Replay"],

    // 자막을 통해 영상을 이해하지 못했을 때, 다시보기를 통해 문맥을 이해할 수 있습니다.
    ["자막을 통해 영상을 이해하지 못했을 때, 다시보기를 통해 문맥을 이해할 수 있습니다.", "When you don't understand the video through subtitles, you can understand the context through replay."],    
    // 라이브도 무리없이! 실시간 자막서비스 구독하기
    ["라이브도 무리없이! 실시간 자막서비스 구독하기", "Even live! Subscribe to real-time subtitle service"],

    // 5,900원/월에 이용하기
    ["5,900원/월에 이용하기", "Use for 4$ per month"],

    // 실시간 자막 서비스를 통해 라이브 방송을 더욱 즐겁게 즐기세요!
    ["실시간 자막 서비스를 통해 라이브 방송을 더욱 즐겁게 즐기세요!", "Enjoy live broadcasts more with real-time subtitle service!"],


    // 현재 서비스는 준비중입니다. 조금만 기다려주세요! 소식을 받으시려면, 아래 이메일을 입력해주세요.
    ["현재 서비스는 준비중입니다. 조금만 기다려주세요! 소식을 받으시려면, 아래 이메일을 입력해주세요.", "The service is currently under preparation. Please wait a little! To receive news, please enter your email below."],

    // 이메일을 입력해주세요
    ["이메일을 입력해주세요", "Please enter your email"],

    // 구독하기
    ["구독하기", "Subscribe"],

    // 소식을 받으실 이메일을 등록해주셔서 감사합니다. 소식을 기다려주세요!
    ["소식을 받으실 이메일을 등록해주셔서 감사합니다. 소식을 기다려주세요!", "Thank you for registering your email to receive news. Please wait for the news!"],

]

async function getIp(callback) {
    const response = await fetch("https://144.24.73.103/ip")
    const data = await response.json();

    callback(data.ip);
}

async function checkIfUSIP() {
    getIp(async (ip)=>{
        const response = await fetch(`https://ipinfo.io/${ip}?token=5b7aba1032e9fa`); // 무료 토큰 없이 기본 테스트 가능
        const data = await response.json();
    
        if (data.country === 'US') {
            console.log('This is a US IP.');
            localStorage.setItem('isUS', 'true');
            translateContent();
        } else {
            console.log(`This is not a US IP. Country: ${data.country}`);
        }
    })
}

function translateContent() {
    const elements = document.querySelectorAll('.text');
    elements.forEach((element, index) => {
        element.textContent = content_data[index][1];
    });
}

checkIfUSIP();
// translateContent();

