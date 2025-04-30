# TrxCodeClassificationType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to [**CashieringTransactionTypeType**](CashieringTransactionTypeType.md) |  | [optional] 
**TransactionType** | Pointer to [**TrxCodeClassificationTypeTransactionType**](TrxCodeClassificationTypeTransactionType.md) |  | [optional] 
**Group** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**Subgroup** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**FiscalTransactionType** | Pointer to **string** | Transaction code type for fiscal printing purposes. | [optional] 

## Methods

### NewTrxCodeClassificationType

`func NewTrxCodeClassificationType() *TrxCodeClassificationType`

NewTrxCodeClassificationType instantiates a new TrxCodeClassificationType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTrxCodeClassificationTypeWithDefaults

`func NewTrxCodeClassificationTypeWithDefaults() *TrxCodeClassificationType`

NewTrxCodeClassificationTypeWithDefaults instantiates a new TrxCodeClassificationType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *TrxCodeClassificationType) GetType() CashieringTransactionTypeType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *TrxCodeClassificationType) GetTypeOk() (*CashieringTransactionTypeType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *TrxCodeClassificationType) SetType(v CashieringTransactionTypeType)`

SetType sets Type field to given value.

### HasType

`func (o *TrxCodeClassificationType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetTransactionType

`func (o *TrxCodeClassificationType) GetTransactionType() TrxCodeClassificationTypeTransactionType`

GetTransactionType returns the TransactionType field if non-nil, zero value otherwise.

### GetTransactionTypeOk

`func (o *TrxCodeClassificationType) GetTransactionTypeOk() (*TrxCodeClassificationTypeTransactionType, bool)`

GetTransactionTypeOk returns a tuple with the TransactionType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionType

`func (o *TrxCodeClassificationType) SetTransactionType(v TrxCodeClassificationTypeTransactionType)`

SetTransactionType sets TransactionType field to given value.

### HasTransactionType

`func (o *TrxCodeClassificationType) HasTransactionType() bool`

HasTransactionType returns a boolean if a field has been set.

### GetGroup

`func (o *TrxCodeClassificationType) GetGroup() CodeDescriptionType`

GetGroup returns the Group field if non-nil, zero value otherwise.

### GetGroupOk

`func (o *TrxCodeClassificationType) GetGroupOk() (*CodeDescriptionType, bool)`

GetGroupOk returns a tuple with the Group field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroup

`func (o *TrxCodeClassificationType) SetGroup(v CodeDescriptionType)`

SetGroup sets Group field to given value.

### HasGroup

`func (o *TrxCodeClassificationType) HasGroup() bool`

HasGroup returns a boolean if a field has been set.

### GetSubgroup

`func (o *TrxCodeClassificationType) GetSubgroup() CodeDescriptionType`

GetSubgroup returns the Subgroup field if non-nil, zero value otherwise.

### GetSubgroupOk

`func (o *TrxCodeClassificationType) GetSubgroupOk() (*CodeDescriptionType, bool)`

GetSubgroupOk returns a tuple with the Subgroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubgroup

`func (o *TrxCodeClassificationType) SetSubgroup(v CodeDescriptionType)`

SetSubgroup sets Subgroup field to given value.

### HasSubgroup

`func (o *TrxCodeClassificationType) HasSubgroup() bool`

HasSubgroup returns a boolean if a field has been set.

### GetFiscalTransactionType

`func (o *TrxCodeClassificationType) GetFiscalTransactionType() string`

GetFiscalTransactionType returns the FiscalTransactionType field if non-nil, zero value otherwise.

### GetFiscalTransactionTypeOk

`func (o *TrxCodeClassificationType) GetFiscalTransactionTypeOk() (*string, bool)`

GetFiscalTransactionTypeOk returns a tuple with the FiscalTransactionType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiscalTransactionType

`func (o *TrxCodeClassificationType) SetFiscalTransactionType(v string)`

SetFiscalTransactionType sets FiscalTransactionType field to given value.

### HasFiscalTransactionType

`func (o *TrxCodeClassificationType) HasFiscalTransactionType() bool`

HasFiscalTransactionType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


