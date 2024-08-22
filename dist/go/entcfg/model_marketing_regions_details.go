/*
OPERA Cloud Enterprise Configuration API

APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.4
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package entcfg

import (
	"encoding/json"
)

// checks if the MarketingRegionsDetails type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &MarketingRegionsDetails{}

// MarketingRegionsDetails Response object for fetching Marketing Regions.
type MarketingRegionsDetails struct {
	// List of Marketing Regions.
	MarketingRegions []MarketingRegionType `json:"marketingRegions,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewMarketingRegionsDetails instantiates a new MarketingRegionsDetails object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewMarketingRegionsDetails() *MarketingRegionsDetails {
	this := MarketingRegionsDetails{}
	return &this
}

// NewMarketingRegionsDetailsWithDefaults instantiates a new MarketingRegionsDetails object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewMarketingRegionsDetailsWithDefaults() *MarketingRegionsDetails {
	this := MarketingRegionsDetails{}
	return &this
}

// GetMarketingRegions returns the MarketingRegions field value if set, zero value otherwise.
func (o *MarketingRegionsDetails) GetMarketingRegions() []MarketingRegionType {
	if o == nil || IsNil(o.MarketingRegions) {
		var ret []MarketingRegionType
		return ret
	}
	return o.MarketingRegions
}

// GetMarketingRegionsOk returns a tuple with the MarketingRegions field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MarketingRegionsDetails) GetMarketingRegionsOk() ([]MarketingRegionType, bool) {
	if o == nil || IsNil(o.MarketingRegions) {
		return nil, false
	}
	return o.MarketingRegions, true
}

// HasMarketingRegions returns a boolean if a field has been set.
func (o *MarketingRegionsDetails) HasMarketingRegions() bool {
	if o != nil && !IsNil(o.MarketingRegions) {
		return true
	}

	return false
}

// SetMarketingRegions gets a reference to the given []MarketingRegionType and assigns it to the MarketingRegions field.
func (o *MarketingRegionsDetails) SetMarketingRegions(v []MarketingRegionType) {
	o.MarketingRegions = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *MarketingRegionsDetails) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MarketingRegionsDetails) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *MarketingRegionsDetails) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *MarketingRegionsDetails) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *MarketingRegionsDetails) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MarketingRegionsDetails) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *MarketingRegionsDetails) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *MarketingRegionsDetails) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o MarketingRegionsDetails) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o MarketingRegionsDetails) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.MarketingRegions) {
		toSerialize["marketingRegions"] = o.MarketingRegions
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableMarketingRegionsDetails struct {
	value *MarketingRegionsDetails
	isSet bool
}

func (v NullableMarketingRegionsDetails) Get() *MarketingRegionsDetails {
	return v.value
}

func (v *NullableMarketingRegionsDetails) Set(val *MarketingRegionsDetails) {
	v.value = val
	v.isSet = true
}

func (v NullableMarketingRegionsDetails) IsSet() bool {
	return v.isSet
}

func (v *NullableMarketingRegionsDetails) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableMarketingRegionsDetails(val *MarketingRegionsDetails) *NullableMarketingRegionsDetails {
	return &NullableMarketingRegionsDetails{value: val, isSet: true}
}

func (v NullableMarketingRegionsDetails) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableMarketingRegionsDetails) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


