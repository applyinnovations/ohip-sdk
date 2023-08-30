# TemplateDeviceLocationsCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TemplateDeviceLocations** | Pointer to [**[]TemplateDeviceLocationType**](TemplateDeviceLocationType.md) | List of Device locations at template level. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTemplateDeviceLocationsCriteria

`func NewTemplateDeviceLocationsCriteria() *TemplateDeviceLocationsCriteria`

NewTemplateDeviceLocationsCriteria instantiates a new TemplateDeviceLocationsCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateDeviceLocationsCriteriaWithDefaults

`func NewTemplateDeviceLocationsCriteriaWithDefaults() *TemplateDeviceLocationsCriteria`

NewTemplateDeviceLocationsCriteriaWithDefaults instantiates a new TemplateDeviceLocationsCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTemplateDeviceLocations

`func (o *TemplateDeviceLocationsCriteria) GetTemplateDeviceLocations() []TemplateDeviceLocationType`

GetTemplateDeviceLocations returns the TemplateDeviceLocations field if non-nil, zero value otherwise.

### GetTemplateDeviceLocationsOk

`func (o *TemplateDeviceLocationsCriteria) GetTemplateDeviceLocationsOk() (*[]TemplateDeviceLocationType, bool)`

GetTemplateDeviceLocationsOk returns a tuple with the TemplateDeviceLocations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateDeviceLocations

`func (o *TemplateDeviceLocationsCriteria) SetTemplateDeviceLocations(v []TemplateDeviceLocationType)`

SetTemplateDeviceLocations sets TemplateDeviceLocations field to given value.

### HasTemplateDeviceLocations

`func (o *TemplateDeviceLocationsCriteria) HasTemplateDeviceLocations() bool`

HasTemplateDeviceLocations returns a boolean if a field has been set.

### GetLinks

`func (o *TemplateDeviceLocationsCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TemplateDeviceLocationsCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TemplateDeviceLocationsCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TemplateDeviceLocationsCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *TemplateDeviceLocationsCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TemplateDeviceLocationsCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TemplateDeviceLocationsCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TemplateDeviceLocationsCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


