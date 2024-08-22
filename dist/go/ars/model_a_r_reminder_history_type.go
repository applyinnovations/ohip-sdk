/*
OPERA Cloud Accounts Receivables API

APIs to cater for Accounts Receivables functionality in OPERA Cloud. <br /><br The OPERA Cloud Accounts Receivable module enables you to manage debtors' accounts, invoices, and remittance.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package ars

import (
	"encoding/json"
)

// checks if the ARReminderHistoryType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ARReminderHistoryType{}

// ARReminderHistoryType Report History Type used as based type for Remiders and Statements History types.
type ARReminderHistoryType struct {
	// The minimum age(days) of the invoices to be included in the Reminder
	Age *int32 `json:"age,omitempty"`
	// The Reminder Letter name which is to be used for this Reminder based on the setup on the Account Type.
	DateSent *string `json:"dateSent,omitempty"`
	// Report file name when exists to allow report re-printing.
	ReportFileName *string `json:"reportFileName,omitempty"`
	// Report Name.
	ReportName *string `json:"reportName,omitempty"`
}

// NewARReminderHistoryType instantiates a new ARReminderHistoryType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewARReminderHistoryType() *ARReminderHistoryType {
	this := ARReminderHistoryType{}
	return &this
}

// NewARReminderHistoryTypeWithDefaults instantiates a new ARReminderHistoryType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewARReminderHistoryTypeWithDefaults() *ARReminderHistoryType {
	this := ARReminderHistoryType{}
	return &this
}

// GetAge returns the Age field value if set, zero value otherwise.
func (o *ARReminderHistoryType) GetAge() int32 {
	if o == nil || IsNil(o.Age) {
		var ret int32
		return ret
	}
	return *o.Age
}

// GetAgeOk returns a tuple with the Age field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ARReminderHistoryType) GetAgeOk() (*int32, bool) {
	if o == nil || IsNil(o.Age) {
		return nil, false
	}
	return o.Age, true
}

// HasAge returns a boolean if a field has been set.
func (o *ARReminderHistoryType) HasAge() bool {
	if o != nil && !IsNil(o.Age) {
		return true
	}

	return false
}

// SetAge gets a reference to the given int32 and assigns it to the Age field.
func (o *ARReminderHistoryType) SetAge(v int32) {
	o.Age = &v
}

// GetDateSent returns the DateSent field value if set, zero value otherwise.
func (o *ARReminderHistoryType) GetDateSent() string {
	if o == nil || IsNil(o.DateSent) {
		var ret string
		return ret
	}
	return *o.DateSent
}

// GetDateSentOk returns a tuple with the DateSent field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ARReminderHistoryType) GetDateSentOk() (*string, bool) {
	if o == nil || IsNil(o.DateSent) {
		return nil, false
	}
	return o.DateSent, true
}

// HasDateSent returns a boolean if a field has been set.
func (o *ARReminderHistoryType) HasDateSent() bool {
	if o != nil && !IsNil(o.DateSent) {
		return true
	}

	return false
}

// SetDateSent gets a reference to the given string and assigns it to the DateSent field.
func (o *ARReminderHistoryType) SetDateSent(v string) {
	o.DateSent = &v
}

// GetReportFileName returns the ReportFileName field value if set, zero value otherwise.
func (o *ARReminderHistoryType) GetReportFileName() string {
	if o == nil || IsNil(o.ReportFileName) {
		var ret string
		return ret
	}
	return *o.ReportFileName
}

// GetReportFileNameOk returns a tuple with the ReportFileName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ARReminderHistoryType) GetReportFileNameOk() (*string, bool) {
	if o == nil || IsNil(o.ReportFileName) {
		return nil, false
	}
	return o.ReportFileName, true
}

// HasReportFileName returns a boolean if a field has been set.
func (o *ARReminderHistoryType) HasReportFileName() bool {
	if o != nil && !IsNil(o.ReportFileName) {
		return true
	}

	return false
}

// SetReportFileName gets a reference to the given string and assigns it to the ReportFileName field.
func (o *ARReminderHistoryType) SetReportFileName(v string) {
	o.ReportFileName = &v
}

// GetReportName returns the ReportName field value if set, zero value otherwise.
func (o *ARReminderHistoryType) GetReportName() string {
	if o == nil || IsNil(o.ReportName) {
		var ret string
		return ret
	}
	return *o.ReportName
}

// GetReportNameOk returns a tuple with the ReportName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ARReminderHistoryType) GetReportNameOk() (*string, bool) {
	if o == nil || IsNil(o.ReportName) {
		return nil, false
	}
	return o.ReportName, true
}

// HasReportName returns a boolean if a field has been set.
func (o *ARReminderHistoryType) HasReportName() bool {
	if o != nil && !IsNil(o.ReportName) {
		return true
	}

	return false
}

// SetReportName gets a reference to the given string and assigns it to the ReportName field.
func (o *ARReminderHistoryType) SetReportName(v string) {
	o.ReportName = &v
}

func (o ARReminderHistoryType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ARReminderHistoryType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Age) {
		toSerialize["age"] = o.Age
	}
	if !IsNil(o.DateSent) {
		toSerialize["dateSent"] = o.DateSent
	}
	if !IsNil(o.ReportFileName) {
		toSerialize["reportFileName"] = o.ReportFileName
	}
	if !IsNil(o.ReportName) {
		toSerialize["reportName"] = o.ReportName
	}
	return toSerialize, nil
}

type NullableARReminderHistoryType struct {
	value *ARReminderHistoryType
	isSet bool
}

func (v NullableARReminderHistoryType) Get() *ARReminderHistoryType {
	return v.value
}

func (v *NullableARReminderHistoryType) Set(val *ARReminderHistoryType) {
	v.value = val
	v.isSet = true
}

func (v NullableARReminderHistoryType) IsSet() bool {
	return v.isSet
}

func (v *NullableARReminderHistoryType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableARReminderHistoryType(val *ARReminderHistoryType) *NullableARReminderHistoryType {
	return &NullableARReminderHistoryType{value: val, isSet: true}
}

func (v NullableARReminderHistoryType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableARReminderHistoryType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


