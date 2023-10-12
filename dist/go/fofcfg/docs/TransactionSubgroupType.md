# TransactionSubgroupType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to **string** | Description of the Transaction Subgroup. | [optional] 
**Sequence** | Pointer to **int32** | Display sequence for the code type. | [optional] 
**GroupDescription** | Pointer to **string** | Description of the Transaction Group. | [optional] 
**Code** | Pointer to **string** | Transaction Subroup Configuration Code. | [optional] 
**Group** | Pointer to **string** | Transaction Group Configuration Code. | [optional] 
**NewGroup** | Pointer to **string** | Use this attribute to update the existing group during change operation. | [optional] 
**Type** | Pointer to [**CashieringTransactionTypeType**](CashieringTransactionTypeType.md) |  | [optional] 

## Methods

### NewTransactionSubgroupType

`func NewTransactionSubgroupType() *TransactionSubgroupType`

NewTransactionSubgroupType instantiates a new TransactionSubgroupType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransactionSubgroupTypeWithDefaults

`func NewTransactionSubgroupTypeWithDefaults() *TransactionSubgroupType`

NewTransactionSubgroupTypeWithDefaults instantiates a new TransactionSubgroupType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *TransactionSubgroupType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *TransactionSubgroupType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *TransactionSubgroupType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *TransactionSubgroupType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetSequence

`func (o *TransactionSubgroupType) GetSequence() int32`

GetSequence returns the Sequence field if non-nil, zero value otherwise.

### GetSequenceOk

`func (o *TransactionSubgroupType) GetSequenceOk() (*int32, bool)`

GetSequenceOk returns a tuple with the Sequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequence

`func (o *TransactionSubgroupType) SetSequence(v int32)`

SetSequence sets Sequence field to given value.

### HasSequence

`func (o *TransactionSubgroupType) HasSequence() bool`

HasSequence returns a boolean if a field has been set.

### GetGroupDescription

`func (o *TransactionSubgroupType) GetGroupDescription() string`

GetGroupDescription returns the GroupDescription field if non-nil, zero value otherwise.

### GetGroupDescriptionOk

`func (o *TransactionSubgroupType) GetGroupDescriptionOk() (*string, bool)`

GetGroupDescriptionOk returns a tuple with the GroupDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroupDescription

`func (o *TransactionSubgroupType) SetGroupDescription(v string)`

SetGroupDescription sets GroupDescription field to given value.

### HasGroupDescription

`func (o *TransactionSubgroupType) HasGroupDescription() bool`

HasGroupDescription returns a boolean if a field has been set.

### GetCode

`func (o *TransactionSubgroupType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *TransactionSubgroupType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *TransactionSubgroupType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *TransactionSubgroupType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetGroup

`func (o *TransactionSubgroupType) GetGroup() string`

GetGroup returns the Group field if non-nil, zero value otherwise.

### GetGroupOk

`func (o *TransactionSubgroupType) GetGroupOk() (*string, bool)`

GetGroupOk returns a tuple with the Group field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroup

`func (o *TransactionSubgroupType) SetGroup(v string)`

SetGroup sets Group field to given value.

### HasGroup

`func (o *TransactionSubgroupType) HasGroup() bool`

HasGroup returns a boolean if a field has been set.

### GetNewGroup

`func (o *TransactionSubgroupType) GetNewGroup() string`

GetNewGroup returns the NewGroup field if non-nil, zero value otherwise.

### GetNewGroupOk

`func (o *TransactionSubgroupType) GetNewGroupOk() (*string, bool)`

GetNewGroupOk returns a tuple with the NewGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewGroup

`func (o *TransactionSubgroupType) SetNewGroup(v string)`

SetNewGroup sets NewGroup field to given value.

### HasNewGroup

`func (o *TransactionSubgroupType) HasNewGroup() bool`

HasNewGroup returns a boolean if a field has been set.

### GetType

`func (o *TransactionSubgroupType) GetType() CashieringTransactionTypeType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *TransactionSubgroupType) GetTypeOk() (*CashieringTransactionTypeType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *TransactionSubgroupType) SetType(v CashieringTransactionTypeType)`

SetType sets Type field to given value.

### HasType

`func (o *TransactionSubgroupType) HasType() bool`

HasType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


