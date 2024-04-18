/*
OPERA Cloud Room Rotation Service API

APIs to facilitate Room Rotation functionality in OPERA Cloud. Api provides capability to handle Room Rotation in OPERA Cloud. Room Rotation provides room ownership options for automatic inventory rotation and prioritization for owner rooms assignment and occupancy.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rmr

import (
	"encoding/json"
)

// checks if the RoomOwnersListDetails type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RoomOwnersListDetails{}

// RoomOwnersListDetails Provides Pagination Information for the REST API.
type RoomOwnersListDetails struct {
	Links []InstanceLink `json:"links,omitempty"`
	// Collection of Room Owners with Room Ownership details.
	RoomOwnerInfoTypeList []RoomOwnerInfoType `json:"roomOwnerInfoTypeList,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
	// Indicates number of records the API has returned actually as per the API request criteria.
	Count *int32 `json:"count,omitempty"`
	// Indicates whether there are more records available to be returned as per the API request criteria or not.
	HasMore *bool `json:"hasMore,omitempty"`
	// Indicates number of records the API can return as per the API request limit sent. A maximum of 200 records can be only returned at a time.
	Limit *int32 `json:"limit,omitempty"`
	// Indicates the index of the next applicable set(page).
	Offset *int32 `json:"offset,omitempty"`
	// Indicates total number of records available that can be returned as per the API request criteria.
	TotalResults *int32 `json:"totalResults,omitempty"`
}

// NewRoomOwnersListDetails instantiates a new RoomOwnersListDetails object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRoomOwnersListDetails() *RoomOwnersListDetails {
	this := RoomOwnersListDetails{}
	return &this
}

// NewRoomOwnersListDetailsWithDefaults instantiates a new RoomOwnersListDetails object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRoomOwnersListDetailsWithDefaults() *RoomOwnersListDetails {
	this := RoomOwnersListDetails{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *RoomOwnersListDetails) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomOwnersListDetails) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *RoomOwnersListDetails) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *RoomOwnersListDetails) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetRoomOwnerInfoTypeList returns the RoomOwnerInfoTypeList field value if set, zero value otherwise.
func (o *RoomOwnersListDetails) GetRoomOwnerInfoTypeList() []RoomOwnerInfoType {
	if o == nil || IsNil(o.RoomOwnerInfoTypeList) {
		var ret []RoomOwnerInfoType
		return ret
	}
	return o.RoomOwnerInfoTypeList
}

// GetRoomOwnerInfoTypeListOk returns a tuple with the RoomOwnerInfoTypeList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomOwnersListDetails) GetRoomOwnerInfoTypeListOk() ([]RoomOwnerInfoType, bool) {
	if o == nil || IsNil(o.RoomOwnerInfoTypeList) {
		return nil, false
	}
	return o.RoomOwnerInfoTypeList, true
}

// HasRoomOwnerInfoTypeList returns a boolean if a field has been set.
func (o *RoomOwnersListDetails) HasRoomOwnerInfoTypeList() bool {
	if o != nil && !IsNil(o.RoomOwnerInfoTypeList) {
		return true
	}

	return false
}

// SetRoomOwnerInfoTypeList gets a reference to the given []RoomOwnerInfoType and assigns it to the RoomOwnerInfoTypeList field.
func (o *RoomOwnersListDetails) SetRoomOwnerInfoTypeList(v []RoomOwnerInfoType) {
	o.RoomOwnerInfoTypeList = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *RoomOwnersListDetails) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomOwnersListDetails) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *RoomOwnersListDetails) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *RoomOwnersListDetails) SetWarnings(v []WarningType) {
	o.Warnings = v
}

// GetCount returns the Count field value if set, zero value otherwise.
func (o *RoomOwnersListDetails) GetCount() int32 {
	if o == nil || IsNil(o.Count) {
		var ret int32
		return ret
	}
	return *o.Count
}

// GetCountOk returns a tuple with the Count field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomOwnersListDetails) GetCountOk() (*int32, bool) {
	if o == nil || IsNil(o.Count) {
		return nil, false
	}
	return o.Count, true
}

// HasCount returns a boolean if a field has been set.
func (o *RoomOwnersListDetails) HasCount() bool {
	if o != nil && !IsNil(o.Count) {
		return true
	}

	return false
}

// SetCount gets a reference to the given int32 and assigns it to the Count field.
func (o *RoomOwnersListDetails) SetCount(v int32) {
	o.Count = &v
}

// GetHasMore returns the HasMore field value if set, zero value otherwise.
func (o *RoomOwnersListDetails) GetHasMore() bool {
	if o == nil || IsNil(o.HasMore) {
		var ret bool
		return ret
	}
	return *o.HasMore
}

// GetHasMoreOk returns a tuple with the HasMore field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomOwnersListDetails) GetHasMoreOk() (*bool, bool) {
	if o == nil || IsNil(o.HasMore) {
		return nil, false
	}
	return o.HasMore, true
}

// HasHasMore returns a boolean if a field has been set.
func (o *RoomOwnersListDetails) HasHasMore() bool {
	if o != nil && !IsNil(o.HasMore) {
		return true
	}

	return false
}

// SetHasMore gets a reference to the given bool and assigns it to the HasMore field.
func (o *RoomOwnersListDetails) SetHasMore(v bool) {
	o.HasMore = &v
}

// GetLimit returns the Limit field value if set, zero value otherwise.
func (o *RoomOwnersListDetails) GetLimit() int32 {
	if o == nil || IsNil(o.Limit) {
		var ret int32
		return ret
	}
	return *o.Limit
}

// GetLimitOk returns a tuple with the Limit field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomOwnersListDetails) GetLimitOk() (*int32, bool) {
	if o == nil || IsNil(o.Limit) {
		return nil, false
	}
	return o.Limit, true
}

// HasLimit returns a boolean if a field has been set.
func (o *RoomOwnersListDetails) HasLimit() bool {
	if o != nil && !IsNil(o.Limit) {
		return true
	}

	return false
}

// SetLimit gets a reference to the given int32 and assigns it to the Limit field.
func (o *RoomOwnersListDetails) SetLimit(v int32) {
	o.Limit = &v
}

// GetOffset returns the Offset field value if set, zero value otherwise.
func (o *RoomOwnersListDetails) GetOffset() int32 {
	if o == nil || IsNil(o.Offset) {
		var ret int32
		return ret
	}
	return *o.Offset
}

// GetOffsetOk returns a tuple with the Offset field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomOwnersListDetails) GetOffsetOk() (*int32, bool) {
	if o == nil || IsNil(o.Offset) {
		return nil, false
	}
	return o.Offset, true
}

// HasOffset returns a boolean if a field has been set.
func (o *RoomOwnersListDetails) HasOffset() bool {
	if o != nil && !IsNil(o.Offset) {
		return true
	}

	return false
}

// SetOffset gets a reference to the given int32 and assigns it to the Offset field.
func (o *RoomOwnersListDetails) SetOffset(v int32) {
	o.Offset = &v
}

// GetTotalResults returns the TotalResults field value if set, zero value otherwise.
func (o *RoomOwnersListDetails) GetTotalResults() int32 {
	if o == nil || IsNil(o.TotalResults) {
		var ret int32
		return ret
	}
	return *o.TotalResults
}

// GetTotalResultsOk returns a tuple with the TotalResults field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomOwnersListDetails) GetTotalResultsOk() (*int32, bool) {
	if o == nil || IsNil(o.TotalResults) {
		return nil, false
	}
	return o.TotalResults, true
}

// HasTotalResults returns a boolean if a field has been set.
func (o *RoomOwnersListDetails) HasTotalResults() bool {
	if o != nil && !IsNil(o.TotalResults) {
		return true
	}

	return false
}

// SetTotalResults gets a reference to the given int32 and assigns it to the TotalResults field.
func (o *RoomOwnersListDetails) SetTotalResults(v int32) {
	o.TotalResults = &v
}

func (o RoomOwnersListDetails) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RoomOwnersListDetails) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.RoomOwnerInfoTypeList) {
		toSerialize["roomOwnerInfoTypeList"] = o.RoomOwnerInfoTypeList
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
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
	if !IsNil(o.TotalResults) {
		toSerialize["totalResults"] = o.TotalResults
	}
	return toSerialize, nil
}

type NullableRoomOwnersListDetails struct {
	value *RoomOwnersListDetails
	isSet bool
}

func (v NullableRoomOwnersListDetails) Get() *RoomOwnersListDetails {
	return v.value
}

func (v *NullableRoomOwnersListDetails) Set(val *RoomOwnersListDetails) {
	v.value = val
	v.isSet = true
}

func (v NullableRoomOwnersListDetails) IsSet() bool {
	return v.isSet
}

func (v *NullableRoomOwnersListDetails) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoomOwnersListDetails(val *RoomOwnersListDetails) *NullableRoomOwnersListDetails {
	return &NullableRoomOwnersListDetails{value: val, isSet: true}
}

func (v NullableRoomOwnersListDetails) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoomOwnersListDetails) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

