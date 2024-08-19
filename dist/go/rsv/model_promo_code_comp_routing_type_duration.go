/*
OPERA Cloud Reservation API

APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsv

import (
	"encoding/json"
)

// checks if the PromoCodeCompRoutingTypeDuration type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PromoCodeCompRoutingTypeDuration{}

// PromoCodeCompRoutingTypeDuration Duration of this instruction for promotion code complimentary Routing
type PromoCodeCompRoutingTypeDuration struct {
	// Flag to indicate if the routing instruction is a daily instruction for promotion code complimentary routing
	Daily *bool `json:"daily,omitempty"`
	Friday *bool `json:"friday,omitempty"`
	Monday *bool `json:"monday,omitempty"`
	Saturday *bool `json:"saturday,omitempty"`
	Sunday *bool `json:"sunday,omitempty"`
	Thursday *bool `json:"thursday,omitempty"`
	TimeSpan *TimeSpanType `json:"timeSpan,omitempty"`
	Tuesday *bool `json:"tuesday,omitempty"`
	Wednesday *bool `json:"wednesday,omitempty"`
}

// NewPromoCodeCompRoutingTypeDuration instantiates a new PromoCodeCompRoutingTypeDuration object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPromoCodeCompRoutingTypeDuration() *PromoCodeCompRoutingTypeDuration {
	this := PromoCodeCompRoutingTypeDuration{}
	return &this
}

// NewPromoCodeCompRoutingTypeDurationWithDefaults instantiates a new PromoCodeCompRoutingTypeDuration object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPromoCodeCompRoutingTypeDurationWithDefaults() *PromoCodeCompRoutingTypeDuration {
	this := PromoCodeCompRoutingTypeDuration{}
	return &this
}

// GetDaily returns the Daily field value if set, zero value otherwise.
func (o *PromoCodeCompRoutingTypeDuration) GetDaily() bool {
	if o == nil || IsNil(o.Daily) {
		var ret bool
		return ret
	}
	return *o.Daily
}

// GetDailyOk returns a tuple with the Daily field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PromoCodeCompRoutingTypeDuration) GetDailyOk() (*bool, bool) {
	if o == nil || IsNil(o.Daily) {
		return nil, false
	}
	return o.Daily, true
}

// HasDaily returns a boolean if a field has been set.
func (o *PromoCodeCompRoutingTypeDuration) HasDaily() bool {
	if o != nil && !IsNil(o.Daily) {
		return true
	}

	return false
}

// SetDaily gets a reference to the given bool and assigns it to the Daily field.
func (o *PromoCodeCompRoutingTypeDuration) SetDaily(v bool) {
	o.Daily = &v
}

// GetFriday returns the Friday field value if set, zero value otherwise.
func (o *PromoCodeCompRoutingTypeDuration) GetFriday() bool {
	if o == nil || IsNil(o.Friday) {
		var ret bool
		return ret
	}
	return *o.Friday
}

// GetFridayOk returns a tuple with the Friday field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PromoCodeCompRoutingTypeDuration) GetFridayOk() (*bool, bool) {
	if o == nil || IsNil(o.Friday) {
		return nil, false
	}
	return o.Friday, true
}

// HasFriday returns a boolean if a field has been set.
func (o *PromoCodeCompRoutingTypeDuration) HasFriday() bool {
	if o != nil && !IsNil(o.Friday) {
		return true
	}

	return false
}

// SetFriday gets a reference to the given bool and assigns it to the Friday field.
func (o *PromoCodeCompRoutingTypeDuration) SetFriday(v bool) {
	o.Friday = &v
}

// GetMonday returns the Monday field value if set, zero value otherwise.
func (o *PromoCodeCompRoutingTypeDuration) GetMonday() bool {
	if o == nil || IsNil(o.Monday) {
		var ret bool
		return ret
	}
	return *o.Monday
}

// GetMondayOk returns a tuple with the Monday field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PromoCodeCompRoutingTypeDuration) GetMondayOk() (*bool, bool) {
	if o == nil || IsNil(o.Monday) {
		return nil, false
	}
	return o.Monday, true
}

// HasMonday returns a boolean if a field has been set.
func (o *PromoCodeCompRoutingTypeDuration) HasMonday() bool {
	if o != nil && !IsNil(o.Monday) {
		return true
	}

	return false
}

// SetMonday gets a reference to the given bool and assigns it to the Monday field.
func (o *PromoCodeCompRoutingTypeDuration) SetMonday(v bool) {
	o.Monday = &v
}

// GetSaturday returns the Saturday field value if set, zero value otherwise.
func (o *PromoCodeCompRoutingTypeDuration) GetSaturday() bool {
	if o == nil || IsNil(o.Saturday) {
		var ret bool
		return ret
	}
	return *o.Saturday
}

// GetSaturdayOk returns a tuple with the Saturday field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PromoCodeCompRoutingTypeDuration) GetSaturdayOk() (*bool, bool) {
	if o == nil || IsNil(o.Saturday) {
		return nil, false
	}
	return o.Saturday, true
}

// HasSaturday returns a boolean if a field has been set.
func (o *PromoCodeCompRoutingTypeDuration) HasSaturday() bool {
	if o != nil && !IsNil(o.Saturday) {
		return true
	}

	return false
}

// SetSaturday gets a reference to the given bool and assigns it to the Saturday field.
func (o *PromoCodeCompRoutingTypeDuration) SetSaturday(v bool) {
	o.Saturday = &v
}

// GetSunday returns the Sunday field value if set, zero value otherwise.
func (o *PromoCodeCompRoutingTypeDuration) GetSunday() bool {
	if o == nil || IsNil(o.Sunday) {
		var ret bool
		return ret
	}
	return *o.Sunday
}

// GetSundayOk returns a tuple with the Sunday field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PromoCodeCompRoutingTypeDuration) GetSundayOk() (*bool, bool) {
	if o == nil || IsNil(o.Sunday) {
		return nil, false
	}
	return o.Sunday, true
}

// HasSunday returns a boolean if a field has been set.
func (o *PromoCodeCompRoutingTypeDuration) HasSunday() bool {
	if o != nil && !IsNil(o.Sunday) {
		return true
	}

	return false
}

// SetSunday gets a reference to the given bool and assigns it to the Sunday field.
func (o *PromoCodeCompRoutingTypeDuration) SetSunday(v bool) {
	o.Sunday = &v
}

// GetThursday returns the Thursday field value if set, zero value otherwise.
func (o *PromoCodeCompRoutingTypeDuration) GetThursday() bool {
	if o == nil || IsNil(o.Thursday) {
		var ret bool
		return ret
	}
	return *o.Thursday
}

// GetThursdayOk returns a tuple with the Thursday field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PromoCodeCompRoutingTypeDuration) GetThursdayOk() (*bool, bool) {
	if o == nil || IsNil(o.Thursday) {
		return nil, false
	}
	return o.Thursday, true
}

// HasThursday returns a boolean if a field has been set.
func (o *PromoCodeCompRoutingTypeDuration) HasThursday() bool {
	if o != nil && !IsNil(o.Thursday) {
		return true
	}

	return false
}

// SetThursday gets a reference to the given bool and assigns it to the Thursday field.
func (o *PromoCodeCompRoutingTypeDuration) SetThursday(v bool) {
	o.Thursday = &v
}

// GetTimeSpan returns the TimeSpan field value if set, zero value otherwise.
func (o *PromoCodeCompRoutingTypeDuration) GetTimeSpan() TimeSpanType {
	if o == nil || IsNil(o.TimeSpan) {
		var ret TimeSpanType
		return ret
	}
	return *o.TimeSpan
}

// GetTimeSpanOk returns a tuple with the TimeSpan field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PromoCodeCompRoutingTypeDuration) GetTimeSpanOk() (*TimeSpanType, bool) {
	if o == nil || IsNil(o.TimeSpan) {
		return nil, false
	}
	return o.TimeSpan, true
}

// HasTimeSpan returns a boolean if a field has been set.
func (o *PromoCodeCompRoutingTypeDuration) HasTimeSpan() bool {
	if o != nil && !IsNil(o.TimeSpan) {
		return true
	}

	return false
}

// SetTimeSpan gets a reference to the given TimeSpanType and assigns it to the TimeSpan field.
func (o *PromoCodeCompRoutingTypeDuration) SetTimeSpan(v TimeSpanType) {
	o.TimeSpan = &v
}

// GetTuesday returns the Tuesday field value if set, zero value otherwise.
func (o *PromoCodeCompRoutingTypeDuration) GetTuesday() bool {
	if o == nil || IsNil(o.Tuesday) {
		var ret bool
		return ret
	}
	return *o.Tuesday
}

// GetTuesdayOk returns a tuple with the Tuesday field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PromoCodeCompRoutingTypeDuration) GetTuesdayOk() (*bool, bool) {
	if o == nil || IsNil(o.Tuesday) {
		return nil, false
	}
	return o.Tuesday, true
}

// HasTuesday returns a boolean if a field has been set.
func (o *PromoCodeCompRoutingTypeDuration) HasTuesday() bool {
	if o != nil && !IsNil(o.Tuesday) {
		return true
	}

	return false
}

// SetTuesday gets a reference to the given bool and assigns it to the Tuesday field.
func (o *PromoCodeCompRoutingTypeDuration) SetTuesday(v bool) {
	o.Tuesday = &v
}

// GetWednesday returns the Wednesday field value if set, zero value otherwise.
func (o *PromoCodeCompRoutingTypeDuration) GetWednesday() bool {
	if o == nil || IsNil(o.Wednesday) {
		var ret bool
		return ret
	}
	return *o.Wednesday
}

// GetWednesdayOk returns a tuple with the Wednesday field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PromoCodeCompRoutingTypeDuration) GetWednesdayOk() (*bool, bool) {
	if o == nil || IsNil(o.Wednesday) {
		return nil, false
	}
	return o.Wednesday, true
}

// HasWednesday returns a boolean if a field has been set.
func (o *PromoCodeCompRoutingTypeDuration) HasWednesday() bool {
	if o != nil && !IsNil(o.Wednesday) {
		return true
	}

	return false
}

// SetWednesday gets a reference to the given bool and assigns it to the Wednesday field.
func (o *PromoCodeCompRoutingTypeDuration) SetWednesday(v bool) {
	o.Wednesday = &v
}

func (o PromoCodeCompRoutingTypeDuration) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PromoCodeCompRoutingTypeDuration) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Daily) {
		toSerialize["daily"] = o.Daily
	}
	if !IsNil(o.Friday) {
		toSerialize["friday"] = o.Friday
	}
	if !IsNil(o.Monday) {
		toSerialize["monday"] = o.Monday
	}
	if !IsNil(o.Saturday) {
		toSerialize["saturday"] = o.Saturday
	}
	if !IsNil(o.Sunday) {
		toSerialize["sunday"] = o.Sunday
	}
	if !IsNil(o.Thursday) {
		toSerialize["thursday"] = o.Thursday
	}
	if !IsNil(o.TimeSpan) {
		toSerialize["timeSpan"] = o.TimeSpan
	}
	if !IsNil(o.Tuesday) {
		toSerialize["tuesday"] = o.Tuesday
	}
	if !IsNil(o.Wednesday) {
		toSerialize["wednesday"] = o.Wednesday
	}
	return toSerialize, nil
}

type NullablePromoCodeCompRoutingTypeDuration struct {
	value *PromoCodeCompRoutingTypeDuration
	isSet bool
}

func (v NullablePromoCodeCompRoutingTypeDuration) Get() *PromoCodeCompRoutingTypeDuration {
	return v.value
}

func (v *NullablePromoCodeCompRoutingTypeDuration) Set(val *PromoCodeCompRoutingTypeDuration) {
	v.value = val
	v.isSet = true
}

func (v NullablePromoCodeCompRoutingTypeDuration) IsSet() bool {
	return v.isSet
}

func (v *NullablePromoCodeCompRoutingTypeDuration) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePromoCodeCompRoutingTypeDuration(val *PromoCodeCompRoutingTypeDuration) *NullablePromoCodeCompRoutingTypeDuration {
	return &NullablePromoCodeCompRoutingTypeDuration{value: val, isSet: true}
}

func (v NullablePromoCodeCompRoutingTypeDuration) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePromoCodeCompRoutingTypeDuration) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


