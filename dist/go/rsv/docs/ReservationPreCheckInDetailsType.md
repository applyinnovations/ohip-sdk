# ReservationPreCheckInDetailsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Hotel Code of this reservation. | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**PreCheckInDetails** | Pointer to [**PreCheckInDetailsType**](PreCheckInDetailsType.md) |  | [optional] 

## Methods

### NewReservationPreCheckInDetailsType

`func NewReservationPreCheckInDetailsType() *ReservationPreCheckInDetailsType`

NewReservationPreCheckInDetailsType instantiates a new ReservationPreCheckInDetailsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationPreCheckInDetailsTypeWithDefaults

`func NewReservationPreCheckInDetailsTypeWithDefaults() *ReservationPreCheckInDetailsType`

NewReservationPreCheckInDetailsTypeWithDefaults instantiates a new ReservationPreCheckInDetailsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *ReservationPreCheckInDetailsType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ReservationPreCheckInDetailsType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ReservationPreCheckInDetailsType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ReservationPreCheckInDetailsType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetReservationId

`func (o *ReservationPreCheckInDetailsType) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *ReservationPreCheckInDetailsType) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *ReservationPreCheckInDetailsType) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *ReservationPreCheckInDetailsType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetPreCheckInDetails

`func (o *ReservationPreCheckInDetailsType) GetPreCheckInDetails() PreCheckInDetailsType`

GetPreCheckInDetails returns the PreCheckInDetails field if non-nil, zero value otherwise.

### GetPreCheckInDetailsOk

`func (o *ReservationPreCheckInDetailsType) GetPreCheckInDetailsOk() (*PreCheckInDetailsType, bool)`

GetPreCheckInDetailsOk returns a tuple with the PreCheckInDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreCheckInDetails

`func (o *ReservationPreCheckInDetailsType) SetPreCheckInDetails(v PreCheckInDetailsType)`

SetPreCheckInDetails sets PreCheckInDetails field to given value.

### HasPreCheckInDetails

`func (o *ReservationPreCheckInDetailsType) HasPreCheckInDetails() bool`

HasPreCheckInDetails returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


