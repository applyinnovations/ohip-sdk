/*
OPERA Cloud Block API

APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package blk

import (
	"encoding/json"
)

// checks if the ProfileTypePreferenceCollection type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ProfileTypePreferenceCollection{}

// ProfileTypePreferenceCollection List of customer preferences.
type ProfileTypePreferenceCollection struct {
	// Total number of rows returned
	Count *int32 `json:"count,omitempty"`
	// Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
	HasMore *bool `json:"hasMore,omitempty"`
	// Collection of Detailed information on preferences of the customer.
	PreferenceType []PreferenceTypeType `json:"preferenceType,omitempty"`
	// Total number of rows queried
	TotalResults *int32 `json:"totalResults,omitempty"`
}

// NewProfileTypePreferenceCollection instantiates a new ProfileTypePreferenceCollection object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewProfileTypePreferenceCollection() *ProfileTypePreferenceCollection {
	this := ProfileTypePreferenceCollection{}
	return &this
}

// NewProfileTypePreferenceCollectionWithDefaults instantiates a new ProfileTypePreferenceCollection object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewProfileTypePreferenceCollectionWithDefaults() *ProfileTypePreferenceCollection {
	this := ProfileTypePreferenceCollection{}
	return &this
}

// GetCount returns the Count field value if set, zero value otherwise.
func (o *ProfileTypePreferenceCollection) GetCount() int32 {
	if o == nil || IsNil(o.Count) {
		var ret int32
		return ret
	}
	return *o.Count
}

// GetCountOk returns a tuple with the Count field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileTypePreferenceCollection) GetCountOk() (*int32, bool) {
	if o == nil || IsNil(o.Count) {
		return nil, false
	}
	return o.Count, true
}

// HasCount returns a boolean if a field has been set.
func (o *ProfileTypePreferenceCollection) HasCount() bool {
	if o != nil && !IsNil(o.Count) {
		return true
	}

	return false
}

// SetCount gets a reference to the given int32 and assigns it to the Count field.
func (o *ProfileTypePreferenceCollection) SetCount(v int32) {
	o.Count = &v
}

// GetHasMore returns the HasMore field value if set, zero value otherwise.
func (o *ProfileTypePreferenceCollection) GetHasMore() bool {
	if o == nil || IsNil(o.HasMore) {
		var ret bool
		return ret
	}
	return *o.HasMore
}

// GetHasMoreOk returns a tuple with the HasMore field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileTypePreferenceCollection) GetHasMoreOk() (*bool, bool) {
	if o == nil || IsNil(o.HasMore) {
		return nil, false
	}
	return o.HasMore, true
}

// HasHasMore returns a boolean if a field has been set.
func (o *ProfileTypePreferenceCollection) HasHasMore() bool {
	if o != nil && !IsNil(o.HasMore) {
		return true
	}

	return false
}

// SetHasMore gets a reference to the given bool and assigns it to the HasMore field.
func (o *ProfileTypePreferenceCollection) SetHasMore(v bool) {
	o.HasMore = &v
}

// GetPreferenceType returns the PreferenceType field value if set, zero value otherwise.
func (o *ProfileTypePreferenceCollection) GetPreferenceType() []PreferenceTypeType {
	if o == nil || IsNil(o.PreferenceType) {
		var ret []PreferenceTypeType
		return ret
	}
	return o.PreferenceType
}

// GetPreferenceTypeOk returns a tuple with the PreferenceType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileTypePreferenceCollection) GetPreferenceTypeOk() ([]PreferenceTypeType, bool) {
	if o == nil || IsNil(o.PreferenceType) {
		return nil, false
	}
	return o.PreferenceType, true
}

// HasPreferenceType returns a boolean if a field has been set.
func (o *ProfileTypePreferenceCollection) HasPreferenceType() bool {
	if o != nil && !IsNil(o.PreferenceType) {
		return true
	}

	return false
}

// SetPreferenceType gets a reference to the given []PreferenceTypeType and assigns it to the PreferenceType field.
func (o *ProfileTypePreferenceCollection) SetPreferenceType(v []PreferenceTypeType) {
	o.PreferenceType = v
}

// GetTotalResults returns the TotalResults field value if set, zero value otherwise.
func (o *ProfileTypePreferenceCollection) GetTotalResults() int32 {
	if o == nil || IsNil(o.TotalResults) {
		var ret int32
		return ret
	}
	return *o.TotalResults
}

// GetTotalResultsOk returns a tuple with the TotalResults field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileTypePreferenceCollection) GetTotalResultsOk() (*int32, bool) {
	if o == nil || IsNil(o.TotalResults) {
		return nil, false
	}
	return o.TotalResults, true
}

// HasTotalResults returns a boolean if a field has been set.
func (o *ProfileTypePreferenceCollection) HasTotalResults() bool {
	if o != nil && !IsNil(o.TotalResults) {
		return true
	}

	return false
}

// SetTotalResults gets a reference to the given int32 and assigns it to the TotalResults field.
func (o *ProfileTypePreferenceCollection) SetTotalResults(v int32) {
	o.TotalResults = &v
}

func (o ProfileTypePreferenceCollection) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ProfileTypePreferenceCollection) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Count) {
		toSerialize["count"] = o.Count
	}
	if !IsNil(o.HasMore) {
		toSerialize["hasMore"] = o.HasMore
	}
	if !IsNil(o.PreferenceType) {
		toSerialize["preferenceType"] = o.PreferenceType
	}
	if !IsNil(o.TotalResults) {
		toSerialize["totalResults"] = o.TotalResults
	}
	return toSerialize, nil
}

type NullableProfileTypePreferenceCollection struct {
	value *ProfileTypePreferenceCollection
	isSet bool
}

func (v NullableProfileTypePreferenceCollection) Get() *ProfileTypePreferenceCollection {
	return v.value
}

func (v *NullableProfileTypePreferenceCollection) Set(val *ProfileTypePreferenceCollection) {
	v.value = val
	v.isSet = true
}

func (v NullableProfileTypePreferenceCollection) IsSet() bool {
	return v.isSet
}

func (v *NullableProfileTypePreferenceCollection) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableProfileTypePreferenceCollection(val *ProfileTypePreferenceCollection) *NullableProfileTypePreferenceCollection {
	return &NullableProfileTypePreferenceCollection{value: val, isSet: true}
}

func (v NullableProfileTypePreferenceCollection) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableProfileTypePreferenceCollection) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


