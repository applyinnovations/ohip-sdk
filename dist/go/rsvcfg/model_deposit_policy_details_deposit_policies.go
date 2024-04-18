/*
OPERA Cloud Reservation Master Data Management API

APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsvcfg

import (
	"encoding/json"
)

// checks if the DepositPolicyDetailsDepositPolicies type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &DepositPolicyDetailsDepositPolicies{}

// DepositPolicyDetailsDepositPolicies Collection of Deposit Policies grouped by hotel.
type DepositPolicyDetailsDepositPolicies struct {
	// Total number of rows returned
	Count *int32 `json:"count,omitempty"`
	// Collection of Deposit Policies grouped by hotel.
	DepositPolicies []HotelConfigDepositPoliciesType `json:"depositPolicies,omitempty"`
	// Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
	HasMore *bool `json:"hasMore,omitempty"`
	// Indicates maximum number of records a Web Service should return.
	Limit *int32 `json:"limit,omitempty"`
	// Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
	Offset *int32 `json:"offset,omitempty"`
	// Evaluated total page count based on the requested max fetch count.
	TotalPages *int32 `json:"totalPages,omitempty"`
	// Total number of rows queried
	TotalResults *int32 `json:"totalResults,omitempty"`
}

// NewDepositPolicyDetailsDepositPolicies instantiates a new DepositPolicyDetailsDepositPolicies object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewDepositPolicyDetailsDepositPolicies() *DepositPolicyDetailsDepositPolicies {
	this := DepositPolicyDetailsDepositPolicies{}
	return &this
}

// NewDepositPolicyDetailsDepositPoliciesWithDefaults instantiates a new DepositPolicyDetailsDepositPolicies object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewDepositPolicyDetailsDepositPoliciesWithDefaults() *DepositPolicyDetailsDepositPolicies {
	this := DepositPolicyDetailsDepositPolicies{}
	return &this
}

// GetCount returns the Count field value if set, zero value otherwise.
func (o *DepositPolicyDetailsDepositPolicies) GetCount() int32 {
	if o == nil || IsNil(o.Count) {
		var ret int32
		return ret
	}
	return *o.Count
}

// GetCountOk returns a tuple with the Count field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DepositPolicyDetailsDepositPolicies) GetCountOk() (*int32, bool) {
	if o == nil || IsNil(o.Count) {
		return nil, false
	}
	return o.Count, true
}

// HasCount returns a boolean if a field has been set.
func (o *DepositPolicyDetailsDepositPolicies) HasCount() bool {
	if o != nil && !IsNil(o.Count) {
		return true
	}

	return false
}

// SetCount gets a reference to the given int32 and assigns it to the Count field.
func (o *DepositPolicyDetailsDepositPolicies) SetCount(v int32) {
	o.Count = &v
}

// GetDepositPolicies returns the DepositPolicies field value if set, zero value otherwise.
func (o *DepositPolicyDetailsDepositPolicies) GetDepositPolicies() []HotelConfigDepositPoliciesType {
	if o == nil || IsNil(o.DepositPolicies) {
		var ret []HotelConfigDepositPoliciesType
		return ret
	}
	return o.DepositPolicies
}

// GetDepositPoliciesOk returns a tuple with the DepositPolicies field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DepositPolicyDetailsDepositPolicies) GetDepositPoliciesOk() ([]HotelConfigDepositPoliciesType, bool) {
	if o == nil || IsNil(o.DepositPolicies) {
		return nil, false
	}
	return o.DepositPolicies, true
}

// HasDepositPolicies returns a boolean if a field has been set.
func (o *DepositPolicyDetailsDepositPolicies) HasDepositPolicies() bool {
	if o != nil && !IsNil(o.DepositPolicies) {
		return true
	}

	return false
}

// SetDepositPolicies gets a reference to the given []HotelConfigDepositPoliciesType and assigns it to the DepositPolicies field.
func (o *DepositPolicyDetailsDepositPolicies) SetDepositPolicies(v []HotelConfigDepositPoliciesType) {
	o.DepositPolicies = v
}

// GetHasMore returns the HasMore field value if set, zero value otherwise.
func (o *DepositPolicyDetailsDepositPolicies) GetHasMore() bool {
	if o == nil || IsNil(o.HasMore) {
		var ret bool
		return ret
	}
	return *o.HasMore
}

// GetHasMoreOk returns a tuple with the HasMore field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DepositPolicyDetailsDepositPolicies) GetHasMoreOk() (*bool, bool) {
	if o == nil || IsNil(o.HasMore) {
		return nil, false
	}
	return o.HasMore, true
}

// HasHasMore returns a boolean if a field has been set.
func (o *DepositPolicyDetailsDepositPolicies) HasHasMore() bool {
	if o != nil && !IsNil(o.HasMore) {
		return true
	}

	return false
}

// SetHasMore gets a reference to the given bool and assigns it to the HasMore field.
func (o *DepositPolicyDetailsDepositPolicies) SetHasMore(v bool) {
	o.HasMore = &v
}

// GetLimit returns the Limit field value if set, zero value otherwise.
func (o *DepositPolicyDetailsDepositPolicies) GetLimit() int32 {
	if o == nil || IsNil(o.Limit) {
		var ret int32
		return ret
	}
	return *o.Limit
}

// GetLimitOk returns a tuple with the Limit field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DepositPolicyDetailsDepositPolicies) GetLimitOk() (*int32, bool) {
	if o == nil || IsNil(o.Limit) {
		return nil, false
	}
	return o.Limit, true
}

// HasLimit returns a boolean if a field has been set.
func (o *DepositPolicyDetailsDepositPolicies) HasLimit() bool {
	if o != nil && !IsNil(o.Limit) {
		return true
	}

	return false
}

// SetLimit gets a reference to the given int32 and assigns it to the Limit field.
func (o *DepositPolicyDetailsDepositPolicies) SetLimit(v int32) {
	o.Limit = &v
}

// GetOffset returns the Offset field value if set, zero value otherwise.
func (o *DepositPolicyDetailsDepositPolicies) GetOffset() int32 {
	if o == nil || IsNil(o.Offset) {
		var ret int32
		return ret
	}
	return *o.Offset
}

// GetOffsetOk returns a tuple with the Offset field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DepositPolicyDetailsDepositPolicies) GetOffsetOk() (*int32, bool) {
	if o == nil || IsNil(o.Offset) {
		return nil, false
	}
	return o.Offset, true
}

// HasOffset returns a boolean if a field has been set.
func (o *DepositPolicyDetailsDepositPolicies) HasOffset() bool {
	if o != nil && !IsNil(o.Offset) {
		return true
	}

	return false
}

// SetOffset gets a reference to the given int32 and assigns it to the Offset field.
func (o *DepositPolicyDetailsDepositPolicies) SetOffset(v int32) {
	o.Offset = &v
}

// GetTotalPages returns the TotalPages field value if set, zero value otherwise.
func (o *DepositPolicyDetailsDepositPolicies) GetTotalPages() int32 {
	if o == nil || IsNil(o.TotalPages) {
		var ret int32
		return ret
	}
	return *o.TotalPages
}

// GetTotalPagesOk returns a tuple with the TotalPages field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DepositPolicyDetailsDepositPolicies) GetTotalPagesOk() (*int32, bool) {
	if o == nil || IsNil(o.TotalPages) {
		return nil, false
	}
	return o.TotalPages, true
}

// HasTotalPages returns a boolean if a field has been set.
func (o *DepositPolicyDetailsDepositPolicies) HasTotalPages() bool {
	if o != nil && !IsNil(o.TotalPages) {
		return true
	}

	return false
}

// SetTotalPages gets a reference to the given int32 and assigns it to the TotalPages field.
func (o *DepositPolicyDetailsDepositPolicies) SetTotalPages(v int32) {
	o.TotalPages = &v
}

// GetTotalResults returns the TotalResults field value if set, zero value otherwise.
func (o *DepositPolicyDetailsDepositPolicies) GetTotalResults() int32 {
	if o == nil || IsNil(o.TotalResults) {
		var ret int32
		return ret
	}
	return *o.TotalResults
}

// GetTotalResultsOk returns a tuple with the TotalResults field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DepositPolicyDetailsDepositPolicies) GetTotalResultsOk() (*int32, bool) {
	if o == nil || IsNil(o.TotalResults) {
		return nil, false
	}
	return o.TotalResults, true
}

// HasTotalResults returns a boolean if a field has been set.
func (o *DepositPolicyDetailsDepositPolicies) HasTotalResults() bool {
	if o != nil && !IsNil(o.TotalResults) {
		return true
	}

	return false
}

// SetTotalResults gets a reference to the given int32 and assigns it to the TotalResults field.
func (o *DepositPolicyDetailsDepositPolicies) SetTotalResults(v int32) {
	o.TotalResults = &v
}

func (o DepositPolicyDetailsDepositPolicies) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o DepositPolicyDetailsDepositPolicies) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Count) {
		toSerialize["count"] = o.Count
	}
	if !IsNil(o.DepositPolicies) {
		toSerialize["depositPolicies"] = o.DepositPolicies
	}
	if !IsNil(o.HasMore) {
		toSerialize["hasMore"] = o.HasMore
	}
	if !IsNil(o.Limit) {
		toSerialize["limit"] = o.Limit
	}
	if !IsNil(o.Offset) {
		toSerialize["offset"] = o.Offset
	}
	if !IsNil(o.TotalPages) {
		toSerialize["totalPages"] = o.TotalPages
	}
	if !IsNil(o.TotalResults) {
		toSerialize["totalResults"] = o.TotalResults
	}
	return toSerialize, nil
}

type NullableDepositPolicyDetailsDepositPolicies struct {
	value *DepositPolicyDetailsDepositPolicies
	isSet bool
}

func (v NullableDepositPolicyDetailsDepositPolicies) Get() *DepositPolicyDetailsDepositPolicies {
	return v.value
}

func (v *NullableDepositPolicyDetailsDepositPolicies) Set(val *DepositPolicyDetailsDepositPolicies) {
	v.value = val
	v.isSet = true
}

func (v NullableDepositPolicyDetailsDepositPolicies) IsSet() bool {
	return v.isSet
}

func (v *NullableDepositPolicyDetailsDepositPolicies) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableDepositPolicyDetailsDepositPolicies(val *DepositPolicyDetailsDepositPolicies) *NullableDepositPolicyDetailsDepositPolicies {
	return &NullableDepositPolicyDetailsDepositPolicies{value: val, isSet: true}
}

func (v NullableDepositPolicyDetailsDepositPolicies) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableDepositPolicyDetailsDepositPolicies) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

