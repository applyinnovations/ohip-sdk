# TemplateAmenitiesCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TemplateAmenities** | Pointer to [**[]ConfigTemplateAmenityType**](ConfigTemplateAmenityType.md) | This type holds a collection of amenities at the template level. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTemplateAmenitiesCriteria

`func NewTemplateAmenitiesCriteria() *TemplateAmenitiesCriteria`

NewTemplateAmenitiesCriteria instantiates a new TemplateAmenitiesCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateAmenitiesCriteriaWithDefaults

`func NewTemplateAmenitiesCriteriaWithDefaults() *TemplateAmenitiesCriteria`

NewTemplateAmenitiesCriteriaWithDefaults instantiates a new TemplateAmenitiesCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTemplateAmenities

`func (o *TemplateAmenitiesCriteria) GetTemplateAmenities() []ConfigTemplateAmenityType`

GetTemplateAmenities returns the TemplateAmenities field if non-nil, zero value otherwise.

### GetTemplateAmenitiesOk

`func (o *TemplateAmenitiesCriteria) GetTemplateAmenitiesOk() (*[]ConfigTemplateAmenityType, bool)`

GetTemplateAmenitiesOk returns a tuple with the TemplateAmenities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateAmenities

`func (o *TemplateAmenitiesCriteria) SetTemplateAmenities(v []ConfigTemplateAmenityType)`

SetTemplateAmenities sets TemplateAmenities field to given value.

### HasTemplateAmenities

`func (o *TemplateAmenitiesCriteria) HasTemplateAmenities() bool`

HasTemplateAmenities returns a boolean if a field has been set.

### GetLinks

`func (o *TemplateAmenitiesCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TemplateAmenitiesCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TemplateAmenitiesCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TemplateAmenitiesCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *TemplateAmenitiesCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TemplateAmenitiesCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TemplateAmenitiesCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TemplateAmenitiesCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


