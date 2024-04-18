# BatchCCAuth

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Reservations** | Pointer to [**[]ReservationForCCAuthType**](ReservationForCCAuthType.md) | List of reservations with their payment methods. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewBatchCCAuth

`func NewBatchCCAuth() *BatchCCAuth`

NewBatchCCAuth instantiates a new BatchCCAuth object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBatchCCAuthWithDefaults

`func NewBatchCCAuthWithDefaults() *BatchCCAuth`

NewBatchCCAuthWithDefaults instantiates a new BatchCCAuth object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *BatchCCAuth) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *BatchCCAuth) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *BatchCCAuth) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *BatchCCAuth) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetLinks

`func (o *BatchCCAuth) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *BatchCCAuth) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *BatchCCAuth) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *BatchCCAuth) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetReservations

`func (o *BatchCCAuth) GetReservations() []ReservationForCCAuthType`

GetReservations returns the Reservations field if non-nil, zero value otherwise.

### GetReservationsOk

`func (o *BatchCCAuth) GetReservationsOk() (*[]ReservationForCCAuthType, bool)`

GetReservationsOk returns a tuple with the Reservations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservations

`func (o *BatchCCAuth) SetReservations(v []ReservationForCCAuthType)`

SetReservations sets Reservations field to given value.

### HasReservations

`func (o *BatchCCAuth) HasReservations() bool`

HasReservations returns a boolean if a field has been set.

### GetWarnings

`func (o *BatchCCAuth) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *BatchCCAuth) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *BatchCCAuth) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *BatchCCAuth) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

