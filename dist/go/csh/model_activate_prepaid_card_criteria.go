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

// checks if the ActivatePrepaidCardCriteria type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ActivatePrepaidCardCriteria{}

// ActivatePrepaidCardCriteria Prepaid card criteria type used to perform manage operation on the card.
type ActivatePrepaidCardCriteria struct {
	Amount *CurrencyAmountType `json:"amount,omitempty"`
	// Prepaid card number.
	CardNo *string `json:"cardNo,omitempty"`
	// The Cashier ID of the Cashier who is currently processing the transaction(s).
	CashierId *float32 `json:"cashierId,omitempty"`
	// Hotel code.
	HotelId *string `json:"hotelId,omitempty"`
	InterfaceId *UniqueIDType `json:"interfaceId,omitempty"`
	// PIN code associated for the prepaid card.
	Pin *string `json:"pin,omitempty"`
	// Indicate that charges will be posted to the room.
	PostChargeToRoom *bool `json:"postChargeToRoom,omitempty"`
	ProfileId *UniqueIDType `json:"profileId,omitempty"`
	ReservationId *UniqueIDType `json:"reservationId,omitempty"`
	SaleCriteria *SaleCriteriaType `json:"saleCriteria,omitempty"`
}

// NewActivatePrepaidCardCriteria instantiates a new ActivatePrepaidCardCriteria object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewActivatePrepaidCardCriteria() *ActivatePrepaidCardCriteria {
	this := ActivatePrepaidCardCriteria{}
	return &this
}

// NewActivatePrepaidCardCriteriaWithDefaults instantiates a new ActivatePrepaidCardCriteria object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewActivatePrepaidCardCriteriaWithDefaults() *ActivatePrepaidCardCriteria {
	this := ActivatePrepaidCardCriteria{}
	return &this
}

// GetAmount returns the Amount field value if set, zero value otherwise.
func (o *ActivatePrepaidCardCriteria) GetAmount() CurrencyAmountType {
	if o == nil || IsNil(o.Amount) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.Amount
}

// GetAmountOk returns a tuple with the Amount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivatePrepaidCardCriteria) GetAmountOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.Amount) {
		return nil, false
	}
	return o.Amount, true
}

// HasAmount returns a boolean if a field has been set.
func (o *ActivatePrepaidCardCriteria) HasAmount() bool {
	if o != nil && !IsNil(o.Amount) {
		return true
	}

	return false
}

// SetAmount gets a reference to the given CurrencyAmountType and assigns it to the Amount field.
func (o *ActivatePrepaidCardCriteria) SetAmount(v CurrencyAmountType) {
	o.Amount = &v
}

// GetCardNo returns the CardNo field value if set, zero value otherwise.
func (o *ActivatePrepaidCardCriteria) GetCardNo() string {
	if o == nil || IsNil(o.CardNo) {
		var ret string
		return ret
	}
	return *o.CardNo
}

// GetCardNoOk returns a tuple with the CardNo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivatePrepaidCardCriteria) GetCardNoOk() (*string, bool) {
	if o == nil || IsNil(o.CardNo) {
		return nil, false
	}
	return o.CardNo, true
}

// HasCardNo returns a boolean if a field has been set.
func (o *ActivatePrepaidCardCriteria) HasCardNo() bool {
	if o != nil && !IsNil(o.CardNo) {
		return true
	}

	return false
}

// SetCardNo gets a reference to the given string and assigns it to the CardNo field.
func (o *ActivatePrepaidCardCriteria) SetCardNo(v string) {
	o.CardNo = &v
}

// GetCashierId returns the CashierId field value if set, zero value otherwise.
func (o *ActivatePrepaidCardCriteria) GetCashierId() float32 {
	if o == nil || IsNil(o.CashierId) {
		var ret float32
		return ret
	}
	return *o.CashierId
}

// GetCashierIdOk returns a tuple with the CashierId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivatePrepaidCardCriteria) GetCashierIdOk() (*float32, bool) {
	if o == nil || IsNil(o.CashierId) {
		return nil, false
	}
	return o.CashierId, true
}

// HasCashierId returns a boolean if a field has been set.
func (o *ActivatePrepaidCardCriteria) HasCashierId() bool {
	if o != nil && !IsNil(o.CashierId) {
		return true
	}

	return false
}

