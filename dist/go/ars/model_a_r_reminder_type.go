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

// checks if the ARReminderType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ARReminderType{}

// ARReminderType AR Reminder Information Type.
type ARReminderType struct {
	AccountId *UniqueIDType `json:"accountId,omitempty"`
	// The minimum age(days) of the invoices to be included in the Reminder
	Age *int32 `json:"age,omitempty"`
	// Reminder summary currency code.
	CurrencyCode *string `json:"currencyCode,omitempty"`
	// The current Reminder Cycle number for this reminder. This would be available when Simple Reminder functionality is ON.
	Cycle *int32 `json:"cycle,omitempty"`
	CycleUsed *ReminderCycleType `json:"cycleUsed,omitempty"`
	// Property where the Account belongs.
	HotelId *string `json:"hotelId,omitempty"`
	// A collection of AR Invoices.
	Invoices []ARInvoiceType `json:"invoices,omitempty"`
	// Indicates that reminders history exists.
	IsHistoryExists *bool `json:"isHistoryExists,omitempty"`
	// The Last Reminder Cycle used for this Account. This would be available when Simple Reminder functionality is ON.
	LastCycle *int32 `json:"lastCycle,omitempty"`
	// The date of the Last Reminder Sent.
	LastReminderSent *string `json:"lastReminderSent,omitempty"`
	// The Reminder Letter name which is to be used for this Reminder based on the setup on the Account Type.
	LetterName *string `json:"letterName,omitempty"`
	// The maximum Age(days) of the invoices in the Reminder. This would be available when Simple Reminder functionality is OFF.
	MaxAge *int32 `json:"maxAge,omitempty"`
	// The Reminder report file name Letter name which is to be used for reprint.
	ReportFileName *string `json:"reportFileName,omitempty"`
}

// NewARReminderType instantiates a new ARReminderType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewARReminderType() *ARReminderType {
	this := ARReminderType{}
	return &this
}

// NewARReminderTypeWithDefaults instantiates a new ARReminderType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewARReminderTypeWithDefaults() *ARReminderType {
	this := ARReminderType{}
	return &this
}

// GetAccountId returns the AccountId field value if set, zero value otherwise.
func (o *ARReminderType) GetAccountId() UniqueIDType {
	if o == nil || IsNil(o.AccountId) {
		var ret UniqueIDType
		return ret
	}
	return *o.AccountId
}

// GetAccountIdOk returns a tuple with the AccountId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ARReminderType) GetAccountIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.AccountId) {
		return nil, false
	}
	return o.AccountId, true
}

// HasAccountId returns a boolean if a field has been set.
func (o *ARReminderType) HasAccountId() bool {
	if o != nil && !IsNil(o.AccountId) {
		return true
	}

	return false
}

// SetAccountId gets a reference to the given UniqueIDType and assigns it to the AccountId field.
func (o *ARReminderType) SetAccountId(v UniqueIDType) {
	o.AccountId = &v
}

// GetAge returns the Age field value if set, zero value otherwise.
func (o *ARReminderType) GetAge() int32 {
	if o == nil || IsNil(o.Age) {
		var ret int32
		return ret
	}
	return *o.Age
}

// GetAgeOk returns a tuple with the Age field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ARReminderType) GetAgeOk() (*int32, bool) {
	if o == nil || IsNil(o.Age) {
		return nil, false
	}
	return o.Age, true
}

// HasAge returns a boolean if a field has been set.
func (o *ARReminderType) HasAge() bool {
	if o != nil && !IsNil(o.Age) {
		return true
	}

	return false
}

// SetAge gets a reference to the given int32 and assigns it to the Age field.
func (o *ARReminderType) SetAge(v int32) {
	o.Age = &v
}

// GetCurrencyCode returns the CurrencyCode field value if set, zero value otherwise.
func (o *ARReminderType) GetCurrencyCode() string {
	if o == nil || IsNil(o.CurrencyCode) {
		var ret string
		return ret
	}
	return *o.CurrencyCode
}

// GetCurrencyCodeOk returns a tuple with the CurrencyCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ARReminderType) GetCurrencyCodeOk() (*string, bool) {
	if o == nil || IsNil(o.CurrencyCode) {
		return nil, false
	}
	return o.CurrencyCode, true
}

// HasCurrencyCode returns a boolean if a field has been set.
func (o *ARReminderType) HasCurrencyCode() bool {
	if o != nil && !IsNil(o.CurrencyCode) {
		return true
	}

	return false
}

// SetCurrencyCode gets a reference to the given string and assigns it to the CurrencyCode field.
func (o *ARReminderType) SetCurrencyCode(v string) {
	o.CurrencyCode = &v
}

// GetCycle returns the Cycle field value if set, zero value otherwise.
func (o *ARReminderType) GetCycle() int32 {
	if o == nil || IsNil(o.Cycle) {
		var ret int32
		return ret
	}
	return *o.Cycle
}

