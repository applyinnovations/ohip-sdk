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

// checks if the TransactionDiversionDailyDetailType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TransactionDiversionDailyDetailType{}

// TransactionDiversionDailyDetailType List of daily details for Transaction Diversion rule.
type TransactionDiversionDailyDetailType struct {
	// Daily details Date about when the rules are posted or diverted.
	Date *string `json:"date,omitempty"`
	// Transaction diversion rules that are diverted .
	Diverted *int32 `json:"diverted,omitempty"`
	// Transaction diversion rules that are posted.
	Posted *int32 `json:"posted,omitempty"`
}

// NewTransactionDiversionDailyDetailType instantiates a new TransactionDiversionDailyDetailType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTransactionDiversionDailyDetailType() *TransactionDiversionDailyDetailType {
	this := TransactionDiversionDailyDetailType{}
	return &this
}

// NewTransactionDiversionDailyDetailTypeWithDefaults instantiates a new TransactionDiversionDailyDetailType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTransactionDiversionDailyDetailTypeWithDefaults() *TransactionDiversionDailyDetailType {
	this := TransactionDiversionDailyDetailType{}
	return &this
}

// GetDate returns the Date field value if set, zero value otherwise.
func (o *TransactionDiversionDailyDetailType) GetDate() string {
	if o == nil || IsNil(o.Date) {
		var ret string
		return ret
	}
	return *o.Date
}

// GetDateOk returns a tuple with the Date field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TransactionDiversionDailyDetailType) GetDateOk() (*string, bool) {
	if o == nil || IsNil(o.Date) {
		return nil, false
	}
	return o.Date, true
}

// HasDate returns a boolean if a field has been set.
func (o *TransactionDiversionDailyDetailType) HasDate() bool {
	if o != nil && !IsNil(o.Date) {
		return true
	}

	return false
}

// SetDate gets a reference to the given string and assigns it to the Date field.
func (o *TransactionDiversionDailyDetailType) SetDate(v string) {
	o.Date = &v
}

// GetDiverted returns the Diverted field value if set, zero value otherwise.
func (o *TransactionDiversionDailyDetailType) GetDiverted() int32 {
	if o == nil || IsNil(o.Diverted) {
		var ret int32
		return ret
	}
	return *o.Diverted
}

// GetDivertedOk returns a tuple with the Diverted field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TransactionDiversionDailyDetailType) GetDivertedOk() (*int32, bool) {
	if o == nil || IsNil(o.Diverted) {
		return nil, false
	}
	return o.Diverted, true
}

// HasDiverted returns a boolean if a field has been set.
func (o *TransactionDiversionDailyDetailType) HasDiverted() bool {
	if o != nil && !IsNil(o.Diverted) {
		return true
	}

	return false
}

// SetDiverted gets a reference to the given int32 and assigns it to the Diverted field.
func (o *TransactionDiversionDailyDetailType) SetDiverted(v int32) {
	o.Diverted = &v
}

// GetPosted returns the Posted field value if set, zero value otherwise.
func (o *TransactionDiversionDailyDetailType) GetPosted() int32 {
	if o == nil || IsNil(o.Posted) {
		var ret int32
		return ret
	}
	return *o.Posted
}

// GetPostedOk returns a tuple with the Posted field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TransactionDiversionDailyDetailType) GetPostedOk() (*int32, bool) {
	if o == nil || IsNil(o.Posted) {
		return nil, false
	}
	return o.Posted, true
}

// HasPosted returns a boolean if a field has been set.
func (o *TransactionDiversionDailyDetailType) HasPosted() bool {
	if o != nil && !IsNil(o.Posted) {
		return true
	}

	return false
}

// SetPosted gets a reference to the given int32 and assigns it to the Posted field.
func (o *TransactionDiversionDailyDetailType) SetPosted(v int32) {
	o.Posted = &v
}

func (o TransactionDiversionDailyDetailType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TransactionDiversionDailyDetailType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Date) {
		toSerialize["date"] = o.Date
	}
	if !IsNil(o.Diverted) {
		toSerialize["diverted"] = o.Diverted
	}
	if !IsNil(o.Posted) {
		toSerialize["posted"] = o.Posted
	}
	return toSerialize, nil
}

type NullableTransactionDiversionDailyDetailType struct {
	value *TransactionDiversionDailyDetailType
	isSet bool
}

func (v NullableTransactionDiversionDailyDetailType) Get() *TransactionDiversionDailyDetailType {
	return v.value
}

func (v *NullableTransactionDiversionDailyDetailType) Set(val *TransactionDiversionDailyDetailType) {
	v.value = val
	v.isSet = true
}

func (v NullableTransactionDiversionDailyDetailType) IsSet() bool {
	return v.isSet
}

func (v *NullableTransactionDiversionDailyDetailType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTransactionDiversionDailyDetailType(val *TransactionDiversionDailyDetailType) *NullableTransactionDiversionDailyDetailType {
	return &NullableTransactionDiversionDailyDetailType{value: val, isSet: true}
}

func (v NullableTransactionDiversionDailyDetailType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTransactionDiversionDailyDetailType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


