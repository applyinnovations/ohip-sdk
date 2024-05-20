# InterfaceAdditionalInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MenuType** | Pointer to [**IfcMenuTypeType**](IfcMenuTypeType.md) |  | [optional] 
**MenuName** | Pointer to **string** | Name of the Interface sub-menu | [optional] 
**ControllerPort** | Pointer to **int32** | Opera IFC controller (server) port for the connecting clients. | [optional] 
**VncPort** | Pointer to **int32** | VNC server port for connecting to a VNC server. | [optional] 
**CashierId** | Pointer to **int32** | Cashier Number. | [optional] 
**PathId1** | Pointer to **int32** | Used if interface has to support more than one front office system. | [optional] 
**Timeout** | Pointer to **string** | Used by the Interface module. ( IFC7.exe ) | [optional] 
**DisplayFlag** | Pointer to **bool** | True if the interface will be displayed. | [optional] 
**AutoStartFlag** | Pointer to **bool** | Decides if the interface will be started automatically when the controller is restarted. | [optional] 
**ActiveFlag** | Pointer to **bool** | Indicator if the Hotel Interface is active or not. This is different from the Interface Status, which is either STOPPED or RUNNING. | [optional] 
**InterfaceStatus** | Pointer to [**HotelInterfaceStatusType**](HotelInterfaceStatusType.md) |  | [optional] 
**Version** | Pointer to **string** | Version no. of each external interface that is installed | [optional] 
**MsgExpiresAfter** | Pointer to **string** | (Internal Use) Message Expires After | [optional] 
**UseDataThroughFlag** | Pointer to **bool** |  | [optional] 
**NAStart** | Pointer to **bool** | Indicator if the Hotel Interface handles night audit commands. | [optional] 
**MultipleRoomKey** | Pointer to **bool** | Indicator if the Hotel Interface allows multiple room selection for keys. | [optional] 
**OnlineKeySystem** | Pointer to **bool** | Indicator if the Hotel Interface is an online key system. | [optional] 
**DeleteIfcKeysOnKeyDelete** | Pointer to **bool** | Indicator if the Interface Keys will be deleted on KeyDelete. | [optional] 
**SendTrack1Data** | Pointer to **bool** | Indicator for Hotel Interface Send Track 1 Data. | [optional] 
**SendTrack2Data** | Pointer to **bool** | Indicator for Hotel Interface Send Track 2 Data. | [optional] 
**SendRoomStatus** | Pointer to **bool** | Indicator if the Room Status will be sent. | [optional] 
**TelephoneCharge** | Pointer to [**TelephoneChargeType**](TelephoneChargeType.md) |  | [optional] 
**AdditionalRoomsLimit** | Pointer to **int32** | Maximum number of additional rooms allowed. | [optional] 
**SendValidStartDateTime** | Pointer to **bool** | Indicator if the DLS Interface allows to send valid start date and time. | [optional] 

## Methods

### NewInterfaceAdditionalInfoType

`func NewInterfaceAdditionalInfoType() *InterfaceAdditionalInfoType`

NewInterfaceAdditionalInfoType instantiates a new InterfaceAdditionalInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInterfaceAdditionalInfoTypeWithDefaults

`func NewInterfaceAdditionalInfoTypeWithDefaults() *InterfaceAdditionalInfoType`

NewInterfaceAdditionalInfoTypeWithDefaults instantiates a new InterfaceAdditionalInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMenuType

`func (o *InterfaceAdditionalInfoType) GetMenuType() IfcMenuTypeType`

GetMenuType returns the MenuType field if non-nil, zero value otherwise.

### GetMenuTypeOk

`func (o *InterfaceAdditionalInfoType) GetMenuTypeOk() (*IfcMenuTypeType, bool)`

GetMenuTypeOk returns a tuple with the MenuType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMenuType

`func (o *InterfaceAdditionalInfoType) SetMenuType(v IfcMenuTypeType)`

SetMenuType sets MenuType field to given value.

### HasMenuType

`func (o *InterfaceAdditionalInfoType) HasMenuType() bool`

HasMenuType returns a boolean if a field has been set.

### GetMenuName

`func (o *InterfaceAdditionalInfoType) GetMenuName() string`

GetMenuName returns the MenuName field if non-nil, zero value otherwise.

### GetMenuNameOk

