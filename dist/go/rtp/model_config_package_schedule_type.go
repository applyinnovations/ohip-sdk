/*
OPERA Cloud Rate API

APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rtp

import (
	"encoding/json"
)

// checks if the ConfigPackageScheduleType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ConfigPackageScheduleType{}

// ConfigPackageScheduleType A Hotel Package Schedule.
type ConfigPackageScheduleType struct {
	// The ending value of the date range.
	End *string `json:"end,omitempty"`
	// Maximum number of nights that are required on a reservation to avail the package.
	MaxNights *int32 `json:"maxNights,omitempty"`
	// Maximum number of persons that are required on a reservation to avail the package.
	MaxPersons *int32 `json:"maxPersons,omitempty"`
	// Minimum number of nights that are required on a reservation to avail the package.
	MinNights *int32 `json:"minNights,omitempty"`
	// Minimum number of persons that are required on a reservation to avail the package.
	MinPersons *int32 `json:"minPersons,omitempty"`
	// New maximum number of nights that are required on a reservation to avail the package.
	NewMaxNights *int32 `json:"newMaxNights,omitempty"`
	// New maximum number of persons that are required on a reservation to avail the package.
	NewMaxPersons *int32 `json:"newMaxPersons,omitempty"`
	// New minimum number of nights that are required on a reservation to avail the package.
	NewMinNights *int32 `json:"newMinNights,omitempty"`
	// New minimum number of persons that are required on a reservation to avail the package.
	NewMinPersons *int32 `json:"newMinPersons,omitempty"`
	NewTimeSpan *TimeSpanType `json:"newTimeSpan,omitempty"`
	// The rate plan code specific prices for the package (if any).
	RatePlanCode *string `json:"ratePlanCode,omitempty"`
	// Collection of price schedule for the package.
	SchedulePrices []HotelPackageSchedulePriceType `json:"schedulePrices,omitempty"`
	// The starting value of the date range.
	Start *string `json:"start,omitempty"`
}

// NewConfigPackageScheduleType instantiates a new ConfigPackageScheduleType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewConfigPackageScheduleType() *ConfigPackageScheduleType {
	this := ConfigPackageScheduleType{}
	return &this
}

// NewConfigPackageScheduleTypeWithDefaults instantiates a new ConfigPackageScheduleType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewConfigPackageScheduleTypeWithDefaults() *ConfigPackageScheduleType {
	this := ConfigPackageScheduleType{}
	return &this
}

// GetEnd returns the End field value if set, zero value otherwise.
func (o *ConfigPackageScheduleType) GetEnd() string {
	if o == nil || IsNil(o.End) {
		var ret string
		return ret
	}
	return *o.End
}

// GetEndOk returns a tuple with the End field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigPackageScheduleType) GetEndOk() (*string, bool) {
	if o == nil || IsNil(o.End) {
		return nil, false
	}
	return o.End, true
}

// HasEnd returns a boolean if a field has been set.
func (o *ConfigPackageScheduleType) HasEnd() bool {
	if o != nil && !IsNil(o.End) {
		return true
	}

	return false
}

// SetEnd gets a reference to the given string and assigns it to the End field.
func (o *ConfigPackageScheduleType) SetEnd(v string) {
	o.End = &v
}

// GetMaxNights returns the MaxNights field value if set, zero value otherwise.
func (o *ConfigPackageScheduleType) GetMaxNights() int32 {
	if o == nil || IsNil(o.MaxNights) {
		var ret int32
		return ret
	}
	return *o.MaxNights
}

// GetMaxNightsOk returns a tuple with the MaxNights field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigPackageScheduleType) GetMaxNightsOk() (*int32, bool) {
	if o == nil || IsNil(o.MaxNights) {
		return nil, false
	}
	return o.MaxNights, true
}

// HasMaxNights returns a boolean if a field has been set.
func (o *ConfigPackageScheduleType) HasMaxNights() bool {
	if o != nil && !IsNil(o.MaxNights) {
		return true
	}

	return false
}

// SetMaxNights gets a reference to the given int32 and assigns it to the MaxNights field.
func (o *ConfigPackageScheduleType) SetMaxNights(v int32) {
	o.MaxNights = &v
}

// GetMaxPersons returns the MaxPersons field value if set, zero value otherwise.
func (o *ConfigPackageScheduleType) GetMaxPersons() int32 {
	if o == nil || IsNil(o.MaxPersons) {
		var ret int32
		return ret
	}
	return *o.MaxPersons
}

// GetMaxPersonsOk returns a tuple with the MaxPersons field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigPackageScheduleType) GetMaxPersonsOk() (*int32, bool) {
	if o == nil || IsNil(o.MaxPersons) {
		return nil, false
	}
	return o.MaxPersons, true
}

// HasMaxPersons returns a boolean if a field has been set.
func (o *ConfigPackageScheduleType) HasMaxPersons() bool {
	if o != nil && !IsNil(o.MaxPersons) {
		return true
	}

	return false
}

// SetMaxPersons gets a reference to the given int32 and assigns it to the MaxPersons field.
func (o *ConfigPackageScheduleType) SetMaxPersons(v int32) {
	o.MaxPersons = &v
}

// GetMinNights returns the MinNights field value if set, zero value otherwise.
func (o *ConfigPackageScheduleType) GetMinNights() int32 {
	if o == nil || IsNil(o.MinNights) {
		var ret int32
		return ret
	}
	return *o.MinNights
}

// GetMinNightsOk returns a tuple with the MinNights field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigPackageScheduleType) GetMinNightsOk() (*int32, bool) {
	if o == nil || IsNil(o.MinNights) {
		return nil, false
	}
	return o.MinNights, true
}

// HasMinNights returns a boolean if a field has been set.
func (o *ConfigPackageScheduleType) HasMinNights() bool {
	if o != nil && !IsNil(o.MinNights) {
		return true
	}

	return false
}

// SetMinNights gets a reference to the given int32 and assigns it to the MinNights field.
func (o *ConfigPackageScheduleType) SetMinNights(v int32) {
	o.MinNights = &v
}

// GetMinPersons returns the MinPersons field value if set, zero value otherwise.
func (o *ConfigPackageScheduleType) GetMinPersons() int32 {
	if o == nil || IsNil(o.MinPersons) {
		var ret int32
		return ret
	}
	return *o.MinPersons
}

// GetMinPersonsOk returns a tuple with the MinPersons field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigPackageScheduleType) GetMinPersonsOk() (*int32, bool) {
	if o == nil || IsNil(o.MinPersons) {
		return nil, false
	}
	return o.MinPersons, true
}

// HasMinPersons returns a boolean if a field has been set.
func (o *ConfigPackageScheduleType) HasMinPersons() bool {
	if o != nil && !IsNil(o.MinPersons) {
		return true
	}

	return false
}

// SetMinPersons gets a reference to the given int32 and assigns it to the MinPersons field.
func (o *ConfigPackageScheduleType) SetMinPersons(v int32) {
	o.MinPersons = &v
}

// GetNewMaxNights returns the NewMaxNights field value if set, zero value otherwise.
func (o *ConfigPackageScheduleType) GetNewMaxNights() int32 {
	if o == nil || IsNil(o.NewMaxNights) {
		var ret int32
		return ret
	}
	return *o.NewMaxNights
}

// GetNewMaxNightsOk returns a tuple with the NewMaxNights field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigPackageScheduleType) GetNewMaxNightsOk() (*int32, bool) {
	if o == nil || IsNil(o.NewMaxNights) {
		return nil, false
	}
	return o.NewMaxNights, true
}

// HasNewMaxNights returns a boolean if a field has been set.
func (o *ConfigPackageScheduleType) HasNewMaxNights() bool {
	if o != nil && !IsNil(o.NewMaxNights) {
		return true
	}

	return false
}

// SetNewMaxNights gets a reference to the given int32 and assigns it to the NewMaxNights field.
func (o *ConfigPackageScheduleType) SetNewMaxNights(v int32) {
	o.NewMaxNights = &v
}

// GetNewMaxPersons returns the NewMaxPersons field value if set, zero value otherwise.
func (o *ConfigPackageScheduleType) GetNewMaxPersons() int32 {
	if o == nil || IsNil(o.NewMaxPersons) {
		var ret int32
		return ret
	}
	return *o.NewMaxPersons
}

// GetNewMaxPersonsOk returns a tuple with the NewMaxPersons field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigPackageScheduleType) GetNewMaxPersonsOk() (*int32, bool) {
	if o == nil || IsNil(o.NewMaxPersons) {
		return nil, false
	}
	return o.NewMaxPersons, true
}

// HasNewMaxPersons returns a boolean if a field has been set.
func (o *ConfigPackageScheduleType) HasNewMaxPersons() bool {
	if o != nil && !IsNil(o.NewMaxPersons) {
		return true
	}

	return false
}

// SetNewMaxPersons gets a reference to the given int32 and assigns it to the NewMaxPersons field.
func (o *ConfigPackageScheduleType) SetNewMaxPersons(v int32) {
	o.NewMaxPersons = &v
}

// GetNewMinNights returns the NewMinNights field value if set, zero value otherwise.
func (o *ConfigPackageScheduleType) GetNewMinNights() int32 {
	if o == nil || IsNil(o.NewMinNights) {
		var ret int32
		return ret
	}
	return *o.NewMinNights
}

// GetNewMinNightsOk returns a tuple with the NewMinNights field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigPackageScheduleType) GetNewMinNightsOk() (*int32, bool) {
	if o == nil || IsNil(o.NewMinNights) {
		return nil, false
	}
	return o.NewMinNights, true
}

// HasNewMinNights returns a boolean if a field has been set.
func (o *ConfigPackageScheduleType) HasNewMinNights() bool {
	if o != nil && !IsNil(o.NewMinNights) {
		return true
	}

	return false
}

// SetNewMinNights gets a reference to the given int32 and assigns it to the NewMinNights field.
func (o *ConfigPackageScheduleType) SetNewMinNights(v int32) {
	o.NewMinNights = &v
}

// GetNewMinPersons returns the NewMinPersons field value if set, zero value otherwise.
func (o *ConfigPackageScheduleType) GetNewMinPersons() int32 {
	if o == nil || IsNil(o.NewMinPersons) {
		var ret int32
		return ret
	}
	return *o.NewMinPersons
}

// GetNewMinPersonsOk returns a tuple with the NewMinPersons field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigPackageScheduleType) GetNewMinPersonsOk() (*int32, bool) {
	if o == nil || IsNil(o.NewMinPersons) {
		return nil, false
	}
	return o.NewMinPersons, true
}

// HasNewMinPersons returns a boolean if a field has been set.
func (o *ConfigPackageScheduleType) HasNewMinPersons() bool {
	if o != nil && !IsNil(o.NewMinPersons) {
		return true
	}

	return false
}

// SetNewMinPersons gets a reference to the given int32 and assigns it to the NewMinPersons field.
func (o *ConfigPackageScheduleType) SetNewMinPersons(v int32) {
	o.NewMinPersons = &v
}

// GetNewTimeSpan returns the NewTimeSpan field value if set, zero value otherwise.
func (o *ConfigPackageScheduleType) GetNewTimeSpan() TimeSpanType {
	if o == nil || IsNil(o.NewTimeSpan) {
		var ret TimeSpanType
		return ret
	}
	return *o.NewTimeSpan
}

// GetNewTimeSpanOk returns a tuple with the NewTimeSpan field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigPackageScheduleType) GetNewTimeSpanOk() (*TimeSpanType, bool) {
	if o == nil || IsNil(o.NewTimeSpan) {
		return nil, false
	}
	return o.NewTimeSpan, true
}

// HasNewTimeSpan returns a boolean if a field has been set.
func (o *ConfigPackageScheduleType) HasNewTimeSpan() bool {
	if o != nil && !IsNil(o.NewTimeSpan) {
		return true
	}

	return false
}

// SetNewTimeSpan gets a reference to the given TimeSpanType and assigns it to the NewTimeSpan field.
func (o *ConfigPackageScheduleType) SetNewTimeSpan(v TimeSpanType) {
	o.NewTimeSpan = &v
}

// GetRatePlanCode returns the RatePlanCode field value if set, zero value otherwise.
func (o *ConfigPackageScheduleType) GetRatePlanCode() string {
	if o == nil || IsNil(o.RatePlanCode) {
		var ret string
		return ret
	}
	return *o.RatePlanCode
}

// GetRatePlanCodeOk returns a tuple with the RatePlanCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigPackageScheduleType) GetRatePlanCodeOk() (*string, bool) {
	if o == nil || IsNil(o.RatePlanCode) {
		return nil, false
	}
	return o.RatePlanCode, true
}

// HasRatePlanCode returns a boolean if a field has been set.
func (o *ConfigPackageScheduleType) HasRatePlanCode() bool {
	if o != nil && !IsNil(o.RatePlanCode) {
		return true
	}

	return false
}

// SetRatePlanCode gets a reference to the given string and assigns it to the RatePlanCode field.
func (o *ConfigPackageScheduleType) SetRatePlanCode(v string) {
	o.RatePlanCode = &v
}

// GetSchedulePrices returns the SchedulePrices field value if set, zero value otherwise.
func (o *ConfigPackageScheduleType) GetSchedulePrices() []HotelPackageSchedulePriceType {
	if o == nil || IsNil(o.SchedulePrices) {
		var ret []HotelPackageSchedulePriceType
		return ret
	}
	return o.SchedulePrices
}

// GetSchedulePricesOk returns a tuple with the SchedulePrices field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigPackageScheduleType) GetSchedulePricesOk() ([]HotelPackageSchedulePriceType, bool) {
	if o == nil || IsNil(o.SchedulePrices) {
		return nil, false
	}
	return o.SchedulePrices, true
}

// HasSchedulePrices returns a boolean if a field has been set.
func (o *ConfigPackageScheduleType) HasSchedulePrices() bool {
	if o != nil && !IsNil(o.SchedulePrices) {
		return true
	}

	return false
}

// SetSchedulePrices gets a reference to the given []HotelPackageSchedulePriceType and assigns it to the SchedulePrices field.
func (o *ConfigPackageScheduleType) SetSchedulePrices(v []HotelPackageSchedulePriceType) {
	o.SchedulePrices = v
}

// GetStart returns the Start field value if set, zero value otherwise.
func (o *ConfigPackageScheduleType) GetStart() string {
	if o == nil || IsNil(o.Start) {
		var ret string
		return ret
	}
	return *o.Start
}

// GetStartOk returns a tuple with the Start field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigPackageScheduleType) GetStartOk() (*string, bool) {
	if o == nil || IsNil(o.Start) {
		return nil, false
	}
	return o.Start, true
}

// HasStart returns a boolean if a field has been set.
func (o *ConfigPackageScheduleType) HasStart() bool {
	if o != nil && !IsNil(o.Start) {
		return true
	}

	return false
}

// SetStart gets a reference to the given string and assigns it to the Start field.
func (o *ConfigPackageScheduleType) SetStart(v string) {
	o.Start = &v
}

func (o ConfigPackageScheduleType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ConfigPackageScheduleType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.End) {
		toSerialize["end"] = o.End
	}
	if !IsNil(o.MaxNights) {
		toSerialize["maxNights"] = o.MaxNights
	}
	if !IsNil(o.MaxPersons) {
		toSerialize["maxPersons"] = o.MaxPersons
	}
	if !IsNil(o.MinNights) {
		toSerialize["minNights"] = o.MinNights
	}
	if !IsNil(o.MinPersons) {
		toSerialize["minPersons"] = o.MinPersons
	}
	if !IsNil(o.NewMaxNights) {
		toSerialize["newMaxNights"] = o.NewMaxNights
	}
	if !IsNil(o.NewMaxPersons) {
		toSerialize["newMaxPersons"] = o.NewMaxPersons
	}
	if !IsNil(o.NewMinNights) {
		toSerialize["newMinNights"] = o.NewMinNights
	}
	if !IsNil(o.NewMinPersons) {
		toSerialize["newMinPersons"] = o.NewMinPersons
	}
	if !IsNil(o.NewTimeSpan) {
		toSerialize["newTimeSpan"] = o.NewTimeSpan
	}
	if !IsNil(o.RatePlanCode) {
		toSerialize["ratePlanCode"] = o.RatePlanCode
	}
	if !IsNil(o.SchedulePrices) {
		toSerialize["schedulePrices"] = o.SchedulePrices
	}
	if !IsNil(o.Start) {
		toSerialize["start"] = o.Start
	}
	return toSerialize, nil
}

type NullableConfigPackageScheduleType struct {
	value *ConfigPackageScheduleType
	isSet bool
}

func (v NullableConfigPackageScheduleType) Get() *ConfigPackageScheduleType {
	return v.value
}

func (v *NullableConfigPackageScheduleType) Set(val *ConfigPackageScheduleType) {
	v.value = val
	v.isSet = true
}

func (v NullableConfigPackageScheduleType) IsSet() bool {
	return v.isSet
}

func (v *NullableConfigPackageScheduleType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableConfigPackageScheduleType(val *ConfigPackageScheduleType) *NullableConfigPackageScheduleType {
	return &NullableConfigPackageScheduleType{value: val, isSet: true}
}

func (v NullableConfigPackageScheduleType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableConfigPackageScheduleType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


