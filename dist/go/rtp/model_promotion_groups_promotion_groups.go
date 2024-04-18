/*
OPERA Cloud Rate API

APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rtp

import (
	"encoding/json"
)

// checks if the PromotionGroupsPromotionGroups type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PromotionGroupsPromotionGroups{}

// PromotionGroupsPromotionGroups Collection of promotion groups
type PromotionGroupsPromotionGroups struct {
	// Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
	AllRowsFetched *bool `json:"allRowsFetched,omitempty"`
	// Indicates maximum number of records a Web Service should return.
	Limit *int32 `json:"limit,omitempty"`
	// Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
	Offset *int32 `json:"offset,omitempty"`
	// A promotion group.
	PromotionGroups []PromotionGroupType `json:"promotionGroups,omitempty"`
	// Evaluated total page count based on the requested max fetch count.
	TotalPages *int32 `json:"totalPages,omitempty"`
	// Total number of rows queried
	TotalRows *int32 `json:"totalRows,omitempty"`
}

// NewPromotionGroupsPromotionGroups instantiates a new PromotionGroupsPromotionGroups object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPromotionGroupsPromotionGroups() *PromotionGroupsPromotionGroups {
	this := PromotionGroupsPromotionGroups{}
	return &this
}

// NewPromotionGroupsPromotionGroupsWithDefaults instantiates a new PromotionGroupsPromotionGroups object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPromotionGroupsPromotionGroupsWithDefaults() *PromotionGroupsPromotionGroups {
	this := PromotionGroupsPromotionGroups{}
	return &this
}

// GetAllRowsFetched returns the AllRowsFetched field value if set, zero value otherwise.
func (o *PromotionGroupsPromotionGroups) GetAllRowsFetched() bool {
	if o == nil || IsNil(o.AllRowsFetched) {
		var ret bool
		return ret
	}
	return *o.AllRowsFetched
}

// GetAllRowsFetchedOk returns a tuple with the AllRowsFetched field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PromotionGroupsPromotionGroups) GetAllRowsFetchedOk() (*bool, bool) {
	if o == nil || IsNil(o.AllRowsFetched) {
		return nil, false
	}
	return o.AllRowsFetched, true
}

// HasAllRowsFetched returns a boolean if a field has been set.
func (o *PromotionGroupsPromotionGroups) HasAllRowsFetched() bool {
	if o != nil && !IsNil(o.AllRowsFetched) {
		return true
	}

	return false
}

// SetAllRowsFetched gets a reference to the given bool and assigns it to the AllRowsFetched field.
func (o *PromotionGroupsPromotionGroups) SetAllRowsFetched(v bool) {
	o.AllRowsFetched = &v
}

// GetLimit returns the Limit field value if set, zero value otherwise.
func (o *PromotionGroupsPromotionGroups) GetLimit() int32 {
	if o == nil || IsNil(o.Limit) {
		var ret int32
		return ret
	}
	return *o.Limit
}

// GetLimitOk returns a tuple with the Limit field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PromotionGroupsPromotionGroups) GetLimitOk() (*int32, bool) {
	if o == nil || IsNil(o.Limit) {
		return nil, false
	}
	return o.Limit, true
}

// HasLimit returns a boolean if a field has been set.
func (o *PromotionGroupsPromotionGroups) HasLimit() bool {
	if o != nil && !IsNil(o.Limit) {
		return true
	}

	return false
}

// SetLimit gets a reference to the given int32 and assigns it to the Limit field.
func (o *PromotionGroupsPromotionGroups) SetLimit(v int32) {
	o.Limit = &v
}

// GetOffset returns the Offset field value if set, zero value otherwise.
func (o *PromotionGroupsPromotionGroups) GetOffset() int32 {
	if o == nil || IsNil(o.Offset) {
		var ret int32
		return ret
	}
	return *o.Offset
}

// GetOffsetOk returns a tuple with the Offset field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PromotionGroupsPromotionGroups) GetOffsetOk() (*int32, bool) {
	if o == nil || IsNil(o.Offset) {
		return nil, false
	}
	return o.Offset, true
}

// HasOffset returns a boolean if a field has been set.
func (o *PromotionGroupsPromotionGroups) HasOffset() bool {
	if o != nil && !IsNil(o.Offset) {
		return true
	}

	return false
}

// SetOffset gets a reference to the given int32 and assigns it to the Offset field.
func (o *PromotionGroupsPromotionGroups) SetOffset(v int32) {
	o.Offset = &v
}

// GetPromotionGroups returns the PromotionGroups field value if set, zero value otherwise.
func (o *PromotionGroupsPromotionGroups) GetPromotionGroups() []PromotionGroupType {
	if o == nil || IsNil(o.PromotionGroups) {
		var ret []PromotionGroupType
		return ret
	}
	return o.PromotionGroups
}

// GetPromotionGroupsOk returns a tuple with the PromotionGroups field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PromotionGroupsPromotionGroups) GetPromotionGroupsOk() ([]PromotionGroupType, bool) {
	if o == nil || IsNil(o.PromotionGroups) {
		return nil, false
	}
	return o.PromotionGroups, true
}

// HasPromotionGroups returns a boolean if a field has been set.
func (o *PromotionGroupsPromotionGroups) HasPromotionGroups() bool {
	if o != nil && !IsNil(o.PromotionGroups) {
		return true
	}

	return false
}

// SetPromotionGroups gets a reference to the given []PromotionGroupType and assigns it to the PromotionGroups field.
func (o *PromotionGroupsPromotionGroups) SetPromotionGroups(v []PromotionGroupType) {
	o.PromotionGroups = v
}

// GetTotalPages returns the TotalPages field value if set, zero value otherwise.
func (o *PromotionGroupsPromotionGroups) GetTotalPages() int32 {
	if o == nil || IsNil(o.TotalPages) {
		var ret int32
		return ret
	}
	return *o.TotalPages
}

// GetTotalPagesOk returns a tuple with the TotalPages field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PromotionGroupsPromotionGroups) GetTotalPagesOk() (*int32, bool) {
	if o == nil || IsNil(o.TotalPages) {
		return nil, false
	}
	return o.TotalPages, true
}

// HasTotalPages returns a boolean if a field has been set.
func (o *PromotionGroupsPromotionGroups) HasTotalPages() bool {
	if o != nil && !IsNil(o.TotalPages) {
		return true
	}

	return false
}

// SetTotalPages gets a reference to the given int32 and assigns it to the TotalPages field.
func (o *PromotionGroupsPromotionGroups) SetTotalPages(v int32) {
	o.TotalPages = &v
}

// GetTotalRows returns the TotalRows field value if set, zero value otherwise.
func (o *PromotionGroupsPromotionGroups) GetTotalRows() int32 {
	if o == nil || IsNil(o.TotalRows) {
		var ret int32
		return ret
	}
	return *o.TotalRows
}

// GetTotalRowsOk returns a tuple with the TotalRows field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PromotionGroupsPromotionGroups) GetTotalRowsOk() (*int32, bool) {
	if o == nil || IsNil(o.TotalRows) {
		return nil, false
	}
	return o.TotalRows, true
}

// HasTotalRows returns a boolean if a field has been set.
func (o *PromotionGroupsPromotionGroups) HasTotalRows() bool {
	if o != nil && !IsNil(o.TotalRows) {
		return true
	}

	return false
}

// SetTotalRows gets a reference to the given int32 and assigns it to the TotalRows field.
func (o *PromotionGroupsPromotionGroups) SetTotalRows(v int32) {
	o.TotalRows = &v
}

func (o PromotionGroupsPromotionGroups) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PromotionGroupsPromotionGroups) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AllRowsFetched) {
		toSerialize["allRowsFetched"] = o.AllRowsFetched
	}
	if !IsNil(o.Limit) {
		toSerialize["limit"] = o.Limit
	}
	if !IsNil(o.Offset) {
		toSerialize["offset"] = o.Offset
	}
	if !IsNil(o.PromotionGroups) {
		toSerialize["promotionGroups"] = o.PromotionGroups
	}
	if !IsNil(o.TotalPages) {
		toSerialize["totalPages"] = o.TotalPages
	}
	if !IsNil(o.TotalRows) {
		toSerialize["totalRows"] = o.TotalRows
	}
	return toSerialize, nil
}

type NullablePromotionGroupsPromotionGroups struct {
	value *PromotionGroupsPromotionGroups
	isSet bool
}

func (v NullablePromotionGroupsPromotionGroups) Get() *PromotionGroupsPromotionGroups {
	return v.value
}

func (v *NullablePromotionGroupsPromotionGroups) Set(val *PromotionGroupsPromotionGroups) {
	v.value = val
	v.isSet = true
}

func (v NullablePromotionGroupsPromotionGroups) IsSet() bool {
	return v.isSet
}

func (v *NullablePromotionGroupsPromotionGroups) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePromotionGroupsPromotionGroups(val *PromotionGroupsPromotionGroups) *NullablePromotionGroupsPromotionGroups {
	return &NullablePromotionGroupsPromotionGroups{value: val, isSet: true}
}

func (v NullablePromotionGroupsPromotionGroups) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePromotionGroupsPromotionGroups) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

