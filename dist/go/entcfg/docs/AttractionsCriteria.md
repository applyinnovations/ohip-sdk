# AttractionsCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attractions** | Pointer to [**[]AttractionCodeType**](AttractionCodeType.md) | Collection of hotel level alert codes with attached alert types. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewAttractionsCriteria

`func NewAttractionsCriteria() *AttractionsCriteria`

NewAttractionsCriteria instantiates a new AttractionsCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAttractionsCriteriaWithDefaults

`func NewAttractionsCriteriaWithDefaults() *AttractionsCriteria`

NewAttractionsCriteriaWithDefaults instantiates a new AttractionsCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttractions

`func (o *AttractionsCriteria) GetAttractions() []AttractionCodeType`

GetAttractions returns the Attractions field if non-nil, zero value otherwise.

### GetAttractionsOk

`func (o *AttractionsCriteria) GetAttractionsOk() (*[]AttractionCodeType, bool)`

GetAttractionsOk returns a tuple with the Attractions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttractions

`func (o *AttractionsCriteria) SetAttractions(v []AttractionCodeType)`

SetAttractions sets Attractions field to given value.

### HasAttractions

`func (o *AttractionsCriteria) HasAttractions() bool`

HasAttractions returns a boolean if a field has been set.

### GetLinks

`func (o *AttractionsCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *AttractionsCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *AttractionsCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *AttractionsCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *AttractionsCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *AttractionsCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *AttractionsCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *AttractionsCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


