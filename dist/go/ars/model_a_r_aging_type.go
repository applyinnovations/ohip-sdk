/*
OPERA Cloud Accounts Receivables API

APIs to cater for Accounts Receivables functionality in OPERA Cloud. <br /><br The OPERA Cloud Accounts Receivable module enables you to manage debtors' accounts, invoices, and remittance.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package ars

import (
	"encoding/json"
)

// checks if the ARAgingType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ARAgingType{}

// ARAgingType Aging information for an Aging Bucket.
type ARAgingType struct {
	// The bucket description in terms of days. Example : 0-31 days
	AgingBucketRange *string `json:"agingBucketRange,omitempty"`
	AgingDate *DateRangeType `json:"agingDate,omitempty"`
	// The end number of days for this Aging bucket. Example: For the range 31-60 days, this would be 60.
	AgingEndDay *int32 `json:"agingEndDay,omitempty"`
	// The start number of days for this Aging bucket. Example: For the range 31-60 days, this would be 31.
	AgingStartDay *int32 `json:"agingStartDay,omitempty"`
	BalanceInfo *ARBalanceType `json:"balanceInfo,omitempty"`
	// The sequence for display.
	Sequence *int32 `json:"sequence,omitempty"`
}

// NewARAgingType instantiates a new ARAgingType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewARAgingType() *ARAgingType {
	this := ARAgingType{}
	return &this
}

// NewARAgingTypeWithDefaults instantiates a new ARAgingType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewARAgingTypeWithDefaults() *ARAgingType {
	this := ARAgingType{}
	return &this
}

// GetAgingBucketRange returns the AgingBucketRange field value if set, zero value otherwise.
func (o *ARAgingType) GetAgingBucketRange() string {
	if o == nil || IsNil(o.AgingBucketRange) {
		var ret string
		return ret
	}
	return *o.AgingBucketRange
}

// GetAgingBucketRangeOk returns a tuple with the AgingBucketRange field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ARAgingType) GetAgingBucketRangeOk() (*string, bool) {
	if o == nil || IsNil(o.AgingBucketRange) {
		return nil, false
	}
	return o.AgingBucketRange, true
}

// HasAgingBucketRange returns a boolean if a field has been set.
func (o *ARAgingType) HasAgingBucketRange() bool {
	if o != nil && !IsNil(o.AgingBucketRange) {
		return true
	}

	return false
}

// SetAgingBucketRange gets a reference to the given string and assigns it to the AgingBucketRange field.
func (o *ARAgingType) SetAgingBucketRange(v string) {
	o.AgingBucketRange = &v
}

// GetAgingDate returns the AgingDate field value if set, zero value otherwise.
func (o *ARAgingType) GetAgingDate() DateRangeType {
	if o == nil || IsNil(o.AgingDate) {
		var ret DateRangeType
		return ret
	}
	return *o.AgingDate
}

// GetAgingDateOk returns a tuple with the AgingDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ARAgingType) GetAgingDateOk() (*DateRangeType, bool) {
	if o == nil || IsNil(o.AgingDate) {
		return nil, false
	}
	return o.AgingDate, true
}

// HasAgingDate returns a boolean if a field has been set.
func (o *ARAgingType) HasAgingDate() bool {
	if o != nil && !IsNil(o.AgingDate) {
		return true
	}

	return false
}

// SetAgingDate gets a reference to the given DateRangeType and assigns it to the AgingDate field.
func (o *ARAgingType) SetAgingDate(v DateRangeType) {
	o.AgingDate = &v
}

// GetAgingEndDay returns the AgingEndDay field value if set, zero value otherwise.
func (o *ARAgingType) GetAgingEndDay() int32 {
	if o == nil || IsNil(o.AgingEndDay) {
		var ret int32
		return ret
	}
	return *o.AgingEndDay
}

// GetAgingEndDayOk returns a tuple with the AgingEndDay field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ARAgingType) GetAgingEndDayOk() (*int32, bool) {
	if o == nil || IsNil(o.AgingEndDay) {
		return nil, false
	}
	return o.AgingEndDay, true
}

// HasAgingEndDay returns a boolean if a field has been set.
func (o *ARAgingType) HasAgingEndDay() bool {
	if o != nil && !IsNil(o.AgingEndDay) {
		return true
	}

	return false
}

// SetAgingEndDay gets a reference to the given int32 and assigns it to the AgingEndDay field.
func (o *ARAgingType) SetAgingEndDay(v int32) {
	o.AgingEndDay = &v
}

// GetAgingStartDay returns the AgingStartDay field value if set, zero value otherwise.
func (o *ARAgingType) GetAgingStartDay() int32 {
	if o == nil || IsNil(o.AgingStartDay) {
		var ret int32
		return ret
	}
	return *o.AgingStartDay
}

// GetAgingStartDayOk returns a tuple with the AgingStartDay field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ARAgingType) GetAgingStartDayOk() (*int32, bool) {
	if o == nil || IsNil(o.AgingStartDay) {
		return nil, false
	}
	return o.AgingStartDay, true
}

// HasAgingStartDay returns a boolean if a field has been set.
func (o *ARAgingType) HasAgingStartDay() bool {
	if o != nil && !IsNil(o.AgingStartDay) {
		return true
	}

	return false
}

// SetAgingStartDay gets a reference to the given int32 and assigns it to the AgingStartDay field.
func (o *ARAgingType) SetAgingStartDay(v int32) {
	o.AgingStartDay = &v
}

// GetBalanceInfo returns the BalanceInfo field value if set, zero value otherwise.
func (o *ARAgingType) GetBalanceInfo() ARBalanceType {
	if o == nil || IsNil(o.BalanceInfo) {
		var ret ARBalanceType
		return ret
	}
	return *o.BalanceInfo
}

// GetBalanceInfoOk returns a tuple with the BalanceInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ARAgingType) GetBalanceInfoOk() (*ARBalanceType, bool) {
	if o == nil || IsNil(o.BalanceInfo) {
		return nil, false
	}
	return o.BalanceInfo, true
}

// HasBalanceInfo returns a boolean if a field has been set.
func (o *ARAgingType) HasBalanceInfo() bool {
	if o != nil && !IsNil(o.BalanceInfo) {
		return true
	}

	return false
}

// SetBalanceInfo gets a reference to the given ARBalanceType and assigns it to the BalanceInfo field.
func (o *ARAgingType) SetBalanceInfo(v ARBalanceType) {
	o.BalanceInfo = &v
}

// GetSequence returns the Sequence field value if set, zero value otherwise.
func (o *ARAgingType) GetSequence() int32 {
	if o == nil || IsNil(o.Sequence) {
		var ret int32
		return ret
	}
	return *o.Sequence
}

// GetSequenceOk returns a tuple with the Sequence field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ARAgingType) GetSequenceOk() (*int32, bool) {
	if o == nil || IsNil(o.Sequence) {
		return nil, false
	}
	return o.Sequence, true
}

// HasSequence returns a boolean if a field has been set.
func (o *ARAgingType) HasSequence() bool {
	if o != nil && !IsNil(o.Sequence) {
		return true
	}

	return false
}

// SetSequence gets a reference to the given int32 and assigns it to the Sequence field.
func (o *ARAgingType) SetSequence(v int32) {
	o.Sequence = &v
}

func (o ARAgingType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ARAgingType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AgingBucketRange) {
		toSerialize["agingBucketRange"] = o.AgingBucketRange
	}
	if !IsNil(o.AgingDate) {
		toSerialize["agingDate"] = o.AgingDate
	}
	if !IsNil(o.AgingEndDay) {
		toSerialize["agingEndDay"] = o.AgingEndDay
	}
	if !IsNil(o.AgingStartDay) {
		toSerialize["agingStartDay"] = o.AgingStartDay
	}
	if !IsNil(o.BalanceInfo) {
		toSerialize["balanceInfo"] = o.BalanceInfo
	}
	if !IsNil(o.Sequence) {
		toSerialize["sequence"] = o.Sequence
	}
	return toSerialize, nil
}

type NullableARAgingType struct {
	value *ARAgingType
	isSet bool
}

func (v NullableARAgingType) Get() *ARAgingType {
	return v.value
}

func (v *NullableARAgingType) Set(val *ARAgingType) {
	v.value = val
	v.isSet = true
}

func (v NullableARAgingType) IsSet() bool {
	return v.isSet
}

func (v *NullableARAgingType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableARAgingType(val *ARAgingType) *NullableARAgingType {
	return &NullableARAgingType{value: val, isSet: true}
}

func (v NullableARAgingType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableARAgingType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


