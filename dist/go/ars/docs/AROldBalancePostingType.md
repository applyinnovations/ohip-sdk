# AROldBalancePostingType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountId** | Pointer to [**ARAccountCriteriaType**](ARAccountCriteriaType.md) |  | [optional] 
**Posting** | Pointer to [**AROldBalanceChargeType**](AROldBalanceChargeType.md) |  | [optional] 
**Aging** | Pointer to [**ARAgingInfoType**](ARAgingInfoType.md) |  | [optional] 
**CashierId** | Pointer to **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | [optional] 

## Methods

### NewAROldBalancePostingType

`func NewAROldBalancePostingType() *AROldBalancePostingType`

NewAROldBalancePostingType instantiates a new AROldBalancePostingType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAROldBalancePostingTypeWithDefaults

`func NewAROldBalancePostingTypeWithDefaults() *AROldBalancePostingType`

NewAROldBalancePostingTypeWithDefaults instantiates a new AROldBalancePostingType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountId

`func (o *AROldBalancePostingType) GetAccountId() ARAccountCriteriaType`

GetAccountId returns the AccountId field if non-nil, zero value otherwise.

### GetAccountIdOk

`func (o *AROldBalancePostingType) GetAccountIdOk() (*ARAccountCriteriaType, bool)`

GetAccountIdOk returns a tuple with the AccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountId

`func (o *AROldBalancePostingType) SetAccountId(v ARAccountCriteriaType)`

SetAccountId sets AccountId field to given value.

### HasAccountId

`func (o *AROldBalancePostingType) HasAccountId() bool`

HasAccountId returns a boolean if a field has been set.

### GetPosting

`func (o *AROldBalancePostingType) GetPosting() AROldBalanceChargeType`

GetPosting returns the Posting field if non-nil, zero value otherwise.

### GetPostingOk

`func (o *AROldBalancePostingType) GetPostingOk() (*AROldBalanceChargeType, bool)`

GetPostingOk returns a tuple with the Posting field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPosting

`func (o *AROldBalancePostingType) SetPosting(v AROldBalanceChargeType)`

SetPosting sets Posting field to given value.

### HasPosting

`func (o *AROldBalancePostingType) HasPosting() bool`

HasPosting returns a boolean if a field has been set.

### GetAging

`func (o *AROldBalancePostingType) GetAging() ARAgingInfoType`

GetAging returns the Aging field if non-nil, zero value otherwise.

### GetAgingOk

`func (o *AROldBalancePostingType) GetAgingOk() (*ARAgingInfoType, bool)`

GetAgingOk returns a tuple with the Aging field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAging

`func (o *AROldBalancePostingType) SetAging(v ARAgingInfoType)`

SetAging sets Aging field to given value.

### HasAging

`func (o *AROldBalancePostingType) HasAging() bool`

HasAging returns a boolean if a field has been set.

### GetCashierId

`func (o *AROldBalancePostingType) GetCashierId() float32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *AROldBalancePostingType) GetCashierIdOk() (*float32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *AROldBalancePostingType) SetCashierId(v float32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *AROldBalancePostingType) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


