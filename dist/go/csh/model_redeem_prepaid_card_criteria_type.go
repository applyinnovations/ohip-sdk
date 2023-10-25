/*
OPERA Cloud Cashiering API

APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package csh

import (
	"encoding/json"
)

// checks if the RedeemPrepaidCardCriteriaType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RedeemPrepaidCardCriteriaType{}

// RedeemPrepaidCardCriteriaType Criteria for Prepaid card redeem request.
type RedeemPrepaidCardCriteriaType struct {
	// The Cashier ID of the Cashier who is currently processing the transaction(s).
	CashierId *float32 `json:"cashierId,omitempty"`
	// Folio Window.
	FolioView *int32 `json:"folioView,omitempty"`
	// Hotel code.
	HotelId *string `json:"hotelId,omitempty"`
	// A prepaid redemption info object to be used for posting a payment.
	PrepaidCardRedemptions []PrepaidCardRedemptionType `json:"prepaidCardRedemptions,omitempty"`
	ReservationId *ReservationId `json:"reservationId,omitempty"`
}

// NewRedeemPrepaidCardCriteriaType instantiates a new RedeemPrepaidCardCriteriaType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRedeemPrepaidCardCriteriaType() *RedeemPrepaidCardCriteriaType {
	this := RedeemPrepaidCardCriteriaType{}
	return &this
}

// NewRedeemPrepaidCardCriteriaTypeWithDefaults instantiates a new RedeemPrepaidCardCriteriaType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRedeemPrepaidCardCriteriaTypeWithDefaults() *RedeemPrepaidCardCriteriaType {
	this := RedeemPrepaidCardCriteriaType{}
	return &this
}

// GetCashierId returns the CashierId field value if set, zero value otherwise.
func (o *RedeemPrepaidCardCriteriaType) GetCashierId() float32 {
	if o == nil || IsNil(o.CashierId) {
		var ret float32
		return ret
	}
	return *o.CashierId
}

// GetCashierIdOk returns a tuple with the CashierId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RedeemPrepaidCardCriteriaType) GetCashierIdOk() (*float32, bool) {
	if o == nil || IsNil(o.CashierId) {
		return nil, false
	}
	return o.CashierId, true
}

// HasCashierId returns a boolean if a field has been set.
func (o *RedeemPrepaidCardCriteriaType) HasCashierId() bool {
	if o != nil && !IsNil(o.CashierId) {
		return true
	}

	return false
}

// SetCashierId gets a reference to the given float32 and assigns it to the CashierId field.
func (o *RedeemPrepaidCardCriteriaType) SetCashierId(v float32) {
	o.CashierId = &v
}

// GetFolioView returns the FolioView field value if set, zero value otherwise.
func (o *RedeemPrepaidCardCriteriaType) GetFolioView() int32 {
	if o == nil || IsNil(o.FolioView) {
		var ret int32
		return ret
	}
	return *o.FolioView
}

// GetFolioViewOk returns a tuple with the FolioView field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RedeemPrepaidCardCriteriaType) GetFolioViewOk() (*int32, bool) {
	if o == nil || IsNil(o.FolioView) {
		return nil, false
	}
	return o.FolioView, true
}

// HasFolioView returns a boolean if a field has been set.
func (o *RedeemPrepaidCardCriteriaType) HasFolioView() bool {
	if o != nil && !IsNil(o.FolioView) {
		return true
	}

	return false
}

// SetFolioView gets a reference to the given int32 and assigns it to the FolioView field.
func (o *RedeemPrepaidCardCriteriaType) SetFolioView(v int32) {
	o.FolioView = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *RedeemPrepaidCardCriteriaType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RedeemPrepaidCardCriteriaType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *RedeemPrepaidCardCriteriaType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *RedeemPrepaidCardCriteriaType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetPrepaidCardRedemptions returns the PrepaidCardRedemptions field value if set, zero value otherwise.
func (o *RedeemPrepaidCardCriteriaType) GetPrepaidCardRedemptions() []PrepaidCardRedemptionType {
	if o == nil || IsNil(o.PrepaidCardRedemptions) {
		var ret []PrepaidCardRedemptionType
		return ret
	}
	return o.PrepaidCardRedemptions
}

// GetPrepaidCardRedemptionsOk returns a tuple with the PrepaidCardRedemptions field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RedeemPrepaidCardCriteriaType) GetPrepaidCardRedemptionsOk() ([]PrepaidCardRedemptionType, bool) {
	if o == nil || IsNil(o.PrepaidCardRedemptions) {
		return nil, false
	}
	return o.PrepaidCardRedemptions, true
}

// HasPrepaidCardRedemptions returns a boolean if a field has been set.
func (o *RedeemPrepaidCardCriteriaType) HasPrepaidCardRedemptions() bool {
	if o != nil && !IsNil(o.PrepaidCardRedemptions) {
		return true
	}

	return false
}

// SetPrepaidCardRedemptions gets a reference to the given []PrepaidCardRedemptionType and assigns it to the PrepaidCardRedemptions field.
func (o *RedeemPrepaidCardCriteriaType) SetPrepaidCardRedemptions(v []PrepaidCardRedemptionType) {
	o.PrepaidCardRedemptions = v
}

// GetReservationId returns the ReservationId field value if set, zero value otherwise.
func (o *RedeemPrepaidCardCriteriaType) GetReservationId() ReservationId {
	if o == nil || IsNil(o.ReservationId) {
		var ret ReservationId
		return ret
	}
	return *o.ReservationId
}

// GetReservationIdOk returns a tuple with the ReservationId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RedeemPrepaidCardCriteriaType) GetReservationIdOk() (*ReservationId, bool) {
	if o == nil || IsNil(o.ReservationId) {
		return nil, false
	}
	return o.ReservationId, true
}

// HasReservationId returns a boolean if a field has been set.
func (o *RedeemPrepaidCardCriteriaType) HasReservationId() bool {
	if o != nil && !IsNil(o.ReservationId) {
		return true
	}

	return false
}

// SetReservationId gets a reference to the given ReservationId and assigns it to the ReservationId field.
func (o *RedeemPrepaidCardCriteriaType) SetReservationId(v ReservationId) {
	o.ReservationId = &v
}

func (o RedeemPrepaidCardCriteriaType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RedeemPrepaidCardCriteriaType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CashierId) {
		toSerialize["cashierId"] = o.CashierId
	}
	if !IsNil(o.FolioView) {
		toSerialize["folioView"] = o.FolioView
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.PrepaidCardRedemptions) {
		toSerialize["prepaidCardRedemptions"] = o.PrepaidCardRedemptions
	}
	if !IsNil(o.ReservationId) {
		toSerialize["reservationId"] = o.ReservationId
	}
	return toSerialize, nil
}

type NullableRedeemPrepaidCardCriteriaType struct {
	value *RedeemPrepaidCardCriteriaType
	isSet bool
}

func (v NullableRedeemPrepaidCardCriteriaType) Get() *RedeemPrepaidCardCriteriaType {
	return v.value
}

func (v *NullableRedeemPrepaidCardCriteriaType) Set(val *RedeemPrepaidCardCriteriaType) {
	v.value = val
	v.isSet = true
}

func (v NullableRedeemPrepaidCardCriteriaType) IsSet() bool {
	return v.isSet
}

func (v *NullableRedeemPrepaidCardCriteriaType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRedeemPrepaidCardCriteriaType(val *RedeemPrepaidCardCriteriaType) *NullableRedeemPrepaidCardCriteriaType {
	return &NullableRedeemPrepaidCardCriteriaType{value: val, isSet: true}
}

func (v NullableRedeemPrepaidCardCriteriaType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRedeemPrepaidCardCriteriaType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


