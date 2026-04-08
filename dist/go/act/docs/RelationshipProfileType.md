# RelationshipProfileType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ProfileIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**ProfileType** | Pointer to [**ProfileTypeType**](ProfileTypeType.md) |  | [optional] 

## Methods

### NewRelationshipProfileType

`func NewRelationshipProfileType() *RelationshipProfileType`

NewRelationshipProfileType instantiates a new RelationshipProfileType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRelationshipProfileTypeWithDefaults

`func NewRelationshipProfileTypeWithDefaults() *RelationshipProfileType`

NewRelationshipProfileTypeWithDefaults instantiates a new RelationshipProfileType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetProfileIdList

`func (o *RelationshipProfileType) GetProfileIdList() []UniqueIDType`

GetProfileIdList returns the ProfileIdList field if non-nil, zero value otherwise.

### GetProfileIdListOk

`func (o *RelationshipProfileType) GetProfileIdListOk() (*[]UniqueIDType, bool)`

GetProfileIdListOk returns a tuple with the ProfileIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileIdList

`func (o *RelationshipProfileType) SetProfileIdList(v []UniqueIDType)`

SetProfileIdList sets ProfileIdList field to given value.

### HasProfileIdList

`func (o *RelationshipProfileType) HasProfileIdList() bool`

HasProfileIdList returns a boolean if a field has been set.

### GetProfileType

`func (o *RelationshipProfileType) GetProfileType() ProfileTypeType`

GetProfileType returns the ProfileType field if non-nil, zero value otherwise.

### GetProfileTypeOk

`func (o *RelationshipProfileType) GetProfileTypeOk() (*ProfileTypeType, bool)`

GetProfileTypeOk returns a tuple with the ProfileType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileType

`func (o *RelationshipProfileType) SetProfileType(v ProfileTypeType)`

SetProfileType sets ProfileType field to given value.

### HasProfileType

`func (o *RelationshipProfileType) HasProfileType() bool`

HasProfileType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


