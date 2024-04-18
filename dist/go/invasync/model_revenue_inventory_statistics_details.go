/*
Opera Cloud Inventory Asynchronous API

APIs to cater for Inventory related asynchronous functionality in OPERA Cloud. This includes viewing inventory data along with its revenue and updating inventory&apos;s sell limits for date ranges. <p>This API follows an async pattern where</p><ul><li>You make an initial request, which returns a Location header</li><li>You poll HEAD on the Location header returned to obtain the status of the process</li><li>Once the process completes HEAD will return in the Location header the URL that must be called to obtain the results of the process</li><li>You call the URL to obtain the results of the process</li></ul><br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package invasync

import (
	"encoding/json"
)

// checks if the RevenueInventoryStatisticsDetails type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RevenueInventoryStatisticsDetails{}

// RevenueInventoryStatisticsDetails Revenue Inventory Statistics for the current occupancy date which might include data grouped by room type, market and reservation guarantee code.
type RevenueInventoryStatisticsDetails struct {
	RevInvStats []RevenueInventoryStatisticsType `json:"revInvStats,omitempty"`
}

// NewRevenueInventoryStatisticsDetails instantiates a new RevenueInventoryStatisticsDetails object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRevenueInventoryStatisticsDetails() *RevenueInventoryStatisticsDetails {
	this := RevenueInventoryStatisticsDetails{}
	return &this
}

// NewRevenueInventoryStatisticsDetailsWithDefaults instantiates a new RevenueInventoryStatisticsDetails object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRevenueInventoryStatisticsDetailsWithDefaults() *RevenueInventoryStatisticsDetails {
	this := RevenueInventoryStatisticsDetails{}
	return &this
}

// GetRevInvStats returns the RevInvStats field value if set, zero value otherwise.
func (o *RevenueInventoryStatisticsDetails) GetRevInvStats() []RevenueInventoryStatisticsType {
	if o == nil || IsNil(o.RevInvStats) {
		var ret []RevenueInventoryStatisticsType
		return ret
	}
	return o.RevInvStats
}

// GetRevInvStatsOk returns a tuple with the RevInvStats field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RevenueInventoryStatisticsDetails) GetRevInvStatsOk() ([]RevenueInventoryStatisticsType, bool) {
	if o == nil || IsNil(o.RevInvStats) {
		return nil, false
	}
	return o.RevInvStats, true
}

// HasRevInvStats returns a boolean if a field has been set.
func (o *RevenueInventoryStatisticsDetails) HasRevInvStats() bool {
	if o != nil && !IsNil(o.RevInvStats) {
		return true
	}

	return false
}

// SetRevInvStats gets a reference to the given []RevenueInventoryStatisticsType and assigns it to the RevInvStats field.
func (o *RevenueInventoryStatisticsDetails) SetRevInvStats(v []RevenueInventoryStatisticsType) {
	o.RevInvStats = v
}

func (o RevenueInventoryStatisticsDetails) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RevenueInventoryStatisticsDetails) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.RevInvStats) {
		toSerialize["revInvStats"] = o.RevInvStats
	}
	return toSerialize, nil
}

type NullableRevenueInventoryStatisticsDetails struct {
	value *RevenueInventoryStatisticsDetails
	isSet bool
}

func (v NullableRevenueInventoryStatisticsDetails) Get() *RevenueInventoryStatisticsDetails {
	return v.value
}

func (v *NullableRevenueInventoryStatisticsDetails) Set(val *RevenueInventoryStatisticsDetails) {
	v.value = val
	v.isSet = true
}

func (v NullableRevenueInventoryStatisticsDetails) IsSet() bool {
	return v.isSet
}

func (v *NullableRevenueInventoryStatisticsDetails) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRevenueInventoryStatisticsDetails(val *RevenueInventoryStatisticsDetails) *NullableRevenueInventoryStatisticsDetails {
	return &NullableRevenueInventoryStatisticsDetails{value: val, isSet: true}
}

func (v NullableRevenueInventoryStatisticsDetails) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRevenueInventoryStatisticsDetails) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

