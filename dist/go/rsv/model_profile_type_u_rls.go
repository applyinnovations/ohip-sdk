/*
OPERA Cloud Reservation API

APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsv

import (
	"encoding/json"
)

// checks if the ProfileTypeURLs type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ProfileTypeURLs{}

// ProfileTypeURLs List of Information on a URL for the customer.
type ProfileTypeURLs struct {
	// Total number of rows returned
	Count *int32 `json:"count,omitempty"`
	// Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
	HasMore *bool `json:"hasMore,omitempty"`
	// Total number of rows queried
	TotalResults *int32 `json:"totalResults,omitempty"`
	// Collection of Detailed information on web url/address for the customer.
	URLInfo []URLInfoType `json:"uRLInfo,omitempty"`
}

// NewProfileTypeURLs instantiates a new ProfileTypeURLs object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewProfileTypeURLs() *ProfileTypeURLs {
	this := ProfileTypeURLs{}
	return &this
}

// NewProfileTypeURLsWithDefaults instantiates a new ProfileTypeURLs object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewProfileTypeURLsWithDefaults() *ProfileTypeURLs {
	this := ProfileTypeURLs{}
	return &this
}

// GetCount returns the Count field value if set, zero value otherwise.
func (o *ProfileTypeURLs) GetCount() int32 {
	if o == nil || IsNil(o.Count) {
		var ret int32
		return ret
	}
	return *o.Count
}

// GetCountOk returns a tuple with the Count field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileTypeURLs) GetCountOk() (*int32, bool) {
	if o == nil || IsNil(o.Count) {
		return nil, false
	}
	return o.Count, true
}

// HasCount returns a boolean if a field has been set.
func (o *ProfileTypeURLs) HasCount() bool {
	if o != nil && !IsNil(o.Count) {
		return true
	}

	return false
}

// SetCount gets a reference to the given int32 and assigns it to the Count field.
func (o *ProfileTypeURLs) SetCount(v int32) {
	o.Count = &v
}

// GetHasMore returns the HasMore field value if set, zero value otherwise.
func (o *ProfileTypeURLs) GetHasMore() bool {
	if o == nil || IsNil(o.HasMore) {
		var ret bool
		return ret
	}
	return *o.HasMore
}

// GetHasMoreOk returns a tuple with the HasMore field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileTypeURLs) GetHasMoreOk() (*bool, bool) {
	if o == nil || IsNil(o.HasMore) {
		return nil, false
	}
	return o.HasMore, true
}

// HasHasMore returns a boolean if a field has been set.
func (o *ProfileTypeURLs) HasHasMore() bool {
	if o != nil && !IsNil(o.HasMore) {
		return true
	}

	return false
}

// SetHasMore gets a reference to the given bool and assigns it to the HasMore field.
func (o *ProfileTypeURLs) SetHasMore(v bool) {
	o.HasMore = &v
}

// GetTotalResults returns the TotalResults field value if set, zero value otherwise.
func (o *ProfileTypeURLs) GetTotalResults() int32 {
	if o == nil || IsNil(o.TotalResults) {
		var ret int32
		return ret
	}
	return *o.TotalResults
}

// GetTotalResultsOk returns a tuple with the TotalResults field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileTypeURLs) GetTotalResultsOk() (*int32, bool) {
	if o == nil || IsNil(o.TotalResults) {
		return nil, false
	}
	return o.TotalResults, true
}

// HasTotalResults returns a boolean if a field has been set.
func (o *ProfileTypeURLs) HasTotalResults() bool {
	if o != nil && !IsNil(o.TotalResults) {
		return true
	}

	return false
}

// SetTotalResults gets a reference to the given int32 and assigns it to the TotalResults field.
func (o *ProfileTypeURLs) SetTotalResults(v int32) {
	o.TotalResults = &v
}

// GetURLInfo returns the URLInfo field value if set, zero value otherwise.
func (o *ProfileTypeURLs) GetURLInfo() []URLInfoType {
	if o == nil || IsNil(o.URLInfo) {
		var ret []URLInfoType
		return ret
	}
	return o.URLInfo
}

// GetURLInfoOk returns a tuple with the URLInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileTypeURLs) GetURLInfoOk() ([]URLInfoType, bool) {
	if o == nil || IsNil(o.URLInfo) {
		return nil, false
	}
	return o.URLInfo, true
}

// HasURLInfo returns a boolean if a field has been set.
func (o *ProfileTypeURLs) HasURLInfo() bool {
	if o != nil && !IsNil(o.URLInfo) {
		return true
	}

	return false
}

// SetURLInfo gets a reference to the given []URLInfoType and assigns it to the URLInfo field.
func (o *ProfileTypeURLs) SetURLInfo(v []URLInfoType) {
	o.URLInfo = v
}

func (o ProfileTypeURLs) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ProfileTypeURLs) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Count) {
		toSerialize["count"] = o.Count
	}
	if !IsNil(o.HasMore) {
		toSerialize["hasMore"] = o.HasMore
	}
	if !IsNil(o.TotalResults) {
		toSerialize["totalResults"] = o.TotalResults
	}
	if !IsNil(o.URLInfo) {
		toSerialize["uRLInfo"] = o.URLInfo
	}
	return toSerialize, nil
}

type NullableProfileTypeURLs struct {
	value *ProfileTypeURLs
	isSet bool
}

func (v NullableProfileTypeURLs) Get() *ProfileTypeURLs {
	return v.value
}

func (v *NullableProfileTypeURLs) Set(val *ProfileTypeURLs) {
	v.value = val
	v.isSet = true
}

func (v NullableProfileTypeURLs) IsSet() bool {
	return v.isSet
}

func (v *NullableProfileTypeURLs) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableProfileTypeURLs(val *ProfileTypeURLs) *NullableProfileTypeURLs {
	return &NullableProfileTypeURLs{value: val, isSet: true}
}

func (v NullableProfileTypeURLs) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableProfileTypeURLs) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


