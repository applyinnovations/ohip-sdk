/*
OPERA Cloud Front Desk Operations Service

APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fof

import (
	"encoding/json"
)

// checks if the ECertificateGenerationType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ECertificateGenerationType{}

// ECertificateGenerationType E-Certificates details.
type ECertificateGenerationType struct {
	// Reason for which e-certificate was generated.
	GenerationDetail *string `json:"generationDetail,omitempty"`
	// Type of value that is in the certificate.valid values are membership_level.
	ReferenceValue *string `json:"referenceValue,omitempty"`
	RuleId *UniqueIDType `json:"ruleId,omitempty"`
}

// NewECertificateGenerationType instantiates a new ECertificateGenerationType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewECertificateGenerationType() *ECertificateGenerationType {
	this := ECertificateGenerationType{}
	return &this
}

// NewECertificateGenerationTypeWithDefaults instantiates a new ECertificateGenerationType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewECertificateGenerationTypeWithDefaults() *ECertificateGenerationType {
	this := ECertificateGenerationType{}
	return &this
}

// GetGenerationDetail returns the GenerationDetail field value if set, zero value otherwise.
func (o *ECertificateGenerationType) GetGenerationDetail() string {
	if o == nil || IsNil(o.GenerationDetail) {
		var ret string
		return ret
	}
	return *o.GenerationDetail
}

// GetGenerationDetailOk returns a tuple with the GenerationDetail field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateGenerationType) GetGenerationDetailOk() (*string, bool) {
	if o == nil || IsNil(o.GenerationDetail) {
		return nil, false
	}
	return o.GenerationDetail, true
}

// HasGenerationDetail returns a boolean if a field has been set.
func (o *ECertificateGenerationType) HasGenerationDetail() bool {
	if o != nil && !IsNil(o.GenerationDetail) {
		return true
	}

	return false
}

// SetGenerationDetail gets a reference to the given string and assigns it to the GenerationDetail field.
func (o *ECertificateGenerationType) SetGenerationDetail(v string) {
	o.GenerationDetail = &v
}

// GetReferenceValue returns the ReferenceValue field value if set, zero value otherwise.
func (o *ECertificateGenerationType) GetReferenceValue() string {
	if o == nil || IsNil(o.ReferenceValue) {
		var ret string
		return ret
	}
	return *o.ReferenceValue
}

// GetReferenceValueOk returns a tuple with the ReferenceValue field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateGenerationType) GetReferenceValueOk() (*string, bool) {
	if o == nil || IsNil(o.ReferenceValue) {
		return nil, false
	}
	return o.ReferenceValue, true
}

// HasReferenceValue returns a boolean if a field has been set.
func (o *ECertificateGenerationType) HasReferenceValue() bool {
	if o != nil && !IsNil(o.ReferenceValue) {
		return true
	}

	return false
}

// SetReferenceValue gets a reference to the given string and assigns it to the ReferenceValue field.
func (o *ECertificateGenerationType) SetReferenceValue(v string) {
	o.ReferenceValue = &v
}

// GetRuleId returns the RuleId field value if set, zero value otherwise.
func (o *ECertificateGenerationType) GetRuleId() UniqueIDType {
	if o == nil || IsNil(o.RuleId) {
		var ret UniqueIDType
		return ret
	}
	return *o.RuleId
}

// GetRuleIdOk returns a tuple with the RuleId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateGenerationType) GetRuleIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.RuleId) {
		return nil, false
	}
	return o.RuleId, true
}

// HasRuleId returns a boolean if a field has been set.
func (o *ECertificateGenerationType) HasRuleId() bool {
	if o != nil && !IsNil(o.RuleId) {
		return true
	}

	return false
}

// SetRuleId gets a reference to the given UniqueIDType and assigns it to the RuleId field.
func (o *ECertificateGenerationType) SetRuleId(v UniqueIDType) {
	o.RuleId = &v
}

func (o ECertificateGenerationType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ECertificateGenerationType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.GenerationDetail) {
		toSerialize["generationDetail"] = o.GenerationDetail
	}
	if !IsNil(o.ReferenceValue) {
		toSerialize["referenceValue"] = o.ReferenceValue
	}
	if !IsNil(o.RuleId) {
		toSerialize["ruleId"] = o.RuleId
	}
	return toSerialize, nil
}

type NullableECertificateGenerationType struct {
	value *ECertificateGenerationType
	isSet bool
}

func (v NullableECertificateGenerationType) Get() *ECertificateGenerationType {
	return v.value
}

func (v *NullableECertificateGenerationType) Set(val *ECertificateGenerationType) {
	v.value = val
	v.isSet = true
}

func (v NullableECertificateGenerationType) IsSet() bool {
	return v.isSet
}

func (v *NullableECertificateGenerationType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableECertificateGenerationType(val *ECertificateGenerationType) *NullableECertificateGenerationType {
	return &NullableECertificateGenerationType{value: val, isSet: true}
}

func (v NullableECertificateGenerationType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableECertificateGenerationType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


