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
			Username: username1,
			Password: password1,
		},
		{
			Username: username1,
			Password: password2,
		},
	}
	
    apiClient := rsvApi.NewAPIClient(configuration)

	resp, r, err := apiClient.ReservationApi.GetReservations(context.Background()).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationApi.GetReservations``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetReservations`: ReservationsDetails
    fmt.Fprintf(os.Stdout, "Response from `ReservationApi.GetReservations`: %v\n", resp)
	
}