// GetCycleOk returns a tuple with the Cycle field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ARReminderType) GetCycleOk() (*int32, bool) {
	if o == nil || IsNil(o.Cycle) {
		return nil, false
	}
	return o.Cycle, true
}

// HasCycle returns a boolean if a field has been set.
func (o *ARReminderType) HasCycle() bool {
	if o != nil && !IsNil(o.Cycle) {
		return true
	}

	return false
}

// SetCycle gets a reference to the given int32 and assigns it to the Cycle field.
func (o *ARReminderType) SetCycle(v int32) {
	o.Cycle = &v
}

// GetCycleUsed returns the CycleUsed field value if set, zero value otherwise.
func (o *ARReminderType) GetCycleUsed() ReminderCycleType {
	if o == nil || IsNil(o.CycleUsed) {
		var ret ReminderCycleType
		return ret
	}
	return *o.CycleUsed
}

// GetCycleUsedOk returns a tuple with the CycleUsed field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ARReminderType) GetCycleUsedOk() (*ReminderCycleType, bool) {
	if o == nil || IsNil(o.CycleUsed) {
		return nil, false
	}
	return o.CycleUsed, true
}

// HasCycleUsed returns a boolean if a field has been set.
func (o *ARReminderType) HasCycleUsed() bool {
	if o != nil && !IsNil(o.CycleUsed) {
		return true
	}

	return false
}

// SetCycleUsed gets a reference to the given ReminderCycleType and assigns it to the CycleUsed field.
func (o *ARReminderType) SetCycleUsed(v ReminderCycleType) {
	o.CycleUsed = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *ARReminderType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ARReminderType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *ARReminderType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *ARReminderType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetInvoices returns the Invoices field value if set, zero value otherwise.
func (o *ARReminderType) GetInvoices() []ARInvoiceType {
	if o == nil || IsNil(o.Invoices) {
		var ret []ARInvoiceType
		return ret
	}
	return o.Invoices
}

// GetInvoicesOk returns a tuple with the Invoices field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ARReminderType) GetInvoicesOk() ([]ARInvoiceType, bool) {
	if o == nil || IsNil(o.Invoices) {
		return nil, false
	}
	return o.Invoices, true
}

// HasInvoices returns a boolean if a field has been set.
func (o *ARReminderType) HasInvoices() bool {
	if o != nil && !IsNil(o.Invoices) {
		return true
	}

	return false
}

// SetInvoices gets a reference to the given []ARInvoiceType and assigns it to the Invoices field.
func (o *ARReminderType) SetInvoices(v []ARInvoiceType) {
	o.Invoices = v
}

// GetIsHistoryExists returns the IsHistoryExists field value if set, zero value otherwise.
func (o *ARReminderType) GetIsHistoryExists() bool {
	if o == nil || IsNil(o.IsHistoryExists) {
		var ret bool
		return ret
	}
	return *o.IsHistoryExists
}

// GetIsHistoryExistsOk returns a tuple with the IsHistoryExists field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ARReminderType) GetIsHistoryExistsOk() (*bool, bool) {
	if o == nil || IsNil(o.IsHistoryExists) {
		return nil, false
	}
	return o.IsHistoryExists, true
}

// HasIsHistoryExists returns a boolean if a field has been set.
func (o *ARReminderType) HasIsHistoryExists() bool {
	if o != nil && !IsNil(o.IsHistoryExists) {
		return true
	}

	return false
}

// SetIsHistoryExists gets a reference to the given bool and assigns it to the IsHistoryExists field.
func (o *ARReminderType) SetIsHistoryExists(v bool) {
	o.IsHistoryExists = &v
}

// GetLastCycle returns the LastCycle field value if set, zero value otherwise.
func (o *ARReminderType) GetLastCycle() int32 {
	if o == nil || IsNil(o.LastCycle) {
		var ret int32
		return ret
	}
	return *o.LastCycle
}

// GetLastCycleOk returns a tuple with the LastCycle field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ARReminderType) GetLastCycleOk() (*int32, bool) {
	if o == nil || IsNil(o.LastCycle) {
		return nil, false
	}
	return o.LastCycle, true
}

// HasLastCycle returns a boolean if a field has been set.
func (o *ARReminderType) HasLastCycle() bool {
	if o != nil && !IsNil(o.LastCycle) {
		return true
	}

	return false
}

// SetLastCycle gets a reference to the given int32 and assigns it to the LastCycle field.
func (o *ARReminderType) SetLastCycle(v int32) {
	o.LastCycle = &v
}

// GetLastReminderSent returns the LastReminderSent field value if set, zero value otherwise.
func (o *ARReminderType) GetLastReminderSent() string {
	if o == nil || IsNil(o.LastReminderSent) {
		var ret string
		return ret
	}
	return *o.LastReminderSent
}

// GetLastReminderSentOk returns a tuple with the LastReminderSent field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ARReminderType) GetLastReminderSentOk() (*string, bool) {
	if o == nil || IsNil(o.LastReminderSent) {
		return nil, false
	}
	return o.LastReminderSent, true
}

