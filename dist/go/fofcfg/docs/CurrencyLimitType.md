# CurrencyLimitType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Amount** | Pointer to **float32** | Indicates the curresponding limit for amount. | [optional] 
**CurrencyType** | Pointer to [**CurrencyHandlingType**](CurrencyHandlingType.md) |  | [optional] 
**PostingLimit** | Pointer to [**PostingLimitType**](PostingLimitType.md) |  | [optional] 

## Methods

### NewCurrencyLimitType

`func NewCurrencyLimitType() *CurrencyLimitType`

NewCurrencyLimitType instantiates a new CurrencyLimitType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCurrencyLimitTypeWithDefaults

`func NewCurrencyLimitTypeWithDefaults() *CurrencyLimitType`

NewCurrencyLimitTypeWithDefaults instantiates a new CurrencyLimitType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmount

`func (o *CurrencyLimitType) GetAmount() float32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *CurrencyLimitType) GetAmountOk() (*float32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *CurrencyLimitType) SetAmount(v float32)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *CurrencyLimitType) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetCurrencyType

`func (o *CurrencyLimitType) GetCurrencyType() CurrencyHandlingType`

GetCurrencyType returns the CurrencyType field if non-nil, zero value otherwise.

### GetCurrencyTypeOk

`func (o *CurrencyLimitType) GetCurrencyTypeOk() (*CurrencyHandlingType, bool)`

GetCurrencyTypeOk returns a tuple with the CurrencyType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencyType

`func (o *CurrencyLimitType) SetCurrencyType(v CurrencyHandlingType)`

SetCurrencyType sets CurrencyType field to given value.

### HasCurrencyType

`func (o *CurrencyLimitType) HasCurrencyType() bool`

HasCurrencyType returns a boolean if a field has been set.

### GetPostingLimit

`func (o *CurrencyLimitType) GetPostingLimit() PostingLimitType`

GetPostingLimit returns the PostingLimit field if non-nil, zero value otherwise.

### GetPostingLimitOk

`func (o *CurrencyLimitType) GetPostingLimitOk() (*PostingLimitType, bool)`

GetPostingLimitOk returns a tuple with the PostingLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostingLimit

`func (o *CurrencyLimitType) SetPostingLimit(v PostingLimitType)`

SetPostingLimit sets PostingLimit field to given value.

### HasPostingLimit

`func (o *CurrencyLimitType) HasPostingLimit() bool`

HasPostingLimit returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


