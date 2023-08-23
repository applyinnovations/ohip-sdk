# ResAttachedProfileType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | Attached profile name | [optional] 
**ProfileIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**ResProfileType** | Pointer to [**ResProfileTypeType**](ResProfileTypeType.md) |  | [optional] 

## Methods

### NewResAttachedProfileType

`func NewResAttachedProfileType() *ResAttachedProfileType`

NewResAttachedProfileType instantiates a new ResAttachedProfileType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResAttachedProfileTypeWithDefaults

`func NewResAttachedProfileTypeWithDefaults() *ResAttachedProfileType`

NewResAttachedProfileTypeWithDefaults instantiates a new ResAttachedProfileType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *ResAttachedProfileType) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ResAttachedProfileType) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ResAttachedProfileType) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ResAttachedProfileType) HasName() bool`

HasName returns a boolean if a field has been set.

### GetProfileIdList

`func (o *ResAttachedProfileType) GetProfileIdList() []UniqueIDType`

GetProfileIdList returns the ProfileIdList field if non-nil, zero value otherwise.

### GetProfileIdListOk

`func (o *ResAttachedProfileType) GetProfileIdListOk() (*[]UniqueIDType, bool)`

GetProfileIdListOk returns a tuple with the ProfileIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileIdList

`func (o *ResAttachedProfileType) SetProfileIdList(v []UniqueIDType)`

SetProfileIdList sets ProfileIdList field to given value.

### HasProfileIdList

`func (o *ResAttachedProfileType) HasProfileIdList() bool`

HasProfileIdList returns a boolean if a field has been set.

### GetResProfileType

`func (o *ResAttachedProfileType) GetResProfileType() ResProfileTypeType`

GetResProfileType returns the ResProfileType field if non-nil, zero value otherwise.

### GetResProfileTypeOk

`func (o *ResAttachedProfileType) GetResProfileTypeOk() (*ResProfileTypeType, bool)`

GetResProfileTypeOk returns a tuple with the ResProfileType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResProfileType

`func (o *ResAttachedProfileType) SetResProfileType(v ResProfileTypeType)`

SetResProfileType sets ResProfileType field to given value.

### HasResProfileType

`func (o *ResAttachedProfileType) HasResProfileType() bool`

HasResProfileType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


