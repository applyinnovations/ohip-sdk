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

// checks if the PutHotelPackageForecastGroupsRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PutHotelPackageForecastGroupsRequest{}

// PutHotelPackageForecastGroupsRequest struct for PutHotelPackageForecastGroupsRequest
type PutHotelPackageForecastGroupsRequest struct {
	// Hotel package forecast group details.
	HotelPackageForecastGroups []HotelPackageForecastGroupType `json:"hotelPackageForecastGroups,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewPutHotelPackageForecastGroupsRequest instantiates a new PutHotelPackageForecastGroupsRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPutHotelPackageForecastGroupsRequest() *PutHotelPackageForecastGroupsRequest {
	this := PutHotelPackageForecastGroupsRequest{}
	return &this
}

// NewPutHotelPackageForecastGroupsRequestWithDefaults instantiates a new PutHotelPackageForecastGroupsRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPutHotelPackageForecastGroupsRequestWithDefaults() *PutHotelPackageForecastGroupsRequest {
	this := PutHotelPackageForecastGroupsRequest{}
	return &this
}

// GetHotelPackageForecastGroups returns the HotelPackageForecastGroups field value if set, zero value otherwise.
func (o *PutHotelPackageForecastGroupsRequest) GetHotelPackageForecastGroups() []HotelPackageForecastGroupType {
	if o == nil || IsNil(o.HotelPackageForecastGroups) {
		var ret []HotelPackageForecastGroupType
		return ret
	}
	return o.HotelPackageForecastGroups
}

// GetHotelPackageForecastGroupsOk returns a tuple with the HotelPackageForecastGroups field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PutHotelPackageForecastGroupsRequest) GetHotelPackageForecastGroupsOk() ([]HotelPackageForecastGroupType, bool) {
	if o == nil || IsNil(o.HotelPackageForecastGroups) {
		return nil, false
	}
	return o.HotelPackageForecastGroups, true
}

// HasHotelPackageForecastGroups returns a boolean if a field has been set.
func (o *PutHotelPackageForecastGroupsRequest) HasHotelPackageForecastGroups() bool {
	if o != nil && !IsNil(o.HotelPackageForecastGroups) {
		return true
	}

	return false
}

// SetHotelPackageForecastGroups gets a reference to the given []HotelPackageForecastGroupType and assigns it to the HotelPackageForecastGroups field.
func (o *PutHotelPackageForecastGroupsRequest) SetHotelPackageForecastGroups(v []HotelPackageForecastGroupType) {
	o.HotelPackageForecastGroups = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *PutHotelPackageForecastGroupsRequest) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PutHotelPackageForecastGroupsRequest) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *PutHotelPackageForecastGroupsRequest) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *PutHotelPackageForecastGroupsRequest) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *PutHotelPackageForecastGroupsRequest) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PutHotelPackageForecastGroupsRequest) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *PutHotelPackageForecastGroupsRequest) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *PutHotelPackageForecastGroupsRequest) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o PutHotelPackageForecastGroupsRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PutHotelPackageForecastGroupsRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.HotelPackageForecastGroups) {
		toSerialize["hotelPackageForecastGroups"] = o.HotelPackageForecastGroups
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullablePutHotelPackageForecastGroupsRequest struct {
	value *PutHotelPackageForecastGroupsRequest
	isSet bool
}

func (v NullablePutHotelPackageForecastGroupsRequest) Get() *PutHotelPackageForecastGroupsRequest {
	return v.value
}

func (v *NullablePutHotelPackageForecastGroupsRequest) Set(val *PutHotelPackageForecastGroupsRequest) {
	v.value = val
	v.isSet = true
}

func (v NullablePutHotelPackageForecastGroupsRequest) IsSet() bool {
	return v.isSet
}

func (v *NullablePutHotelPackageForecastGroupsRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePutHotelPackageForecastGroupsRequest(val *PutHotelPackageForecastGroupsRequest) *NullablePutHotelPackageForecastGroupsRequest {
	return &NullablePutHotelPackageForecastGroupsRequest{value: val, isSet: true}
}

func (v NullablePutHotelPackageForecastGroupsRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePutHotelPackageForecastGroupsRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


