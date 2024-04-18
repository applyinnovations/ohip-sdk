/*
OPERA Cloud Price Availability Rate API

APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package par

import (
	"encoding/json"
)

// checks if the ProfileTypeAddresses type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ProfileTypeAddresses{}

// ProfileTypeAddresses List of customer addresses.
type ProfileTypeAddresses struct {
	// Collection of Detailed information on an address for the customer.
	AddressInfo []AddressInfoType `json:"addressInfo,omitempty"`
	// Total number of rows returned
	Count *int32 `json:"count,omitempty"`
	// Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
	HasMore *bool `json:"hasMore,omitempty"`
	// Total number of rows queried
	TotalResults *int32 `json:"totalResults,omitempty"`
}

// NewProfileTypeAddresses instantiates a new ProfileTypeAddresses object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewProfileTypeAddresses() *ProfileTypeAddresses {
	this := ProfileTypeAddresses{}
	return &this
}

// NewProfileTypeAddressesWithDefaults instantiates a new ProfileTypeAddresses object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewProfileTypeAddressesWithDefaults() *ProfileTypeAddresses {
	this := ProfileTypeAddresses{}
	return &this
}

// GetAddressInfo returns the AddressInfo field value if set, zero value otherwise.
func (o *ProfileTypeAddresses) GetAddressInfo() []AddressInfoType {
	if o == nil || IsNil(o.AddressInfo) {
		var ret []AddressInfoType
		return ret
	}
	return o.AddressInfo
}

// GetAddressInfoOk returns a tuple with the AddressInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileTypeAddresses) GetAddressInfoOk() ([]AddressInfoType, bool) {
	if o == nil || IsNil(o.AddressInfo) {
		return nil, false
	}
	return o.AddressInfo, true
}

// HasAddressInfo returns a boolean if a field has been set.
func (o *ProfileTypeAddresses) HasAddressInfo() bool {
	if o != nil && !IsNil(o.AddressInfo) {
		return true
	}

	return false
}

// SetAddressInfo gets a reference to the given []AddressInfoType and assigns it to the AddressInfo field.
func (o *ProfileTypeAddresses) SetAddressInfo(v []AddressInfoType) {
	o.AddressInfo = v
}

// GetCount returns the Count field value if set, zero value otherwise.
func (o *ProfileTypeAddresses) GetCount() int32 {
	if o == nil || IsNil(o.Count) {
		var ret int32
		return ret
	}
	return *o.Count
}

// GetCountOk returns a tuple with the Count field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileTypeAddresses) GetCountOk() (*int32, bool) {
	if o == nil || IsNil(o.Count) {
		return nil, false
	}
	return o.Count, true
}

// HasCount returns a boolean if a field has been set.
func (o *ProfileTypeAddresses) HasCount() bool {
	if o != nil && !IsNil(o.Count) {
		return true
	}

	return false
}

// SetCount gets a reference to the given int32 and assigns it to the Count field.
func (o *ProfileTypeAddresses) SetCount(v int32) {
	o.Count = &v
}

// GetHasMore returns the HasMore field value if set, zero value otherwise.
func (o *ProfileTypeAddresses) GetHasMore() bool {
	if o == nil || IsNil(o.HasMore) {
		var ret bool
		return ret
	}
	return *o.HasMore
}

// GetHasMoreOk returns a tuple with the HasMore field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileTypeAddresses) GetHasMoreOk() (*bool, bool) {
	if o == nil || IsNil(o.HasMore) {
		return nil, false
	}
	return o.HasMore, true
}

// HasHasMore returns a boolean if a field has been set.
func (o *ProfileTypeAddresses) HasHasMore() bool {
	if o != nil && !IsNil(o.HasMore) {
		return true
	}

	return false
}

// SetHasMore gets a reference to the given bool and assigns it to the HasMore field.
func (o *ProfileTypeAddresses) SetHasMore(v bool) {
	o.HasMore = &v
}

// GetTotalResults returns the TotalResults field value if set, zero value otherwise.
func (o *ProfileTypeAddresses) GetTotalResults() int32 {
	if o == nil || IsNil(o.TotalResults) {
		var ret int32
		return ret
	}
	return *o.TotalResults
}

// GetTotalResultsOk returns a tuple with the TotalResults field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileTypeAddresses) GetTotalResultsOk() (*int32, bool) {
	if o == nil || IsNil(o.TotalResults) {
		return nil, false
	}
	return o.TotalResults, true
}

// HasTotalResults returns a boolean if a field has been set.
func (o *ProfileTypeAddresses) HasTotalResults() bool {
	if o != nil && !IsNil(o.TotalResults) {
		return true
	}

	return false
}

// SetTotalResults gets a reference to the given int32 and assigns it to the TotalResults field.
func (o *ProfileTypeAddresses) SetTotalResults(v int32) {
	o.TotalResults = &v
}

func (o ProfileTypeAddresses) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ProfileTypeAddresses) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AddressInfo) {
		toSerialize["addressInfo"] = o.AddressInfo
	}
	if !IsNil(o.Count) {
		toSerialize["count"] = o.Count
	}
	if !IsNil(o.HasMore) {
		toSerialize["hasMore"] = o.HasMore
	}
	if !IsNil(o.TotalResults) {
		toSerialize["totalResults"] = o.TotalResults
	}
	return toSerialize, nil
}

type NullableProfileTypeAddresses struct {
	value *ProfileTypeAddresses
	isSet bool
}

func (v NullableProfileTypeAddresses) Get() *ProfileTypeAddresses {
	return v.value
}

func (v *NullableProfileTypeAddresses) Set(val *ProfileTypeAddresses) {
	v.value = val
	v.isSet = true
}

func (v NullableProfileTypeAddresses) IsSet() bool {
	return v.isSet
}

func (v *NullableProfileTypeAddresses) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableProfileTypeAddresses(val *ProfileTypeAddresses) *NullableProfileTypeAddresses {
	return &NullableProfileTypeAddresses{value: val, isSet: true}
}

func (v NullableProfileTypeAddresses) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableProfileTypeAddresses) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

