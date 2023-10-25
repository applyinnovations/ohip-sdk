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

// checks if the PostFBAReimbursementRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PostFBAReimbursementRequest{}

// PostFBAReimbursementRequest struct for PostFBAReimbursementRequest
type PostFBAReimbursementRequest struct {
	// List of CertificateReconciliationType criteria
	CertificateReconciliationTypes []CertificateReconciliationType `json:"certificateReconciliationTypes,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewPostFBAReimbursementRequest instantiates a new PostFBAReimbursementRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPostFBAReimbursementRequest() *PostFBAReimbursementRequest {
	this := PostFBAReimbursementRequest{}
	return &this
}

// NewPostFBAReimbursementRequestWithDefaults instantiates a new PostFBAReimbursementRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPostFBAReimbursementRequestWithDefaults() *PostFBAReimbursementRequest {
	this := PostFBAReimbursementRequest{}
	return &this
}

// GetCertificateReconciliationTypes returns the CertificateReconciliationTypes field value if set, zero value otherwise.
func (o *PostFBAReimbursementRequest) GetCertificateReconciliationTypes() []CertificateReconciliationType {
	if o == nil || IsNil(o.CertificateReconciliationTypes) {
		var ret []CertificateReconciliationType
		return ret
	}
	return o.CertificateReconciliationTypes
}

// GetCertificateReconciliationTypesOk returns a tuple with the CertificateReconciliationTypes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostFBAReimbursementRequest) GetCertificateReconciliationTypesOk() ([]CertificateReconciliationType, bool) {
	if o == nil || IsNil(o.CertificateReconciliationTypes) {
		return nil, false
	}
	return o.CertificateReconciliationTypes, true
}

// HasCertificateReconciliationTypes returns a boolean if a field has been set.
func (o *PostFBAReimbursementRequest) HasCertificateReconciliationTypes() bool {
	if o != nil && !IsNil(o.CertificateReconciliationTypes) {
		return true
	}

	return false
}

// SetCertificateReconciliationTypes gets a reference to the given []CertificateReconciliationType and assigns it to the CertificateReconciliationTypes field.
func (o *PostFBAReimbursementRequest) SetCertificateReconciliationTypes(v []CertificateReconciliationType) {
	o.CertificateReconciliationTypes = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *PostFBAReimbursementRequest) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostFBAReimbursementRequest) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *PostFBAReimbursementRequest) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *PostFBAReimbursementRequest) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *PostFBAReimbursementRequest) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostFBAReimbursementRequest) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *PostFBAReimbursementRequest) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *PostFBAReimbursementRequest) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o PostFBAReimbursementRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PostFBAReimbursementRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CertificateReconciliationTypes) {
		toSerialize["certificateReconciliationTypes"] = o.CertificateReconciliationTypes
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullablePostFBAReimbursementRequest struct {
	value *PostFBAReimbursementRequest
	isSet bool
}

func (v NullablePostFBAReimbursementRequest) Get() *PostFBAReimbursementRequest {
	return v.value
}

func (v *NullablePostFBAReimbursementRequest) Set(val *PostFBAReimbursementRequest) {
	v.value = val
	v.isSet = true
}

func (v NullablePostFBAReimbursementRequest) IsSet() bool {
	return v.isSet
}

func (v *NullablePostFBAReimbursementRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePostFBAReimbursementRequest(val *PostFBAReimbursementRequest) *NullablePostFBAReimbursementRequest {
	return &NullablePostFBAReimbursementRequest{value: val, isSet: true}
}

func (v NullablePostFBAReimbursementRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePostFBAReimbursementRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


