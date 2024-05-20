# ReservationDetailsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Arrival** | Pointer to **string** | Reservation arrival date | [optional] 
**Departure** | Pointer to **string** | Reservation departure date | [optional] 
**GivenName** | Pointer to **string** | Given name, first name or names | [optional] 
**HotelId** | Pointer to **string** | Hotel Id | [optional] 
**Nights** | Pointer to **int32** | The number of nights of the reservation. | [optional] 
**ProfileId** | Pointer to [**ProfileId**](ProfileId.md) |  | [optional] 
**ReservationIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique identifier of the reservation like Reservation Name Id, Confirmation Number. | [optional] 
**RoomId** | Pointer to **string** | Room Number | [optional] 
**Surname** | Pointer to **string** | Family name, last name. | [optional] 

## Methods

### NewReservationDetailsType

`func NewReservationDetailsType() *ReservationDetailsType`

NewReservationDetailsType instantiates a new ReservationDetailsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationDetailsTypeWithDefaults

`func NewReservationDetailsTypeWithDefaults() *ReservationDetailsType`

NewReservationDetailsTypeWithDefaults instantiates a new ReservationDetailsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetArrival

`func (o *ReservationDetailsType) GetArrival() string`

GetArrival returns the Arrival field if non-nil, zero value otherwise.

### GetArrivalOk

`func (o *ReservationDetailsType) GetArrivalOk() (*string, bool)`

GetArrivalOk returns a tuple with the Arrival field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArrival

`func (o *ReservationDetailsType) SetArrival(v string)`

SetArrival sets Arrival field to given value.

### HasArrival

`func (o *ReservationDetailsType) HasArrival() bool`

HasArrival returns a boolean if a field has been set.

### GetDeparture

`func (o *ReservationDetailsType) GetDeparture() string`

GetDeparture returns the Departure field if non-nil, zero value otherwise.

### GetDepartureOk

`func (o *ReservationDetailsType) GetDepartureOk() (*string, bool)`

GetDepartureOk returns a tuple with the Departure field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeparture

`func (o *ReservationDetailsType) SetDeparture(v string)`

SetDeparture sets Departure field to given value.

### HasDeparture

`func (o *ReservationDetailsType) HasDeparture() bool`

HasDeparture returns a boolean if a field has been set.

### GetGivenName

`func (o *ReservationDetailsType) GetGivenName() string`

GetGivenName returns the GivenName field if non-nil, zero value otherwise.

### GetGivenNameOk

`func (o *ReservationDetailsType) GetGivenNameOk() (*string, bool)`

GetGivenNameOk returns a tuple with the GivenName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGivenName

`func (o *ReservationDetailsType) SetGivenName(v string)`

SetGivenName sets GivenName field to given value.

### HasGivenName

`func (o *ReservationDetailsType) HasGivenName() bool`

HasGivenName returns a boolean if a field has been set.

### GetHotelId

`func (o *ReservationDetailsType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ReservationDetailsType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ReservationDetailsType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ReservationDetailsType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetNights

`func (o *ReservationDetailsType) GetNights() int32`

GetNights returns the Nights field if non-nil, zero value otherwise.

### GetNightsOk

`func (o *ReservationDetailsType) GetNightsOk() (*int32, bool)`

GetNightsOk returns a tuple with the Nights field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNights

`func (o *ReservationDetailsType) SetNights(v int32)`

SetNights sets Nights field to given value.

### HasNights

`func (o *ReservationDetailsType) HasNights() bool`

HasNights returns a boolean if a field has been set.

### GetProfileId

`func (o *ReservationDetailsType) GetProfileId() ProfileId`

GetProfileId returns the ProfileId field if non-nil, zero value otherwise.

### GetProfileIdOk

`func (o *ReservationDetailsType) GetProfileIdOk() (*ProfileId, bool)`

GetProfileIdOk returns a tuple with the ProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileId

`func (o *ReservationDetailsType) SetProfileId(v ProfileId)`

SetProfileId sets ProfileId field to given value.

### HasProfileId

`func (o *ReservationDetailsType) HasProfileId() bool`

HasProfileId returns a boolean if a field has been set.

### GetReservationIdList

`func (o *ReservationDetailsType) GetReservationIdList() []UniqueIDType`

GetReservationIdList returns the ReservationIdList field if non-nil, zero value otherwise.

### GetReservationIdListOk

`func (o *ReservationDetailsType) GetReservationIdListOk() (*[]UniqueIDType, bool)`

GetReservationIdListOk returns a tuple with the ReservationIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIdList

`func (o *ReservationDetailsType) SetReservationIdList(v []UniqueIDType)`

SetReservationIdList sets ReservationIdList field to given value.

### HasReservationIdList

`func (o *ReservationDetailsType) HasReservationIdList() bool`

HasReservationIdList returns a boolean if a field has been set.

### GetRoomId

`func (o *ReservationDetailsType) GetRoomId() string`

GetRoomId returns the RoomId field if non-nil, zero value otherwise.

### GetRoomIdOk

`func (o *ReservationDetailsType) GetRoomIdOk() (*string, bool)`

GetRoomIdOk returns a tuple with the RoomId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomId

`func (o *ReservationDetailsType) SetRoomId(v string)`

SetRoomId sets RoomId field to given value.

### HasRoomId

`func (o *ReservationDetailsType) HasRoomId() bool`

HasRoomId returns a boolean if a field has been set.

### GetSurname

`func (o *ReservationDetailsType) GetSurname() string`

GetSurname returns the Surname field if non-nil, zero value otherwise.

### GetSurnameOk

`func (o *ReservationDetailsType) GetSurnameOk() (*string, bool)`

GetSurnameOk returns a tuple with the Surname field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSurname

`func (o *ReservationDetailsType) SetSurname(v string)`

SetSurname sets Surname field to given value.

### HasSurname

`func (o *ReservationDetailsType) HasSurname() bool`

HasSurname returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


