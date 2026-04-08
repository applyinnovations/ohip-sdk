# ApplicationSettingGroupType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AppSettings** | Pointer to [**[]ApplicationSettingType**](ApplicationSettingType.md) |  | [optional] 
**GroupName** | Pointer to **string** |  | [optional] 
**GroupDisplayName** | Pointer to **string** |  | [optional] 

## Methods

### NewApplicationSettingGroupType

`func NewApplicationSettingGroupType() *ApplicationSettingGroupType`

NewApplicationSettingGroupType instantiates a new ApplicationSettingGroupType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApplicationSettingGroupTypeWithDefaults

`func NewApplicationSettingGroupTypeWithDefaults() *ApplicationSettingGroupType`

NewApplicationSettingGroupTypeWithDefaults instantiates a new ApplicationSettingGroupType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAppSettings

`func (o *ApplicationSettingGroupType) GetAppSettings() []ApplicationSettingType`

GetAppSettings returns the AppSettings field if non-nil, zero value otherwise.

### GetAppSettingsOk

`func (o *ApplicationSettingGroupType) GetAppSettingsOk() (*[]ApplicationSettingType, bool)`

GetAppSettingsOk returns a tuple with the AppSettings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppSettings

`func (o *ApplicationSettingGroupType) SetAppSettings(v []ApplicationSettingType)`

SetAppSettings sets AppSettings field to given value.

### HasAppSettings

`func (o *ApplicationSettingGroupType) HasAppSettings() bool`

HasAppSettings returns a boolean if a field has been set.

### GetGroupName

`func (o *ApplicationSettingGroupType) GetGroupName() string`

GetGroupName returns the GroupName field if non-nil, zero value otherwise.

### GetGroupNameOk

`func (o *ApplicationSettingGroupType) GetGroupNameOk() (*string, bool)`

GetGroupNameOk returns a tuple with the GroupName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroupName

`func (o *ApplicationSettingGroupType) SetGroupName(v string)`

SetGroupName sets GroupName field to given value.

### HasGroupName

`func (o *ApplicationSettingGroupType) HasGroupName() bool`

HasGroupName returns a boolean if a field has been set.

### GetGroupDisplayName

`func (o *ApplicationSettingGroupType) GetGroupDisplayName() string`

GetGroupDisplayName returns the GroupDisplayName field if non-nil, zero value otherwise.

### GetGroupDisplayNameOk

`func (o *ApplicationSettingGroupType) GetGroupDisplayNameOk() (*string, bool)`

GetGroupDisplayNameOk returns a tuple with the GroupDisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroupDisplayName

`func (o *ApplicationSettingGroupType) SetGroupDisplayName(v string)`

SetGroupDisplayName sets GroupDisplayName field to given value.

### HasGroupDisplayName

`func (o *ApplicationSettingGroupType) HasGroupDisplayName() bool`

HasGroupDisplayName returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


