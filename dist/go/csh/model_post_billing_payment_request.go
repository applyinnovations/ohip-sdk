/*
OPERA Cloud Cashiering API

APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package csh

import (
	"encoding/json"
)

// checks if the PostBillingPaymentRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PostBillingPaymentRequest{}

// PostBillingPaymentRequest struct for PostBillingPaymentRequest
type PostBillingPaymentRequest struct {
	// Flag to indicate if the advance bill is being posted from deposits prior to check-in
	AdvanceDeposit *bool `json:"advanceDeposit,omitempty"`
	Criteria *BillingPaymentCriteria `json:"criteria,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewPostBillingPaymentRequest instantiates a new PostBillingPaymentRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPostBillingPaymentRequest() *PostBillingPaymentRequest {
	this := PostBillingPaymentRequest{}
	return &this
}

// NewPostBillingPaymentRequestWithDefaults instantiates a new PostBillingPaymentRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPostBillingPaymentRequestWithDefaults() *PostBillingPaymentRequest {
	this := PostBillingPaymentRequest{}
	return &this
}

// GetAdvanceDeposit returns the AdvanceDeposit field value if set, zero value otherwise.
func (o *PostBillingPaymentRequest) GetAdvanceDeposit() bool {
	if o == nil || IsNil(o.AdvanceDeposit) {
		var ret bool
		return ret
	}
	return *o.AdvanceDeposit
}

// GetAdvanceDepositOk returns a tuple with the AdvanceDeposit field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostBillingPaymentRequest) GetAdvanceDepositOk() (*bool, bool) {
	if o == nil || IsNil(o.AdvanceDeposit) {
		return nil, false
	}
	return o.AdvanceDeposit, true
}

// HasAdvanceDeposit returns a boolean if a field has been set.
func (o *PostBillingPaymentRequest) HasAdvanceDeposit() bool {
	if o != nil && !IsNil(o.AdvanceDeposit) {
		return true
	}

	return false
}

// SetAdvanceDeposit gets a reference to the given bool and assigns it to the AdvanceDeposit field.
func (o *PostBillingPaymentRequest) SetAdvanceDeposit(v bool) {
	o.AdvanceDeposit = &v
}

// GetCriteria returns the Criteria field value if set, zero value otherwise.
func (o *PostBillingPaymentRequest) GetCriteria() BillingPaymentCriteria {
	if o == nil || IsNil(o.Criteria) {
		var ret BillingPaymentCriteria
		return ret
	}
	return *o.Criteria
}

// GetCriteriaOk returns a tuple with the Criteria field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostBillingPaymentRequest) GetCriteriaOk() (*BillingPaymentCriteria, bool) {
	if o == nil || IsNil(o.Criteria) {
		return nil, false
	}
	return o.Criteria, true
}

// HasCriteria returns a boolean if a field has been set.
func (o *PostBillingPaymentRequest) HasCriteria() bool {
	if o != nil && !IsNil(o.Criteria) {
		return true
	}

	return false
}

// SetCriteria gets a reference to the given BillingPaymentCriteria and assigns it to the Criteria field.
func (o *PostBillingPaymentRequest) SetCriteria(v BillingPaymentCriteria) {
	o.Criteria = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *PostBillingPaymentRequest) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostBillingPaymentRequest) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *PostBillingPaymentRequest) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *PostBillingPaymentRequest) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *PostBillingPaymentRequest) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostBillingPaymentRequest) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *PostBillingPaymentRequest) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *PostBillingPaymentRequest) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o PostBillingPaymentRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PostBillingPaymentRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AdvanceDeposit) {
		toSerialize["advanceDeposit"] = o.AdvanceDeposit
	}
	if !IsNil(o.Criteria) {
		toSerialize["criteria"] = o.Criteria
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullablePostBillingPaymentRequest struct {
	value *PostBillingPaymentRequest
	isSet bool
}

func (v NullablePostBillingPaymentRequest) Get() *PostBillingPaymentRequest {
	return v.value
}

func (v *NullablePostBillingPaymentRequest) Set(val *PostBillingPaymentRequest) {
	v.value = val
	v.isSet = true
}

func (v NullablePostBillingPaymentRequest) IsSet() bool {
	return v.isSet
}

func (v *NullablePostBillingPaymentRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePostBillingPaymentRequest(val *PostBillingPaymentRequest) *NullablePostBillingPaymentRequest {
	return &NullablePostBillingPaymentRequest{value: val, isSet: true}
}

func (v NullablePostBillingPaymentRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePostBillingPaymentRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


