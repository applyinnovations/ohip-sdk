/*
OPERA Cloud Inventory API

APIs to cater for Inventory functionality in OPERA Cloud. This includes sell limits for date ranges, viewing and updating the property&apos;s inventory, as well as item inventory (such as rollaways, microwaves etc.).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package inv

import (
	"encoding/json"
)

// checks if the StatisticType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &StatisticType{}

// StatisticType Defines all details needed to create a statistical report.
type StatisticType struct {
	// This element has revenue amount data for its revenue category such as Room Revenue, Food and Beverage Revenue.
	Description *string `json:"description,omitempty"`
	// A text field used to communicate the proper name of the hotel.
	HotelName *string `json:"hotelName,omitempty"`
	// Identifies the type of statistics collected. Each ReportCode corresponds to a set of category summaries based upon a predetermined agreement.
	ReportCode *string `json:"reportCode,omitempty"`
	// Statistic Codes.
	Statistics []StatisticCodeType `json:"statistics,omitempty"`
}

// NewStatisticType instantiates a new StatisticType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewStatisticType() *StatisticType {
	this := StatisticType{}
	return &this
}

// NewStatisticTypeWithDefaults instantiates a new StatisticType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewStatisticTypeWithDefaults() *StatisticType {
	this := StatisticType{}
	return &this
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *StatisticType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StatisticType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *StatisticType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *StatisticType) SetDescription(v string) {
	o.Description = &v
}

// GetHotelName returns the HotelName field value if set, zero value otherwise.
func (o *StatisticType) GetHotelName() string {
	if o == nil || IsNil(o.HotelName) {
		var ret string
		return ret
	}
	return *o.HotelName
}

// GetHotelNameOk returns a tuple with the HotelName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StatisticType) GetHotelNameOk() (*string, bool) {
	if o == nil || IsNil(o.HotelName) {
		return nil, false
	}
	return o.HotelName, true
}

// HasHotelName returns a boolean if a field has been set.
func (o *StatisticType) HasHotelName() bool {
	if o != nil && !IsNil(o.HotelName) {
		return true
	}

	return false
}

// SetHotelName gets a reference to the given string and assigns it to the HotelName field.
func (o *StatisticType) SetHotelName(v string) {
	o.HotelName = &v
}

// GetReportCode returns the ReportCode field value if set, zero value otherwise.
func (o *StatisticType) GetReportCode() string {
	if o == nil || IsNil(o.ReportCode) {
		var ret string
		return ret
	}
	return *o.ReportCode
}

// GetReportCodeOk returns a tuple with the ReportCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StatisticType) GetReportCodeOk() (*string, bool) {
	if o == nil || IsNil(o.ReportCode) {
		return nil, false
	}
	return o.ReportCode, true
}

// HasReportCode returns a boolean if a field has been set.
func (o *StatisticType) HasReportCode() bool {
	if o != nil && !IsNil(o.ReportCode) {
		return true
	}

	return false
}

// SetReportCode gets a reference to the given string and assigns it to the ReportCode field.
func (o *StatisticType) SetReportCode(v string) {
	o.ReportCode = &v
}

// GetStatistics returns the Statistics field value if set, zero value otherwise.
func (o *StatisticType) GetStatistics() []StatisticCodeType {
	if o == nil || IsNil(o.Statistics) {
		var ret []StatisticCodeType
		return ret
	}
	return o.Statistics
}

// GetStatisticsOk returns a tuple with the Statistics field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StatisticType) GetStatisticsOk() ([]StatisticCodeType, bool) {
	if o == nil || IsNil(o.Statistics) {
		return nil, false
	}
	return o.Statistics, true
}

// HasStatistics returns a boolean if a field has been set.
func (o *StatisticType) HasStatistics() bool {
	if o != nil && !IsNil(o.Statistics) {
		return true
	}

	return false
}

// SetStatistics gets a reference to the given []StatisticCodeType and assigns it to the Statistics field.
func (o *StatisticType) SetStatistics(v []StatisticCodeType) {
	o.Statistics = v
}

func (o StatisticType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o StatisticType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.HotelName) {
		toSerialize["hotelName"] = o.HotelName
	}
	if !IsNil(o.ReportCode) {
		toSerialize["reportCode"] = o.ReportCode
	}
	if !IsNil(o.Statistics) {
		toSerialize["statistics"] = o.Statistics
	}
	return toSerialize, nil
}

type NullableStatisticType struct {
	value *StatisticType
	isSet bool
}

func (v NullableStatisticType) Get() *StatisticType {
	return v.value
}

func (v *NullableStatisticType) Set(val *StatisticType) {
	v.value = val
	v.isSet = true
}

func (v NullableStatisticType) IsSet() bool {
	return v.isSet
}

func (v *NullableStatisticType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableStatisticType(val *StatisticType) *NullableStatisticType {
	return &NullableStatisticType{value: val, isSet: true}
}

func (v NullableStatisticType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableStatisticType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


