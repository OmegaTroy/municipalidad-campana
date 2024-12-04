const ApiKey ='7f0111c6b476a2441405411891e683bf'

export const climaCampana = async(city: string)=>{
  try {
    const dataUrl = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}`)
    const data = await dataUrl.json()
    const {weather,main,sys,name} = data
    let temperature = Math.floor(main.temp - 272.15)
    let weatherTemp = weather[0].main
    let country = sys.country
    return {temperature,weatherTemp,name,country}
  } catch (error) {
    throw new Error("error of the clima");
  }
}

