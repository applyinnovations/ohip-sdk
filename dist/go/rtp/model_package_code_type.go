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

// checks if the PackageCodeType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PackageCodeType{}

// PackageCodeType struct for PackageCodeType
type PackageCodeType struct {
	// Flag to adjust the overlapping dates automatically. True will allow the system to adjust the overlapping dates automatically . False will not allow overlapping dates and throws error messages if overlapping dates are found
	AdjustOverlappingRange *bool `json:"adjustOverlappingRange,omitempty"`
	// Package Code.
	Code *string `json:"code,omitempty"`
	// Total number of rows returned
	Count *int32 `json:"count,omitempty"`
	// Package Code Description.
	Description *string `json:"description,omitempty"`
	// Indicates if it is a Package Group or not.
	Group *bool `json:"group,omitempty"`
	// Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
	HasMore *bool `json:"hasMore,omitempty"`
	Header *PackageCodeHeaderType `json:"header,omitempty"`
	// Hotel code for the packages.
	HotelId *string `json:"hotelId,omitempty"`
	// Package Code specific to a rate plan code.
	RatePlanCode *string `json:"ratePlanCode,omitempty"`
	// Flag to configure the package as Award Package so they can be redeemed for points on a reservation
	Redemption *bool `json:"redemption,omitempty"`
	// Package code price schedule details.
	Schedules []ConfigPackageScheduleType `json:"schedules,omitempty"`
	// Total number of rows queried
	TotalResults *int32 `json:"totalResults,omitempty"`
}

// NewPackageCodeType instantiates a new PackageCodeType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPackageCodeType() *PackageCodeType {
	this := PackageCodeType{}
	return &this
}

// NewPackageCodeTypeWithDefaults instantiates a new PackageCodeType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPackageCodeTypeWithDefaults() *PackageCodeType {
	this := PackageCodeType{}
	return &this
}

// GetAdjustOverlappingRange returns the AdjustOverlappingRange field value if set, zero value otherwise.
func (o *PackageCodeType) GetAdjustOverlappingRange() bool {
	if o == nil || IsNil(o.AdjustOverlappingRange) {
		var ret bool
		return ret
	}
	return *o.AdjustOverlappingRange
}

// GetAdjustOverlappingRangeOk returns a tuple with the AdjustOverlappingRange field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PackageCodeType) GetAdjustOverlappingRangeOk() (*bool, bool) {
	if o == nil || IsNil(o.AdjustOverlappingRange) {
		return nil, false
	}
	return o.AdjustOverlappingRange, true
}

// HasAdjustOverlappingRange returns a boolean if a field has been set.
func (o *PackageCodeType) HasAdjustOverlappingRange() bool {
	if o != nil && !IsNil(o.AdjustOverlappingRange) {
		return true
	}

	return false
}

// SetAdjustOverlappingRange gets a reference to the given bool and assigns it to the AdjustOverlappingRange field.
func (o *PackageCodeType) SetAdjustOverlappingRange(v bool) {
	o.AdjustOverlappingRange = &v
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *PackageCodeType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PackageCodeType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *PackageCodeType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *PackageCodeType) SetCode(v string) {
	o.Code = &v
}

// GetCount returns the Count field value if set, zero value otherwise.
func (o *PackageCodeType) GetCount() int32 {
	if o == nil || IsNil(o.Count) {
		var ret int32
		return ret
	}
	return *o.Count
}

// GetCountOk returns a tuple with the Count field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PackageCodeType) GetCountOk() (*int32, bool) {
	if o == nil || IsNil(o.Count) {
		return nil, false
	}
	return o.Count, true
}

// HasCount returns a boolean if a field has been set.
func (o *PackageCodeType) HasCount() bool {
	if o != nil && !IsNil(o.Count) {
		return true
	}

	return false
}

// SetCount gets a reference to the given int32 and assigns it to the Count field.
func (o *PackageCodeType) SetCount(v int32) {
	o.Count = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *PackageCodeType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PackageCodeType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *PackageCodeType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *PackageCodeType) SetDescription(v string) {
	o.Description = &v
}

