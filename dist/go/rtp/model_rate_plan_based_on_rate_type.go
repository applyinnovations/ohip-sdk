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

// checks if the RatePlanBasedOnRateType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RatePlanBasedOnRateType{}

// RatePlanBasedOnRateType Base Rate type such as \"Base Rate\", \"Dynamic Base Rate\"
type RatePlanBasedOnRateType struct {
	AdvancedDynamicBaseRate *AdvancedDynamicBaseRateType `json:"advancedDynamicBaseRate,omitempty"`
	BARBasedRate *RatePlanBasedOnRateTypeBARBasedRate `json:"bARBasedRate,omitempty"`
	BaseRate *RatePlanBasedOnRateTypeBaseRate `json:"baseRate,omitempty"`
	BasedOnRatePlanType *BasedOnRatePlanType `json:"basedOnRatePlanType,omitempty"`
	DynamicBaseRate *RatePlanBasedOnRateTypeDynamicBaseRate `json:"dynamicBaseRate,omitempty"`
}

// NewRatePlanBasedOnRateType instantiates a new RatePlanBasedOnRateType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRatePlanBasedOnRateType() *RatePlanBasedOnRateType {
	this := RatePlanBasedOnRateType{}
	return &this
}

// NewRatePlanBasedOnRateTypeWithDefaults instantiates a new RatePlanBasedOnRateType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRatePlanBasedOnRateTypeWithDefaults() *RatePlanBasedOnRateType {
	this := RatePlanBasedOnRateType{}
	return &this
}

// GetAdvancedDynamicBaseRate returns the AdvancedDynamicBaseRate field value if set, zero value otherwise.
func (o *RatePlanBasedOnRateType) GetAdvancedDynamicBaseRate() AdvancedDynamicBaseRateType {
	if o == nil || IsNil(o.AdvancedDynamicBaseRate) {
		var ret AdvancedDynamicBaseRateType
		return ret
	}
	return *o.AdvancedDynamicBaseRate
}

// GetAdvancedDynamicBaseRateOk returns a tuple with the AdvancedDynamicBaseRate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanBasedOnRateType) GetAdvancedDynamicBaseRateOk() (*AdvancedDynamicBaseRateType, bool) {
	if o == nil || IsNil(o.AdvancedDynamicBaseRate) {
		return nil, false
	}
	return o.AdvancedDynamicBaseRate, true
}

// HasAdvancedDynamicBaseRate returns a boolean if a field has been set.
func (o *RatePlanBasedOnRateType) HasAdvancedDynamicBaseRate() bool {
	if o != nil && !IsNil(o.AdvancedDynamicBaseRate) {
		return true
	}

	return false
}

// SetAdvancedDynamicBaseRate gets a reference to the given AdvancedDynamicBaseRateType and assigns it to the AdvancedDynamicBaseRate field.
func (o *RatePlanBasedOnRateType) SetAdvancedDynamicBaseRate(v AdvancedDynamicBaseRateType) {
	o.AdvancedDynamicBaseRate = &v
}

// GetBARBasedRate returns the BARBasedRate field value if set, zero value otherwise.
func (o *RatePlanBasedOnRateType) GetBARBasedRate() RatePlanBasedOnRateTypeBARBasedRate {
	if o == nil || IsNil(o.BARBasedRate) {
		var ret RatePlanBasedOnRateTypeBARBasedRate
		return ret
	}
	return *o.BARBasedRate
}

// GetBARBasedRateOk returns a tuple with the BARBasedRate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanBasedOnRateType) GetBARBasedRateOk() (*RatePlanBasedOnRateTypeBARBasedRate, bool) {
	if o == nil || IsNil(o.BARBasedRate) {
		return nil, false
	}
	return o.BARBasedRate, true
}

// HasBARBasedRate returns a boolean if a field has been set.
func (o *RatePlanBasedOnRateType) HasBARBasedRate() bool {
	if o != nil && !IsNil(o.BARBasedRate) {
		return true
	}

	return false
}

// SetBARBasedRate gets a reference to the given RatePlanBasedOnRateTypeBARBasedRate and assigns it to the BARBasedRate field.
func (o *RatePlanBasedOnRateType) SetBARBasedRate(v RatePlanBasedOnRateTypeBARBasedRate) {
	o.BARBasedRate = &v
}

// GetBaseRate returns the BaseRate field value if set, zero value otherwise.
func (o *RatePlanBasedOnRateType) GetBaseRate() RatePlanBasedOnRateTypeBaseRate {
	if o == nil || IsNil(o.BaseRate) {
		var ret RatePlanBasedOnRateTypeBaseRate
		return ret
	}
	return *o.BaseRate
}

// GetBaseRateOk returns a tuple with the BaseRate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanBasedOnRateType) GetBaseRateOk() (*RatePlanBasedOnRateTypeBaseRate, bool) {
	if o == nil || IsNil(o.BaseRate) {
		return nil, false
	}
	return o.BaseRate, true
}

