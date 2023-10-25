# PostReverseDepositPolicyRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Policy** | Pointer to [**ReservationReversePolicyCriteriaType**](ReservationReversePolicyCriteriaType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostReverseDepositPolicyRequest

`func NewPostReverseDepositPolicyRequest() *PostReverseDepositPolicyRequest`

NewPostReverseDepositPolicyRequest instantiates a new PostReverseDepositPolicyRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostReverseDepositPolicyRequestWithDefaults

`func NewPostReverseDepositPolicyRequestWithDefaults() *PostReverseDepositPolicyRequest`

NewPostReverseDepositPolicyRequestWithDefaults instantiates a new PostReverseDepositPolicyRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PostReverseDepositPolicyRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostReverseDepositPolicyRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostReverseDepositPolicyRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostReverseDepositPolicyRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetPolicy

`func (o *PostReverseDepositPolicyRequest) GetPolicy() ReservationReversePolicyCriteriaType`

GetPolicy returns the Policy field if non-nil, zero value otherwise.

### GetPolicyOk

`func (o *PostReverseDepositPolicyRequest) GetPolicyOk() (*ReservationReversePolicyCriteriaType, bool)`

GetPolicyOk returns a tuple with the Policy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicy

`func (o *PostReverseDepositPolicyRequest) SetPolicy(v ReservationReversePolicyCriteriaType)`

SetPolicy sets Policy field to given value.

### HasPolicy

`func (o *PostReverseDepositPolicyRequest) HasPolicy() bool`

HasPolicy returns a boolean if a field has been set.

### GetWarnings

`func (o *PostReverseDepositPolicyRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostReverseDepositPolicyRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostReverseDepositPolicyRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostReverseDepositPolicyRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


