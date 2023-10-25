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

// checks if the CCAuthorizationInstructionTypeAuthorizationSetup type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CCAuthorizationInstructionTypeAuthorizationSetup{}

// CCAuthorizationInstructionTypeAuthorizationSetup Indicates the Credit Card EFT payment method authorization rules setup.
type CCAuthorizationInstructionTypeAuthorizationSetup struct {
	// Indicates if authorization at Check In is allowed for this payment method. False will indicate that no authorization will be done at Check In for this payment method.
	CheckIn *bool `json:"checkIn,omitempty"`
	// Indicates if authorization at Deposit is allowed for this payment method. False will indicate that no authorization will be done at the time of deposit payments, for this payment method. The settlement request will be sent without an authorization request.
	Deposit *bool `json:"deposit,omitempty"`
	// Indicates if this payment method is setup as a PayOnly, which does not require authorization to be done prior to settlement. The special settlement handling will take care of both Authorization and Settlement together.
	PayOnly *bool `json:"payOnly,omitempty"`
	// Indicates if authorization during the stay of the guest is allowed for this payment method. False will indicate that no authorization will be done during the stay and prior to settlements for this payment method. The settlement request will be sent without an authorization request.
	Stay *bool `json:"stay,omitempty"`
}

// NewCCAuthorizationInstructionTypeAuthorizationSetup instantiates a new CCAuthorizationInstructionTypeAuthorizationSetup object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCCAuthorizationInstructionTypeAuthorizationSetup() *CCAuthorizationInstructionTypeAuthorizationSetup {
	this := CCAuthorizationInstructionTypeAuthorizationSetup{}
	return &this
}

// NewCCAuthorizationInstructionTypeAuthorizationSetupWithDefaults instantiates a new CCAuthorizationInstructionTypeAuthorizationSetup object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCCAuthorizationInstructionTypeAuthorizationSetupWithDefaults() *CCAuthorizationInstructionTypeAuthorizationSetup {
	this := CCAuthorizationInstructionTypeAuthorizationSetup{}
	return &this
}

// GetCheckIn returns the CheckIn field value if set, zero value otherwise.
func (o *CCAuthorizationInstructionTypeAuthorizationSetup) GetCheckIn() bool {
	if o == nil || IsNil(o.CheckIn) {
		var ret bool
		return ret
	}
	return *o.CheckIn
}

// GetCheckInOk returns a tuple with the CheckIn field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CCAuthorizationInstructionTypeAuthorizationSetup) GetCheckInOk() (*bool, bool) {
	if o == nil || IsNil(o.CheckIn) {
		return nil, false
	}
	return o.CheckIn, true
}

// HasCheckIn returns a boolean if a field has been set.
func (o *CCAuthorizationInstructionTypeAuthorizationSetup) HasCheckIn() bool {
	if o != nil && !IsNil(o.CheckIn) {
		return true
	}

	return false
}

// SetCheckIn gets a reference to the given bool and assigns it to the CheckIn field.
func (o *CCAuthorizationInstructionTypeAuthorizationSetup) SetCheckIn(v bool) {
	o.CheckIn = &v
}

// GetDeposit returns the Deposit field value if set, zero value otherwise.
func (o *CCAuthorizationInstructionTypeAuthorizationSetup) GetDeposit() bool {
	if o == nil || IsNil(o.Deposit) {
		var ret bool
		return ret
	}
	return *o.Deposit
}

// GetDepositOk returns a tuple with the Deposit field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CCAuthorizationInstructionTypeAuthorizationSetup) GetDepositOk() (*bool, bool) {
	if o == nil || IsNil(o.Deposit) {
		return nil, false
	}
	return o.Deposit, true
}

// HasDeposit returns a boolean if a field has been set.
func (o *CCAuthorizationInstructionTypeAuthorizationSetup) HasDeposit() bool {
	if o != nil && !IsNil(o.Deposit) {
		return true
	}

	return false
}

