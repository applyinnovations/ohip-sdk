# ApplicationSecureSetting

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Settings** | Pointer to [**[]ApplicationSecureSettingType**](ApplicationSecureSettingType.md) | Contains a single application setting to update. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewApplicationSecureSetting

`func NewApplicationSecureSetting() *ApplicationSecureSetting`

NewApplicationSecureSetting instantiates a new ApplicationSecureSetting object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApplicationSecureSettingWithDefaults

`func NewApplicationSecureSettingWithDefaults() *ApplicationSecureSetting`

NewApplicationSecureSettingWithDefaults instantiates a new ApplicationSecureSetting object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSettings

`func (o *ApplicationSecureSetting) GetSettings() []ApplicationSecureSettingType`

GetSettings returns the Settings field if non-nil, zero value otherwise.

### GetSettingsOk

`func (o *ApplicationSecureSetting) GetSettingsOk() (*[]ApplicationSecureSettingType, bool)`

GetSettingsOk returns a tuple with the Settings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSettings

`func (o *ApplicationSecureSetting) SetSettings(v []ApplicationSecureSettingType)`

SetSettings sets Settings field to given value.

### HasSettings

`func (o *ApplicationSecureSetting) HasSettings() bool`

HasSettings returns a boolean if a field has been set.

### GetLinks

`func (o *ApplicationSecureSetting) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ApplicationSecureSetting) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ApplicationSecureSetting) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ApplicationSecureSetting) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ApplicationSecureSetting) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ApplicationSecureSetting) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ApplicationSecureSetting) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ApplicationSecureSetting) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


