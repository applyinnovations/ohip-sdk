# CancelPrepaidCardTransactionCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Amount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**CardNo** | Pointer to **string** | Prepaid card number. | [optional] 
**CashierId** | Pointer to **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | [optional] 
**HotelId** | Pointer to **string** | Hotel code. | [optional] 
**InterfaceId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**Pin** | Pointer to **string** | PIN code associated for the prepaid card. | [optional] 
**PostChargeToRoom** | Pointer to **bool** | Indicate that charges will be posted to the room. | [optional] 
**ProfileId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ReservationId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**SaleCriteria** | Pointer to [**SaleCriteriaType**](SaleCriteriaType.md) |  | [optional] 
**TransactionNo** | Pointer to **int32** | The opera transaction number associated with prepaid card transaction. | [optional] 
**TransactionTye** | Pointer to [**PrepaidCardTrxTypeType**](PrepaidCardTrxTypeType.md) |  | [optional] 
**VendorTransactionNo** | Pointer to **string** | Used for Character Strings, length 0 to 100. | [optional] 

## Methods

### NewCancelPrepaidCardTransactionCriteria

`func NewCancelPrepaidCardTransactionCriteria() *CancelPrepaidCardTransactionCriteria`

NewCancelPrepaidCardTransactionCriteria instantiates a new CancelPrepaidCardTransactionCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCancelPrepaidCardTransactionCriteriaWithDefaults

`func NewCancelPrepaidCardTransactionCriteriaWithDefaults() *CancelPrepaidCardTransactionCriteria`

NewCancelPrepaidCardTransactionCriteriaWithDefaults instantiates a new CancelPrepaidCardTransactionCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmount

`func (o *CancelPrepaidCardTransactionCriteria) GetAmount() CurrencyAmountType`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *CancelPrepaidCardTransactionCriteria) GetAmountOk() (*CurrencyAmountType, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *CancelPrepaidCardTransactionCriteria) SetAmount(v CurrencyAmountType)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *CancelPrepaidCardTransactionCriteria) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetCardNo

`func (o *CancelPrepaidCardTransactionCriteria) GetCardNo() string`

GetCardNo returns the CardNo field if non-nil, zero value otherwise.

### GetCardNoOk

`func (o *CancelPrepaidCardTransactionCriteria) GetCardNoOk() (*string, bool)`

GetCardNoOk returns a tuple with the CardNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardNo

`func (o *CancelPrepaidCardTransactionCriteria) SetCardNo(v string)`

SetCardNo sets CardNo field to given value.

### HasCardNo

`func (o *CancelPrepaidCardTransactionCriteria) HasCardNo() bool`

HasCardNo returns a boolean if a field has been set.

### GetCashierId

`func (o *CancelPrepaidCardTransactionCriteria) GetCashierId() float32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *CancelPrepaidCardTransactionCriteria) GetCashierIdOk() (*float32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *CancelPrepaidCardTransactionCriteria) SetCashierId(v float32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *CancelPrepaidCardTransactionCriteria) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.

### GetHotelId

`func (o *CancelPrepaidCardTransactionCriteria) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *CancelPrepaidCardTransactionCriteria) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *CancelPrepaidCardTransactionCriteria) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *CancelPrepaidCardTransactionCriteria) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetInterfaceId

`func (o *CancelPrepaidCardTransactionCriteria) GetInterfaceId() UniqueIDType`

GetInterfaceId returns the InterfaceId field if non-nil, zero value otherwise.

### GetInterfaceIdOk

`func (o *CancelPrepaidCardTransactionCriteria) GetInterfaceIdOk() (*UniqueIDType, bool)`

GetInterfaceIdOk returns a tuple with the InterfaceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterfaceId

`func (o *CancelPrepaidCardTransactionCriteria) SetInterfaceId(v UniqueIDType)`

SetInterfaceId sets InterfaceId field to given value.

### HasInterfaceId

`func (o *CancelPrepaidCardTransactionCriteria) HasInterfaceId() bool`

HasInterfaceId returns a boolean if a field has been set.

### GetPin

`func (o *CancelPrepaidCardTransactionCriteria) GetPin() string`

GetPin returns the Pin field if non-nil, zero value otherwise.

### GetPinOk

`func (o *CancelPrepaidCardTransactionCriteria) GetPinOk() (*string, bool)`

GetPinOk returns a tuple with the Pin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPin

`func (o *CancelPrepaidCardTransactionCriteria) SetPin(v string)`

SetPin sets Pin field to given value.

### HasPin

`func (o *CancelPrepaidCardTransactionCriteria) HasPin() bool`

HasPin returns a boolean if a field has been set.

### GetPostChargeToRoom

`func (o *CancelPrepaidCardTransactionCriteria) GetPostChargeToRoom() bool`

GetPostChargeToRoom returns the PostChargeToRoom field if non-nil, zero value otherwise.

### GetPostChargeToRoomOk

