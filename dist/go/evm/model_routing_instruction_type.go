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

// checks if the RoutingInstructionType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RoutingInstructionType{}

// RoutingInstructionType Routing limit can be one of the three: Credit Limit, Percetage Limit, Covers Limit
type RoutingInstructionType struct {
	// Set of Billing Instruction codes.
	BillingInstructions []BillingInstructionType `json:"billingInstructions,omitempty"`
	// Number of covers for this routing instruction.
	Covers *float32 `json:"covers,omitempty"`
	// Allowable credit amount for this routing instruction. Null value means no limit, 0 equals zero.
	CreditLimit *float32 `json:"creditLimit,omitempty"`
	Duration *RoutingInstructionTypeDuration `json:"duration,omitempty"`
	// Amount of Credit used for this routing instruction.
	LimitUsed *float32 `json:"limitUsed,omitempty"`
	// The routing limit percentage allowed for this routing instruction.
	PercentageLimit *float32 `json:"percentageLimit,omitempty"`
	RoutingLinkId *UniqueIDType `json:"routingLinkId,omitempty"`
	// List of Transaction codes info.
	TransactionCodes []TrxInfoType `json:"transactionCodes,omitempty"`
}

// NewRoutingInstructionType instantiates a new RoutingInstructionType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRoutingInstructionType() *RoutingInstructionType {
	this := RoutingInstructionType{}
	return &this
}

// NewRoutingInstructionTypeWithDefaults instantiates a new RoutingInstructionType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRoutingInstructionTypeWithDefaults() *RoutingInstructionType {
	this := RoutingInstructionType{}
	return &this
}

// GetBillingInstructions returns the BillingInstructions field value if set, zero value otherwise.
func (o *RoutingInstructionType) GetBillingInstructions() []BillingInstructionType {
	if o == nil || IsNil(o.BillingInstructions) {
		var ret []BillingInstructionType
		return ret
	}
	return o.BillingInstructions
}

// GetBillingInstructionsOk returns a tuple with the BillingInstructions field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoutingInstructionType) GetBillingInstructionsOk() ([]BillingInstructionType, bool) {
	if o == nil || IsNil(o.BillingInstructions) {
		return nil, false
	}
	return o.BillingInstructions, true
}

// HasBillingInstructions returns a boolean if a field has been set.
func (o *RoutingInstructionType) HasBillingInstructions() bool {
	if o != nil && !IsNil(o.BillingInstructions) {
		return true
	}

	return false
}

// SetBillingInstructions gets a reference to the given []BillingInstructionType and assigns it to the BillingInstructions field.
func (o *RoutingInstructionType) SetBillingInstructions(v []BillingInstructionType) {
	o.BillingInstructions = v
}

// GetCovers returns the Covers field value if set, zero value otherwise.
func (o *RoutingInstructionType) GetCovers() float32 {
	if o == nil || IsNil(o.Covers) {
		var ret float32
		return ret
	}
	return *o.Covers
}

// GetCoversOk returns a tuple with the Covers field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoutingInstructionType) GetCoversOk() (*float32, bool) {
	if o == nil || IsNil(o.Covers) {
		return nil, false
	}
	return o.Covers, true
}

// HasCovers returns a boolean if a field has been set.
func (o *RoutingInstructionType) HasCovers() bool {
	if o != nil && !IsNil(o.Covers) {
		return true
	}

	return false
}

// SetCovers gets a reference to the given float32 and assigns it to the Covers field.
func (o *RoutingInstructionType) SetCovers(v float32) {
	o.Covers = &v
}

// GetCreditLimit returns the CreditLimit field value if set, zero value otherwise.
func (o *RoutingInstructionType) GetCreditLimit() float32 {
	if o == nil || IsNil(o.CreditLimit) {
		var ret float32
		return ret
	}
	return *o.CreditLimit
}

// GetCreditLimitOk returns a tuple with the CreditLimit field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoutingInstructionType) GetCreditLimitOk() (*float32, bool) {
	if o == nil || IsNil(o.CreditLimit) {
		return nil, false
	}
	return o.CreditLimit, true
}

// HasCreditLimit returns a boolean if a field has been set.
func (o *RoutingInstructionType) HasCreditLimit() bool {
	if o != nil && !IsNil(o.CreditLimit) {
		return true
	}

	return false
}

// SetCreditLimit gets a reference to the given float32 and assigns it to the CreditLimit field.
func (o *RoutingInstructionType) SetCreditLimit(v float32) {
	o.CreditLimit = &v
}

// GetDuration returns the Duration field value if set, zero value otherwise.
func (o *RoutingInstructionType) GetDuration() RoutingInstructionTypeDuration {
	if o == nil || IsNil(o.Duration) {
		var ret RoutingInstructionTypeDuration
		return ret
	}
	return *o.Duration
}

// GetDurationOk returns a tuple with the Duration field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoutingInstructionType) GetDurationOk() (*RoutingInstructionTypeDuration, bool) {
	if o == nil || IsNil(o.Duration) {
		return nil, false
	}
	return o.Duration, true
}

// HasDuration returns a boolean if a field has been set.
func (o *RoutingInstructionType) HasDuration() bool {
	if o != nil && !IsNil(o.Duration) {
		return true
	}

	return false
}

// SetDuration gets a reference to the given RoutingInstructionTypeDuration and assigns it to the Duration field.
func (o *RoutingInstructionType) SetDuration(v RoutingInstructionTypeDuration) {
	o.Duration = &v
}

