import styled from 'styled-components';

/*const WeatherLogo = styled.img`
width: 140px;
height: 140px;
margin: 40px auto;
text-align: center;
padding: 10px;
`*/

const WeatherLogo = styled.img`
  width: 140px;
  height: 140px;
  margin: 40px auto;
  position: absoloute;
  right: 100px;
  padding-left: 140px;
  
`;

const ChooseCityLabel = styled.span`
  color: black;
  margin: 10px auto;
  font-size: 18px;
  font-weight: bold;
  padding-left: 140px;
`;

const SearchBox = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 40px;
  border: black solid 1px;
  border-radius: 2px;

  & input {
    padding: 10px;
    font-size: 14px;
    border: none;
    outline: none;
    font-family: Montserrat;
    font-weight: bold;
  }
  & button {
    background-color: black;
    font-size: 14px;
    padding: 0 40px;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
    font-family: Montserrat;
    font-weight: bold;
    box-shadow: 1px 0 0 1px black;
    border-radius: 2px;
  }
`;

const CityComponent =(props) => {
    const { updateCity, fetchWeather } = props;
    return (
        <div>
            <WeatherLogo src="/icons/perfect-day.svg" />
            <ChooseCityLabel>Enter your city</ChooseCityLabel>
            <SearchBox onSubmit={fetchWeather}>
                <input placeholder="City" onChange={(e) => updateCity(e.target.value)}/>
                <button type="submit">Search</button>
            </SearchBox>
        </div>
    );
}; 

export default CityComponent;