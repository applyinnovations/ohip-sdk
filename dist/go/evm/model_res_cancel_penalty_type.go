/*
OPERA Cloud Sales Event Management API

APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evm

import (
	"encoding/json"
)

// checks if the ResCancelPenaltyType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ResCancelPenaltyType{}

// ResCancelPenaltyType The CancelPenalty class defines the cancellation policy of the hotel facility.
type ResCancelPenaltyType struct {
	AmountPercent *PolicyAmountPercentType `json:"amountPercent,omitempty"`
	Deadline *PolicyDeadlineType `json:"deadline,omitempty"`
	// Indicator if Cancellation Penalty is currently applicable or not.
	Effective *bool `json:"effective,omitempty"`
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

// NewResCancelPenaltyType instantiates a new ResCancelPenaltyType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewResCancelPenaltyType() *ResCancelPenaltyType {
	this := ResCancelPenaltyType{}
	return &this
}

// NewResCancelPenaltyTypeWithDefaults instantiates a new ResCancelPenaltyType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewResCancelPenaltyTypeWithDefaults() *ResCancelPenaltyType {
	this := ResCancelPenaltyType{}
	return &this
}

// GetAmountPercent returns the AmountPercent field value if set, zero value otherwise.
func (o *ResCancelPenaltyType) GetAmountPercent() PolicyAmountPercentType {
	if o == nil || IsNil(o.AmountPercent) {
		var ret PolicyAmountPercentType
		return ret
	}
	return *o.AmountPercent
}

// GetAmountPercentOk returns a tuple with the AmountPercent field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResCancelPenaltyType) GetAmountPercentOk() (*PolicyAmountPercentType, bool) {
	if o == nil || IsNil(o.AmountPercent) {
		return nil, false
	}
	return o.AmountPercent, true
}

// HasAmountPercent returns a boolean if a field has been set.
func (o *ResCancelPenaltyType) HasAmountPercent() bool {
	if o != nil && !IsNil(o.AmountPercent) {
		return true
	}

	return false
}

// SetAmountPercent gets a reference to the given PolicyAmountPercentType and assigns it to the AmountPercent field.
func (o *ResCancelPenaltyType) SetAmountPercent(v PolicyAmountPercentType) {
	o.AmountPercent = &v
}

// GetDeadline returns the Deadline field value if set, zero value otherwise.
func (o *ResCancelPenaltyType) GetDeadline() PolicyDeadlineType {
	if o == nil || IsNil(o.Deadline) {
		var ret PolicyDeadlineType
		return ret
	}
	return *o.Deadline
}

// GetDeadlineOk returns a tuple with the Deadline field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResCancelPenaltyType) GetDeadlineOk() (*PolicyDeadlineType, bool) {
	if o == nil || IsNil(o.Deadline) {
		return nil, false
	}
	return o.Deadline, true
}

// HasDeadline returns a boolean if a field has been set.
func (o *ResCancelPenaltyType) HasDeadline() bool {
	if o != nil && !IsNil(o.Deadline) {
		return true
	}

	return false
}

// SetDeadline gets a reference to the given PolicyDeadlineType and assigns it to the Deadline field.
func (o *ResCancelPenaltyType) SetDeadline(v PolicyDeadlineType) {
	o.Deadline = &v
}

// GetEffective returns the Effective field value if set, zero value otherwise.
func (o *ResCancelPenaltyType) GetEffective() bool {
	if o == nil || IsNil(o.Effective) {
		var ret bool
		return ret
	}
	return *o.Effective
}

// GetEffectiveOk returns a tuple with the Effective field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResCancelPenaltyType) GetEffectiveOk() (*bool, bool) {
	if o == nil || IsNil(o.Effective) {
		return nil, false
	}
	return o.Effective, true
}

// HasEffective returns a boolean if a field has been set.
func (o *ResCancelPenaltyType) HasEffective() bool {
	if o != nil && !IsNil(o.Effective) {
		return true
	}

	return false
}

// SetEffective gets a reference to the given bool and assigns it to the Effective field.
func (o *ResCancelPenaltyType) SetEffective(v bool) {
	o.Effective = &v
}

// GetFormattedRule returns the FormattedRule field value if set, zero value otherwise.
func (o *ResCancelPenaltyType) GetFormattedRule() string {
	if o == nil || IsNil(o.FormattedRule) {
		var ret string
		return ret
	}
	return *o.FormattedRule
}

// GetFormattedRuleOk returns a tuple with the FormattedRule field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResCancelPenaltyType) GetFormattedRuleOk() (*string, bool) {
	if o == nil || IsNil(o.FormattedRule) {
		return nil, false
	}
	return o.FormattedRule, true
}

// HasFormattedRule returns a boolean if a field has been set.
func (o *ResCancelPenaltyType) HasFormattedRule() bool {
	if o != nil && !IsNil(o.FormattedRule) {
		return true
	}

	return false
}

// SetFormattedRule gets a reference to the given string and assigns it to the FormattedRule field.
func (o *ResCancelPenaltyType) SetFormattedRule(v string) {
	o.FormattedRule = &v
}

// GetManual returns the Manual field value if set, zero value otherwise.
func (o *ResCancelPenaltyType) GetManual() bool {
	if o == nil || IsNil(o.Manual) {
		var ret bool
		return ret
	}
	return *o.Manual
}

// GetManualOk returns a tuple with the Manual field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResCancelPenaltyType) GetManualOk() (*bool, bool) {
	if o == nil || IsNil(o.Manual) {
		return nil, false
	}
	return o.Manual, true
}

// HasManual returns a boolean if a field has been set.
func (o *ResCancelPenaltyType) HasManual() bool {
	if o != nil && !IsNil(o.Manual) {
		return true
	}

	return false
}

// SetManual gets a reference to the given bool and assigns it to the Manual field.
func (o *ResCancelPenaltyType) SetManual(v bool) {
	o.Manual = &v
}

// GetNonRefundable returns the NonRefundable field value if set, zero value otherwise.
func (o *ResCancelPenaltyType) GetNonRefundable() bool {
	if o == nil || IsNil(o.NonRefundable) {
		var ret bool
		return ret
	}
	return *o.NonRefundable
}

// GetNonRefundableOk returns a tuple with the NonRefundable field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResCancelPenaltyType) GetNonRefundableOk() (*bool, bool) {
	if o == nil || IsNil(o.NonRefundable) {
		return nil, false
	}
	return o.NonRefundable, true
}

// HasNonRefundable returns a boolean if a field has been set.
func (o *ResCancelPenaltyType) HasNonRefundable() bool {
	if o != nil && !IsNil(o.NonRefundable) {
		return true
	}

	return false
}

// SetNonRefundable gets a reference to the given bool and assigns it to the NonRefundable field.
func (o *ResCancelPenaltyType) SetNonRefundable(v bool) {
	o.NonRefundable = &v
}

// GetOffsetUnit returns the OffsetUnit field value if set, zero value otherwise.
func (o *ResCancelPenaltyType) GetOffsetUnit() OffsetUnitType {
	if o == nil || IsNil(o.OffsetUnit) {
		var ret OffsetUnitType
		return ret
	}
	return *o.OffsetUnit
}

// GetOffsetUnitOk returns a tuple with the OffsetUnit field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResCancelPenaltyType) GetOffsetUnitOk() (*OffsetUnitType, bool) {
	if o == nil || IsNil(o.OffsetUnit) {
		return nil, false
	}
	return o.OffsetUnit, true
}

// HasOffsetUnit returns a boolean if a field has been set.
func (o *ResCancelPenaltyType) HasOffsetUnit() bool {
	if o != nil && !IsNil(o.OffsetUnit) {
		return true
	}

	return false
}

// SetOffsetUnit gets a reference to the given OffsetUnitType and assigns it to the OffsetUnit field.
func (o *ResCancelPenaltyType) SetOffsetUnit(v OffsetUnitType) {
	o.OffsetUnit = &v
}

// GetPenaltyDescription returns the PenaltyDescription field value if set, zero value otherwise.
func (o *ResCancelPenaltyType) GetPenaltyDescription() string {
	if o == nil || IsNil(o.PenaltyDescription) {
		var ret string
		return ret
	}
	return *o.PenaltyDescription
}

// GetPenaltyDescriptionOk returns a tuple with the PenaltyDescription field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResCancelPenaltyType) GetPenaltyDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.PenaltyDescription) {
		return nil, false
	}
	return o.PenaltyDescription, true
}

// HasPenaltyDescription returns a boolean if a field has been set.
func (o *ResCancelPenaltyType) HasPenaltyDescription() bool {
	if o != nil && !IsNil(o.PenaltyDescription) {
		return true
	}

	return false
}

// SetPenaltyDescription gets a reference to the given string and assigns it to the PenaltyDescription field.
func (o *ResCancelPenaltyType) SetPenaltyDescription(v string) {
	o.PenaltyDescription = &v
}

// GetPolicyCode returns the PolicyCode field value if set, zero value otherwise.
func (o *ResCancelPenaltyType) GetPolicyCode() string {
	if o == nil || IsNil(o.PolicyCode) {
		var ret string
		return ret
	}
	return *o.PolicyCode
}

// GetPolicyCodeOk returns a tuple with the PolicyCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResCancelPenaltyType) GetPolicyCodeOk() (*string, bool) {
	if o == nil || IsNil(o.PolicyCode) {
		return nil, false
	}
	return o.PolicyCode, true
}

// HasPolicyCode returns a boolean if a field has been set.
func (o *ResCancelPenaltyType) HasPolicyCode() bool {
	if o != nil && !IsNil(o.PolicyCode) {
		return true
	}

	return false
}

// SetPolicyCode gets a reference to the given string and assigns it to the PolicyCode field.
func (o *ResCancelPenaltyType) SetPolicyCode(v string) {
	o.PolicyCode = &v
}

func (o ResCancelPenaltyType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ResCancelPenaltyType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AmountPercent) {
		toSerialize["amountPercent"] = o.AmountPercent
	}
	if !IsNil(o.Deadline) {
		toSerialize["deadline"] = o.Deadline
	}
	if !IsNil(o.Effective) {
		toSerialize["effective"] = o.Effective
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

type NullableResCancelPenaltyType struct {
	value *ResCancelPenaltyType
	isSet bool
}

func (v NullableResCancelPenaltyType) Get() *ResCancelPenaltyType {
	return v.value
}

func (v *NullableResCancelPenaltyType) Set(val *ResCancelPenaltyType) {
	v.value = val
	v.isSet = true
}

func (v NullableResCancelPenaltyType) IsSet() bool {
	return v.isSet
}

func (v *NullableResCancelPenaltyType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableResCancelPenaltyType(val *ResCancelPenaltyType) *NullableResCancelPenaltyType {
	return &NullableResCancelPenaltyType{value: val, isSet: true}
}

func (v NullableResCancelPenaltyType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableResCancelPenaltyType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


