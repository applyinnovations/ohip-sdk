# TransactionGroupType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to **string** | Description of the Transaction Group. | [optional] 
**Sequence** | Pointer to **int32** | Display sequence for the code type. | [optional] 
**Code** | Pointer to **string** | Transaction Group Configuration Code. | [optional] 
**Type** | Pointer to [**CashieringTransactionTypeType**](CashieringTransactionTypeType.md) |  | [optional] 

## Methods

### NewTransactionGroupType

`func NewTransactionGroupType() *TransactionGroupType`

NewTransactionGroupType instantiates a new TransactionGroupType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransactionGroupTypeWithDefaults

`func NewTransactionGroupTypeWithDefaults() *TransactionGroupType`

NewTransactionGroupTypeWithDefaults instantiates a new TransactionGroupType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *TransactionGroupType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *TransactionGroupType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *TransactionGroupType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *TransactionGroupType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetSequence

`func (o *TransactionGroupType) GetSequence() int32`

GetSequence returns the Sequence field if non-nil, zero value otherwise.

### GetSequenceOk

`func (o *TransactionGroupType) GetSequenceOk() (*int32, bool)`

GetSequenceOk returns a tuple with the Sequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequence

`func (o *TransactionGroupType) SetSequence(v int32)`

SetSequence sets Sequence field to given value.

### HasSequence

`func (o *TransactionGroupType) HasSequence() bool`

HasSequence returns a boolean if a field has been set.

### GetCode

`func (o *TransactionGroupType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *TransactionGroupType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *TransactionGroupType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *TransactionGroupType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetType

`func (o *TransactionGroupType) GetType() CashieringTransactionTypeType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *TransactionGroupType) GetTypeOk() (*CashieringTransactionTypeType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *TransactionGroupType) SetType(v CashieringTransactionTypeType)`

SetType sets Type field to given value.

### HasType

`func (o *TransactionGroupType) HasType() bool`

HasType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


