# ChangeTemplateDepositPolicyRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**TemplateDepositPolicy** | Pointer to [**ConfigDepositPolicyType**](ConfigDepositPolicyType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChangeTemplateDepositPolicyRequest

`func NewChangeTemplateDepositPolicyRequest() *ChangeTemplateDepositPolicyRequest`

NewChangeTemplateDepositPolicyRequest instantiates a new ChangeTemplateDepositPolicyRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeTemplateDepositPolicyRequestWithDefaults

`func NewChangeTemplateDepositPolicyRequestWithDefaults() *ChangeTemplateDepositPolicyRequest`

NewChangeTemplateDepositPolicyRequestWithDefaults instantiates a new ChangeTemplateDepositPolicyRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ChangeTemplateDepositPolicyRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeTemplateDepositPolicyRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeTemplateDepositPolicyRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeTemplateDepositPolicyRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTemplateDepositPolicy

`func (o *ChangeTemplateDepositPolicyRequest) GetTemplateDepositPolicy() ConfigDepositPolicyType`

GetTemplateDepositPolicy returns the TemplateDepositPolicy field if non-nil, zero value otherwise.

### GetTemplateDepositPolicyOk

`func (o *ChangeTemplateDepositPolicyRequest) GetTemplateDepositPolicyOk() (*ConfigDepositPolicyType, bool)`

GetTemplateDepositPolicyOk returns a tuple with the TemplateDepositPolicy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateDepositPolicy

`func (o *ChangeTemplateDepositPolicyRequest) SetTemplateDepositPolicy(v ConfigDepositPolicyType)`

SetTemplateDepositPolicy sets TemplateDepositPolicy field to given value.

### HasTemplateDepositPolicy

`func (o *ChangeTemplateDepositPolicyRequest) HasTemplateDepositPolicy() bool`

HasTemplateDepositPolicy returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeTemplateDepositPolicyRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeTemplateDepositPolicyRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeTemplateDepositPolicyRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeTemplateDepositPolicyRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


