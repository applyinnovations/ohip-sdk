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

// checks if the RateAccessExclusionType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RateAccessExclusionType{}

// RateAccessExclusionType Access Exclusion information indicating the actions allowed under a HUB or Hotel for which the access exclusion is set.
type RateAccessExclusionType struct {
	// Allow to cancel a reservation under this access exclusion.
	AllowCancelReservation *bool `json:"allowCancelReservation,omitempty"`
	// Allow to create a reservation under this access exclusion.
	AllowCreateReservation *bool `json:"allowCreateReservation,omitempty"`
	// Allow to modify a reservation under this access exclusion.
	AllowModifyReservation *bool `json:"allowModifyReservation,omitempty"`
	DateRange *DateRangeType `json:"dateRange,omitempty"`
	// Exclude a specific rate from availability
	ExcludeFromAvailability *bool `json:"excludeFromAvailability,omitempty"`
	// The rate access exclusion is inactive
	Inactive *bool `json:"inactive,omitempty"`
	// The type of source (CRO or Hotel code) for which the rate access exclusion is set.
	SourceType *string `json:"sourceType,omitempty"`
	// CRO or Hotel code value.
	SourceValue *string `json:"sourceValue,omitempty"`
}

// NewRateAccessExclusionType instantiates a new RateAccessExclusionType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRateAccessExclusionType() *RateAccessExclusionType {
	this := RateAccessExclusionType{}
	return &this
}

// NewRateAccessExclusionTypeWithDefaults instantiates a new RateAccessExclusionType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRateAccessExclusionTypeWithDefaults() *RateAccessExclusionType {
	this := RateAccessExclusionType{}
	return &this
}

// GetAllowCancelReservation returns the AllowCancelReservation field value if set, zero value otherwise.
func (o *RateAccessExclusionType) GetAllowCancelReservation() bool {
	if o == nil || IsNil(o.AllowCancelReservation) {
		var ret bool
		return ret
	}
	return *o.AllowCancelReservation
}

// GetAllowCancelReservationOk returns a tuple with the AllowCancelReservation field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RateAccessExclusionType) GetAllowCancelReservationOk() (*bool, bool) {
	if o == nil || IsNil(o.AllowCancelReservation) {
		return nil, false
	}
	return o.AllowCancelReservation, true
}

// HasAllowCancelReservation returns a boolean if a field has been set.
func (o *RateAccessExclusionType) HasAllowCancelReservation() bool {
	if o != nil && !IsNil(o.AllowCancelReservation) {
		return true
	}

	return false
}

// SetAllowCancelReservation gets a reference to the given bool and assigns it to the AllowCancelReservation field.
func (o *RateAccessExclusionType) SetAllowCancelReservation(v bool) {
	o.AllowCancelReservation = &v
}

// GetAllowCreateReservation returns the AllowCreateReservation field value if set, zero value otherwise.
func (o *RateAccessExclusionType) GetAllowCreateReservation() bool {
	if o == nil || IsNil(o.AllowCreateReservation) {
		var ret bool
		return ret
	}
	return *o.AllowCreateReservation
}

// GetAllowCreateReservationOk returns a tuple with the AllowCreateReservation field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RateAccessExclusionType) GetAllowCreateReservationOk() (*bool, bool) {
	if o == nil || IsNil(o.AllowCreateReservation) {
		return nil, false
	}
	return o.AllowCreateReservation, true
}

// HasAllowCreateReservation returns a boolean if a field has been set.
func (o *RateAccessExclusionType) HasAllowCreateReservation() bool {
	if o != nil && !IsNil(o.AllowCreateReservation) {
		return true
	}

	return false
}

// SetAllowCreateReservation gets a reference to the given bool and assigns it to the AllowCreateReservation field.
func (o *RateAccessExclusionType) SetAllowCreateReservation(v bool) {
	o.AllowCreateReservation = &v
}

// GetAllowModifyReservation returns the AllowModifyReservation field value if set, zero value otherwise.
func (o *RateAccessExclusionType) GetAllowModifyReservation() bool {
	if o == nil || IsNil(o.AllowModifyReservation) {
		var ret bool
		return ret
	}
	return *o.AllowModifyReservation
}

// GetAllowModifyReservationOk returns a tuple with the AllowModifyReservation field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RateAccessExclusionType) GetAllowModifyReservationOk() (*bool, bool) {
	if o == nil || IsNil(o.AllowModifyReservation) {
		return nil, false
	}
	return o.AllowModifyReservation, true
}

// HasAllowModifyReservation returns a boolean if a field has been set.
func (o *RateAccessExclusionType) HasAllowModifyReservation() bool {
	if o != nil && !IsNil(o.AllowModifyReservation) {
		return true
	}

	return false
}

// SetAllowModifyReservation gets a reference to the given bool and assigns it to the AllowModifyReservation field.
func (o *RateAccessExclusionType) SetAllowModifyReservation(v bool) {
	o.AllowModifyReservation = &v
}

// GetDateRange returns the DateRange field value if set, zero value otherwise.
func (o *RateAccessExclusionType) GetDateRange() DateRangeType {
	if o == nil || IsNil(o.DateRange) {
		var ret DateRangeType
		return ret
	}
	return *o.DateRange
}

// GetDateRangeOk returns a tuple with the DateRange field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RateAccessExclusionType) GetDateRangeOk() (*DateRangeType, bool) {
	if o == nil || IsNil(o.DateRange) {
		return nil, false
	}
	return o.DateRange, true
}

// HasDateRange returns a boolean if a field has been set.
func (o *RateAccessExclusionType) HasDateRange() bool {
	if o != nil && !IsNil(o.DateRange) {
		return true
	}

	return false
}