// SetCashierId gets a reference to the given float32 and assigns it to the CashierId field.
func (o *ActivatePrepaidCardCriteria) SetCashierId(v float32) {
	o.CashierId = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *ActivatePrepaidCardCriteria) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivatePrepaidCardCriteria) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *ActivatePrepaidCardCriteria) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *ActivatePrepaidCardCriteria) SetHotelId(v string) {
	o.HotelId = &v
}

// GetInterfaceId returns the InterfaceId field value if set, zero value otherwise.
func (o *ActivatePrepaidCardCriteria) GetInterfaceId() UniqueIDType {
	if o == nil || IsNil(o.InterfaceId) {
		var ret UniqueIDType
		return ret
	}
	return *o.InterfaceId
}

// GetInterfaceIdOk returns a tuple with the InterfaceId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivatePrepaidCardCriteria) GetInterfaceIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.InterfaceId) {
		return nil, false
	}
	return o.InterfaceId, true
}

// HasInterfaceId returns a boolean if a field has been set.
func (o *ActivatePrepaidCardCriteria) HasInterfaceId() bool {
	if o != nil && !IsNil(o.InterfaceId) {
		return true
	}

	return false
}

// SetInterfaceId gets a reference to the given UniqueIDType and assigns it to the InterfaceId field.
func (o *ActivatePrepaidCardCriteria) SetInterfaceId(v UniqueIDType) {
	o.InterfaceId = &v
}

// GetPin returns the Pin field value if set, zero value otherwise.
func (o *ActivatePrepaidCardCriteria) GetPin() string {
	if o == nil || IsNil(o.Pin) {
		var ret string
		return ret
	}
	return *o.Pin
}

// GetPinOk returns a tuple with the Pin field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivatePrepaidCardCriteria) GetPinOk() (*string, bool) {
	if o == nil || IsNil(o.Pin) {
		return nil, false
	}
	return o.Pin, true
}

// HasPin returns a boolean if a field has been set.
func (o *ActivatePrepaidCardCriteria) HasPin() bool {
	if o != nil && !IsNil(o.Pin) {
		return true
	}

	return false
}

// SetPin gets a reference to the given string and assigns it to the Pin field.
func (o *ActivatePrepaidCardCriteria) SetPin(v string) {
	o.Pin = &v
}

// GetPostChargeToRoom returns the PostChargeToRoom field value if set, zero value otherwise.
func (o *ActivatePrepaidCardCriteria) GetPostChargeToRoom() bool {
	if o == nil || IsNil(o.PostChargeToRoom) {
		var ret bool
		return ret
	}
	return *o.PostChargeToRoom
}

// GetPostChargeToRoomOk returns a tuple with the PostChargeToRoom field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivatePrepaidCardCriteria) GetPostChargeToRoomOk() (*bool, bool) {
	if o == nil || IsNil(o.PostChargeToRoom) {
		return nil, false
	}
	return o.PostChargeToRoom, true
}

// HasPostChargeToRoom returns a boolean if a field has been set.
func (o *ActivatePrepaidCardCriteria) HasPostChargeToRoom() bool {
	if o != nil && !IsNil(o.PostChargeToRoom) {
		return true
	}

	return false
}

// SetPostChargeToRoom gets a reference to the given bool and assigns it to the PostChargeToRoom field.
func (o *ActivatePrepaidCardCriteria) SetPostChargeToRoom(v bool) {
	o.PostChargeToRoom = &v
}

// GetProfileId returns the ProfileId field value if set, zero value otherwise.
func (o *ActivatePrepaidCardCriteria) GetProfileId() UniqueIDType {
	if o == nil || IsNil(o.ProfileId) {
		var ret UniqueIDType
		return ret
	}
	return *o.ProfileId
}

// GetProfileIdOk returns a tuple with the ProfileId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivatePrepaidCardCriteria) GetProfileIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.ProfileId) {
		return nil, false
	}
	return o.ProfileId, true
}

// HasProfileId returns a boolean if a field has been set.
func (o *ActivatePrepaidCardCriteria) HasProfileId() bool {
	if o != nil && !IsNil(o.ProfileId) {
		return true
	}

	return false
}

