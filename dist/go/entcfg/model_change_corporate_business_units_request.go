/*
OPERA Cloud Enterprise Configuration API

APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package entcfg

import (
	"encoding/json"
)

// checks if the ChangeCorporateBusinessUnitsRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ChangeCorporateBusinessUnitsRequest{}

// ChangeCorporateBusinessUnitsRequest struct for ChangeCorporateBusinessUnitsRequest
type ChangeCorporateBusinessUnitsRequest struct {
	// List of Corporate Business Units.
	CorporateBusinessUnits []CorporateBusinessUnitType `json:"corporateBusinessUnits,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewChangeCorporateBusinessUnitsRequest instantiates a new ChangeCorporateBusinessUnitsRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewChangeCorporateBusinessUnitsRequest() *ChangeCorporateBusinessUnitsRequest {
	this := ChangeCorporateBusinessUnitsRequest{}
	return &this
}

// NewChangeCorporateBusinessUnitsRequestWithDefaults instantiates a new ChangeCorporateBusinessUnitsRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewChangeCorporateBusinessUnitsRequestWithDefaults() *ChangeCorporateBusinessUnitsRequest {
	this := ChangeCorporateBusinessUnitsRequest{}
	return &this
}

// GetCorporateBusinessUnits returns the CorporateBusinessUnits field value if set, zero value otherwise.
func (o *ChangeCorporateBusinessUnitsRequest) GetCorporateBusinessUnits() []CorporateBusinessUnitType {
	if o == nil || IsNil(o.CorporateBusinessUnits) {
		var ret []CorporateBusinessUnitType
		return ret
	}
	return o.CorporateBusinessUnits
}

// GetCorporateBusinessUnitsOk returns a tuple with the CorporateBusinessUnits field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangeCorporateBusinessUnitsRequest) GetCorporateBusinessUnitsOk() ([]CorporateBusinessUnitType, bool) {
	if o == nil || IsNil(o.CorporateBusinessUnits) {
		return nil, false
	}
	return o.CorporateBusinessUnits, true
}

// HasCorporateBusinessUnits returns a boolean if a field has been set.
func (o *ChangeCorporateBusinessUnitsRequest) HasCorporateBusinessUnits() bool {
	if o != nil && !IsNil(o.CorporateBusinessUnits) {
		return true
	}

	return false
}

// SetCorporateBusinessUnits gets a reference to the given []CorporateBusinessUnitType and assigns it to the CorporateBusinessUnits field.
func (o *ChangeCorporateBusinessUnitsRequest) SetCorporateBusinessUnits(v []CorporateBusinessUnitType) {
	o.CorporateBusinessUnits = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *ChangeCorporateBusinessUnitsRequest) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangeCorporateBusinessUnitsRequest) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *ChangeCorporateBusinessUnitsRequest) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *ChangeCorporateBusinessUnitsRequest) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *ChangeCorporateBusinessUnitsRequest) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangeCorporateBusinessUnitsRequest) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *ChangeCorporateBusinessUnitsRequest) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *ChangeCorporateBusinessUnitsRequest) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o ChangeCorporateBusinessUnitsRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ChangeCorporateBusinessUnitsRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CorporateBusinessUnits) {
		toSerialize["corporateBusinessUnits"] = o.CorporateBusinessUnits
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableChangeCorporateBusinessUnitsRequest struct {
	value *ChangeCorporateBusinessUnitsRequest
	isSet bool
}

func (v NullableChangeCorporateBusinessUnitsRequest) Get() *ChangeCorporateBusinessUnitsRequest {
	return v.value
}

func (v *NullableChangeCorporateBusinessUnitsRequest) Set(val *ChangeCorporateBusinessUnitsRequest) {
	v.value = val
	v.isSet = true
}

func (v NullableChangeCorporateBusinessUnitsRequest) IsSet() bool {
	return v.isSet
}

func (v *NullableChangeCorporateBusinessUnitsRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableChangeCorporateBusinessUnitsRequest(val *ChangeCorporateBusinessUnitsRequest) *NullableChangeCorporateBusinessUnitsRequest {
	return &NullableChangeCorporateBusinessUnitsRequest{value: val, isSet: true}
}

func (v NullableChangeCorporateBusinessUnitsRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableChangeCorporateBusinessUnitsRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


