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

// checks if the ValidateReservationGuaranteesRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ValidateReservationGuaranteesRequest{}

// ValidateReservationGuaranteesRequest struct for ValidateReservationGuaranteesRequest
type ValidateReservationGuaranteesRequest struct {
	Criteria *ResGuaranteeSearchType `json:"criteria,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewValidateReservationGuaranteesRequest instantiates a new ValidateReservationGuaranteesRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewValidateReservationGuaranteesRequest() *ValidateReservationGuaranteesRequest {
	this := ValidateReservationGuaranteesRequest{}
	return &this
}

// NewValidateReservationGuaranteesRequestWithDefaults instantiates a new ValidateReservationGuaranteesRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewValidateReservationGuaranteesRequestWithDefaults() *ValidateReservationGuaranteesRequest {
	this := ValidateReservationGuaranteesRequest{}
	return &this
}

// GetCriteria returns the Criteria field value if set, zero value otherwise.
func (o *ValidateReservationGuaranteesRequest) GetCriteria() ResGuaranteeSearchType {
	if o == nil || IsNil(o.Criteria) {
		var ret ResGuaranteeSearchType
		return ret
	}
	return *o.Criteria
}

// GetCriteriaOk returns a tuple with the Criteria field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ValidateReservationGuaranteesRequest) GetCriteriaOk() (*ResGuaranteeSearchType, bool) {
	if o == nil || IsNil(o.Criteria) {
		return nil, false
	}
	return o.Criteria, true
}

// HasCriteria returns a boolean if a field has been set.
func (o *ValidateReservationGuaranteesRequest) HasCriteria() bool {
	if o != nil && !IsNil(o.Criteria) {
		return true
	}

	return false
}

// SetCriteria gets a reference to the given ResGuaranteeSearchType and assigns it to the Criteria field.
func (o *ValidateReservationGuaranteesRequest) SetCriteria(v ResGuaranteeSearchType) {
	o.Criteria = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *ValidateReservationGuaranteesRequest) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ValidateReservationGuaranteesRequest) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *ValidateReservationGuaranteesRequest) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *ValidateReservationGuaranteesRequest) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o ValidateReservationGuaranteesRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ValidateReservationGuaranteesRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Criteria) {
		toSerialize["criteria"] = o.Criteria
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableValidateReservationGuaranteesRequest struct {
	value *ValidateReservationGuaranteesRequest
	isSet bool
}

func (v NullableValidateReservationGuaranteesRequest) Get() *ValidateReservationGuaranteesRequest {
	return v.value
}

func (v *NullableValidateReservationGuaranteesRequest) Set(val *ValidateReservationGuaranteesRequest) {
	v.value = val
	v.isSet = true
}

func (v NullableValidateReservationGuaranteesRequest) IsSet() bool {
	return v.isSet
}

func (v *NullableValidateReservationGuaranteesRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableValidateReservationGuaranteesRequest(val *ValidateReservationGuaranteesRequest) *NullableValidateReservationGuaranteesRequest {
	return &NullableValidateReservationGuaranteesRequest{value: val, isSet: true}
}

func (v NullableValidateReservationGuaranteesRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableValidateReservationGuaranteesRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


