# ClaimReservationInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Arrival** | Pointer to **string** | Arrival date for the stay associated with this claim. | [optional] 
**ConfirmationNo** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**Departure** | Pointer to **string** | Departure date for the stay associated with this claim. | [optional] 
**HotelId** | Pointer to **string** | Property where the stay associated with this claim. | [optional] 

## Methods

### NewClaimReservationInfoType

`func NewClaimReservationInfoType() *ClaimReservationInfoType`

NewClaimReservationInfoType instantiates a new ClaimReservationInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewClaimReservationInfoTypeWithDefaults

`func NewClaimReservationInfoTypeWithDefaults() *ClaimReservationInfoType`

NewClaimReservationInfoTypeWithDefaults instantiates a new ClaimReservationInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetArrival

`func (o *ClaimReservationInfoType) GetArrival() string`

GetArrival returns the Arrival field if non-nil, zero value otherwise.

### GetArrivalOk

`func (o *ClaimReservationInfoType) GetArrivalOk() (*string, bool)`

GetArrivalOk returns a tuple with the Arrival field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArrival

`func (o *ClaimReservationInfoType) SetArrival(v string)`

SetArrival sets Arrival field to given value.

### HasArrival

`func (o *ClaimReservationInfoType) HasArrival() bool`

HasArrival returns a boolean if a field has been set.

### GetConfirmationNo

`func (o *ClaimReservationInfoType) GetConfirmationNo() []UniqueIDType`

GetConfirmationNo returns the ConfirmationNo field if non-nil, zero value otherwise.

### GetConfirmationNoOk

`func (o *ClaimReservationInfoType) GetConfirmationNoOk() (*[]UniqueIDType, bool)`

GetConfirmationNoOk returns a tuple with the ConfirmationNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfirmationNo

`func (o *ClaimReservationInfoType) SetConfirmationNo(v []UniqueIDType)`

SetConfirmationNo sets ConfirmationNo field to given value.

### HasConfirmationNo

`func (o *ClaimReservationInfoType) HasConfirmationNo() bool`

HasConfirmationNo returns a boolean if a field has been set.

### GetDeparture

`func (o *ClaimReservationInfoType) GetDeparture() string`

GetDeparture returns the Departure field if non-nil, zero value otherwise.

### GetDepartureOk

`func (o *ClaimReservationInfoType) GetDepartureOk() (*string, bool)`

GetDepartureOk returns a tuple with the Departure field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeparture

`func (o *ClaimReservationInfoType) SetDeparture(v string)`

SetDeparture sets Departure field to given value.

### HasDeparture

`func (o *ClaimReservationInfoType) HasDeparture() bool`

HasDeparture returns a boolean if a field has been set.

### GetHotelId

`func (o *ClaimReservationInfoType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ClaimReservationInfoType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ClaimReservationInfoType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ClaimReservationInfoType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