// SetDateRange gets a reference to the given DateRangeType and assigns it to the DateRange field.
func (o *RateAccessExclusionType) SetDateRange(v DateRangeType) {
	o.DateRange = &v
}

// GetExcludeFromAvailability returns the ExcludeFromAvailability field value if set, zero value otherwise.
func (o *RateAccessExclusionType) GetExcludeFromAvailability() bool {
	if o == nil || IsNil(o.ExcludeFromAvailability) {
		var ret bool
		return ret
	}
	return *o.ExcludeFromAvailability
}

// GetExcludeFromAvailabilityOk returns a tuple with the ExcludeFromAvailability field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RateAccessExclusionType) GetExcludeFromAvailabilityOk() (*bool, bool) {
	if o == nil || IsNil(o.ExcludeFromAvailability) {
		return nil, false
	}
	return o.ExcludeFromAvailability, true
}

// HasExcludeFromAvailability returns a boolean if a field has been set.
func (o *RateAccessExclusionType) HasExcludeFromAvailability() bool {
	if o != nil && !IsNil(o.ExcludeFromAvailability) {
		return true
	}

	return false
}

// SetExcludeFromAvailability gets a reference to the given bool and assigns it to the ExcludeFromAvailability field.
func (o *RateAccessExclusionType) SetExcludeFromAvailability(v bool) {
	o.ExcludeFromAvailability = &v
}

// GetInactive returns the Inactive field value if set, zero value otherwise.
func (o *RateAccessExclusionType) GetInactive() bool {
	if o == nil || IsNil(o.Inactive) {
		var ret bool
		return ret
	}
	return *o.Inactive
}

// GetInactiveOk returns a tuple with the Inactive field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RateAccessExclusionType) GetInactiveOk() (*bool, bool) {
	if o == nil || IsNil(o.Inactive) {
		return nil, false
	}
	return o.Inactive, true
}

// HasInactive returns a boolean if a field has been set.
func (o *RateAccessExclusionType) HasInactive() bool {
	if o != nil && !IsNil(o.Inactive) {
		return true
	}

	return false
}

// SetInactive gets a reference to the given bool and assigns it to the Inactive field.
func (o *RateAccessExclusionType) SetInactive(v bool) {
	o.Inactive = &v
}

// GetSourceType returns the SourceType field value if set, zero value otherwise.
func (o *RateAccessExclusionType) GetSourceType() string {
	if o == nil || IsNil(o.SourceType) {
		var ret string
		return ret
	}
	return *o.SourceType
}

// GetSourceTypeOk returns a tuple with the SourceType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RateAccessExclusionType) GetSourceTypeOk() (*string, bool) {
	if o == nil || IsNil(o.SourceType) {
		return nil, false
	}
	return o.SourceType, true
}

// HasSourceType returns a boolean if a field has been set.
func (o *RateAccessExclusionType) HasSourceType() bool {
	if o != nil && !IsNil(o.SourceType) {
		return true
	}

	return false
}

// SetSourceType gets a reference to the given string and assigns it to the SourceType field.
func (o *RateAccessExclusionType) SetSourceType(v string) {
	o.SourceType = &v
}

// GetSourceValue returns the SourceValue field value if set, zero value otherwise.
func (o *RateAccessExclusionType) GetSourceValue() string {
	if o == nil || IsNil(o.SourceValue) {
		var ret string
		return ret
	}
	return *o.SourceValue
}

// GetSourceValueOk returns a tuple with the SourceValue field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RateAccessExclusionType) GetSourceValueOk() (*string, bool) {
	if o == nil || IsNil(o.SourceValue) {
		return nil, false
	}
	return o.SourceValue, true
}

// HasSourceValue returns a boolean if a field has been set.
func (o *RateAccessExclusionType) HasSourceValue() bool {
	if o != nil && !IsNil(o.SourceValue) {
		return true
	}

	return false
}

// SetSourceValue gets a reference to the given string and assigns it to the SourceValue field.
func (o *RateAccessExclusionType) SetSourceValue(v string) {
	o.SourceValue = &v
}

func (o RateAccessExclusionType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RateAccessExclusionType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AllowCancelReservation) {
		toSerialize["allowCancelReservation"] = o.AllowCancelReservation
	}
	if !IsNil(o.AllowCreateReservation) {
		toSerialize["allowCreateReservation"] = o.AllowCreateReservation
	}
	if !IsNil(o.AllowModifyReservation) {
		toSerialize["allowModifyReservation"] = o.AllowModifyReservation
	}
	if !IsNil(o.DateRange) {
		toSerialize["dateRange"] = o.DateRange
	}
	if !IsNil(o.ExcludeFromAvailability) {
		toSerialize["excludeFromAvailability"] = o.ExcludeFromAvailability
	}
	if !IsNil(o.Inactive) {
		toSerialize["inactive"] = o.Inactive
	}
	if !IsNil(o.SourceType) {
		toSerialize["sourceType"] = o.SourceType
	}
	if !IsNil(o.SourceValue) {
		toSerialize["sourceValue"] = o.SourceValue
	}
	return toSerialize, nil
}

type NullableRateAccessExclusionType struct {
	value *RateAccessExclusionType
	isSet bool
}

func (v NullableRateAccessExclusionType) Get() *RateAccessExclusionType {
	return v.value
}

func (v *NullableRateAccessExclusionType) Set(val *RateAccessExclusionType) {
	v.value = val
	v.isSet = true
}

func (v NullableRateAccessExclusionType) IsSet() bool {
	return v.isSet
}

func (v *NullableRateAccessExclusionType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRateAccessExclusionType(val *RateAccessExclusionType) *NullableRateAccessExclusionType {
	return &NullableRateAccessExclusionType{value: val, isSet: true}
}

func (v NullableRateAccessExclusionType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRateAccessExclusionType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


