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

// checks if the FiscalInformationFolio type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &FiscalInformationFolio{}

// FiscalInformationFolio Existing Operations Responses will eventually be modified to be extended from this type.
type FiscalInformationFolio struct {
	// Provides information which is used for fiscal response processing.
	FiscalResponseList []FiscalResponseType `json:"fiscalResponseList,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewFiscalInformationFolio instantiates a new FiscalInformationFolio object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewFiscalInformationFolio() *FiscalInformationFolio {
	this := FiscalInformationFolio{}
	return &this
}

// NewFiscalInformationFolioWithDefaults instantiates a new FiscalInformationFolio object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewFiscalInformationFolioWithDefaults() *FiscalInformationFolio {
	this := FiscalInformationFolio{}
	return &this
}

// GetFiscalResponseList returns the FiscalResponseList field value if set, zero value otherwise.
func (o *FiscalInformationFolio) GetFiscalResponseList() []FiscalResponseType {
	if o == nil || IsNil(o.FiscalResponseList) {
		var ret []FiscalResponseType
		return ret
	}
	return o.FiscalResponseList
}

// GetFiscalResponseListOk returns a tuple with the FiscalResponseList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FiscalInformationFolio) GetFiscalResponseListOk() ([]FiscalResponseType, bool) {
	if o == nil || IsNil(o.FiscalResponseList) {
		return nil, false
	}
	return o.FiscalResponseList, true
}

// HasFiscalResponseList returns a boolean if a field has been set.
func (o *FiscalInformationFolio) HasFiscalResponseList() bool {
	if o != nil && !IsNil(o.FiscalResponseList) {
		return true
	}

	return false
}

// SetFiscalResponseList gets a reference to the given []FiscalResponseType and assigns it to the FiscalResponseList field.
func (o *FiscalInformationFolio) SetFiscalResponseList(v []FiscalResponseType) {
	o.FiscalResponseList = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *FiscalInformationFolio) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FiscalInformationFolio) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *FiscalInformationFolio) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *FiscalInformationFolio) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *FiscalInformationFolio) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FiscalInformationFolio) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *FiscalInformationFolio) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *FiscalInformationFolio) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o FiscalInformationFolio) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o FiscalInformationFolio) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.FiscalResponseList) {
		toSerialize["fiscalResponseList"] = o.FiscalResponseList
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableFiscalInformationFolio struct {
	value *FiscalInformationFolio
	isSet bool
}

func (v NullableFiscalInformationFolio) Get() *FiscalInformationFolio {
	return v.value
}

func (v *NullableFiscalInformationFolio) Set(val *FiscalInformationFolio) {
	v.value = val
	v.isSet = true
}

func (v NullableFiscalInformationFolio) IsSet() bool {
	return v.isSet
}

func (v *NullableFiscalInformationFolio) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableFiscalInformationFolio(val *FiscalInformationFolio) *NullableFiscalInformationFolio {
	return &NullableFiscalInformationFolio{value: val, isSet: true}
}

func (v NullableFiscalInformationFolio) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableFiscalInformationFolio) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


