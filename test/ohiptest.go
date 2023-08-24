package main

import (
	"context"
	"fmt"
	"os"

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
	password := getEnvOrDie("OHIP_PASSWORD_1") 
	username := getEnvOrDie("OHIP_USERNAME_1") 


	configuration := rsvApi.NewConfiguration()
	configuration.Host = hostname
	configuration.Scheme = "https"
	configuration.Password= password
	configuration.Username= username
	configuration.ApiKey = xAppKey
	configuration.HotelId = xHotelid

	
    apiClient := rsvApi.NewAPIClient(configuration)

	resp, r, err := apiClient.ReservationApi.GetReservations(context.Background()).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationApi.GetReservations``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetReservations`: ReservationsDetails
    fmt.Fprintf(os.Stdout, "Response from `ReservationApi.GetReservations`: %v\n", resp)
	
}