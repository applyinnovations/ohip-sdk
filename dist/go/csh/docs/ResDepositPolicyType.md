# ResDepositPolicyType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AmountDue** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**AmountPaid** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Comments** | Pointer to **string** | Comments attached with a deposit. | [optional] 
**Policy** | Pointer to [**DepositPolicyType**](DepositPolicyType.md) |  | [optional] 
**PolicyId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**RevenueType** | Pointer to [**DepositCancelRevenueType**](DepositCancelRevenueType.md) |  | [optional] 

## Methods

### NewResDepositPolicyType

`func NewResDepositPolicyType() *ResDepositPolicyType`

NewResDepositPolicyType instantiates a new ResDepositPolicyType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResDepositPolicyTypeWithDefaults

`func NewResDepositPolicyTypeWithDefaults() *ResDepositPolicyType`

NewResDepositPolicyTypeWithDefaults instantiates a new ResDepositPolicyType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmountDue

`func (o *ResDepositPolicyType) GetAmountDue() CurrencyAmountType`

GetAmountDue returns the AmountDue field if non-nil, zero value otherwise.

### GetAmountDueOk

`func (o *ResDepositPolicyType) GetAmountDueOk() (*CurrencyAmountType, bool)`

GetAmountDueOk returns a tuple with the AmountDue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmountDue

`func (o *ResDepositPolicyType) SetAmountDue(v CurrencyAmountType)`

SetAmountDue sets AmountDue field to given value.

### HasAmountDue

`func (o *ResDepositPolicyType) HasAmountDue() bool`

HasAmountDue returns a boolean if a field has been set.

### GetAmountPaid

`func (o *ResDepositPolicyType) GetAmountPaid() CurrencyAmountType`

GetAmountPaid returns the AmountPaid field if non-nil, zero value otherwise.

### GetAmountPaidOk

`func (o *ResDepositPolicyType) GetAmountPaidOk() (*CurrencyAmountType, bool)`

GetAmountPaidOk returns a tuple with the AmountPaid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmountPaid

`func (o *ResDepositPolicyType) SetAmountPaid(v CurrencyAmountType)`

SetAmountPaid sets AmountPaid field to given value.

### HasAmountPaid

`func (o *ResDepositPolicyType) HasAmountPaid() bool`

HasAmountPaid returns a boolean if a field has been set.

### GetComments

`func (o *ResDepositPolicyType) GetComments() string`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *ResDepositPolicyType) GetCommentsOk() (*string, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *ResDepositPolicyType) SetComments(v string)`

SetComments sets Comments field to given value.

### HasComments

`func (o *ResDepositPolicyType) HasComments() bool`

HasComments returns a boolean if a field has been set.

### GetPolicy

`func (o *ResDepositPolicyType) GetPolicy() DepositPolicyType`

GetPolicy returns the Policy field if non-nil, zero value otherwise.

### GetPolicyOk

`func (o *ResDepositPolicyType) GetPolicyOk() (*DepositPolicyType, bool)`

GetPolicyOk returns a tuple with the Policy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicy

`func (o *ResDepositPolicyType) SetPolicy(v DepositPolicyType)`

SetPolicy sets Policy field to given value.

### HasPolicy

`func (o *ResDepositPolicyType) HasPolicy() bool`

HasPolicy returns a boolean if a field has been set.

### GetPolicyId

`func (o *ResDepositPolicyType) GetPolicyId() UniqueIDType`

GetPolicyId returns the PolicyId field if non-nil, zero value otherwise.

### GetPolicyIdOk

`func (o *ResDepositPolicyType) GetPolicyIdOk() (*UniqueIDType, bool)`

GetPolicyIdOk returns a tuple with the PolicyId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicyId

`func (o *ResDepositPolicyType) SetPolicyId(v UniqueIDType)`

SetPolicyId sets PolicyId field to given value.

### HasPolicyId

`func (o *ResDepositPolicyType) HasPolicyId() bool`

HasPolicyId returns a boolean if a field has been set.

### GetRevenueType

`func (o *ResDepositPolicyType) GetRevenueType() DepositCancelRevenueType`

GetRevenueType returns the RevenueType field if non-nil, zero value otherwise.

### GetRevenueTypeOk

`func (o *ResDepositPolicyType) GetRevenueTypeOk() (*DepositCancelRevenueType, bool)`

GetRevenueTypeOk returns a tuple with the RevenueType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueType

`func (o *ResDepositPolicyType) SetRevenueType(v DepositCancelRevenueType)`

SetRevenueType sets RevenueType field to given value.

### HasRevenueType

`func (o *ResDepositPolicyType) HasRevenueType() bool`

HasRevenueType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


