# ExternalDeviceConfigurationType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Property for which the device is configured. | [optional] 
**Device** | Pointer to [**SupportedExternalDeviceType**](SupportedExternalDeviceType.md) |  | [optional] 
**DeviceConfigurations** | Pointer to [**[]DeviceConfigurationType**](DeviceConfigurationType.md) |  | [optional] 
**CodeMappings** | Pointer to [**[]DeviceMappingType**](DeviceMappingType.md) | Type that contains the mappings of the codes used in the external device to the code used in OPERA. | [optional] 

## Methods

### NewExternalDeviceConfigurationType

`func NewExternalDeviceConfigurationType() *ExternalDeviceConfigurationType`

NewExternalDeviceConfigurationType instantiates a new ExternalDeviceConfigurationType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExternalDeviceConfigurationTypeWithDefaults

`func NewExternalDeviceConfigurationTypeWithDefaults() *ExternalDeviceConfigurationType`

NewExternalDeviceConfigurationTypeWithDefaults instantiates a new ExternalDeviceConfigurationType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *ExternalDeviceConfigurationType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ExternalDeviceConfigurationType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ExternalDeviceConfigurationType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ExternalDeviceConfigurationType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetDevice

`func (o *ExternalDeviceConfigurationType) GetDevice() SupportedExternalDeviceType`

GetDevice returns the Device field if non-nil, zero value otherwise.

### GetDeviceOk

`func (o *ExternalDeviceConfigurationType) GetDeviceOk() (*SupportedExternalDeviceType, bool)`

GetDeviceOk returns a tuple with the Device field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDevice

`func (o *ExternalDeviceConfigurationType) SetDevice(v SupportedExternalDeviceType)`

SetDevice sets Device field to given value.

### HasDevice

`func (o *ExternalDeviceConfigurationType) HasDevice() bool`

HasDevice returns a boolean if a field has been set.

### GetDeviceConfigurations

`func (o *ExternalDeviceConfigurationType) GetDeviceConfigurations() []DeviceConfigurationType`

GetDeviceConfigurations returns the DeviceConfigurations field if non-nil, zero value otherwise.

### GetDeviceConfigurationsOk

`func (o *ExternalDeviceConfigurationType) GetDeviceConfigurationsOk() (*[]DeviceConfigurationType, bool)`

GetDeviceConfigurationsOk returns a tuple with the DeviceConfigurations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeviceConfigurations

`func (o *ExternalDeviceConfigurationType) SetDeviceConfigurations(v []DeviceConfigurationType)`

SetDeviceConfigurations sets DeviceConfigurations field to given value.

### HasDeviceConfigurations

`func (o *ExternalDeviceConfigurationType) HasDeviceConfigurations() bool`

HasDeviceConfigurations returns a boolean if a field has been set.

### GetCodeMappings

`func (o *ExternalDeviceConfigurationType) GetCodeMappings() []DeviceMappingType`

GetCodeMappings returns the CodeMappings field if non-nil, zero value otherwise.

### GetCodeMappingsOk

`func (o *ExternalDeviceConfigurationType) GetCodeMappingsOk() (*[]DeviceMappingType, bool)`

GetCodeMappingsOk returns a tuple with the CodeMappings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCodeMappings

`func (o *ExternalDeviceConfigurationType) SetCodeMappings(v []DeviceMappingType)`

SetCodeMappings sets CodeMappings field to given value.

### HasCodeMappings

`func (o *ExternalDeviceConfigurationType) HasCodeMappings() bool`

HasCodeMappings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


