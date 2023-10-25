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

// checks if the CopyMarketingCities type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CopyMarketingCities{}

// CopyMarketingCities Request object for copying template marketing cities to hotel(s).
type CopyMarketingCities struct {
	CopyInstructions *CopyMarketingCitiesType `json:"copyInstructions,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewCopyMarketingCities instantiates a new CopyMarketingCities object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCopyMarketingCities() *CopyMarketingCities {
	this := CopyMarketingCities{}
	return &this
}

// NewCopyMarketingCitiesWithDefaults instantiates a new CopyMarketingCities object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCopyMarketingCitiesWithDefaults() *CopyMarketingCities {
	this := CopyMarketingCities{}
	return &this
}

// GetCopyInstructions returns the CopyInstructions field value if set, zero value otherwise.
func (o *CopyMarketingCities) GetCopyInstructions() CopyMarketingCitiesType {
	if o == nil || IsNil(o.CopyInstructions) {
		var ret CopyMarketingCitiesType
		return ret
	}
	return *o.CopyInstructions
}

// GetCopyInstructionsOk returns a tuple with the CopyInstructions field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyMarketingCities) GetCopyInstructionsOk() (*CopyMarketingCitiesType, bool) {
	if o == nil || IsNil(o.CopyInstructions) {
		return nil, false
	}
	return o.CopyInstructions, true
}

// HasCopyInstructions returns a boolean if a field has been set.
func (o *CopyMarketingCities) HasCopyInstructions() bool {
	if o != nil && !IsNil(o.CopyInstructions) {
		return true
	}

	return false
}

// SetCopyInstructions gets a reference to the given CopyMarketingCitiesType and assigns it to the CopyInstructions field.
func (o *CopyMarketingCities) SetCopyInstructions(v CopyMarketingCitiesType) {
	o.CopyInstructions = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *CopyMarketingCities) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyMarketingCities) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *CopyMarketingCities) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *CopyMarketingCities) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *CopyMarketingCities) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyMarketingCities) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *CopyMarketingCities) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *CopyMarketingCities) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o CopyMarketingCities) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CopyMarketingCities) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CopyInstructions) {
		toSerialize["copyInstructions"] = o.CopyInstructions
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableCopyMarketingCities struct {
	value *CopyMarketingCities
	isSet bool
}

func (v NullableCopyMarketingCities) Get() *CopyMarketingCities {
	return v.value
}

func (v *NullableCopyMarketingCities) Set(val *CopyMarketingCities) {
	v.value = val
	v.isSet = true
}

func (v NullableCopyMarketingCities) IsSet() bool {
	return v.isSet
}

func (v *NullableCopyMarketingCities) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCopyMarketingCities(val *CopyMarketingCities) *NullableCopyMarketingCities {
	return &NullableCopyMarketingCities{value: val, isSet: true}
}

func (v NullableCopyMarketingCities) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCopyMarketingCities) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


