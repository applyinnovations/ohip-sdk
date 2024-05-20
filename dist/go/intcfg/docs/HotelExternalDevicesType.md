# HotelExternalDevicesType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Property for which the device is configured. | [optional] 
**SupportedDevices** | Pointer to [**[]SupportedExternalDeviceType**](SupportedExternalDeviceType.md) |  | [optional] 

## Methods

### NewHotelExternalDevicesType

`func NewHotelExternalDevicesType() *HotelExternalDevicesType`

NewHotelExternalDevicesType instantiates a new HotelExternalDevicesType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHotelExternalDevicesTypeWithDefaults

`func NewHotelExternalDevicesTypeWithDefaults() *HotelExternalDevicesType`

NewHotelExternalDevicesTypeWithDefaults instantiates a new HotelExternalDevicesType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *HotelExternalDevicesType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *HotelExternalDevicesType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *HotelExternalDevicesType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *HotelExternalDevicesType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetSupportedDevices

`func (o *HotelExternalDevicesType) GetSupportedDevices() []SupportedExternalDeviceType`

GetSupportedDevices returns the SupportedDevices field if non-nil, zero value otherwise.

### GetSupportedDevicesOk

`func (o *HotelExternalDevicesType) GetSupportedDevicesOk() (*[]SupportedExternalDeviceType, bool)`

GetSupportedDevicesOk returns a tuple with the SupportedDevices field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSupportedDevices

`func (o *HotelExternalDevicesType) SetSupportedDevices(v []SupportedExternalDeviceType)`

SetSupportedDevices sets SupportedDevices field to given value.

### HasSupportedDevices

`func (o *HotelExternalDevicesType) HasSupportedDevices() bool`

HasSupportedDevices returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


