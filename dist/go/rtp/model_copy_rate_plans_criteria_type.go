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

// checks if the CopyRatePlansCriteriaType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CopyRatePlansCriteriaType{}

// CopyRatePlansCriteriaType Copy Rate plans criteria type to copy multiple rate plans from one Hotel to another Hotel.
type CopyRatePlansCriteriaType struct {
	CopyRatePlans *CopyRatePlansCriteriaTypeCopyRatePlans `json:"copyRatePlans,omitempty"`
	// include negotiated rates?
	IncludeNegotiatedRates *bool `json:"includeNegotiatedRates,omitempty"`
	// include packages?
	IncludePackages *bool `json:"includePackages,omitempty"`
	// include rate plan schedules?
	IncludeRateDetails *bool `json:"includeRateDetails,omitempty"`
	// include rate floors?
	IncludeRateFloor *bool `json:"includeRateFloor,omitempty"`
}

// NewCopyRatePlansCriteriaType instantiates a new CopyRatePlansCriteriaType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCopyRatePlansCriteriaType() *CopyRatePlansCriteriaType {
	this := CopyRatePlansCriteriaType{}
	return &this
}

// NewCopyRatePlansCriteriaTypeWithDefaults instantiates a new CopyRatePlansCriteriaType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCopyRatePlansCriteriaTypeWithDefaults() *CopyRatePlansCriteriaType {
	this := CopyRatePlansCriteriaType{}
	return &this
}

// GetCopyRatePlans returns the CopyRatePlans field value if set, zero value otherwise.
func (o *CopyRatePlansCriteriaType) GetCopyRatePlans() CopyRatePlansCriteriaTypeCopyRatePlans {
	if o == nil || IsNil(o.CopyRatePlans) {
		var ret CopyRatePlansCriteriaTypeCopyRatePlans
		return ret
	}
	return *o.CopyRatePlans
}

// GetCopyRatePlansOk returns a tuple with the CopyRatePlans field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyRatePlansCriteriaType) GetCopyRatePlansOk() (*CopyRatePlansCriteriaTypeCopyRatePlans, bool) {
	if o == nil || IsNil(o.CopyRatePlans) {
		return nil, false
	}
	return o.CopyRatePlans, true
}

// HasCopyRatePlans returns a boolean if a field has been set.
func (o *CopyRatePlansCriteriaType) HasCopyRatePlans() bool {
	if o != nil && !IsNil(o.CopyRatePlans) {
		return true
	}

	return false
}

// SetCopyRatePlans gets a reference to the given CopyRatePlansCriteriaTypeCopyRatePlans and assigns it to the CopyRatePlans field.
func (o *CopyRatePlansCriteriaType) SetCopyRatePlans(v CopyRatePlansCriteriaTypeCopyRatePlans) {
	o.CopyRatePlans = &v
}

// GetIncludeNegotiatedRates returns the IncludeNegotiatedRates field value if set, zero value otherwise.
func (o *CopyRatePlansCriteriaType) GetIncludeNegotiatedRates() bool {
	if o == nil || IsNil(o.IncludeNegotiatedRates) {
		var ret bool
		return ret
	}
	return *o.IncludeNegotiatedRates
}

// GetIncludeNegotiatedRatesOk returns a tuple with the IncludeNegotiatedRates field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyRatePlansCriteriaType) GetIncludeNegotiatedRatesOk() (*bool, bool) {
	if o == nil || IsNil(o.IncludeNegotiatedRates) {
		return nil, false
	}
	return o.IncludeNegotiatedRates, true
}

// HasIncludeNegotiatedRates returns a boolean if a field has been set.
func (o *CopyRatePlansCriteriaType) HasIncludeNegotiatedRates() bool {
	if o != nil && !IsNil(o.IncludeNegotiatedRates) {
		return true
	}

	return false
}

// SetIncludeNegotiatedRates gets a reference to the given bool and assigns it to the IncludeNegotiatedRates field.
func (o *CopyRatePlansCriteriaType) SetIncludeNegotiatedRates(v bool) {
	o.IncludeNegotiatedRates = &v
}

// GetIncludePackages returns the IncludePackages field value if set, zero value otherwise.
func (o *CopyRatePlansCriteriaType) GetIncludePackages() bool {
	if o == nil || IsNil(o.IncludePackages) {
		var ret bool
		return ret
	}
	return *o.IncludePackages
}

