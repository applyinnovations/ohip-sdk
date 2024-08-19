/*
OPERA Cloud Integration Configuration API

APIs catering to Integration Configuration in OPERA Cloud.  Operations such as get Hotel Interface Types, or get UDF mappings can be found in this module.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.4
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package intcfg

import (
	"encoding/json"
)

// checks if the BillingFolioDeliveryMethodType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &BillingFolioDeliveryMethodType{}

// BillingFolioDeliveryMethodType Billing folio delivery method configuration, settings for Email and Fax Delivery of Guest Folios
type BillingFolioDeliveryMethodType struct {
	Email *EmailDeliveryConfigurationType `json:"email,omitempty"`
	Fax *FaxDeliveryConfigurationType `json:"fax,omitempty"`
}

// NewBillingFolioDeliveryMethodType instantiates a new BillingFolioDeliveryMethodType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewBillingFolioDeliveryMethodType() *BillingFolioDeliveryMethodType {
	this := BillingFolioDeliveryMethodType{}
	return &this
}

// NewBillingFolioDeliveryMethodTypeWithDefaults instantiates a new BillingFolioDeliveryMethodType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewBillingFolioDeliveryMethodTypeWithDefaults() *BillingFolioDeliveryMethodType {
	this := BillingFolioDeliveryMethodType{}
	return &this
}

// GetEmail returns the Email field value if set, zero value otherwise.
func (o *BillingFolioDeliveryMethodType) GetEmail() EmailDeliveryConfigurationType {
	if o == nil || IsNil(o.Email) {
		var ret EmailDeliveryConfigurationType
		return ret
	}
	return *o.Email
}

// GetEmailOk returns a tuple with the Email field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BillingFolioDeliveryMethodType) GetEmailOk() (*EmailDeliveryConfigurationType, bool) {
	if o == nil || IsNil(o.Email) {
		return nil, false
	}
	return o.Email, true
}

// HasEmail returns a boolean if a field has been set.
func (o *BillingFolioDeliveryMethodType) HasEmail() bool {
	if o != nil && !IsNil(o.Email) {
		return true
	}

	return false
}

// SetEmail gets a reference to the given EmailDeliveryConfigurationType and assigns it to the Email field.
func (o *BillingFolioDeliveryMethodType) SetEmail(v EmailDeliveryConfigurationType) {
	o.Email = &v
}

// GetFax returns the Fax field value if set, zero value otherwise.
func (o *BillingFolioDeliveryMethodType) GetFax() FaxDeliveryConfigurationType {
	if o == nil || IsNil(o.Fax) {
		var ret FaxDeliveryConfigurationType
		return ret
	}
	return *o.Fax
}

// GetFaxOk returns a tuple with the Fax field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BillingFolioDeliveryMethodType) GetFaxOk() (*FaxDeliveryConfigurationType, bool) {
	if o == nil || IsNil(o.Fax) {
		return nil, false
	}
	return o.Fax, true
}

// HasFax returns a boolean if a field has been set.
func (o *BillingFolioDeliveryMethodType) HasFax() bool {
	if o != nil && !IsNil(o.Fax) {
		return true
	}

	return false
}

// SetFax gets a reference to the given FaxDeliveryConfigurationType and assigns it to the Fax field.
func (o *BillingFolioDeliveryMethodType) SetFax(v FaxDeliveryConfigurationType) {
	o.Fax = &v
}

func (o BillingFolioDeliveryMethodType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o BillingFolioDeliveryMethodType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Email) {
		toSerialize["email"] = o.Email
	}
	if !IsNil(o.Fax) {
		toSerialize["fax"] = o.Fax
	}
	return toSerialize, nil
}

type NullableBillingFolioDeliveryMethodType struct {
	value *BillingFolioDeliveryMethodType
	isSet bool
}

func (v NullableBillingFolioDeliveryMethodType) Get() *BillingFolioDeliveryMethodType {
	return v.value
}

func (v *NullableBillingFolioDeliveryMethodType) Set(val *BillingFolioDeliveryMethodType) {
	v.value = val
	v.isSet = true
}

func (v NullableBillingFolioDeliveryMethodType) IsSet() bool {
	return v.isSet
}

func (v *NullableBillingFolioDeliveryMethodType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBillingFolioDeliveryMethodType(val *BillingFolioDeliveryMethodType) *NullableBillingFolioDeliveryMethodType {
	return &NullableBillingFolioDeliveryMethodType{value: val, isSet: true}
}

func (v NullableBillingFolioDeliveryMethodType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBillingFolioDeliveryMethodType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


