# ProfileRelationships

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Relationships** | Pointer to [**RelationshipsSummary**](RelationshipsSummary.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewProfileRelationships

`func NewProfileRelationships() *ProfileRelationships`

NewProfileRelationships instantiates a new ProfileRelationships object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileRelationshipsWithDefaults

`func NewProfileRelationshipsWithDefaults() *ProfileRelationships`

NewProfileRelationshipsWithDefaults instantiates a new ProfileRelationships object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRelationships

`func (o *ProfileRelationships) GetRelationships() RelationshipsSummary`

GetRelationships returns the Relationships field if non-nil, zero value otherwise.

### GetRelationshipsOk

`func (o *ProfileRelationships) GetRelationshipsOk() (*RelationshipsSummary, bool)`

GetRelationshipsOk returns a tuple with the Relationships field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRelationships

`func (o *ProfileRelationships) SetRelationships(v RelationshipsSummary)`

SetRelationships sets Relationships field to given value.

### HasRelationships

`func (o *ProfileRelationships) HasRelationships() bool`

HasRelationships returns a boolean if a field has been set.

### GetLinks

`func (o *ProfileRelationships) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ProfileRelationships) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ProfileRelationships) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ProfileRelationships) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ProfileRelationships) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ProfileRelationships) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ProfileRelationships) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ProfileRelationships) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