// GetIncludePackagesOk returns a tuple with the IncludePackages field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyRatePlansCriteriaType) GetIncludePackagesOk() (*bool, bool) {
	if o == nil || IsNil(o.IncludePackages) {
		return nil, false
	}
	return o.IncludePackages, true
}

// HasIncludePackages returns a boolean if a field has been set.
func (o *CopyRatePlansCriteriaType) HasIncludePackages() bool {
	if o != nil && !IsNil(o.IncludePackages) {
		return true
	}

	return false
}

// SetIncludePackages gets a reference to the given bool and assigns it to the IncludePackages field.
func (o *CopyRatePlansCriteriaType) SetIncludePackages(v bool) {
	o.IncludePackages = &v
}

// GetIncludeRateDetails returns the IncludeRateDetails field value if set, zero value otherwise.
func (o *CopyRatePlansCriteriaType) GetIncludeRateDetails() bool {
	if o == nil || IsNil(o.IncludeRateDetails) {
		var ret bool
		return ret
	}
	return *o.IncludeRateDetails
}

// GetIncludeRateDetailsOk returns a tuple with the IncludeRateDetails field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyRatePlansCriteriaType) GetIncludeRateDetailsOk() (*bool, bool) {
	if o == nil || IsNil(o.IncludeRateDetails) {
		return nil, false
	}
	return o.IncludeRateDetails, true
}

// HasIncludeRateDetails returns a boolean if a field has been set.
func (o *CopyRatePlansCriteriaType) HasIncludeRateDetails() bool {
	if o != nil && !IsNil(o.IncludeRateDetails) {
		return true
	}

	return false
}

// SetIncludeRateDetails gets a reference to the given bool and assigns it to the IncludeRateDetails field.
func (o *CopyRatePlansCriteriaType) SetIncludeRateDetails(v bool) {
	o.IncludeRateDetails = &v
}

// GetIncludeRateFloor returns the IncludeRateFloor field value if set, zero value otherwise.
func (o *CopyRatePlansCriteriaType) GetIncludeRateFloor() bool {
	if o == nil || IsNil(o.IncludeRateFloor) {
		var ret bool
		return ret
	}
	return *o.IncludeRateFloor
}

// GetIncludeRateFloorOk returns a tuple with the IncludeRateFloor field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyRatePlansCriteriaType) GetIncludeRateFloorOk() (*bool, bool) {
	if o == nil || IsNil(o.IncludeRateFloor) {
		return nil, false
	}
	return o.IncludeRateFloor, true
}

// HasIncludeRateFloor returns a boolean if a field has been set.
func (o *CopyRatePlansCriteriaType) HasIncludeRateFloor() bool {
	if o != nil && !IsNil(o.IncludeRateFloor) {
		return true
	}

	return false
}

// SetIncludeRateFloor gets a reference to the given bool and assigns it to the IncludeRateFloor field.
func (o *CopyRatePlansCriteriaType) SetIncludeRateFloor(v bool) {
	o.IncludeRateFloor = &v
}

func (o CopyRatePlansCriteriaType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CopyRatePlansCriteriaType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CopyRatePlans) {
		toSerialize["copyRatePlans"] = o.CopyRatePlans
	}
	if !IsNil(o.IncludeNegotiatedRates) {
		toSerialize["includeNegotiatedRates"] = o.IncludeNegotiatedRates
	}
	if !IsNil(o.IncludePackages) {
		toSerialize["includePackages"] = o.IncludePackages
	}
	if !IsNil(o.IncludeRateDetails) {
		toSerialize["includeRateDetails"] = o.IncludeRateDetails
	}
	if !IsNil(o.IncludeRateFloor) {
		toSerialize["includeRateFloor"] = o.IncludeRateFloor
	}
	return toSerialize, nil
}

type NullableCopyRatePlansCriteriaType struct {
	value *CopyRatePlansCriteriaType
	isSet bool
}

func (v NullableCopyRatePlansCriteriaType) Get() *CopyRatePlansCriteriaType {
	return v.value
}

func (v *NullableCopyRatePlansCriteriaType) Set(val *CopyRatePlansCriteriaType) {
	v.value = val
	v.isSet = true
}

func (v NullableCopyRatePlansCriteriaType) IsSet() bool {
	return v.isSet
}

func (v *NullableCopyRatePlansCriteriaType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCopyRatePlansCriteriaType(val *CopyRatePlansCriteriaType) *NullableCopyRatePlansCriteriaType {
	return &NullableCopyRatePlansCriteriaType{value: val, isSet: true}
}

func (v NullableCopyRatePlansCriteriaType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCopyRatePlansCriteriaType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