// SetProfileId gets a reference to the given UniqueIDType and assigns it to the ProfileId field.
func (o *ActivatePrepaidCardCriteria) SetProfileId(v UniqueIDType) {
	o.ProfileId = &v
}

// GetReservationId returns the ReservationId field value if set, zero value otherwise.
func (o *ActivatePrepaidCardCriteria) GetReservationId() UniqueIDType {
	if o == nil || IsNil(o.ReservationId) {
		var ret UniqueIDType
		return ret
	}
	return *o.ReservationId
}

// GetReservationIdOk returns a tuple with the ReservationId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivatePrepaidCardCriteria) GetReservationIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.ReservationId) {
		return nil, false
	}
	return o.ReservationId, true
}

// HasReservationId returns a boolean if a field has been set.
func (o *ActivatePrepaidCardCriteria) HasReservationId() bool {
	if o != nil && !IsNil(o.ReservationId) {
		return true
	}

	return false
}

// SetReservationId gets a reference to the given UniqueIDType and assigns it to the ReservationId field.
func (o *ActivatePrepaidCardCriteria) SetReservationId(v UniqueIDType) {
	o.ReservationId = &v
}

// GetSaleCriteria returns the SaleCriteria field value if set, zero value otherwise.
func (o *ActivatePrepaidCardCriteria) GetSaleCriteria() SaleCriteriaType {
	if o == nil || IsNil(o.SaleCriteria) {
		var ret SaleCriteriaType
		return ret
	}
	return *o.SaleCriteria
}

// GetSaleCriteriaOk returns a tuple with the SaleCriteria field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivatePrepaidCardCriteria) GetSaleCriteriaOk() (*SaleCriteriaType, bool) {
	if o == nil || IsNil(o.SaleCriteria) {
		return nil, false
	}
	return o.SaleCriteria, true
}

// HasSaleCriteria returns a boolean if a field has been set.
func (o *ActivatePrepaidCardCriteria) HasSaleCriteria() bool {
	if o != nil && !IsNil(o.SaleCriteria) {
		return true
	}

	return false
}

// SetSaleCriteria gets a reference to the given SaleCriteriaType and assigns it to the SaleCriteria field.
func (o *ActivatePrepaidCardCriteria) SetSaleCriteria(v SaleCriteriaType) {
	o.SaleCriteria = &v
}

func (o ActivatePrepaidCardCriteria) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ActivatePrepaidCardCriteria) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Amount) {
		toSerialize["amount"] = o.Amount
	}
	if !IsNil(o.CardNo) {
		toSerialize["cardNo"] = o.CardNo
	}
	if !IsNil(o.CashierId) {
		toSerialize["cashierId"] = o.CashierId
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.InterfaceId) {
		toSerialize["interfaceId"] = o.InterfaceId
	}
	if !IsNil(o.Pin) {
		toSerialize["pin"] = o.Pin
	}
	if !IsNil(o.PostChargeToRoom) {
		toSerialize["postChargeToRoom"] = o.PostChargeToRoom
	}
	if !IsNil(o.ProfileId) {
		toSerialize["profileId"] = o.ProfileId
	}
	if !IsNil(o.ReservationId) {
		toSerialize["reservationId"] = o.ReservationId
	}
	if !IsNil(o.SaleCriteria) {
		toSerialize["saleCriteria"] = o.SaleCriteria
	}
	return toSerialize, nil
}

type NullableActivatePrepaidCardCriteria struct {
	value *ActivatePrepaidCardCriteria
	isSet bool
}

func (v NullableActivatePrepaidCardCriteria) Get() *ActivatePrepaidCardCriteria {
	return v.value
}

func (v *NullableActivatePrepaidCardCriteria) Set(val *ActivatePrepaidCardCriteria) {
	v.value = val
	v.isSet = true
}

func (v NullableActivatePrepaidCardCriteria) IsSet() bool {
	return v.isSet
}

func (v *NullableActivatePrepaidCardCriteria) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableActivatePrepaidCardCriteria(val *ActivatePrepaidCardCriteria) *NullableActivatePrepaidCardCriteria {
	return &NullableActivatePrepaidCardCriteria{value: val, isSet: true}
}

func (v NullableActivatePrepaidCardCriteria) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableActivatePrepaidCardCriteria) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

