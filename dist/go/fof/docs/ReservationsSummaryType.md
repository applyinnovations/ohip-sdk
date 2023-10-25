# ReservationsSummaryType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockSummary** | Pointer to [**BlockResvSummaryType**](BlockResvSummaryType.md) |  | [optional] 
**PaymentMethodSummary** | Pointer to [**PaymentMethodsSummaryType**](PaymentMethodsSummaryType.md) |  | [optional] 
**RoomSummary** | Pointer to [**RoomSummaryType**](RoomSummaryType.md) |  | [optional] 

## Methods

### NewReservationsSummaryType

`func NewReservationsSummaryType() *ReservationsSummaryType`

NewReservationsSummaryType instantiates a new ReservationsSummaryType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationsSummaryTypeWithDefaults

`func NewReservationsSummaryTypeWithDefaults() *ReservationsSummaryType`

NewReservationsSummaryTypeWithDefaults instantiates a new ReservationsSummaryType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockSummary

`func (o *ReservationsSummaryType) GetBlockSummary() BlockResvSummaryType`

GetBlockSummary returns the BlockSummary field if non-nil, zero value otherwise.

### GetBlockSummaryOk

`func (o *ReservationsSummaryType) GetBlockSummaryOk() (*BlockResvSummaryType, bool)`

GetBlockSummaryOk returns a tuple with the BlockSummary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockSummary

`func (o *ReservationsSummaryType) SetBlockSummary(v BlockResvSummaryType)`

SetBlockSummary sets BlockSummary field to given value.

### HasBlockSummary

`func (o *ReservationsSummaryType) HasBlockSummary() bool`

HasBlockSummary returns a boolean if a field has been set.

### GetPaymentMethodSummary

`func (o *ReservationsSummaryType) GetPaymentMethodSummary() PaymentMethodsSummaryType`

GetPaymentMethodSummary returns the PaymentMethodSummary field if non-nil, zero value otherwise.

### GetPaymentMethodSummaryOk

`func (o *ReservationsSummaryType) GetPaymentMethodSummaryOk() (*PaymentMethodsSummaryType, bool)`

GetPaymentMethodSummaryOk returns a tuple with the PaymentMethodSummary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentMethodSummary

`func (o *ReservationsSummaryType) SetPaymentMethodSummary(v PaymentMethodsSummaryType)`

SetPaymentMethodSummary sets PaymentMethodSummary field to given value.

### HasPaymentMethodSummary

`func (o *ReservationsSummaryType) HasPaymentMethodSummary() bool`

HasPaymentMethodSummary returns a boolean if a field has been set.

### GetRoomSummary

`func (o *ReservationsSummaryType) GetRoomSummary() RoomSummaryType`

GetRoomSummary returns the RoomSummary field if non-nil, zero value otherwise.

### GetRoomSummaryOk

`func (o *ReservationsSummaryType) GetRoomSummaryOk() (*RoomSummaryType, bool)`

GetRoomSummaryOk returns a tuple with the RoomSummary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomSummary

`func (o *ReservationsSummaryType) SetRoomSummary(v RoomSummaryType)`

SetRoomSummary sets RoomSummary field to given value.

### HasRoomSummary

`func (o *ReservationsSummaryType) HasRoomSummary() bool`

HasRoomSummary returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


