# RelationshipInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Relationship identifier. | [optional] 
**Relation** | Pointer to **string** | Indicates the type of relationship the current profile(Source Profile) has with the related profile(Target Profile). | [optional] 
**RelationDescription** | Pointer to **string** | Displays the description of relationship the current profile(Source Profile) has with the related profile(Target Profile). | [optional] 
**RelationshipProfile** | Pointer to [**RelationshipProfileType**](RelationshipProfileType.md) |  | [optional] 
**TargetRelation** | Pointer to **string** | Displays the type of relationship the Related profile(Target Profile) has with the current profile(Source Profile). | [optional] 
**TargetRelationDescription** | Pointer to **string** | Displays the description of the target relation(Target Profile). | [optional] 

## Methods

### NewRelationshipInfoType

`func NewRelationshipInfoType() *RelationshipInfoType`

NewRelationshipInfoType instantiates a new RelationshipInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRelationshipInfoTypeWithDefaults

`func NewRelationshipInfoTypeWithDefaults() *RelationshipInfoType`

NewRelationshipInfoTypeWithDefaults instantiates a new RelationshipInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *RelationshipInfoType) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *RelationshipInfoType) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *RelationshipInfoType) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *RelationshipInfoType) HasId() bool`

HasId returns a boolean if a field has been set.

### GetRelation

`func (o *RelationshipInfoType) GetRelation() string`

GetRelation returns the Relation field if non-nil, zero value otherwise.

### GetRelationOk

`func (o *RelationshipInfoType) GetRelationOk() (*string, bool)`

GetRelationOk returns a tuple with the Relation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRelation

`func (o *RelationshipInfoType) SetRelation(v string)`

SetRelation sets Relation field to given value.

### HasRelation

`func (o *RelationshipInfoType) HasRelation() bool`

HasRelation returns a boolean if a field has been set.

### GetRelationDescription

`func (o *RelationshipInfoType) GetRelationDescription() string`

GetRelationDescription returns the RelationDescription field if non-nil, zero value otherwise.

### GetRelationDescriptionOk

`func (o *RelationshipInfoType) GetRelationDescriptionOk() (*string, bool)`

GetRelationDescriptionOk returns a tuple with the RelationDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRelationDescription

`func (o *RelationshipInfoType) SetRelationDescription(v string)`

SetRelationDescription sets RelationDescription field to given value.

### HasRelationDescription

`func (o *RelationshipInfoType) HasRelationDescription() bool`

HasRelationDescription returns a boolean if a field has been set.

### GetRelationshipProfile

`func (o *RelationshipInfoType) GetRelationshipProfile() RelationshipProfileType`

GetRelationshipProfile returns the RelationshipProfile field if non-nil, zero value otherwise.

### GetRelationshipProfileOk

`func (o *RelationshipInfoType) GetRelationshipProfileOk() (*RelationshipProfileType, bool)`

GetRelationshipProfileOk returns a tuple with the RelationshipProfile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRelationshipProfile

`func (o *RelationshipInfoType) SetRelationshipProfile(v RelationshipProfileType)`

SetRelationshipProfile sets RelationshipProfile field to given value.

### HasRelationshipProfile

`func (o *RelationshipInfoType) HasRelationshipProfile() bool`

HasRelationshipProfile returns a boolean if a field has been set.

### GetTargetRelation

`func (o *RelationshipInfoType) GetTargetRelation() string`

GetTargetRelation returns the TargetRelation field if non-nil, zero value otherwise.

### GetTargetRelationOk

`func (o *RelationshipInfoType) GetTargetRelationOk() (*string, bool)`

GetTargetRelationOk returns a tuple with the TargetRelation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetRelation

`func (o *RelationshipInfoType) SetTargetRelation(v string)`

SetTargetRelation sets TargetRelation field to given value.

### HasTargetRelation

`func (o *RelationshipInfoType) HasTargetRelation() bool`

HasTargetRelation returns a boolean if a field has been set.

### GetTargetRelationDescription

`func (o *RelationshipInfoType) GetTargetRelationDescription() string`

GetTargetRelationDescription returns the TargetRelationDescription field if non-nil, zero value otherwise.

### GetTargetRelationDescriptionOk

`func (o *RelationshipInfoType) GetTargetRelationDescriptionOk() (*string, bool)`

GetTargetRelationDescriptionOk returns a tuple with the TargetRelationDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetRelationDescription

`func (o *RelationshipInfoType) SetTargetRelationDescription(v string)`

SetTargetRelationDescription sets TargetRelationDescription field to given value.

### HasTargetRelationDescription

`func (o *RelationshipInfoType) HasTargetRelationDescription() bool`

HasTargetRelationDescription returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


