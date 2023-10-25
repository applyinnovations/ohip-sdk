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

// checks if the CCBatchSettlementsProcessType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CCBatchSettlementsProcessType{}

// CCBatchSettlementsProcessType Type for starting settlements job process.
type CCBatchSettlementsProcessType struct {
	// Batch Id for identify status of job.
	BatchId *string `json:"batchId,omitempty"`
	// Hotel code of the reservation.
	HotelId *string `json:"hotelId,omitempty"`
	// Unique Id that references an object uniquely in the system.
	SettlementIdList []UniqueIDType `json:"settlementIdList,omitempty"`
}

// NewCCBatchSettlementsProcessType instantiates a new CCBatchSettlementsProcessType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCCBatchSettlementsProcessType() *CCBatchSettlementsProcessType {
	this := CCBatchSettlementsProcessType{}
	return &this
}

// NewCCBatchSettlementsProcessTypeWithDefaults instantiates a new CCBatchSettlementsProcessType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCCBatchSettlementsProcessTypeWithDefaults() *CCBatchSettlementsProcessType {
	this := CCBatchSettlementsProcessType{}
	return &this
}

// GetBatchId returns the BatchId field value if set, zero value otherwise.
func (o *CCBatchSettlementsProcessType) GetBatchId() string {
	if o == nil || IsNil(o.BatchId) {
		var ret string
		return ret
	}
	return *o.BatchId
}

// GetBatchIdOk returns a tuple with the BatchId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CCBatchSettlementsProcessType) GetBatchIdOk() (*string, bool) {
	if o == nil || IsNil(o.BatchId) {
		return nil, false
	}
	return o.BatchId, true
}

// HasBatchId returns a boolean if a field has been set.
func (o *CCBatchSettlementsProcessType) HasBatchId() bool {
	if o != nil && !IsNil(o.BatchId) {
		return true
	}

	return false
}

// SetBatchId gets a reference to the given string and assigns it to the BatchId field.
func (o *CCBatchSettlementsProcessType) SetBatchId(v string) {
	o.BatchId = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *CCBatchSettlementsProcessType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CCBatchSettlementsProcessType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *CCBatchSettlementsProcessType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *CCBatchSettlementsProcessType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetSettlementIdList returns the SettlementIdList field value if set, zero value otherwise.
func (o *CCBatchSettlementsProcessType) GetSettlementIdList() []UniqueIDType {
	if o == nil || IsNil(o.SettlementIdList) {
		var ret []UniqueIDType
		return ret
	}
	return o.SettlementIdList
}

// GetSettlementIdListOk returns a tuple with the SettlementIdList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CCBatchSettlementsProcessType) GetSettlementIdListOk() ([]UniqueIDType, bool) {
	if o == nil || IsNil(o.SettlementIdList) {
		return nil, false
	}
	return o.SettlementIdList, true
}

// HasSettlementIdList returns a boolean if a field has been set.
func (o *CCBatchSettlementsProcessType) HasSettlementIdList() bool {
	if o != nil && !IsNil(o.SettlementIdList) {
		return true
	}

	return false
}

// SetSettlementIdList gets a reference to the given []UniqueIDType and assigns it to the SettlementIdList field.
func (o *CCBatchSettlementsProcessType) SetSettlementIdList(v []UniqueIDType) {
	o.SettlementIdList = v
}

func (o CCBatchSettlementsProcessType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CCBatchSettlementsProcessType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BatchId) {
		toSerialize["batchId"] = o.BatchId
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.SettlementIdList) {
		toSerialize["settlementIdList"] = o.SettlementIdList
	}
	return toSerialize, nil
}

type NullableCCBatchSettlementsProcessType struct {
	value *CCBatchSettlementsProcessType
	isSet bool
}

func (v NullableCCBatchSettlementsProcessType) Get() *CCBatchSettlementsProcessType {
	return v.value
}

func (v *NullableCCBatchSettlementsProcessType) Set(val *CCBatchSettlementsProcessType) {
	v.value = val
	v.isSet = true
}

func (v NullableCCBatchSettlementsProcessType) IsSet() bool {
	return v.isSet
}

func (v *NullableCCBatchSettlementsProcessType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCCBatchSettlementsProcessType(val *CCBatchSettlementsProcessType) *NullableCCBatchSettlementsProcessType {
	return &NullableCCBatchSettlementsProcessType{value: val, isSet: true}
}

func (v NullableCCBatchSettlementsProcessType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCCBatchSettlementsProcessType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


