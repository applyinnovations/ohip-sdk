# BlockProfilesType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockProfileType** | Pointer to [**BlockProfileTypeType**](BlockProfileTypeType.md) |  | [optional] 
**Primary** | Pointer to **bool** | Is this profile attached to block is primary? | [optional] 
**Profile** | Pointer to [**ProfileType**](ProfileType.md) |  | [optional] 
**ProfileIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 

## Methods

### NewBlockProfilesType

`func NewBlockProfilesType() *BlockProfilesType`

NewBlockProfilesType instantiates a new BlockProfilesType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockProfilesTypeWithDefaults

`func NewBlockProfilesTypeWithDefaults() *BlockProfilesType`

NewBlockProfilesTypeWithDefaults instantiates a new BlockProfilesType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockProfileType

`func (o *BlockProfilesType) GetBlockProfileType() BlockProfileTypeType`

GetBlockProfileType returns the BlockProfileType field if non-nil, zero value otherwise.

### GetBlockProfileTypeOk

`func (o *BlockProfilesType) GetBlockProfileTypeOk() (*BlockProfileTypeType, bool)`

GetBlockProfileTypeOk returns a tuple with the BlockProfileType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockProfileType

`func (o *BlockProfilesType) SetBlockProfileType(v BlockProfileTypeType)`

SetBlockProfileType sets BlockProfileType field to given value.

### HasBlockProfileType

`func (o *BlockProfilesType) HasBlockProfileType() bool`

HasBlockProfileType returns a boolean if a field has been set.

### GetPrimary

`func (o *BlockProfilesType) GetPrimary() bool`

GetPrimary returns the Primary field if non-nil, zero value otherwise.

### GetPrimaryOk

`func (o *BlockProfilesType) GetPrimaryOk() (*bool, bool)`

GetPrimaryOk returns a tuple with the Primary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimary

`func (o *BlockProfilesType) SetPrimary(v bool)`

SetPrimary sets Primary field to given value.

### HasPrimary

`func (o *BlockProfilesType) HasPrimary() bool`

HasPrimary returns a boolean if a field has been set.

### GetProfile

`func (o *BlockProfilesType) GetProfile() ProfileType`

GetProfile returns the Profile field if non-nil, zero value otherwise.

### GetProfileOk

`func (o *BlockProfilesType) GetProfileOk() (*ProfileType, bool)`

GetProfileOk returns a tuple with the Profile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfile

`func (o *BlockProfilesType) SetProfile(v ProfileType)`

SetProfile sets Profile field to given value.

### HasProfile

`func (o *BlockProfilesType) HasProfile() bool`

HasProfile returns a boolean if a field has been set.

### GetProfileIdList

`func (o *BlockProfilesType) GetProfileIdList() []UniqueIDType`

GetProfileIdList returns the ProfileIdList field if non-nil, zero value otherwise.

### GetProfileIdListOk

`func (o *BlockProfilesType) GetProfileIdListOk() (*[]UniqueIDType, bool)`

GetProfileIdListOk returns a tuple with the ProfileIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileIdList

`func (o *BlockProfilesType) SetProfileIdList(v []UniqueIDType)`

SetProfileIdList sets ProfileIdList field to given value.

### HasProfileIdList

`func (o *BlockProfilesType) HasProfileIdList() bool`

HasProfileIdList returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


