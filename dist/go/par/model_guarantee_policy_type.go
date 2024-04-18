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

// checks if the GuaranteePolicyType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &GuaranteePolicyType{}

// GuaranteePolicyType Specifies Guarantee Code attributes.
type GuaranteePolicyType struct {
	CancelPenalty *GuaranteePolicyTypeCancelPenalty `json:"cancelPenalty,omitempty"`
	// If true indicates this can be the default guarantee type to be selected for a reservation.
	DefaultGuarantee *bool `json:"defaultGuarantee,omitempty"`
	DepositPolicy *GuaranteePolicyTypeDepositPolicy `json:"depositPolicy,omitempty"`
	// Description of the Guarantee Code.
	Description *string `json:"description,omitempty"`
	// Code assigned to the Guarantee.
	GuaranteeCode *string `json:"guaranteeCode,omitempty"`
	// Represents the late arrival time.
	LateArrival *string `json:"lateArrival,omitempty"`
	// If true indicates this Guarantee Code is used only to hold the inventory during reservation process.
	OnHold *bool `json:"onHold,omitempty"`
	// Display Order sequence.
	OrderSequence *float32 `json:"orderSequence,omitempty"`
	// Payment card code like AX,VI etc.
	PaymentTypes []string `json:"paymentTypes,omitempty"`
	PolicyRequirements *GuaranteeRequirementsType `json:"policyRequirements,omitempty"`
	// If true indicates inventory will be reserved/deducted when reservation uses this Guarantee Code.
	ReserveInventory *bool `json:"reserveInventory,omitempty"`
	ShortDescription *TranslationTextType80 `json:"shortDescription,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewGuaranteePolicyType instantiates a new GuaranteePolicyType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewGuaranteePolicyType() *GuaranteePolicyType {
	this := GuaranteePolicyType{}
	return &this
}

// NewGuaranteePolicyTypeWithDefaults instantiates a new GuaranteePolicyType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewGuaranteePolicyTypeWithDefaults() *GuaranteePolicyType {
	this := GuaranteePolicyType{}
	return &this
}

// GetCancelPenalty returns the CancelPenalty field value if set, zero value otherwise.
func (o *GuaranteePolicyType) GetCancelPenalty() GuaranteePolicyTypeCancelPenalty {
	if o == nil || IsNil(o.CancelPenalty) {
		var ret GuaranteePolicyTypeCancelPenalty
		return ret
	}
	return *o.CancelPenalty
}

// GetCancelPenaltyOk returns a tuple with the CancelPenalty field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuaranteePolicyType) GetCancelPenaltyOk() (*GuaranteePolicyTypeCancelPenalty, bool) {
	if o == nil || IsNil(o.CancelPenalty) {
		return nil, false
	}
	return o.CancelPenalty, true
}

// HasCancelPenalty returns a boolean if a field has been set.
func (o *GuaranteePolicyType) HasCancelPenalty() bool {
	if o != nil && !IsNil(o.CancelPenalty) {
		return true
	}

	return false
}

// SetCancelPenalty gets a reference to the given GuaranteePolicyTypeCancelPenalty and assigns it to the CancelPenalty field.
func (o *GuaranteePolicyType) SetCancelPenalty(v GuaranteePolicyTypeCancelPenalty) {
	o.CancelPenalty = &v
}

// GetDefaultGuarantee returns the DefaultGuarantee field value if set, zero value otherwise.
func (o *GuaranteePolicyType) GetDefaultGuarantee() bool {
	if o == nil || IsNil(o.DefaultGuarantee) {
		var ret bool
		return ret
	}
	return *o.DefaultGuarantee
}

// GetDefaultGuaranteeOk returns a tuple with the DefaultGuarantee field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuaranteePolicyType) GetDefaultGuaranteeOk() (*bool, bool) {
	if o == nil || IsNil(o.DefaultGuarantee) {
		return nil, false
	}
	return o.DefaultGuarantee, true
}

// HasDefaultGuarantee returns a boolean if a field has been set.
func (o *GuaranteePolicyType) HasDefaultGuarantee() bool {
	if o != nil && !IsNil(o.DefaultGuarantee) {
		return true
	}

	return false
}

// SetDefaultGuarantee gets a reference to the given bool and assigns it to the DefaultGuarantee field.
func (o *GuaranteePolicyType) SetDefaultGuarantee(v bool) {
	o.DefaultGuarantee = &v
}

// GetDepositPolicy returns the DepositPolicy field value if set, zero value otherwise.
func (o *GuaranteePolicyType) GetDepositPolicy() GuaranteePolicyTypeDepositPolicy {
	if o == nil || IsNil(o.DepositPolicy) {
		var ret GuaranteePolicyTypeDepositPolicy
		return ret
	}
	return *o.DepositPolicy
}

// GetDepositPolicyOk returns a tuple with the DepositPolicy field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuaranteePolicyType) GetDepositPolicyOk() (*GuaranteePolicyTypeDepositPolicy, bool) {
	if o == nil || IsNil(o.DepositPolicy) {
		return nil, false
	}
	return o.DepositPolicy, true
}

// HasDepositPolicy returns a boolean if a field has been set.
func (o *GuaranteePolicyType) HasDepositPolicy() bool {
	if o != nil && !IsNil(o.DepositPolicy) {
		return true
	}

	return false
}

// SetDepositPolicy gets a reference to the given GuaranteePolicyTypeDepositPolicy and assigns it to the DepositPolicy field.
func (o *GuaranteePolicyType) SetDepositPolicy(v GuaranteePolicyTypeDepositPolicy) {
	o.DepositPolicy = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *GuaranteePolicyType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuaranteePolicyType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *GuaranteePolicyType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *GuaranteePolicyType) SetDescription(v string) {
	o.Description = &v
}

// GetGuaranteeCode returns the GuaranteeCode field value if set, zero value otherwise.
func (o *GuaranteePolicyType) GetGuaranteeCode() string {
	if o == nil || IsNil(o.GuaranteeCode) {
		var ret string
		return ret
	}
	return *o.GuaranteeCode
}

// GetGuaranteeCodeOk returns a tuple with the GuaranteeCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuaranteePolicyType) GetGuaranteeCodeOk() (*string, bool) {
	if o == nil || IsNil(o.GuaranteeCode) {
		return nil, false
	}
	return o.GuaranteeCode, true
}

// HasGuaranteeCode returns a boolean if a field has been set.
func (o *GuaranteePolicyType) HasGuaranteeCode() bool {
	if o != nil && !IsNil(o.GuaranteeCode) {
		return true
	}

	return false
}

// SetGuaranteeCode gets a reference to the given string and assigns it to the GuaranteeCode field.
func (o *GuaranteePolicyType) SetGuaranteeCode(v string) {
	o.GuaranteeCode = &v
}

// GetLateArrival returns the LateArrival field value if set, zero value otherwise.
func (o *GuaranteePolicyType) GetLateArrival() string {
	if o == nil || IsNil(o.LateArrival) {
		var ret string
		return ret
	}
	return *o.LateArrival
}

// GetLateArrivalOk returns a tuple with the LateArrival field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuaranteePolicyType) GetLateArrivalOk() (*string, bool) {
	if o == nil || IsNil(o.LateArrival) {
		return nil, false
	}
	return o.LateArrival, true
}

// HasLateArrival returns a boolean if a field has been set.
func (o *GuaranteePolicyType) HasLateArrival() bool {
	if o != nil && !IsNil(o.LateArrival) {
		return true
	}

	return false
}

// SetLateArrival gets a reference to the given string and assigns it to the LateArrival field.
func (o *GuaranteePolicyType) SetLateArrival(v string) {
	o.LateArrival = &v
}

// GetOnHold returns the OnHold field value if set, zero value otherwise.
func (o *GuaranteePolicyType) GetOnHold() bool {
	if o == nil || IsNil(o.OnHold) {
		var ret bool
		return ret
	}
	return *o.OnHold
}

// GetOnHoldOk returns a tuple with the OnHold field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuaranteePolicyType) GetOnHoldOk() (*bool, bool) {
	if o == nil || IsNil(o.OnHold) {
		return nil, false
	}
	return o.OnHold, true
}

// HasOnHold returns a boolean if a field has been set.
func (o *GuaranteePolicyType) HasOnHold() bool {
	if o != nil && !IsNil(o.OnHold) {
		return true
	}

	return false
}

// SetOnHold gets a reference to the given bool and assigns it to the OnHold field.
func (o *GuaranteePolicyType) SetOnHold(v bool) {
	o.OnHold = &v
}

// GetOrderSequence returns the OrderSequence field value if set, zero value otherwise.
func (o *GuaranteePolicyType) GetOrderSequence() float32 {
	if o == nil || IsNil(o.OrderSequence) {
		var ret float32
		return ret
	}
	return *o.OrderSequence
}

// GetOrderSequenceOk returns a tuple with the OrderSequence field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuaranteePolicyType) GetOrderSequenceOk() (*float32, bool) {
	if o == nil || IsNil(o.OrderSequence) {
		return nil, false
	}
	return o.OrderSequence, true
}

// HasOrderSequence returns a boolean if a field has been set.
func (o *GuaranteePolicyType) HasOrderSequence() bool {
	if o != nil && !IsNil(o.OrderSequence) {
		return true
	}

	return false
}

// SetOrderSequence gets a reference to the given float32 and assigns it to the OrderSequence field.
func (o *GuaranteePolicyType) SetOrderSequence(v float32) {
	o.OrderSequence = &v
}

// GetPaymentTypes returns the PaymentTypes field value if set, zero value otherwise.
func (o *GuaranteePolicyType) GetPaymentTypes() []string {
	if o == nil || IsNil(o.PaymentTypes) {
		var ret []string
		return ret
	}
	return o.PaymentTypes
}

// GetPaymentTypesOk returns a tuple with the PaymentTypes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuaranteePolicyType) GetPaymentTypesOk() ([]string, bool) {
	if o == nil || IsNil(o.PaymentTypes) {
		return nil, false
	}
	return o.PaymentTypes, true
}

// HasPaymentTypes returns a boolean if a field has been set.
func (o *GuaranteePolicyType) HasPaymentTypes() bool {
	if o != nil && !IsNil(o.PaymentTypes) {
		return true
	}

	return false
}

// SetPaymentTypes gets a reference to the given []string and assigns it to the PaymentTypes field.
func (o *GuaranteePolicyType) SetPaymentTypes(v []string) {
	o.PaymentTypes = v
}

// GetPolicyRequirements returns the PolicyRequirements field value if set, zero value otherwise.
func (o *GuaranteePolicyType) GetPolicyRequirements() GuaranteeRequirementsType {
	if o == nil || IsNil(o.PolicyRequirements) {
		var ret GuaranteeRequirementsType
		return ret
	}
	return *o.PolicyRequirements
}

// GetPolicyRequirementsOk returns a tuple with the PolicyRequirements field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuaranteePolicyType) GetPolicyRequirementsOk() (*GuaranteeRequirementsType, bool) {
	if o == nil || IsNil(o.PolicyRequirements) {
		return nil, false
	}
	return o.PolicyRequirements, true
}

// HasPolicyRequirements returns a boolean if a field has been set.
func (o *GuaranteePolicyType) HasPolicyRequirements() bool {
	if o != nil && !IsNil(o.PolicyRequirements) {
		return true
	}

	return false
}

// SetPolicyRequirements gets a reference to the given GuaranteeRequirementsType and assigns it to the PolicyRequirements field.
func (o *GuaranteePolicyType) SetPolicyRequirements(v GuaranteeRequirementsType) {
	o.PolicyRequirements = &v
}

// GetReserveInventory returns the ReserveInventory field value if set, zero value otherwise.
func (o *GuaranteePolicyType) GetReserveInventory() bool {
	if o == nil || IsNil(o.ReserveInventory) {
		var ret bool
		return ret
	}
	return *o.ReserveInventory
}

// GetReserveInventoryOk returns a tuple with the ReserveInventory field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuaranteePolicyType) GetReserveInventoryOk() (*bool, bool) {
	if o == nil || IsNil(o.ReserveInventory) {
		return nil, false
	}
	return o.ReserveInventory, true
}

// HasReserveInventory returns a boolean if a field has been set.
func (o *GuaranteePolicyType) HasReserveInventory() bool {
	if o != nil && !IsNil(o.ReserveInventory) {
		return true
	}

	return false
}

// SetReserveInventory gets a reference to the given bool and assigns it to the ReserveInventory field.
func (o *GuaranteePolicyType) SetReserveInventory(v bool) {
	o.ReserveInventory = &v
}

// GetShortDescription returns the ShortDescription field value if set, zero value otherwise.
func (o *GuaranteePolicyType) GetShortDescription() TranslationTextType80 {
	if o == nil || IsNil(o.ShortDescription) {
		var ret TranslationTextType80
		return ret
	}
	return *o.ShortDescription
}

// GetShortDescriptionOk returns a tuple with the ShortDescription field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuaranteePolicyType) GetShortDescriptionOk() (*TranslationTextType80, bool) {
	if o == nil || IsNil(o.ShortDescription) {
		return nil, false
	}
	return o.ShortDescription, true
}

// HasShortDescription returns a boolean if a field has been set.
func (o *GuaranteePolicyType) HasShortDescription() bool {
	if o != nil && !IsNil(o.ShortDescription) {
		return true
	}

	return false
}

// SetShortDescription gets a reference to the given TranslationTextType80 and assigns it to the ShortDescription field.
func (o *GuaranteePolicyType) SetShortDescription(v TranslationTextType80) {
	o.ShortDescription = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *GuaranteePolicyType) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuaranteePolicyType) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *GuaranteePolicyType) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *GuaranteePolicyType) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o GuaranteePolicyType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o GuaranteePolicyType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CancelPenalty) {
		toSerialize["cancelPenalty"] = o.CancelPenalty
	}
	if !IsNil(o.DefaultGuarantee) {
		toSerialize["defaultGuarantee"] = o.DefaultGuarantee
	}
	if !IsNil(o.DepositPolicy) {
		toSerialize["depositPolicy"] = o.DepositPolicy
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.GuaranteeCode) {
		toSerialize["guaranteeCode"] = o.GuaranteeCode
	}
	if !IsNil(o.LateArrival) {
		toSerialize["lateArrival"] = o.LateArrival
	}
	if !IsNil(o.OnHold) {
		toSerialize["onHold"] = o.OnHold
	}
	if !IsNil(o.OrderSequence) {
		toSerialize["orderSequence"] = o.OrderSequence
	}
	if !IsNil(o.PaymentTypes) {
		toSerialize["paymentTypes"] = o.PaymentTypes
	}
	if !IsNil(o.PolicyRequirements) {
		toSerialize["policyRequirements"] = o.PolicyRequirements
	}
	if !IsNil(o.ReserveInventory) {
		toSerialize["reserveInventory"] = o.ReserveInventory
	}
	if !IsNil(o.ShortDescription) {
		toSerialize["shortDescription"] = o.ShortDescription
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableGuaranteePolicyType struct {
	value *GuaranteePolicyType
	isSet bool
}

func (v NullableGuaranteePolicyType) Get() *GuaranteePolicyType {
	return v.value
}

func (v *NullableGuaranteePolicyType) Set(val *GuaranteePolicyType) {
	v.value = val
	v.isSet = true
}

func (v NullableGuaranteePolicyType) IsSet() bool {
	return v.isSet
}

func (v *NullableGuaranteePolicyType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableGuaranteePolicyType(val *GuaranteePolicyType) *NullableGuaranteePolicyType {
	return &NullableGuaranteePolicyType{value: val, isSet: true}
}

func (v NullableGuaranteePolicyType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableGuaranteePolicyType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

