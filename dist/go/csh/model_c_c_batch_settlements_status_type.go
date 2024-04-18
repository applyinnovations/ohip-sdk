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

// checks if the CCBatchSettlementsStatusType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CCBatchSettlementsStatusType{}

// CCBatchSettlementsStatusType List of CCBatchSettlementStatusType type
type CCBatchSettlementsStatusType struct {
	// Batch Id for identify status of job.
	BatchId *string `json:"batchId,omitempty"`
	CCBatchSettlementsStatus []CCBatchSettlementStatusType `json:"cCBatchSettlementsStatus,omitempty"`
	// Hotel Code
	HotelId *string `json:"hotelId,omitempty"`
}

// NewCCBatchSettlementsStatusType instantiates a new CCBatchSettlementsStatusType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCCBatchSettlementsStatusType() *CCBatchSettlementsStatusType {
	this := CCBatchSettlementsStatusType{}
	return &this
}

// NewCCBatchSettlementsStatusTypeWithDefaults instantiates a new CCBatchSettlementsStatusType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCCBatchSettlementsStatusTypeWithDefaults() *CCBatchSettlementsStatusType {
	this := CCBatchSettlementsStatusType{}
	return &this
}

// GetBatchId returns the BatchId field value if set, zero value otherwise.
func (o *CCBatchSettlementsStatusType) GetBatchId() string {
	if o == nil || IsNil(o.BatchId) {
		var ret string
		return ret
	}
	return *o.BatchId
}

// GetBatchIdOk returns a tuple with the BatchId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CCBatchSettlementsStatusType) GetBatchIdOk() (*string, bool) {
	if o == nil || IsNil(o.BatchId) {
		return nil, false
	}
	return o.BatchId, true
}

// HasBatchId returns a boolean if a field has been set.
func (o *CCBatchSettlementsStatusType) HasBatchId() bool {
	if o != nil && !IsNil(o.BatchId) {
		return true
	}

	return false
}

// SetBatchId gets a reference to the given string and assigns it to the BatchId field.
func (o *CCBatchSettlementsStatusType) SetBatchId(v string) {
	o.BatchId = &v
}

// GetCCBatchSettlementsStatus returns the CCBatchSettlementsStatus field value if set, zero value otherwise.
func (o *CCBatchSettlementsStatusType) GetCCBatchSettlementsStatus() []CCBatchSettlementStatusType {
	if o == nil || IsNil(o.CCBatchSettlementsStatus) {
		var ret []CCBatchSettlementStatusType
		return ret
	}
	return o.CCBatchSettlementsStatus
}

// GetCCBatchSettlementsStatusOk returns a tuple with the CCBatchSettlementsStatus field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CCBatchSettlementsStatusType) GetCCBatchSettlementsStatusOk() ([]CCBatchSettlementStatusType, bool) {
	if o == nil || IsNil(o.CCBatchSettlementsStatus) {
		return nil, false
	}
	return o.CCBatchSettlementsStatus, true
}

// HasCCBatchSettlementsStatus returns a boolean if a field has been set.
func (o *CCBatchSettlementsStatusType) HasCCBatchSettlementsStatus() bool {
	if o != nil && !IsNil(o.CCBatchSettlementsStatus) {
		return true
	}

	return false
}

// SetCCBatchSettlementsStatus gets a reference to the given []CCBatchSettlementStatusType and assigns it to the CCBatchSettlementsStatus field.
func (o *CCBatchSettlementsStatusType) SetCCBatchSettlementsStatus(v []CCBatchSettlementStatusType) {
	o.CCBatchSettlementsStatus = v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *CCBatchSettlementsStatusType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CCBatchSettlementsStatusType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *CCBatchSettlementsStatusType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *CCBatchSettlementsStatusType) SetHotelId(v string) {
	o.HotelId = &v
}

func (o CCBatchSettlementsStatusType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CCBatchSettlementsStatusType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BatchId) {
		toSerialize["batchId"] = o.BatchId
	}
	if !IsNil(o.CCBatchSettlementsStatus) {
		toSerialize["cCBatchSettlementsStatus"] = o.CCBatchSettlementsStatus
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	return toSerialize, nil
}

type NullableCCBatchSettlementsStatusType struct {
	value *CCBatchSettlementsStatusType
	isSet bool
}

func (v NullableCCBatchSettlementsStatusType) Get() *CCBatchSettlementsStatusType {
	return v.value
}

func (v *NullableCCBatchSettlementsStatusType) Set(val *CCBatchSettlementsStatusType) {
	v.value = val
	v.isSet = true
}

func (v NullableCCBatchSettlementsStatusType) IsSet() bool {
	return v.isSet
}

func (v *NullableCCBatchSettlementsStatusType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCCBatchSettlementsStatusType(val *CCBatchSettlementsStatusType) *NullableCCBatchSettlementsStatusType {
	return &NullableCCBatchSettlementsStatusType{value: val, isSet: true}
}

func (v NullableCCBatchSettlementsStatusType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCCBatchSettlementsStatusType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

