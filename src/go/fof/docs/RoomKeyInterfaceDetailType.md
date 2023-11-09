# RoomKeyInterfaceDetailType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AdditionalRoomsLimit** | Pointer to **int32** | Maximum number of additional rooms allowed. | [optional] 
**Encoders** | Pointer to [**RoomKeyEncodersType**](RoomKeyEncodersType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Hotel code of the interface. | [optional] 
**InterfaceDescription** | Pointer to **string** | Description of the interface. | [optional] 
**InterfaceName** | Pointer to **string** | Name of the interface. | [optional] 
**InterfaceRights** | Pointer to [**RoomKeyInterfaceRightsType**](RoomKeyInterfaceRightsType.md) |  | [optional] 
**MultipleRoomKeys** | Pointer to **bool** | Indicator if additional rooms are allowed to be included in key creation. | [optional] 
**PropertyDateTime** | Pointer to **string** | Current property date and time. | [optional] 
**SendValidStartDateTime** | Pointer to **bool** | Indicator if the DLS Interface allows to send valid start date and time. | [optional] 

## Methods

### NewRoomKeyInterfaceDetailType

`func NewRoomKeyInterfaceDetailType() *RoomKeyInterfaceDetailType`

NewRoomKeyInterfaceDetailType instantiates a new RoomKeyInterfaceDetailType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomKeyInterfaceDetailTypeWithDefaults

`func NewRoomKeyInterfaceDetailTypeWithDefaults() *RoomKeyInterfaceDetailType`

NewRoomKeyInterfaceDetailTypeWithDefaults instantiates a new RoomKeyInterfaceDetailType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAdditionalRoomsLimit

`func (o *RoomKeyInterfaceDetailType) GetAdditionalRoomsLimit() int32`

GetAdditionalRoomsLimit returns the AdditionalRoomsLimit field if non-nil, zero value otherwise.

### GetAdditionalRoomsLimitOk

`func (o *RoomKeyInterfaceDetailType) GetAdditionalRoomsLimitOk() (*int32, bool)`

GetAdditionalRoomsLimitOk returns a tuple with the AdditionalRoomsLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdditionalRoomsLimit

`func (o *RoomKeyInterfaceDetailType) SetAdditionalRoomsLimit(v int32)`

SetAdditionalRoomsLimit sets AdditionalRoomsLimit field to given value.

### HasAdditionalRoomsLimit

`func (o *RoomKeyInterfaceDetailType) HasAdditionalRoomsLimit() bool`

HasAdditionalRoomsLimit returns a boolean if a field has been set.

### GetEncoders

`func (o *RoomKeyInterfaceDetailType) GetEncoders() RoomKeyEncodersType`

GetEncoders returns the Encoders field if non-nil, zero value otherwise.

### GetEncodersOk

`func (o *RoomKeyInterfaceDetailType) GetEncodersOk() (*RoomKeyEncodersType, bool)`

GetEncodersOk returns a tuple with the Encoders field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEncoders

`func (o *RoomKeyInterfaceDetailType) SetEncoders(v RoomKeyEncodersType)`

SetEncoders sets Encoders field to given value.

### HasEncoders

`func (o *RoomKeyInterfaceDetailType) HasEncoders() bool`

HasEncoders returns a boolean if a field has been set.

### GetHotelId

`func (o *RoomKeyInterfaceDetailType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *RoomKeyInterfaceDetailType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *RoomKeyInterfaceDetailType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *RoomKeyInterfaceDetailType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetInterfaceDescription

`func (o *RoomKeyInterfaceDetailType) GetInterfaceDescription() string`

GetInterfaceDescription returns the InterfaceDescription field if non-nil, zero value otherwise.

### GetInterfaceDescriptionOk

`func (o *RoomKeyInterfaceDetailType) GetInterfaceDescriptionOk() (*string, bool)`

GetInterfaceDescriptionOk returns a tuple with the InterfaceDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterfaceDescription

`func (o *RoomKeyInterfaceDetailType) SetInterfaceDescription(v string)`

SetInterfaceDescription sets InterfaceDescription field to given value.

### HasInterfaceDescription

`func (o *RoomKeyInterfaceDetailType) HasInterfaceDescription() bool`

HasInterfaceDescription returns a boolean if a field has been set.

### GetInterfaceName

`func (o *RoomKeyInterfaceDetailType) GetInterfaceName() string`

GetInterfaceName returns the InterfaceName field if non-nil, zero value otherwise.

### GetInterfaceNameOk

`func (o *RoomKeyInterfaceDetailType) GetInterfaceNameOk() (*string, bool)`

GetInterfaceNameOk returns a tuple with the InterfaceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterfaceName

`func (o *RoomKeyInterfaceDetailType) SetInterfaceName(v string)`

SetInterfaceName sets InterfaceName field to given value.

### HasInterfaceName

`func (o *RoomKeyInterfaceDetailType) HasInterfaceName() bool`

HasInterfaceName returns a boolean if a field has been set.

### GetInterfaceRights

`func (o *RoomKeyInterfaceDetailType) GetInterfaceRights() RoomKeyInterfaceRightsType`

GetInterfaceRights returns the InterfaceRights field if non-nil, zero value otherwise.

### GetInterfaceRightsOk

`func (o *RoomKeyInterfaceDetailType) GetInterfaceRightsOk() (*RoomKeyInterfaceRightsType, bool)`

GetInterfaceRightsOk returns a tuple with the InterfaceRights field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterfaceRights

`func (o *RoomKeyInterfaceDetailType) SetInterfaceRights(v RoomKeyInterfaceRightsType)`

SetInterfaceRights sets InterfaceRights field to given value.

### HasInterfaceRights

`func (o *RoomKeyInterfaceDetailType) HasInterfaceRights() bool`

HasInterfaceRights returns a boolean if a field has been set.

### GetMultipleRoomKeys

`func (o *RoomKeyInterfaceDetailType) GetMultipleRoomKeys() bool`

GetMultipleRoomKeys returns the MultipleRoomKeys field if non-nil, zero value otherwise.

### GetMultipleRoomKeysOk

`func (o *RoomKeyInterfaceDetailType) GetMultipleRoomKeysOk() (*bool, bool)`

GetMultipleRoomKeysOk returns a tuple with the MultipleRoomKeys field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMultipleRoomKeys

`func (o *RoomKeyInterfaceDetailType) SetMultipleRoomKeys(v bool)`

SetMultipleRoomKeys sets MultipleRoomKeys field to given value.

### HasMultipleRoomKeys

`func (o *RoomKeyInterfaceDetailType) HasMultipleRoomKeys() bool`

HasMultipleRoomKeys returns a boolean if a field has been set.

### GetPropertyDateTime

`func (o *RoomKeyInterfaceDetailType) GetPropertyDateTime() string`

GetPropertyDateTime returns the PropertyDateTime field if non-nil, zero value otherwise.

### GetPropertyDateTimeOk

`func (o *RoomKeyInterfaceDetailType) GetPropertyDateTimeOk() (*string, bool)`

GetPropertyDateTimeOk returns a tuple with the PropertyDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPropertyDateTime

`func (o *RoomKeyInterfaceDetailType) SetPropertyDateTime(v string)`

SetPropertyDateTime sets PropertyDateTime field to given value.

### HasPropertyDateTime

`func (o *RoomKeyInterfaceDetailType) HasPropertyDateTime() bool`

HasPropertyDateTime returns a boolean if a field has been set.

### GetSendValidStartDateTime

`func (o *RoomKeyInterfaceDetailType) GetSendValidStartDateTime() bool`

GetSendValidStartDateTime returns the SendValidStartDateTime field if non-nil, zero value otherwise.

### GetSendValidStartDateTimeOk

`func (o *RoomKeyInterfaceDetailType) GetSendValidStartDateTimeOk() (*bool, bool)`

GetSendValidStartDateTimeOk returns a tuple with the SendValidStartDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSendValidStartDateTime

`func (o *RoomKeyInterfaceDetailType) SetSendValidStartDateTime(v bool)`

SetSendValidStartDateTime sets SendValidStartDateTime field to given value.

### HasSendValidStartDateTime

`func (o *RoomKeyInterfaceDetailType) HasSendValidStartDateTime() bool`

HasSendValidStartDateTime returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