`func (o *InterfaceAdditionalInfoType) GetMenuNameOk() (*string, bool)`

GetMenuNameOk returns a tuple with the MenuName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMenuName

`func (o *InterfaceAdditionalInfoType) SetMenuName(v string)`

SetMenuName sets MenuName field to given value.

### HasMenuName

`func (o *InterfaceAdditionalInfoType) HasMenuName() bool`

HasMenuName returns a boolean if a field has been set.

### GetControllerPort

`func (o *InterfaceAdditionalInfoType) GetControllerPort() int32`

GetControllerPort returns the ControllerPort field if non-nil, zero value otherwise.

### GetControllerPortOk

`func (o *InterfaceAdditionalInfoType) GetControllerPortOk() (*int32, bool)`

GetControllerPortOk returns a tuple with the ControllerPort field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetControllerPort

`func (o *InterfaceAdditionalInfoType) SetControllerPort(v int32)`

SetControllerPort sets ControllerPort field to given value.

### HasControllerPort

`func (o *InterfaceAdditionalInfoType) HasControllerPort() bool`

HasControllerPort returns a boolean if a field has been set.

### GetVncPort

`func (o *InterfaceAdditionalInfoType) GetVncPort() int32`

GetVncPort returns the VncPort field if non-nil, zero value otherwise.

### GetVncPortOk

`func (o *InterfaceAdditionalInfoType) GetVncPortOk() (*int32, bool)`

GetVncPortOk returns a tuple with the VncPort field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVncPort

`func (o *InterfaceAdditionalInfoType) SetVncPort(v int32)`

SetVncPort sets VncPort field to given value.

### HasVncPort

`func (o *InterfaceAdditionalInfoType) HasVncPort() bool`

HasVncPort returns a boolean if a field has been set.

### GetCashierId

