# GuaranteePolicyTypeDepositPolicy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RevenueType** | Pointer to [**DepositCancelRevenueType**](DepositCancelRevenueType.md) |  | [optional] 
**Policy** | Pointer to [**DepositPolicyType**](DepositPolicyType.md) |  | [optional] 
**Comments** | Pointer to **string** | Comments attached with a deposit. | [optional] 
**AmountPaid** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**AmountDue** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**PolicyId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**EstimatedAmount** | Pointer to **float32** | Message. | [optional] 

## Methods

### NewGuaranteePolicyTypeDepositPolicy

`func NewGuaranteePolicyTypeDepositPolicy() *GuaranteePolicyTypeDepositPolicy`

NewGuaranteePolicyTypeDepositPolicy instantiates a new GuaranteePolicyTypeDepositPolicy object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGuaranteePolicyTypeDepositPolicyWithDefaults

`func NewGuaranteePolicyTypeDepositPolicyWithDefaults() *GuaranteePolicyTypeDepositPolicy`

NewGuaranteePolicyTypeDepositPolicyWithDefaults instantiates a new GuaranteePolicyTypeDepositPolicy object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRevenueType

`func (o *GuaranteePolicyTypeDepositPolicy) GetRevenueType() DepositCancelRevenueType`

GetRevenueType returns the RevenueType field if non-nil, zero value otherwise.

### GetRevenueTypeOk

`func (o *GuaranteePolicyTypeDepositPolicy) GetRevenueTypeOk() (*DepositCancelRevenueType, bool)`

GetRevenueTypeOk returns a tuple with the RevenueType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueType

`func (o *GuaranteePolicyTypeDepositPolicy) SetRevenueType(v DepositCancelRevenueType)`

SetRevenueType sets RevenueType field to given value.

### HasRevenueType

`func (o *GuaranteePolicyTypeDepositPolicy) HasRevenueType() bool`

HasRevenueType returns a boolean if a field has been set.

### GetPolicy

`func (o *GuaranteePolicyTypeDepositPolicy) GetPolicy() DepositPolicyType`

GetPolicy returns the Policy field if non-nil, zero value otherwise.

### GetPolicyOk

`func (o *GuaranteePolicyTypeDepositPolicy) GetPolicyOk() (*DepositPolicyType, bool)`

GetPolicyOk returns a tuple with the Policy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicy

`func (o *GuaranteePolicyTypeDepositPolicy) SetPolicy(v DepositPolicyType)`

SetPolicy sets Policy field to given value.

### HasPolicy

`func (o *GuaranteePolicyTypeDepositPolicy) HasPolicy() bool`

HasPolicy returns a boolean if a field has been set.

### GetComments

`func (o *GuaranteePolicyTypeDepositPolicy) GetComments() string`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *GuaranteePolicyTypeDepositPolicy) GetCommentsOk() (*string, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *GuaranteePolicyTypeDepositPolicy) SetComments(v string)`

SetComments sets Comments field to given value.

### HasComments

`func (o *GuaranteePolicyTypeDepositPolicy) HasComments() bool`

HasComments returns a boolean if a field has been set.

### GetAmountPaid

`func (o *GuaranteePolicyTypeDepositPolicy) GetAmountPaid() CurrencyAmountType`

GetAmountPaid returns the AmountPaid field if non-nil, zero value otherwise.

### GetAmountPaidOk

`func (o *GuaranteePolicyTypeDepositPolicy) GetAmountPaidOk() (*CurrencyAmountType, bool)`

GetAmountPaidOk returns a tuple with the AmountPaid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmountPaid

`func (o *GuaranteePolicyTypeDepositPolicy) SetAmountPaid(v CurrencyAmountType)`

SetAmountPaid sets AmountPaid field to given value.

### HasAmountPaid

`func (o *GuaranteePolicyTypeDepositPolicy) HasAmountPaid() bool`

HasAmountPaid returns a boolean if a field has been set.

### GetAmountDue

`func (o *GuaranteePolicyTypeDepositPolicy) GetAmountDue() CurrencyAmountType`

GetAmountDue returns the AmountDue field if non-nil, zero value otherwise.

### GetAmountDueOk

`func (o *GuaranteePolicyTypeDepositPolicy) GetAmountDueOk() (*CurrencyAmountType, bool)`

GetAmountDueOk returns a tuple with the AmountDue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmountDue

`func (o *GuaranteePolicyTypeDepositPolicy) SetAmountDue(v CurrencyAmountType)`

SetAmountDue sets AmountDue field to given value.

### HasAmountDue

`func (o *GuaranteePolicyTypeDepositPolicy) HasAmountDue() bool`

HasAmountDue returns a boolean if a field has been set.

### GetPolicyId

`func (o *GuaranteePolicyTypeDepositPolicy) GetPolicyId() UniqueIDType`

GetPolicyId returns the PolicyId field if non-nil, zero value otherwise.

### GetPolicyIdOk

`func (o *GuaranteePolicyTypeDepositPolicy) GetPolicyIdOk() (*UniqueIDType, bool)`

GetPolicyIdOk returns a tuple with the PolicyId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicyId

`func (o *GuaranteePolicyTypeDepositPolicy) SetPolicyId(v UniqueIDType)`

SetPolicyId sets PolicyId field to given value.

### HasPolicyId

`func (o *GuaranteePolicyTypeDepositPolicy) HasPolicyId() bool`

HasPolicyId returns a boolean if a field has been set.

### GetEstimatedAmount

`func (o *GuaranteePolicyTypeDepositPolicy) GetEstimatedAmount() float32`

GetEstimatedAmount returns the EstimatedAmount field if non-nil, zero value otherwise.

### GetEstimatedAmountOk

`func (o *GuaranteePolicyTypeDepositPolicy) GetEstimatedAmountOk() (*float32, bool)`

GetEstimatedAmountOk returns a tuple with the EstimatedAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEstimatedAmount

`func (o *GuaranteePolicyTypeDepositPolicy) SetEstimatedAmount(v float32)`

SetEstimatedAmount sets EstimatedAmount field to given value.

### HasEstimatedAmount

`func (o *GuaranteePolicyTypeDepositPolicy) HasEstimatedAmount() bool`

HasEstimatedAmount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


