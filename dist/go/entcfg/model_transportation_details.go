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

// checks if the TransportationDetails type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TransportationDetails{}

// TransportationDetails Response object for information regarding transportation.
type TransportationDetails struct {
	Links []InstanceLink `json:"links,omitempty"`
	// Collection of hotel level transportation.
	TransportationList []TransportationType `json:"transportationList,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewTransportationDetails instantiates a new TransportationDetails object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTransportationDetails() *TransportationDetails {
	this := TransportationDetails{}
	return &this
}

// NewTransportationDetailsWithDefaults instantiates a new TransportationDetails object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTransportationDetailsWithDefaults() *TransportationDetails {
	this := TransportationDetails{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *TransportationDetails) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TransportationDetails) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *TransportationDetails) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *TransportationDetails) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetTransportationList returns the TransportationList field value if set, zero value otherwise.
func (o *TransportationDetails) GetTransportationList() []TransportationType {
	if o == nil || IsNil(o.TransportationList) {
		var ret []TransportationType
		return ret
	}
	return o.TransportationList
}

// GetTransportationListOk returns a tuple with the TransportationList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TransportationDetails) GetTransportationListOk() ([]TransportationType, bool) {
	if o == nil || IsNil(o.TransportationList) {
		return nil, false
	}
	return o.TransportationList, true
}

// HasTransportationList returns a boolean if a field has been set.
func (o *TransportationDetails) HasTransportationList() bool {
	if o != nil && !IsNil(o.TransportationList) {
		return true
	}

	return false
}

// SetTransportationList gets a reference to the given []TransportationType and assigns it to the TransportationList field.
func (o *TransportationDetails) SetTransportationList(v []TransportationType) {
	o.TransportationList = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *TransportationDetails) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TransportationDetails) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *TransportationDetails) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *TransportationDetails) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o TransportationDetails) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TransportationDetails) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.TransportationList) {
		toSerialize["transportationList"] = o.TransportationList
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableTransportationDetails struct {
	value *TransportationDetails
	isSet bool
}

func (v NullableTransportationDetails) Get() *TransportationDetails {
	return v.value
}

func (v *NullableTransportationDetails) Set(val *TransportationDetails) {
	v.value = val
	v.isSet = true
}

func (v NullableTransportationDetails) IsSet() bool {
	return v.isSet
}

func (v *NullableTransportationDetails) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTransportationDetails(val *TransportationDetails) *NullableTransportationDetails {
	return &NullableTransportationDetails{value: val, isSet: true}
}

func (v NullableTransportationDetails) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTransportationDetails) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


