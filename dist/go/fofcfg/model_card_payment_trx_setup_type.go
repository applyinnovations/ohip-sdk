/*
OPERA Cloud Front Desk Configuration API

APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fofcfg

import (
	"encoding/json"
)

// checks if the CardPaymentTrxSetupType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CardPaymentTrxSetupType{}

// CardPaymentTrxSetupType Card Payment Transaction Code configuration details.
type CardPaymentTrxSetupType struct {
	AccountReceivable *ARAccountRefType `json:"accountReceivable,omitempty"`
	// Commission percentage on the payment.
	Commission *float32 `json:"commission,omitempty"`
	// Display code of the payment Transaction Code.
	DisplayCode *string `json:"displayCode,omitempty"`
	// Card Payment's internal interface code.
	InterfaceCode *string `json:"interfaceCode,omitempty"`
	ProcessingType *CardPaymentProcessingType `json:"processingType,omitempty"`
}

// NewCardPaymentTrxSetupType instantiates a new CardPaymentTrxSetupType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCardPaymentTrxSetupType() *CardPaymentTrxSetupType {
	this := CardPaymentTrxSetupType{}
	return &this
}

// NewCardPaymentTrxSetupTypeWithDefaults instantiates a new CardPaymentTrxSetupType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCardPaymentTrxSetupTypeWithDefaults() *CardPaymentTrxSetupType {
	this := CardPaymentTrxSetupType{}
	return &this
}

// GetAccountReceivable returns the AccountReceivable field value if set, zero value otherwise.
func (o *CardPaymentTrxSetupType) GetAccountReceivable() ARAccountRefType {
	if o == nil || IsNil(o.AccountReceivable) {
		var ret ARAccountRefType
		return ret
	}
	return *o.AccountReceivable
}

// GetAccountReceivableOk returns a tuple with the AccountReceivable field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CardPaymentTrxSetupType) GetAccountReceivableOk() (*ARAccountRefType, bool) {
	if o == nil || IsNil(o.AccountReceivable) {
		return nil, false
	}
	return o.AccountReceivable, true
}

// HasAccountReceivable returns a boolean if a field has been set.
func (o *CardPaymentTrxSetupType) HasAccountReceivable() bool {
	if o != nil && !IsNil(o.AccountReceivable) {
		return true
	}

	return false
}

// SetAccountReceivable gets a reference to the given ARAccountRefType and assigns it to the AccountReceivable field.
func (o *CardPaymentTrxSetupType) SetAccountReceivable(v ARAccountRefType) {
	o.AccountReceivable = &v
}

// GetCommission returns the Commission field value if set, zero value otherwise.
func (o *CardPaymentTrxSetupType) GetCommission() float32 {
	if o == nil || IsNil(o.Commission) {
		var ret float32
		return ret
	}
	return *o.Commission
}

// GetCommissionOk returns a tuple with the Commission field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CardPaymentTrxSetupType) GetCommissionOk() (*float32, bool) {
	if o == nil || IsNil(o.Commission) {
		return nil, false
	}
	return o.Commission, true
}

// HasCommission returns a boolean if a field has been set.
func (o *CardPaymentTrxSetupType) HasCommission() bool {
	if o != nil && !IsNil(o.Commission) {
		return true
	}

	return false
}

// SetCommission gets a reference to the given float32 and assigns it to the Commission field.
func (o *CardPaymentTrxSetupType) SetCommission(v float32) {
	o.Commission = &v
}

// GetDisplayCode returns the DisplayCode field value if set, zero value otherwise.
func (o *CardPaymentTrxSetupType) GetDisplayCode() string {
	if o == nil || IsNil(o.DisplayCode) {
		var ret string
		return ret
	}
	return *o.DisplayCode
}

// GetDisplayCodeOk returns a tuple with the DisplayCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CardPaymentTrxSetupType) GetDisplayCodeOk() (*string, bool) {
	if o == nil || IsNil(o.DisplayCode) {
		return nil, false
	}
	return o.DisplayCode, true
}

// HasDisplayCode returns a boolean if a field has been set.
func (o *CardPaymentTrxSetupType) HasDisplayCode() bool {
	if o != nil && !IsNil(o.DisplayCode) {
		return true
	}

	return false
}

// SetDisplayCode gets a reference to the given string and assigns it to the DisplayCode field.
func (o *CardPaymentTrxSetupType) SetDisplayCode(v string) {
	o.DisplayCode = &v
}

// GetInterfaceCode returns the InterfaceCode field value if set, zero value otherwise.
func (o *CardPaymentTrxSetupType) GetInterfaceCode() string {
	if o == nil || IsNil(o.InterfaceCode) {
		var ret string
		return ret
	}
	return *o.InterfaceCode
}

// GetInterfaceCodeOk returns a tuple with the InterfaceCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CardPaymentTrxSetupType) GetInterfaceCodeOk() (*string, bool) {
	if o == nil || IsNil(o.InterfaceCode) {
		return nil, false
	}
	return o.InterfaceCode, true
}

// HasInterfaceCode returns a boolean if a field has been set.
func (o *CardPaymentTrxSetupType) HasInterfaceCode() bool {
	if o != nil && !IsNil(o.InterfaceCode) {
		return true
	}

	return false
}

// SetInterfaceCode gets a reference to the given string and assigns it to the InterfaceCode field.
func (o *CardPaymentTrxSetupType) SetInterfaceCode(v string) {
	o.InterfaceCode = &v
}

// GetProcessingType returns the ProcessingType field value if set, zero value otherwise.
func (o *CardPaymentTrxSetupType) GetProcessingType() CardPaymentProcessingType {
	if o == nil || IsNil(o.ProcessingType) {
		var ret CardPaymentProcessingType
		return ret
	}
	return *o.ProcessingType
}

// GetProcessingTypeOk returns a tuple with the ProcessingType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CardPaymentTrxSetupType) GetProcessingTypeOk() (*CardPaymentProcessingType, bool) {
	if o == nil || IsNil(o.ProcessingType) {
		return nil, false
	}
	return o.ProcessingType, true
}

// HasProcessingType returns a boolean if a field has been set.
func (o *CardPaymentTrxSetupType) HasProcessingType() bool {
	if o != nil && !IsNil(o.ProcessingType) {
		return true
	}

	return false
}

// SetProcessingType gets a reference to the given CardPaymentProcessingType and assigns it to the ProcessingType field.
func (o *CardPaymentTrxSetupType) SetProcessingType(v CardPaymentProcessingType) {
	o.ProcessingType = &v
}

func (o CardPaymentTrxSetupType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CardPaymentTrxSetupType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AccountReceivable) {
		toSerialize["accountReceivable"] = o.AccountReceivable
	}
	if !IsNil(o.Commission) {
		toSerialize["commission"] = o.Commission
	}
	if !IsNil(o.DisplayCode) {
		toSerialize["displayCode"] = o.DisplayCode
	}
	if !IsNil(o.InterfaceCode) {
		toSerialize["interfaceCode"] = o.InterfaceCode
	}
	if !IsNil(o.ProcessingType) {
		toSerialize["processingType"] = o.ProcessingType
	}
	return toSerialize, nil
}

type NullableCardPaymentTrxSetupType struct {
	value *CardPaymentTrxSetupType
	isSet bool
}

func (v NullableCardPaymentTrxSetupType) Get() *CardPaymentTrxSetupType {
	return v.value
}

func (v *NullableCardPaymentTrxSetupType) Set(val *CardPaymentTrxSetupType) {
	v.value = val
	v.isSet = true
}

func (v NullableCardPaymentTrxSetupType) IsSet() bool {
	return v.isSet
}

func (v *NullableCardPaymentTrxSetupType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCardPaymentTrxSetupType(val *CardPaymentTrxSetupType) *NullableCardPaymentTrxSetupType {
	return &NullableCardPaymentTrxSetupType{value: val, isSet: true}
}

func (v NullableCardPaymentTrxSetupType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCardPaymentTrxSetupType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


