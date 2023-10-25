/*
OPERA Cloud Price Availability Rate API

APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package par

import (
	"encoding/json"
)

// checks if the UpsellDailyRateType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &UpsellDailyRateType{}

// UpsellDailyRateType Reservation date and its corresponding upsell rate amount
type UpsellDailyRateType struct {
	// Reservation date
	Date *string `json:"date,omitempty"`
	RequiredAmount *AmountPointsType `json:"requiredAmount,omitempty"`
}

// NewUpsellDailyRateType instantiates a new UpsellDailyRateType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewUpsellDailyRateType() *UpsellDailyRateType {
	this := UpsellDailyRateType{}
	return &this
}

// NewUpsellDailyRateTypeWithDefaults instantiates a new UpsellDailyRateType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewUpsellDailyRateTypeWithDefaults() *UpsellDailyRateType {
	this := UpsellDailyRateType{}
	return &this
}

// GetDate returns the Date field value if set, zero value otherwise.
func (o *UpsellDailyRateType) GetDate() string {
	if o == nil || IsNil(o.Date) {
		var ret string
		return ret
	}
	return *o.Date
}

// GetDateOk returns a tuple with the Date field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UpsellDailyRateType) GetDateOk() (*string, bool) {
	if o == nil || IsNil(o.Date) {
		return nil, false
	}
	return o.Date, true
}

// HasDate returns a boolean if a field has been set.
func (o *UpsellDailyRateType) HasDate() bool {
	if o != nil && !IsNil(o.Date) {
		return true
	}

	return false
}

// SetDate gets a reference to the given string and assigns it to the Date field.
func (o *UpsellDailyRateType) SetDate(v string) {
	o.Date = &v
}

// GetRequiredAmount returns the RequiredAmount field value if set, zero value otherwise.
func (o *UpsellDailyRateType) GetRequiredAmount() AmountPointsType {
	if o == nil || IsNil(o.RequiredAmount) {
		var ret AmountPointsType
		return ret
	}
	return *o.RequiredAmount
}

// GetRequiredAmountOk returns a tuple with the RequiredAmount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UpsellDailyRateType) GetRequiredAmountOk() (*AmountPointsType, bool) {
	if o == nil || IsNil(o.RequiredAmount) {
		return nil, false
	}
	return o.RequiredAmount, true
}

// HasRequiredAmount returns a boolean if a field has been set.
func (o *UpsellDailyRateType) HasRequiredAmount() bool {
	if o != nil && !IsNil(o.RequiredAmount) {
		return true
	}

	return false
}

// SetRequiredAmount gets a reference to the given AmountPointsType and assigns it to the RequiredAmount field.
func (o *UpsellDailyRateType) SetRequiredAmount(v AmountPointsType) {
	o.RequiredAmount = &v
}

func (o UpsellDailyRateType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o UpsellDailyRateType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Date) {
		toSerialize["date"] = o.Date
	}
	if !IsNil(o.RequiredAmount) {
		toSerialize["requiredAmount"] = o.RequiredAmount
	}
	return toSerialize, nil
}

type NullableUpsellDailyRateType struct {
	value *UpsellDailyRateType
	isSet bool
}

func (v NullableUpsellDailyRateType) Get() *UpsellDailyRateType {
	return v.value
}

func (v *NullableUpsellDailyRateType) Set(val *UpsellDailyRateType) {
	v.value = val
	v.isSet = true
}

func (v NullableUpsellDailyRateType) IsSet() bool {
	return v.isSet
}

func (v *NullableUpsellDailyRateType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableUpsellDailyRateType(val *UpsellDailyRateType) *NullableUpsellDailyRateType {
	return &NullableUpsellDailyRateType{value: val, isSet: true}
}

func (v NullableUpsellDailyRateType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableUpsellDailyRateType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


