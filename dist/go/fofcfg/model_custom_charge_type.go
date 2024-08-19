/*
OPERA Cloud Front Desk Configuration API

APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fofcfg

import (
	"encoding/json"
)

// checks if the CustomChargeType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CustomChargeType{}

// CustomChargeType This gives detailed information about Custom Charges.
type CustomChargeType struct {
	// Flag specifying if custom charge code is active or not.
	Active *bool `json:"active,omitempty"`
	// Code is used to identify the Custom Charge.
	CustomChargeCode *string `json:"customChargeCode,omitempty"`
	CustomChargeRuleType *CustomChargeRuleTypeType `json:"customChargeRuleType,omitempty"`
	DateRange *DateRangeType `json:"dateRange,omitempty"`
	// Description for the Custom Charge code.
	Description *string `json:"description,omitempty"`
	// Identifies the hotel code for which the Custom Charge code is specified.
	HotelId *string `json:"hotelId,omitempty"`
	// Identifies the price for which the Custom Charge code is specified.
	Price *float32 `json:"price,omitempty"`
	// Identifies the priority for which the Custom Charge code is specified.
	Priority *int32 `json:"priority,omitempty"`
}

// NewCustomChargeType instantiates a new CustomChargeType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCustomChargeType() *CustomChargeType {
	this := CustomChargeType{}
	return &this
}

// NewCustomChargeTypeWithDefaults instantiates a new CustomChargeType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCustomChargeTypeWithDefaults() *CustomChargeType {
	this := CustomChargeType{}
	return &this
}

// GetActive returns the Active field value if set, zero value otherwise.
func (o *CustomChargeType) GetActive() bool {
	if o == nil || IsNil(o.Active) {
		var ret bool
		return ret
	}
	return *o.Active
}

// GetActiveOk returns a tuple with the Active field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CustomChargeType) GetActiveOk() (*bool, bool) {
	if o == nil || IsNil(o.Active) {
		return nil, false
	}
	return o.Active, true
}

// HasActive returns a boolean if a field has been set.
func (o *CustomChargeType) HasActive() bool {
	if o != nil && !IsNil(o.Active) {
		return true
	}

	return false
}

// SetActive gets a reference to the given bool and assigns it to the Active field.
func (o *CustomChargeType) SetActive(v bool) {
	o.Active = &v
}

// GetCustomChargeCode returns the CustomChargeCode field value if set, zero value otherwise.
func (o *CustomChargeType) GetCustomChargeCode() string {
	if o == nil || IsNil(o.CustomChargeCode) {
		var ret string
		return ret
	}
	return *o.CustomChargeCode
}

// GetCustomChargeCodeOk returns a tuple with the CustomChargeCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CustomChargeType) GetCustomChargeCodeOk() (*string, bool) {
	if o == nil || IsNil(o.CustomChargeCode) {
		return nil, false
	}
	return o.CustomChargeCode, true
}

// HasCustomChargeCode returns a boolean if a field has been set.
func (o *CustomChargeType) HasCustomChargeCode() bool {
	if o != nil && !IsNil(o.CustomChargeCode) {
		return true
	}

	return false
}

// SetCustomChargeCode gets a reference to the given string and assigns it to the CustomChargeCode field.
func (o *CustomChargeType) SetCustomChargeCode(v string) {
	o.CustomChargeCode = &v
}

// GetCustomChargeRuleType returns the CustomChargeRuleType field value if set, zero value otherwise.
func (o *CustomChargeType) GetCustomChargeRuleType() CustomChargeRuleTypeType {
	if o == nil || IsNil(o.CustomChargeRuleType) {
		var ret CustomChargeRuleTypeType
		return ret
	}
	return *o.CustomChargeRuleType
}

// GetCustomChargeRuleTypeOk returns a tuple with the CustomChargeRuleType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CustomChargeType) GetCustomChargeRuleTypeOk() (*CustomChargeRuleTypeType, bool) {
	if o == nil || IsNil(o.CustomChargeRuleType) {
		return nil, false
	}
	return o.CustomChargeRuleType, true
}

// HasCustomChargeRuleType returns a boolean if a field has been set.
func (o *CustomChargeType) HasCustomChargeRuleType() bool {
	if o != nil && !IsNil(o.CustomChargeRuleType) {
		return true
	}

	return false
}

// SetCustomChargeRuleType gets a reference to the given CustomChargeRuleTypeType and assigns it to the CustomChargeRuleType field.
func (o *CustomChargeType) SetCustomChargeRuleType(v CustomChargeRuleTypeType) {
	o.CustomChargeRuleType = &v
}

// GetDateRange returns the DateRange field value if set, zero value otherwise.
func (o *CustomChargeType) GetDateRange() DateRangeType {
	if o == nil || IsNil(o.DateRange) {
		var ret DateRangeType
		return ret
	}
	return *o.DateRange
}

// GetDateRangeOk returns a tuple with the DateRange field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CustomChargeType) GetDateRangeOk() (*DateRangeType, bool) {
	if o == nil || IsNil(o.DateRange) {
		return nil, false
	}
	return o.DateRange, true
}

// HasDateRange returns a boolean if a field has been set.
func (o *CustomChargeType) HasDateRange() bool {
	if o != nil && !IsNil(o.DateRange) {
		return true
	}

	return false
}

// SetDateRange gets a reference to the given DateRangeType and assigns it to the DateRange field.
func (o *CustomChargeType) SetDateRange(v DateRangeType) {
	o.DateRange = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *CustomChargeType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CustomChargeType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *CustomChargeType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *CustomChargeType) SetDescription(v string) {
	o.Description = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *CustomChargeType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CustomChargeType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *CustomChargeType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *CustomChargeType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetPrice returns the Price field value if set, zero value otherwise.
func (o *CustomChargeType) GetPrice() float32 {
	if o == nil || IsNil(o.Price) {
		var ret float32
		return ret
	}
	return *o.Price
}

// GetPriceOk returns a tuple with the Price field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CustomChargeType) GetPriceOk() (*float32, bool) {
	if o == nil || IsNil(o.Price) {
		return nil, false
	}
	return o.Price, true
}

// HasPrice returns a boolean if a field has been set.
func (o *CustomChargeType) HasPrice() bool {
	if o != nil && !IsNil(o.Price) {
		return true
	}

	return false
}

// SetPrice gets a reference to the given float32 and assigns it to the Price field.
func (o *CustomChargeType) SetPrice(v float32) {
	o.Price = &v
}

// GetPriority returns the Priority field value if set, zero value otherwise.
func (o *CustomChargeType) GetPriority() int32 {
	if o == nil || IsNil(o.Priority) {
		var ret int32
		return ret
	}
	return *o.Priority
}

// GetPriorityOk returns a tuple with the Priority field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CustomChargeType) GetPriorityOk() (*int32, bool) {
	if o == nil || IsNil(o.Priority) {
		return nil, false
	}
	return o.Priority, true
}

// HasPriority returns a boolean if a field has been set.
func (o *CustomChargeType) HasPriority() bool {
	if o != nil && !IsNil(o.Priority) {
		return true
	}

	return false
}

// SetPriority gets a reference to the given int32 and assigns it to the Priority field.
func (o *CustomChargeType) SetPriority(v int32) {
	o.Priority = &v
}

func (o CustomChargeType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CustomChargeType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Active) {
		toSerialize["active"] = o.Active
	}
	if !IsNil(o.CustomChargeCode) {
		toSerialize["customChargeCode"] = o.CustomChargeCode
	}
	if !IsNil(o.CustomChargeRuleType) {
		toSerialize["customChargeRuleType"] = o.CustomChargeRuleType
	}
	if !IsNil(o.DateRange) {
		toSerialize["dateRange"] = o.DateRange
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.Price) {
		toSerialize["price"] = o.Price
	}
	if !IsNil(o.Priority) {
		toSerialize["priority"] = o.Priority
	}
	return toSerialize, nil
}

type NullableCustomChargeType struct {
	value *CustomChargeType
	isSet bool
}

func (v NullableCustomChargeType) Get() *CustomChargeType {
	return v.value
}

func (v *NullableCustomChargeType) Set(val *CustomChargeType) {
	v.value = val
	v.isSet = true
}

func (v NullableCustomChargeType) IsSet() bool {
	return v.isSet
}

func (v *NullableCustomChargeType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCustomChargeType(val *CustomChargeType) *NullableCustomChargeType {
	return &NullableCustomChargeType{value: val, isSet: true}
}

func (v NullableCustomChargeType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCustomChargeType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


