# ProfileTypeRelationships

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Relationship** | Pointer to [**[]RelationshipInfoType**](RelationshipInfoType.md) | A collection of the profiles that have a relationship with this profile. | [optional] 

## Methods

### NewProfileTypeRelationships

`func NewProfileTypeRelationships() *ProfileTypeRelationships`

NewProfileTypeRelationships instantiates a new ProfileTypeRelationships object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileTypeRelationshipsWithDefaults

`func NewProfileTypeRelationshipsWithDefaults() *ProfileTypeRelationships`

NewProfileTypeRelationshipsWithDefaults instantiates a new ProfileTypeRelationships object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRelationship

`func (o *ProfileTypeRelationships) GetRelationship() []RelationshipInfoType`

GetRelationship returns the Relationship field if non-nil, zero value otherwise.

### GetRelationshipOk

`func (o *ProfileTypeRelationships) GetRelationshipOk() (*[]RelationshipInfoType, bool)`

GetRelationshipOk returns a tuple with the Relationship field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRelationship

`func (o *ProfileTypeRelationships) SetRelationship(v []RelationshipInfoType)`

SetRelationship sets Relationship field to given value.

### HasRelationship

`func (o *ProfileTypeRelationships) HasRelationship() bool`

HasRelationship returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


