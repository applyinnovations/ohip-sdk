/*
OPERA Cloud Cashiering API

APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package csh

import (
	"encoding/json"
)

// checks if the CcSettlementCriteria type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CcSettlementCriteria{}

// CcSettlementCriteria Request object to change credit card settlement information.
type CcSettlementCriteria struct {
	CreditCardSettlement *CCBatchSettlementType `json:"creditCardSettlement,omitempty"`
	// Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X.
	HotelId *string `json:"hotelId,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewCcSettlementCriteria instantiates a new CcSettlementCriteria object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCcSettlementCriteria() *CcSettlementCriteria {
	this := CcSettlementCriteria{}
	return &this
}

// NewCcSettlementCriteriaWithDefaults instantiates a new CcSettlementCriteria object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCcSettlementCriteriaWithDefaults() *CcSettlementCriteria {
	this := CcSettlementCriteria{}
	return &this
}

// GetCreditCardSettlement returns the CreditCardSettlement field value if set, zero value otherwise.
func (o *CcSettlementCriteria) GetCreditCardSettlement() CCBatchSettlementType {
	if o == nil || IsNil(o.CreditCardSettlement) {
		var ret CCBatchSettlementType
		return ret
	}
	return *o.CreditCardSettlement
}

// GetCreditCardSettlementOk returns a tuple with the CreditCardSettlement field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CcSettlementCriteria) GetCreditCardSettlementOk() (*CCBatchSettlementType, bool) {
	if o == nil || IsNil(o.CreditCardSettlement) {
		return nil, false
	}
	return o.CreditCardSettlement, true
}

// HasCreditCardSettlement returns a boolean if a field has been set.
func (o *CcSettlementCriteria) HasCreditCardSettlement() bool {
	if o != nil && !IsNil(o.CreditCardSettlement) {
		return true
	}

	return false
}

// SetCreditCardSettlement gets a reference to the given CCBatchSettlementType and assigns it to the CreditCardSettlement field.
func (o *CcSettlementCriteria) SetCreditCardSettlement(v CCBatchSettlementType) {
	o.CreditCardSettlement = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *CcSettlementCriteria) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CcSettlementCriteria) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *CcSettlementCriteria) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *CcSettlementCriteria) SetHotelId(v string) {
	o.HotelId = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *CcSettlementCriteria) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CcSettlementCriteria) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *CcSettlementCriteria) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *CcSettlementCriteria) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *CcSettlementCriteria) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CcSettlementCriteria) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *CcSettlementCriteria) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *CcSettlementCriteria) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o CcSettlementCriteria) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CcSettlementCriteria) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CreditCardSettlement) {
		toSerialize["creditCardSettlement"] = o.CreditCardSettlement
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableCcSettlementCriteria struct {
	value *CcSettlementCriteria
	isSet bool
}

func (v NullableCcSettlementCriteria) Get() *CcSettlementCriteria {
	return v.value
}

func (v *NullableCcSettlementCriteria) Set(val *CcSettlementCriteria) {
	v.value = val
	v.isSet = true
}

func (v NullableCcSettlementCriteria) IsSet() bool {
	return v.isSet
}

func (v *NullableCcSettlementCriteria) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCcSettlementCriteria(val *CcSettlementCriteria) *NullableCcSettlementCriteria {
	return &NullableCcSettlementCriteria{value: val, isSet: true}
}

func (v NullableCcSettlementCriteria) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCcSettlementCriteria) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


