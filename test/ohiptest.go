package main

import (
	"context"
	"fmt"
	"os"
	"time"

	rsvApi "github.com/applyinnovations/ohip-sdk/rsv"
)

func getEnvOrDie(key string) string {
	value := os.Getenv(key)
	if value == "" {
		panic(fmt.Sprintf("Environment variable %s is required", key))
	}
	
	return value
}

func main(){
	fmt.Println("Welcome to go")
	hostname:= getEnvOrDie("OHIP_HOST")
    
    xAppKey := getEnvOrDie("OHIP_APP_KEY") 
    xHotelid := getEnvOrDie("OHIP_HOTEL_ID") 
	password1 := getEnvOrDie("OHIP_PASSWORD_1") 
	username1 := getEnvOrDie("OHIP_USERNAME_1") 
	password2 := getEnvOrDie("OHIP_PASSWORD_2") 
	// username2 := getEnvOrDie("OHIP_USERNAME_2") 


	configuration := rsvApi.NewConfiguration()
	configuration.Host = hostname
	configuration.Scheme = "https"
	configuration.Password= password1
	configuration.Username= username1
	configuration.ApiKey = xAppKey
	configuration.HotelId = xHotelid
	
	
	configuration.OhipCredentials=[]rsvApi.OhipCredential{
		{
			Username: "wrong username",
			Password: password1,
		},
		{
			Username: username1,
			Password: password2,
		},
	}
	
    apiClient := rsvApi.NewAPIClient(configuration)
	fmt.Println(apiClient)
	// baseBackOffTimeout:= 1
	// maxBackOffTimeout:=  1 * time.Minute

	// delay:= int(math.Min(
	// 	float64(baseBackOffTimeout) * math.Pow(10, math.Floor(float64(4 / 2))),
	// 	float64(maxBackOffTimeout),
	// ))

	// fmt.Printf("DELAY %f",delay == int(maxBackOffTimeout))
	getReservations(apiClient, "CALL REQUET 1")

	go getReservations(apiClient, "CALL REQUET 1")
	go getReservations(apiClient, "CALL REQUET 2")
	go getReservations(apiClient, "CALL REQUET 3")
	go getReservations(apiClient, "CALL REQUET 3")
	time.Sleep(5 * time.Second)
	go getReservations(apiClient, "CALL REQUET 4")
	go getReservations(apiClient, "CALL REQUET 5")
	go getReservations(apiClient, "CALL REQUET 6")
	go getReservations(apiClient, "CALL REQUET 3")
	time.Sleep(5 * time.Second)
	go getReservations(apiClient, "CALL REQUET 7")
	go getReservations(apiClient, "CALL REQUET 8")
	go getReservations(apiClient, "CALL REQUET 9")
	go getReservations(apiClient, "CALL REQUET 3")

	time.Sleep(5 * time.Second)
	go getReservations(apiClient, "CALL REQUET 7")
	go getReservations(apiClient, "CALL REQUET 8")
	go getReservations(apiClient, "CALL REQUET 9")
	go getReservations(apiClient, "CALL REQUET 3")
	
	time.Sleep(30 * time.Second)
}

func getReservations(apiClient *rsvApi.APIClient, name string){
	resp, r, err := apiClient.ReservationApi.GetReservations(context.Background()).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationApi.GetReservations``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetReservations`: ReservationsDetails
    fmt.Fprintf(os.Stdout, "Response from `ReservationApi.GetReservations`: %v\n", resp)
}

