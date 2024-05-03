# TransactionType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TransactionCode** | Pointer to **string** | Transaction code. | [optional] 
**TransactionDate** | Pointer to **string** | Transaction date. | [optional] 
**TransactionDescription** | Pointer to **string** | Transaction description. | [optional] 
**TransactionNo** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 

## Methods

### NewTransactionType

`func NewTransactionType() *TransactionType`

NewTransactionType instantiates a new TransactionType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransactionTypeWithDefaults

`func NewTransactionTypeWithDefaults() *TransactionType`

NewTransactionTypeWithDefaults instantiates a new TransactionType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTransactionCode

`func (o *TransactionType) GetTransactionCode() string`

GetTransactionCode returns the TransactionCode field if non-nil, zero value otherwise.

### GetTransactionCodeOk

`func (o *TransactionType) GetTransactionCodeOk() (*string, bool)`

GetTransactionCodeOk returns a tuple with the TransactionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCode

`func (o *TransactionType) SetTransactionCode(v string)`

SetTransactionCode sets TransactionCode field to given value.

### HasTransactionCode

`func (o *TransactionType) HasTransactionCode() bool`

HasTransactionCode returns a boolean if a field has been set.

### GetTransactionDate

`func (o *TransactionType) GetTransactionDate() string`

GetTransactionDate returns the TransactionDate field if non-nil, zero value otherwise.

### GetTransactionDateOk

`func (o *TransactionType) GetTransactionDateOk() (*string, bool)`

GetTransactionDateOk returns a tuple with the TransactionDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionDate

`func (o *TransactionType) SetTransactionDate(v string)`

SetTransactionDate sets TransactionDate field to given value.

### HasTransactionDate

`func (o *TransactionType) HasTransactionDate() bool`

HasTransactionDate returns a boolean if a field has been set.

### GetTransactionDescription

`func (o *TransactionType) GetTransactionDescription() string`

GetTransactionDescription returns the TransactionDescription field if non-nil, zero value otherwise.

### GetTransactionDescriptionOk

`func (o *TransactionType) GetTransactionDescriptionOk() (*string, bool)`

GetTransactionDescriptionOk returns a tuple with the TransactionDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionDescription

`func (o *TransactionType) SetTransactionDescription(v string)`

SetTransactionDescription sets TransactionDescription field to given value.

### HasTransactionDescription

`func (o *TransactionType) HasTransactionDescription() bool`

HasTransactionDescription returns a boolean if a field has been set.

### GetTransactionNo

`func (o *TransactionType) GetTransactionNo() CodeDescriptionType`

GetTransactionNo returns the TransactionNo field if non-nil, zero value otherwise.

### GetTransactionNoOk

`func (o *TransactionType) GetTransactionNoOk() (*CodeDescriptionType, bool)`

GetTransactionNoOk returns a tuple with the TransactionNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionNo

`func (o *TransactionType) SetTransactionNo(v CodeDescriptionType)`

SetTransactionNo sets TransactionNo field to given value.

### HasTransactionNo

`func (o *TransactionType) HasTransactionNo() bool`

HasTransactionNo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