`func (o *CancelPrepaidCardTransactionCriteria) GetPostChargeToRoomOk() (*bool, bool)`

GetPostChargeToRoomOk returns a tuple with the PostChargeToRoom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostChargeToRoom

`func (o *CancelPrepaidCardTransactionCriteria) SetPostChargeToRoom(v bool)`

SetPostChargeToRoom sets PostChargeToRoom field to given value.

### HasPostChargeToRoom

`func (o *CancelPrepaidCardTransactionCriteria) HasPostChargeToRoom() bool`

HasPostChargeToRoom returns a boolean if a field has been set.

### GetProfileId

`func (o *CancelPrepaidCardTransactionCriteria) GetProfileId() UniqueIDType`

GetProfileId returns the ProfileId field if non-nil, zero value otherwise.

### GetProfileIdOk

`func (o *CancelPrepaidCardTransactionCriteria) GetProfileIdOk() (*UniqueIDType, bool)`

GetProfileIdOk returns a tuple with the ProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileId

`func (o *CancelPrepaidCardTransactionCriteria) SetProfileId(v UniqueIDType)`

SetProfileId sets ProfileId field to given value.

### HasProfileId

`func (o *CancelPrepaidCardTransactionCriteria) HasProfileId() bool`

HasProfileId returns a boolean if a field has been set.

### GetReservationId

`func (o *CancelPrepaidCardTransactionCriteria) GetReservationId() UniqueIDType`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *CancelPrepaidCardTransactionCriteria) GetReservationIdOk() (*UniqueIDType, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *CancelPrepaidCardTransactionCriteria) SetReservationId(v UniqueIDType)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *CancelPrepaidCardTransactionCriteria) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetSaleCriteria

`func (o *CancelPrepaidCardTransactionCriteria) GetSaleCriteria() SaleCriteriaType`

GetSaleCriteria returns the SaleCriteria field if non-nil, zero value otherwise.

### GetSaleCriteriaOk

`func (o *CancelPrepaidCardTransactionCriteria) GetSaleCriteriaOk() (*SaleCriteriaType, bool)`

GetSaleCriteriaOk returns a tuple with the SaleCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSaleCriteria

`func (o *CancelPrepaidCardTransactionCriteria) SetSaleCriteria(v SaleCriteriaType)`

SetSaleCriteria sets SaleCriteria field to given value.

### HasSaleCriteria

`func (o *CancelPrepaidCardTransactionCriteria) HasSaleCriteria() bool`

HasSaleCriteria returns a boolean if a field has been set.

### GetTransactionNo

`func (o *CancelPrepaidCardTransactionCriteria) GetTransactionNo() int32`

GetTransactionNo returns the TransactionNo field if non-nil, zero value otherwise.

### GetTransactionNoOk

`func (o *CancelPrepaidCardTransactionCriteria) GetTransactionNoOk() (*int32, bool)`

GetTransactionNoOk returns a tuple with the TransactionNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionNo

`func (o *CancelPrepaidCardTransactionCriteria) SetTransactionNo(v int32)`

SetTransactionNo sets TransactionNo field to given value.

### HasTransactionNo

`func (o *CancelPrepaidCardTransactionCriteria) HasTransactionNo() bool`

HasTransactionNo returns a boolean if a field has been set.

### GetTransactionTye

`func (o *CancelPrepaidCardTransactionCriteria) GetTransactionTye() PrepaidCardTrxTypeType`

GetTransactionTye returns the TransactionTye field if non-nil, zero value otherwise.

### GetTransactionTyeOk

`func (o *CancelPrepaidCardTransactionCriteria) GetTransactionTyeOk() (*PrepaidCardTrxTypeType, bool)`

GetTransactionTyeOk returns a tuple with the TransactionTye field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionTye

`func (o *CancelPrepaidCardTransactionCriteria) SetTransactionTye(v PrepaidCardTrxTypeType)`

SetTransactionTye sets TransactionTye field to given value.

### HasTransactionTye

`func (o *CancelPrepaidCardTransactionCriteria) HasTransactionTye() bool`

HasTransactionTye returns a boolean if a field has been set.

### GetVendorTransactionNo

`func (o *CancelPrepaidCardTransactionCriteria) GetVendorTransactionNo() string`

GetVendorTransactionNo returns the VendorTransactionNo field if non-nil, zero value otherwise.

### GetVendorTransactionNoOk

`func (o *CancelPrepaidCardTransactionCriteria) GetVendorTransactionNoOk() (*string, bool)`

GetVendorTransactionNoOk returns a tuple with the VendorTransactionNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVendorTransactionNo

`func (o *CancelPrepaidCardTransactionCriteria) SetVendorTransactionNo(v string)`

SetVendorTransactionNo sets VendorTransactionNo field to given value.

### HasVendorTransactionNo

`func (o *CancelPrepaidCardTransactionCriteria) HasVendorTransactionNo() bool`

HasVendorTransactionNo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


