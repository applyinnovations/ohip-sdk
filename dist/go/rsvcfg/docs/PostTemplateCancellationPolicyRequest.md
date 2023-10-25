# PostTemplateCancellationPolicyRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**TemplateCancelPenalty** | Pointer to [**ConfigCancelPenaltyType**](ConfigCancelPenaltyType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostTemplateCancellationPolicyRequest

`func NewPostTemplateCancellationPolicyRequest() *PostTemplateCancellationPolicyRequest`

NewPostTemplateCancellationPolicyRequest instantiates a new PostTemplateCancellationPolicyRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostTemplateCancellationPolicyRequestWithDefaults

`func NewPostTemplateCancellationPolicyRequestWithDefaults() *PostTemplateCancellationPolicyRequest`

NewPostTemplateCancellationPolicyRequestWithDefaults instantiates a new PostTemplateCancellationPolicyRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PostTemplateCancellationPolicyRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostTemplateCancellationPolicyRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostTemplateCancellationPolicyRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostTemplateCancellationPolicyRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTemplateCancelPenalty

`func (o *PostTemplateCancellationPolicyRequest) GetTemplateCancelPenalty() ConfigCancelPenaltyType`

GetTemplateCancelPenalty returns the TemplateCancelPenalty field if non-nil, zero value otherwise.

### GetTemplateCancelPenaltyOk

`func (o *PostTemplateCancellationPolicyRequest) GetTemplateCancelPenaltyOk() (*ConfigCancelPenaltyType, bool)`

GetTemplateCancelPenaltyOk returns a tuple with the TemplateCancelPenalty field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateCancelPenalty

`func (o *PostTemplateCancellationPolicyRequest) SetTemplateCancelPenalty(v ConfigCancelPenaltyType)`

SetTemplateCancelPenalty sets TemplateCancelPenalty field to given value.

### HasTemplateCancelPenalty

`func (o *PostTemplateCancellationPolicyRequest) HasTemplateCancelPenalty() bool`

HasTemplateCancelPenalty returns a boolean if a field has been set.

### GetWarnings

`func (o *PostTemplateCancellationPolicyRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostTemplateCancellationPolicyRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostTemplateCancellationPolicyRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostTemplateCancellationPolicyRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


