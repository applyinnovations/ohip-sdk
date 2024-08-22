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

// checks if the CommissionPaidDetailsType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CommissionPaidDetailsType{}

// CommissionPaidDetailsType Commission paid details.
type CommissionPaidDetailsType struct {
	CommissionAmount *CurrencyAmountType `json:"commissionAmount,omitempty"`
	// Indicates the type of commission paid to agent.
	CommissionType *string `json:"commissionType,omitempty"`
	PerNight *bool `json:"perNight,omitempty"`
	PerStay *bool `json:"perStay,omitempty"`
	WeekEndCommissionAmount *CurrencyAmountType `json:"weekEndCommissionAmount,omitempty"`
}

// NewCommissionPaidDetailsType instantiates a new CommissionPaidDetailsType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCommissionPaidDetailsType() *CommissionPaidDetailsType {
	this := CommissionPaidDetailsType{}
	return &this
}

// NewCommissionPaidDetailsTypeWithDefaults instantiates a new CommissionPaidDetailsType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCommissionPaidDetailsTypeWithDefaults() *CommissionPaidDetailsType {
	this := CommissionPaidDetailsType{}
	return &this
}

// GetCommissionAmount returns the CommissionAmount field value if set, zero value otherwise.
func (o *CommissionPaidDetailsType) GetCommissionAmount() CurrencyAmountType {
	if o == nil || IsNil(o.CommissionAmount) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.CommissionAmount
}

// GetCommissionAmountOk returns a tuple with the CommissionAmount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CommissionPaidDetailsType) GetCommissionAmountOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.CommissionAmount) {
		return nil, false
	}
	return o.CommissionAmount, true
}

// HasCommissionAmount returns a boolean if a field has been set.
func (o *CommissionPaidDetailsType) HasCommissionAmount() bool {
	if o != nil && !IsNil(o.CommissionAmount) {
		return true
	}

	return false
}

// SetCommissionAmount gets a reference to the given CurrencyAmountType and assigns it to the CommissionAmount field.
func (o *CommissionPaidDetailsType) SetCommissionAmount(v CurrencyAmountType) {
	o.CommissionAmount = &v
}

// GetCommissionType returns the CommissionType field value if set, zero value otherwise.
func (o *CommissionPaidDetailsType) GetCommissionType() string {
	if o == nil || IsNil(o.CommissionType) {
		var ret string
		return ret
	}
	return *o.CommissionType
}

// GetCommissionTypeOk returns a tuple with the CommissionType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CommissionPaidDetailsType) GetCommissionTypeOk() (*string, bool) {
	if o == nil || IsNil(o.CommissionType) {
		return nil, false
	}
	return o.CommissionType, true
}

// HasCommissionType returns a boolean if a field has been set.
func (o *CommissionPaidDetailsType) HasCommissionType() bool {
	if o != nil && !IsNil(o.CommissionType) {
		return true
	}

	return false
}

// SetCommissionType gets a reference to the given string and assigns it to the CommissionType field.
func (o *CommissionPaidDetailsType) SetCommissionType(v string) {
	o.CommissionType = &v
}

// GetPerNight returns the PerNight field value if set, zero value otherwise.
func (o *CommissionPaidDetailsType) GetPerNight() bool {
	if o == nil || IsNil(o.PerNight) {
		var ret bool
		return ret
	}
	return *o.PerNight
}

// GetPerNightOk returns a tuple with the PerNight field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CommissionPaidDetailsType) GetPerNightOk() (*bool, bool) {
	if o == nil || IsNil(o.PerNight) {
		return nil, false
	}
	return o.PerNight, true
}

// HasPerNight returns a boolean if a field has been set.
func (o *CommissionPaidDetailsType) HasPerNight() bool {
	if o != nil && !IsNil(o.PerNight) {
		return true
	}

	return false
}

// SetPerNight gets a reference to the given bool and assigns it to the PerNight field.
func (o *CommissionPaidDetailsType) SetPerNight(v bool) {
	o.PerNight = &v
}

// GetPerStay returns the PerStay field value if set, zero value otherwise.
func (o *CommissionPaidDetailsType) GetPerStay() bool {
	if o == nil || IsNil(o.PerStay) {
		var ret bool
		return ret
	}
	return *o.PerStay
}

// GetPerStayOk returns a tuple with the PerStay field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CommissionPaidDetailsType) GetPerStayOk() (*bool, bool) {
	if o == nil || IsNil(o.PerStay) {
		return nil, false
	}
	return o.PerStay, true
}

// HasPerStay returns a boolean if a field has been set.
func (o *CommissionPaidDetailsType) HasPerStay() bool {
	if o != nil && !IsNil(o.PerStay) {
		return true
	}

	return false
}

// SetPerStay gets a reference to the given bool and assigns it to the PerStay field.
func (o *CommissionPaidDetailsType) SetPerStay(v bool) {
	o.PerStay = &v
}

// GetWeekEndCommissionAmount returns the WeekEndCommissionAmount field value if set, zero value otherwise.
func (o *CommissionPaidDetailsType) GetWeekEndCommissionAmount() CurrencyAmountType {
	if o == nil || IsNil(o.WeekEndCommissionAmount) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.WeekEndCommissionAmount
}

// GetWeekEndCommissionAmountOk returns a tuple with the WeekEndCommissionAmount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CommissionPaidDetailsType) GetWeekEndCommissionAmountOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.WeekEndCommissionAmount) {
		return nil, false
	}
	return o.WeekEndCommissionAmount, true
}

// HasWeekEndCommissionAmount returns a boolean if a field has been set.
func (o *CommissionPaidDetailsType) HasWeekEndCommissionAmount() bool {
	if o != nil && !IsNil(o.WeekEndCommissionAmount) {
		return true
	}

	return false
}

// SetWeekEndCommissionAmount gets a reference to the given CurrencyAmountType and assigns it to the WeekEndCommissionAmount field.
func (o *CommissionPaidDetailsType) SetWeekEndCommissionAmount(v CurrencyAmountType) {
	o.WeekEndCommissionAmount = &v
}

func (o CommissionPaidDetailsType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CommissionPaidDetailsType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CommissionAmount) {
		toSerialize["commissionAmount"] = o.CommissionAmount
	}
	if !IsNil(o.CommissionType) {
		toSerialize["commissionType"] = o.CommissionType
	}
	if !IsNil(o.PerNight) {
		toSerialize["perNight"] = o.PerNight
	}
	if !IsNil(o.PerStay) {
		toSerialize["perStay"] = o.PerStay
	}
	if !IsNil(o.WeekEndCommissionAmount) {
		toSerialize["weekEndCommissionAmount"] = o.WeekEndCommissionAmount
	}
	return toSerialize, nil
}

type NullableCommissionPaidDetailsType struct {
	value *CommissionPaidDetailsType
	isSet bool
}

func (v NullableCommissionPaidDetailsType) Get() *CommissionPaidDetailsType {
	return v.value
}

func (v *NullableCommissionPaidDetailsType) Set(val *CommissionPaidDetailsType) {
	v.value = val
	v.isSet = true
}

func (v NullableCommissionPaidDetailsType) IsSet() bool {
	return v.isSet
}

func (v *NullableCommissionPaidDetailsType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCommissionPaidDetailsType(val *CommissionPaidDetailsType) *NullableCommissionPaidDetailsType {
	return &NullableCommissionPaidDetailsType{value: val, isSet: true}
}

func (v NullableCommissionPaidDetailsType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCommissionPaidDetailsType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


