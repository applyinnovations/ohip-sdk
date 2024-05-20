# TemplateFloorsDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**TemplateFloors** | Pointer to [**[]TemplateFloorType**](TemplateFloorType.md) | This type holds a collection of floors at the template level. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTemplateFloorsDetails

`func NewTemplateFloorsDetails() *TemplateFloorsDetails`

NewTemplateFloorsDetails instantiates a new TemplateFloorsDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateFloorsDetailsWithDefaults

`func NewTemplateFloorsDetailsWithDefaults() *TemplateFloorsDetails`

NewTemplateFloorsDetailsWithDefaults instantiates a new TemplateFloorsDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *TemplateFloorsDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TemplateFloorsDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TemplateFloorsDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TemplateFloorsDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTemplateFloors

`func (o *TemplateFloorsDetails) GetTemplateFloors() []TemplateFloorType`

GetTemplateFloors returns the TemplateFloors field if non-nil, zero value otherwise.

### GetTemplateFloorsOk

`func (o *TemplateFloorsDetails) GetTemplateFloorsOk() (*[]TemplateFloorType, bool)`

GetTemplateFloorsOk returns a tuple with the TemplateFloors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateFloors

`func (o *TemplateFloorsDetails) SetTemplateFloors(v []TemplateFloorType)`

SetTemplateFloors sets TemplateFloors field to given value.

### HasTemplateFloors

`func (o *TemplateFloorsDetails) HasTemplateFloors() bool`

HasTemplateFloors returns a boolean if a field has been set.

### GetWarnings

`func (o *TemplateFloorsDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TemplateFloorsDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TemplateFloorsDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TemplateFloorsDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


