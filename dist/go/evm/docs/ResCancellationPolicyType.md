# ResCancellationPolicyType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RevenueType** | Pointer to [**DepositCancelRevenueType**](DepositCancelRevenueType.md) |  | [optional] 
**Policy** | Pointer to [**ResCancelPenaltyType**](ResCancelPenaltyType.md) |  | [optional] 
**PercentageDue** | Pointer to **float32** | The percentage amount due for reservation cancellation. | [optional] 
**Comments** | Pointer to **string** | Comments attached with the reservation cancellation. | [optional] 
**PolicyId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 

## Methods

### NewResCancellationPolicyType

`func NewResCancellationPolicyType() *ResCancellationPolicyType`

NewResCancellationPolicyType instantiates a new ResCancellationPolicyType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResCancellationPolicyTypeWithDefaults

`func NewResCancellationPolicyTypeWithDefaults() *ResCancellationPolicyType`

NewResCancellationPolicyTypeWithDefaults instantiates a new ResCancellationPolicyType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRevenueType

`func (o *ResCancellationPolicyType) GetRevenueType() DepositCancelRevenueType`

GetRevenueType returns the RevenueType field if non-nil, zero value otherwise.

### GetRevenueTypeOk

`func (o *ResCancellationPolicyType) GetRevenueTypeOk() (*DepositCancelRevenueType, bool)`

GetRevenueTypeOk returns a tuple with the RevenueType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueType

`func (o *ResCancellationPolicyType) SetRevenueType(v DepositCancelRevenueType)`

SetRevenueType sets RevenueType field to given value.

### HasRevenueType

`func (o *ResCancellationPolicyType) HasRevenueType() bool`

HasRevenueType returns a boolean if a field has been set.

### GetPolicy

`func (o *ResCancellationPolicyType) GetPolicy() ResCancelPenaltyType`

GetPolicy returns the Policy field if non-nil, zero value otherwise.

### GetPolicyOk

`func (o *ResCancellationPolicyType) GetPolicyOk() (*ResCancelPenaltyType, bool)`

GetPolicyOk returns a tuple with the Policy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicy

`func (o *ResCancellationPolicyType) SetPolicy(v ResCancelPenaltyType)`

SetPolicy sets Policy field to given value.

### HasPolicy

`func (o *ResCancellationPolicyType) HasPolicy() bool`

HasPolicy returns a boolean if a field has been set.

### GetPercentageDue

`func (o *ResCancellationPolicyType) GetPercentageDue() float32`

GetPercentageDue returns the PercentageDue field if non-nil, zero value otherwise.

### GetPercentageDueOk

`func (o *ResCancellationPolicyType) GetPercentageDueOk() (*float32, bool)`

GetPercentageDueOk returns a tuple with the PercentageDue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPercentageDue

`func (o *ResCancellationPolicyType) SetPercentageDue(v float32)`

SetPercentageDue sets PercentageDue field to given value.

### HasPercentageDue

`func (o *ResCancellationPolicyType) HasPercentageDue() bool`

HasPercentageDue returns a boolean if a field has been set.

### GetComments

`func (o *ResCancellationPolicyType) GetComments() string`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *ResCancellationPolicyType) GetCommentsOk() (*string, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *ResCancellationPolicyType) SetComments(v string)`

SetComments sets Comments field to given value.

### HasComments

`func (o *ResCancellationPolicyType) HasComments() bool`

HasComments returns a boolean if a field has been set.

### GetPolicyId

`func (o *ResCancellationPolicyType) GetPolicyId() UniqueIDType`

GetPolicyId returns the PolicyId field if non-nil, zero value otherwise.

### GetPolicyIdOk

`func (o *ResCancellationPolicyType) GetPolicyIdOk() (*UniqueIDType, bool)`

GetPolicyIdOk returns a tuple with the PolicyId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicyId

`func (o *ResCancellationPolicyType) SetPolicyId(v UniqueIDType)`

SetPolicyId sets PolicyId field to given value.

### HasPolicyId

`func (o *ResCancellationPolicyType) HasPolicyId() bool`

HasPolicyId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


