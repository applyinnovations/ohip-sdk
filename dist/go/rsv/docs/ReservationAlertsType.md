# ReservationAlertsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Alert** | Pointer to [**[]AlertType**](AlertType.md) | List of alerts. | [optional] 
**HotelId** | Pointer to **string** | Property code where the reservation belongs to. | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 

## Methods

### NewReservationAlertsType

`func NewReservationAlertsType() *ReservationAlertsType`

NewReservationAlertsType instantiates a new ReservationAlertsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationAlertsTypeWithDefaults

`func NewReservationAlertsTypeWithDefaults() *ReservationAlertsType`

NewReservationAlertsTypeWithDefaults instantiates a new ReservationAlertsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAlert

`func (o *ReservationAlertsType) GetAlert() []AlertType`

GetAlert returns the Alert field if non-nil, zero value otherwise.

### GetAlertOk

`func (o *ReservationAlertsType) GetAlertOk() (*[]AlertType, bool)`

GetAlertOk returns a tuple with the Alert field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlert

`func (o *ReservationAlertsType) SetAlert(v []AlertType)`

SetAlert sets Alert field to given value.

### HasAlert

`func (o *ReservationAlertsType) HasAlert() bool`

HasAlert returns a boolean if a field has been set.

### GetHotelId

`func (o *ReservationAlertsType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ReservationAlertsType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ReservationAlertsType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ReservationAlertsType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetReservationId

`func (o *ReservationAlertsType) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *ReservationAlertsType) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *ReservationAlertsType) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *ReservationAlertsType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


