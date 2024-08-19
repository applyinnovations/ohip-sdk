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

// checks if the BudgetForecastToDelete type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &BudgetForecastToDelete{}

// BudgetForecastToDelete struct for BudgetForecastToDelete
type BudgetForecastToDelete struct {
	Links []InstanceLink `json:"links,omitempty"`
	SegmentCodeInformation *DeleteSegmentCodeBudgetInformationType `json:"segmentCodeInformation,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewBudgetForecastToDelete instantiates a new BudgetForecastToDelete object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewBudgetForecastToDelete() *BudgetForecastToDelete {
	this := BudgetForecastToDelete{}
	return &this
}

// NewBudgetForecastToDeleteWithDefaults instantiates a new BudgetForecastToDelete object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewBudgetForecastToDeleteWithDefaults() *BudgetForecastToDelete {
	this := BudgetForecastToDelete{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *BudgetForecastToDelete) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BudgetForecastToDelete) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *BudgetForecastToDelete) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *BudgetForecastToDelete) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetSegmentCodeInformation returns the SegmentCodeInformation field value if set, zero value otherwise.
func (o *BudgetForecastToDelete) GetSegmentCodeInformation() DeleteSegmentCodeBudgetInformationType {
	if o == nil || IsNil(o.SegmentCodeInformation) {
		var ret DeleteSegmentCodeBudgetInformationType
		return ret
	}
	return *o.SegmentCodeInformation
}

// GetSegmentCodeInformationOk returns a tuple with the SegmentCodeInformation field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BudgetForecastToDelete) GetSegmentCodeInformationOk() (*DeleteSegmentCodeBudgetInformationType, bool) {
	if o == nil || IsNil(o.SegmentCodeInformation) {
		return nil, false
	}
	return o.SegmentCodeInformation, true
}

// HasSegmentCodeInformation returns a boolean if a field has been set.
func (o *BudgetForecastToDelete) HasSegmentCodeInformation() bool {
	if o != nil && !IsNil(o.SegmentCodeInformation) {
		return true
	}

	return false
}

// SetSegmentCodeInformation gets a reference to the given DeleteSegmentCodeBudgetInformationType and assigns it to the SegmentCodeInformation field.
func (o *BudgetForecastToDelete) SetSegmentCodeInformation(v DeleteSegmentCodeBudgetInformationType) {
	o.SegmentCodeInformation = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *BudgetForecastToDelete) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BudgetForecastToDelete) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *BudgetForecastToDelete) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *BudgetForecastToDelete) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o BudgetForecastToDelete) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o BudgetForecastToDelete) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.SegmentCodeInformation) {
		toSerialize["segmentCodeInformation"] = o.SegmentCodeInformation
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableBudgetForecastToDelete struct {
	value *BudgetForecastToDelete
	isSet bool
}

func (v NullableBudgetForecastToDelete) Get() *BudgetForecastToDelete {
	return v.value
}

func (v *NullableBudgetForecastToDelete) Set(val *BudgetForecastToDelete) {
	v.value = val
	v.isSet = true
}

func (v NullableBudgetForecastToDelete) IsSet() bool {
	return v.isSet
}

func (v *NullableBudgetForecastToDelete) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBudgetForecastToDelete(val *BudgetForecastToDelete) *NullableBudgetForecastToDelete {
	return &NullableBudgetForecastToDelete{value: val, isSet: true}
}

func (v NullableBudgetForecastToDelete) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBudgetForecastToDelete) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


