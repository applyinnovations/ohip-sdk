# TemplateDepositPolicyToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TemplateDepositPolicy** | Pointer to [**ConfigDepositPolicyType**](ConfigDepositPolicyType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTemplateDepositPolicyToBeChanged

`func NewTemplateDepositPolicyToBeChanged() *TemplateDepositPolicyToBeChanged`

NewTemplateDepositPolicyToBeChanged instantiates a new TemplateDepositPolicyToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateDepositPolicyToBeChangedWithDefaults

`func NewTemplateDepositPolicyToBeChangedWithDefaults() *TemplateDepositPolicyToBeChanged`

NewTemplateDepositPolicyToBeChangedWithDefaults instantiates a new TemplateDepositPolicyToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTemplateDepositPolicy

`func (o *TemplateDepositPolicyToBeChanged) GetTemplateDepositPolicy() ConfigDepositPolicyType`

GetTemplateDepositPolicy returns the TemplateDepositPolicy field if non-nil, zero value otherwise.

### GetTemplateDepositPolicyOk

`func (o *TemplateDepositPolicyToBeChanged) GetTemplateDepositPolicyOk() (*ConfigDepositPolicyType, bool)`

GetTemplateDepositPolicyOk returns a tuple with the TemplateDepositPolicy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateDepositPolicy

`func (o *TemplateDepositPolicyToBeChanged) SetTemplateDepositPolicy(v ConfigDepositPolicyType)`

SetTemplateDepositPolicy sets TemplateDepositPolicy field to given value.

### HasTemplateDepositPolicy

`func (o *TemplateDepositPolicyToBeChanged) HasTemplateDepositPolicy() bool`

HasTemplateDepositPolicy returns a boolean if a field has been set.

### GetLinks

`func (o *TemplateDepositPolicyToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TemplateDepositPolicyToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TemplateDepositPolicyToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TemplateDepositPolicyToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *TemplateDepositPolicyToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TemplateDepositPolicyToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TemplateDepositPolicyToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TemplateDepositPolicyToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


