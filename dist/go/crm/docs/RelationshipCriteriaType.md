# RelationshipCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Primary** | Pointer to **bool** | Indicates if this relationship is the primary relationship. | [optional] 
**SourceProfileType** | Pointer to [**ProfileTypeType**](ProfileTypeType.md) |  | [optional] 
**SourceRelation** | Pointer to **string** | Indicates the type of relationship the current profile(Source Profile) has with the related profile(Target Profile). | [optional] 
**SourceRelationDescription** | Pointer to **string** | Displays the description of relationship the current profile(Source Profile) has with the related profile(Target Profile).This needs to be passed if the attribute primary is sent as true. | [optional] 
**TargetProfileType** | Pointer to [**ProfileTypeType**](ProfileTypeType.md) |  | [optional] 
**TargetRelation** | Pointer to **string** | Indicates the type of relationship the related profile(Target Profile) has with the current profile(Source Profile). | [optional] 
**TargetRelationDescription** | Pointer to **string** | Displays the description of relationship the related profile(Target Profile) has with the current profile(Source Profile). | [optional] 

## Methods

### NewRelationshipCriteriaType

`func NewRelationshipCriteriaType() *RelationshipCriteriaType`

NewRelationshipCriteriaType instantiates a new RelationshipCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRelationshipCriteriaTypeWithDefaults

`func NewRelationshipCriteriaTypeWithDefaults() *RelationshipCriteriaType`

NewRelationshipCriteriaTypeWithDefaults instantiates a new RelationshipCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPrimary

`func (o *RelationshipCriteriaType) GetPrimary() bool`

GetPrimary returns the Primary field if non-nil, zero value otherwise.

### GetPrimaryOk

`func (o *RelationshipCriteriaType) GetPrimaryOk() (*bool, bool)`

GetPrimaryOk returns a tuple with the Primary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimary

`func (o *RelationshipCriteriaType) SetPrimary(v bool)`

SetPrimary sets Primary field to given value.

### HasPrimary

`func (o *RelationshipCriteriaType) HasPrimary() bool`

HasPrimary returns a boolean if a field has been set.

### GetSourceProfileType

`func (o *RelationshipCriteriaType) GetSourceProfileType() ProfileTypeType`

GetSourceProfileType returns the SourceProfileType field if non-nil, zero value otherwise.

### GetSourceProfileTypeOk

`func (o *RelationshipCriteriaType) GetSourceProfileTypeOk() (*ProfileTypeType, bool)`

GetSourceProfileTypeOk returns a tuple with the SourceProfileType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceProfileType

`func (o *RelationshipCriteriaType) SetSourceProfileType(v ProfileTypeType)`

SetSourceProfileType sets SourceProfileType field to given value.

### HasSourceProfileType

`func (o *RelationshipCriteriaType) HasSourceProfileType() bool`

HasSourceProfileType returns a boolean if a field has been set.

### GetSourceRelation

`func (o *RelationshipCriteriaType) GetSourceRelation() string`

GetSourceRelation returns the SourceRelation field if non-nil, zero value otherwise.

### GetSourceRelationOk

`func (o *RelationshipCriteriaType) GetSourceRelationOk() (*string, bool)`

GetSourceRelationOk returns a tuple with the SourceRelation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceRelation

`func (o *RelationshipCriteriaType) SetSourceRelation(v string)`

SetSourceRelation sets SourceRelation field to given value.

### HasSourceRelation

`func (o *RelationshipCriteriaType) HasSourceRelation() bool`

HasSourceRelation returns a boolean if a field has been set.

### GetSourceRelationDescription

`func (o *RelationshipCriteriaType) GetSourceRelationDescription() string`

GetSourceRelationDescription returns the SourceRelationDescription field if non-nil, zero value otherwise.

### GetSourceRelationDescriptionOk

`func (o *RelationshipCriteriaType) GetSourceRelationDescriptionOk() (*string, bool)`

GetSourceRelationDescriptionOk returns a tuple with the SourceRelationDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceRelationDescription

`func (o *RelationshipCriteriaType) SetSourceRelationDescription(v string)`

SetSourceRelationDescription sets SourceRelationDescription field to given value.

### HasSourceRelationDescription

`func (o *RelationshipCriteriaType) HasSourceRelationDescription() bool`

HasSourceRelationDescription returns a boolean if a field has been set.

### GetTargetProfileType

`func (o *RelationshipCriteriaType) GetTargetProfileType() ProfileTypeType`

GetTargetProfileType returns the TargetProfileType field if non-nil, zero value otherwise.

### GetTargetProfileTypeOk

`func (o *RelationshipCriteriaType) GetTargetProfileTypeOk() (*ProfileTypeType, bool)`

GetTargetProfileTypeOk returns a tuple with the TargetProfileType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetProfileType

`func (o *RelationshipCriteriaType) SetTargetProfileType(v ProfileTypeType)`

SetTargetProfileType sets TargetProfileType field to given value.

### HasTargetProfileType

`func (o *RelationshipCriteriaType) HasTargetProfileType() bool`

HasTargetProfileType returns a boolean if a field has been set.

### GetTargetRelation

`func (o *RelationshipCriteriaType) GetTargetRelation() string`

GetTargetRelation returns the TargetRelation field if non-nil, zero value otherwise.

### GetTargetRelationOk

`func (o *RelationshipCriteriaType) GetTargetRelationOk() (*string, bool)`

GetTargetRelationOk returns a tuple with the TargetRelation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetRelation

`func (o *RelationshipCriteriaType) SetTargetRelation(v string)`

SetTargetRelation sets TargetRelation field to given value.

### HasTargetRelation

`func (o *RelationshipCriteriaType) HasTargetRelation() bool`

HasTargetRelation returns a boolean if a field has been set.

### GetTargetRelationDescription

`func (o *RelationshipCriteriaType) GetTargetRelationDescription() string`

GetTargetRelationDescription returns the TargetRelationDescription field if non-nil, zero value otherwise.

### GetTargetRelationDescriptionOk

`func (o *RelationshipCriteriaType) GetTargetRelationDescriptionOk() (*string, bool)`

GetTargetRelationDescriptionOk returns a tuple with the TargetRelationDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetRelationDescription

`func (o *RelationshipCriteriaType) SetTargetRelationDescription(v string)`

SetTargetRelationDescription sets TargetRelationDescription field to given value.

### HasTargetRelationDescription

`func (o *RelationshipCriteriaType) HasTargetRelationDescription() bool`

HasTargetRelationDescription returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


