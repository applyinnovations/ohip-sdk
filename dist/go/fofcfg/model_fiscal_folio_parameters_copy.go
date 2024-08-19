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

// checks if the FiscalFolioParametersCopy type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &FiscalFolioParametersCopy{}

// FiscalFolioParametersCopy Request object for copying Fiscal Folio Parameters to other hotel code(s).
type FiscalFolioParametersCopy struct {
	// Fiscal Folio Parameter Configurations to be copied.
	FiscalFolioParameter []GenericHotelCodeCodeType `json:"fiscalFolioParameter,omitempty"`
	// List of the Fiscal Folio Parameters to be copied to other hotel code(s).
	FiscalFolioParameters []CopyFiscalFolioParametersType `json:"fiscalFolioParameters,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewFiscalFolioParametersCopy instantiates a new FiscalFolioParametersCopy object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewFiscalFolioParametersCopy() *FiscalFolioParametersCopy {
	this := FiscalFolioParametersCopy{}
	return &this
}

// NewFiscalFolioParametersCopyWithDefaults instantiates a new FiscalFolioParametersCopy object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewFiscalFolioParametersCopyWithDefaults() *FiscalFolioParametersCopy {
	this := FiscalFolioParametersCopy{}
	return &this
}

// GetFiscalFolioParameter returns the FiscalFolioParameter field value if set, zero value otherwise.
func (o *FiscalFolioParametersCopy) GetFiscalFolioParameter() []GenericHotelCodeCodeType {
	if o == nil || IsNil(o.FiscalFolioParameter) {
		var ret []GenericHotelCodeCodeType
		return ret
	}
	return o.FiscalFolioParameter
}

// GetFiscalFolioParameterOk returns a tuple with the FiscalFolioParameter field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FiscalFolioParametersCopy) GetFiscalFolioParameterOk() ([]GenericHotelCodeCodeType, bool) {
	if o == nil || IsNil(o.FiscalFolioParameter) {
		return nil, false
	}
	return o.FiscalFolioParameter, true
}

// HasFiscalFolioParameter returns a boolean if a field has been set.
func (o *FiscalFolioParametersCopy) HasFiscalFolioParameter() bool {
	if o != nil && !IsNil(o.FiscalFolioParameter) {
		return true
	}

	return false
}

// SetFiscalFolioParameter gets a reference to the given []GenericHotelCodeCodeType and assigns it to the FiscalFolioParameter field.
func (o *FiscalFolioParametersCopy) SetFiscalFolioParameter(v []GenericHotelCodeCodeType) {
	o.FiscalFolioParameter = v
}

// GetFiscalFolioParameters returns the FiscalFolioParameters field value if set, zero value otherwise.
func (o *FiscalFolioParametersCopy) GetFiscalFolioParameters() []CopyFiscalFolioParametersType {
	if o == nil || IsNil(o.FiscalFolioParameters) {
		var ret []CopyFiscalFolioParametersType
		return ret
	}
	return o.FiscalFolioParameters
}

// GetFiscalFolioParametersOk returns a tuple with the FiscalFolioParameters field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FiscalFolioParametersCopy) GetFiscalFolioParametersOk() ([]CopyFiscalFolioParametersType, bool) {
	if o == nil || IsNil(o.FiscalFolioParameters) {
		return nil, false
	}
	return o.FiscalFolioParameters, true
}

// HasFiscalFolioParameters returns a boolean if a field has been set.
func (o *FiscalFolioParametersCopy) HasFiscalFolioParameters() bool {
	if o != nil && !IsNil(o.FiscalFolioParameters) {
		return true
	}

	return false
}

// SetFiscalFolioParameters gets a reference to the given []CopyFiscalFolioParametersType and assigns it to the FiscalFolioParameters field.
func (o *FiscalFolioParametersCopy) SetFiscalFolioParameters(v []CopyFiscalFolioParametersType) {
	o.FiscalFolioParameters = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *FiscalFolioParametersCopy) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FiscalFolioParametersCopy) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *FiscalFolioParametersCopy) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *FiscalFolioParametersCopy) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *FiscalFolioParametersCopy) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FiscalFolioParametersCopy) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *FiscalFolioParametersCopy) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *FiscalFolioParametersCopy) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o FiscalFolioParametersCopy) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o FiscalFolioParametersCopy) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.FiscalFolioParameter) {
		toSerialize["fiscalFolioParameter"] = o.FiscalFolioParameter
	}
	if !IsNil(o.FiscalFolioParameters) {
		toSerialize["fiscalFolioParameters"] = o.FiscalFolioParameters
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableFiscalFolioParametersCopy struct {
	value *FiscalFolioParametersCopy
	isSet bool
}

func (v NullableFiscalFolioParametersCopy) Get() *FiscalFolioParametersCopy {
	return v.value
}

func (v *NullableFiscalFolioParametersCopy) Set(val *FiscalFolioParametersCopy) {
	v.value = val
	v.isSet = true
}

func (v NullableFiscalFolioParametersCopy) IsSet() bool {
	return v.isSet
}

func (v *NullableFiscalFolioParametersCopy) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableFiscalFolioParametersCopy(val *FiscalFolioParametersCopy) *NullableFiscalFolioParametersCopy {
	return &NullableFiscalFolioParametersCopy{value: val, isSet: true}
}

func (v NullableFiscalFolioParametersCopy) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableFiscalFolioParametersCopy) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


