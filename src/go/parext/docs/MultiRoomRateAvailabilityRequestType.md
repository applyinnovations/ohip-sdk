# MultiRoomRateAvailabilityRequestType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ArrivalDate** | **string** | Arrival/Check-in Date | 
**DepartureDate** | **string** | Departure/Check-out Date | 
**HotelIds** | **[]string** | List of hotelIds for search criteria. | 
**Rates** | [**RatesSearchType**](RatesSearchType.md) |  | 
**Rooms** | [**[]RoomsSearchType**](RoomsSearchType.md) | Multi room search criteria with occupancy and quantity. | 

## Methods

### NewMultiRoomRateAvailabilityRequestType

`func NewMultiRoomRateAvailabilityRequestType(arrivalDate string, departureDate string, hotelIds []string, rates RatesSearchType, rooms []RoomsSearchType, ) *MultiRoomRateAvailabilityRequestType`

NewMultiRoomRateAvailabilityRequestType instantiates a new MultiRoomRateAvailabilityRequestType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMultiRoomRateAvailabilityRequestTypeWithDefaults

`func NewMultiRoomRateAvailabilityRequestTypeWithDefaults() *MultiRoomRateAvailabilityRequestType`

NewMultiRoomRateAvailabilityRequestTypeWithDefaults instantiates a new MultiRoomRateAvailabilityRequestType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetArrivalDate

`func (o *MultiRoomRateAvailabilityRequestType) GetArrivalDate() string`

GetArrivalDate returns the ArrivalDate field if non-nil, zero value otherwise.

### GetArrivalDateOk

`func (o *MultiRoomRateAvailabilityRequestType) GetArrivalDateOk() (*string, bool)`

GetArrivalDateOk returns a tuple with the ArrivalDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArrivalDate

`func (o *MultiRoomRateAvailabilityRequestType) SetArrivalDate(v string)`

SetArrivalDate sets ArrivalDate field to given value.


### GetDepartureDate

`func (o *MultiRoomRateAvailabilityRequestType) GetDepartureDate() string`

GetDepartureDate returns the DepartureDate field if non-nil, zero value otherwise.

### GetDepartureDateOk

`func (o *MultiRoomRateAvailabilityRequestType) GetDepartureDateOk() (*string, bool)`

GetDepartureDateOk returns a tuple with the DepartureDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepartureDate

`func (o *MultiRoomRateAvailabilityRequestType) SetDepartureDate(v string)`

SetDepartureDate sets DepartureDate field to given value.


### GetHotelIds

`func (o *MultiRoomRateAvailabilityRequestType) GetHotelIds() []string`

GetHotelIds returns the HotelIds field if non-nil, zero value otherwise.

### GetHotelIdsOk

`func (o *MultiRoomRateAvailabilityRequestType) GetHotelIdsOk() (*[]string, bool)`

GetHotelIdsOk returns a tuple with the HotelIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelIds

`func (o *MultiRoomRateAvailabilityRequestType) SetHotelIds(v []string)`

SetHotelIds sets HotelIds field to given value.


### GetRates

`func (o *MultiRoomRateAvailabilityRequestType) GetRates() RatesSearchType`

GetRates returns the Rates field if non-nil, zero value otherwise.

### GetRatesOk

`func (o *MultiRoomRateAvailabilityRequestType) GetRatesOk() (*RatesSearchType, bool)`

GetRatesOk returns a tuple with the Rates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRates

`func (o *MultiRoomRateAvailabilityRequestType) SetRates(v RatesSearchType)`

SetRates sets Rates field to given value.


### GetRooms

`func (o *MultiRoomRateAvailabilityRequestType) GetRooms() []RoomsSearchType`

GetRooms returns the Rooms field if non-nil, zero value otherwise.

### GetRoomsOk

`func (o *MultiRoomRateAvailabilityRequestType) GetRoomsOk() (*[]RoomsSearchType, bool)`

GetRoomsOk returns a tuple with the Rooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRooms

`func (o *MultiRoomRateAvailabilityRequestType) SetRooms(v []RoomsSearchType)`

SetRooms sets Rooms field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


