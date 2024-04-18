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

// checks if the AdvanceRoomChargesCriteriaType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &AdvanceRoomChargesCriteriaType{}

// AdvanceRoomChargesCriteriaType Type to set the criteria for generation of advance folios. This will post the room and tax transactions for the nights requested.
type AdvanceRoomChargesCriteriaType struct {
	// The Cashier ID of the Cashier who is currently processing the transaction(s).
	CashierId *float32 `json:"cashierId,omitempty"`
	// Indicates the last date until which the Advance Room Charges have to be posted.
	EndDateToCharge *string `json:"endDateToCharge,omitempty"`
	EventType *CashieringEventType `json:"eventType,omitempty"`
	// Property code.
	HotelId *string `json:"hotelId,omitempty"`
	// Indicates if the posting of room charges have to be done for the entire stay.
	PostForEntireStay *bool `json:"postForEntireStay,omitempty"`
	// Unique Id that references an object uniquely in the system.
	ReservationIdList []UniqueIDType `json:"reservationIdList,omitempty"`
	// Flag to indicate if only a verification is required. This checks if advance bills have been generated for this reservation and returns the last date in the response. Setting this flag to true, will return the information for the below elements in the response: AvailablePostingDates, GeneratedForEntireStay, LastRoomAndTaxPostedDate and the Reservation Information. No posting will be done. In order for the actual posting to occur this flag should be false.
	VerifyOnly *bool `json:"verifyOnly,omitempty"`
}

// NewAdvanceRoomChargesCriteriaType instantiates a new AdvanceRoomChargesCriteriaType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAdvanceRoomChargesCriteriaType() *AdvanceRoomChargesCriteriaType {
	this := AdvanceRoomChargesCriteriaType{}
	return &this
}

// NewAdvanceRoomChargesCriteriaTypeWithDefaults instantiates a new AdvanceRoomChargesCriteriaType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAdvanceRoomChargesCriteriaTypeWithDefaults() *AdvanceRoomChargesCriteriaType {
	this := AdvanceRoomChargesCriteriaType{}
	return &this
}

// GetCashierId returns the CashierId field value if set, zero value otherwise.
func (o *AdvanceRoomChargesCriteriaType) GetCashierId() float32 {
	if o == nil || IsNil(o.CashierId) {
		var ret float32
		return ret
	}
	return *o.CashierId
}

// GetCashierIdOk returns a tuple with the CashierId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AdvanceRoomChargesCriteriaType) GetCashierIdOk() (*float32, bool) {
	if o == nil || IsNil(o.CashierId) {
		return nil, false
	}
	return o.CashierId, true
}

// HasCashierId returns a boolean if a field has been set.
func (o *AdvanceRoomChargesCriteriaType) HasCashierId() bool {
	if o != nil && !IsNil(o.CashierId) {
		return true
	}

	return false
}

// SetCashierId gets a reference to the given float32 and assigns it to the CashierId field.
func (o *AdvanceRoomChargesCriteriaType) SetCashierId(v float32) {
	o.CashierId = &v
}

// GetEndDateToCharge returns the EndDateToCharge field value if set, zero value otherwise.
func (o *AdvanceRoomChargesCriteriaType) GetEndDateToCharge() string {
	if o == nil || IsNil(o.EndDateToCharge) {
		var ret string
		return ret
	}
	return *o.EndDateToCharge
}

// GetEndDateToChargeOk returns a tuple with the EndDateToCharge field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AdvanceRoomChargesCriteriaType) GetEndDateToChargeOk() (*string, bool) {
	if o == nil || IsNil(o.EndDateToCharge) {
		return nil, false
	}
	return o.EndDateToCharge, true
}

// HasEndDateToCharge returns a boolean if a field has been set.
func (o *AdvanceRoomChargesCriteriaType) HasEndDateToCharge() bool {
	if o != nil && !IsNil(o.EndDateToCharge) {
		return true
	}

	return false
}

// SetEndDateToCharge gets a reference to the given string and assigns it to the EndDateToCharge field.
func (o *AdvanceRoomChargesCriteriaType) SetEndDateToCharge(v string) {
	o.EndDateToCharge = &v
}

// GetEventType returns the EventType field value if set, zero value otherwise.
func (o *AdvanceRoomChargesCriteriaType) GetEventType() CashieringEventType {
	if o == nil || IsNil(o.EventType) {
		var ret CashieringEventType
		return ret
	}
	return *o.EventType
}

// GetEventTypeOk returns a tuple with the EventType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AdvanceRoomChargesCriteriaType) GetEventTypeOk() (*CashieringEventType, bool) {
	if o == nil || IsNil(o.EventType) {
		return nil, false
	}
	return o.EventType, true
}

// HasEventType returns a boolean if a field has been set.
func (o *AdvanceRoomChargesCriteriaType) HasEventType() bool {
	if o != nil && !IsNil(o.EventType) {
		return true
	}

	return false
}

