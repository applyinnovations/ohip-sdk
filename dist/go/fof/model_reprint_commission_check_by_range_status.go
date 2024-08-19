/*
OPERA Cloud Front Desk Operations Service

APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fof

import (
	"encoding/json"
)

// checks if the ReprintCommissionCheckByRangeStatus type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ReprintCommissionCheckByRangeStatus{}

// ReprintCommissionCheckByRangeStatus Response type for reprinting a range of check payments.
type ReprintCommissionCheckByRangeStatus struct {
	Links []InstanceLink `json:"links,omitempty"`
	ReprintCheckReport *CommissionPaymentReportType `json:"reprintCheckReport,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewReprintCommissionCheckByRangeStatus instantiates a new ReprintCommissionCheckByRangeStatus object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewReprintCommissionCheckByRangeStatus() *ReprintCommissionCheckByRangeStatus {
	this := ReprintCommissionCheckByRangeStatus{}
	return &this
}

// NewReprintCommissionCheckByRangeStatusWithDefaults instantiates a new ReprintCommissionCheckByRangeStatus object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewReprintCommissionCheckByRangeStatusWithDefaults() *ReprintCommissionCheckByRangeStatus {
	this := ReprintCommissionCheckByRangeStatus{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *ReprintCommissionCheckByRangeStatus) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReprintCommissionCheckByRangeStatus) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *ReprintCommissionCheckByRangeStatus) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *ReprintCommissionCheckByRangeStatus) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetReprintCheckReport returns the ReprintCheckReport field value if set, zero value otherwise.
func (o *ReprintCommissionCheckByRangeStatus) GetReprintCheckReport() CommissionPaymentReportType {
	if o == nil || IsNil(o.ReprintCheckReport) {
		var ret CommissionPaymentReportType
		return ret
	}
	return *o.ReprintCheckReport
}

// GetReprintCheckReportOk returns a tuple with the ReprintCheckReport field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReprintCommissionCheckByRangeStatus) GetReprintCheckReportOk() (*CommissionPaymentReportType, bool) {
	if o == nil || IsNil(o.ReprintCheckReport) {
		return nil, false
	}
	return o.ReprintCheckReport, true
}

// HasReprintCheckReport returns a boolean if a field has been set.
func (o *ReprintCommissionCheckByRangeStatus) HasReprintCheckReport() bool {
	if o != nil && !IsNil(o.ReprintCheckReport) {
		return true
	}

	return false
}

// SetReprintCheckReport gets a reference to the given CommissionPaymentReportType and assigns it to the ReprintCheckReport field.
func (o *ReprintCommissionCheckByRangeStatus) SetReprintCheckReport(v CommissionPaymentReportType) {
	o.ReprintCheckReport = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *ReprintCommissionCheckByRangeStatus) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReprintCommissionCheckByRangeStatus) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *ReprintCommissionCheckByRangeStatus) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *ReprintCommissionCheckByRangeStatus) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o ReprintCommissionCheckByRangeStatus) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ReprintCommissionCheckByRangeStatus) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.ReprintCheckReport) {
		toSerialize["reprintCheckReport"] = o.ReprintCheckReport
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableReprintCommissionCheckByRangeStatus struct {
	value *ReprintCommissionCheckByRangeStatus
	isSet bool
}

func (v NullableReprintCommissionCheckByRangeStatus) Get() *ReprintCommissionCheckByRangeStatus {
	return v.value
}

func (v *NullableReprintCommissionCheckByRangeStatus) Set(val *ReprintCommissionCheckByRangeStatus) {
	v.value = val
	v.isSet = true
}

func (v NullableReprintCommissionCheckByRangeStatus) IsSet() bool {
	return v.isSet
}

func (v *NullableReprintCommissionCheckByRangeStatus) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableReprintCommissionCheckByRangeStatus(val *ReprintCommissionCheckByRangeStatus) *NullableReprintCommissionCheckByRangeStatus {
	return &NullableReprintCommissionCheckByRangeStatus{value: val, isSet: true}
}

func (v NullableReprintCommissionCheckByRangeStatus) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableReprintCommissionCheckByRangeStatus) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


