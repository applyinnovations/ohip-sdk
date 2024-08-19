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

// checks if the ProfileTypeRelationshipsSummary type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ProfileTypeRelationshipsSummary{}

// ProfileTypeRelationshipsSummary Contains a collection of profiles that have a relationship with this profile.
type ProfileTypeRelationshipsSummary struct {
	// Total number of rows returned
	Count *int32 `json:"count,omitempty"`
	// Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
	HasMore *bool `json:"hasMore,omitempty"`
	// A collection of the profiles summary that have a relationship with this profile.
	Relationship []RelationshipInfoSummaryType `json:"relationship,omitempty"`
	// Total number of rows queried
	TotalResults *int32 `json:"totalResults,omitempty"`
}

// NewProfileTypeRelationshipsSummary instantiates a new ProfileTypeRelationshipsSummary object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewProfileTypeRelationshipsSummary() *ProfileTypeRelationshipsSummary {
	this := ProfileTypeRelationshipsSummary{}
	return &this
}

// NewProfileTypeRelationshipsSummaryWithDefaults instantiates a new ProfileTypeRelationshipsSummary object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewProfileTypeRelationshipsSummaryWithDefaults() *ProfileTypeRelationshipsSummary {
	this := ProfileTypeRelationshipsSummary{}
	return &this
}

// GetCount returns the Count field value if set, zero value otherwise.
func (o *ProfileTypeRelationshipsSummary) GetCount() int32 {
	if o == nil || IsNil(o.Count) {
		var ret int32
		return ret
	}
	return *o.Count
}

// GetCountOk returns a tuple with the Count field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileTypeRelationshipsSummary) GetCountOk() (*int32, bool) {
	if o == nil || IsNil(o.Count) {
		return nil, false
	}
	return o.Count, true
}

// HasCount returns a boolean if a field has been set.
func (o *ProfileTypeRelationshipsSummary) HasCount() bool {
	if o != nil && !IsNil(o.Count) {
		return true
	}

	return false
}

// SetCount gets a reference to the given int32 and assigns it to the Count field.
func (o *ProfileTypeRelationshipsSummary) SetCount(v int32) {
	o.Count = &v
}

// GetHasMore returns the HasMore field value if set, zero value otherwise.
func (o *ProfileTypeRelationshipsSummary) GetHasMore() bool {
	if o == nil || IsNil(o.HasMore) {
		var ret bool
		return ret
	}
	return *o.HasMore
}

// GetHasMoreOk returns a tuple with the HasMore field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileTypeRelationshipsSummary) GetHasMoreOk() (*bool, bool) {
	if o == nil || IsNil(o.HasMore) {
		return nil, false
	}
	return o.HasMore, true
}

// HasHasMore returns a boolean if a field has been set.
func (o *ProfileTypeRelationshipsSummary) HasHasMore() bool {
	if o != nil && !IsNil(o.HasMore) {
		return true
	}

	return false
}

// SetHasMore gets a reference to the given bool and assigns it to the HasMore field.
func (o *ProfileTypeRelationshipsSummary) SetHasMore(v bool) {
	o.HasMore = &v
}

// GetRelationship returns the Relationship field value if set, zero value otherwise.
func (o *ProfileTypeRelationshipsSummary) GetRelationship() []RelationshipInfoSummaryType {
	if o == nil || IsNil(o.Relationship) {
		var ret []RelationshipInfoSummaryType
		return ret
	}
	return o.Relationship
}

// GetRelationshipOk returns a tuple with the Relationship field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileTypeRelationshipsSummary) GetRelationshipOk() ([]RelationshipInfoSummaryType, bool) {
	if o == nil || IsNil(o.Relationship) {
		return nil, false
	}
	return o.Relationship, true
}

// HasRelationship returns a boolean if a field has been set.
func (o *ProfileTypeRelationshipsSummary) HasRelationship() bool {
	if o != nil && !IsNil(o.Relationship) {
		return true
	}

	return false
}

// SetRelationship gets a reference to the given []RelationshipInfoSummaryType and assigns it to the Relationship field.
func (o *ProfileTypeRelationshipsSummary) SetRelationship(v []RelationshipInfoSummaryType) {
	o.Relationship = v
}

// GetTotalResults returns the TotalResults field value if set, zero value otherwise.
func (o *ProfileTypeRelationshipsSummary) GetTotalResults() int32 {
	if o == nil || IsNil(o.TotalResults) {
		var ret int32
		return ret
	}
	return *o.TotalResults
}

// GetTotalResultsOk returns a tuple with the TotalResults field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileTypeRelationshipsSummary) GetTotalResultsOk() (*int32, bool) {
	if o == nil || IsNil(o.TotalResults) {
		return nil, false
	}
	return o.TotalResults, true
}

// HasTotalResults returns a boolean if a field has been set.
func (o *ProfileTypeRelationshipsSummary) HasTotalResults() bool {
	if o != nil && !IsNil(o.TotalResults) {
		return true
	}

	return false
}

// SetTotalResults gets a reference to the given int32 and assigns it to the TotalResults field.
func (o *ProfileTypeRelationshipsSummary) SetTotalResults(v int32) {
	o.TotalResults = &v
}

func (o ProfileTypeRelationshipsSummary) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ProfileTypeRelationshipsSummary) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Count) {
		toSerialize["count"] = o.Count
	}
	if !IsNil(o.HasMore) {
		toSerialize["hasMore"] = o.HasMore
	}
	if !IsNil(o.Relationship) {
		toSerialize["relationship"] = o.Relationship
	}
	if !IsNil(o.TotalResults) {
		toSerialize["totalResults"] = o.TotalResults
	}
	return toSerialize, nil
}

type NullableProfileTypeRelationshipsSummary struct {
	value *ProfileTypeRelationshipsSummary
	isSet bool
}

func (v NullableProfileTypeRelationshipsSummary) Get() *ProfileTypeRelationshipsSummary {
	return v.value
}

func (v *NullableProfileTypeRelationshipsSummary) Set(val *ProfileTypeRelationshipsSummary) {
	v.value = val
	v.isSet = true
}

func (v NullableProfileTypeRelationshipsSummary) IsSet() bool {
	return v.isSet
}

func (v *NullableProfileTypeRelationshipsSummary) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableProfileTypeRelationshipsSummary(val *ProfileTypeRelationshipsSummary) *NullableProfileTypeRelationshipsSummary {
	return &NullableProfileTypeRelationshipsSummary{value: val, isSet: true}
}

func (v NullableProfileTypeRelationshipsSummary) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableProfileTypeRelationshipsSummary) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


