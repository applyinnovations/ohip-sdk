/*
OPERA Cloud Cashiering API

APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package csh

import (
	"encoding/json"
)

// checks if the ReservationFolioInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ReservationFolioInfoType{}

// ReservationFolioInfoType Each folio will include summary and/or detailed information.
type ReservationFolioInfoType struct {
	// Flag specifying that the reservation can be auto check in when Auto Checkin Pseudo Room parameter is active.
	AutoCheckInAllowed *bool `json:"autoCheckInAllowed,omitempty"`
	// Flag indicating if a folio window contains a correction trx. A correction trx indicates a pending required fiscal action over the folio window. Applicable only in Greece.
	CorrectionTrxExists *bool `json:"correctionTrxExists,omitempty"`
	// Flag applicable only when ALLOW_DEFERRED_TAXES is ON for the resort. Set to true only when there are any unsettled transactions on any of the windows with the deferred tax entry posted. Set to false only when there are unsettled transactions on any of the windows without deferred tax entry.
	DeferredTaxesPosted *string `json:"deferredTaxesPosted,omitempty"`
	// Folio History element contains all generated folios
	FolioHistory []FolioWindowType `json:"folioHistory,omitempty"`
	// The Folio Window information of the reservation.
	FolioWindows []FolioWindowType `json:"folioWindows,omitempty"`
	// Computed flag specifying that the reservation has met the criteria which allows charges to be posted after being checked-out.
	PostStayChargeAllowed *bool `json:"postStayChargeAllowed,omitempty"`
	// Flag specifying that the reservation can post if the reservation status was No Show or Cancelled.
	PostToNoShowCancelAllowed *bool `json:"postToNoShowCancelAllowed,omitempty"`
	// Computed flag specifying that the reservation has met the criteria which allows charges to be posted before checking-in.
	PreStayChargeAllowed *bool `json:"preStayChargeAllowed,omitempty"`
	ReservationInfo *ReservationInfoType `json:"reservationInfo,omitempty"`
	// Flag to check if the room and tax are already posted.
	RoomAndTaxPosted *bool `json:"roomAndTaxPosted,omitempty"`
	// Stamp Duty posted in at least one folio window.
	StampDutyExists *bool `json:"stampDutyExists,omitempty"`
}

// NewReservationFolioInfoType instantiates a new ReservationFolioInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewReservationFolioInfoType() *ReservationFolioInfoType {
	this := ReservationFolioInfoType{}
	return &this
}

// NewReservationFolioInfoTypeWithDefaults instantiates a new ReservationFolioInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewReservationFolioInfoTypeWithDefaults() *ReservationFolioInfoType {
	this := ReservationFolioInfoType{}
	return &this
}

// GetAutoCheckInAllowed returns the AutoCheckInAllowed field value if set, zero value otherwise.
func (o *ReservationFolioInfoType) GetAutoCheckInAllowed() bool {
	if o == nil || IsNil(o.AutoCheckInAllowed) {
		var ret bool
		return ret
	}
	return *o.AutoCheckInAllowed
}

// GetAutoCheckInAllowedOk returns a tuple with the AutoCheckInAllowed field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationFolioInfoType) GetAutoCheckInAllowedOk() (*bool, bool) {
	if o == nil || IsNil(o.AutoCheckInAllowed) {
		return nil, false
	}
	return o.AutoCheckInAllowed, true
}

// HasAutoCheckInAllowed returns a boolean if a field has been set.
func (o *ReservationFolioInfoType) HasAutoCheckInAllowed() bool {
	if o != nil && !IsNil(o.AutoCheckInAllowed) {
		return true
	}

	return false
}

// SetAutoCheckInAllowed gets a reference to the given bool and assigns it to the AutoCheckInAllowed field.
func (o *ReservationFolioInfoType) SetAutoCheckInAllowed(v bool) {
	o.AutoCheckInAllowed = &v
}

// GetCorrectionTrxExists returns the CorrectionTrxExists field value if set, zero value otherwise.
func (o *ReservationFolioInfoType) GetCorrectionTrxExists() bool {
	if o == nil || IsNil(o.CorrectionTrxExists) {
		var ret bool
		return ret
	}
	return *o.CorrectionTrxExists
}

// GetCorrectionTrxExistsOk returns a tuple with the CorrectionTrxExists field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationFolioInfoType) GetCorrectionTrxExistsOk() (*bool, bool) {
	if o == nil || IsNil(o.CorrectionTrxExists) {
		return nil, false
	}
	return o.CorrectionTrxExists, true
}

// HasCorrectionTrxExists returns a boolean if a field has been set.
func (o *ReservationFolioInfoType) HasCorrectionTrxExists() bool {
	if o != nil && !IsNil(o.CorrectionTrxExists) {
		return true
	}

	return false
}

// SetCorrectionTrxExists gets a reference to the given bool and assigns it to the CorrectionTrxExists field.
func (o *ReservationFolioInfoType) SetCorrectionTrxExists(v bool) {
	o.CorrectionTrxExists = &v
}

// GetDeferredTaxesPosted returns the DeferredTaxesPosted field value if set, zero value otherwise.
func (o *ReservationFolioInfoType) GetDeferredTaxesPosted() string {
	if o == nil || IsNil(o.DeferredTaxesPosted) {
		var ret string
		return ret
	}
	return *o.DeferredTaxesPosted
}

// GetDeferredTaxesPostedOk returns a tuple with the DeferredTaxesPosted field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationFolioInfoType) GetDeferredTaxesPostedOk() (*string, bool) {
	if o == nil || IsNil(o.DeferredTaxesPosted) {
		return nil, false
	}
	return o.DeferredTaxesPosted, true
}

// HasDeferredTaxesPosted returns a boolean if a field has been set.
func (o *ReservationFolioInfoType) HasDeferredTaxesPosted() bool {
	if o != nil && !IsNil(o.DeferredTaxesPosted) {
		return true
	}

	return false
}

// SetDeferredTaxesPosted gets a reference to the given string and assigns it to the DeferredTaxesPosted field.
func (o *ReservationFolioInfoType) SetDeferredTaxesPosted(v string) {
	o.DeferredTaxesPosted = &v
}

// GetFolioHistory returns the FolioHistory field value if set, zero value otherwise.
func (o *ReservationFolioInfoType) GetFolioHistory() []FolioWindowType {
	if o == nil || IsNil(o.FolioHistory) {
		var ret []FolioWindowType
		return ret
	}
	return o.FolioHistory
}

// GetFolioHistoryOk returns a tuple with the FolioHistory field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationFolioInfoType) GetFolioHistoryOk() ([]FolioWindowType, bool) {
	if o == nil || IsNil(o.FolioHistory) {
		return nil, false
	}
	return o.FolioHistory, true
}

// HasFolioHistory returns a boolean if a field has been set.
func (o *ReservationFolioInfoType) HasFolioHistory() bool {
	if o != nil && !IsNil(o.FolioHistory) {
		return true
	}

	return false
}

// SetFolioHistory gets a reference to the given []FolioWindowType and assigns it to the FolioHistory field.
func (o *ReservationFolioInfoType) SetFolioHistory(v []FolioWindowType) {
	o.FolioHistory = v
}

// GetFolioWindows returns the FolioWindows field value if set, zero value otherwise.
func (o *ReservationFolioInfoType) GetFolioWindows() []FolioWindowType {
	if o == nil || IsNil(o.FolioWindows) {
		var ret []FolioWindowType
		return ret
	}
	return o.FolioWindows
}

// GetFolioWindowsOk returns a tuple with the FolioWindows field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationFolioInfoType) GetFolioWindowsOk() ([]FolioWindowType, bool) {
	if o == nil || IsNil(o.FolioWindows) {
		return nil, false
	}
	return o.FolioWindows, true
}

// HasFolioWindows returns a boolean if a field has been set.
func (o *ReservationFolioInfoType) HasFolioWindows() bool {
	if o != nil && !IsNil(o.FolioWindows) {
		return true
	}

	return false
}

// SetFolioWindows gets a reference to the given []FolioWindowType and assigns it to the FolioWindows field.
func (o *ReservationFolioInfoType) SetFolioWindows(v []FolioWindowType) {
	o.FolioWindows = v
}

// GetPostStayChargeAllowed returns the PostStayChargeAllowed field value if set, zero value otherwise.
func (o *ReservationFolioInfoType) GetPostStayChargeAllowed() bool {
	if o == nil || IsNil(o.PostStayChargeAllowed) {
		var ret bool
		return ret
	}
	return *o.PostStayChargeAllowed
}

// GetPostStayChargeAllowedOk returns a tuple with the PostStayChargeAllowed field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationFolioInfoType) GetPostStayChargeAllowedOk() (*bool, bool) {
	if o == nil || IsNil(o.PostStayChargeAllowed) {
		return nil, false
	}
	return o.PostStayChargeAllowed, true
}

// HasPostStayChargeAllowed returns a boolean if a field has been set.
func (o *ReservationFolioInfoType) HasPostStayChargeAllowed() bool {
	if o != nil && !IsNil(o.PostStayChargeAllowed) {
		return true
	}

	return false
}

// SetPostStayChargeAllowed gets a reference to the given bool and assigns it to the PostStayChargeAllowed field.
func (o *ReservationFolioInfoType) SetPostStayChargeAllowed(v bool) {
	o.PostStayChargeAllowed = &v
}

// GetPostToNoShowCancelAllowed returns the PostToNoShowCancelAllowed field value if set, zero value otherwise.
func (o *ReservationFolioInfoType) GetPostToNoShowCancelAllowed() bool {
	if o == nil || IsNil(o.PostToNoShowCancelAllowed) {
		var ret bool
		return ret
	}
	return *o.PostToNoShowCancelAllowed
}

// GetPostToNoShowCancelAllowedOk returns a tuple with the PostToNoShowCancelAllowed field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationFolioInfoType) GetPostToNoShowCancelAllowedOk() (*bool, bool) {
	if o == nil || IsNil(o.PostToNoShowCancelAllowed) {
		return nil, false
	}
	return o.PostToNoShowCancelAllowed, true
}

// HasPostToNoShowCancelAllowed returns a boolean if a field has been set.
func (o *ReservationFolioInfoType) HasPostToNoShowCancelAllowed() bool {
	if o != nil && !IsNil(o.PostToNoShowCancelAllowed) {
		return true
	}

	return false
}

// SetPostToNoShowCancelAllowed gets a reference to the given bool and assigns it to the PostToNoShowCancelAllowed field.
func (o *ReservationFolioInfoType) SetPostToNoShowCancelAllowed(v bool) {
	o.PostToNoShowCancelAllowed = &v
}

// GetPreStayChargeAllowed returns the PreStayChargeAllowed field value if set, zero value otherwise.
func (o *ReservationFolioInfoType) GetPreStayChargeAllowed() bool {
	if o == nil || IsNil(o.PreStayChargeAllowed) {
		var ret bool
		return ret
	}
	return *o.PreStayChargeAllowed
}

// GetPreStayChargeAllowedOk returns a tuple with the PreStayChargeAllowed field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationFolioInfoType) GetPreStayChargeAllowedOk() (*bool, bool) {
	if o == nil || IsNil(o.PreStayChargeAllowed) {
		return nil, false
	}
	return o.PreStayChargeAllowed, true
}

// HasPreStayChargeAllowed returns a boolean if a field has been set.
func (o *ReservationFolioInfoType) HasPreStayChargeAllowed() bool {
	if o != nil && !IsNil(o.PreStayChargeAllowed) {
		return true
	}

	return false
}

// SetPreStayChargeAllowed gets a reference to the given bool and assigns it to the PreStayChargeAllowed field.
func (o *ReservationFolioInfoType) SetPreStayChargeAllowed(v bool) {
	o.PreStayChargeAllowed = &v
}

// GetReservationInfo returns the ReservationInfo field value if set, zero value otherwise.
func (o *ReservationFolioInfoType) GetReservationInfo() ReservationInfoType {
	if o == nil || IsNil(o.ReservationInfo) {
		var ret ReservationInfoType
		return ret
	}
	return *o.ReservationInfo
}

// GetReservationInfoOk returns a tuple with the ReservationInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationFolioInfoType) GetReservationInfoOk() (*ReservationInfoType, bool) {
	if o == nil || IsNil(o.ReservationInfo) {
		return nil, false
	}
	return o.ReservationInfo, true
}

// HasReservationInfo returns a boolean if a field has been set.
func (o *ReservationFolioInfoType) HasReservationInfo() bool {
	if o != nil && !IsNil(o.ReservationInfo) {
		return true
	}

	return false
}

// SetReservationInfo gets a reference to the given ReservationInfoType and assigns it to the ReservationInfo field.
func (o *ReservationFolioInfoType) SetReservationInfo(v ReservationInfoType) {
	o.ReservationInfo = &v
}

// GetRoomAndTaxPosted returns the RoomAndTaxPosted field value if set, zero value otherwise.
func (o *ReservationFolioInfoType) GetRoomAndTaxPosted() bool {
	if o == nil || IsNil(o.RoomAndTaxPosted) {
		var ret bool
		return ret
	}
	return *o.RoomAndTaxPosted
}

// GetRoomAndTaxPostedOk returns a tuple with the RoomAndTaxPosted field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationFolioInfoType) GetRoomAndTaxPostedOk() (*bool, bool) {
	if o == nil || IsNil(o.RoomAndTaxPosted) {
		return nil, false
	}
	return o.RoomAndTaxPosted, true
}

// HasRoomAndTaxPosted returns a boolean if a field has been set.
func (o *ReservationFolioInfoType) HasRoomAndTaxPosted() bool {
	if o != nil && !IsNil(o.RoomAndTaxPosted) {
		return true
	}

	return false
}

// SetRoomAndTaxPosted gets a reference to the given bool and assigns it to the RoomAndTaxPosted field.
func (o *ReservationFolioInfoType) SetRoomAndTaxPosted(v bool) {
	o.RoomAndTaxPosted = &v
}

// GetStampDutyExists returns the StampDutyExists field value if set, zero value otherwise.
func (o *ReservationFolioInfoType) GetStampDutyExists() bool {
	if o == nil || IsNil(o.StampDutyExists) {
		var ret bool
		return ret
	}
	return *o.StampDutyExists
}

// GetStampDutyExistsOk returns a tuple with the StampDutyExists field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationFolioInfoType) GetStampDutyExistsOk() (*bool, bool) {
	if o == nil || IsNil(o.StampDutyExists) {
		return nil, false
	}
	return o.StampDutyExists, true
}

// HasStampDutyExists returns a boolean if a field has been set.
func (o *ReservationFolioInfoType) HasStampDutyExists() bool {
	if o != nil && !IsNil(o.StampDutyExists) {
		return true
	}

	return false
}

// SetStampDutyExists gets a reference to the given bool and assigns it to the StampDutyExists field.
func (o *ReservationFolioInfoType) SetStampDutyExists(v bool) {
	o.StampDutyExists = &v
}

func (o ReservationFolioInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ReservationFolioInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AutoCheckInAllowed) {
		toSerialize["autoCheckInAllowed"] = o.AutoCheckInAllowed
	}
	if !IsNil(o.CorrectionTrxExists) {
		toSerialize["correctionTrxExists"] = o.CorrectionTrxExists
	}
	if !IsNil(o.DeferredTaxesPosted) {
		toSerialize["deferredTaxesPosted"] = o.DeferredTaxesPosted
	}
	if !IsNil(o.FolioHistory) {
		toSerialize["folioHistory"] = o.FolioHistory
	}
	if !IsNil(o.FolioWindows) {
		toSerialize["folioWindows"] = o.FolioWindows
	}
	if !IsNil(o.PostStayChargeAllowed) {
		toSerialize["postStayChargeAllowed"] = o.PostStayChargeAllowed
	}
	if !IsNil(o.PostToNoShowCancelAllowed) {
		toSerialize["postToNoShowCancelAllowed"] = o.PostToNoShowCancelAllowed
	}
	if !IsNil(o.PreStayChargeAllowed) {
		toSerialize["preStayChargeAllowed"] = o.PreStayChargeAllowed
	}
	if !IsNil(o.ReservationInfo) {
		toSerialize["reservationInfo"] = o.ReservationInfo
	}
	if !IsNil(o.RoomAndTaxPosted) {
		toSerialize["roomAndTaxPosted"] = o.RoomAndTaxPosted
	}
	if !IsNil(o.StampDutyExists) {
		toSerialize["stampDutyExists"] = o.StampDutyExists
	}
	return toSerialize, nil
}

type NullableReservationFolioInfoType struct {
	value *ReservationFolioInfoType
	isSet bool
}

func (v NullableReservationFolioInfoType) Get() *ReservationFolioInfoType {
	return v.value
}

func (v *NullableReservationFolioInfoType) Set(val *ReservationFolioInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableReservationFolioInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableReservationFolioInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableReservationFolioInfoType(val *ReservationFolioInfoType) *NullableReservationFolioInfoType {
	return &NullableReservationFolioInfoType{value: val, isSet: true}
}

func (v NullableReservationFolioInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableReservationFolioInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

