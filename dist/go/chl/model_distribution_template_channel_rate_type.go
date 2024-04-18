/*
OPERA Cloud Channel Configuration API

APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package chl

import (
	"encoding/json"
)

// checks if the DistributionTemplateChannelRateType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &DistributionTemplateChannelRateType{}

// DistributionTemplateChannelRateType Information about channel rates of a distribution template.
type DistributionTemplateChannelRateType struct {
	// Channel Rate Category where distribution template will be distributed to.
	ChannelRateCategory *string `json:"channelRateCategory,omitempty"`
	// Channel Rate Code where distribution template will be distributed to.
	ChannelRateCode *string `json:"channelRateCode,omitempty"`
	// Channel Rate Level where distribution template will be distributed to.
	ChannelRateLevel *string `json:"channelRateLevel,omitempty"`
	// Rate update flag which will be the default value when rate code is distributed to channels.
	RateUpdate *bool `json:"rateUpdate,omitempty"`
	// Regional Availability flag which will be the default value when rate code is distributed to channels.
	RegionalAvailability *bool `json:"regionalAvailability,omitempty"`
	// Restriction update flag which will be the default value when rate code is distributed to channels.
	RestrictionUpdate *bool `json:"restrictionUpdate,omitempty"`
	// Return SGA flag which will be the default value when rate code is distributed to channels.
	ReturnSGA *bool `json:"returnSGA,omitempty"`
	SystemInfo *SystemInfoType `json:"systemInfo,omitempty"`
}

// NewDistributionTemplateChannelRateType instantiates a new DistributionTemplateChannelRateType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewDistributionTemplateChannelRateType() *DistributionTemplateChannelRateType {
	this := DistributionTemplateChannelRateType{}
	return &this
}

// NewDistributionTemplateChannelRateTypeWithDefaults instantiates a new DistributionTemplateChannelRateType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewDistributionTemplateChannelRateTypeWithDefaults() *DistributionTemplateChannelRateType {
	this := DistributionTemplateChannelRateType{}
	return &this
}

// GetChannelRateCategory returns the ChannelRateCategory field value if set, zero value otherwise.
func (o *DistributionTemplateChannelRateType) GetChannelRateCategory() string {
	if o == nil || IsNil(o.ChannelRateCategory) {
		var ret string
		return ret
	}
	return *o.ChannelRateCategory
}

// GetChannelRateCategoryOk returns a tuple with the ChannelRateCategory field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DistributionTemplateChannelRateType) GetChannelRateCategoryOk() (*string, bool) {
	if o == nil || IsNil(o.ChannelRateCategory) {
		return nil, false
	}
	return o.ChannelRateCategory, true
}

// HasChannelRateCategory returns a boolean if a field has been set.
func (o *DistributionTemplateChannelRateType) HasChannelRateCategory() bool {
	if o != nil && !IsNil(o.ChannelRateCategory) {
		return true
	}

	return false
}

// SetChannelRateCategory gets a reference to the given string and assigns it to the ChannelRateCategory field.
func (o *DistributionTemplateChannelRateType) SetChannelRateCategory(v string) {
	o.ChannelRateCategory = &v
}

// GetChannelRateCode returns the ChannelRateCode field value if set, zero value otherwise.
func (o *DistributionTemplateChannelRateType) GetChannelRateCode() string {
	if o == nil || IsNil(o.ChannelRateCode) {
		var ret string
		return ret
	}
	return *o.ChannelRateCode
}

// GetChannelRateCodeOk returns a tuple with the ChannelRateCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DistributionTemplateChannelRateType) GetChannelRateCodeOk() (*string, bool) {
	if o == nil || IsNil(o.ChannelRateCode) {
		return nil, false
	}
	return o.ChannelRateCode, true
}

// HasChannelRateCode returns a boolean if a field has been set.
func (o *DistributionTemplateChannelRateType) HasChannelRateCode() bool {
	if o != nil && !IsNil(o.ChannelRateCode) {
		return true
	}

	return false
}

// SetChannelRateCode gets a reference to the given string and assigns it to the ChannelRateCode field.
func (o *DistributionTemplateChannelRateType) SetChannelRateCode(v string) {
	o.ChannelRateCode = &v
}

// GetChannelRateLevel returns the ChannelRateLevel field value if set, zero value otherwise.
func (o *DistributionTemplateChannelRateType) GetChannelRateLevel() string {
	if o == nil || IsNil(o.ChannelRateLevel) {
		var ret string
		return ret
	}
	return *o.ChannelRateLevel
}

// GetChannelRateLevelOk returns a tuple with the ChannelRateLevel field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DistributionTemplateChannelRateType) GetChannelRateLevelOk() (*string, bool) {
	if o == nil || IsNil(o.ChannelRateLevel) {
		return nil, false
	}
	return o.ChannelRateLevel, true
}

// HasChannelRateLevel returns a boolean if a field has been set.
func (o *DistributionTemplateChannelRateType) HasChannelRateLevel() bool {
	if o != nil && !IsNil(o.ChannelRateLevel) {
		return true
	}

	return false
}

// SetChannelRateLevel gets a reference to the given string and assigns it to the ChannelRateLevel field.
func (o *DistributionTemplateChannelRateType) SetChannelRateLevel(v string) {
	o.ChannelRateLevel = &v
}

// GetRateUpdate returns the RateUpdate field value if set, zero value otherwise.
func (o *DistributionTemplateChannelRateType) GetRateUpdate() bool {
	if o == nil || IsNil(o.RateUpdate) {
		var ret bool
		return ret
	}
	return *o.RateUpdate
}

// GetRateUpdateOk returns a tuple with the RateUpdate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DistributionTemplateChannelRateType) GetRateUpdateOk() (*bool, bool) {
	if o == nil || IsNil(o.RateUpdate) {
		return nil, false
	}
	return o.RateUpdate, true
}

// HasRateUpdate returns a boolean if a field has been set.
func (o *DistributionTemplateChannelRateType) HasRateUpdate() bool {
	if o != nil && !IsNil(o.RateUpdate) {
		return true
	}

	return false
}

// SetRateUpdate gets a reference to the given bool and assigns it to the RateUpdate field.
func (o *DistributionTemplateChannelRateType) SetRateUpdate(v bool) {
	o.RateUpdate = &v
}

// GetRegionalAvailability returns the RegionalAvailability field value if set, zero value otherwise.
func (o *DistributionTemplateChannelRateType) GetRegionalAvailability() bool {
	if o == nil || IsNil(o.RegionalAvailability) {
		var ret bool
		return ret
	}
	return *o.RegionalAvailability
}

// GetRegionalAvailabilityOk returns a tuple with the RegionalAvailability field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DistributionTemplateChannelRateType) GetRegionalAvailabilityOk() (*bool, bool) {
	if o == nil || IsNil(o.RegionalAvailability) {
		return nil, false
	}
	return o.RegionalAvailability, true
}

// HasRegionalAvailability returns a boolean if a field has been set.
func (o *DistributionTemplateChannelRateType) HasRegionalAvailability() bool {
	if o != nil && !IsNil(o.RegionalAvailability) {
		return true
	}

	return false
}

// SetRegionalAvailability gets a reference to the given bool and assigns it to the RegionalAvailability field.
func (o *DistributionTemplateChannelRateType) SetRegionalAvailability(v bool) {
	o.RegionalAvailability = &v
}

// GetRestrictionUpdate returns the RestrictionUpdate field value if set, zero value otherwise.
func (o *DistributionTemplateChannelRateType) GetRestrictionUpdate() bool {
	if o == nil || IsNil(o.RestrictionUpdate) {
		var ret bool
		return ret
	}
	return *o.RestrictionUpdate
}

// GetRestrictionUpdateOk returns a tuple with the RestrictionUpdate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DistributionTemplateChannelRateType) GetRestrictionUpdateOk() (*bool, bool) {
	if o == nil || IsNil(o.RestrictionUpdate) {
		return nil, false
	}
	return o.RestrictionUpdate, true
}

// HasRestrictionUpdate returns a boolean if a field has been set.
func (o *DistributionTemplateChannelRateType) HasRestrictionUpdate() bool {
	if o != nil && !IsNil(o.RestrictionUpdate) {
		return true
	}

	return false
}

// SetRestrictionUpdate gets a reference to the given bool and assigns it to the RestrictionUpdate field.
func (o *DistributionTemplateChannelRateType) SetRestrictionUpdate(v bool) {
	o.RestrictionUpdate = &v
}

// GetReturnSGA returns the ReturnSGA field value if set, zero value otherwise.
func (o *DistributionTemplateChannelRateType) GetReturnSGA() bool {
	if o == nil || IsNil(o.ReturnSGA) {
		var ret bool
		return ret
	}
	return *o.ReturnSGA
}

// GetReturnSGAOk returns a tuple with the ReturnSGA field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DistributionTemplateChannelRateType) GetReturnSGAOk() (*bool, bool) {
	if o == nil || IsNil(o.ReturnSGA) {
		return nil, false
	}
	return o.ReturnSGA, true
}

// HasReturnSGA returns a boolean if a field has been set.
func (o *DistributionTemplateChannelRateType) HasReturnSGA() bool {
	if o != nil && !IsNil(o.ReturnSGA) {
		return true
	}

	return false
}

// SetReturnSGA gets a reference to the given bool and assigns it to the ReturnSGA field.
func (o *DistributionTemplateChannelRateType) SetReturnSGA(v bool) {
	o.ReturnSGA = &v
}

// GetSystemInfo returns the SystemInfo field value if set, zero value otherwise.
func (o *DistributionTemplateChannelRateType) GetSystemInfo() SystemInfoType {
	if o == nil || IsNil(o.SystemInfo) {
		var ret SystemInfoType
		return ret
	}
	return *o.SystemInfo
}

// GetSystemInfoOk returns a tuple with the SystemInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DistributionTemplateChannelRateType) GetSystemInfoOk() (*SystemInfoType, bool) {
	if o == nil || IsNil(o.SystemInfo) {
		return nil, false
	}
	return o.SystemInfo, true
}

// HasSystemInfo returns a boolean if a field has been set.
func (o *DistributionTemplateChannelRateType) HasSystemInfo() bool {
	if o != nil && !IsNil(o.SystemInfo) {
		return true
	}

	return false
}

// SetSystemInfo gets a reference to the given SystemInfoType and assigns it to the SystemInfo field.
func (o *DistributionTemplateChannelRateType) SetSystemInfo(v SystemInfoType) {
	o.SystemInfo = &v
}

func (o DistributionTemplateChannelRateType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o DistributionTemplateChannelRateType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ChannelRateCategory) {
		toSerialize["channelRateCategory"] = o.ChannelRateCategory
	}
	if !IsNil(o.ChannelRateCode) {
		toSerialize["channelRateCode"] = o.ChannelRateCode
	}
	if !IsNil(o.ChannelRateLevel) {
		toSerialize["channelRateLevel"] = o.ChannelRateLevel
	}
	if !IsNil(o.RateUpdate) {
		toSerialize["rateUpdate"] = o.RateUpdate
	}
	if !IsNil(o.RegionalAvailability) {
		toSerialize["regionalAvailability"] = o.RegionalAvailability
	}
	if !IsNil(o.RestrictionUpdate) {
		toSerialize["restrictionUpdate"] = o.RestrictionUpdate
	}
	if !IsNil(o.ReturnSGA) {
		toSerialize["returnSGA"] = o.ReturnSGA
	}
	if !IsNil(o.SystemInfo) {
		toSerialize["systemInfo"] = o.SystemInfo
	}
	return toSerialize, nil
}

type NullableDistributionTemplateChannelRateType struct {
	value *DistributionTemplateChannelRateType
	isSet bool
}

func (v NullableDistributionTemplateChannelRateType) Get() *DistributionTemplateChannelRateType {
	return v.value
}

func (v *NullableDistributionTemplateChannelRateType) Set(val *DistributionTemplateChannelRateType) {
	v.value = val
	v.isSet = true
}

func (v NullableDistributionTemplateChannelRateType) IsSet() bool {
	return v.isSet
}

func (v *NullableDistributionTemplateChannelRateType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableDistributionTemplateChannelRateType(val *DistributionTemplateChannelRateType) *NullableDistributionTemplateChannelRateType {
	return &NullableDistributionTemplateChannelRateType{value: val, isSet: true}
}

func (v NullableDistributionTemplateChannelRateType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableDistributionTemplateChannelRateType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

