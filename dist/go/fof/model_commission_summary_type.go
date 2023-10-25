/*
OPERA Cloud Front Desk Operations Service

APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fof

import (
	"encoding/json"
)

// checks if the CommissionSummaryType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CommissionSummaryType{}

// CommissionSummaryType Summary of the commission payment information totaled for all agents/sources.
type CommissionSummaryType struct {
	AR *CurrencyAmountType `json:"aR,omitempty"`
	OnHold *CurrencyAmountType `json:"onHold,omitempty"`
	Potential *CurrencyAmountType `json:"potential,omitempty"`
	ToBePaid *CurrencyAmountType `json:"toBePaid,omitempty"`
}

// NewCommissionSummaryType instantiates a new CommissionSummaryType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCommissionSummaryType() *CommissionSummaryType {
	this := CommissionSummaryType{}
	return &this
}

// NewCommissionSummaryTypeWithDefaults instantiates a new CommissionSummaryType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCommissionSummaryTypeWithDefaults() *CommissionSummaryType {
	this := CommissionSummaryType{}
	return &this
}

// GetAR returns the AR field value if set, zero value otherwise.
func (o *CommissionSummaryType) GetAR() CurrencyAmountType {
	if o == nil || IsNil(o.AR) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.AR
}

// GetAROk returns a tuple with the AR field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CommissionSummaryType) GetAROk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.AR) {
		return nil, false
	}
	return o.AR, true
}

// HasAR returns a boolean if a field has been set.
func (o *CommissionSummaryType) HasAR() bool {
	if o != nil && !IsNil(o.AR) {
		return true
	}

	return false
}

// SetAR gets a reference to the given CurrencyAmountType and assigns it to the AR field.
func (o *CommissionSummaryType) SetAR(v CurrencyAmountType) {
	o.AR = &v
}

// GetOnHold returns the OnHold field value if set, zero value otherwise.
func (o *CommissionSummaryType) GetOnHold() CurrencyAmountType {
	if o == nil || IsNil(o.OnHold) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.OnHold
}

// GetOnHoldOk returns a tuple with the OnHold field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CommissionSummaryType) GetOnHoldOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.OnHold) {
		return nil, false
	}
	return o.OnHold, true
}

// HasOnHold returns a boolean if a field has been set.
func (o *CommissionSummaryType) HasOnHold() bool {
	if o != nil && !IsNil(o.OnHold) {
		return true
	}

	return false
}

// SetOnHold gets a reference to the given CurrencyAmountType and assigns it to the OnHold field.
func (o *CommissionSummaryType) SetOnHold(v CurrencyAmountType) {
	o.OnHold = &v
}

// GetPotential returns the Potential field value if set, zero value otherwise.
func (o *CommissionSummaryType) GetPotential() CurrencyAmountType {
	if o == nil || IsNil(o.Potential) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.Potential
}

// GetPotentialOk returns a tuple with the Potential field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CommissionSummaryType) GetPotentialOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.Potential) {
		return nil, false
	}
	return o.Potential, true
}

// HasPotential returns a boolean if a field has been set.
func (o *CommissionSummaryType) HasPotential() bool {
	if o != nil && !IsNil(o.Potential) {
		return true
	}

	return false
}

// SetPotential gets a reference to the given CurrencyAmountType and assigns it to the Potential field.
func (o *CommissionSummaryType) SetPotential(v CurrencyAmountType) {
	o.Potential = &v
}

// GetToBePaid returns the ToBePaid field value if set, zero value otherwise.
func (o *CommissionSummaryType) GetToBePaid() CurrencyAmountType {
	if o == nil || IsNil(o.ToBePaid) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.ToBePaid
}

// GetToBePaidOk returns a tuple with the ToBePaid field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CommissionSummaryType) GetToBePaidOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.ToBePaid) {
		return nil, false
	}
	return o.ToBePaid, true
}

// HasToBePaid returns a boolean if a field has been set.
func (o *CommissionSummaryType) HasToBePaid() bool {
	if o != nil && !IsNil(o.ToBePaid) {
		return true
	}

	return false
}

// SetToBePaid gets a reference to the given CurrencyAmountType and assigns it to the ToBePaid field.
func (o *CommissionSummaryType) SetToBePaid(v CurrencyAmountType) {
	o.ToBePaid = &v
}

func (o CommissionSummaryType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CommissionSummaryType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AR) {
		toSerialize["aR"] = o.AR
	}
	if !IsNil(o.OnHold) {
		toSerialize["onHold"] = o.OnHold
	}
	if !IsNil(o.Potential) {
		toSerialize["potential"] = o.Potential
	}
	if !IsNil(o.ToBePaid) {
		toSerialize["toBePaid"] = o.ToBePaid
	}
	return toSerialize, nil
}

type NullableCommissionSummaryType struct {
	value *CommissionSummaryType
	isSet bool
}

func (v NullableCommissionSummaryType) Get() *CommissionSummaryType {
	return v.value
}

func (v *NullableCommissionSummaryType) Set(val *CommissionSummaryType) {
	v.value = val
	v.isSet = true
}

func (v NullableCommissionSummaryType) IsSet() bool {
	return v.isSet
}

func (v *NullableCommissionSummaryType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCommissionSummaryType(val *CommissionSummaryType) *NullableCommissionSummaryType {
	return &NullableCommissionSummaryType{value: val, isSet: true}
}

func (v NullableCommissionSummaryType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCommissionSummaryType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


