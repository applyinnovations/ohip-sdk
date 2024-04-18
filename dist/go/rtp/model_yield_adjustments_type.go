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

// checks if the YieldAdjustmentsType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &YieldAdjustmentsType{}

// YieldAdjustmentsType The Yield adjustments defined in the system based on the request.
type YieldAdjustmentsType struct {
	// Total number of rows returned
	Count *int32 `json:"count,omitempty"`
	// Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
	HasMore *bool `json:"hasMore,omitempty"`
	// Hotel code for the Adjustments.
	HotelId *string `json:"hotelId,omitempty"`
	// Total number of rows queried
	TotalResults *int32 `json:"totalResults,omitempty"`
	// Details of the adjustment codes.
	YieldAdjustment []YieldInfoType `json:"yieldAdjustment,omitempty"`
}

// NewYieldAdjustmentsType instantiates a new YieldAdjustmentsType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewYieldAdjustmentsType() *YieldAdjustmentsType {
	this := YieldAdjustmentsType{}
	return &this
}

// NewYieldAdjustmentsTypeWithDefaults instantiates a new YieldAdjustmentsType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewYieldAdjustmentsTypeWithDefaults() *YieldAdjustmentsType {
	this := YieldAdjustmentsType{}
	return &this
}

// GetCount returns the Count field value if set, zero value otherwise.
func (o *YieldAdjustmentsType) GetCount() int32 {
	if o == nil || IsNil(o.Count) {
		var ret int32
		return ret
	}
	return *o.Count
}

// GetCountOk returns a tuple with the Count field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *YieldAdjustmentsType) GetCountOk() (*int32, bool) {
	if o == nil || IsNil(o.Count) {
		return nil, false
	}
	return o.Count, true
}

// HasCount returns a boolean if a field has been set.
func (o *YieldAdjustmentsType) HasCount() bool {
	if o != nil && !IsNil(o.Count) {
		return true
	}

	return false
}

// SetCount gets a reference to the given int32 and assigns it to the Count field.
func (o *YieldAdjustmentsType) SetCount(v int32) {
	o.Count = &v
}

// GetHasMore returns the HasMore field value if set, zero value otherwise.
func (o *YieldAdjustmentsType) GetHasMore() bool {
	if o == nil || IsNil(o.HasMore) {
		var ret bool
		return ret
	}
	return *o.HasMore
}

// GetHasMoreOk returns a tuple with the HasMore field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *YieldAdjustmentsType) GetHasMoreOk() (*bool, bool) {
	if o == nil || IsNil(o.HasMore) {
		return nil, false
	}
	return o.HasMore, true
}

// HasHasMore returns a boolean if a field has been set.
func (o *YieldAdjustmentsType) HasHasMore() bool {
	if o != nil && !IsNil(o.HasMore) {
		return true
	}

	return false
}

// SetHasMore gets a reference to the given bool and assigns it to the HasMore field.
func (o *YieldAdjustmentsType) SetHasMore(v bool) {
	o.HasMore = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *YieldAdjustmentsType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *YieldAdjustmentsType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *YieldAdjustmentsType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *YieldAdjustmentsType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetTotalResults returns the TotalResults field value if set, zero value otherwise.
func (o *YieldAdjustmentsType) GetTotalResults() int32 {
	if o == nil || IsNil(o.TotalResults) {
		var ret int32
		return ret
	}
	return *o.TotalResults
}

// GetTotalResultsOk returns a tuple with the TotalResults field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *YieldAdjustmentsType) GetTotalResultsOk() (*int32, bool) {
	if o == nil || IsNil(o.TotalResults) {
		return nil, false
	}
	return o.TotalResults, true
}

// HasTotalResults returns a boolean if a field has been set.
func (o *YieldAdjustmentsType) HasTotalResults() bool {
	if o != nil && !IsNil(o.TotalResults) {
		return true
	}

	return false
}

// SetTotalResults gets a reference to the given int32 and assigns it to the TotalResults field.
func (o *YieldAdjustmentsType) SetTotalResults(v int32) {
	o.TotalResults = &v
}

// GetYieldAdjustment returns the YieldAdjustment field value if set, zero value otherwise.
func (o *YieldAdjustmentsType) GetYieldAdjustment() []YieldInfoType {
	if o == nil || IsNil(o.YieldAdjustment) {
		var ret []YieldInfoType
		return ret
	}
	return o.YieldAdjustment
}

// GetYieldAdjustmentOk returns a tuple with the YieldAdjustment field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *YieldAdjustmentsType) GetYieldAdjustmentOk() ([]YieldInfoType, bool) {
	if o == nil || IsNil(o.YieldAdjustment) {
		return nil, false
	}
	return o.YieldAdjustment, true
}

// HasYieldAdjustment returns a boolean if a field has been set.
func (o *YieldAdjustmentsType) HasYieldAdjustment() bool {
	if o != nil && !IsNil(o.YieldAdjustment) {
		return true
	}

	return false
}

// SetYieldAdjustment gets a reference to the given []YieldInfoType and assigns it to the YieldAdjustment field.
func (o *YieldAdjustmentsType) SetYieldAdjustment(v []YieldInfoType) {
	o.YieldAdjustment = v
}

func (o YieldAdjustmentsType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o YieldAdjustmentsType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Count) {
		toSerialize["count"] = o.Count
	}
	if !IsNil(o.HasMore) {
		toSerialize["hasMore"] = o.HasMore
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.TotalResults) {
		toSerialize["totalResults"] = o.TotalResults
	}
	if !IsNil(o.YieldAdjustment) {
		toSerialize["yieldAdjustment"] = o.YieldAdjustment
	}
	return toSerialize, nil
}

type NullableYieldAdjustmentsType struct {
	value *YieldAdjustmentsType
	isSet bool
}

func (v NullableYieldAdjustmentsType) Get() *YieldAdjustmentsType {
	return v.value
}

func (v *NullableYieldAdjustmentsType) Set(val *YieldAdjustmentsType) {
	v.value = val
	v.isSet = true
}

func (v NullableYieldAdjustmentsType) IsSet() bool {
	return v.isSet
}

func (v *NullableYieldAdjustmentsType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableYieldAdjustmentsType(val *YieldAdjustmentsType) *NullableYieldAdjustmentsType {
	return &NullableYieldAdjustmentsType{value: val, isSet: true}
}

func (v NullableYieldAdjustmentsType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableYieldAdjustmentsType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

