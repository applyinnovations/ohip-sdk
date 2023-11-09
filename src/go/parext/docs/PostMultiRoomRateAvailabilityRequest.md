# PostMultiRoomRateAvailabilityRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ArrivalDate** | **string** | Arrival/Check-in Date | 
**DepartureDate** | **string** | Departure/Check-out Date | 
**HotelIds** | **[]string** | List of hotelIds for search criteria. | 
**Rates** | [**RatesSearchType**](RatesSearchType.md) |  | 
**Rooms** | [**[]RoomsSearchType**](RoomsSearchType.md) | Multi room search criteria with occupancy and quantity. | 

## Methods

### NewPostMultiRoomRateAvailabilityRequest

`func NewPostMultiRoomRateAvailabilityRequest(arrivalDate string, departureDate string, hotelIds []string, rates RatesSearchType, rooms []RoomsSearchType, ) *PostMultiRoomRateAvailabilityRequest`

NewPostMultiRoomRateAvailabilityRequest instantiates a new PostMultiRoomRateAvailabilityRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostMultiRoomRateAvailabilityRequestWithDefaults

`func NewPostMultiRoomRateAvailabilityRequestWithDefaults() *PostMultiRoomRateAvailabilityRequest`

NewPostMultiRoomRateAvailabilityRequestWithDefaults instantiates a new PostMultiRoomRateAvailabilityRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetArrivalDate

`func (o *PostMultiRoomRateAvailabilityRequest) GetArrivalDate() string`

GetArrivalDate returns the ArrivalDate field if non-nil, zero value otherwise.

### GetArrivalDateOk

`func (o *PostMultiRoomRateAvailabilityRequest) GetArrivalDateOk() (*string, bool)`

GetArrivalDateOk returns a tuple with the ArrivalDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArrivalDate

`func (o *PostMultiRoomRateAvailabilityRequest) SetArrivalDate(v string)`

SetArrivalDate sets ArrivalDate field to given value.


### GetDepartureDate

`func (o *PostMultiRoomRateAvailabilityRequest) GetDepartureDate() string`

GetDepartureDate returns the DepartureDate field if non-nil, zero value otherwise.

### GetDepartureDateOk

`func (o *PostMultiRoomRateAvailabilityRequest) GetDepartureDateOk() (*string, bool)`

GetDepartureDateOk returns a tuple with the DepartureDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepartureDate

`func (o *PostMultiRoomRateAvailabilityRequest) SetDepartureDate(v string)`

SetDepartureDate sets DepartureDate field to given value.


### GetHotelIds

`func (o *PostMultiRoomRateAvailabilityRequest) GetHotelIds() []string`

GetHotelIds returns the HotelIds field if non-nil, zero value otherwise.

### GetHotelIdsOk

`func (o *PostMultiRoomRateAvailabilityRequest) GetHotelIdsOk() (*[]string, bool)`

GetHotelIdsOk returns a tuple with the HotelIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelIds

`func (o *PostMultiRoomRateAvailabilityRequest) SetHotelIds(v []string)`

SetHotelIds sets HotelIds field to given value.


### GetRates

`func (o *PostMultiRoomRateAvailabilityRequest) GetRates() RatesSearchType`

GetRates returns the Rates field if non-nil, zero value otherwise.

### GetRatesOk

`func (o *PostMultiRoomRateAvailabilityRequest) GetRatesOk() (*RatesSearchType, bool)`

GetRatesOk returns a tuple with the Rates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRates

`func (o *PostMultiRoomRateAvailabilityRequest) SetRates(v RatesSearchType)`

SetRates sets Rates field to given value.


### GetRooms

`func (o *PostMultiRoomRateAvailabilityRequest) GetRooms() []RoomsSearchType`

GetRooms returns the Rooms field if non-nil, zero value otherwise.

### GetRoomsOk

`func (o *PostMultiRoomRateAvailabilityRequest) GetRoomsOk() (*[]RoomsSearchType, bool)`

GetRoomsOk returns a tuple with the Rooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRooms

`func (o *PostMultiRoomRateAvailabilityRequest) SetRooms(v []RoomsSearchType)`

SetRooms sets Rooms field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


