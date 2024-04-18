/*
OPERA Cloud Front Desk Configuration API

APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fofcfg

import (
	"encoding/json"
)

// checks if the InterfaceAdditionalInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &InterfaceAdditionalInfoType{}

// InterfaceAdditionalInfoType struct for InterfaceAdditionalInfoType
type InterfaceAdditionalInfoType struct {
	// Indicator if the Hotel Interface is active or not. This is different from the Interface Status, which is either STOPPED or RUNNING.
	ActiveFlag *bool `json:"activeFlag,omitempty"`
	// Maximum number of additional rooms allowed.
	AdditionalRoomsLimit *int32 `json:"additionalRoomsLimit,omitempty"`
	// Decides if the interface will be started automatically when the controller is restarted.
	AutoStartFlag *bool `json:"autoStartFlag,omitempty"`
	// Cashier Number.
	CashierId *int32 `json:"cashierId,omitempty"`
	// Opera IFC controller (server) port for the connecting clients.
	ControllerPort *int32 `json:"controllerPort,omitempty"`
	// Indicator if the Interface Keys will be deleted on KeyDelete.
	DeleteIfcKeysOnKeyDelete *bool `json:"deleteIfcKeysOnKeyDelete,omitempty"`
	// True if the interface will be displayed.
	DisplayFlag *bool `json:"displayFlag,omitempty"`
	InterfaceStatus *HotelInterfaceStatusType `json:"interfaceStatus,omitempty"`
	// Name of the Interface sub-menu
	MenuName *string `json:"menuName,omitempty"`
	MenuType *IfcMenuTypeType `json:"menuType,omitempty"`
	// (Internal Use) Message Expires After
	MsgExpiresAfter *string `json:"msgExpiresAfter,omitempty"`
	// Indicator if the Hotel Interface allows multiple room selection for keys.
	MultipleRoomKey *bool `json:"multipleRoomKey,omitempty"`
	// Indicator if the Hotel Interface handles night audit commands.
	NAStart *bool `json:"nAStart,omitempty"`
	// Indicator if the Hotel Interface is an online key system.
	OnlineKeySystem *bool `json:"onlineKeySystem,omitempty"`
	// Used if interface has to support more than one front office system.
	PathId1 *int32 `json:"pathId1,omitempty"`
	// Indicator if the Room Status will be sent.
	SendRoomStatus *bool `json:"sendRoomStatus,omitempty"`
	// Indicator for Hotel Interface Send Track 1 Data.
	SendTrack1Data *bool `json:"sendTrack1Data,omitempty"`
	// Indicator for Hotel Interface Send Track 2 Data.
	SendTrack2Data *bool `json:"sendTrack2Data,omitempty"`
	// Indicator if the DLS Interface allows to send valid start date and time.
	SendValidStartDateTime *bool `json:"sendValidStartDateTime,omitempty"`
	TelephoneCharge *TelephoneChargeType `json:"telephoneCharge,omitempty"`
	// Used by the Interface module. ( IFC7.exe )
	Timeout *string `json:"timeout,omitempty"`
	UseDataThroughFlag *bool `json:"useDataThroughFlag,omitempty"`
	// Version no. of each external interface that is installed
	Version *string `json:"version,omitempty"`
	// VNC server port for connecting to a VNC server.
	VncPort *int32 `json:"vncPort,omitempty"`
}

// NewInterfaceAdditionalInfoType instantiates a new InterfaceAdditionalInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewInterfaceAdditionalInfoType() *InterfaceAdditionalInfoType {
	this := InterfaceAdditionalInfoType{}
	return &this
}

// NewInterfaceAdditionalInfoTypeWithDefaults instantiates a new InterfaceAdditionalInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewInterfaceAdditionalInfoTypeWithDefaults() *InterfaceAdditionalInfoType {
	this := InterfaceAdditionalInfoType{}
	return &this
}

// GetActiveFlag returns the ActiveFlag field value if set, zero value otherwise.
func (o *InterfaceAdditionalInfoType) GetActiveFlag() bool {
	if o == nil || IsNil(o.ActiveFlag) {
		var ret bool
		return ret
	}
	return *o.ActiveFlag
}

// GetActiveFlagOk returns a tuple with the ActiveFlag field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InterfaceAdditionalInfoType) GetActiveFlagOk() (*bool, bool) {
	if o == nil || IsNil(o.ActiveFlag) {
		return nil, false
	}
	return o.ActiveFlag, true
}

// HasActiveFlag returns a boolean if a field has been set.
func (o *InterfaceAdditionalInfoType) HasActiveFlag() bool {
	if o != nil && !IsNil(o.ActiveFlag) {
		return true
	}

	return false
}

// SetActiveFlag gets a reference to the given bool and assigns it to the ActiveFlag field.
func (o *InterfaceAdditionalInfoType) SetActiveFlag(v bool) {
	o.ActiveFlag = &v
}

// GetAdditionalRoomsLimit returns the AdditionalRoomsLimit field value if set, zero value otherwise.
func (o *InterfaceAdditionalInfoType) GetAdditionalRoomsLimit() int32 {
	if o == nil || IsNil(o.AdditionalRoomsLimit) {
		var ret int32
		return ret
	}
	return *o.AdditionalRoomsLimit
}

// GetAdditionalRoomsLimitOk returns a tuple with the AdditionalRoomsLimit field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InterfaceAdditionalInfoType) GetAdditionalRoomsLimitOk() (*int32, bool) {
	if o == nil || IsNil(o.AdditionalRoomsLimit) {
		return nil, false
	}
	return o.AdditionalRoomsLimit, true
}

// HasAdditionalRoomsLimit returns a boolean if a field has been set.
func (o *InterfaceAdditionalInfoType) HasAdditionalRoomsLimit() bool {
	if o != nil && !IsNil(o.AdditionalRoomsLimit) {
		return true
	}

	return false
}

// SetAdditionalRoomsLimit gets a reference to the given int32 and assigns it to the AdditionalRoomsLimit field.
func (o *InterfaceAdditionalInfoType) SetAdditionalRoomsLimit(v int32) {
	o.AdditionalRoomsLimit = &v
}

// GetAutoStartFlag returns the AutoStartFlag field value if set, zero value otherwise.
func (o *InterfaceAdditionalInfoType) GetAutoStartFlag() bool {
	if o == nil || IsNil(o.AutoStartFlag) {
		var ret bool
		return ret
	}
	return *o.AutoStartFlag
}

// GetAutoStartFlagOk returns a tuple with the AutoStartFlag field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InterfaceAdditionalInfoType) GetAutoStartFlagOk() (*bool, bool) {
	if o == nil || IsNil(o.AutoStartFlag) {
		return nil, false
	}
	return o.AutoStartFlag, true
}

// HasAutoStartFlag returns a boolean if a field has been set.
func (o *InterfaceAdditionalInfoType) HasAutoStartFlag() bool {
	if o != nil && !IsNil(o.AutoStartFlag) {
		return true
	}

	return false
}

// SetAutoStartFlag gets a reference to the given bool and assigns it to the AutoStartFlag field.
func (o *InterfaceAdditionalInfoType) SetAutoStartFlag(v bool) {
	o.AutoStartFlag = &v
}

// GetCashierId returns the CashierId field value if set, zero value otherwise.
func (o *InterfaceAdditionalInfoType) GetCashierId() int32 {
	if o == nil || IsNil(o.CashierId) {
		var ret int32
		return ret
	}
	return *o.CashierId
}

// GetCashierIdOk returns a tuple with the CashierId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InterfaceAdditionalInfoType) GetCashierIdOk() (*int32, bool) {
	if o == nil || IsNil(o.CashierId) {
		return nil, false
	}
	return o.CashierId, true
}

// HasCashierId returns a boolean if a field has been set.
func (o *InterfaceAdditionalInfoType) HasCashierId() bool {
	if o != nil && !IsNil(o.CashierId) {
		return true
	}

	return false
}

// SetCashierId gets a reference to the given int32 and assigns it to the CashierId field.
func (o *InterfaceAdditionalInfoType) SetCashierId(v int32) {
	o.CashierId = &v
}

// GetControllerPort returns the ControllerPort field value if set, zero value otherwise.
func (o *InterfaceAdditionalInfoType) GetControllerPort() int32 {
	if o == nil || IsNil(o.ControllerPort) {
		var ret int32
		return ret
	}
	return *o.ControllerPort
}

// GetControllerPortOk returns a tuple with the ControllerPort field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InterfaceAdditionalInfoType) GetControllerPortOk() (*int32, bool) {
	if o == nil || IsNil(o.ControllerPort) {
		return nil, false
	}
	return o.ControllerPort, true
}

// HasControllerPort returns a boolean if a field has been set.
func (o *InterfaceAdditionalInfoType) HasControllerPort() bool {
	if o != nil && !IsNil(o.ControllerPort) {
		return true
	}

	return false
}

// SetControllerPort gets a reference to the given int32 and assigns it to the ControllerPort field.
func (o *InterfaceAdditionalInfoType) SetControllerPort(v int32) {
	o.ControllerPort = &v
}

// GetDeleteIfcKeysOnKeyDelete returns the DeleteIfcKeysOnKeyDelete field value if set, zero value otherwise.
func (o *InterfaceAdditionalInfoType) GetDeleteIfcKeysOnKeyDelete() bool {
	if o == nil || IsNil(o.DeleteIfcKeysOnKeyDelete) {
		var ret bool
		return ret
	}
	return *o.DeleteIfcKeysOnKeyDelete
}

// GetDeleteIfcKeysOnKeyDeleteOk returns a tuple with the DeleteIfcKeysOnKeyDelete field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InterfaceAdditionalInfoType) GetDeleteIfcKeysOnKeyDeleteOk() (*bool, bool) {
	if o == nil || IsNil(o.DeleteIfcKeysOnKeyDelete) {
		return nil, false
	}
	return o.DeleteIfcKeysOnKeyDelete, true
}

// HasDeleteIfcKeysOnKeyDelete returns a boolean if a field has been set.
func (o *InterfaceAdditionalInfoType) HasDeleteIfcKeysOnKeyDelete() bool {
	if o != nil && !IsNil(o.DeleteIfcKeysOnKeyDelete) {
		return true
	}

	return false
}

// SetDeleteIfcKeysOnKeyDelete gets a reference to the given bool and assigns it to the DeleteIfcKeysOnKeyDelete field.
func (o *InterfaceAdditionalInfoType) SetDeleteIfcKeysOnKeyDelete(v bool) {
	o.DeleteIfcKeysOnKeyDelete = &v
}

// GetDisplayFlag returns the DisplayFlag field value if set, zero value otherwise.
func (o *InterfaceAdditionalInfoType) GetDisplayFlag() bool {
	if o == nil || IsNil(o.DisplayFlag) {
		var ret bool
		return ret
	}
	return *o.DisplayFlag
}

// GetDisplayFlagOk returns a tuple with the DisplayFlag field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InterfaceAdditionalInfoType) GetDisplayFlagOk() (*bool, bool) {
	if o == nil || IsNil(o.DisplayFlag) {
		return nil, false
	}
	return o.DisplayFlag, true
}

// HasDisplayFlag returns a boolean if a field has been set.
func (o *InterfaceAdditionalInfoType) HasDisplayFlag() bool {
	if o != nil && !IsNil(o.DisplayFlag) {
		return true
	}

	return false
}

// SetDisplayFlag gets a reference to the given bool and assigns it to the DisplayFlag field.
func (o *InterfaceAdditionalInfoType) SetDisplayFlag(v bool) {
	o.DisplayFlag = &v
}

// GetInterfaceStatus returns the InterfaceStatus field value if set, zero value otherwise.
func (o *InterfaceAdditionalInfoType) GetInterfaceStatus() HotelInterfaceStatusType {
	if o == nil || IsNil(o.InterfaceStatus) {
		var ret HotelInterfaceStatusType
		return ret
	}
	return *o.InterfaceStatus
}

// GetInterfaceStatusOk returns a tuple with the InterfaceStatus field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InterfaceAdditionalInfoType) GetInterfaceStatusOk() (*HotelInterfaceStatusType, bool) {
	if o == nil || IsNil(o.InterfaceStatus) {
		return nil, false
	}
	return o.InterfaceStatus, true
}

// HasInterfaceStatus returns a boolean if a field has been set.
func (o *InterfaceAdditionalInfoType) HasInterfaceStatus() bool {
	if o != nil && !IsNil(o.InterfaceStatus) {
		return true
	}

	return false
}

// SetInterfaceStatus gets a reference to the given HotelInterfaceStatusType and assigns it to the InterfaceStatus field.
func (o *InterfaceAdditionalInfoType) SetInterfaceStatus(v HotelInterfaceStatusType) {
	o.InterfaceStatus = &v
}

// GetMenuName returns the MenuName field value if set, zero value otherwise.
func (o *InterfaceAdditionalInfoType) GetMenuName() string {
	if o == nil || IsNil(o.MenuName) {
		var ret string
		return ret
	}
	return *o.MenuName
}

// GetMenuNameOk returns a tuple with the MenuName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InterfaceAdditionalInfoType) GetMenuNameOk() (*string, bool) {
	if o == nil || IsNil(o.MenuName) {
		return nil, false
	}
	return o.MenuName, true
}

// HasMenuName returns a boolean if a field has been set.
func (o *InterfaceAdditionalInfoType) HasMenuName() bool {
	if o != nil && !IsNil(o.MenuName) {
		return true
	}

	return false
}

// SetMenuName gets a reference to the given string and assigns it to the MenuName field.
func (o *InterfaceAdditionalInfoType) SetMenuName(v string) {
	o.MenuName = &v
}

// GetMenuType returns the MenuType field value if set, zero value otherwise.
func (o *InterfaceAdditionalInfoType) GetMenuType() IfcMenuTypeType {
	if o == nil || IsNil(o.MenuType) {
		var ret IfcMenuTypeType
		return ret
	}
	return *o.MenuType
}

// GetMenuTypeOk returns a tuple with the MenuType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InterfaceAdditionalInfoType) GetMenuTypeOk() (*IfcMenuTypeType, bool) {
	if o == nil || IsNil(o.MenuType) {
		return nil, false
	}
	return o.MenuType, true
}

// HasMenuType returns a boolean if a field has been set.
func (o *InterfaceAdditionalInfoType) HasMenuType() bool {
	if o != nil && !IsNil(o.MenuType) {
		return true
	}

	return false
}

// SetMenuType gets a reference to the given IfcMenuTypeType and assigns it to the MenuType field.
func (o *InterfaceAdditionalInfoType) SetMenuType(v IfcMenuTypeType) {
	o.MenuType = &v
}

// GetMsgExpiresAfter returns the MsgExpiresAfter field value if set, zero value otherwise.
func (o *InterfaceAdditionalInfoType) GetMsgExpiresAfter() string {
	if o == nil || IsNil(o.MsgExpiresAfter) {
		var ret string
		return ret
	}
	return *o.MsgExpiresAfter
}

// GetMsgExpiresAfterOk returns a tuple with the MsgExpiresAfter field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InterfaceAdditionalInfoType) GetMsgExpiresAfterOk() (*string, bool) {
	if o == nil || IsNil(o.MsgExpiresAfter) {
		return nil, false
	}
	return o.MsgExpiresAfter, true
}

// HasMsgExpiresAfter returns a boolean if a field has been set.
func (o *InterfaceAdditionalInfoType) HasMsgExpiresAfter() bool {
	if o != nil && !IsNil(o.MsgExpiresAfter) {
		return true
	}

	return false
}

// SetMsgExpiresAfter gets a reference to the given string and assigns it to the MsgExpiresAfter field.
func (o *InterfaceAdditionalInfoType) SetMsgExpiresAfter(v string) {
	o.MsgExpiresAfter = &v
}

// GetMultipleRoomKey returns the MultipleRoomKey field value if set, zero value otherwise.
func (o *InterfaceAdditionalInfoType) GetMultipleRoomKey() bool {
	if o == nil || IsNil(o.MultipleRoomKey) {
		var ret bool
		return ret
	}
	return *o.MultipleRoomKey
}

// GetMultipleRoomKeyOk returns a tuple with the MultipleRoomKey field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InterfaceAdditionalInfoType) GetMultipleRoomKeyOk() (*bool, bool) {
	if o == nil || IsNil(o.MultipleRoomKey) {
		return nil, false
	}
	return o.MultipleRoomKey, true
}

// HasMultipleRoomKey returns a boolean if a field has been set.
func (o *InterfaceAdditionalInfoType) HasMultipleRoomKey() bool {
	if o != nil && !IsNil(o.MultipleRoomKey) {
		return true
	}

	return false
}

// SetMultipleRoomKey gets a reference to the given bool and assigns it to the MultipleRoomKey field.
func (o *InterfaceAdditionalInfoType) SetMultipleRoomKey(v bool) {
	o.MultipleRoomKey = &v
}

// GetNAStart returns the NAStart field value if set, zero value otherwise.
func (o *InterfaceAdditionalInfoType) GetNAStart() bool {
	if o == nil || IsNil(o.NAStart) {
		var ret bool
		return ret
	}
	return *o.NAStart
}

// GetNAStartOk returns a tuple with the NAStart field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InterfaceAdditionalInfoType) GetNAStartOk() (*bool, bool) {
	if o == nil || IsNil(o.NAStart) {
		return nil, false
	}
	return o.NAStart, true
}

// HasNAStart returns a boolean if a field has been set.
func (o *InterfaceAdditionalInfoType) HasNAStart() bool {
	if o != nil && !IsNil(o.NAStart) {
		return true
	}

	return false
}

// SetNAStart gets a reference to the given bool and assigns it to the NAStart field.
func (o *InterfaceAdditionalInfoType) SetNAStart(v bool) {
	o.NAStart = &v
}

// GetOnlineKeySystem returns the OnlineKeySystem field value if set, zero value otherwise.
func (o *InterfaceAdditionalInfoType) GetOnlineKeySystem() bool {
	if o == nil || IsNil(o.OnlineKeySystem) {
		var ret bool
		return ret
	}
	return *o.OnlineKeySystem
}

// GetOnlineKeySystemOk returns a tuple with the OnlineKeySystem field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InterfaceAdditionalInfoType) GetOnlineKeySystemOk() (*bool, bool) {
	if o == nil || IsNil(o.OnlineKeySystem) {
		return nil, false
	}
	return o.OnlineKeySystem, true
}

// HasOnlineKeySystem returns a boolean if a field has been set.
func (o *InterfaceAdditionalInfoType) HasOnlineKeySystem() bool {
	if o != nil && !IsNil(o.OnlineKeySystem) {
		return true
	}

	return false
}

// SetOnlineKeySystem gets a reference to the given bool and assigns it to the OnlineKeySystem field.
func (o *InterfaceAdditionalInfoType) SetOnlineKeySystem(v bool) {
	o.OnlineKeySystem = &v
}

// GetPathId1 returns the PathId1 field value if set, zero value otherwise.
func (o *InterfaceAdditionalInfoType) GetPathId1() int32 {
	if o == nil || IsNil(o.PathId1) {
		var ret int32
		return ret
	}
	return *o.PathId1
}

// GetPathId1Ok returns a tuple with the PathId1 field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InterfaceAdditionalInfoType) GetPathId1Ok() (*int32, bool) {
	if o == nil || IsNil(o.PathId1) {
		return nil, false
	}
	return o.PathId1, true
}

// HasPathId1 returns a boolean if a field has been set.
func (o *InterfaceAdditionalInfoType) HasPathId1() bool {
	if o != nil && !IsNil(o.PathId1) {
		return true
	}

	return false
}

// SetPathId1 gets a reference to the given int32 and assigns it to the PathId1 field.
func (o *InterfaceAdditionalInfoType) SetPathId1(v int32) {
	o.PathId1 = &v
}

// GetSendRoomStatus returns the SendRoomStatus field value if set, zero value otherwise.
func (o *InterfaceAdditionalInfoType) GetSendRoomStatus() bool {
	if o == nil || IsNil(o.SendRoomStatus) {
		var ret bool
		return ret
	}
	return *o.SendRoomStatus
}

// GetSendRoomStatusOk returns a tuple with the SendRoomStatus field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InterfaceAdditionalInfoType) GetSendRoomStatusOk() (*bool, bool) {
	if o == nil || IsNil(o.SendRoomStatus) {
		return nil, false
	}
	return o.SendRoomStatus, true
}

// HasSendRoomStatus returns a boolean if a field has been set.
func (o *InterfaceAdditionalInfoType) HasSendRoomStatus() bool {
	if o != nil && !IsNil(o.SendRoomStatus) {
		return true
	}

	return false
}

// SetSendRoomStatus gets a reference to the given bool and assigns it to the SendRoomStatus field.
func (o *InterfaceAdditionalInfoType) SetSendRoomStatus(v bool) {
	o.SendRoomStatus = &v
}

// GetSendTrack1Data returns the SendTrack1Data field value if set, zero value otherwise.
func (o *InterfaceAdditionalInfoType) GetSendTrack1Data() bool {
	if o == nil || IsNil(o.SendTrack1Data) {
		var ret bool
		return ret
	}
	return *o.SendTrack1Data
}

// GetSendTrack1DataOk returns a tuple with the SendTrack1Data field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InterfaceAdditionalInfoType) GetSendTrack1DataOk() (*bool, bool) {
	if o == nil || IsNil(o.SendTrack1Data) {
		return nil, false
	}
	return o.SendTrack1Data, true
}

// HasSendTrack1Data returns a boolean if a field has been set.
func (o *InterfaceAdditionalInfoType) HasSendTrack1Data() bool {
	if o != nil && !IsNil(o.SendTrack1Data) {
		return true
	}

	return false
}

// SetSendTrack1Data gets a reference to the given bool and assigns it to the SendTrack1Data field.
func (o *InterfaceAdditionalInfoType) SetSendTrack1Data(v bool) {
	o.SendTrack1Data = &v
}

// GetSendTrack2Data returns the SendTrack2Data field value if set, zero value otherwise.
func (o *InterfaceAdditionalInfoType) GetSendTrack2Data() bool {
	if o == nil || IsNil(o.SendTrack2Data) {
		var ret bool
		return ret
	}
	return *o.SendTrack2Data
}

// GetSendTrack2DataOk returns a tuple with the SendTrack2Data field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InterfaceAdditionalInfoType) GetSendTrack2DataOk() (*bool, bool) {
	if o == nil || IsNil(o.SendTrack2Data) {
		return nil, false
	}
	return o.SendTrack2Data, true
}

// HasSendTrack2Data returns a boolean if a field has been set.
func (o *InterfaceAdditionalInfoType) HasSendTrack2Data() bool {
	if o != nil && !IsNil(o.SendTrack2Data) {
		return true
	}

	return false
}

// SetSendTrack2Data gets a reference to the given bool and assigns it to the SendTrack2Data field.
func (o *InterfaceAdditionalInfoType) SetSendTrack2Data(v bool) {
	o.SendTrack2Data = &v
}

// GetSendValidStartDateTime returns the SendValidStartDateTime field value if set, zero value otherwise.
func (o *InterfaceAdditionalInfoType) GetSendValidStartDateTime() bool {
	if o == nil || IsNil(o.SendValidStartDateTime) {
		var ret bool
		return ret
	}
	return *o.SendValidStartDateTime
}

// GetSendValidStartDateTimeOk returns a tuple with the SendValidStartDateTime field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InterfaceAdditionalInfoType) GetSendValidStartDateTimeOk() (*bool, bool) {
	if o == nil || IsNil(o.SendValidStartDateTime) {
		return nil, false
	}
	return o.SendValidStartDateTime, true
}

// HasSendValidStartDateTime returns a boolean if a field has been set.
func (o *InterfaceAdditionalInfoType) HasSendValidStartDateTime() bool {
	if o != nil && !IsNil(o.SendValidStartDateTime) {
		return true
	}

	return false
}

// SetSendValidStartDateTime gets a reference to the given bool and assigns it to the SendValidStartDateTime field.
func (o *InterfaceAdditionalInfoType) SetSendValidStartDateTime(v bool) {
	o.SendValidStartDateTime = &v
}

// GetTelephoneCharge returns the TelephoneCharge field value if set, zero value otherwise.
func (o *InterfaceAdditionalInfoType) GetTelephoneCharge() TelephoneChargeType {
	if o == nil || IsNil(o.TelephoneCharge) {
		var ret TelephoneChargeType
		return ret
	}
	return *o.TelephoneCharge
}

// GetTelephoneChargeOk returns a tuple with the TelephoneCharge field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InterfaceAdditionalInfoType) GetTelephoneChargeOk() (*TelephoneChargeType, bool) {
	if o == nil || IsNil(o.TelephoneCharge) {
		return nil, false
	}
	return o.TelephoneCharge, true
}

// HasTelephoneCharge returns a boolean if a field has been set.
func (o *InterfaceAdditionalInfoType) HasTelephoneCharge() bool {
	if o != nil && !IsNil(o.TelephoneCharge) {
		return true
	}

	return false
}

// SetTelephoneCharge gets a reference to the given TelephoneChargeType and assigns it to the TelephoneCharge field.
func (o *InterfaceAdditionalInfoType) SetTelephoneCharge(v TelephoneChargeType) {
	o.TelephoneCharge = &v
}

// GetTimeout returns the Timeout field value if set, zero value otherwise.
func (o *InterfaceAdditionalInfoType) GetTimeout() string {
	if o == nil || IsNil(o.Timeout) {
		var ret string
		return ret
	}
	return *o.Timeout
}

// GetTimeoutOk returns a tuple with the Timeout field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InterfaceAdditionalInfoType) GetTimeoutOk() (*string, bool) {
	if o == nil || IsNil(o.Timeout) {
		return nil, false
	}
	return o.Timeout, true
}

// HasTimeout returns a boolean if a field has been set.
func (o *InterfaceAdditionalInfoType) HasTimeout() bool {
	if o != nil && !IsNil(o.Timeout) {
		return true
	}

	return false
}

// SetTimeout gets a reference to the given string and assigns it to the Timeout field.
func (o *InterfaceAdditionalInfoType) SetTimeout(v string) {
	o.Timeout = &v
}

// GetUseDataThroughFlag returns the UseDataThroughFlag field value if set, zero value otherwise.
func (o *InterfaceAdditionalInfoType) GetUseDataThroughFlag() bool {
	if o == nil || IsNil(o.UseDataThroughFlag) {
		var ret bool
		return ret
	}
	return *o.UseDataThroughFlag
}

// GetUseDataThroughFlagOk returns a tuple with the UseDataThroughFlag field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InterfaceAdditionalInfoType) GetUseDataThroughFlagOk() (*bool, bool) {
	if o == nil || IsNil(o.UseDataThroughFlag) {
		return nil, false
	}
	return o.UseDataThroughFlag, true
}

// HasUseDataThroughFlag returns a boolean if a field has been set.
func (o *InterfaceAdditionalInfoType) HasUseDataThroughFlag() bool {
	if o != nil && !IsNil(o.UseDataThroughFlag) {
		return true
	}

	return false
}

// SetUseDataThroughFlag gets a reference to the given bool and assigns it to the UseDataThroughFlag field.
func (o *InterfaceAdditionalInfoType) SetUseDataThroughFlag(v bool) {
	o.UseDataThroughFlag = &v
}

// GetVersion returns the Version field value if set, zero value otherwise.
func (o *InterfaceAdditionalInfoType) GetVersion() string {
	if o == nil || IsNil(o.Version) {
		var ret string
		return ret
	}
	return *o.Version
}

// GetVersionOk returns a tuple with the Version field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InterfaceAdditionalInfoType) GetVersionOk() (*string, bool) {
	if o == nil || IsNil(o.Version) {
		return nil, false
	}
	return o.Version, true
}

// HasVersion returns a boolean if a field has been set.
func (o *InterfaceAdditionalInfoType) HasVersion() bool {
	if o != nil && !IsNil(o.Version) {
		return true
	}

	return false
}

// SetVersion gets a reference to the given string and assigns it to the Version field.
func (o *InterfaceAdditionalInfoType) SetVersion(v string) {
	o.Version = &v
}

// GetVncPort returns the VncPort field value if set, zero value otherwise.
func (o *InterfaceAdditionalInfoType) GetVncPort() int32 {
	if o == nil || IsNil(o.VncPort) {
		var ret int32
		return ret
	}
	return *o.VncPort
}

// GetVncPortOk returns a tuple with the VncPort field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InterfaceAdditionalInfoType) GetVncPortOk() (*int32, bool) {
	if o == nil || IsNil(o.VncPort) {
		return nil, false
	}
	return o.VncPort, true
}

// HasVncPort returns a boolean if a field has been set.
func (o *InterfaceAdditionalInfoType) HasVncPort() bool {
	if o != nil && !IsNil(o.VncPort) {
		return true
	}

	return false
}

// SetVncPort gets a reference to the given int32 and assigns it to the VncPort field.
func (o *InterfaceAdditionalInfoType) SetVncPort(v int32) {
	o.VncPort = &v
}

func (o InterfaceAdditionalInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o InterfaceAdditionalInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ActiveFlag) {
		toSerialize["activeFlag"] = o.ActiveFlag
	}
	if !IsNil(o.AdditionalRoomsLimit) {
		toSerialize["additionalRoomsLimit"] = o.AdditionalRoomsLimit
	}
	if !IsNil(o.AutoStartFlag) {
		toSerialize["autoStartFlag"] = o.AutoStartFlag
	}
	if !IsNil(o.CashierId) {
		toSerialize["cashierId"] = o.CashierId
	}
	if !IsNil(o.ControllerPort) {
		toSerialize["controllerPort"] = o.ControllerPort
	}
	if !IsNil(o.DeleteIfcKeysOnKeyDelete) {
		toSerialize["deleteIfcKeysOnKeyDelete"] = o.DeleteIfcKeysOnKeyDelete
	}
	if !IsNil(o.DisplayFlag) {
		toSerialize["displayFlag"] = o.DisplayFlag
	}
	if !IsNil(o.InterfaceStatus) {
		toSerialize["interfaceStatus"] = o.InterfaceStatus
	}
	if !IsNil(o.MenuName) {
		toSerialize["menuName"] = o.MenuName
	}
	if !IsNil(o.MenuType) {
		toSerialize["menuType"] = o.MenuType
	}
	if !IsNil(o.MsgExpiresAfter) {
		toSerialize["msgExpiresAfter"] = o.MsgExpiresAfter
	}
	if !IsNil(o.MultipleRoomKey) {
		toSerialize["multipleRoomKey"] = o.MultipleRoomKey
	}
	if !IsNil(o.NAStart) {
		toSerialize["nAStart"] = o.NAStart
	}
	if !IsNil(o.OnlineKeySystem) {
		toSerialize["onlineKeySystem"] = o.OnlineKeySystem
	}
	if !IsNil(o.PathId1) {
		toSerialize["pathId1"] = o.PathId1
	}
	if !IsNil(o.SendRoomStatus) {
		toSerialize["sendRoomStatus"] = o.SendRoomStatus
	}
	if !IsNil(o.SendTrack1Data) {
		toSerialize["sendTrack1Data"] = o.SendTrack1Data
	}
	if !IsNil(o.SendTrack2Data) {
		toSerialize["sendTrack2Data"] = o.SendTrack2Data
	}
	if !IsNil(o.SendValidStartDateTime) {
		toSerialize["sendValidStartDateTime"] = o.SendValidStartDateTime
	}
	if !IsNil(o.TelephoneCharge) {
		toSerialize["telephoneCharge"] = o.TelephoneCharge
	}
	if !IsNil(o.Timeout) {
		toSerialize["timeout"] = o.Timeout
	}
	if !IsNil(o.UseDataThroughFlag) {
		toSerialize["useDataThroughFlag"] = o.UseDataThroughFlag
	}
	if !IsNil(o.Version) {
		toSerialize["version"] = o.Version
	}
	if !IsNil(o.VncPort) {
		toSerialize["vncPort"] = o.VncPort
	}
	return toSerialize, nil
}

type NullableInterfaceAdditionalInfoType struct {
	value *InterfaceAdditionalInfoType
	isSet bool
}

func (v NullableInterfaceAdditionalInfoType) Get() *InterfaceAdditionalInfoType {
	return v.value
}

func (v *NullableInterfaceAdditionalInfoType) Set(val *InterfaceAdditionalInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableInterfaceAdditionalInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableInterfaceAdditionalInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableInterfaceAdditionalInfoType(val *InterfaceAdditionalInfoType) *NullableInterfaceAdditionalInfoType {
	return &NullableInterfaceAdditionalInfoType{value: val, isSet: true}
}

func (v NullableInterfaceAdditionalInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableInterfaceAdditionalInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

