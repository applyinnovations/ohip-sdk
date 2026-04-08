# RoomMaskSetupType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**WakeUpCall** | Pointer to **bool** | Value to set/check if the wake up call funtionality is enabled/disabled for the particular line number. | [optional] 
**DoNotDisturb** | Pointer to [**DoNotDisturbType**](DoNotDisturbType.md) |  | [optional] 
**ClassOfService** | Pointer to [**ClassOfServiceConfigType**](ClassOfServiceConfigType.md) |  | [optional] 
**DirectInwardDial** | Pointer to [**DirectInwardDialType**](DirectInwardDialType.md) |  | [optional] 
**MessageWaiting** | Pointer to [**MessageWaitingType**](MessageWaitingType.md) |  | [optional] 
**MaskDialNumber** | Pointer to [**MaskDialNumberType**](MaskDialNumberType.md) |  | [optional] 

## Methods

### NewRoomMaskSetupType

`func NewRoomMaskSetupType() *RoomMaskSetupType`

NewRoomMaskSetupType instantiates a new RoomMaskSetupType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomMaskSetupTypeWithDefaults

`func NewRoomMaskSetupTypeWithDefaults() *RoomMaskSetupType`

NewRoomMaskSetupTypeWithDefaults instantiates a new RoomMaskSetupType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetWakeUpCall

`func (o *RoomMaskSetupType) GetWakeUpCall() bool`

GetWakeUpCall returns the WakeUpCall field if non-nil, zero value otherwise.

### GetWakeUpCallOk

`func (o *RoomMaskSetupType) GetWakeUpCallOk() (*bool, bool)`

GetWakeUpCallOk returns a tuple with the WakeUpCall field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWakeUpCall

`func (o *RoomMaskSetupType) SetWakeUpCall(v bool)`

SetWakeUpCall sets WakeUpCall field to given value.

### HasWakeUpCall

`func (o *RoomMaskSetupType) HasWakeUpCall() bool`

HasWakeUpCall returns a boolean if a field has been set.

### GetDoNotDisturb

`func (o *RoomMaskSetupType) GetDoNotDisturb() DoNotDisturbType`

GetDoNotDisturb returns the DoNotDisturb field if non-nil, zero value otherwise.

### GetDoNotDisturbOk

`func (o *RoomMaskSetupType) GetDoNotDisturbOk() (*DoNotDisturbType, bool)`

GetDoNotDisturbOk returns a tuple with the DoNotDisturb field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDoNotDisturb

`func (o *RoomMaskSetupType) SetDoNotDisturb(v DoNotDisturbType)`

SetDoNotDisturb sets DoNotDisturb field to given value.

### HasDoNotDisturb

`func (o *RoomMaskSetupType) HasDoNotDisturb() bool`

HasDoNotDisturb returns a boolean if a field has been set.

### GetClassOfService

`func (o *RoomMaskSetupType) GetClassOfService() ClassOfServiceConfigType`

GetClassOfService returns the ClassOfService field if non-nil, zero value otherwise.

### GetClassOfServiceOk

`func (o *RoomMaskSetupType) GetClassOfServiceOk() (*ClassOfServiceConfigType, bool)`

GetClassOfServiceOk returns a tuple with the ClassOfService field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClassOfService

`func (o *RoomMaskSetupType) SetClassOfService(v ClassOfServiceConfigType)`

SetClassOfService sets ClassOfService field to given value.

### HasClassOfService

`func (o *RoomMaskSetupType) HasClassOfService() bool`

HasClassOfService returns a boolean if a field has been set.

### GetDirectInwardDial

`func (o *RoomMaskSetupType) GetDirectInwardDial() DirectInwardDialType`

GetDirectInwardDial returns the DirectInwardDial field if non-nil, zero value otherwise.

### GetDirectInwardDialOk

`func (o *RoomMaskSetupType) GetDirectInwardDialOk() (*DirectInwardDialType, bool)`

GetDirectInwardDialOk returns a tuple with the DirectInwardDial field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDirectInwardDial

`func (o *RoomMaskSetupType) SetDirectInwardDial(v DirectInwardDialType)`

SetDirectInwardDial sets DirectInwardDial field to given value.

### HasDirectInwardDial

`func (o *RoomMaskSetupType) HasDirectInwardDial() bool`

HasDirectInwardDial returns a boolean if a field has been set.

### GetMessageWaiting

`func (o *RoomMaskSetupType) GetMessageWaiting() MessageWaitingType`

GetMessageWaiting returns the MessageWaiting field if non-nil, zero value otherwise.

### GetMessageWaitingOk

`func (o *RoomMaskSetupType) GetMessageWaitingOk() (*MessageWaitingType, bool)`

GetMessageWaitingOk returns a tuple with the MessageWaiting field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessageWaiting

`func (o *RoomMaskSetupType) SetMessageWaiting(v MessageWaitingType)`

SetMessageWaiting sets MessageWaiting field to given value.

### HasMessageWaiting

`func (o *RoomMaskSetupType) HasMessageWaiting() bool`

HasMessageWaiting returns a boolean if a field has been set.

### GetMaskDialNumber

`func (o *RoomMaskSetupType) GetMaskDialNumber() MaskDialNumberType`

GetMaskDialNumber returns the MaskDialNumber field if non-nil, zero value otherwise.

### GetMaskDialNumberOk

`func (o *RoomMaskSetupType) GetMaskDialNumberOk() (*MaskDialNumberType, bool)`

GetMaskDialNumberOk returns a tuple with the MaskDialNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaskDialNumber

`func (o *RoomMaskSetupType) SetMaskDialNumber(v MaskDialNumberType)`

SetMaskDialNumber sets MaskDialNumber field to given value.

### HasMaskDialNumber

`func (o *RoomMaskSetupType) HasMaskDialNumber() bool`

HasMaskDialNumber returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