// GetLimitUsed returns the LimitUsed field value if set, zero value otherwise.
func (o *RoutingInstructionType) GetLimitUsed() float32 {
	if o == nil || IsNil(o.LimitUsed) {
		var ret float32
		return ret
	}
	return *o.LimitUsed
}

// GetLimitUsedOk returns a tuple with the LimitUsed field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoutingInstructionType) GetLimitUsedOk() (*float32, bool) {
	if o == nil || IsNil(o.LimitUsed) {
		return nil, false
	}
	return o.LimitUsed, true
}

// HasLimitUsed returns a boolean if a field has been set.
func (o *RoutingInstructionType) HasLimitUsed() bool {
	if o != nil && !IsNil(o.LimitUsed) {
		return true
	}

	return false
}

// SetLimitUsed gets a reference to the given float32 and assigns it to the LimitUsed field.
func (o *RoutingInstructionType) SetLimitUsed(v float32) {
	o.LimitUsed = &v
}

// GetPercentageLimit returns the PercentageLimit field value if set, zero value otherwise.
func (o *RoutingInstructionType) GetPercentageLimit() float32 {
	if o == nil || IsNil(o.PercentageLimit) {
		var ret float32
		return ret
	}
	return *o.PercentageLimit
}

// GetPercentageLimitOk returns a tuple with the PercentageLimit field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoutingInstructionType) GetPercentageLimitOk() (*float32, bool) {
	if o == nil || IsNil(o.PercentageLimit) {
		return nil, false
	}
	return o.PercentageLimit, true
}

// HasPercentageLimit returns a boolean if a field has been set.
func (o *RoutingInstructionType) HasPercentageLimit() bool {
	if o != nil && !IsNil(o.PercentageLimit) {
		return true
	}

	return false
}

// SetPercentageLimit gets a reference to the given float32 and assigns it to the PercentageLimit field.
func (o *RoutingInstructionType) SetPercentageLimit(v float32) {
	o.PercentageLimit = &v
}

// GetRoutingLinkId returns the RoutingLinkId field value if set, zero value otherwise.
func (o *RoutingInstructionType) GetRoutingLinkId() UniqueIDType {
	if o == nil || IsNil(o.RoutingLinkId) {
		var ret UniqueIDType
		return ret
	}
	return *o.RoutingLinkId
}

// GetRoutingLinkIdOk returns a tuple with the RoutingLinkId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoutingInstructionType) GetRoutingLinkIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.RoutingLinkId) {
		return nil, false
	}
	return o.RoutingLinkId, true
}

// HasRoutingLinkId returns a boolean if a field has been set.
func (o *RoutingInstructionType) HasRoutingLinkId() bool {
	if o != nil && !IsNil(o.RoutingLinkId) {
		return true
	}

	return false
}

// SetRoutingLinkId gets a reference to the given UniqueIDType and assigns it to the RoutingLinkId field.
func (o *RoutingInstructionType) SetRoutingLinkId(v UniqueIDType) {
	o.RoutingLinkId = &v
}

// GetTransactionCodes returns the TransactionCodes field value if set, zero value otherwise.
func (o *RoutingInstructionType) GetTransactionCodes() []TrxInfoType {
	if o == nil || IsNil(o.TransactionCodes) {
		var ret []TrxInfoType
		return ret
	}
	return o.TransactionCodes
}

// GetTransactionCodesOk returns a tuple with the TransactionCodes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoutingInstructionType) GetTransactionCodesOk() ([]TrxInfoType, bool) {
	if o == nil || IsNil(o.TransactionCodes) {
		return nil, false
	}
	return o.TransactionCodes, true
}

// HasTransactionCodes returns a boolean if a field has been set.
func (o *RoutingInstructionType) HasTransactionCodes() bool {
	if o != nil && !IsNil(o.TransactionCodes) {
		return true
	}

	return false
}

// SetTransactionCodes gets a reference to the given []TrxInfoType and assigns it to the TransactionCodes field.
func (o *RoutingInstructionType) SetTransactionCodes(v []TrxInfoType) {
	o.TransactionCodes = v
}

func (o RoutingInstructionType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RoutingInstructionType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BillingInstructions) {
		toSerialize["billingInstructions"] = o.BillingInstructions
	}
	if !IsNil(o.Covers) {
		toSerialize["covers"] = o.Covers
	}
	if !IsNil(o.CreditLimit) {
		toSerialize["creditLimit"] = o.CreditLimit
	}
	if !IsNil(o.Duration) {
		toSerialize["duration"] = o.Duration
	}
	if !IsNil(o.LimitUsed) {
		toSerialize["limitUsed"] = o.LimitUsed
	}
	if !IsNil(o.PercentageLimit) {
		toSerialize["percentageLimit"] = o.PercentageLimit
	}
	if !IsNil(o.RoutingLinkId) {
		toSerialize["routingLinkId"] = o.RoutingLinkId
	}
	if !IsNil(o.TransactionCodes) {
		toSerialize["transactionCodes"] = o.TransactionCodes
	}
	return toSerialize, nil
}

type NullableRoutingInstructionType struct {
	value *RoutingInstructionType
	isSet bool
}

func (v NullableRoutingInstructionType) Get() *RoutingInstructionType {
	return v.value
}

func (v *NullableRoutingInstructionType) Set(val *RoutingInstructionType) {
	v.value = val
	v.isSet = true
}

func (v NullableRoutingInstructionType) IsSet() bool {
	return v.isSet
}

func (v *NullableRoutingInstructionType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoutingInstructionType(val *RoutingInstructionType) *NullableRoutingInstructionType {
	return &NullableRoutingInstructionType{value: val, isSet: true}
}

func (v NullableRoutingInstructionType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoutingInstructionType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


