# ActivityLinkedProfilesType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActivityLinkedProfileType** | Pointer to [**LinkedProfileTypeType**](LinkedProfileTypeType.md) |  | [optional] 
**Primary** | Pointer to **bool** | Is this attached profile primary? | [optional] 
**Profile** | Pointer to [**ProfileType**](ProfileType.md) |  | [optional] 
**ProfileIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 

## Methods

### NewActivityLinkedProfilesType

`func NewActivityLinkedProfilesType() *ActivityLinkedProfilesType`

NewActivityLinkedProfilesType instantiates a new ActivityLinkedProfilesType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewActivityLinkedProfilesTypeWithDefaults

`func NewActivityLinkedProfilesTypeWithDefaults() *ActivityLinkedProfilesType`

NewActivityLinkedProfilesTypeWithDefaults instantiates a new ActivityLinkedProfilesType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActivityLinkedProfileType

`func (o *ActivityLinkedProfilesType) GetActivityLinkedProfileType() LinkedProfileTypeType`

GetActivityLinkedProfileType returns the ActivityLinkedProfileType field if non-nil, zero value otherwise.

### GetActivityLinkedProfileTypeOk

`func (o *ActivityLinkedProfilesType) GetActivityLinkedProfileTypeOk() (*LinkedProfileTypeType, bool)`

GetActivityLinkedProfileTypeOk returns a tuple with the ActivityLinkedProfileType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivityLinkedProfileType

`func (o *ActivityLinkedProfilesType) SetActivityLinkedProfileType(v LinkedProfileTypeType)`

SetActivityLinkedProfileType sets ActivityLinkedProfileType field to given value.

### HasActivityLinkedProfileType

`func (o *ActivityLinkedProfilesType) HasActivityLinkedProfileType() bool`

HasActivityLinkedProfileType returns a boolean if a field has been set.

### GetPrimary

`func (o *ActivityLinkedProfilesType) GetPrimary() bool`

GetPrimary returns the Primary field if non-nil, zero value otherwise.

### GetPrimaryOk

`func (o *ActivityLinkedProfilesType) GetPrimaryOk() (*bool, bool)`

GetPrimaryOk returns a tuple with the Primary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimary

`func (o *ActivityLinkedProfilesType) SetPrimary(v bool)`

SetPrimary sets Primary field to given value.

### HasPrimary

`func (o *ActivityLinkedProfilesType) HasPrimary() bool`

HasPrimary returns a boolean if a field has been set.

### GetProfile

`func (o *ActivityLinkedProfilesType) GetProfile() ProfileType`

GetProfile returns the Profile field if non-nil, zero value otherwise.

### GetProfileOk

`func (o *ActivityLinkedProfilesType) GetProfileOk() (*ProfileType, bool)`

GetProfileOk returns a tuple with the Profile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfile

`func (o *ActivityLinkedProfilesType) SetProfile(v ProfileType)`

SetProfile sets Profile field to given value.

### HasProfile

`func (o *ActivityLinkedProfilesType) HasProfile() bool`

HasProfile returns a boolean if a field has been set.

### GetProfileIdList

`func (o *ActivityLinkedProfilesType) GetProfileIdList() []UniqueIDType`

GetProfileIdList returns the ProfileIdList field if non-nil, zero value otherwise.

### GetProfileIdListOk

`func (o *ActivityLinkedProfilesType) GetProfileIdListOk() (*[]UniqueIDType, bool)`

GetProfileIdListOk returns a tuple with the ProfileIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileIdList

`func (o *ActivityLinkedProfilesType) SetProfileIdList(v []UniqueIDType)`

SetProfileIdList sets ProfileIdList field to given value.

### HasProfileIdList

`func (o *ActivityLinkedProfilesType) HasProfileIdList() bool`

HasProfileIdList returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


