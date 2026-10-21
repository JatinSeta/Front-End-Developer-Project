const search = document.getElementById("pnr_number");
const button = document.getElementById("search");
const result = document.getElementById("result");
const pnr_div = document.getElementById("pnr_div");
const train_details = document.getElementById("train_details");
button.addEventListener("click", async function () {
    if(search.value.length == 10){
        const url = `https://irctc-indian-railway-pnr-status.p.rapidapi.com/getPNRStatus/${search.value}`;
      
        const options = {
          method: "GET",
          headers: {
            "x-rapidapi-key": "c8314b4ad5mshdf4f612ccc495f5p1875f3jsn810d80e7bb0b",
            "x-rapidapi-host": "irctc-indian-railway-pnr-status.p.rapidapi.com",
          },
        };
        try {
          const response = await fetch(url, options);
          const result = await response.json();
     
          handelData(result);
        } catch (error) {
          handelError(error);
        }
    }else{
        const vaild_div = document.createElement('div');
        vaild_div.style.color = 'red';
        vaild_div.innerHTML = "Kindly Check PNR Number";
        result.appendChild(vaild_div)

    }
});
function handelData(data) {
    console.log(data)
    result.innerHTML = ""
   const main_div = document.createElement('div')
    main_div.style.border = "2px solid blue"
    main_div.setAttribute('id',"main_div")
  const pnr_div = document.createElement("div");
  const traindetiles_div = document.createElement("div");
  const journeydetiles_div = document.createElement("div");
  const ticketInfo_div = document.createElement("div");
  const pnr_title = document.createElement('h1')
  pnr_title.innerHTML = "PNR Numbers"
  const pnr_numbers = document.createElement("p");
  pnr_numbers.innerText = `PNR NUMBER : ${data.data.pnrNumber}`;
  const waitListType = document.createElement("p");
  waitListType.innerHTML = `Waiting : ${data.data.waitListType}`;
  pnr_div.appendChild(pnr_title);
  pnr_div.appendChild(pnr_numbers);
  pnr_div.appendChild(waitListType);
  const traindetiles_title = document.createElement('h1')
  traindetiles_title.innerHTML = "Train Detiles"
  const train_name = document.createElement("p");
  train_name.innerHTML = `Train Name : ${data.data.trainName}`;
  const train_number = document.createElement("p");
  train_number.innerHTML = `Train Number : ${data.data.trainNumber}`;
  const journey_class = document.createElement("p");
  journey_class.innerHTML = `Journey Class : ${data.data.journeyClass}`;
  const quota = document.createElement("p");
  quota.innerHTML = `Quota : ${data.data.quota}`;
  traindetiles_div.appendChild(traindetiles_title);
  traindetiles_div.appendChild(train_name);
  traindetiles_div.appendChild(train_number);
  traindetiles_div.appendChild(journey_class);
  traindetiles_div.appendChild(quota);
  const journeydetiles_title = document.createElement('h1')
  journeydetiles_title.innerHTML = "Journey Detiles"
  const sourceStation = document.createElement("p");
  sourceStation.innerHTML = `Starting Station : ${data.data.sourceStation}`;
  const boardingPoint = document.createElement("p");
  boardingPoint.innerHTML = `Boarding Station : ${data.data.boardingPoint}`;
  const reservationUpto = document.createElement("p");
  reservationUpto.innerHTML = `Reservation Station : ${data.data.reservationUpto}`;
  const destinationStation = document.createElement("p");
  destinationStation.innerHTML = `Train Destination Station : ${data.data.destinationStation}`;
  const distance = document.createElement("p");
  distance.innerHTML = `Distance : ${data.data.distance}KM`;
  const chartStatus = document.createElement("p");
  chartStatus.innerHTML = `ChartStatus : ${data.data.chartStatus}`;
  const dateOfJourney = document.createElement("p");
  dateOfJourney.innerHTML = `Departure Date : ${data.data.dateOfJourney}`;
  const arrivalDate = document.createElement("p");
  arrivalDate.innerHTML = `Arrival Date : ${data.data.arrivalDate}`;
  journeydetiles_div.appendChild(journeydetiles_title);
  journeydetiles_div.appendChild(sourceStation);
  journeydetiles_div.appendChild(boardingPoint);
  journeydetiles_div.appendChild(reservationUpto);
  journeydetiles_div.appendChild(destinationStation);
  journeydetiles_div.appendChild(chartStatus);
  journeydetiles_div.appendChild(distance);
  journeydetiles_div.appendChild(dateOfJourney);
  journeydetiles_div.appendChild(arrivalDate);
  const ticketInfo_title = document.createElement("h1");
  ticketInfo_title.innerHTML = "Ticket Info";
  const bookingDate = document.createElement("p");
  bookingDate.innerHTML = `Ticket Book Date : ${data.data.bookingDate}`;
  const bookingFare = document.createElement("p");
  bookingFare.innerHTML = `Booking Price : ${data.data.bookingFare}`;
  const ticketFare = document.createElement("p");
  ticketFare.innerHTML = `Ticket Price : ${data.data.ticketFare}`;
  
  ticketInfo_div.appendChild(ticketInfo_title);
  ticketInfo_div.appendChild(bookingDate);
  ticketInfo_div.appendChild(bookingFare);
  ticketInfo_div.appendChild(ticketFare);
  main_div.appendChild(pnr_div);
  main_div.appendChild(traindetiles_div);
  main_div.appendChild(journeydetiles_div);
  main_div.appendChild(journeydetiles_div);
  main_div.appendChild(ticketInfo_div);
  result.appendChild(main_div)
}
function handelError(error){
    console.log("handel error" ,error)
    const error_div = document.createElement('div')
    error_div.setAttribute('id',"error_div")
    const error_messge = document.createElement('p')
    error_messge.innerHTML = error.message
    error_div.appendChild(error_messge)
    result.appendChild(error_div)

}
