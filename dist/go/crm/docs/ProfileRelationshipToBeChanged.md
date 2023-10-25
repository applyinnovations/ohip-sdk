# ProfileRelationshipToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Relationship** | Pointer to [**ChangeRelationshipCriteriaType**](ChangeRelationshipCriteriaType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewProfileRelationshipToBeChanged

`func NewProfileRelationshipToBeChanged() *ProfileRelationshipToBeChanged`

NewProfileRelationshipToBeChanged instantiates a new ProfileRelationshipToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileRelationshipToBeChangedWithDefaults

`func NewProfileRelationshipToBeChangedWithDefaults() *ProfileRelationshipToBeChanged`

NewProfileRelationshipToBeChangedWithDefaults instantiates a new ProfileRelationshipToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ProfileRelationshipToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ProfileRelationshipToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ProfileRelationshipToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ProfileRelationshipToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRelationship

`func (o *ProfileRelationshipToBeChanged) GetRelationship() ChangeRelationshipCriteriaType`

GetRelationship returns the Relationship field if non-nil, zero value otherwise.

### GetRelationshipOk

`func (o *ProfileRelationshipToBeChanged) GetRelationshipOk() (*ChangeRelationshipCriteriaType, bool)`

GetRelationshipOk returns a tuple with the Relationship field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRelationship

`func (o *ProfileRelationshipToBeChanged) SetRelationship(v ChangeRelationshipCriteriaType)`

SetRelationship sets Relationship field to given value.

### HasRelationship

`func (o *ProfileRelationshipToBeChanged) HasRelationship() bool`

HasRelationship returns a boolean if a field has been set.

### GetWarnings

`func (o *ProfileRelationshipToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ProfileRelationshipToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ProfileRelationshipToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ProfileRelationshipToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


