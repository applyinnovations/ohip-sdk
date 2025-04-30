# DepositTransferCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Property where the reservation exists. | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**ToReservations** | Pointer to [**[]DepositTransferToReservationType**](DepositTransferToReservationType.md) | The reservation id and the amount to transfer detail. | [optional] 
**Comments** | Pointer to **string** | User Comments for the transfer operation. | [optional] 
**CashierId** | Pointer to **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | [optional] 

## Methods

### NewDepositTransferCriteriaType

`func NewDepositTransferCriteriaType() *DepositTransferCriteriaType`

NewDepositTransferCriteriaType instantiates a new DepositTransferCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDepositTransferCriteriaTypeWithDefaults

`func NewDepositTransferCriteriaTypeWithDefaults() *DepositTransferCriteriaType`

NewDepositTransferCriteriaTypeWithDefaults instantiates a new DepositTransferCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *DepositTransferCriteriaType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *DepositTransferCriteriaType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *DepositTransferCriteriaType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *DepositTransferCriteriaType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetReservationId

`func (o *DepositTransferCriteriaType) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *DepositTransferCriteriaType) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *DepositTransferCriteriaType) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *DepositTransferCriteriaType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetToReservations

`func (o *DepositTransferCriteriaType) GetToReservations() []DepositTransferToReservationType`

GetToReservations returns the ToReservations field if non-nil, zero value otherwise.

### GetToReservationsOk

`func (o *DepositTransferCriteriaType) GetToReservationsOk() (*[]DepositTransferToReservationType, bool)`

GetToReservationsOk returns a tuple with the ToReservations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToReservations

`func (o *DepositTransferCriteriaType) SetToReservations(v []DepositTransferToReservationType)`

SetToReservations sets ToReservations field to given value.

### HasToReservations

`func (o *DepositTransferCriteriaType) HasToReservations() bool`

HasToReservations returns a boolean if a field has been set.

### GetComments

`func (o *DepositTransferCriteriaType) GetComments() string`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *DepositTransferCriteriaType) GetCommentsOk() (*string, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *DepositTransferCriteriaType) SetComments(v string)`

SetComments sets Comments field to given value.

### HasComments

`func (o *DepositTransferCriteriaType) HasComments() bool`

HasComments returns a boolean if a field has been set.

### GetCashierId

`func (o *DepositTransferCriteriaType) GetCashierId() float32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *DepositTransferCriteriaType) GetCashierIdOk() (*float32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *DepositTransferCriteriaType) SetCashierId(v float32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *DepositTransferCriteriaType) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


