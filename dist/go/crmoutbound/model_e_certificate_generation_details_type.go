/*
OPERA Cloud Customer Relationship Management Outbound API

APIs to cater for Customer Relationship Management external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 20.99.99.99.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 20.99.99.99
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crmoutbound

import (
	"encoding/json"
)

// checks if the ECertificateGenerationDetailsType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ECertificateGenerationDetailsType{}

// ECertificateGenerationDetailsType E-Certificates issue API call details.
type ECertificateGenerationDetailsType struct {
	ProfileId *ProfileId `json:"profileId,omitempty"`
	// User defined certificate code.
	CertificateType *string `json:"certificateType,omitempty"`
	Source *ECertificateIssueSourceType `json:"source,omitempty"`
	IssueType *ECertificateIssueType `json:"issueType,omitempty"`
	// Hotel to which certificate is attached to.
	Hotels []string `json:"hotels,omitempty"`
}

// NewECertificateGenerationDetailsType instantiates a new ECertificateGenerationDetailsType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewECertificateGenerationDetailsType() *ECertificateGenerationDetailsType {
	this := ECertificateGenerationDetailsType{}
	return &this
}

// NewECertificateGenerationDetailsTypeWithDefaults instantiates a new ECertificateGenerationDetailsType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewECertificateGenerationDetailsTypeWithDefaults() *ECertificateGenerationDetailsType {
	this := ECertificateGenerationDetailsType{}
	return &this
}

// GetProfileId returns the ProfileId field value if set, zero value otherwise.
func (o *ECertificateGenerationDetailsType) GetProfileId() ProfileId {
	if o == nil || IsNil(o.ProfileId) {
		var ret ProfileId
		return ret
	}
	return *o.ProfileId
}

// GetProfileIdOk returns a tuple with the ProfileId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateGenerationDetailsType) GetProfileIdOk() (*ProfileId, bool) {
	if o == nil || IsNil(o.ProfileId) {
		return nil, false
	}
	return o.ProfileId, true
}

// HasProfileId returns a boolean if a field has been set.
func (o *ECertificateGenerationDetailsType) HasProfileId() bool {
	if o != nil && !IsNil(o.ProfileId) {
		return true
	}

	return false
}

// SetProfileId gets a reference to the given ProfileId and assigns it to the ProfileId field.
func (o *ECertificateGenerationDetailsType) SetProfileId(v ProfileId) {
	o.ProfileId = &v
}

// GetCertificateType returns the CertificateType field value if set, zero value otherwise.
func (o *ECertificateGenerationDetailsType) GetCertificateType() string {
	if o == nil || IsNil(o.CertificateType) {
		var ret string
		return ret
	}
	return *o.CertificateType
}

// GetCertificateTypeOk returns a tuple with the CertificateType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateGenerationDetailsType) GetCertificateTypeOk() (*string, bool) {
	if o == nil || IsNil(o.CertificateType) {
		return nil, false
	}
	return o.CertificateType, true
}

// HasCertificateType returns a boolean if a field has been set.
func (o *ECertificateGenerationDetailsType) HasCertificateType() bool {
	if o != nil && !IsNil(o.CertificateType) {
		return true
	}

	return false
}

// SetCertificateType gets a reference to the given string and assigns it to the CertificateType field.
func (o *ECertificateGenerationDetailsType) SetCertificateType(v string) {
	o.CertificateType = &v
}

// GetSource returns the Source field value if set, zero value otherwise.
func (o *ECertificateGenerationDetailsType) GetSource() ECertificateIssueSourceType {
	if o == nil || IsNil(o.Source) {
		var ret ECertificateIssueSourceType
		return ret
	}
	return *o.Source
}

// GetSourceOk returns a tuple with the Source field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateGenerationDetailsType) GetSourceOk() (*ECertificateIssueSourceType, bool) {
	if o == nil || IsNil(o.Source) {
		return nil, false
	}
	return o.Source, true
}

// HasSource returns a boolean if a field has been set.
func (o *ECertificateGenerationDetailsType) HasSource() bool {
	if o != nil && !IsNil(o.Source) {
		return true
	}

	return false
}

// SetSource gets a reference to the given ECertificateIssueSourceType and assigns it to the Source field.
func (o *ECertificateGenerationDetailsType) SetSource(v ECertificateIssueSourceType) {
	o.Source = &v
}

// GetIssueType returns the IssueType field value if set, zero value otherwise.
func (o *ECertificateGenerationDetailsType) GetIssueType() ECertificateIssueType {
	if o == nil || IsNil(o.IssueType) {
		var ret ECertificateIssueType
		return ret
	}
	return *o.IssueType
}

// GetIssueTypeOk returns a tuple with the IssueType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateGenerationDetailsType) GetIssueTypeOk() (*ECertificateIssueType, bool) {
	if o == nil || IsNil(o.IssueType) {
		return nil, false
	}
	return o.IssueType, true
}

// HasIssueType returns a boolean if a field has been set.
func (o *ECertificateGenerationDetailsType) HasIssueType() bool {
	if o != nil && !IsNil(o.IssueType) {
		return true
	}

	return false
}

// SetIssueType gets a reference to the given ECertificateIssueType and assigns it to the IssueType field.
func (o *ECertificateGenerationDetailsType) SetIssueType(v ECertificateIssueType) {
	o.IssueType = &v
}

// GetHotels returns the Hotels field value if set, zero value otherwise.
func (o *ECertificateGenerationDetailsType) GetHotels() []string {
	if o == nil || IsNil(o.Hotels) {
		var ret []string
		return ret
	}
	return o.Hotels
}

// GetHotelsOk returns a tuple with the Hotels field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateGenerationDetailsType) GetHotelsOk() ([]string, bool) {
	if o == nil || IsNil(o.Hotels) {
		return nil, false
	}
	return o.Hotels, true
}

// HasHotels returns a boolean if a field has been set.
func (o *ECertificateGenerationDetailsType) HasHotels() bool {
	if o != nil && !IsNil(o.Hotels) {
		return true
	}

	return false
}

// SetHotels gets a reference to the given []string and assigns it to the Hotels field.
func (o *ECertificateGenerationDetailsType) SetHotels(v []string) {
	o.Hotels = v
}

func (o ECertificateGenerationDetailsType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ECertificateGenerationDetailsType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ProfileId) {
		toSerialize["profileId"] = o.ProfileId
	}
	if !IsNil(o.CertificateType) {
		toSerialize["certificateType"] = o.CertificateType
	}
	if !IsNil(o.Source) {
		toSerialize["source"] = o.Source
	}
	if !IsNil(o.IssueType) {
		toSerialize["issueType"] = o.IssueType
	}
	if !IsNil(o.Hotels) {
		toSerialize["hotels"] = o.Hotels
	}
	return toSerialize, nil
}

type NullableECertificateGenerationDetailsType struct {
	value *ECertificateGenerationDetailsType
	isSet bool
}

func (v NullableECertificateGenerationDetailsType) Get() *ECertificateGenerationDetailsType {
	return v.value
}

func (v *NullableECertificateGenerationDetailsType) Set(val *ECertificateGenerationDetailsType) {
	v.value = val
	v.isSet = true
}

func (v NullableECertificateGenerationDetailsType) IsSet() bool {
	return v.isSet
}

func (v *NullableECertificateGenerationDetailsType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableECertificateGenerationDetailsType(val *ECertificateGenerationDetailsType) *NullableECertificateGenerationDetailsType {
	return &NullableECertificateGenerationDetailsType{value: val, isSet: true}
}

func (v NullableECertificateGenerationDetailsType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableECertificateGenerationDetailsType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


