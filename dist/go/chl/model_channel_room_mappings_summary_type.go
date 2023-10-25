/*
OPERA Cloud Channel Configuration API

APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package chl

import (
	"encoding/json"
)

// checks if the ChannelRoomMappingsSummaryType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ChannelRoomMappingsSummaryType{}

// ChannelRoomMappingsSummaryType Collection of hotel-channel room type mappings.
type ChannelRoomMappingsSummaryType struct {
	// Information about hotel-channel room type mapping.
	ChannelRoomMappingSummary []ChannelRoomMappingSummaryType `json:"channelRoomMappingSummary,omitempty"`
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

// NewChannelRoomMappingsSummaryType instantiates a new ChannelRoomMappingsSummaryType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewChannelRoomMappingsSummaryType() *ChannelRoomMappingsSummaryType {
	this := ChannelRoomMappingsSummaryType{}
	return &this
}

// NewChannelRoomMappingsSummaryTypeWithDefaults instantiates a new ChannelRoomMappingsSummaryType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewChannelRoomMappingsSummaryTypeWithDefaults() *ChannelRoomMappingsSummaryType {
	this := ChannelRoomMappingsSummaryType{}
	return &this
}

// GetChannelRoomMappingSummary returns the ChannelRoomMappingSummary field value if set, zero value otherwise.
func (o *ChannelRoomMappingsSummaryType) GetChannelRoomMappingSummary() []ChannelRoomMappingSummaryType {
	if o == nil || IsNil(o.ChannelRoomMappingSummary) {
		var ret []ChannelRoomMappingSummaryType
		return ret
	}
	return o.ChannelRoomMappingSummary
}

// GetChannelRoomMappingSummaryOk returns a tuple with the ChannelRoomMappingSummary field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelRoomMappingsSummaryType) GetChannelRoomMappingSummaryOk() ([]ChannelRoomMappingSummaryType, bool) {
	if o == nil || IsNil(o.ChannelRoomMappingSummary) {
		return nil, false
	}
	return o.ChannelRoomMappingSummary, true
}

// HasChannelRoomMappingSummary returns a boolean if a field has been set.
func (o *ChannelRoomMappingsSummaryType) HasChannelRoomMappingSummary() bool {
	if o != nil && !IsNil(o.ChannelRoomMappingSummary) {
		return true
	}

	return false
}

// SetChannelRoomMappingSummary gets a reference to the given []ChannelRoomMappingSummaryType and assigns it to the ChannelRoomMappingSummary field.
func (o *ChannelRoomMappingsSummaryType) SetChannelRoomMappingSummary(v []ChannelRoomMappingSummaryType) {
	o.ChannelRoomMappingSummary = v
}

// GetCount returns the Count field value if set, zero value otherwise.
func (o *ChannelRoomMappingsSummaryType) GetCount() int32 {
	if o == nil || IsNil(o.Count) {
		var ret int32
		return ret
	}
	return *o.Count
}

// GetCountOk returns a tuple with the Count field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelRoomMappingsSummaryType) GetCountOk() (*int32, bool) {
	if o == nil || IsNil(o.Count) {
		return nil, false
	}
	return o.Count, true
}

// HasCount returns a boolean if a field has been set.
func (o *ChannelRoomMappingsSummaryType) HasCount() bool {
	if o != nil && !IsNil(o.Count) {
		return true
	}

	return false
}

// SetCount gets a reference to the given int32 and assigns it to the Count field.
func (o *ChannelRoomMappingsSummaryType) SetCount(v int32) {
	o.Count = &v
}

// GetHasMore returns the HasMore field value if set, zero value otherwise.
func (o *ChannelRoomMappingsSummaryType) GetHasMore() bool {
	if o == nil || IsNil(o.HasMore) {
		var ret bool
		return ret
	}
	return *o.HasMore
}

// GetHasMoreOk returns a tuple with the HasMore field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelRoomMappingsSummaryType) GetHasMoreOk() (*bool, bool) {
	if o == nil || IsNil(o.HasMore) {
		return nil, false
	}
	return o.HasMore, true
}

// HasHasMore returns a boolean if a field has been set.
func (o *ChannelRoomMappingsSummaryType) HasHasMore() bool {
	if o != nil && !IsNil(o.HasMore) {
		return true
	}

	return false
}

// SetHasMore gets a reference to the given bool and assigns it to the HasMore field.
func (o *ChannelRoomMappingsSummaryType) SetHasMore(v bool) {
	o.HasMore = &v
}

// GetLimit returns the Limit field value if set, zero value otherwise.
func (o *ChannelRoomMappingsSummaryType) GetLimit() int32 {
	if o == nil || IsNil(o.Limit) {
		var ret int32
		return ret
	}
	return *o.Limit
}

// GetLimitOk returns a tuple with the Limit field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelRoomMappingsSummaryType) GetLimitOk() (*int32, bool) {
	if o == nil || IsNil(o.Limit) {
		return nil, false
	}
	return o.Limit, true
}

// HasLimit returns a boolean if a field has been set.
func (o *ChannelRoomMappingsSummaryType) HasLimit() bool {
	if o != nil && !IsNil(o.Limit) {
		return true
	}

	return false
}

// SetLimit gets a reference to the given int32 and assigns it to the Limit field.
func (o *ChannelRoomMappingsSummaryType) SetLimit(v int32) {
	o.Limit = &v
}

// GetOffset returns the Offset field value if set, zero value otherwise.
func (o *ChannelRoomMappingsSummaryType) GetOffset() int32 {
	if o == nil || IsNil(o.Offset) {
		var ret int32
		return ret
	}
	return *o.Offset
}

// GetOffsetOk returns a tuple with the Offset field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelRoomMappingsSummaryType) GetOffsetOk() (*int32, bool) {
	if o == nil || IsNil(o.Offset) {
		return nil, false
	}
	return o.Offset, true
}

// HasOffset returns a boolean if a field has been set.
func (o *ChannelRoomMappingsSummaryType) HasOffset() bool {
	if o != nil && !IsNil(o.Offset) {
		return true
	}

	return false
}

// SetOffset gets a reference to the given int32 and assigns it to the Offset field.
func (o *ChannelRoomMappingsSummaryType) SetOffset(v int32) {
	o.Offset = &v
}

// GetTotalPages returns the TotalPages field value if set, zero value otherwise.
func (o *ChannelRoomMappingsSummaryType) GetTotalPages() int32 {
	if o == nil || IsNil(o.TotalPages) {
		var ret int32
		return ret
	}
	return *o.TotalPages
}

// GetTotalPagesOk returns a tuple with the TotalPages field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelRoomMappingsSummaryType) GetTotalPagesOk() (*int32, bool) {
	if o == nil || IsNil(o.TotalPages) {
		return nil, false
	}
	return o.TotalPages, true
}

// HasTotalPages returns a boolean if a field has been set.
func (o *ChannelRoomMappingsSummaryType) HasTotalPages() bool {
	if o != nil && !IsNil(o.TotalPages) {
		return true
	}

	return false
}

// SetTotalPages gets a reference to the given int32 and assigns it to the TotalPages field.
func (o *ChannelRoomMappingsSummaryType) SetTotalPages(v int32) {
	o.TotalPages = &v
}

// GetTotalResults returns the TotalResults field value if set, zero value otherwise.
func (o *ChannelRoomMappingsSummaryType) GetTotalResults() int32 {
	if o == nil || IsNil(o.TotalResults) {
		var ret int32
		return ret
	}
	return *o.TotalResults
}

// GetTotalResultsOk returns a tuple with the TotalResults field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelRoomMappingsSummaryType) GetTotalResultsOk() (*int32, bool) {
	if o == nil || IsNil(o.TotalResults) {
		return nil, false
	}
	return o.TotalResults, true
}

// HasTotalResults returns a boolean if a field has been set.
func (o *ChannelRoomMappingsSummaryType) HasTotalResults() bool {
	if o != nil && !IsNil(o.TotalResults) {
		return true
	}

	return false
}

// SetTotalResults gets a reference to the given int32 and assigns it to the TotalResults field.
func (o *ChannelRoomMappingsSummaryType) SetTotalResults(v int32) {
	o.TotalResults = &v
}

func (o ChannelRoomMappingsSummaryType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ChannelRoomMappingsSummaryType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ChannelRoomMappingSummary) {
		toSerialize["channelRoomMappingSummary"] = o.ChannelRoomMappingSummary
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

type NullableChannelRoomMappingsSummaryType struct {
	value *ChannelRoomMappingsSummaryType
	isSet bool
}

func (v NullableChannelRoomMappingsSummaryType) Get() *ChannelRoomMappingsSummaryType {
	return v.value
}

func (v *NullableChannelRoomMappingsSummaryType) Set(val *ChannelRoomMappingsSummaryType) {
	v.value = val
	v.isSet = true
}

func (v NullableChannelRoomMappingsSummaryType) IsSet() bool {
	return v.isSet
}

func (v *NullableChannelRoomMappingsSummaryType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableChannelRoomMappingsSummaryType(val *ChannelRoomMappingsSummaryType) *NullableChannelRoomMappingsSummaryType {
	return &NullableChannelRoomMappingsSummaryType{value: val, isSet: true}
}

func (v NullableChannelRoomMappingsSummaryType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableChannelRoomMappingsSummaryType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


