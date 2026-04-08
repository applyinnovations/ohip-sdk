# DeviceConfigurationType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | Internal name of the configuration. | [optional] 
**DisplayName** | Pointer to **string** | Configuration display name. | [optional] 
**Value** | Pointer to **string** | Value of the configuration. | [optional] 
**Required** | Pointer to **bool** | Flag that indicates whether the configuration is required or not. | [optional] 
**Encrypted** | Pointer to **bool** | Flag that indicates whether the configuration value should be encrypted or not. | [optional] 

## Methods

### NewDeviceConfigurationType

`func NewDeviceConfigurationType() *DeviceConfigurationType`

NewDeviceConfigurationType instantiates a new DeviceConfigurationType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDeviceConfigurationTypeWithDefaults

`func NewDeviceConfigurationTypeWithDefaults() *DeviceConfigurationType`

NewDeviceConfigurationTypeWithDefaults instantiates a new DeviceConfigurationType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *DeviceConfigurationType) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *DeviceConfigurationType) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *DeviceConfigurationType) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *DeviceConfigurationType) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDisplayName

`func (o *DeviceConfigurationType) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *DeviceConfigurationType) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *DeviceConfigurationType) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *DeviceConfigurationType) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetValue

`func (o *DeviceConfigurationType) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *DeviceConfigurationType) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *DeviceConfigurationType) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *DeviceConfigurationType) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetRequired

`func (o *DeviceConfigurationType) GetRequired() bool`

GetRequired returns the Required field if non-nil, zero value otherwise.

### GetRequiredOk

`func (o *DeviceConfigurationType) GetRequiredOk() (*bool, bool)`

GetRequiredOk returns a tuple with the Required field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequired

`func (o *DeviceConfigurationType) SetRequired(v bool)`

SetRequired sets Required field to given value.

### HasRequired

`func (o *DeviceConfigurationType) HasRequired() bool`

HasRequired returns a boolean if a field has been set.

### GetEncrypted

`func (o *DeviceConfigurationType) GetEncrypted() bool`

GetEncrypted returns the Encrypted field if non-nil, zero value otherwise.

### GetEncryptedOk

`func (o *DeviceConfigurationType) GetEncryptedOk() (*bool, bool)`

GetEncryptedOk returns a tuple with the Encrypted field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEncrypted

`func (o *DeviceConfigurationType) SetEncrypted(v bool)`

SetEncrypted sets Encrypted field to given value.

### HasEncrypted

`func (o *DeviceConfigurationType) HasEncrypted() bool`

HasEncrypted returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


