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

// checks if the PutCommissionCodesRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PutCommissionCodesRequest{}

// PutCommissionCodesRequest struct for PutCommissionCodesRequest
type PutCommissionCodesRequest struct {
	// Commission code details object.
	CommissionCodes []CommissionCodeInfoType `json:"commissionCodes,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewPutCommissionCodesRequest instantiates a new PutCommissionCodesRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPutCommissionCodesRequest() *PutCommissionCodesRequest {
	this := PutCommissionCodesRequest{}
	return &this
}

// NewPutCommissionCodesRequestWithDefaults instantiates a new PutCommissionCodesRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPutCommissionCodesRequestWithDefaults() *PutCommissionCodesRequest {
	this := PutCommissionCodesRequest{}
	return &this
}

// GetCommissionCodes returns the CommissionCodes field value if set, zero value otherwise.
func (o *PutCommissionCodesRequest) GetCommissionCodes() []CommissionCodeInfoType {
	if o == nil || IsNil(o.CommissionCodes) {
		var ret []CommissionCodeInfoType
		return ret
	}
	return o.CommissionCodes
}

// GetCommissionCodesOk returns a tuple with the CommissionCodes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PutCommissionCodesRequest) GetCommissionCodesOk() ([]CommissionCodeInfoType, bool) {
	if o == nil || IsNil(o.CommissionCodes) {
		return nil, false
	}
	return o.CommissionCodes, true
}

// HasCommissionCodes returns a boolean if a field has been set.
func (o *PutCommissionCodesRequest) HasCommissionCodes() bool {
	if o != nil && !IsNil(o.CommissionCodes) {
		return true
	}

	return false
}

// SetCommissionCodes gets a reference to the given []CommissionCodeInfoType and assigns it to the CommissionCodes field.
func (o *PutCommissionCodesRequest) SetCommissionCodes(v []CommissionCodeInfoType) {
	o.CommissionCodes = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *PutCommissionCodesRequest) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PutCommissionCodesRequest) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *PutCommissionCodesRequest) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *PutCommissionCodesRequest) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *PutCommissionCodesRequest) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PutCommissionCodesRequest) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *PutCommissionCodesRequest) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *PutCommissionCodesRequest) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o PutCommissionCodesRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PutCommissionCodesRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CommissionCodes) {
		toSerialize["commissionCodes"] = o.CommissionCodes
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullablePutCommissionCodesRequest struct {
	value *PutCommissionCodesRequest
	isSet bool
}

func (v NullablePutCommissionCodesRequest) Get() *PutCommissionCodesRequest {
	return v.value
}

func (v *NullablePutCommissionCodesRequest) Set(val *PutCommissionCodesRequest) {
	v.value = val
	v.isSet = true
}

func (v NullablePutCommissionCodesRequest) IsSet() bool {
	return v.isSet
}

func (v *NullablePutCommissionCodesRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePutCommissionCodesRequest(val *PutCommissionCodesRequest) *NullablePutCommissionCodesRequest {
	return &NullablePutCommissionCodesRequest{value: val, isSet: true}
}

func (v NullablePutCommissionCodesRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePutCommissionCodesRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


