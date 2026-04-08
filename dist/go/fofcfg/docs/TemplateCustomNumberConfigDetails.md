# TemplateCustomNumberConfigDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CustomNumberConfigurationList** | Pointer to [**[]CustomNumberTemplateConfigurationType**](CustomNumberTemplateConfigurationType.md) | Details about template custom number configuration. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTemplateCustomNumberConfigDetails

`func NewTemplateCustomNumberConfigDetails() *TemplateCustomNumberConfigDetails`

NewTemplateCustomNumberConfigDetails instantiates a new TemplateCustomNumberConfigDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateCustomNumberConfigDetailsWithDefaults

`func NewTemplateCustomNumberConfigDetailsWithDefaults() *TemplateCustomNumberConfigDetails`

NewTemplateCustomNumberConfigDetailsWithDefaults instantiates a new TemplateCustomNumberConfigDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCustomNumberConfigurationList

`func (o *TemplateCustomNumberConfigDetails) GetCustomNumberConfigurationList() []CustomNumberTemplateConfigurationType`

GetCustomNumberConfigurationList returns the CustomNumberConfigurationList field if non-nil, zero value otherwise.

### GetCustomNumberConfigurationListOk

`func (o *TemplateCustomNumberConfigDetails) GetCustomNumberConfigurationListOk() (*[]CustomNumberTemplateConfigurationType, bool)`

GetCustomNumberConfigurationListOk returns a tuple with the CustomNumberConfigurationList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomNumberConfigurationList

`func (o *TemplateCustomNumberConfigDetails) SetCustomNumberConfigurationList(v []CustomNumberTemplateConfigurationType)`

SetCustomNumberConfigurationList sets CustomNumberConfigurationList field to given value.

### HasCustomNumberConfigurationList

`func (o *TemplateCustomNumberConfigDetails) HasCustomNumberConfigurationList() bool`

HasCustomNumberConfigurationList returns a boolean if a field has been set.

### GetLinks

`func (o *TemplateCustomNumberConfigDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TemplateCustomNumberConfigDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TemplateCustomNumberConfigDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TemplateCustomNumberConfigDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *TemplateCustomNumberConfigDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TemplateCustomNumberConfigDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TemplateCustomNumberConfigDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TemplateCustomNumberConfigDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