// GetGroup returns the Group field value if set, zero value otherwise.
func (o *PackageCodeType) GetGroup() bool {
	if o == nil || IsNil(o.Group) {
		var ret bool
		return ret
	}
	return *o.Group
}

// GetGroupOk returns a tuple with the Group field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PackageCodeType) GetGroupOk() (*bool, bool) {
	if o == nil || IsNil(o.Group) {
		return nil, false
	}
	return o.Group, true
}

// HasGroup returns a boolean if a field has been set.
func (o *PackageCodeType) HasGroup() bool {
	if o != nil && !IsNil(o.Group) {
		return true
	}

	return false
}

// SetGroup gets a reference to the given bool and assigns it to the Group field.
func (o *PackageCodeType) SetGroup(v bool) {
	o.Group = &v
}

// GetHasMore returns the HasMore field value if set, zero value otherwise.
func (o *PackageCodeType) GetHasMore() bool {
	if o == nil || IsNil(o.HasMore) {
		var ret bool
		return ret
	}
	return *o.HasMore
}

// GetHasMoreOk returns a tuple with the HasMore field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PackageCodeType) GetHasMoreOk() (*bool, bool) {
	if o == nil || IsNil(o.HasMore) {
		return nil, false
	}
	return o.HasMore, true
}

// HasHasMore returns a boolean if a field has been set.
func (o *PackageCodeType) HasHasMore() bool {
	if o != nil && !IsNil(o.HasMore) {
		return true
	}

	return false
}

// SetHasMore gets a reference to the given bool and assigns it to the HasMore field.
func (o *PackageCodeType) SetHasMore(v bool) {
	o.HasMore = &v
}

// GetHeader returns the Header field value if set, zero value otherwise.
func (o *PackageCodeType) GetHeader() PackageCodeHeaderType {
	if o == nil || IsNil(o.Header) {
		var ret PackageCodeHeaderType
		return ret
	}
	return *o.Header
}

// GetHeaderOk returns a tuple with the Header field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PackageCodeType) GetHeaderOk() (*PackageCodeHeaderType, bool) {
	if o == nil || IsNil(o.Header) {
		return nil, false
	}
	return o.Header, true
}

// HasHeader returns a boolean if a field has been set.
func (o *PackageCodeType) HasHeader() bool {
	if o != nil && !IsNil(o.Header) {
		return true
	}

	return false
}

// SetHeader gets a reference to the given PackageCodeHeaderType and assigns it to the Header field.
func (o *PackageCodeType) SetHeader(v PackageCodeHeaderType) {
	o.Header = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *PackageCodeType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PackageCodeType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *PackageCodeType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *PackageCodeType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetRatePlanCode returns the RatePlanCode field value if set, zero value otherwise.
func (o *PackageCodeType) GetRatePlanCode() string {
	if o == nil || IsNil(o.RatePlanCode) {
		var ret string
		return ret
	}
	return *o.RatePlanCode
}

// GetRatePlanCodeOk returns a tuple with the RatePlanCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PackageCodeType) GetRatePlanCodeOk() (*string, bool) {
	if o == nil || IsNil(o.RatePlanCode) {
		return nil, false
	}
	return o.RatePlanCode, true
}

// HasRatePlanCode returns a boolean if a field has been set.
func (o *PackageCodeType) HasRatePlanCode() bool {
	if o != nil && !IsNil(o.RatePlanCode) {
		return true
	}

	return false
}

// SetRatePlanCode gets a reference to the given string and assigns it to the RatePlanCode field.
func (o *PackageCodeType) SetRatePlanCode(v string) {
	o.RatePlanCode = &v
}

// GetRedemption returns the Redemption field value if set, zero value otherwise.
func (o *PackageCodeType) GetRedemption() bool {
	if o == nil || IsNil(o.Redemption) {
		var ret bool
		return ret
	}
	return *o.Redemption
}

