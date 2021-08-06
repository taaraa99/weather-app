import styled from 'styled-components';

/*export const WeatherInfoIcons = {
    sunset: "/react-weather-app/icons/temp.svg",
    sunrise: "/react-weather-app/icons/temp.svg",
    humidity: "/react-weather-app/icons/humidity.svg",
    wind: "/react-weather-app/icons/wind.svg",
    pressure: "/react-weather-app/icons/pressure.svg",
};
*/

export const WeatherInfoIcons = {
    sunset: "/icons/temp.svg",
    sunrise: "/icons/temp.svg",
    humidity: "/icons/humidity.svg",
    wind: "/icons/wind.svg",
    pressure: "/icons/pressure.svg",
};

/*export const WeatherIcons = {
    "01d" : "/my-weather-app/icons/sunny.svg",
    "01n" : "/my-weather-app/icons/night.svg",
    "02d" : "/my-weather-app/icons/day.svg",
    "02n" : "/my-weather-app/icons/cloudy-night.svg",
    "03d" : "/my-weather-app/icons/cloudy.svg",
    "03n" : "/my-weather-app/icons/cloudy.svg",
    "04d" : "/my-weather-app/icons/perfect-day.svg",
    "04n" : "/my-weather-app/icons/cloudy-night.svg",
    "09d" : "/my-weather-app/icons/rain.svg",
    "09n" : "/my-weather-app/icons/rain-night.svg",
    "10d" : "/my-weather-app/icons/rain.svg",
    "10n" : "/my-weather-app/icons/rain-night.svg",
    "11d" : "/my-weather-app/icons/storm.svg",
    "11n" : "/my-weather-app/icons/storm.svg",

};*/

export const WeatherIcons = {
    "01d" : "/icons/sunny.svg",
    "01n" : "/icons/night.svg",
    "02d" : "/icons/day.svg",
    "02n" : "/icons/cloudy-night.svg",
    "03d" : "/icons/cloudy.svg",
    "03n" : "/icons/cloudy.svg",
    "04d" : "/icons/perfect-day.svg",
    "04n" : "/icons/cloudy-night.svg",
    "09d" : "/icons/rain.svg",
    "09n" : "/icons/rain-night.svg",
    "10d" : "/icons/rain.svg",
    "10n" : "/icons/rain-night.svg",
    "11d" : "/icons/storm.svg",
    "11n" : "/icons/storm.svg",

};

const WeatherCondition = styled.div`
display: flex;
flex-direction: rox;
align-items: center;
width: 100%;
justify-content: space-between;
margin: 30px auto;
`;


const Condition = styled.span`
margin: 20px auto;
text-transform: capitalize;
font-size: 14px;
& span {
    font-size: 28px;
}
`;

const WeatherLogo = styled.img`
width: 100px;
height: 100px;
margin: 5px auto;
`;

const Location = styled.span`
margin: 15px auto;
text-transform: capitalize;
text-align: center;
font-size: 28px;
font-weight: bold;
padding-left: 100px;
`;

const WeatherInfoLabel = styled.div`
font-size: 14px;
font-weight: bold;
margin: 20px;
padding-left: 110px;
width: 90%;
margin: 20px 25px 10px;
`;

const WeatherInfoContainer = styled.div `
display: flex;
width: 90%;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
flex-wrap: wrap;
`;

const InfoContainer = styled.div`
display: flex;
margin: 5px 10px;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
`;

const InfoIcon = styled.img`
width: 36px;
height: 36px;

`;
const InfoLabel = styled.span`
display: flex;
flex-direction: column;
font-size: 14px;
margin: 15px;
& span {
    font-size: 12px;
    text-transform: capitalize;
}
`;

const WeatherInfoComponent = (props) => {
    const {name, value} = props;
    return (
        <InfoContainer>
            <InfoIcon src={WeatherInfoIcons[name]}/>
            <InfoLabel>
                {value}
                <span>{name}</span>
            </InfoLabel>
        </InfoContainer>
    );
};

const WeatherComponent =(props) => {
    const { weather } = props;
    const isDay = weather?.weather[0].icon?.includes('d')
    const getTime = (timeStamp) => {
        return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
    }
    return (
        <div>
            <WeatherCondition>
            <Condition>
                    <span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>
                    {`  |  ${weather?.weather[0].description}`}
                </Condition>
                <WeatherLogo src={WeatherIcons[weather?.weather[0].icon]}/>
            </WeatherCondition>
            <Location>{`${weather?.name}, ${weather?.sys?.country}`}</Location>
            <WeatherInfoLabel>Weather Info</WeatherInfoLabel>
            <WeatherInfoContainer>
            <WeatherInfoComponent name={isDay ? "sunset" : "sunrise"}
                                    value={`${getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}`}/>
                <WeatherInfoComponent name={"humidity"} value={weather?.main?.humidity}/>
                <WeatherInfoComponent name={"wind"} value={weather?.wind?.speed}/>
                <WeatherInfoComponent name={"pressure"} value={weather?.main?.pressure}/>
            </WeatherInfoContainer>
        </div>
    );
};

export default WeatherComponent;