// HasLastReminderSent returns a boolean if a field has been set.
func (o *ARReminderType) HasLastReminderSent() bool {
	if o != nil && !IsNil(o.LastReminderSent) {
		return true
	}

	return false
}

// SetLastReminderSent gets a reference to the given string and assigns it to the LastReminderSent field.
func (o *ARReminderType) SetLastReminderSent(v string) {
	o.LastReminderSent = &v
}

// GetLetterName returns the LetterName field value if set, zero value otherwise.
func (o *ARReminderType) GetLetterName() string {
	if o == nil || IsNil(o.LetterName) {
		var ret string
		return ret
	}
	return *o.LetterName
}

// GetLetterNameOk returns a tuple with the LetterName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ARReminderType) GetLetterNameOk() (*string, bool) {
	if o == nil || IsNil(o.LetterName) {
		return nil, false
	}
	return o.LetterName, true
}

// HasLetterName returns a boolean if a field has been set.
func (o *ARReminderType) HasLetterName() bool {
	if o != nil && !IsNil(o.LetterName) {
		return true
	}

	return false
}

// SetLetterName gets a reference to the given string and assigns it to the LetterName field.
func (o *ARReminderType) SetLetterName(v string) {
	o.LetterName = &v
}

// GetMaxAge returns the MaxAge field value if set, zero value otherwise.
func (o *ARReminderType) GetMaxAge() int32 {
	if o == nil || IsNil(o.MaxAge) {
		var ret int32
		return ret
	}
	return *o.MaxAge
}

// GetMaxAgeOk returns a tuple with the MaxAge field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ARReminderType) GetMaxAgeOk() (*int32, bool) {
	if o == nil || IsNil(o.MaxAge) {
		return nil, false
	}
	return o.MaxAge, true
}

// HasMaxAge returns a boolean if a field has been set.
func (o *ARReminderType) HasMaxAge() bool {
	if o != nil && !IsNil(o.MaxAge) {
		return true
	}

	return false
}

// SetMaxAge gets a reference to the given int32 and assigns it to the MaxAge field.
func (o *ARReminderType) SetMaxAge(v int32) {
	o.MaxAge = &v
}

// GetReportFileName returns the ReportFileName field value if set, zero value otherwise.
func (o *ARReminderType) GetReportFileName() string {
	if o == nil || IsNil(o.ReportFileName) {
		var ret string
		return ret
	}
	return *o.ReportFileName
}

// GetReportFileNameOk returns a tuple with the ReportFileName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ARReminderType) GetReportFileNameOk() (*string, bool) {
	if o == nil || IsNil(o.ReportFileName) {
		return nil, false
	}
	return o.ReportFileName, true
}

// HasReportFileName returns a boolean if a field has been set.
func (o *ARReminderType) HasReportFileName() bool {
	if o != nil && !IsNil(o.ReportFileName) {
		return true
	}

	return false
}

// SetReportFileName gets a reference to the given string and assigns it to the ReportFileName field.
func (o *ARReminderType) SetReportFileName(v string) {
	o.ReportFileName = &v
}

func (o ARReminderType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ARReminderType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AccountId) {
		toSerialize["accountId"] = o.AccountId
	}
	if !IsNil(o.Age) {
		toSerialize["age"] = o.Age
	}
	if !IsNil(o.CurrencyCode) {
		toSerialize["currencyCode"] = o.CurrencyCode
	}
	if !IsNil(o.Cycle) {
		toSerialize["cycle"] = o.Cycle
	}
	if !IsNil(o.CycleUsed) {
		toSerialize["cycleUsed"] = o.CycleUsed
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.Invoices) {
		toSerialize["invoices"] = o.Invoices
	}
	if !IsNil(o.IsHistoryExists) {
		toSerialize["isHistoryExists"] = o.IsHistoryExists
	}
	if !IsNil(o.LastCycle) {
		toSerialize["lastCycle"] = o.LastCycle
	}
	if !IsNil(o.LastReminderSent) {
		toSerialize["lastReminderSent"] = o.LastReminderSent
	}
	if !IsNil(o.LetterName) {
		toSerialize["letterName"] = o.LetterName
	}
	if !IsNil(o.MaxAge) {
		toSerialize["maxAge"] = o.MaxAge
	}
	if !IsNil(o.ReportFileName) {
		toSerialize["reportFileName"] = o.ReportFileName
	}
	return toSerialize, nil
}

type NullableARReminderType struct {
	value *ARReminderType
	isSet bool
}

func (v NullableARReminderType) Get() *ARReminderType {
	return v.value
}

func (v *NullableARReminderType) Set(val *ARReminderType) {
	v.value = val
	v.isSet = true
}

func (v NullableARReminderType) IsSet() bool {
	return v.isSet
}

func (v *NullableARReminderType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableARReminderType(val *ARReminderType) *NullableARReminderType {
	return &NullableARReminderType{value: val, isSet: true}
}

func (v NullableARReminderType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableARReminderType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