`func (o *InterfaceAdditionalInfoType) GetCashierId() int32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *InterfaceAdditionalInfoType) GetCashierIdOk() (*int32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *InterfaceAdditionalInfoType) SetCashierId(v int32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *InterfaceAdditionalInfoType) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.

### GetPathId1

`func (o *InterfaceAdditionalInfoType) GetPathId1() int32`

GetPathId1 returns the PathId1 field if non-nil, zero value otherwise.

### GetPathId1Ok

`func (o *InterfaceAdditionalInfoType) GetPathId1Ok() (*int32, bool)`

GetPathId1Ok returns a tuple with the PathId1 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPathId1

`func (o *InterfaceAdditionalInfoType) SetPathId1(v int32)`

SetPathId1 sets PathId1 field to given value.

### HasPathId1

`func (o *InterfaceAdditionalInfoType) HasPathId1() bool`

HasPathId1 returns a boolean if a field has been set.

### GetTimeout

`func (o *InterfaceAdditionalInfoType) GetTimeout() string`

GetTimeout returns the Timeout field if non-nil, zero value otherwise.

### GetTimeoutOk

`func (o *InterfaceAdditionalInfoType) GetTimeoutOk() (*string, bool)`

GetTimeoutOk returns a tuple with the Timeout field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeout

`func (o *InterfaceAdditionalInfoType) SetTimeout(v string)`

SetTimeout sets Timeout field to given value.

### HasTimeout

`func (o *InterfaceAdditionalInfoType) HasTimeout() bool`

HasTimeout returns a boolean if a field has been set.

### GetDisplayFlag

`func (o *InterfaceAdditionalInfoType) GetDisplayFlag() bool`

GetDisplayFlag returns the DisplayFlag field if non-nil, zero value otherwise.

### GetDisplayFlagOk

`func (o *InterfaceAdditionalInfoType) GetDisplayFlagOk() (*bool, bool)`

GetDisplayFlagOk returns a tuple with the DisplayFlag field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayFlag

`func (o *InterfaceAdditionalInfoType) SetDisplayFlag(v bool)`

SetDisplayFlag sets DisplayFlag field to given value.

### HasDisplayFlag

`func (o *InterfaceAdditionalInfoType) HasDisplayFlag() bool`

HasDisplayFlag returns a boolean if a field has been set.

### GetAutoStartFlag

`func (o *InterfaceAdditionalInfoType) GetAutoStartFlag() bool`

GetAutoStartFlag returns the AutoStartFlag field if non-nil, zero value otherwise.

### GetAutoStartFlagOk

`func (o *InterfaceAdditionalInfoType) GetAutoStartFlagOk() (*bool, bool)`

GetAutoStartFlagOk returns a tuple with the AutoStartFlag field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoStartFlag

`func (o *InterfaceAdditionalInfoType) SetAutoStartFlag(v bool)`

SetAutoStartFlag sets AutoStartFlag field to given value.

### HasAutoStartFlag

`func (o *InterfaceAdditionalInfoType) HasAutoStartFlag() bool`

HasAutoStartFlag returns a boolean if a field has been set.

### GetActiveFlag

`func (o *InterfaceAdditionalInfoType) GetActiveFlag() bool`

GetActiveFlag returns the ActiveFlag field if non-nil, zero value otherwise.

### GetActiveFlagOk

`func (o *InterfaceAdditionalInfoType) GetActiveFlagOk() (*bool, bool)`

GetActiveFlagOk returns a tuple with the ActiveFlag field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActiveFlag

`func (o *InterfaceAdditionalInfoType) SetActiveFlag(v bool)`

SetActiveFlag sets ActiveFlag field to given value.

### HasActiveFlag

`func (o *InterfaceAdditionalInfoType) HasActiveFlag() bool`

HasActiveFlag returns a boolean if a field has been set.

### GetInterfaceStatus

`func (o *InterfaceAdditionalInfoType) GetInterfaceStatus() HotelInterfaceStatusType`

GetInterfaceStatus returns the InterfaceStatus field if non-nil, zero value otherwise.

### GetInterfaceStatusOk

`func (o *InterfaceAdditionalInfoType) GetInterfaceStatusOk() (*HotelInterfaceStatusType, bool)`

GetInterfaceStatusOk returns a tuple with the InterfaceStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterfaceStatus

`func (o *InterfaceAdditionalInfoType) SetInterfaceStatus(v HotelInterfaceStatusType)`

SetInterfaceStatus sets InterfaceStatus field to given value.

### HasInterfaceStatus

`func (o *InterfaceAdditionalInfoType) HasInterfaceStatus() bool`

HasInterfaceStatus returns a boolean if a field has been set.

### GetVersion

`func (o *InterfaceAdditionalInfoType) GetVersion() string`

GetVersion returns the Version field if non-nil, zero value otherwise.

### GetVersionOk

`func (o *InterfaceAdditionalInfoType) GetVersionOk() (*string, bool)`

GetVersionOk returns a tuple with the Version field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersion

`func (o *InterfaceAdditionalInfoType) SetVersion(v string)`

SetVersion sets Version field to given value.

### HasVersion

`func (o *InterfaceAdditionalInfoType) HasVersion() bool`

HasVersion returns a boolean if a field has been set.

### GetMsgExpiresAfter

`func (o *InterfaceAdditionalInfoType) GetMsgExpiresAfter() string`

GetMsgExpiresAfter returns the MsgExpiresAfter field if non-nil, zero value otherwise.

### GetMsgExpiresAfterOk

`func (o *InterfaceAdditionalInfoType) GetMsgExpiresAfterOk() (*string, bool)`

GetMsgExpiresAfterOk returns a tuple with the MsgExpiresAfter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMsgExpiresAfter

`func (o *InterfaceAdditionalInfoType) SetMsgExpiresAfter(v string)`

SetMsgExpiresAfter sets MsgExpiresAfter field to given value.

### HasMsgExpiresAfter

`func (o *InterfaceAdditionalInfoType) HasMsgExpiresAfter() bool`

HasMsgExpiresAfter returns a boolean if a field has been set.

### GetUseDataThroughFlag

`func (o *InterfaceAdditionalInfoType) GetUseDataThroughFlag() bool`

GetUseDataThroughFlag returns the UseDataThroughFlag field if non-nil, zero value otherwise.

### GetUseDataThroughFlagOk

`func (o *InterfaceAdditionalInfoType) GetUseDataThroughFlagOk() (*bool, bool)`

GetUseDataThroughFlagOk returns a tuple with the UseDataThroughFlag field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseDataThroughFlag

`func (o *InterfaceAdditionalInfoType) SetUseDataThroughFlag(v bool)`

SetUseDataThroughFlag sets UseDataThroughFlag field to given value.

### HasUseDataThroughFlag

`func (o *InterfaceAdditionalInfoType) HasUseDataThroughFlag() bool`

HasUseDataThroughFlag returns a boolean if a field has been set.

### GetNAStart

`func (o *InterfaceAdditionalInfoType) GetNAStart() bool`

GetNAStart returns the NAStart field if non-nil, zero value otherwise.

### GetNAStartOk

`func (o *InterfaceAdditionalInfoType) GetNAStartOk() (*bool, bool)`

GetNAStartOk returns a tuple with the NAStart field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNAStart

`func (o *InterfaceAdditionalInfoType) SetNAStart(v bool)`

SetNAStart sets NAStart field to given value.

### HasNAStart

`func (o *InterfaceAdditionalInfoType) HasNAStart() bool`

HasNAStart returns a boolean if a field has been set.

### GetMultipleRoomKey

`func (o *InterfaceAdditionalInfoType) GetMultipleRoomKey() bool`

GetMultipleRoomKey returns the MultipleRoomKey field if non-nil, zero value otherwise.

### GetMultipleRoomKeyOk

`func (o *InterfaceAdditionalInfoType) GetMultipleRoomKeyOk() (*bool, bool)`

GetMultipleRoomKeyOk returns a tuple with the MultipleRoomKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMultipleRoomKey

`func (o *InterfaceAdditionalInfoType) SetMultipleRoomKey(v bool)`

SetMultipleRoomKey sets MultipleRoomKey field to given value.

### HasMultipleRoomKey

`func (o *InterfaceAdditionalInfoType) HasMultipleRoomKey() bool`

HasMultipleRoomKey returns a boolean if a field has been set.

### GetOnlineKeySystem

`func (o *InterfaceAdditionalInfoType) GetOnlineKeySystem() bool`

GetOnlineKeySystem returns the OnlineKeySystem field if non-nil, zero value otherwise.

### GetOnlineKeySystemOk

`func (o *InterfaceAdditionalInfoType) GetOnlineKeySystemOk() (*bool, bool)`

GetOnlineKeySystemOk returns a tuple with the OnlineKeySystem field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOnlineKeySystem

`func (o *InterfaceAdditionalInfoType) SetOnlineKeySystem(v bool)`

SetOnlineKeySystem sets OnlineKeySystem field to given value.

### HasOnlineKeySystem

`func (o *InterfaceAdditionalInfoType) HasOnlineKeySystem() bool`

HasOnlineKeySystem returns a boolean if a field has been set.

### GetDeleteIfcKeysOnKeyDelete

`func (o *InterfaceAdditionalInfoType) GetDeleteIfcKeysOnKeyDelete() bool`

GetDeleteIfcKeysOnKeyDelete returns the DeleteIfcKeysOnKeyDelete field if non-nil, zero value otherwise.

### GetDeleteIfcKeysOnKeyDeleteOk

`func (o *InterfaceAdditionalInfoType) GetDeleteIfcKeysOnKeyDeleteOk() (*bool, bool)`

GetDeleteIfcKeysOnKeyDeleteOk returns a tuple with the DeleteIfcKeysOnKeyDelete field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeleteIfcKeysOnKeyDelete

`func (o *InterfaceAdditionalInfoType) SetDeleteIfcKeysOnKeyDelete(v bool)`

SetDeleteIfcKeysOnKeyDelete sets DeleteIfcKeysOnKeyDelete field to given value.

### HasDeleteIfcKeysOnKeyDelete

`func (o *InterfaceAdditionalInfoType) HasDeleteIfcKeysOnKeyDelete() bool`

HasDeleteIfcKeysOnKeyDelete returns a boolean if a field has been set.

### GetSendTrack1Data

`func (o *InterfaceAdditionalInfoType) GetSendTrack1Data() bool`

GetSendTrack1Data returns the SendTrack1Data field if non-nil, zero value otherwise.

### GetSendTrack1DataOk

`func (o *InterfaceAdditionalInfoType) GetSendTrack1DataOk() (*bool, bool)`

GetSendTrack1DataOk returns a tuple with the SendTrack1Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSendTrack1Data

`func (o *InterfaceAdditionalInfoType) SetSendTrack1Data(v bool)`

SetSendTrack1Data sets SendTrack1Data field to given value.

### HasSendTrack1Data

`func (o *InterfaceAdditionalInfoType) HasSendTrack1Data() bool`

HasSendTrack1Data returns a boolean if a field has been set.

### GetSendTrack2Data

`func (o *InterfaceAdditionalInfoType) GetSendTrack2Data() bool`

GetSendTrack2Data returns the SendTrack2Data field if non-nil, zero value otherwise.

### GetSendTrack2DataOk

`func (o *InterfaceAdditionalInfoType) GetSendTrack2DataOk() (*bool, bool)`

GetSendTrack2DataOk returns a tuple with the SendTrack2Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSendTrack2Data

`func (o *InterfaceAdditionalInfoType) SetSendTrack2Data(v bool)`

SetSendTrack2Data sets SendTrack2Data field to given value.

### HasSendTrack2Data

`func (o *InterfaceAdditionalInfoType) HasSendTrack2Data() bool`

HasSendTrack2Data returns a boolean if a field has been set.

### GetSendRoomStatus

`func (o *InterfaceAdditionalInfoType) GetSendRoomStatus() bool`

GetSendRoomStatus returns the SendRoomStatus field if non-nil, zero value otherwise.

### GetSendRoomStatusOk

`func (o *InterfaceAdditionalInfoType) GetSendRoomStatusOk() (*bool, bool)`

GetSendRoomStatusOk returns a tuple with the SendRoomStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSendRoomStatus

`func (o *InterfaceAdditionalInfoType) SetSendRoomStatus(v bool)`

SetSendRoomStatus sets SendRoomStatus field to given value.

### HasSendRoomStatus

`func (o *InterfaceAdditionalInfoType) HasSendRoomStatus() bool`

HasSendRoomStatus returns a boolean if a field has been set.

### GetTelephoneCharge

`func (o *InterfaceAdditionalInfoType) GetTelephoneCharge() TelephoneChargeType`

GetTelephoneCharge returns the TelephoneCharge field if non-nil, zero value otherwise.

### GetTelephoneChargeOk

`func (o *InterfaceAdditionalInfoType) GetTelephoneChargeOk() (*TelephoneChargeType, bool)`

GetTelephoneChargeOk returns a tuple with the TelephoneCharge field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTelephoneCharge

`func (o *InterfaceAdditionalInfoType) SetTelephoneCharge(v TelephoneChargeType)`

SetTelephoneCharge sets TelephoneCharge field to given value.

### HasTelephoneCharge

`func (o *InterfaceAdditionalInfoType) HasTelephoneCharge() bool`

HasTelephoneCharge returns a boolean if a field has been set.

### GetAdditionalRoomsLimit

`func (o *InterfaceAdditionalInfoType) GetAdditionalRoomsLimit() int32`

GetAdditionalRoomsLimit returns the AdditionalRoomsLimit field if non-nil, zero value otherwise.

### GetAdditionalRoomsLimitOk

`func (o *InterfaceAdditionalInfoType) GetAdditionalRoomsLimitOk() (*int32, bool)`

GetAdditionalRoomsLimitOk returns a tuple with the AdditionalRoomsLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdditionalRoomsLimit

`func (o *InterfaceAdditionalInfoType) SetAdditionalRoomsLimit(v int32)`

SetAdditionalRoomsLimit sets AdditionalRoomsLimit field to given value.

### HasAdditionalRoomsLimit

`func (o *InterfaceAdditionalInfoType) HasAdditionalRoomsLimit() bool`

HasAdditionalRoomsLimit returns a boolean if a field has been set.

### GetSendValidStartDateTime

`func (o *InterfaceAdditionalInfoType) GetSendValidStartDateTime() bool`

GetSendValidStartDateTime returns the SendValidStartDateTime field if non-nil, zero value otherwise.

### GetSendValidStartDateTimeOk

`func (o *InterfaceAdditionalInfoType) GetSendValidStartDateTimeOk() (*bool, bool)`

GetSendValidStartDateTimeOk returns a tuple with the SendValidStartDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSendValidStartDateTime

`func (o *InterfaceAdditionalInfoType) SetSendValidStartDateTime(v bool)`

SetSendValidStartDateTime sets SendValidStartDateTime field to given value.

### HasSendValidStartDateTime

`func (o *InterfaceAdditionalInfoType) HasSendValidStartDateTime() bool`

HasSendValidStartDateTime returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


