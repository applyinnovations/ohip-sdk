# ProfilesTypeProfileInfoInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AllowedActions** | Pointer to [**[]ProfileAllowedActionType**](ProfileAllowedActionType.md) | Allowed actions for profile operations. | [optional] 
**ChainCode** | Pointer to **string** | Chain code associated with the profile. | [optional] 
**Profile** | Pointer to [**ProfileType**](ProfileType.md) |  | [optional] 
**ProfileIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 

## Methods

### NewProfilesTypeProfileInfoInner

`func NewProfilesTypeProfileInfoInner() *ProfilesTypeProfileInfoInner`

NewProfilesTypeProfileInfoInner instantiates a new ProfilesTypeProfileInfoInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfilesTypeProfileInfoInnerWithDefaults

`func NewProfilesTypeProfileInfoInnerWithDefaults() *ProfilesTypeProfileInfoInner`

NewProfilesTypeProfileInfoInnerWithDefaults instantiates a new ProfilesTypeProfileInfoInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAllowedActions

`func (o *ProfilesTypeProfileInfoInner) GetAllowedActions() []ProfileAllowedActionType`

GetAllowedActions returns the AllowedActions field if non-nil, zero value otherwise.

### GetAllowedActionsOk

`func (o *ProfilesTypeProfileInfoInner) GetAllowedActionsOk() (*[]ProfileAllowedActionType, bool)`

GetAllowedActionsOk returns a tuple with the AllowedActions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowedActions

`func (o *ProfilesTypeProfileInfoInner) SetAllowedActions(v []ProfileAllowedActionType)`

SetAllowedActions sets AllowedActions field to given value.

### HasAllowedActions

`func (o *ProfilesTypeProfileInfoInner) HasAllowedActions() bool`

HasAllowedActions returns a boolean if a field has been set.

### GetChainCode

`func (o *ProfilesTypeProfileInfoInner) GetChainCode() string`

GetChainCode returns the ChainCode field if non-nil, zero value otherwise.

### GetChainCodeOk

`func (o *ProfilesTypeProfileInfoInner) GetChainCodeOk() (*string, bool)`

GetChainCodeOk returns a tuple with the ChainCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChainCode

`func (o *ProfilesTypeProfileInfoInner) SetChainCode(v string)`

SetChainCode sets ChainCode field to given value.

### HasChainCode

`func (o *ProfilesTypeProfileInfoInner) HasChainCode() bool`

HasChainCode returns a boolean if a field has been set.

### GetProfile

`func (o *ProfilesTypeProfileInfoInner) GetProfile() ProfileType`

GetProfile returns the Profile field if non-nil, zero value otherwise.

### GetProfileOk

`func (o *ProfilesTypeProfileInfoInner) GetProfileOk() (*ProfileType, bool)`

GetProfileOk returns a tuple with the Profile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfile

`func (o *ProfilesTypeProfileInfoInner) SetProfile(v ProfileType)`

SetProfile sets Profile field to given value.

### HasProfile

`func (o *ProfilesTypeProfileInfoInner) HasProfile() bool`

HasProfile returns a boolean if a field has been set.

### GetProfileIdList

`func (o *ProfilesTypeProfileInfoInner) GetProfileIdList() []UniqueIDType`

GetProfileIdList returns the ProfileIdList field if non-nil, zero value otherwise.

### GetProfileIdListOk

`func (o *ProfilesTypeProfileInfoInner) GetProfileIdListOk() (*[]UniqueIDType, bool)`

GetProfileIdListOk returns a tuple with the ProfileIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileIdList

`func (o *ProfilesTypeProfileInfoInner) SetProfileIdList(v []UniqueIDType)`

SetProfileIdList sets ProfileIdList field to given value.

### HasProfileIdList

`func (o *ProfilesTypeProfileInfoInner) HasProfileIdList() bool`

HasProfileIdList returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


