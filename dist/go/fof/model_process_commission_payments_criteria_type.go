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

// checks if the ProcessCommissionPaymentsCriteriaType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ProcessCommissionPaymentsCriteriaType{}

// ProcessCommissionPaymentsCriteriaType Generic commission criteria including hotel code, bank account id, agent id, reservation id and/or commission id
type ProcessCommissionPaymentsCriteriaType struct {
	AgentId *UniqueIDType `json:"agentId,omitempty"`
	BankAccountId *UniqueIDType `json:"bankAccountId,omitempty"`
	// If payment method is check, this serves as the start check number of checks to be printed.
	CheckNo *float32 `json:"checkNo,omitempty"`
	CommissionId *UniqueIDType `json:"commissionId,omitempty"`
	// Property of the commission record .
	HotelId *string `json:"hotelId,omitempty"`
	ResvNameId *UniqueIDType `json:"resvNameId,omitempty"`
	TimeSpan *TimeSpanType `json:"timeSpan,omitempty"`
}

// NewProcessCommissionPaymentsCriteriaType instantiates a new ProcessCommissionPaymentsCriteriaType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewProcessCommissionPaymentsCriteriaType() *ProcessCommissionPaymentsCriteriaType {
	this := ProcessCommissionPaymentsCriteriaType{}
	return &this
}

// NewProcessCommissionPaymentsCriteriaTypeWithDefaults instantiates a new ProcessCommissionPaymentsCriteriaType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewProcessCommissionPaymentsCriteriaTypeWithDefaults() *ProcessCommissionPaymentsCriteriaType {
	this := ProcessCommissionPaymentsCriteriaType{}
	return &this
}

// GetAgentId returns the AgentId field value if set, zero value otherwise.
func (o *ProcessCommissionPaymentsCriteriaType) GetAgentId() UniqueIDType {
	if o == nil || IsNil(o.AgentId) {
		var ret UniqueIDType
		return ret
	}
	return *o.AgentId
}

// GetAgentIdOk returns a tuple with the AgentId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProcessCommissionPaymentsCriteriaType) GetAgentIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.AgentId) {
		return nil, false
	}
	return o.AgentId, true
}

// HasAgentId returns a boolean if a field has been set.
func (o *ProcessCommissionPaymentsCriteriaType) HasAgentId() bool {
	if o != nil && !IsNil(o.AgentId) {
		return true
	}

	return false
}

// SetAgentId gets a reference to the given UniqueIDType and assigns it to the AgentId field.
func (o *ProcessCommissionPaymentsCriteriaType) SetAgentId(v UniqueIDType) {
	o.AgentId = &v
}

// GetBankAccountId returns the BankAccountId field value if set, zero value otherwise.
func (o *ProcessCommissionPaymentsCriteriaType) GetBankAccountId() UniqueIDType {
	if o == nil || IsNil(o.BankAccountId) {
		var ret UniqueIDType
		return ret
	}
	return *o.BankAccountId
}

// GetBankAccountIdOk returns a tuple with the BankAccountId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProcessCommissionPaymentsCriteriaType) GetBankAccountIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.BankAccountId) {
		return nil, false
	}
	return o.BankAccountId, true
}

// HasBankAccountId returns a boolean if a field has been set.
func (o *ProcessCommissionPaymentsCriteriaType) HasBankAccountId() bool {
	if o != nil && !IsNil(o.BankAccountId) {
		return true
	}

	return false
}

// SetBankAccountId gets a reference to the given UniqueIDType and assigns it to the BankAccountId field.
func (o *ProcessCommissionPaymentsCriteriaType) SetBankAccountId(v UniqueIDType) {
	o.BankAccountId = &v
}

// GetCheckNo returns the CheckNo field value if set, zero value otherwise.
func (o *ProcessCommissionPaymentsCriteriaType) GetCheckNo() float32 {
	if o == nil || IsNil(o.CheckNo) {
		var ret float32
		return ret
	}
	return *o.CheckNo
}

// GetCheckNoOk returns a tuple with the CheckNo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProcessCommissionPaymentsCriteriaType) GetCheckNoOk() (*float32, bool) {
	if o == nil || IsNil(o.CheckNo) {
		return nil, false
	}
	return o.CheckNo, true
}

// HasCheckNo returns a boolean if a field has been set.
func (o *ProcessCommissionPaymentsCriteriaType) HasCheckNo() bool {
	if o != nil && !IsNil(o.CheckNo) {
		return true
	}

	return false
}

// SetCheckNo gets a reference to the given float32 and assigns it to the CheckNo field.
func (o *ProcessCommissionPaymentsCriteriaType) SetCheckNo(v float32) {
	o.CheckNo = &v
}

// GetCommissionId returns the CommissionId field value if set, zero value otherwise.
func (o *ProcessCommissionPaymentsCriteriaType) GetCommissionId() UniqueIDType {
	if o == nil || IsNil(o.CommissionId) {
		var ret UniqueIDType
		return ret
	}
	return *o.CommissionId
}

