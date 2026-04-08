# ActivityBookingRQType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | This is not required if a Reservation Id is provided | [optional] 
**ReservationId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ProfileId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**Activities** | Pointer to [**[]ActivityListInner**](ActivityListInner.md) | A collection of Activity objects. | [optional] 

## Methods

### NewActivityBookingRQType

`func NewActivityBookingRQType() *ActivityBookingRQType`

NewActivityBookingRQType instantiates a new ActivityBookingRQType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewActivityBookingRQTypeWithDefaults

`func NewActivityBookingRQTypeWithDefaults() *ActivityBookingRQType`

NewActivityBookingRQTypeWithDefaults instantiates a new ActivityBookingRQType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *ActivityBookingRQType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ActivityBookingRQType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ActivityBookingRQType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ActivityBookingRQType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetReservationId

`func (o *ActivityBookingRQType) GetReservationId() UniqueIDType`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *ActivityBookingRQType) GetReservationIdOk() (*UniqueIDType, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *ActivityBookingRQType) SetReservationId(v UniqueIDType)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *ActivityBookingRQType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetProfileId

`func (o *ActivityBookingRQType) GetProfileId() UniqueIDType`

GetProfileId returns the ProfileId field if non-nil, zero value otherwise.

### GetProfileIdOk

`func (o *ActivityBookingRQType) GetProfileIdOk() (*UniqueIDType, bool)`

GetProfileIdOk returns a tuple with the ProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileId

`func (o *ActivityBookingRQType) SetProfileId(v UniqueIDType)`

SetProfileId sets ProfileId field to given value.

### HasProfileId

`func (o *ActivityBookingRQType) HasProfileId() bool`

HasProfileId returns a boolean if a field has been set.

### GetActivities

`func (o *ActivityBookingRQType) GetActivities() []ActivityListInner`

GetActivities returns the Activities field if non-nil, zero value otherwise.

### GetActivitiesOk

`func (o *ActivityBookingRQType) GetActivitiesOk() (*[]ActivityListInner, bool)`

GetActivitiesOk returns a tuple with the Activities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivities

`func (o *ActivityBookingRQType) SetActivities(v []ActivityListInner)`

SetActivities sets Activities field to given value.

### HasActivities

`func (o *ActivityBookingRQType) HasActivities() bool`

HasActivities returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


