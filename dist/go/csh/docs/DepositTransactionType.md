# DepositTransactionType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Property code where the reservation transaction exists. | [optional] 
**ReservationId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**TransactionNo** | Pointer to **float32** | The unique transaction number associated with transaction group. | [optional] 
**SplitAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**OriginalAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 

## Methods

### NewDepositTransactionType

`func NewDepositTransactionType() *DepositTransactionType`

NewDepositTransactionType instantiates a new DepositTransactionType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDepositTransactionTypeWithDefaults

`func NewDepositTransactionTypeWithDefaults() *DepositTransactionType`

NewDepositTransactionTypeWithDefaults instantiates a new DepositTransactionType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *DepositTransactionType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *DepositTransactionType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *DepositTransactionType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *DepositTransactionType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetReservationId

`func (o *DepositTransactionType) GetReservationId() UniqueIDType`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *DepositTransactionType) GetReservationIdOk() (*UniqueIDType, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *DepositTransactionType) SetReservationId(v UniqueIDType)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *DepositTransactionType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetTransactionNo

`func (o *DepositTransactionType) GetTransactionNo() float32`

GetTransactionNo returns the TransactionNo field if non-nil, zero value otherwise.

### GetTransactionNoOk

`func (o *DepositTransactionType) GetTransactionNoOk() (*float32, bool)`

GetTransactionNoOk returns a tuple with the TransactionNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionNo

`func (o *DepositTransactionType) SetTransactionNo(v float32)`

SetTransactionNo sets TransactionNo field to given value.

### HasTransactionNo

`func (o *DepositTransactionType) HasTransactionNo() bool`

HasTransactionNo returns a boolean if a field has been set.

### GetSplitAmount

`func (o *DepositTransactionType) GetSplitAmount() CurrencyAmountType`

GetSplitAmount returns the SplitAmount field if non-nil, zero value otherwise.

### GetSplitAmountOk

`func (o *DepositTransactionType) GetSplitAmountOk() (*CurrencyAmountType, bool)`

GetSplitAmountOk returns a tuple with the SplitAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSplitAmount

`func (o *DepositTransactionType) SetSplitAmount(v CurrencyAmountType)`

SetSplitAmount sets SplitAmount field to given value.

### HasSplitAmount

`func (o *DepositTransactionType) HasSplitAmount() bool`

HasSplitAmount returns a boolean if a field has been set.

### GetOriginalAmount

`func (o *DepositTransactionType) GetOriginalAmount() CurrencyAmountType`

GetOriginalAmount returns the OriginalAmount field if non-nil, zero value otherwise.

### GetOriginalAmountOk

`func (o *DepositTransactionType) GetOriginalAmountOk() (*CurrencyAmountType, bool)`

GetOriginalAmountOk returns a tuple with the OriginalAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOriginalAmount

`func (o *DepositTransactionType) SetOriginalAmount(v CurrencyAmountType)`

SetOriginalAmount sets OriginalAmount field to given value.

### HasOriginalAmount

`func (o *DepositTransactionType) HasOriginalAmount() bool`

HasOriginalAmount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


