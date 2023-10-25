/*
OPERA Cloud Rate API

APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rtp

import (
	"encoding/json"
)

// checks if the DistributedNegotiatedRates type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &DistributedNegotiatedRates{}

// DistributedNegotiatedRates Request object for distribute negotiated rates. This object contains a list of negotiated rates that are to be distributed and a list of properties to which to distribute to.
type DistributedNegotiatedRates struct {
	// Hotel code.
	HotelCodeList []string `json:"hotelCodeList,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// List of Negotiated rates to be maintained.
	NegotiatedRateList []NegotiatedRateType `json:"negotiatedRateList,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewDistributedNegotiatedRates instantiates a new DistributedNegotiatedRates object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewDistributedNegotiatedRates() *DistributedNegotiatedRates {
	this := DistributedNegotiatedRates{}
	return &this
}

// NewDistributedNegotiatedRatesWithDefaults instantiates a new DistributedNegotiatedRates object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewDistributedNegotiatedRatesWithDefaults() *DistributedNegotiatedRates {
	this := DistributedNegotiatedRates{}
	return &this
}

// GetHotelCodeList returns the HotelCodeList field value if set, zero value otherwise.
func (o *DistributedNegotiatedRates) GetHotelCodeList() []string {
	if o == nil || IsNil(o.HotelCodeList) {
		var ret []string
		return ret
	}
	return o.HotelCodeList
}

// GetHotelCodeListOk returns a tuple with the HotelCodeList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DistributedNegotiatedRates) GetHotelCodeListOk() ([]string, bool) {
	if o == nil || IsNil(o.HotelCodeList) {
		return nil, false
	}
	return o.HotelCodeList, true
}

// HasHotelCodeList returns a boolean if a field has been set.
func (o *DistributedNegotiatedRates) HasHotelCodeList() bool {
	if o != nil && !IsNil(o.HotelCodeList) {
		return true
	}

	return false
}

// SetHotelCodeList gets a reference to the given []string and assigns it to the HotelCodeList field.
func (o *DistributedNegotiatedRates) SetHotelCodeList(v []string) {
	o.HotelCodeList = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *DistributedNegotiatedRates) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DistributedNegotiatedRates) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *DistributedNegotiatedRates) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *DistributedNegotiatedRates) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetNegotiatedRateList returns the NegotiatedRateList field value if set, zero value otherwise.
func (o *DistributedNegotiatedRates) GetNegotiatedRateList() []NegotiatedRateType {
	if o == nil || IsNil(o.NegotiatedRateList) {
		var ret []NegotiatedRateType
		return ret
	}
	return o.NegotiatedRateList
}

// GetNegotiatedRateListOk returns a tuple with the NegotiatedRateList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DistributedNegotiatedRates) GetNegotiatedRateListOk() ([]NegotiatedRateType, bool) {
	if o == nil || IsNil(o.NegotiatedRateList) {
		return nil, false
	}
	return o.NegotiatedRateList, true
}

// HasNegotiatedRateList returns a boolean if a field has been set.
func (o *DistributedNegotiatedRates) HasNegotiatedRateList() bool {
	if o != nil && !IsNil(o.NegotiatedRateList) {
		return true
	}

	return false
}

// SetNegotiatedRateList gets a reference to the given []NegotiatedRateType and assigns it to the NegotiatedRateList field.
func (o *DistributedNegotiatedRates) SetNegotiatedRateList(v []NegotiatedRateType) {
	o.NegotiatedRateList = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *DistributedNegotiatedRates) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DistributedNegotiatedRates) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *DistributedNegotiatedRates) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *DistributedNegotiatedRates) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o DistributedNegotiatedRates) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o DistributedNegotiatedRates) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.HotelCodeList) {
		toSerialize["hotelCodeList"] = o.HotelCodeList
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.NegotiatedRateList) {
		toSerialize["negotiatedRateList"] = o.NegotiatedRateList
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableDistributedNegotiatedRates struct {
	value *DistributedNegotiatedRates
	isSet bool
}

func (v NullableDistributedNegotiatedRates) Get() *DistributedNegotiatedRates {
	return v.value
}

func (v *NullableDistributedNegotiatedRates) Set(val *DistributedNegotiatedRates) {
	v.value = val
	v.isSet = true
}

func (v NullableDistributedNegotiatedRates) IsSet() bool {
	return v.isSet
}

func (v *NullableDistributedNegotiatedRates) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableDistributedNegotiatedRates(val *DistributedNegotiatedRates) *NullableDistributedNegotiatedRates {
	return &NullableDistributedNegotiatedRates{value: val, isSet: true}
}

func (v NullableDistributedNegotiatedRates) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableDistributedNegotiatedRates) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


