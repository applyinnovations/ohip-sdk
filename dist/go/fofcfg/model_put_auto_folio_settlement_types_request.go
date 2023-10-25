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

// checks if the PutAutoFolioSettlementTypesRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PutAutoFolioSettlementTypesRequest{}

// PutAutoFolioSettlementTypesRequest struct for PutAutoFolioSettlementTypesRequest
type PutAutoFolioSettlementTypesRequest struct {
	// List of Auto Folio Settlement Types.
	AutoFolioSettlementTypes []AutoFolioSettlementTypeType `json:"autoFolioSettlementTypes,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewPutAutoFolioSettlementTypesRequest instantiates a new PutAutoFolioSettlementTypesRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPutAutoFolioSettlementTypesRequest() *PutAutoFolioSettlementTypesRequest {
	this := PutAutoFolioSettlementTypesRequest{}
	return &this
}

// NewPutAutoFolioSettlementTypesRequestWithDefaults instantiates a new PutAutoFolioSettlementTypesRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPutAutoFolioSettlementTypesRequestWithDefaults() *PutAutoFolioSettlementTypesRequest {
	this := PutAutoFolioSettlementTypesRequest{}
	return &this
}

// GetAutoFolioSettlementTypes returns the AutoFolioSettlementTypes field value if set, zero value otherwise.
func (o *PutAutoFolioSettlementTypesRequest) GetAutoFolioSettlementTypes() []AutoFolioSettlementTypeType {
	if o == nil || IsNil(o.AutoFolioSettlementTypes) {
		var ret []AutoFolioSettlementTypeType
		return ret
	}
	return o.AutoFolioSettlementTypes
}

// GetAutoFolioSettlementTypesOk returns a tuple with the AutoFolioSettlementTypes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PutAutoFolioSettlementTypesRequest) GetAutoFolioSettlementTypesOk() ([]AutoFolioSettlementTypeType, bool) {
	if o == nil || IsNil(o.AutoFolioSettlementTypes) {
		return nil, false
	}
	return o.AutoFolioSettlementTypes, true
}

// HasAutoFolioSettlementTypes returns a boolean if a field has been set.
func (o *PutAutoFolioSettlementTypesRequest) HasAutoFolioSettlementTypes() bool {
	if o != nil && !IsNil(o.AutoFolioSettlementTypes) {
		return true
	}

	return false
}

// SetAutoFolioSettlementTypes gets a reference to the given []AutoFolioSettlementTypeType and assigns it to the AutoFolioSettlementTypes field.
func (o *PutAutoFolioSettlementTypesRequest) SetAutoFolioSettlementTypes(v []AutoFolioSettlementTypeType) {
	o.AutoFolioSettlementTypes = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *PutAutoFolioSettlementTypesRequest) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PutAutoFolioSettlementTypesRequest) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *PutAutoFolioSettlementTypesRequest) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *PutAutoFolioSettlementTypesRequest) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *PutAutoFolioSettlementTypesRequest) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PutAutoFolioSettlementTypesRequest) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *PutAutoFolioSettlementTypesRequest) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *PutAutoFolioSettlementTypesRequest) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o PutAutoFolioSettlementTypesRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PutAutoFolioSettlementTypesRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AutoFolioSettlementTypes) {
		toSerialize["autoFolioSettlementTypes"] = o.AutoFolioSettlementTypes
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullablePutAutoFolioSettlementTypesRequest struct {
	value *PutAutoFolioSettlementTypesRequest
	isSet bool
}

func (v NullablePutAutoFolioSettlementTypesRequest) Get() *PutAutoFolioSettlementTypesRequest {
	return v.value
}

func (v *NullablePutAutoFolioSettlementTypesRequest) Set(val *PutAutoFolioSettlementTypesRequest) {
	v.value = val
	v.isSet = true
}

func (v NullablePutAutoFolioSettlementTypesRequest) IsSet() bool {
	return v.isSet
}

func (v *NullablePutAutoFolioSettlementTypesRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePutAutoFolioSettlementTypesRequest(val *PutAutoFolioSettlementTypesRequest) *NullablePutAutoFolioSettlementTypesRequest {
	return &NullablePutAutoFolioSettlementTypesRequest{value: val, isSet: true}
}

func (v NullablePutAutoFolioSettlementTypesRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePutAutoFolioSettlementTypesRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