// HasBaseRate returns a boolean if a field has been set.
func (o *RatePlanBasedOnRateType) HasBaseRate() bool {
	if o != nil && !IsNil(o.BaseRate) {
		return true
	}

	return false
}

// SetBaseRate gets a reference to the given RatePlanBasedOnRateTypeBaseRate and assigns it to the BaseRate field.
func (o *RatePlanBasedOnRateType) SetBaseRate(v RatePlanBasedOnRateTypeBaseRate) {
	o.BaseRate = &v
}

// GetBasedOnRatePlanType returns the BasedOnRatePlanType field value if set, zero value otherwise.
func (o *RatePlanBasedOnRateType) GetBasedOnRatePlanType() BasedOnRatePlanType {
	if o == nil || IsNil(o.BasedOnRatePlanType) {
		var ret BasedOnRatePlanType
		return ret
	}
	return *o.BasedOnRatePlanType
}

// GetBasedOnRatePlanTypeOk returns a tuple with the BasedOnRatePlanType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanBasedOnRateType) GetBasedOnRatePlanTypeOk() (*BasedOnRatePlanType, bool) {
	if o == nil || IsNil(o.BasedOnRatePlanType) {
		return nil, false
	}
	return o.BasedOnRatePlanType, true
}

// HasBasedOnRatePlanType returns a boolean if a field has been set.
func (o *RatePlanBasedOnRateType) HasBasedOnRatePlanType() bool {
	if o != nil && !IsNil(o.BasedOnRatePlanType) {
		return true
	}

	return false
}

// SetBasedOnRatePlanType gets a reference to the given BasedOnRatePlanType and assigns it to the BasedOnRatePlanType field.
func (o *RatePlanBasedOnRateType) SetBasedOnRatePlanType(v BasedOnRatePlanType) {
	o.BasedOnRatePlanType = &v
}

// GetDynamicBaseRate returns the DynamicBaseRate field value if set, zero value otherwise.
func (o *RatePlanBasedOnRateType) GetDynamicBaseRate() RatePlanBasedOnRateTypeDynamicBaseRate {
	if o == nil || IsNil(o.DynamicBaseRate) {
		var ret RatePlanBasedOnRateTypeDynamicBaseRate
		return ret
	}
	return *o.DynamicBaseRate
}

// GetDynamicBaseRateOk returns a tuple with the DynamicBaseRate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanBasedOnRateType) GetDynamicBaseRateOk() (*RatePlanBasedOnRateTypeDynamicBaseRate, bool) {
	if o == nil || IsNil(o.DynamicBaseRate) {
		return nil, false
	}
	return o.DynamicBaseRate, true
}

// HasDynamicBaseRate returns a boolean if a field has been set.
func (o *RatePlanBasedOnRateType) HasDynamicBaseRate() bool {
	if o != nil && !IsNil(o.DynamicBaseRate) {
		return true
	}

	return false
}

// SetDynamicBaseRate gets a reference to the given RatePlanBasedOnRateTypeDynamicBaseRate and assigns it to the DynamicBaseRate field.
func (o *RatePlanBasedOnRateType) SetDynamicBaseRate(v RatePlanBasedOnRateTypeDynamicBaseRate) {
	o.DynamicBaseRate = &v
}

func (o RatePlanBasedOnRateType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RatePlanBasedOnRateType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AdvancedDynamicBaseRate) {
		toSerialize["advancedDynamicBaseRate"] = o.AdvancedDynamicBaseRate
	}
	if !IsNil(o.BARBasedRate) {
		toSerialize["bARBasedRate"] = o.BARBasedRate
	}
	if !IsNil(o.BaseRate) {
		toSerialize["baseRate"] = o.BaseRate
	}
	if !IsNil(o.BasedOnRatePlanType) {
		toSerialize["basedOnRatePlanType"] = o.BasedOnRatePlanType
	}
	if !IsNil(o.DynamicBaseRate) {
		toSerialize["dynamicBaseRate"] = o.DynamicBaseRate
	}
	return toSerialize, nil
}

type NullableRatePlanBasedOnRateType struct {
	value *RatePlanBasedOnRateType
	isSet bool
}

func (v NullableRatePlanBasedOnRateType) Get() *RatePlanBasedOnRateType {
	return v.value
}

func (v *NullableRatePlanBasedOnRateType) Set(val *RatePlanBasedOnRateType) {
	v.value = val
	v.isSet = true
}

func (v NullableRatePlanBasedOnRateType) IsSet() bool {
	return v.isSet
}

func (v *NullableRatePlanBasedOnRateType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRatePlanBasedOnRateType(val *RatePlanBasedOnRateType) *NullableRatePlanBasedOnRateType {
	return &NullableRatePlanBasedOnRateType{value: val, isSet: true}
}

func (v NullableRatePlanBasedOnRateType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRatePlanBasedOnRateType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

