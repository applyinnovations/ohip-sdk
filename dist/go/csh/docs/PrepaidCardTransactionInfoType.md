# PrepaidCardTransactionInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Amount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Cancellable** | Pointer to **bool** | Indicate if the transaction is cancellable or not. | [optional] 
**Date** | Pointer to **string** | Prepaid card transaction date. | [optional] 
**ProfileId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**Source** | Pointer to [**PrepaidCardTransactionSourceType**](PrepaidCardTransactionSourceType.md) |  | [optional] 
**TransactionNo** | Pointer to **int32** | Opera transaction number. | [optional] 
**Type** | Pointer to [**PrepaidCardTrxTypeType**](PrepaidCardTrxTypeType.md) |  | [optional] 
**VendorTransactionNo** | Pointer to **string** | Vendor transaction number. | [optional] 

## Methods

### NewPrepaidCardTransactionInfoType

`func NewPrepaidCardTransactionInfoType() *PrepaidCardTransactionInfoType`

NewPrepaidCardTransactionInfoType instantiates a new PrepaidCardTransactionInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPrepaidCardTransactionInfoTypeWithDefaults

`func NewPrepaidCardTransactionInfoTypeWithDefaults() *PrepaidCardTransactionInfoType`

NewPrepaidCardTransactionInfoTypeWithDefaults instantiates a new PrepaidCardTransactionInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmount

`func (o *PrepaidCardTransactionInfoType) GetAmount() CurrencyAmountType`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *PrepaidCardTransactionInfoType) GetAmountOk() (*CurrencyAmountType, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *PrepaidCardTransactionInfoType) SetAmount(v CurrencyAmountType)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *PrepaidCardTransactionInfoType) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetCancellable

`func (o *PrepaidCardTransactionInfoType) GetCancellable() bool`

GetCancellable returns the Cancellable field if non-nil, zero value otherwise.

### GetCancellableOk

`func (o *PrepaidCardTransactionInfoType) GetCancellableOk() (*bool, bool)`

GetCancellableOk returns a tuple with the Cancellable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancellable

`func (o *PrepaidCardTransactionInfoType) SetCancellable(v bool)`

SetCancellable sets Cancellable field to given value.

### HasCancellable

`func (o *PrepaidCardTransactionInfoType) HasCancellable() bool`

HasCancellable returns a boolean if a field has been set.

### GetDate

`func (o *PrepaidCardTransactionInfoType) GetDate() string`

GetDate returns the Date field if non-nil, zero value otherwise.

### GetDateOk

`func (o *PrepaidCardTransactionInfoType) GetDateOk() (*string, bool)`

GetDateOk returns a tuple with the Date field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDate

`func (o *PrepaidCardTransactionInfoType) SetDate(v string)`

SetDate sets Date field to given value.

### HasDate

`func (o *PrepaidCardTransactionInfoType) HasDate() bool`

HasDate returns a boolean if a field has been set.

### GetProfileId

`func (o *PrepaidCardTransactionInfoType) GetProfileId() UniqueIDType`

GetProfileId returns the ProfileId field if non-nil, zero value otherwise.

### GetProfileIdOk

`func (o *PrepaidCardTransactionInfoType) GetProfileIdOk() (*UniqueIDType, bool)`

GetProfileIdOk returns a tuple with the ProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileId

`func (o *PrepaidCardTransactionInfoType) SetProfileId(v UniqueIDType)`

SetProfileId sets ProfileId field to given value.

### HasProfileId

`func (o *PrepaidCardTransactionInfoType) HasProfileId() bool`

HasProfileId returns a boolean if a field has been set.

### GetSource

`func (o *PrepaidCardTransactionInfoType) GetSource() PrepaidCardTransactionSourceType`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *PrepaidCardTransactionInfoType) GetSourceOk() (*PrepaidCardTransactionSourceType, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *PrepaidCardTransactionInfoType) SetSource(v PrepaidCardTransactionSourceType)`

SetSource sets Source field to given value.

### HasSource

`func (o *PrepaidCardTransactionInfoType) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetTransactionNo

`func (o *PrepaidCardTransactionInfoType) GetTransactionNo() int32`

GetTransactionNo returns the TransactionNo field if non-nil, zero value otherwise.

### GetTransactionNoOk

`func (o *PrepaidCardTransactionInfoType) GetTransactionNoOk() (*int32, bool)`

GetTransactionNoOk returns a tuple with the TransactionNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionNo

`func (o *PrepaidCardTransactionInfoType) SetTransactionNo(v int32)`

SetTransactionNo sets TransactionNo field to given value.

### HasTransactionNo

`func (o *PrepaidCardTransactionInfoType) HasTransactionNo() bool`

HasTransactionNo returns a boolean if a field has been set.

### GetType

`func (o *PrepaidCardTransactionInfoType) GetType() PrepaidCardTrxTypeType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *PrepaidCardTransactionInfoType) GetTypeOk() (*PrepaidCardTrxTypeType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *PrepaidCardTransactionInfoType) SetType(v PrepaidCardTrxTypeType)`

SetType sets Type field to given value.

### HasType

`func (o *PrepaidCardTransactionInfoType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetVendorTransactionNo

`func (o *PrepaidCardTransactionInfoType) GetVendorTransactionNo() string`

GetVendorTransactionNo returns the VendorTransactionNo field if non-nil, zero value otherwise.

### GetVendorTransactionNoOk

`func (o *PrepaidCardTransactionInfoType) GetVendorTransactionNoOk() (*string, bool)`

GetVendorTransactionNoOk returns a tuple with the VendorTransactionNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVendorTransactionNo

`func (o *PrepaidCardTransactionInfoType) SetVendorTransactionNo(v string)`

SetVendorTransactionNo sets VendorTransactionNo field to given value.

### HasVendorTransactionNo

`func (o *PrepaidCardTransactionInfoType) HasVendorTransactionNo() bool`

HasVendorTransactionNo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


