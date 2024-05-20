# TemplateCancellationPolicyDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**TemplateCancelPenaltyConfigs** | Pointer to [**[]ConfigCancelPenaltyType**](ConfigCancelPenaltyType.md) | Collection of template Cancel Penalty rules. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTemplateCancellationPolicyDetails

`func NewTemplateCancellationPolicyDetails() *TemplateCancellationPolicyDetails`

NewTemplateCancellationPolicyDetails instantiates a new TemplateCancellationPolicyDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateCancellationPolicyDetailsWithDefaults

`func NewTemplateCancellationPolicyDetailsWithDefaults() *TemplateCancellationPolicyDetails`

NewTemplateCancellationPolicyDetailsWithDefaults instantiates a new TemplateCancellationPolicyDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *TemplateCancellationPolicyDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TemplateCancellationPolicyDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TemplateCancellationPolicyDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TemplateCancellationPolicyDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTemplateCancelPenaltyConfigs

`func (o *TemplateCancellationPolicyDetails) GetTemplateCancelPenaltyConfigs() []ConfigCancelPenaltyType`

GetTemplateCancelPenaltyConfigs returns the TemplateCancelPenaltyConfigs field if non-nil, zero value otherwise.

### GetTemplateCancelPenaltyConfigsOk

`func (o *TemplateCancellationPolicyDetails) GetTemplateCancelPenaltyConfigsOk() (*[]ConfigCancelPenaltyType, bool)`

GetTemplateCancelPenaltyConfigsOk returns a tuple with the TemplateCancelPenaltyConfigs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateCancelPenaltyConfigs

`func (o *TemplateCancellationPolicyDetails) SetTemplateCancelPenaltyConfigs(v []ConfigCancelPenaltyType)`

SetTemplateCancelPenaltyConfigs sets TemplateCancelPenaltyConfigs field to given value.

### HasTemplateCancelPenaltyConfigs

`func (o *TemplateCancellationPolicyDetails) HasTemplateCancelPenaltyConfigs() bool`

HasTemplateCancelPenaltyConfigs returns a boolean if a field has been set.

### GetWarnings

`func (o *TemplateCancellationPolicyDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TemplateCancellationPolicyDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TemplateCancellationPolicyDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TemplateCancellationPolicyDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


