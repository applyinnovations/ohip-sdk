/*
OPERA Cloud Price Availability Rate API

APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package par

import (
	"encoding/json"
)

// checks if the CancelPenaltyType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CancelPenaltyType{}

// CancelPenaltyType The CancelPenalty class defines the cancellation policy of the hotel facility.
type CancelPenaltyType struct {
	AmountPercent *PolicyAmountPercentType `json:"amountPercent,omitempty"`
	Deadline *PolicyDeadlineType `json:"deadline,omitempty"`
	// Formatted Text Rule of the Cancellation Penalty.
	FormattedRule *string `json:"formattedRule,omitempty"`
	// Flag to indicate if the cancellation policy is manual.
	Manual *bool `json:"manual,omitempty"`
	// Indicates if the amount is refundable if booking is canceled.
	NonRefundable *bool `json:"nonRefundable,omitempty"`
	OffsetUnit *OffsetUnitType `json:"offsetUnit,omitempty"`
	// Text description of the Penalty in a given language.
	PenaltyDescription *string `json:"penaltyDescription,omitempty"`
	// Policy Code.
	PolicyCode *string `json:"policyCode,omitempty"`
}

// NewCancelPenaltyType instantiates a new CancelPenaltyType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCancelPenaltyType() *CancelPenaltyType {
	this := CancelPenaltyType{}
	return &this
}

// NewCancelPenaltyTypeWithDefaults instantiates a new CancelPenaltyType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCancelPenaltyTypeWithDefaults() *CancelPenaltyType {
	this := CancelPenaltyType{}
	return &this
}

// GetAmountPercent returns the AmountPercent field value if set, zero value otherwise.
func (o *CancelPenaltyType) GetAmountPercent() PolicyAmountPercentType {
	if o == nil || IsNil(o.AmountPercent) {
		var ret PolicyAmountPercentType
		return ret
	}
	return *o.AmountPercent
}

// GetAmountPercentOk returns a tuple with the AmountPercent field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CancelPenaltyType) GetAmountPercentOk() (*PolicyAmountPercentType, bool) {
	if o == nil || IsNil(o.AmountPercent) {
		return nil, false
	}
	return o.AmountPercent, true
}

// HasAmountPercent returns a boolean if a field has been set.
func (o *CancelPenaltyType) HasAmountPercent() bool {
	if o != nil && !IsNil(o.AmountPercent) {
		return true
	}

	return false
}

// SetAmountPercent gets a reference to the given PolicyAmountPercentType and assigns it to the AmountPercent field.
func (o *CancelPenaltyType) SetAmountPercent(v PolicyAmountPercentType) {
	o.AmountPercent = &v
}

// GetDeadline returns the Deadline field value if set, zero value otherwise.
func (o *CancelPenaltyType) GetDeadline() PolicyDeadlineType {
	if o == nil || IsNil(o.Deadline) {
		var ret PolicyDeadlineType
		return ret
	}
	return *o.Deadline
}

// GetDeadlineOk returns a tuple with the Deadline field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CancelPenaltyType) GetDeadlineOk() (*PolicyDeadlineType, bool) {
	if o == nil || IsNil(o.Deadline) {
		return nil, false
	}
	return o.Deadline, true
}

// HasDeadline returns a boolean if a field has been set.
func (o *CancelPenaltyType) HasDeadline() bool {
	if o != nil && !IsNil(o.Deadline) {
		return true
	}

	return false
}

// SetDeadline gets a reference to the given PolicyDeadlineType and assigns it to the Deadline field.
func (o *CancelPenaltyType) SetDeadline(v PolicyDeadlineType) {
	o.Deadline = &v
}

// GetFormattedRule returns the FormattedRule field value if set, zero value otherwise.
func (o *CancelPenaltyType) GetFormattedRule() string {
	if o == nil || IsNil(o.FormattedRule) {
		var ret string
		return ret
	}
	return *o.FormattedRule
}

// GetFormattedRuleOk returns a tuple with the FormattedRule field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CancelPenaltyType) GetFormattedRuleOk() (*string, bool) {
	if o == nil || IsNil(o.FormattedRule) {
		return nil, false
	}
	return o.FormattedRule, true
}

// HasFormattedRule returns a boolean if a field has been set.
func (o *CancelPenaltyType) HasFormattedRule() bool {
	if o != nil && !IsNil(o.FormattedRule) {
		return true
	}

	return false
}

// SetFormattedRule gets a reference to the given string and assigns it to the FormattedRule field.
func (o *CancelPenaltyType) SetFormattedRule(v string) {
	o.FormattedRule = &v
}

// GetManual returns the Manual field value if set, zero value otherwise.
func (o *CancelPenaltyType) GetManual() bool {
	if o == nil || IsNil(o.Manual) {
		var ret bool
		return ret
	}
	return *o.Manual
}

// GetManualOk returns a tuple with the Manual field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CancelPenaltyType) GetManualOk() (*bool, bool) {
	if o == nil || IsNil(o.Manual) {
		return nil, false
	}
	return o.Manual, true
}

// HasManual returns a boolean if a field has been set.
func (o *CancelPenaltyType) HasManual() bool {
	if o != nil && !IsNil(o.Manual) {
		return true
	}

	return false
}

// SetManual gets a reference to the given bool and assigns it to the Manual field.
func (o *CancelPenaltyType) SetManual(v bool) {
	o.Manual = &v
}

// GetNonRefundable returns the NonRefundable field value if set, zero value otherwise.
func (o *CancelPenaltyType) GetNonRefundable() bool {
	if o == nil || IsNil(o.NonRefundable) {
		var ret bool
		return ret
	}
	return *o.NonRefundable
}

// GetNonRefundableOk returns a tuple with the NonRefundable field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CancelPenaltyType) GetNonRefundableOk() (*bool, bool) {
	if o == nil || IsNil(o.NonRefundable) {
		return nil, false
	}
	return o.NonRefundable, true
}

// HasNonRefundable returns a boolean if a field has been set.
func (o *CancelPenaltyType) HasNonRefundable() bool {
	if o != nil && !IsNil(o.NonRefundable) {
		return true
	}

	return false
}

// SetNonRefundable gets a reference to the given bool and assigns it to the NonRefundable field.
func (o *CancelPenaltyType) SetNonRefundable(v bool) {
	o.NonRefundable = &v
}

// GetOffsetUnit returns the OffsetUnit field value if set, zero value otherwise.
func (o *CancelPenaltyType) GetOffsetUnit() OffsetUnitType {
	if o == nil || IsNil(o.OffsetUnit) {
		var ret OffsetUnitType
		return ret
	}
	return *o.OffsetUnit
}

// GetOffsetUnitOk returns a tuple with the OffsetUnit field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CancelPenaltyType) GetOffsetUnitOk() (*OffsetUnitType, bool) {
	if o == nil || IsNil(o.OffsetUnit) {
		return nil, false
	}
	return o.OffsetUnit, true
}

// HasOffsetUnit returns a boolean if a field has been set.
func (o *CancelPenaltyType) HasOffsetUnit() bool {
	if o != nil && !IsNil(o.OffsetUnit) {
		return true
	}

	return false
}

// SetOffsetUnit gets a reference to the given OffsetUnitType and assigns it to the OffsetUnit field.
func (o *CancelPenaltyType) SetOffsetUnit(v OffsetUnitType) {
	o.OffsetUnit = &v
}

// GetPenaltyDescription returns the PenaltyDescription field value if set, zero value otherwise.
func (o *CancelPenaltyType) GetPenaltyDescription() string {
	if o == nil || IsNil(o.PenaltyDescription) {
		var ret string
		return ret
	}
	return *o.PenaltyDescription
}

// GetPenaltyDescriptionOk returns a tuple with the PenaltyDescription field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CancelPenaltyType) GetPenaltyDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.PenaltyDescription) {
		return nil, false
	}
	return o.PenaltyDescription, true
}

// HasPenaltyDescription returns a boolean if a field has been set.
func (o *CancelPenaltyType) HasPenaltyDescription() bool {
	if o != nil && !IsNil(o.PenaltyDescription) {
		return true
	}

	return false
}

// SetPenaltyDescription gets a reference to the given string and assigns it to the PenaltyDescription field.
func (o *CancelPenaltyType) SetPenaltyDescription(v string) {
	o.PenaltyDescription = &v
}

// GetPolicyCode returns the PolicyCode field value if set, zero value otherwise.
func (o *CancelPenaltyType) GetPolicyCode() string {
	if o == nil || IsNil(o.PolicyCode) {
		var ret string
		return ret
	}
	return *o.PolicyCode
}

// GetPolicyCodeOk returns a tuple with the PolicyCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CancelPenaltyType) GetPolicyCodeOk() (*string, bool) {
	if o == nil || IsNil(o.PolicyCode) {
		return nil, false
	}
	return o.PolicyCode, true
}

// HasPolicyCode returns a boolean if a field has been set.
func (o *CancelPenaltyType) HasPolicyCode() bool {
	if o != nil && !IsNil(o.PolicyCode) {
		return true
	}

	return false
}

// SetPolicyCode gets a reference to the given string and assigns it to the PolicyCode field.
func (o *CancelPenaltyType) SetPolicyCode(v string) {
	o.PolicyCode = &v
}

func (o CancelPenaltyType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CancelPenaltyType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AmountPercent) {
		toSerialize["amountPercent"] = o.AmountPercent
	}
	if !IsNil(o.Deadline) {
		toSerialize["deadline"] = o.Deadline
	}
	if !IsNil(o.FormattedRule) {
		toSerialize["formattedRule"] = o.FormattedRule
	}
	if !IsNil(o.Manual) {
		toSerialize["manual"] = o.Manual
	}
	if !IsNil(o.NonRefundable) {
		toSerialize["nonRefundable"] = o.NonRefundable
	}
	if !IsNil(o.OffsetUnit) {
		toSerialize["offsetUnit"] = o.OffsetUnit
	}
	if !IsNil(o.PenaltyDescription) {
		toSerialize["penaltyDescription"] = o.PenaltyDescription
	}
	if !IsNil(o.PolicyCode) {
		toSerialize["policyCode"] = o.PolicyCode
	}
	return toSerialize, nil
}

type NullableCancelPenaltyType struct {
	value *CancelPenaltyType
	isSet bool
}

func (v NullableCancelPenaltyType) Get() *CancelPenaltyType {
	return v.value
}

func (v *NullableCancelPenaltyType) Set(val *CancelPenaltyType) {
	v.value = val
	v.isSet = true
}

func (v NullableCancelPenaltyType) IsSet() bool {
	return v.isSet
}

func (v *NullableCancelPenaltyType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCancelPenaltyType(val *CancelPenaltyType) *NullableCancelPenaltyType {
	return &NullableCancelPenaltyType{value: val, isSet: true}
}

func (v NullableCancelPenaltyType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCancelPenaltyType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


