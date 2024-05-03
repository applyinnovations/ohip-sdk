# TemplateMarketCodeCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**TemplateMarketCode** | Pointer to [**TemplateMarketCodeType**](TemplateMarketCodeType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTemplateMarketCodeCriteria

`func NewTemplateMarketCodeCriteria() *TemplateMarketCodeCriteria`

NewTemplateMarketCodeCriteria instantiates a new TemplateMarketCodeCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateMarketCodeCriteriaWithDefaults

`func NewTemplateMarketCodeCriteriaWithDefaults() *TemplateMarketCodeCriteria`

NewTemplateMarketCodeCriteriaWithDefaults instantiates a new TemplateMarketCodeCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *TemplateMarketCodeCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TemplateMarketCodeCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TemplateMarketCodeCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TemplateMarketCodeCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTemplateMarketCode

`func (o *TemplateMarketCodeCriteria) GetTemplateMarketCode() TemplateMarketCodeType`

GetTemplateMarketCode returns the TemplateMarketCode field if non-nil, zero value otherwise.

### GetTemplateMarketCodeOk

`func (o *TemplateMarketCodeCriteria) GetTemplateMarketCodeOk() (*TemplateMarketCodeType, bool)`

GetTemplateMarketCodeOk returns a tuple with the TemplateMarketCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateMarketCode

`func (o *TemplateMarketCodeCriteria) SetTemplateMarketCode(v TemplateMarketCodeType)`

SetTemplateMarketCode sets TemplateMarketCode field to given value.

### HasTemplateMarketCode

`func (o *TemplateMarketCodeCriteria) HasTemplateMarketCode() bool`

HasTemplateMarketCode returns a boolean if a field has been set.

### GetWarnings

`func (o *TemplateMarketCodeCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TemplateMarketCodeCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TemplateMarketCodeCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TemplateMarketCodeCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