// SetDeposit gets a reference to the given bool and assigns it to the Deposit field.
func (o *CCAuthorizationInstructionTypeAuthorizationSetup) SetDeposit(v bool) {
	o.Deposit = &v
}

// GetPayOnly returns the PayOnly field value if set, zero value otherwise.
func (o *CCAuthorizationInstructionTypeAuthorizationSetup) GetPayOnly() bool {
	if o == nil || IsNil(o.PayOnly) {
		var ret bool
		return ret
	}
	return *o.PayOnly
}

// GetPayOnlyOk returns a tuple with the PayOnly field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CCAuthorizationInstructionTypeAuthorizationSetup) GetPayOnlyOk() (*bool, bool) {
	if o == nil || IsNil(o.PayOnly) {
		return nil, false
	}
	return o.PayOnly, true
}

// HasPayOnly returns a boolean if a field has been set.
func (o *CCAuthorizationInstructionTypeAuthorizationSetup) HasPayOnly() bool {
	if o != nil && !IsNil(o.PayOnly) {
		return true
	}

	return false
}

// SetPayOnly gets a reference to the given bool and assigns it to the PayOnly field.
func (o *CCAuthorizationInstructionTypeAuthorizationSetup) SetPayOnly(v bool) {
	o.PayOnly = &v
}

// GetStay returns the Stay field value if set, zero value otherwise.
func (o *CCAuthorizationInstructionTypeAuthorizationSetup) GetStay() bool {
	if o == nil || IsNil(o.Stay) {
		var ret bool
		return ret
	}
	return *o.Stay
}

// GetStayOk returns a tuple with the Stay field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CCAuthorizationInstructionTypeAuthorizationSetup) GetStayOk() (*bool, bool) {
	if o == nil || IsNil(o.Stay) {
		return nil, false
	}
	return o.Stay, true
}

// HasStay returns a boolean if a field has been set.
func (o *CCAuthorizationInstructionTypeAuthorizationSetup) HasStay() bool {
	if o != nil && !IsNil(o.Stay) {
		return true
	}

	return false
}

// SetStay gets a reference to the given bool and assigns it to the Stay field.
func (o *CCAuthorizationInstructionTypeAuthorizationSetup) SetStay(v bool) {
	o.Stay = &v
}

func (o CCAuthorizationInstructionTypeAuthorizationSetup) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CCAuthorizationInstructionTypeAuthorizationSetup) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CheckIn) {
		toSerialize["checkIn"] = o.CheckIn
	}
	if !IsNil(o.Deposit) {
		toSerialize["deposit"] = o.Deposit
	}
	if !IsNil(o.PayOnly) {
		toSerialize["payOnly"] = o.PayOnly
	}
	if !IsNil(o.Stay) {
		toSerialize["stay"] = o.Stay
	}
	return toSerialize, nil
}

type NullableCCAuthorizationInstructionTypeAuthorizationSetup struct {
	value *CCAuthorizationInstructionTypeAuthorizationSetup
	isSet bool
}

func (v NullableCCAuthorizationInstructionTypeAuthorizationSetup) Get() *CCAuthorizationInstructionTypeAuthorizationSetup {
	return v.value
}

func (v *NullableCCAuthorizationInstructionTypeAuthorizationSetup) Set(val *CCAuthorizationInstructionTypeAuthorizationSetup) {
	v.value = val
	v.isSet = true
}

func (v NullableCCAuthorizationInstructionTypeAuthorizationSetup) IsSet() bool {
	return v.isSet
}

func (v *NullableCCAuthorizationInstructionTypeAuthorizationSetup) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCCAuthorizationInstructionTypeAuthorizationSetup(val *CCAuthorizationInstructionTypeAuthorizationSetup) *NullableCCAuthorizationInstructionTypeAuthorizationSetup {
	return &NullableCCAuthorizationInstructionTypeAuthorizationSetup{value: val, isSet: true}
}

func (v NullableCCAuthorizationInstructionTypeAuthorizationSetup) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCCAuthorizationInstructionTypeAuthorizationSetup) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


