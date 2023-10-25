# CopyUpsellRulesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**UpsellRules** | Pointer to [**[]CopyConfigurationCodeType**](CopyConfigurationCodeType.md) | List of the upsell rules to be copied to hotel code(s). | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCopyUpsellRulesRequest

`func NewCopyUpsellRulesRequest() *CopyUpsellRulesRequest`

NewCopyUpsellRulesRequest instantiates a new CopyUpsellRulesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopyUpsellRulesRequestWithDefaults

`func NewCopyUpsellRulesRequestWithDefaults() *CopyUpsellRulesRequest`

NewCopyUpsellRulesRequestWithDefaults instantiates a new CopyUpsellRulesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUpsellRules

`func (o *CopyUpsellRulesRequest) GetUpsellRules() []CopyConfigurationCodeType`

GetUpsellRules returns the UpsellRules field if non-nil, zero value otherwise.

### GetUpsellRulesOk

`func (o *CopyUpsellRulesRequest) GetUpsellRulesOk() (*[]CopyConfigurationCodeType, bool)`

GetUpsellRulesOk returns a tuple with the UpsellRules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpsellRules

`func (o *CopyUpsellRulesRequest) SetUpsellRules(v []CopyConfigurationCodeType)`

SetUpsellRules sets UpsellRules field to given value.

### HasUpsellRules

`func (o *CopyUpsellRulesRequest) HasUpsellRules() bool`

HasUpsellRules returns a boolean if a field has been set.

### GetLinks

`func (o *CopyUpsellRulesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CopyUpsellRulesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CopyUpsellRulesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CopyUpsellRulesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CopyUpsellRulesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CopyUpsellRulesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CopyUpsellRulesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CopyUpsellRulesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