// GetCommissionIdOk returns a tuple with the CommissionId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProcessCommissionPaymentsCriteriaType) GetCommissionIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.CommissionId) {
		return nil, false
	}
	return o.CommissionId, true
}

// HasCommissionId returns a boolean if a field has been set.
func (o *ProcessCommissionPaymentsCriteriaType) HasCommissionId() bool {
	if o != nil && !IsNil(o.CommissionId) {
		return true
	}

	return false
}

// SetCommissionId gets a reference to the given UniqueIDType and assigns it to the CommissionId field.
func (o *ProcessCommissionPaymentsCriteriaType) SetCommissionId(v UniqueIDType) {
	o.CommissionId = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *ProcessCommissionPaymentsCriteriaType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProcessCommissionPaymentsCriteriaType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *ProcessCommissionPaymentsCriteriaType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *ProcessCommissionPaymentsCriteriaType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetResvNameId returns the ResvNameId field value if set, zero value otherwise.
func (o *ProcessCommissionPaymentsCriteriaType) GetResvNameId() UniqueIDType {
	if o == nil || IsNil(o.ResvNameId) {
		var ret UniqueIDType
		return ret
	}
	return *o.ResvNameId
}

// GetResvNameIdOk returns a tuple with the ResvNameId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProcessCommissionPaymentsCriteriaType) GetResvNameIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.ResvNameId) {
		return nil, false
	}
	return o.ResvNameId, true
}

// HasResvNameId returns a boolean if a field has been set.
func (o *ProcessCommissionPaymentsCriteriaType) HasResvNameId() bool {
	if o != nil && !IsNil(o.ResvNameId) {
		return true
	}

	return false
}

// SetResvNameId gets a reference to the given UniqueIDType and assigns it to the ResvNameId field.
func (o *ProcessCommissionPaymentsCriteriaType) SetResvNameId(v UniqueIDType) {
	o.ResvNameId = &v
}

// GetTimeSpan returns the TimeSpan field value if set, zero value otherwise.
func (o *ProcessCommissionPaymentsCriteriaType) GetTimeSpan() TimeSpanType {
	if o == nil || IsNil(o.TimeSpan) {
		var ret TimeSpanType
		return ret
	}
	return *o.TimeSpan
}

// GetTimeSpanOk returns a tuple with the TimeSpan field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProcessCommissionPaymentsCriteriaType) GetTimeSpanOk() (*TimeSpanType, bool) {
	if o == nil || IsNil(o.TimeSpan) {
		return nil, false
	}
	return o.TimeSpan, true
}

// HasTimeSpan returns a boolean if a field has been set.
func (o *ProcessCommissionPaymentsCriteriaType) HasTimeSpan() bool {
	if o != nil && !IsNil(o.TimeSpan) {
		return true
	}

	return false
}

// SetTimeSpan gets a reference to the given TimeSpanType and assigns it to the TimeSpan field.
func (o *ProcessCommissionPaymentsCriteriaType) SetTimeSpan(v TimeSpanType) {
	o.TimeSpan = &v
}

func (o ProcessCommissionPaymentsCriteriaType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ProcessCommissionPaymentsCriteriaType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AgentId) {
		toSerialize["agentId"] = o.AgentId
	}
	if !IsNil(o.BankAccountId) {
		toSerialize["bankAccountId"] = o.BankAccountId
	}
	if !IsNil(o.CheckNo) {
		toSerialize["checkNo"] = o.CheckNo
	}
	if !IsNil(o.CommissionId) {
		toSerialize["commissionId"] = o.CommissionId
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.ResvNameId) {
		toSerialize["resvNameId"] = o.ResvNameId
	}
	if !IsNil(o.TimeSpan) {
		toSerialize["timeSpan"] = o.TimeSpan
	}
	return toSerialize, nil
}

type NullableProcessCommissionPaymentsCriteriaType struct {
	value *ProcessCommissionPaymentsCriteriaType
	isSet bool
}

func (v NullableProcessCommissionPaymentsCriteriaType) Get() *ProcessCommissionPaymentsCriteriaType {
	return v.value
}

func (v *NullableProcessCommissionPaymentsCriteriaType) Set(val *ProcessCommissionPaymentsCriteriaType) {
	v.value = val
	v.isSet = true
}

func (v NullableProcessCommissionPaymentsCriteriaType) IsSet() bool {
	return v.isSet
}

func (v *NullableProcessCommissionPaymentsCriteriaType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableProcessCommissionPaymentsCriteriaType(val *ProcessCommissionPaymentsCriteriaType) *NullableProcessCommissionPaymentsCriteriaType {
	return &NullableProcessCommissionPaymentsCriteriaType{value: val, isSet: true}
}

func (v NullableProcessCommissionPaymentsCriteriaType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableProcessCommissionPaymentsCriteriaType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


