import React from 'react'
const Apex = ()=>{
	const date = new Date()
  const hours = date.getHours()
  let timeOfDay

  const styles = {
  	fontSize: 30,
  	textAlign: 'center'
  }
  switch(hours){
    case 1:
    styles.color = "#04756F"
    break;
    case 3:
    styles.color = "#2E0927"
    break;
    case 5:
    styles.color = "#D90000"
    break;
    case 7:
    styles.color = "#269926"
    break;
    case 9:
    styles.color = "#FFB273"
    break;
    case 11:
    styles.color = "#5A016D"
    break;
    case 13:
    styles.color = "#2C17B1"
    break;
    case 15:
    styles.color = "#5A016D"
    break;
    case 17:
    styles.color = "#35C0CD"
    break;
    case 20:
    styles.color = "#FFE273"
    break;
    case 23:
    styles.color = "#FF9A40"
    break;
  }
  if (hours < 12) {
    timeOfDay = "morning"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
  } else {
    timeOfDay = "night"
  }
  
  return (
    <h1 style={styles}>Good {timeOfDay}!</h1>
  )
}
export default Apex
