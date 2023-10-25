# PostTemplateCustomNumberConfigRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CustomNumberConfiguration** | Pointer to [**CustomNumberTemplateConfigurationType**](CustomNumberTemplateConfigurationType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostTemplateCustomNumberConfigRequest

`func NewPostTemplateCustomNumberConfigRequest() *PostTemplateCustomNumberConfigRequest`

NewPostTemplateCustomNumberConfigRequest instantiates a new PostTemplateCustomNumberConfigRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostTemplateCustomNumberConfigRequestWithDefaults

`func NewPostTemplateCustomNumberConfigRequestWithDefaults() *PostTemplateCustomNumberConfigRequest`

NewPostTemplateCustomNumberConfigRequestWithDefaults instantiates a new PostTemplateCustomNumberConfigRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCustomNumberConfiguration

`func (o *PostTemplateCustomNumberConfigRequest) GetCustomNumberConfiguration() CustomNumberTemplateConfigurationType`

GetCustomNumberConfiguration returns the CustomNumberConfiguration field if non-nil, zero value otherwise.

### GetCustomNumberConfigurationOk

`func (o *PostTemplateCustomNumberConfigRequest) GetCustomNumberConfigurationOk() (*CustomNumberTemplateConfigurationType, bool)`

GetCustomNumberConfigurationOk returns a tuple with the CustomNumberConfiguration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomNumberConfiguration

`func (o *PostTemplateCustomNumberConfigRequest) SetCustomNumberConfiguration(v CustomNumberTemplateConfigurationType)`

SetCustomNumberConfiguration sets CustomNumberConfiguration field to given value.

### HasCustomNumberConfiguration

`func (o *PostTemplateCustomNumberConfigRequest) HasCustomNumberConfiguration() bool`

HasCustomNumberConfiguration returns a boolean if a field has been set.

### GetLinks

`func (o *PostTemplateCustomNumberConfigRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostTemplateCustomNumberConfigRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostTemplateCustomNumberConfigRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostTemplateCustomNumberConfigRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostTemplateCustomNumberConfigRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostTemplateCustomNumberConfigRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostTemplateCustomNumberConfigRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostTemplateCustomNumberConfigRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


