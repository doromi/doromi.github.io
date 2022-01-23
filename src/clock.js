const clock_Time = document.getElementById("clock");
// 실시간 시계
// 로컬 스토리지를 사용한 로그인
// 로컬 스토리지를 사용한 투두리스트
// 랜덤 배경 이미지
// 날씨와 위치 (geolocation)

function GetClock()
{
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minite = String(date.getMinutes()).padStart(2,"0");
    const second = String(date.getSeconds()).padStart(2,"0");
    clock_Time.innerHTML = `Time = ${hours}:${minite}:${second}`;
}
GetClock();
setInterval(GetClock,1000);