// GetRedemptionOk returns a tuple with the Redemption field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PackageCodeType) GetRedemptionOk() (*bool, bool) {
	if o == nil || IsNil(o.Redemption) {
		return nil, false
	}
	return o.Redemption, true
}

// HasRedemption returns a boolean if a field has been set.
func (o *PackageCodeType) HasRedemption() bool {
	if o != nil && !IsNil(o.Redemption) {
		return true
	}

	return false
}

// SetRedemption gets a reference to the given bool and assigns it to the Redemption field.
func (o *PackageCodeType) SetRedemption(v bool) {
	o.Redemption = &v
}

// GetSchedules returns the Schedules field value if set, zero value otherwise.
func (o *PackageCodeType) GetSchedules() []ConfigPackageScheduleType {
	if o == nil || IsNil(o.Schedules) {
		var ret []ConfigPackageScheduleType
		return ret
	}
	return o.Schedules
}

// GetSchedulesOk returns a tuple with the Schedules field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PackageCodeType) GetSchedulesOk() ([]ConfigPackageScheduleType, bool) {
	if o == nil || IsNil(o.Schedules) {
		return nil, false
	}
	return o.Schedules, true
}

// HasSchedules returns a boolean if a field has been set.
func (o *PackageCodeType) HasSchedules() bool {
	if o != nil && !IsNil(o.Schedules) {
		return true
	}

	return false
}

// SetSchedules gets a reference to the given []ConfigPackageScheduleType and assigns it to the Schedules field.
func (o *PackageCodeType) SetSchedules(v []ConfigPackageScheduleType) {
	o.Schedules = v
}

// GetTotalResults returns the TotalResults field value if set, zero value otherwise.
func (o *PackageCodeType) GetTotalResults() int32 {
	if o == nil || IsNil(o.TotalResults) {
		var ret int32
		return ret
	}
	return *o.TotalResults
}

// GetTotalResultsOk returns a tuple with the TotalResults field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PackageCodeType) GetTotalResultsOk() (*int32, bool) {
	if o == nil || IsNil(o.TotalResults) {
		return nil, false
	}
	return o.TotalResults, true
}

// HasTotalResults returns a boolean if a field has been set.
func (o *PackageCodeType) HasTotalResults() bool {
	if o != nil && !IsNil(o.TotalResults) {
		return true
	}

	return false
}

// SetTotalResults gets a reference to the given int32 and assigns it to the TotalResults field.
func (o *PackageCodeType) SetTotalResults(v int32) {
	o.TotalResults = &v
}

func (o PackageCodeType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PackageCodeType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AdjustOverlappingRange) {
		toSerialize["adjustOverlappingRange"] = o.AdjustOverlappingRange
	}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	if !IsNil(o.Count) {
		toSerialize["count"] = o.Count
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.Group) {
		toSerialize["group"] = o.Group
	}
	if !IsNil(o.HasMore) {
		toSerialize["hasMore"] = o.HasMore
	}
	if !IsNil(o.Header) {
		toSerialize["header"] = o.Header
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.RatePlanCode) {
		toSerialize["ratePlanCode"] = o.RatePlanCode
	}
	if !IsNil(o.Redemption) {
		toSerialize["redemption"] = o.Redemption
	}
	if !IsNil(o.Schedules) {
		toSerialize["schedules"] = o.Schedules
	}
	if !IsNil(o.TotalResults) {
		toSerialize["totalResults"] = o.TotalResults
	}
	return toSerialize, nil
}

type NullablePackageCodeType struct {
	value *PackageCodeType
	isSet bool
}

func (v NullablePackageCodeType) Get() *PackageCodeType {
	return v.value
}

func (v *NullablePackageCodeType) Set(val *PackageCodeType) {
	v.value = val
	v.isSet = true
}

func (v NullablePackageCodeType) IsSet() bool {
	return v.isSet
}

func (v *NullablePackageCodeType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePackageCodeType(val *PackageCodeType) *NullablePackageCodeType {
	return &NullablePackageCodeType{value: val, isSet: true}
}

func (v NullablePackageCodeType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePackageCodeType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


