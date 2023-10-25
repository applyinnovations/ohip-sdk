/*
OPERA Cloud Front Desk Configuration API

APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fofcfg

import (
	"encoding/json"
)

// checks if the CardUsageRulesType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CardUsageRulesType{}

// CardUsageRulesType Provides information on the various authorization options for a given card type .
type CardUsageRulesType struct {
	// Indicates if this payment method requires an address verification.
	AddressVerification *bool `json:"addressVerification,omitempty"`
	// Indicates if this payment method can be used for Authorization at check in.
	AuthorizationAtCheckin *bool `json:"authorizationAtCheckin,omitempty"`
	// Indicates if this payment method can be used for Authorization during stay.
	AuthorizationDuringStay *bool `json:"authorizationDuringStay,omitempty"`
	// Indicates if this payment method can be used for Authorization reversal can be done.
	AuthorizationReversal *bool `json:"authorizationReversal,omitempty"`
	// Indicates if this payment method can be used for Authorization settlement can happen during checkout.
	AuthorizationSettlementAtCheckout *bool `json:"authorizationSettlementAtCheckout,omitempty"`
	// Indicates if this payment method needs CVV check.
	CVVCheck *bool `json:"cVVCheck,omitempty"`
	// Indicates if this payment method is a chip and pin.
	ChipAndPin *bool `json:"chipAndPin,omitempty"`
	// Indicates if this payment method needs a prompt during check in.
	PromptAtCheckin *bool `json:"promptAtCheckin,omitempty"`
}

// NewCardUsageRulesType instantiates a new CardUsageRulesType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCardUsageRulesType() *CardUsageRulesType {
	this := CardUsageRulesType{}
	return &this
}

// NewCardUsageRulesTypeWithDefaults instantiates a new CardUsageRulesType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCardUsageRulesTypeWithDefaults() *CardUsageRulesType {
	this := CardUsageRulesType{}
	return &this
}

// GetAddressVerification returns the AddressVerification field value if set, zero value otherwise.
func (o *CardUsageRulesType) GetAddressVerification() bool {
	if o == nil || IsNil(o.AddressVerification) {
		var ret bool
		return ret
	}
	return *o.AddressVerification
}

// GetAddressVerificationOk returns a tuple with the AddressVerification field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CardUsageRulesType) GetAddressVerificationOk() (*bool, bool) {
	if o == nil || IsNil(o.AddressVerification) {
		return nil, false
	}
	return o.AddressVerification, true
}

// HasAddressVerification returns a boolean if a field has been set.
func (o *CardUsageRulesType) HasAddressVerification() bool {
	if o != nil && !IsNil(o.AddressVerification) {
		return true
	}

	return false
}

// SetAddressVerification gets a reference to the given bool and assigns it to the AddressVerification field.
func (o *CardUsageRulesType) SetAddressVerification(v bool) {
	o.AddressVerification = &v
}

// GetAuthorizationAtCheckin returns the AuthorizationAtCheckin field value if set, zero value otherwise.
func (o *CardUsageRulesType) GetAuthorizationAtCheckin() bool {
	if o == nil || IsNil(o.AuthorizationAtCheckin) {
		var ret bool
		return ret
	}
	return *o.AuthorizationAtCheckin
}

// GetAuthorizationAtCheckinOk returns a tuple with the AuthorizationAtCheckin field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CardUsageRulesType) GetAuthorizationAtCheckinOk() (*bool, bool) {
	if o == nil || IsNil(o.AuthorizationAtCheckin) {
		return nil, false
	}
	return o.AuthorizationAtCheckin, true
}

// HasAuthorizationAtCheckin returns a boolean if a field has been set.
func (o *CardUsageRulesType) HasAuthorizationAtCheckin() bool {
	if o != nil && !IsNil(o.AuthorizationAtCheckin) {
		return true
	}

	return false
}

// SetAuthorizationAtCheckin gets a reference to the given bool and assigns it to the AuthorizationAtCheckin field.
func (o *CardUsageRulesType) SetAuthorizationAtCheckin(v bool) {
	o.AuthorizationAtCheckin = &v
}

// GetAuthorizationDuringStay returns the AuthorizationDuringStay field value if set, zero value otherwise.
func (o *CardUsageRulesType) GetAuthorizationDuringStay() bool {
	if o == nil || IsNil(o.AuthorizationDuringStay) {
		var ret bool
		return ret
	}
	return *o.AuthorizationDuringStay
}

// GetAuthorizationDuringStayOk returns a tuple with the AuthorizationDuringStay field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CardUsageRulesType) GetAuthorizationDuringStayOk() (*bool, bool) {
	if o == nil || IsNil(o.AuthorizationDuringStay) {
		return nil, false
	}
	return o.AuthorizationDuringStay, true
}

// HasAuthorizationDuringStay returns a boolean if a field has been set.
func (o *CardUsageRulesType) HasAuthorizationDuringStay() bool {
	if o != nil && !IsNil(o.AuthorizationDuringStay) {
		return true
	}

	return false
}

// SetAuthorizationDuringStay gets a reference to the given bool and assigns it to the AuthorizationDuringStay field.
func (o *CardUsageRulesType) SetAuthorizationDuringStay(v bool) {
	o.AuthorizationDuringStay = &v
}

// GetAuthorizationReversal returns the AuthorizationReversal field value if set, zero value otherwise.
func (o *CardUsageRulesType) GetAuthorizationReversal() bool {
	if o == nil || IsNil(o.AuthorizationReversal) {
		var ret bool
		return ret
	}
	return *o.AuthorizationReversal
}

// GetAuthorizationReversalOk returns a tuple with the AuthorizationReversal field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CardUsageRulesType) GetAuthorizationReversalOk() (*bool, bool) {
	if o == nil || IsNil(o.AuthorizationReversal) {
		return nil, false
	}
	return o.AuthorizationReversal, true
}

// HasAuthorizationReversal returns a boolean if a field has been set.
func (o *CardUsageRulesType) HasAuthorizationReversal() bool {
	if o != nil && !IsNil(o.AuthorizationReversal) {
		return true
	}

	return false
}

// SetAuthorizationReversal gets a reference to the given bool and assigns it to the AuthorizationReversal field.
func (o *CardUsageRulesType) SetAuthorizationReversal(v bool) {
	o.AuthorizationReversal = &v
}

// GetAuthorizationSettlementAtCheckout returns the AuthorizationSettlementAtCheckout field value if set, zero value otherwise.
func (o *CardUsageRulesType) GetAuthorizationSettlementAtCheckout() bool {
	if o == nil || IsNil(o.AuthorizationSettlementAtCheckout) {
		var ret bool
		return ret
	}
	return *o.AuthorizationSettlementAtCheckout
}

// GetAuthorizationSettlementAtCheckoutOk returns a tuple with the AuthorizationSettlementAtCheckout field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CardUsageRulesType) GetAuthorizationSettlementAtCheckoutOk() (*bool, bool) {
	if o == nil || IsNil(o.AuthorizationSettlementAtCheckout) {
		return nil, false
	}
	return o.AuthorizationSettlementAtCheckout, true
}

// HasAuthorizationSettlementAtCheckout returns a boolean if a field has been set.
func (o *CardUsageRulesType) HasAuthorizationSettlementAtCheckout() bool {
	if o != nil && !IsNil(o.AuthorizationSettlementAtCheckout) {
		return true
	}

	return false
}

// SetAuthorizationSettlementAtCheckout gets a reference to the given bool and assigns it to the AuthorizationSettlementAtCheckout field.
func (o *CardUsageRulesType) SetAuthorizationSettlementAtCheckout(v bool) {
	o.AuthorizationSettlementAtCheckout = &v
}

// GetCVVCheck returns the CVVCheck field value if set, zero value otherwise.
func (o *CardUsageRulesType) GetCVVCheck() bool {
	if o == nil || IsNil(o.CVVCheck) {
		var ret bool
		return ret
	}
	return *o.CVVCheck
}

// GetCVVCheckOk returns a tuple with the CVVCheck field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CardUsageRulesType) GetCVVCheckOk() (*bool, bool) {
	if o == nil || IsNil(o.CVVCheck) {
		return nil, false
	}
	return o.CVVCheck, true
}

// HasCVVCheck returns a boolean if a field has been set.
func (o *CardUsageRulesType) HasCVVCheck() bool {
	if o != nil && !IsNil(o.CVVCheck) {
		return true
	}

	return false
}

// SetCVVCheck gets a reference to the given bool and assigns it to the CVVCheck field.
func (o *CardUsageRulesType) SetCVVCheck(v bool) {
	o.CVVCheck = &v
}

// GetChipAndPin returns the ChipAndPin field value if set, zero value otherwise.
func (o *CardUsageRulesType) GetChipAndPin() bool {
	if o == nil || IsNil(o.ChipAndPin) {
		var ret bool
		return ret
	}
	return *o.ChipAndPin
}

// GetChipAndPinOk returns a tuple with the ChipAndPin field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CardUsageRulesType) GetChipAndPinOk() (*bool, bool) {
	if o == nil || IsNil(o.ChipAndPin) {
		return nil, false
	}
	return o.ChipAndPin, true
}

// HasChipAndPin returns a boolean if a field has been set.
func (o *CardUsageRulesType) HasChipAndPin() bool {
	if o != nil && !IsNil(o.ChipAndPin) {
		return true
	}

	return false
}

// SetChipAndPin gets a reference to the given bool and assigns it to the ChipAndPin field.
func (o *CardUsageRulesType) SetChipAndPin(v bool) {
	o.ChipAndPin = &v
}

// GetPromptAtCheckin returns the PromptAtCheckin field value if set, zero value otherwise.
func (o *CardUsageRulesType) GetPromptAtCheckin() bool {
	if o == nil || IsNil(o.PromptAtCheckin) {
		var ret bool
		return ret
	}
	return *o.PromptAtCheckin
}

// GetPromptAtCheckinOk returns a tuple with the PromptAtCheckin field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CardUsageRulesType) GetPromptAtCheckinOk() (*bool, bool) {
	if o == nil || IsNil(o.PromptAtCheckin) {
		return nil, false
	}
	return o.PromptAtCheckin, true
}

// HasPromptAtCheckin returns a boolean if a field has been set.
func (o *CardUsageRulesType) HasPromptAtCheckin() bool {
	if o != nil && !IsNil(o.PromptAtCheckin) {
		return true
	}

	return false
}

// SetPromptAtCheckin gets a reference to the given bool and assigns it to the PromptAtCheckin field.
func (o *CardUsageRulesType) SetPromptAtCheckin(v bool) {
	o.PromptAtCheckin = &v
}

func (o CardUsageRulesType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CardUsageRulesType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AddressVerification) {
		toSerialize["addressVerification"] = o.AddressVerification
	}
	if !IsNil(o.AuthorizationAtCheckin) {
		toSerialize["authorizationAtCheckin"] = o.AuthorizationAtCheckin
	}
	if !IsNil(o.AuthorizationDuringStay) {
		toSerialize["authorizationDuringStay"] = o.AuthorizationDuringStay
	}
	if !IsNil(o.AuthorizationReversal) {
		toSerialize["authorizationReversal"] = o.AuthorizationReversal
	}
	if !IsNil(o.AuthorizationSettlementAtCheckout) {
		toSerialize["authorizationSettlementAtCheckout"] = o.AuthorizationSettlementAtCheckout
	}
	if !IsNil(o.CVVCheck) {
		toSerialize["cVVCheck"] = o.CVVCheck
	}
	if !IsNil(o.ChipAndPin) {
		toSerialize["chipAndPin"] = o.ChipAndPin
	}
	if !IsNil(o.PromptAtCheckin) {
		toSerialize["promptAtCheckin"] = o.PromptAtCheckin
	}
	return toSerialize, nil
}

type NullableCardUsageRulesType struct {
	value *CardUsageRulesType
	isSet bool
}

func (v NullableCardUsageRulesType) Get() *CardUsageRulesType {
	return v.value
}

func (v *NullableCardUsageRulesType) Set(val *CardUsageRulesType) {
	v.value = val
	v.isSet = true
}

func (v NullableCardUsageRulesType) IsSet() bool {
	return v.isSet
}

func (v *NullableCardUsageRulesType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCardUsageRulesType(val *CardUsageRulesType) *NullableCardUsageRulesType {
	return &NullableCardUsageRulesType{value: val, isSet: true}
}

func (v NullableCardUsageRulesType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCardUsageRulesType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


