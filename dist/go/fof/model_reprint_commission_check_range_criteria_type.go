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

// checks if the ReprintCommissionCheckRangeCriteriaType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ReprintCommissionCheckRangeCriteriaType{}

// ReprintCommissionCheckRangeCriteriaType Base type for payment activity information
type ReprintCommissionCheckRangeCriteriaType struct {
	// Set to true if an existing check number can be used as the starting check number for reprint.
	AllowExistingCheckNo *bool `json:"allowExistingCheckNo,omitempty"`
	BankAccountId *UniqueIDType `json:"bankAccountId,omitempty"`
	BatchId *UniqueIDType `json:"batchId,omitempty"`
	CheckRange *NumberRangeType `json:"checkRange,omitempty"`
	// Property of the commission record.
	HotelId *string `json:"hotelId,omitempty"`
	// Start check no of commission to be applied to the set.
	StartCheckNo *float32 `json:"startCheckNo,omitempty"`
}

// NewReprintCommissionCheckRangeCriteriaType instantiates a new ReprintCommissionCheckRangeCriteriaType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewReprintCommissionCheckRangeCriteriaType() *ReprintCommissionCheckRangeCriteriaType {
	this := ReprintCommissionCheckRangeCriteriaType{}
	return &this
}

// NewReprintCommissionCheckRangeCriteriaTypeWithDefaults instantiates a new ReprintCommissionCheckRangeCriteriaType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewReprintCommissionCheckRangeCriteriaTypeWithDefaults() *ReprintCommissionCheckRangeCriteriaType {
	this := ReprintCommissionCheckRangeCriteriaType{}
	return &this
}

// GetAllowExistingCheckNo returns the AllowExistingCheckNo field value if set, zero value otherwise.
func (o *ReprintCommissionCheckRangeCriteriaType) GetAllowExistingCheckNo() bool {
	if o == nil || IsNil(o.AllowExistingCheckNo) {
		var ret bool
		return ret
	}
	return *o.AllowExistingCheckNo
}

// GetAllowExistingCheckNoOk returns a tuple with the AllowExistingCheckNo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReprintCommissionCheckRangeCriteriaType) GetAllowExistingCheckNoOk() (*bool, bool) {
	if o == nil || IsNil(o.AllowExistingCheckNo) {
		return nil, false
	}
	return o.AllowExistingCheckNo, true
}

// HasAllowExistingCheckNo returns a boolean if a field has been set.
func (o *ReprintCommissionCheckRangeCriteriaType) HasAllowExistingCheckNo() bool {
	if o != nil && !IsNil(o.AllowExistingCheckNo) {
		return true
	}

	return false
}

// SetAllowExistingCheckNo gets a reference to the given bool and assigns it to the AllowExistingCheckNo field.
func (o *ReprintCommissionCheckRangeCriteriaType) SetAllowExistingCheckNo(v bool) {
	o.AllowExistingCheckNo = &v
}

// GetBankAccountId returns the BankAccountId field value if set, zero value otherwise.
func (o *ReprintCommissionCheckRangeCriteriaType) GetBankAccountId() UniqueIDType {
	if o == nil || IsNil(o.BankAccountId) {
		var ret UniqueIDType
		return ret
	}
	return *o.BankAccountId
}

// GetBankAccountIdOk returns a tuple with the BankAccountId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReprintCommissionCheckRangeCriteriaType) GetBankAccountIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.BankAccountId) {
		return nil, false
	}
	return o.BankAccountId, true
}

// HasBankAccountId returns a boolean if a field has been set.
func (o *ReprintCommissionCheckRangeCriteriaType) HasBankAccountId() bool {
	if o != nil && !IsNil(o.BankAccountId) {
		return true
	}

	return false
}

// SetBankAccountId gets a reference to the given UniqueIDType and assigns it to the BankAccountId field.
func (o *ReprintCommissionCheckRangeCriteriaType) SetBankAccountId(v UniqueIDType) {
	o.BankAccountId = &v
}

// GetBatchId returns the BatchId field value if set, zero value otherwise.
func (o *ReprintCommissionCheckRangeCriteriaType) GetBatchId() UniqueIDType {
	if o == nil || IsNil(o.BatchId) {
		var ret UniqueIDType
		return ret
	}
	return *o.BatchId
}

// GetBatchIdOk returns a tuple with the BatchId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReprintCommissionCheckRangeCriteriaType) GetBatchIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.BatchId) {
		return nil, false
	}
	return o.BatchId, true
}

