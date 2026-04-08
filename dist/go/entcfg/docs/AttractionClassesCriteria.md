# AttractionClassesCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AttractionClasses** | Pointer to [**[]AttractionClassType**](AttractionClassType.md) | List of Attraction Classes. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewAttractionClassesCriteria

`func NewAttractionClassesCriteria() *AttractionClassesCriteria`

NewAttractionClassesCriteria instantiates a new AttractionClassesCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAttractionClassesCriteriaWithDefaults

`func NewAttractionClassesCriteriaWithDefaults() *AttractionClassesCriteria`

NewAttractionClassesCriteriaWithDefaults instantiates a new AttractionClassesCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttractionClasses

`func (o *AttractionClassesCriteria) GetAttractionClasses() []AttractionClassType`

GetAttractionClasses returns the AttractionClasses field if non-nil, zero value otherwise.

### GetAttractionClassesOk

`func (o *AttractionClassesCriteria) GetAttractionClassesOk() (*[]AttractionClassType, bool)`

GetAttractionClassesOk returns a tuple with the AttractionClasses field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttractionClasses

`func (o *AttractionClassesCriteria) SetAttractionClasses(v []AttractionClassType)`

SetAttractionClasses sets AttractionClasses field to given value.

### HasAttractionClasses

`func (o *AttractionClassesCriteria) HasAttractionClasses() bool`

HasAttractionClasses returns a boolean if a field has been set.

### GetLinks

`func (o *AttractionClassesCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *AttractionClassesCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *AttractionClassesCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *AttractionClassesCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *AttractionClassesCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *AttractionClassesCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *AttractionClassesCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *AttractionClassesCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


