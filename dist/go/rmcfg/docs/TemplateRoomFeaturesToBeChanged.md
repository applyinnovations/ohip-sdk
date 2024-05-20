# TemplateRoomFeaturesToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**TemplateRoomFeatures** | Pointer to [**[]TemplateRoomFeatureConfigType**](TemplateRoomFeatureConfigType.md) | Template room feature details. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTemplateRoomFeaturesToBeChanged

`func NewTemplateRoomFeaturesToBeChanged() *TemplateRoomFeaturesToBeChanged`

NewTemplateRoomFeaturesToBeChanged instantiates a new TemplateRoomFeaturesToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateRoomFeaturesToBeChangedWithDefaults

`func NewTemplateRoomFeaturesToBeChangedWithDefaults() *TemplateRoomFeaturesToBeChanged`

NewTemplateRoomFeaturesToBeChangedWithDefaults instantiates a new TemplateRoomFeaturesToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *TemplateRoomFeaturesToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TemplateRoomFeaturesToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TemplateRoomFeaturesToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TemplateRoomFeaturesToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTemplateRoomFeatures

`func (o *TemplateRoomFeaturesToBeChanged) GetTemplateRoomFeatures() []TemplateRoomFeatureConfigType`

GetTemplateRoomFeatures returns the TemplateRoomFeatures field if non-nil, zero value otherwise.

### GetTemplateRoomFeaturesOk

`func (o *TemplateRoomFeaturesToBeChanged) GetTemplateRoomFeaturesOk() (*[]TemplateRoomFeatureConfigType, bool)`

GetTemplateRoomFeaturesOk returns a tuple with the TemplateRoomFeatures field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateRoomFeatures

`func (o *TemplateRoomFeaturesToBeChanged) SetTemplateRoomFeatures(v []TemplateRoomFeatureConfigType)`

SetTemplateRoomFeatures sets TemplateRoomFeatures field to given value.

### HasTemplateRoomFeatures

`func (o *TemplateRoomFeaturesToBeChanged) HasTemplateRoomFeatures() bool`

HasTemplateRoomFeatures returns a boolean if a field has been set.

### GetWarnings

`func (o *TemplateRoomFeaturesToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TemplateRoomFeaturesToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TemplateRoomFeaturesToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TemplateRoomFeaturesToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