// HasBatchId returns a boolean if a field has been set.
func (o *ReprintCommissionCheckRangeCriteriaType) HasBatchId() bool {
	if o != nil && !IsNil(o.BatchId) {
		return true
	}

	return false
}

// SetBatchId gets a reference to the given UniqueIDType and assigns it to the BatchId field.
func (o *ReprintCommissionCheckRangeCriteriaType) SetBatchId(v UniqueIDType) {
	o.BatchId = &v
}

// GetCheckRange returns the CheckRange field value if set, zero value otherwise.
func (o *ReprintCommissionCheckRangeCriteriaType) GetCheckRange() NumberRangeType {
	if o == nil || IsNil(o.CheckRange) {
		var ret NumberRangeType
		return ret
	}
	return *o.CheckRange
}

// GetCheckRangeOk returns a tuple with the CheckRange field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReprintCommissionCheckRangeCriteriaType) GetCheckRangeOk() (*NumberRangeType, bool) {
	if o == nil || IsNil(o.CheckRange) {
		return nil, false
	}
	return o.CheckRange, true
}

// HasCheckRange returns a boolean if a field has been set.
func (o *ReprintCommissionCheckRangeCriteriaType) HasCheckRange() bool {
	if o != nil && !IsNil(o.CheckRange) {
		return true
	}

	return false
}

// SetCheckRange gets a reference to the given NumberRangeType and assigns it to the CheckRange field.
func (o *ReprintCommissionCheckRangeCriteriaType) SetCheckRange(v NumberRangeType) {
	o.CheckRange = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *ReprintCommissionCheckRangeCriteriaType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReprintCommissionCheckRangeCriteriaType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *ReprintCommissionCheckRangeCriteriaType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *ReprintCommissionCheckRangeCriteriaType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetStartCheckNo returns the StartCheckNo field value if set, zero value otherwise.
func (o *ReprintCommissionCheckRangeCriteriaType) GetStartCheckNo() float32 {
	if o == nil || IsNil(o.StartCheckNo) {
		var ret float32
		return ret
	}
	return *o.StartCheckNo
}

// GetStartCheckNoOk returns a tuple with the StartCheckNo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReprintCommissionCheckRangeCriteriaType) GetStartCheckNoOk() (*float32, bool) {
	if o == nil || IsNil(o.StartCheckNo) {
		return nil, false
	}
	return o.StartCheckNo, true
}

// HasStartCheckNo returns a boolean if a field has been set.
func (o *ReprintCommissionCheckRangeCriteriaType) HasStartCheckNo() bool {
	if o != nil && !IsNil(o.StartCheckNo) {
		return true
	}

	return false
}

// SetStartCheckNo gets a reference to the given float32 and assigns it to the StartCheckNo field.
func (o *ReprintCommissionCheckRangeCriteriaType) SetStartCheckNo(v float32) {
	o.StartCheckNo = &v
}

func (o ReprintCommissionCheckRangeCriteriaType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ReprintCommissionCheckRangeCriteriaType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AllowExistingCheckNo) {
		toSerialize["allowExistingCheckNo"] = o.AllowExistingCheckNo
	}
	if !IsNil(o.BankAccountId) {
		toSerialize["bankAccountId"] = o.BankAccountId
	}
	if !IsNil(o.BatchId) {
		toSerialize["batchId"] = o.BatchId
	}
	if !IsNil(o.CheckRange) {
		toSerialize["checkRange"] = o.CheckRange
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.StartCheckNo) {
		toSerialize["startCheckNo"] = o.StartCheckNo
	}
	return toSerialize, nil
}

type NullableReprintCommissionCheckRangeCriteriaType struct {
	value *ReprintCommissionCheckRangeCriteriaType
	isSet bool
}

func (v NullableReprintCommissionCheckRangeCriteriaType) Get() *ReprintCommissionCheckRangeCriteriaType {
	return v.value
}

func (v *NullableReprintCommissionCheckRangeCriteriaType) Set(val *ReprintCommissionCheckRangeCriteriaType) {
	v.value = val
	v.isSet = true
}

func (v NullableReprintCommissionCheckRangeCriteriaType) IsSet() bool {
	return v.isSet
}

func (v *NullableReprintCommissionCheckRangeCriteriaType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableReprintCommissionCheckRangeCriteriaType(val *ReprintCommissionCheckRangeCriteriaType) *NullableReprintCommissionCheckRangeCriteriaType {
	return &NullableReprintCommissionCheckRangeCriteriaType{value: val, isSet: true}
}

func (v NullableReprintCommissionCheckRangeCriteriaType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableReprintCommissionCheckRangeCriteriaType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


