/*
OPERA Cloud Integration Configuration API

APIs catering to Integration Configuration in OPERA Cloud.  Operations such as get Hotel Interface Types, or get UDF mappings can be found in this module.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.4
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package intcfg

import (
	"encoding/json"
)

// checks if the FetchedHotelInterfaceDetails type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &FetchedHotelInterfaceDetails{}

// FetchedHotelInterfaceDetails Response object for retrieving the details of a Hotel Interface.
type FetchedHotelInterfaceDetails struct {
	Details *HotelInterfaceDetailType `json:"details,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewFetchedHotelInterfaceDetails instantiates a new FetchedHotelInterfaceDetails object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewFetchedHotelInterfaceDetails() *FetchedHotelInterfaceDetails {
	this := FetchedHotelInterfaceDetails{}
	return &this
}

// NewFetchedHotelInterfaceDetailsWithDefaults instantiates a new FetchedHotelInterfaceDetails object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewFetchedHotelInterfaceDetailsWithDefaults() *FetchedHotelInterfaceDetails {
	this := FetchedHotelInterfaceDetails{}
	return &this
}

// GetDetails returns the Details field value if set, zero value otherwise.
func (o *FetchedHotelInterfaceDetails) GetDetails() HotelInterfaceDetailType {
	if o == nil || IsNil(o.Details) {
		var ret HotelInterfaceDetailType
		return ret
	}
	return *o.Details
}

// GetDetailsOk returns a tuple with the Details field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FetchedHotelInterfaceDetails) GetDetailsOk() (*HotelInterfaceDetailType, bool) {
	if o == nil || IsNil(o.Details) {
		return nil, false
	}
	return o.Details, true
}

// HasDetails returns a boolean if a field has been set.
func (o *FetchedHotelInterfaceDetails) HasDetails() bool {
	if o != nil && !IsNil(o.Details) {
		return true
	}

	return false
}

// SetDetails gets a reference to the given HotelInterfaceDetailType and assigns it to the Details field.
func (o *FetchedHotelInterfaceDetails) SetDetails(v HotelInterfaceDetailType) {
	o.Details = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *FetchedHotelInterfaceDetails) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FetchedHotelInterfaceDetails) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *FetchedHotelInterfaceDetails) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *FetchedHotelInterfaceDetails) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *FetchedHotelInterfaceDetails) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FetchedHotelInterfaceDetails) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *FetchedHotelInterfaceDetails) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *FetchedHotelInterfaceDetails) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o FetchedHotelInterfaceDetails) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o FetchedHotelInterfaceDetails) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Details) {
		toSerialize["details"] = o.Details
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableFetchedHotelInterfaceDetails struct {
	value *FetchedHotelInterfaceDetails
	isSet bool
}

func (v NullableFetchedHotelInterfaceDetails) Get() *FetchedHotelInterfaceDetails {
	return v.value
}

func (v *NullableFetchedHotelInterfaceDetails) Set(val *FetchedHotelInterfaceDetails) {
	v.value = val
	v.isSet = true
}

func (v NullableFetchedHotelInterfaceDetails) IsSet() bool {
	return v.isSet
}

func (v *NullableFetchedHotelInterfaceDetails) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableFetchedHotelInterfaceDetails(val *FetchedHotelInterfaceDetails) *NullableFetchedHotelInterfaceDetails {
	return &NullableFetchedHotelInterfaceDetails{value: val, isSet: true}
}

func (v NullableFetchedHotelInterfaceDetails) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableFetchedHotelInterfaceDetails) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

