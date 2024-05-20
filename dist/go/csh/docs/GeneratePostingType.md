# GeneratePostingType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Amount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**ReferenceTransactionNo** | Pointer to **float32** | Generate transaction number for the Posting. | [optional] 
**TransactionCode** | Pointer to **string** | Unique identifier for the Transaction code. | [optional] 
**TransactionDate** | Pointer to **string** | Transaction Date. | [optional] 
**TransactionNo** | Pointer to **float32** | Transaction Number for which request is being submitted. | [optional] 

## Methods

### NewGeneratePostingType

`func NewGeneratePostingType() *GeneratePostingType`

NewGeneratePostingType instantiates a new GeneratePostingType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGeneratePostingTypeWithDefaults

`func NewGeneratePostingTypeWithDefaults() *GeneratePostingType`

NewGeneratePostingTypeWithDefaults instantiates a new GeneratePostingType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmount

`func (o *GeneratePostingType) GetAmount() CurrencyAmountType`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *GeneratePostingType) GetAmountOk() (*CurrencyAmountType, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *GeneratePostingType) SetAmount(v CurrencyAmountType)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *GeneratePostingType) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetReferenceTransactionNo

`func (o *GeneratePostingType) GetReferenceTransactionNo() float32`

GetReferenceTransactionNo returns the ReferenceTransactionNo field if non-nil, zero value otherwise.

### GetReferenceTransactionNoOk

`func (o *GeneratePostingType) GetReferenceTransactionNoOk() (*float32, bool)`

GetReferenceTransactionNoOk returns a tuple with the ReferenceTransactionNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReferenceTransactionNo

`func (o *GeneratePostingType) SetReferenceTransactionNo(v float32)`

SetReferenceTransactionNo sets ReferenceTransactionNo field to given value.

### HasReferenceTransactionNo

`func (o *GeneratePostingType) HasReferenceTransactionNo() bool`

HasReferenceTransactionNo returns a boolean if a field has been set.

### GetTransactionCode

`func (o *GeneratePostingType) GetTransactionCode() string`

GetTransactionCode returns the TransactionCode field if non-nil, zero value otherwise.

### GetTransactionCodeOk

`func (o *GeneratePostingType) GetTransactionCodeOk() (*string, bool)`

GetTransactionCodeOk returns a tuple with the TransactionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCode

`func (o *GeneratePostingType) SetTransactionCode(v string)`

SetTransactionCode sets TransactionCode field to given value.

### HasTransactionCode

`func (o *GeneratePostingType) HasTransactionCode() bool`

HasTransactionCode returns a boolean if a field has been set.

### GetTransactionDate

`func (o *GeneratePostingType) GetTransactionDate() string`

GetTransactionDate returns the TransactionDate field if non-nil, zero value otherwise.

### GetTransactionDateOk

`func (o *GeneratePostingType) GetTransactionDateOk() (*string, bool)`

GetTransactionDateOk returns a tuple with the TransactionDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionDate

`func (o *GeneratePostingType) SetTransactionDate(v string)`

SetTransactionDate sets TransactionDate field to given value.

### HasTransactionDate

`func (o *GeneratePostingType) HasTransactionDate() bool`

HasTransactionDate returns a boolean if a field has been set.

### GetTransactionNo

`func (o *GeneratePostingType) GetTransactionNo() float32`

GetTransactionNo returns the TransactionNo field if non-nil, zero value otherwise.

### GetTransactionNoOk

`func (o *GeneratePostingType) GetTransactionNoOk() (*float32, bool)`

GetTransactionNoOk returns a tuple with the TransactionNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionNo

`func (o *GeneratePostingType) SetTransactionNo(v float32)`

SetTransactionNo sets TransactionNo field to given value.

### HasTransactionNo

`func (o *GeneratePostingType) HasTransactionNo() bool`

HasTransactionNo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


