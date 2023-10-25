/*
OPERA Cloud Reservation API

APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsv

import (
	"encoding/json"
)

// checks if the GuaranteePolicyTypeCancelPenalty type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &GuaranteePolicyTypeCancelPenalty{}

// GuaranteePolicyTypeCancelPenalty The CancelPenalty class defines the cancellation policy of the hotel facility.
type GuaranteePolicyTypeCancelPenalty struct {
	AmountPercent *PolicyAmountPercentType `json:"amountPercent,omitempty"`
	Deadline *PolicyDeadlineType `json:"deadline,omitempty"`
	// Indicator if Cancellation Penalty is currently applicable or not.
	Effective *bool `json:"effective,omitempty"`
	// Message.
	EstimatedAmount *float32 `json:"estimatedAmount,omitempty"`
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

// NewGuaranteePolicyTypeCancelPenalty instantiates a new GuaranteePolicyTypeCancelPenalty object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewGuaranteePolicyTypeCancelPenalty() *GuaranteePolicyTypeCancelPenalty {
	this := GuaranteePolicyTypeCancelPenalty{}
	return &this
}

// NewGuaranteePolicyTypeCancelPenaltyWithDefaults instantiates a new GuaranteePolicyTypeCancelPenalty object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewGuaranteePolicyTypeCancelPenaltyWithDefaults() *GuaranteePolicyTypeCancelPenalty {
	this := GuaranteePolicyTypeCancelPenalty{}
	return &this
}

// GetAmountPercent returns the AmountPercent field value if set, zero value otherwise.
func (o *GuaranteePolicyTypeCancelPenalty) GetAmountPercent() PolicyAmountPercentType {
	if o == nil || IsNil(o.AmountPercent) {
		var ret PolicyAmountPercentType
		return ret
	}
	return *o.AmountPercent
}

// GetAmountPercentOk returns a tuple with the AmountPercent field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuaranteePolicyTypeCancelPenalty) GetAmountPercentOk() (*PolicyAmountPercentType, bool) {
	if o == nil || IsNil(o.AmountPercent) {
		return nil, false
	}
	return o.AmountPercent, true
}

// HasAmountPercent returns a boolean if a field has been set.
func (o *GuaranteePolicyTypeCancelPenalty) HasAmountPercent() bool {
	if o != nil && !IsNil(o.AmountPercent) {
		return true
	}

	return false
}

// SetAmountPercent gets a reference to the given PolicyAmountPercentType and assigns it to the AmountPercent field.
func (o *GuaranteePolicyTypeCancelPenalty) SetAmountPercent(v PolicyAmountPercentType) {
	o.AmountPercent = &v
}

// GetDeadline returns the Deadline field value if set, zero value otherwise.
func (o *GuaranteePolicyTypeCancelPenalty) GetDeadline() PolicyDeadlineType {
	if o == nil || IsNil(o.Deadline) {
		var ret PolicyDeadlineType
		return ret
	}
	return *o.Deadline
}

// GetDeadlineOk returns a tuple with the Deadline field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuaranteePolicyTypeCancelPenalty) GetDeadlineOk() (*PolicyDeadlineType, bool) {
	if o == nil || IsNil(o.Deadline) {
		return nil, false
	}
	return o.Deadline, true
}

// HasDeadline returns a boolean if a field has been set.
func (o *GuaranteePolicyTypeCancelPenalty) HasDeadline() bool {
	if o != nil && !IsNil(o.Deadline) {
		return true
	}

	return false
}

// SetDeadline gets a reference to the given PolicyDeadlineType and assigns it to the Deadline field.
func (o *GuaranteePolicyTypeCancelPenalty) SetDeadline(v PolicyDeadlineType) {
	o.Deadline = &v
}

// GetEffective returns the Effective field value if set, zero value otherwise.
func (o *GuaranteePolicyTypeCancelPenalty) GetEffective() bool {
	if o == nil || IsNil(o.Effective) {
		var ret bool
		return ret
	}
	return *o.Effective
}

// GetEffectiveOk returns a tuple with the Effective field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuaranteePolicyTypeCancelPenalty) GetEffectiveOk() (*bool, bool) {
	if o == nil || IsNil(o.Effective) {
		return nil, false
	}
	return o.Effective, true
}

// HasEffective returns a boolean if a field has been set.
func (o *GuaranteePolicyTypeCancelPenalty) HasEffective() bool {
	if o != nil && !IsNil(o.Effective) {
		return true
	}

	return false
}

// SetEffective gets a reference to the given bool and assigns it to the Effective field.
func (o *GuaranteePolicyTypeCancelPenalty) SetEffective(v bool) {
	o.Effective = &v
}

// GetEstimatedAmount returns the EstimatedAmount field value if set, zero value otherwise.
func (o *GuaranteePolicyTypeCancelPenalty) GetEstimatedAmount() float32 {
	if o == nil || IsNil(o.EstimatedAmount) {
		var ret float32
		return ret
	}
	return *o.EstimatedAmount
}

// GetEstimatedAmountOk returns a tuple with the EstimatedAmount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuaranteePolicyTypeCancelPenalty) GetEstimatedAmountOk() (*float32, bool) {
	if o == nil || IsNil(o.EstimatedAmount) {
		return nil, false
	}
	return o.EstimatedAmount, true
}

// HasEstimatedAmount returns a boolean if a field has been set.
func (o *GuaranteePolicyTypeCancelPenalty) HasEstimatedAmount() bool {
	if o != nil && !IsNil(o.EstimatedAmount) {
		return true
	}

	return false
}

// SetEstimatedAmount gets a reference to the given float32 and assigns it to the EstimatedAmount field.
func (o *GuaranteePolicyTypeCancelPenalty) SetEstimatedAmount(v float32) {
	o.EstimatedAmount = &v
}

// GetFormattedRule returns the FormattedRule field value if set, zero value otherwise.
func (o *GuaranteePolicyTypeCancelPenalty) GetFormattedRule() string {
	if o == nil || IsNil(o.FormattedRule) {
		var ret string
		return ret
	}
	return *o.FormattedRule
}

// GetFormattedRuleOk returns a tuple with the FormattedRule field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuaranteePolicyTypeCancelPenalty) GetFormattedRuleOk() (*string, bool) {
	if o == nil || IsNil(o.FormattedRule) {
		return nil, false
	}
	return o.FormattedRule, true
}

// HasFormattedRule returns a boolean if a field has been set.
func (o *GuaranteePolicyTypeCancelPenalty) HasFormattedRule() bool {
	if o != nil && !IsNil(o.FormattedRule) {
		return true
	}

	return false
}

// SetFormattedRule gets a reference to the given string and assigns it to the FormattedRule field.
func (o *GuaranteePolicyTypeCancelPenalty) SetFormattedRule(v string) {
	o.FormattedRule = &v
}

// GetManual returns the Manual field value if set, zero value otherwise.
func (o *GuaranteePolicyTypeCancelPenalty) GetManual() bool {
	if o == nil || IsNil(o.Manual) {
		var ret bool
		return ret
	}
	return *o.Manual
}

// GetManualOk returns a tuple with the Manual field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuaranteePolicyTypeCancelPenalty) GetManualOk() (*bool, bool) {
	if o == nil || IsNil(o.Manual) {
		return nil, false
	}
	return o.Manual, true
}

// HasManual returns a boolean if a field has been set.
func (o *GuaranteePolicyTypeCancelPenalty) HasManual() bool {
	if o != nil && !IsNil(o.Manual) {
		return true
	}

	return false
}

// SetManual gets a reference to the given bool and assigns it to the Manual field.
func (o *GuaranteePolicyTypeCancelPenalty) SetManual(v bool) {
	o.Manual = &v
}

// GetNonRefundable returns the NonRefundable field value if set, zero value otherwise.
func (o *GuaranteePolicyTypeCancelPenalty) GetNonRefundable() bool {
	if o == nil || IsNil(o.NonRefundable) {
		var ret bool
		return ret
	}
	return *o.NonRefundable
}

// GetNonRefundableOk returns a tuple with the NonRefundable field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuaranteePolicyTypeCancelPenalty) GetNonRefundableOk() (*bool, bool) {
	if o == nil || IsNil(o.NonRefundable) {
		return nil, false
	}
	return o.NonRefundable, true
}

// HasNonRefundable returns a boolean if a field has been set.
func (o *GuaranteePolicyTypeCancelPenalty) HasNonRefundable() bool {
	if o != nil && !IsNil(o.NonRefundable) {
		return true
	}

	return false
}

// SetNonRefundable gets a reference to the given bool and assigns it to the NonRefundable field.
func (o *GuaranteePolicyTypeCancelPenalty) SetNonRefundable(v bool) {
	o.NonRefundable = &v
}

// GetOffsetUnit returns the OffsetUnit field value if set, zero value otherwise.
func (o *GuaranteePolicyTypeCancelPenalty) GetOffsetUnit() OffsetUnitType {
	if o == nil || IsNil(o.OffsetUnit) {
		var ret OffsetUnitType
		return ret
	}
	return *o.OffsetUnit
}

// GetOffsetUnitOk returns a tuple with the OffsetUnit field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuaranteePolicyTypeCancelPenalty) GetOffsetUnitOk() (*OffsetUnitType, bool) {
	if o == nil || IsNil(o.OffsetUnit) {
		return nil, false
	}
	return o.OffsetUnit, true
}

// HasOffsetUnit returns a boolean if a field has been set.
func (o *GuaranteePolicyTypeCancelPenalty) HasOffsetUnit() bool {
	if o != nil && !IsNil(o.OffsetUnit) {
		return true
	}

	return false
}

// SetOffsetUnit gets a reference to the given OffsetUnitType and assigns it to the OffsetUnit field.
func (o *GuaranteePolicyTypeCancelPenalty) SetOffsetUnit(v OffsetUnitType) {
	o.OffsetUnit = &v
}

// GetPenaltyDescription returns the PenaltyDescription field value if set, zero value otherwise.
func (o *GuaranteePolicyTypeCancelPenalty) GetPenaltyDescription() string {
	if o == nil || IsNil(o.PenaltyDescription) {
		var ret string
		return ret
	}
	return *o.PenaltyDescription
}

// GetPenaltyDescriptionOk returns a tuple with the PenaltyDescription field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuaranteePolicyTypeCancelPenalty) GetPenaltyDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.PenaltyDescription) {
		return nil, false
	}
	return o.PenaltyDescription, true
}

// HasPenaltyDescription returns a boolean if a field has been set.
func (o *GuaranteePolicyTypeCancelPenalty) HasPenaltyDescription() bool {
	if o != nil && !IsNil(o.PenaltyDescription) {
		return true
	}

	return false
}

// SetPenaltyDescription gets a reference to the given string and assigns it to the PenaltyDescription field.
func (o *GuaranteePolicyTypeCancelPenalty) SetPenaltyDescription(v string) {
	o.PenaltyDescription = &v
}

// GetPolicyCode returns the PolicyCode field value if set, zero value otherwise.
func (o *GuaranteePolicyTypeCancelPenalty) GetPolicyCode() string {
	if o == nil || IsNil(o.PolicyCode) {
		var ret string
		return ret
	}
	return *o.PolicyCode
}

// GetPolicyCodeOk returns a tuple with the PolicyCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuaranteePolicyTypeCancelPenalty) GetPolicyCodeOk() (*string, bool) {
	if o == nil || IsNil(o.PolicyCode) {
		return nil, false
	}
	return o.PolicyCode, true
}

// HasPolicyCode returns a boolean if a field has been set.
func (o *GuaranteePolicyTypeCancelPenalty) HasPolicyCode() bool {
	if o != nil && !IsNil(o.PolicyCode) {
		return true
	}

	return false
}

// SetPolicyCode gets a reference to the given string and assigns it to the PolicyCode field.
func (o *GuaranteePolicyTypeCancelPenalty) SetPolicyCode(v string) {
	o.PolicyCode = &v
}

func (o GuaranteePolicyTypeCancelPenalty) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o GuaranteePolicyTypeCancelPenalty) ToMap() (map[string]interface{}, error) {
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
	if !IsNil(o.EstimatedAmount) {
		toSerialize["estimatedAmount"] = o.EstimatedAmount
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

type NullableGuaranteePolicyTypeCancelPenalty struct {
	value *GuaranteePolicyTypeCancelPenalty
	isSet bool
}

func (v NullableGuaranteePolicyTypeCancelPenalty) Get() *GuaranteePolicyTypeCancelPenalty {
	return v.value
}

func (v *NullableGuaranteePolicyTypeCancelPenalty) Set(val *GuaranteePolicyTypeCancelPenalty) {
	v.value = val
	v.isSet = true
}

func (v NullableGuaranteePolicyTypeCancelPenalty) IsSet() bool {
	return v.isSet
}

func (v *NullableGuaranteePolicyTypeCancelPenalty) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableGuaranteePolicyTypeCancelPenalty(val *GuaranteePolicyTypeCancelPenalty) *NullableGuaranteePolicyTypeCancelPenalty {
	return &NullableGuaranteePolicyTypeCancelPenalty{value: val, isSet: true}
}

func (v NullableGuaranteePolicyTypeCancelPenalty) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableGuaranteePolicyTypeCancelPenalty) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


