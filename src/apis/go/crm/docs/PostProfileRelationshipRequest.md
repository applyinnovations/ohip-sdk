# PostProfileRelationshipRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Relationship** | Pointer to [**RelationshipCriteriaType**](RelationshipCriteriaType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostProfileRelationshipRequest

`func NewPostProfileRelationshipRequest() *PostProfileRelationshipRequest`

NewPostProfileRelationshipRequest instantiates a new PostProfileRelationshipRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostProfileRelationshipRequestWithDefaults

`func NewPostProfileRelationshipRequestWithDefaults() *PostProfileRelationshipRequest`

NewPostProfileRelationshipRequestWithDefaults instantiates a new PostProfileRelationshipRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRelationship

`func (o *PostProfileRelationshipRequest) GetRelationship() RelationshipCriteriaType`

GetRelationship returns the Relationship field if non-nil, zero value otherwise.

### GetRelationshipOk

`func (o *PostProfileRelationshipRequest) GetRelationshipOk() (*RelationshipCriteriaType, bool)`

GetRelationshipOk returns a tuple with the Relationship field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRelationship

`func (o *PostProfileRelationshipRequest) SetRelationship(v RelationshipCriteriaType)`

SetRelationship sets Relationship field to given value.

### HasRelationship

`func (o *PostProfileRelationshipRequest) HasRelationship() bool`

HasRelationship returns a boolean if a field has been set.

### GetLinks

`func (o *PostProfileRelationshipRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostProfileRelationshipRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostProfileRelationshipRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostProfileRelationshipRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostProfileRelationshipRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostProfileRelationshipRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostProfileRelationshipRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostProfileRelationshipRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


