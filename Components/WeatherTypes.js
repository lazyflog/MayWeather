import React from 'react';

export function getWeatherType() {
    return {
        Clear: {
            iconName: 'white-balance-sunny',
            gradient: ['#2980B9', '#6DD5FA'],
            title: '맑음',
            subTitle: '산책하기 좋은 날씨입니다.',
        },
        Thunderstorm: {
            iconName: 'weather-lightning-rainy',
            gradient: ['#0F2027', '#203A43', '#FFFFFF'],
            title: '뇌우',
            subTitle: '집이 최고라고 단언합니다.',
        },
        Drizzle: {
            iconName: 'weather-rainy',
            gradient: ['#000C40', '#F0F2F0'],
            title: '이슬비',
            subTitle: '나갈 때 우산 챙겨가세요!',
        },
        Rain: {
            iconName: 'weather-pouring',
            gradient: ['#000046', '#1CB5E0'],
            title: '비',
            subTitle: '신발젖음 주의!',
        },
        Snow: {
            iconName: 'weather-snowy',
            gradient: ['#C9D6FF', '#E2E2E2'],
            title: '눈',
            subTitle: '창밖을 보라 흰눈이 내린다~',
        },
        Clouds: {
            iconName: 'weather-partlycloudy',
            gradient: ['#8e9eab', '#eef2f3'],
            title: '구름낌',
            subTitle: '조만간 비소식이 있으려나요?',
        },
        Mist: {
            iconName: 'weather-cloudy',
            gradient: ['#2c3e50', '#bdc3c7'],
            title: '안개',
            subTitle: '오늘은 조금 흐려요!',
        },
        Smoke: {
            iconName: 'weather-fog',
            gradient: ['#29323c', '#485563'],
            title: '스모크',
            subTitle: '앞이 안보여요...',
        },
        Haze: {
            iconName: 'weather-partlycloudy',
            gradient: ['#8e9eab', '#eef2f3'],
            title: '옅은 안개',
            subTitle: '운전 조심하세요!',
        },
        Dust: {
            iconName: 'weather-fog',
            gradient: ['#1e130c', '#9a8478'],
            title: '모래먼지',
            subTitle: '아 맞다 마스크!',
        },
        Fog: {
            iconName: 'weather-fog',
            gradient: ['#304352', '#d7d2cc'],
            title: '짙은 안개',
            subTitle: '운전은 삼가하세요!',
        },
        Sand: {
            iconName: 'weather-fog',
            gradient: ['#636363', '#a2ab58'],
            title: '모래바람',
            subTitle: '마스크는 생활 필수품입니다.',
        },
        Dust: {
            iconName: 'weather-fog',
            gradient: ['#3C3B3F', '#605C3C'],
            title: '먼지',
            subTitle: '오늘도 마스크 없이는...',
        },
        Ash: {
            iconName: 'weather-fog',
            gradient: ['#3f4c6b', '#606c88'],
            title: '화산재',
            subTitle: 'volcanic ash... ',
        },
        Squall: {
            iconName: 'weather-windy',
            gradient: ['#232526', '#414345'],
            title: '스콜',
            subTitle: '겉옷 챙겨가세요!',
        },
        Tornado: {
            iconName: 'weather-hurricane',
            gradient: ['black', 'gray'],
            title: '토네이도',
            subTitle: '안전한 곳으로 대피하세요!!',
        },
    };
}