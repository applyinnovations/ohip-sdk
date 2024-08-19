/*
OPERA Cloud Customer Relationship Management API

APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crm

import (
	"encoding/json"
)

// checks if the ActivityLogListType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ActivityLogListType{}

// ActivityLogListType struct for ActivityLogListType
type ActivityLogListType struct {
	ActivityLog []ActivityLogType `json:"activityLog,omitempty"`
	// Total number of rows returned
	Count *int32 `json:"count,omitempty"`
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

// NewActivityLogListType instantiates a new ActivityLogListType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewActivityLogListType() *ActivityLogListType {
	this := ActivityLogListType{}
	return &this
}

// NewActivityLogListTypeWithDefaults instantiates a new ActivityLogListType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewActivityLogListTypeWithDefaults() *ActivityLogListType {
	this := ActivityLogListType{}
	return &this
}

// GetActivityLog returns the ActivityLog field value if set, zero value otherwise.
func (o *ActivityLogListType) GetActivityLog() []ActivityLogType {
	if o == nil || IsNil(o.ActivityLog) {
		var ret []ActivityLogType
		return ret
	}
	return o.ActivityLog
}

// GetActivityLogOk returns a tuple with the ActivityLog field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivityLogListType) GetActivityLogOk() ([]ActivityLogType, bool) {
	if o == nil || IsNil(o.ActivityLog) {
		return nil, false
	}
	return o.ActivityLog, true
}

// HasActivityLog returns a boolean if a field has been set.
func (o *ActivityLogListType) HasActivityLog() bool {
	if o != nil && !IsNil(o.ActivityLog) {
		return true
	}

	return false
}

// SetActivityLog gets a reference to the given []ActivityLogType and assigns it to the ActivityLog field.
func (o *ActivityLogListType) SetActivityLog(v []ActivityLogType) {
	o.ActivityLog = v
}

// GetCount returns the Count field value if set, zero value otherwise.
func (o *ActivityLogListType) GetCount() int32 {
	if o == nil || IsNil(o.Count) {
		var ret int32
		return ret
	}
	return *o.Count
}

// GetCountOk returns a tuple with the Count field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivityLogListType) GetCountOk() (*int32, bool) {
	if o == nil || IsNil(o.Count) {
		return nil, false
	}
	return o.Count, true
}

// HasCount returns a boolean if a field has been set.
func (o *ActivityLogListType) HasCount() bool {
	if o != nil && !IsNil(o.Count) {
		return true
	}

	return false
}

// SetCount gets a reference to the given int32 and assigns it to the Count field.
func (o *ActivityLogListType) SetCount(v int32) {
	o.Count = &v
}

// GetHasMore returns the HasMore field value if set, zero value otherwise.
func (o *ActivityLogListType) GetHasMore() bool {
	if o == nil || IsNil(o.HasMore) {
		var ret bool
		return ret
	}
	return *o.HasMore
}

// GetHasMoreOk returns a tuple with the HasMore field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivityLogListType) GetHasMoreOk() (*bool, bool) {
	if o == nil || IsNil(o.HasMore) {
		return nil, false
	}
	return o.HasMore, true
}

// HasHasMore returns a boolean if a field has been set.
func (o *ActivityLogListType) HasHasMore() bool {
	if o != nil && !IsNil(o.HasMore) {
		return true
	}

	return false
}

// SetHasMore gets a reference to the given bool and assigns it to the HasMore field.
func (o *ActivityLogListType) SetHasMore(v bool) {
	o.HasMore = &v
}

// GetLimit returns the Limit field value if set, zero value otherwise.
func (o *ActivityLogListType) GetLimit() int32 {
	if o == nil || IsNil(o.Limit) {
		var ret int32
		return ret
	}
	return *o.Limit
}

// GetLimitOk returns a tuple with the Limit field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivityLogListType) GetLimitOk() (*int32, bool) {
	if o == nil || IsNil(o.Limit) {
		return nil, false
	}
	return o.Limit, true
}

// HasLimit returns a boolean if a field has been set.
func (o *ActivityLogListType) HasLimit() bool {
	if o != nil && !IsNil(o.Limit) {
		return true
	}

	return false
}

// SetLimit gets a reference to the given int32 and assigns it to the Limit field.
func (o *ActivityLogListType) SetLimit(v int32) {
	o.Limit = &v
}

// GetOffset returns the Offset field value if set, zero value otherwise.
func (o *ActivityLogListType) GetOffset() int32 {
	if o == nil || IsNil(o.Offset) {
		var ret int32
		return ret
	}
	return *o.Offset
}

// GetOffsetOk returns a tuple with the Offset field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivityLogListType) GetOffsetOk() (*int32, bool) {
	if o == nil || IsNil(o.Offset) {
		return nil, false
	}
	return o.Offset, true
}

// HasOffset returns a boolean if a field has been set.
func (o *ActivityLogListType) HasOffset() bool {
	if o != nil && !IsNil(o.Offset) {
		return true
	}

	return false
}

// SetOffset gets a reference to the given int32 and assigns it to the Offset field.
func (o *ActivityLogListType) SetOffset(v int32) {
	o.Offset = &v
}

// GetTotalPages returns the TotalPages field value if set, zero value otherwise.
func (o *ActivityLogListType) GetTotalPages() int32 {
	if o == nil || IsNil(o.TotalPages) {
		var ret int32
		return ret
	}
	return *o.TotalPages
}

// GetTotalPagesOk returns a tuple with the TotalPages field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivityLogListType) GetTotalPagesOk() (*int32, bool) {
	if o == nil || IsNil(o.TotalPages) {
		return nil, false
	}
	return o.TotalPages, true
}

// HasTotalPages returns a boolean if a field has been set.
func (o *ActivityLogListType) HasTotalPages() bool {
	if o != nil && !IsNil(o.TotalPages) {
		return true
	}

	return false
}

// SetTotalPages gets a reference to the given int32 and assigns it to the TotalPages field.
func (o *ActivityLogListType) SetTotalPages(v int32) {
	o.TotalPages = &v
}

// GetTotalResults returns the TotalResults field value if set, zero value otherwise.
func (o *ActivityLogListType) GetTotalResults() int32 {
	if o == nil || IsNil(o.TotalResults) {
		var ret int32
		return ret
	}
	return *o.TotalResults
}

// GetTotalResultsOk returns a tuple with the TotalResults field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivityLogListType) GetTotalResultsOk() (*int32, bool) {
	if o == nil || IsNil(o.TotalResults) {
		return nil, false
	}
	return o.TotalResults, true
}

// HasTotalResults returns a boolean if a field has been set.
func (o *ActivityLogListType) HasTotalResults() bool {
	if o != nil && !IsNil(o.TotalResults) {
		return true
	}

	return false
}

// SetTotalResults gets a reference to the given int32 and assigns it to the TotalResults field.
func (o *ActivityLogListType) SetTotalResults(v int32) {
	o.TotalResults = &v
}

func (o ActivityLogListType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ActivityLogListType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ActivityLog) {
		toSerialize["activityLog"] = o.ActivityLog
	}
	if !IsNil(o.Count) {
		toSerialize["count"] = o.Count
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

type NullableActivityLogListType struct {
	value *ActivityLogListType
	isSet bool
}

func (v NullableActivityLogListType) Get() *ActivityLogListType {
	return v.value
}

func (v *NullableActivityLogListType) Set(val *ActivityLogListType) {
	v.value = val
	v.isSet = true
}

func (v NullableActivityLogListType) IsSet() bool {
	return v.isSet
}

func (v *NullableActivityLogListType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableActivityLogListType(val *ActivityLogListType) *NullableActivityLogListType {
	return &NullableActivityLogListType{value: val, isSet: true}
}

func (v NullableActivityLogListType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableActivityLogListType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


