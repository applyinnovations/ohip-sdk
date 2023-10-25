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

// checks if the CommissionPaymentDetails type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CommissionPaymentDetails{}

// CommissionPaymentDetails Response to get the commission payment details.
type CommissionPaymentDetails struct {
	// Defines list of commission payment info.
	CommissionPaymentInfoList []CommissionPaymentInfo `json:"commissionPaymentInfoList,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewCommissionPaymentDetails instantiates a new CommissionPaymentDetails object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCommissionPaymentDetails() *CommissionPaymentDetails {
	this := CommissionPaymentDetails{}
	return &this
}

// NewCommissionPaymentDetailsWithDefaults instantiates a new CommissionPaymentDetails object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCommissionPaymentDetailsWithDefaults() *CommissionPaymentDetails {
	this := CommissionPaymentDetails{}
	return &this
}

// GetCommissionPaymentInfoList returns the CommissionPaymentInfoList field value if set, zero value otherwise.
func (o *CommissionPaymentDetails) GetCommissionPaymentInfoList() []CommissionPaymentInfo {
	if o == nil || IsNil(o.CommissionPaymentInfoList) {
		var ret []CommissionPaymentInfo
		return ret
	}
	return o.CommissionPaymentInfoList
}

// GetCommissionPaymentInfoListOk returns a tuple with the CommissionPaymentInfoList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CommissionPaymentDetails) GetCommissionPaymentInfoListOk() ([]CommissionPaymentInfo, bool) {
	if o == nil || IsNil(o.CommissionPaymentInfoList) {
		return nil, false
	}
	return o.CommissionPaymentInfoList, true
}

// HasCommissionPaymentInfoList returns a boolean if a field has been set.
func (o *CommissionPaymentDetails) HasCommissionPaymentInfoList() bool {
	if o != nil && !IsNil(o.CommissionPaymentInfoList) {
		return true
	}

	return false
}

// SetCommissionPaymentInfoList gets a reference to the given []CommissionPaymentInfo and assigns it to the CommissionPaymentInfoList field.
func (o *CommissionPaymentDetails) SetCommissionPaymentInfoList(v []CommissionPaymentInfo) {
	o.CommissionPaymentInfoList = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *CommissionPaymentDetails) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CommissionPaymentDetails) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *CommissionPaymentDetails) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *CommissionPaymentDetails) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *CommissionPaymentDetails) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CommissionPaymentDetails) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *CommissionPaymentDetails) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *CommissionPaymentDetails) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o CommissionPaymentDetails) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CommissionPaymentDetails) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CommissionPaymentInfoList) {
		toSerialize["commissionPaymentInfoList"] = o.CommissionPaymentInfoList
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableCommissionPaymentDetails struct {
	value *CommissionPaymentDetails
	isSet bool
}

func (v NullableCommissionPaymentDetails) Get() *CommissionPaymentDetails {
	return v.value
}

func (v *NullableCommissionPaymentDetails) Set(val *CommissionPaymentDetails) {
	v.value = val
	v.isSet = true
}

func (v NullableCommissionPaymentDetails) IsSet() bool {
	return v.isSet
}

func (v *NullableCommissionPaymentDetails) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCommissionPaymentDetails(val *CommissionPaymentDetails) *NullableCommissionPaymentDetails {
	return &NullableCommissionPaymentDetails{value: val, isSet: true}
}

func (v NullableCommissionPaymentDetails) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCommissionPaymentDetails) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


