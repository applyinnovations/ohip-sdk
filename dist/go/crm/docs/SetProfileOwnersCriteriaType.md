# SetProfileOwnersCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ProfileIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**Owners** | Pointer to [**[]OwnerType**](OwnerType.md) | Generic type for a list of owners. | [optional] 

## Methods

### NewSetProfileOwnersCriteriaType

`func NewSetProfileOwnersCriteriaType() *SetProfileOwnersCriteriaType`

NewSetProfileOwnersCriteriaType instantiates a new SetProfileOwnersCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSetProfileOwnersCriteriaTypeWithDefaults

`func NewSetProfileOwnersCriteriaTypeWithDefaults() *SetProfileOwnersCriteriaType`

NewSetProfileOwnersCriteriaTypeWithDefaults instantiates a new SetProfileOwnersCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetProfileIdList

`func (o *SetProfileOwnersCriteriaType) GetProfileIdList() []UniqueIDType`

GetProfileIdList returns the ProfileIdList field if non-nil, zero value otherwise.

### GetProfileIdListOk

`func (o *SetProfileOwnersCriteriaType) GetProfileIdListOk() (*[]UniqueIDType, bool)`

GetProfileIdListOk returns a tuple with the ProfileIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileIdList

`func (o *SetProfileOwnersCriteriaType) SetProfileIdList(v []UniqueIDType)`

SetProfileIdList sets ProfileIdList field to given value.

### HasProfileIdList

`func (o *SetProfileOwnersCriteriaType) HasProfileIdList() bool`

HasProfileIdList returns a boolean if a field has been set.

### GetOwners

`func (o *SetProfileOwnersCriteriaType) GetOwners() []OwnerType`

GetOwners returns the Owners field if non-nil, zero value otherwise.

### GetOwnersOk

`func (o *SetProfileOwnersCriteriaType) GetOwnersOk() (*[]OwnerType, bool)`

GetOwnersOk returns a tuple with the Owners field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwners

`func (o *SetProfileOwnersCriteriaType) SetOwners(v []OwnerType)`

SetOwners sets Owners field to given value.

### HasOwners

`func (o *SetProfileOwnersCriteriaType) HasOwners() bool`

HasOwners returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


