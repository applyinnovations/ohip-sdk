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

// checks if the ProfileStatisticsbyYearSummaryType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ProfileStatisticsbyYearSummaryType{}

// ProfileStatisticsbyYearSummaryType Contains stay statistics summary information by year
type ProfileStatisticsbyYearSummaryType struct {
	NetRevenue []StayStatisticsRevenueType `json:"netRevenue,omitempty"`
	StayDetail []StayDetailSummaryType `json:"stayDetail,omitempty"`
	Year *string `json:"year,omitempty"`
}

// NewProfileStatisticsbyYearSummaryType instantiates a new ProfileStatisticsbyYearSummaryType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewProfileStatisticsbyYearSummaryType() *ProfileStatisticsbyYearSummaryType {
	this := ProfileStatisticsbyYearSummaryType{}
	return &this
}

// NewProfileStatisticsbyYearSummaryTypeWithDefaults instantiates a new ProfileStatisticsbyYearSummaryType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewProfileStatisticsbyYearSummaryTypeWithDefaults() *ProfileStatisticsbyYearSummaryType {
	this := ProfileStatisticsbyYearSummaryType{}
	return &this
}

// GetNetRevenue returns the NetRevenue field value if set, zero value otherwise.
func (o *ProfileStatisticsbyYearSummaryType) GetNetRevenue() []StayStatisticsRevenueType {
	if o == nil || IsNil(o.NetRevenue) {
		var ret []StayStatisticsRevenueType
		return ret
	}
	return o.NetRevenue
}

// GetNetRevenueOk returns a tuple with the NetRevenue field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileStatisticsbyYearSummaryType) GetNetRevenueOk() ([]StayStatisticsRevenueType, bool) {
	if o == nil || IsNil(o.NetRevenue) {
		return nil, false
	}
	return o.NetRevenue, true
}

// HasNetRevenue returns a boolean if a field has been set.
func (o *ProfileStatisticsbyYearSummaryType) HasNetRevenue() bool {
	if o != nil && !IsNil(o.NetRevenue) {
		return true
	}

	return false
}

// SetNetRevenue gets a reference to the given []StayStatisticsRevenueType and assigns it to the NetRevenue field.
func (o *ProfileStatisticsbyYearSummaryType) SetNetRevenue(v []StayStatisticsRevenueType) {
	o.NetRevenue = v
}

// GetStayDetail returns the StayDetail field value if set, zero value otherwise.
func (o *ProfileStatisticsbyYearSummaryType) GetStayDetail() []StayDetailSummaryType {
	if o == nil || IsNil(o.StayDetail) {
		var ret []StayDetailSummaryType
		return ret
	}
	return o.StayDetail
}

// GetStayDetailOk returns a tuple with the StayDetail field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileStatisticsbyYearSummaryType) GetStayDetailOk() ([]StayDetailSummaryType, bool) {
	if o == nil || IsNil(o.StayDetail) {
		return nil, false
	}
	return o.StayDetail, true
}

// HasStayDetail returns a boolean if a field has been set.
func (o *ProfileStatisticsbyYearSummaryType) HasStayDetail() bool {
	if o != nil && !IsNil(o.StayDetail) {
		return true
	}

	return false
}

// SetStayDetail gets a reference to the given []StayDetailSummaryType and assigns it to the StayDetail field.
func (o *ProfileStatisticsbyYearSummaryType) SetStayDetail(v []StayDetailSummaryType) {
	o.StayDetail = v
}

// GetYear returns the Year field value if set, zero value otherwise.
func (o *ProfileStatisticsbyYearSummaryType) GetYear() string {
	if o == nil || IsNil(o.Year) {
		var ret string
		return ret
	}
	return *o.Year
}

// GetYearOk returns a tuple with the Year field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileStatisticsbyYearSummaryType) GetYearOk() (*string, bool) {
	if o == nil || IsNil(o.Year) {
		return nil, false
	}
	return o.Year, true
}

// HasYear returns a boolean if a field has been set.
func (o *ProfileStatisticsbyYearSummaryType) HasYear() bool {
	if o != nil && !IsNil(o.Year) {
		return true
	}

	return false
}

// SetYear gets a reference to the given string and assigns it to the Year field.
func (o *ProfileStatisticsbyYearSummaryType) SetYear(v string) {
	o.Year = &v
}

func (o ProfileStatisticsbyYearSummaryType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ProfileStatisticsbyYearSummaryType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.NetRevenue) {
		toSerialize["netRevenue"] = o.NetRevenue
	}
	if !IsNil(o.StayDetail) {
		toSerialize["stayDetail"] = o.StayDetail
	}
	if !IsNil(o.Year) {
		toSerialize["year"] = o.Year
	}
	return toSerialize, nil
}

type NullableProfileStatisticsbyYearSummaryType struct {
	value *ProfileStatisticsbyYearSummaryType
	isSet bool
}

func (v NullableProfileStatisticsbyYearSummaryType) Get() *ProfileStatisticsbyYearSummaryType {
	return v.value
}

func (v *NullableProfileStatisticsbyYearSummaryType) Set(val *ProfileStatisticsbyYearSummaryType) {
	v.value = val
	v.isSet = true
}

func (v NullableProfileStatisticsbyYearSummaryType) IsSet() bool {
	return v.isSet
}

func (v *NullableProfileStatisticsbyYearSummaryType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableProfileStatisticsbyYearSummaryType(val *ProfileStatisticsbyYearSummaryType) *NullableProfileStatisticsbyYearSummaryType {
	return &NullableProfileStatisticsbyYearSummaryType{value: val, isSet: true}
}

func (v NullableProfileStatisticsbyYearSummaryType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableProfileStatisticsbyYearSummaryType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


