# PutSecureApplicationSettingsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Settings** | Pointer to [**[]ApplicationSecureSettingType**](ApplicationSecureSettingType.md) | Contains a single application setting to update. | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPutSecureApplicationSettingsRequest

`func NewPutSecureApplicationSettingsRequest() *PutSecureApplicationSettingsRequest`

NewPutSecureApplicationSettingsRequest instantiates a new PutSecureApplicationSettingsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutSecureApplicationSettingsRequestWithDefaults

`func NewPutSecureApplicationSettingsRequestWithDefaults() *PutSecureApplicationSettingsRequest`

NewPutSecureApplicationSettingsRequestWithDefaults instantiates a new PutSecureApplicationSettingsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PutSecureApplicationSettingsRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutSecureApplicationSettingsRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutSecureApplicationSettingsRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutSecureApplicationSettingsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetSettings

`func (o *PutSecureApplicationSettingsRequest) GetSettings() []ApplicationSecureSettingType`

GetSettings returns the Settings field if non-nil, zero value otherwise.

### GetSettingsOk

`func (o *PutSecureApplicationSettingsRequest) GetSettingsOk() (*[]ApplicationSecureSettingType, bool)`

GetSettingsOk returns a tuple with the Settings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSettings

`func (o *PutSecureApplicationSettingsRequest) SetSettings(v []ApplicationSecureSettingType)`

SetSettings sets Settings field to given value.

### HasSettings

`func (o *PutSecureApplicationSettingsRequest) HasSettings() bool`

HasSettings returns a boolean if a field has been set.

### GetWarnings

`func (o *PutSecureApplicationSettingsRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutSecureApplicationSettingsRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutSecureApplicationSettingsRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutSecureApplicationSettingsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