// SetEventType gets a reference to the given CashieringEventType and assigns it to the EventType field.
func (o *AdvanceRoomChargesCriteriaType) SetEventType(v CashieringEventType) {
	o.EventType = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *AdvanceRoomChargesCriteriaType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AdvanceRoomChargesCriteriaType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *AdvanceRoomChargesCriteriaType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *AdvanceRoomChargesCriteriaType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetPostForEntireStay returns the PostForEntireStay field value if set, zero value otherwise.
func (o *AdvanceRoomChargesCriteriaType) GetPostForEntireStay() bool {
	if o == nil || IsNil(o.PostForEntireStay) {
		var ret bool
		return ret
	}
	return *o.PostForEntireStay
}

// GetPostForEntireStayOk returns a tuple with the PostForEntireStay field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AdvanceRoomChargesCriteriaType) GetPostForEntireStayOk() (*bool, bool) {
	if o == nil || IsNil(o.PostForEntireStay) {
		return nil, false
	}
	return o.PostForEntireStay, true
}

// HasPostForEntireStay returns a boolean if a field has been set.
func (o *AdvanceRoomChargesCriteriaType) HasPostForEntireStay() bool {
	if o != nil && !IsNil(o.PostForEntireStay) {
		return true
	}

	return false
}

// SetPostForEntireStay gets a reference to the given bool and assigns it to the PostForEntireStay field.
func (o *AdvanceRoomChargesCriteriaType) SetPostForEntireStay(v bool) {
	o.PostForEntireStay = &v
}

// GetReservationIdList returns the ReservationIdList field value if set, zero value otherwise.
func (o *AdvanceRoomChargesCriteriaType) GetReservationIdList() []UniqueIDType {
	if o == nil || IsNil(o.ReservationIdList) {
		var ret []UniqueIDType
		return ret
	}
	return o.ReservationIdList
}

// GetReservationIdListOk returns a tuple with the ReservationIdList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AdvanceRoomChargesCriteriaType) GetReservationIdListOk() ([]UniqueIDType, bool) {
	if o == nil || IsNil(o.ReservationIdList) {
		return nil, false
	}
	return o.ReservationIdList, true
}

// HasReservationIdList returns a boolean if a field has been set.
func (o *AdvanceRoomChargesCriteriaType) HasReservationIdList() bool {
	if o != nil && !IsNil(o.ReservationIdList) {
		return true
	}

	return false
}

// SetReservationIdList gets a reference to the given []UniqueIDType and assigns it to the ReservationIdList field.
func (o *AdvanceRoomChargesCriteriaType) SetReservationIdList(v []UniqueIDType) {
	o.ReservationIdList = v
}

// GetVerifyOnly returns the VerifyOnly field value if set, zero value otherwise.
func (o *AdvanceRoomChargesCriteriaType) GetVerifyOnly() bool {
	if o == nil || IsNil(o.VerifyOnly) {
		var ret bool
		return ret
	}
	return *o.VerifyOnly
}

// GetVerifyOnlyOk returns a tuple with the VerifyOnly field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AdvanceRoomChargesCriteriaType) GetVerifyOnlyOk() (*bool, bool) {
	if o == nil || IsNil(o.VerifyOnly) {
		return nil, false
	}
	return o.VerifyOnly, true
}

// HasVerifyOnly returns a boolean if a field has been set.
func (o *AdvanceRoomChargesCriteriaType) HasVerifyOnly() bool {
	if o != nil && !IsNil(o.VerifyOnly) {
		return true
	}

	return false
}

// SetVerifyOnly gets a reference to the given bool and assigns it to the VerifyOnly field.
func (o *AdvanceRoomChargesCriteriaType) SetVerifyOnly(v bool) {
	o.VerifyOnly = &v
}

func (o AdvanceRoomChargesCriteriaType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o AdvanceRoomChargesCriteriaType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CashierId) {
		toSerialize["cashierId"] = o.CashierId
	}
	if !IsNil(o.EndDateToCharge) {
		toSerialize["endDateToCharge"] = o.EndDateToCharge
	}
	if !IsNil(o.EventType) {
		toSerialize["eventType"] = o.EventType
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.PostForEntireStay) {
		toSerialize["postForEntireStay"] = o.PostForEntireStay
	}
	if !IsNil(o.ReservationIdList) {
		toSerialize["reservationIdList"] = o.ReservationIdList
	}
	if !IsNil(o.VerifyOnly) {
		toSerialize["verifyOnly"] = o.VerifyOnly
	}
	return toSerialize, nil
}

type NullableAdvanceRoomChargesCriteriaType struct {
	value *AdvanceRoomChargesCriteriaType
	isSet bool
}

func (v NullableAdvanceRoomChargesCriteriaType) Get() *AdvanceRoomChargesCriteriaType {
	return v.value
}

func (v *NullableAdvanceRoomChargesCriteriaType) Set(val *AdvanceRoomChargesCriteriaType) {
	v.value = val
	v.isSet = true
}

func (v NullableAdvanceRoomChargesCriteriaType) IsSet() bool {
	return v.isSet
}

func (v *NullableAdvanceRoomChargesCriteriaType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAdvanceRoomChargesCriteriaType(val *AdvanceRoomChargesCriteriaType) *NullableAdvanceRoomChargesCriteriaType {
	return &NullableAdvanceRoomChargesCriteriaType{value: val, isSet: true}
}

func (v NullableAdvanceRoomChargesCriteriaType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAdvanceRoomChargesCriteriaType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

