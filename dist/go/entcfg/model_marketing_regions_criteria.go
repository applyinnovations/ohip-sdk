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

// checks if the MarketingRegionsCriteria type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &MarketingRegionsCriteria{}

// MarketingRegionsCriteria Request object for creating Marketing Regions.
type MarketingRegionsCriteria struct {
	Links []InstanceLink `json:"links,omitempty"`
	// List of Marketing Regions.
	MarketingRegions []MarketingRegionType `json:"marketingRegions,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewMarketingRegionsCriteria instantiates a new MarketingRegionsCriteria object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewMarketingRegionsCriteria() *MarketingRegionsCriteria {
	this := MarketingRegionsCriteria{}
	return &this
}

// NewMarketingRegionsCriteriaWithDefaults instantiates a new MarketingRegionsCriteria object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewMarketingRegionsCriteriaWithDefaults() *MarketingRegionsCriteria {
	this := MarketingRegionsCriteria{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *MarketingRegionsCriteria) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MarketingRegionsCriteria) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *MarketingRegionsCriteria) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *MarketingRegionsCriteria) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetMarketingRegions returns the MarketingRegions field value if set, zero value otherwise.
func (o *MarketingRegionsCriteria) GetMarketingRegions() []MarketingRegionType {
	if o == nil || IsNil(o.MarketingRegions) {
		var ret []MarketingRegionType
		return ret
	}
	return o.MarketingRegions
}

// GetMarketingRegionsOk returns a tuple with the MarketingRegions field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MarketingRegionsCriteria) GetMarketingRegionsOk() ([]MarketingRegionType, bool) {
	if o == nil || IsNil(o.MarketingRegions) {
		return nil, false
	}
	return o.MarketingRegions, true
}

// HasMarketingRegions returns a boolean if a field has been set.
func (o *MarketingRegionsCriteria) HasMarketingRegions() bool {
	if o != nil && !IsNil(o.MarketingRegions) {
		return true
	}

	return false
}

// SetMarketingRegions gets a reference to the given []MarketingRegionType and assigns it to the MarketingRegions field.
func (o *MarketingRegionsCriteria) SetMarketingRegions(v []MarketingRegionType) {
	o.MarketingRegions = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *MarketingRegionsCriteria) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MarketingRegionsCriteria) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *MarketingRegionsCriteria) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *MarketingRegionsCriteria) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o MarketingRegionsCriteria) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o MarketingRegionsCriteria) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.MarketingRegions) {
		toSerialize["marketingRegions"] = o.MarketingRegions
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableMarketingRegionsCriteria struct {
	value *MarketingRegionsCriteria
	isSet bool
}

func (v NullableMarketingRegionsCriteria) Get() *MarketingRegionsCriteria {
	return v.value
}

func (v *NullableMarketingRegionsCriteria) Set(val *MarketingRegionsCriteria) {
	v.value = val
	v.isSet = true
}

func (v NullableMarketingRegionsCriteria) IsSet() bool {
	return v.isSet
}

func (v *NullableMarketingRegionsCriteria) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableMarketingRegionsCriteria(val *MarketingRegionsCriteria) *NullableMarketingRegionsCriteria {
	return &NullableMarketingRegionsCriteria{value: val, isSet: true}
}

func (v NullableMarketingRegionsCriteria) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableMarketingRegionsCriteria) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


