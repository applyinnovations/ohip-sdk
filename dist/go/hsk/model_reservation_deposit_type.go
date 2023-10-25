/*
OPERA Cloud Housekeeping Service API

APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package hsk

import (
	"encoding/json"
)

// checks if the ReservationDepositType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ReservationDepositType{}

// ReservationDepositType Reservation Deposit Type.
type ReservationDepositType struct {
	// Deposit Amount Owed.
	AmountOwed *float32 `json:"amountOwed,omitempty"`
	// Deposit Amount Paid.
	AmountPaid *float32 `json:"amountPaid,omitempty"`
	// Deposit Amount Required.
	AmountRequired *float32 `json:"amountRequired,omitempty"`
	// Deposit Due Date.
	DueDate *string `json:"dueDate,omitempty"`
	// Resolves whether reservation has outstanding deposit.
	HasOutstanding *bool `json:"hasOutstanding,omitempty"`
	// Resolves whether reservation has paid deposit.
	HasPaid *bool `json:"hasPaid,omitempty"`
	// Deposit Posting Date.
	PostingDate *string `json:"postingDate,omitempty"`
}

// NewReservationDepositType instantiates a new ReservationDepositType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewReservationDepositType() *ReservationDepositType {
	this := ReservationDepositType{}
	return &this
}

// NewReservationDepositTypeWithDefaults instantiates a new ReservationDepositType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewReservationDepositTypeWithDefaults() *ReservationDepositType {
	this := ReservationDepositType{}
	return &this
}

// GetAmountOwed returns the AmountOwed field value if set, zero value otherwise.
func (o *ReservationDepositType) GetAmountOwed() float32 {
	if o == nil || IsNil(o.AmountOwed) {
		var ret float32
		return ret
	}
	return *o.AmountOwed
}

// GetAmountOwedOk returns a tuple with the AmountOwed field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationDepositType) GetAmountOwedOk() (*float32, bool) {
	if o == nil || IsNil(o.AmountOwed) {
		return nil, false
	}
	return o.AmountOwed, true
}

// HasAmountOwed returns a boolean if a field has been set.
func (o *ReservationDepositType) HasAmountOwed() bool {
	if o != nil && !IsNil(o.AmountOwed) {
		return true
	}

	return false
}

// SetAmountOwed gets a reference to the given float32 and assigns it to the AmountOwed field.
func (o *ReservationDepositType) SetAmountOwed(v float32) {
	o.AmountOwed = &v
}

// GetAmountPaid returns the AmountPaid field value if set, zero value otherwise.
func (o *ReservationDepositType) GetAmountPaid() float32 {
	if o == nil || IsNil(o.AmountPaid) {
		var ret float32
		return ret
	}
	return *o.AmountPaid
}

// GetAmountPaidOk returns a tuple with the AmountPaid field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationDepositType) GetAmountPaidOk() (*float32, bool) {
	if o == nil || IsNil(o.AmountPaid) {
		return nil, false
	}
	return o.AmountPaid, true
}

// HasAmountPaid returns a boolean if a field has been set.
func (o *ReservationDepositType) HasAmountPaid() bool {
	if o != nil && !IsNil(o.AmountPaid) {
		return true
	}

	return false
}

// SetAmountPaid gets a reference to the given float32 and assigns it to the AmountPaid field.
func (o *ReservationDepositType) SetAmountPaid(v float32) {
	o.AmountPaid = &v
}

// GetAmountRequired returns the AmountRequired field value if set, zero value otherwise.
func (o *ReservationDepositType) GetAmountRequired() float32 {
	if o == nil || IsNil(o.AmountRequired) {
		var ret float32
		return ret
	}
	return *o.AmountRequired
}

// GetAmountRequiredOk returns a tuple with the AmountRequired field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationDepositType) GetAmountRequiredOk() (*float32, bool) {
	if o == nil || IsNil(o.AmountRequired) {
		return nil, false
	}
	return o.AmountRequired, true
}

// HasAmountRequired returns a boolean if a field has been set.
func (o *ReservationDepositType) HasAmountRequired() bool {
	if o != nil && !IsNil(o.AmountRequired) {
		return true
	}

	return false
}

// SetAmountRequired gets a reference to the given float32 and assigns it to the AmountRequired field.
func (o *ReservationDepositType) SetAmountRequired(v float32) {
	o.AmountRequired = &v
}

// GetDueDate returns the DueDate field value if set, zero value otherwise.
func (o *ReservationDepositType) GetDueDate() string {
	if o == nil || IsNil(o.DueDate) {
		var ret string
		return ret
	}
	return *o.DueDate
}

// GetDueDateOk returns a tuple with the DueDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationDepositType) GetDueDateOk() (*string, bool) {
	if o == nil || IsNil(o.DueDate) {
		return nil, false
	}
	return o.DueDate, true
}

// HasDueDate returns a boolean if a field has been set.
func (o *ReservationDepositType) HasDueDate() bool {
	if o != nil && !IsNil(o.DueDate) {
		return true
	}

	return false
}

// SetDueDate gets a reference to the given string and assigns it to the DueDate field.
func (o *ReservationDepositType) SetDueDate(v string) {
	o.DueDate = &v
}

// GetHasOutstanding returns the HasOutstanding field value if set, zero value otherwise.
func (o *ReservationDepositType) GetHasOutstanding() bool {
	if o == nil || IsNil(o.HasOutstanding) {
		var ret bool
		return ret
	}
	return *o.HasOutstanding
}

// GetHasOutstandingOk returns a tuple with the HasOutstanding field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationDepositType) GetHasOutstandingOk() (*bool, bool) {
	if o == nil || IsNil(o.HasOutstanding) {
		return nil, false
	}
	return o.HasOutstanding, true
}

// HasHasOutstanding returns a boolean if a field has been set.
func (o *ReservationDepositType) HasHasOutstanding() bool {
	if o != nil && !IsNil(o.HasOutstanding) {
		return true
	}

	return false
}

// SetHasOutstanding gets a reference to the given bool and assigns it to the HasOutstanding field.
func (o *ReservationDepositType) SetHasOutstanding(v bool) {
	o.HasOutstanding = &v
}

// GetHasPaid returns the HasPaid field value if set, zero value otherwise.
func (o *ReservationDepositType) GetHasPaid() bool {
	if o == nil || IsNil(o.HasPaid) {
		var ret bool
		return ret
	}
	return *o.HasPaid
}

// GetHasPaidOk returns a tuple with the HasPaid field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationDepositType) GetHasPaidOk() (*bool, bool) {
	if o == nil || IsNil(o.HasPaid) {
		return nil, false
	}
	return o.HasPaid, true
}

// HasHasPaid returns a boolean if a field has been set.
func (o *ReservationDepositType) HasHasPaid() bool {
	if o != nil && !IsNil(o.HasPaid) {
		return true
	}

	return false
}

// SetHasPaid gets a reference to the given bool and assigns it to the HasPaid field.
func (o *ReservationDepositType) SetHasPaid(v bool) {
	o.HasPaid = &v
}

// GetPostingDate returns the PostingDate field value if set, zero value otherwise.
func (o *ReservationDepositType) GetPostingDate() string {
	if o == nil || IsNil(o.PostingDate) {
		var ret string
		return ret
	}
	return *o.PostingDate
}

// GetPostingDateOk returns a tuple with the PostingDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationDepositType) GetPostingDateOk() (*string, bool) {
	if o == nil || IsNil(o.PostingDate) {
		return nil, false
	}
	return o.PostingDate, true
}

// HasPostingDate returns a boolean if a field has been set.
func (o *ReservationDepositType) HasPostingDate() bool {
	if o != nil && !IsNil(o.PostingDate) {
		return true
	}

	return false
}

// SetPostingDate gets a reference to the given string and assigns it to the PostingDate field.
func (o *ReservationDepositType) SetPostingDate(v string) {
	o.PostingDate = &v
}

func (o ReservationDepositType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ReservationDepositType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AmountOwed) {
		toSerialize["amountOwed"] = o.AmountOwed
	}
	if !IsNil(o.AmountPaid) {
		toSerialize["amountPaid"] = o.AmountPaid
	}
	if !IsNil(o.AmountRequired) {
		toSerialize["amountRequired"] = o.AmountRequired
	}
	if !IsNil(o.DueDate) {
		toSerialize["dueDate"] = o.DueDate
	}
	if !IsNil(o.HasOutstanding) {
		toSerialize["hasOutstanding"] = o.HasOutstanding
	}
	if !IsNil(o.HasPaid) {
		toSerialize["hasPaid"] = o.HasPaid
	}
	if !IsNil(o.PostingDate) {
		toSerialize["postingDate"] = o.PostingDate
	}
	return toSerialize, nil
}

type NullableReservationDepositType struct {
	value *ReservationDepositType
	isSet bool
}

func (v NullableReservationDepositType) Get() *ReservationDepositType {
	return v.value
}

func (v *NullableReservationDepositType) Set(val *ReservationDepositType) {
	v.value = val
	v.isSet = true
}

func (v NullableReservationDepositType) IsSet() bool {
	return v.isSet
}

func (v *NullableReservationDepositType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableReservationDepositType(val *ReservationDepositType) *NullableReservationDepositType {
	return &NullableReservationDepositType{value: val, isSet: true}
}

func (v NullableReservationDepositType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableReservationDepositType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


