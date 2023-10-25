/*
OPERA Cloud Customer Relationship Management API

APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crm

import (
	"encoding/json"
)

// checks if the StagedProfileURLType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &StagedProfileURLType{}

// StagedProfileURLType Web site address.
type StagedProfileURLType struct {
	// Indicates whether the phone is the default confirmation method.
	DefaultConfirmation *bool `json:"defaultConfirmation,omitempty"`
	// The error in URL in a staged profile with an invalid status
	ErrorDescription *string `json:"errorDescription,omitempty"`
	// A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
	Id *string `json:"id,omitempty"`
	// Inactivation date of the record.
	InactiveDate *string `json:"inactiveDate,omitempty"`
	// A reference to the type of object defined by the UniqueID element.
	Type *string `json:"type,omitempty"`
}

// NewStagedProfileURLType instantiates a new StagedProfileURLType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewStagedProfileURLType() *StagedProfileURLType {
	this := StagedProfileURLType{}
	return &this
}

// NewStagedProfileURLTypeWithDefaults instantiates a new StagedProfileURLType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewStagedProfileURLTypeWithDefaults() *StagedProfileURLType {
	this := StagedProfileURLType{}
	return &this
}

// GetDefaultConfirmation returns the DefaultConfirmation field value if set, zero value otherwise.
func (o *StagedProfileURLType) GetDefaultConfirmation() bool {
	if o == nil || IsNil(o.DefaultConfirmation) {
		var ret bool
		return ret
	}
	return *o.DefaultConfirmation
}

// GetDefaultConfirmationOk returns a tuple with the DefaultConfirmation field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StagedProfileURLType) GetDefaultConfirmationOk() (*bool, bool) {
	if o == nil || IsNil(o.DefaultConfirmation) {
		return nil, false
	}
	return o.DefaultConfirmation, true
}

// HasDefaultConfirmation returns a boolean if a field has been set.
func (o *StagedProfileURLType) HasDefaultConfirmation() bool {
	if o != nil && !IsNil(o.DefaultConfirmation) {
		return true
	}

	return false
}

// SetDefaultConfirmation gets a reference to the given bool and assigns it to the DefaultConfirmation field.
func (o *StagedProfileURLType) SetDefaultConfirmation(v bool) {
	o.DefaultConfirmation = &v
}

// GetErrorDescription returns the ErrorDescription field value if set, zero value otherwise.
func (o *StagedProfileURLType) GetErrorDescription() string {
	if o == nil || IsNil(o.ErrorDescription) {
		var ret string
		return ret
	}
	return *o.ErrorDescription
}

// GetErrorDescriptionOk returns a tuple with the ErrorDescription field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StagedProfileURLType) GetErrorDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.ErrorDescription) {
		return nil, false
	}
	return o.ErrorDescription, true
}

// HasErrorDescription returns a boolean if a field has been set.
func (o *StagedProfileURLType) HasErrorDescription() bool {
	if o != nil && !IsNil(o.ErrorDescription) {
		return true
	}

	return false
}

// SetErrorDescription gets a reference to the given string and assigns it to the ErrorDescription field.
func (o *StagedProfileURLType) SetErrorDescription(v string) {
	o.ErrorDescription = &v
}

// GetId returns the Id field value if set, zero value otherwise.
func (o *StagedProfileURLType) GetId() string {
	if o == nil || IsNil(o.Id) {
		var ret string
		return ret
	}
	return *o.Id
}

// GetIdOk returns a tuple with the Id field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StagedProfileURLType) GetIdOk() (*string, bool) {
	if o == nil || IsNil(o.Id) {
		return nil, false
	}
	return o.Id, true
}

// HasId returns a boolean if a field has been set.
func (o *StagedProfileURLType) HasId() bool {
	if o != nil && !IsNil(o.Id) {
		return true
	}

	return false
}

// SetId gets a reference to the given string and assigns it to the Id field.
func (o *StagedProfileURLType) SetId(v string) {
	o.Id = &v
}

// GetInactiveDate returns the InactiveDate field value if set, zero value otherwise.
func (o *StagedProfileURLType) GetInactiveDate() string {
	if o == nil || IsNil(o.InactiveDate) {
		var ret string
		return ret
	}
	return *o.InactiveDate
}

// GetInactiveDateOk returns a tuple with the InactiveDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StagedProfileURLType) GetInactiveDateOk() (*string, bool) {
	if o == nil || IsNil(o.InactiveDate) {
		return nil, false
	}
	return o.InactiveDate, true
}

// HasInactiveDate returns a boolean if a field has been set.
func (o *StagedProfileURLType) HasInactiveDate() bool {
	if o != nil && !IsNil(o.InactiveDate) {
		return true
	}

	return false
}

// SetInactiveDate gets a reference to the given string and assigns it to the InactiveDate field.
func (o *StagedProfileURLType) SetInactiveDate(v string) {
	o.InactiveDate = &v
}

// GetType returns the Type field value if set, zero value otherwise.
func (o *StagedProfileURLType) GetType() string {
	if o == nil || IsNil(o.Type) {
		var ret string
		return ret
	}
	return *o.Type
}

// GetTypeOk returns a tuple with the Type field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StagedProfileURLType) GetTypeOk() (*string, bool) {
	if o == nil || IsNil(o.Type) {
		return nil, false
	}
	return o.Type, true
}

// HasType returns a boolean if a field has been set.
func (o *StagedProfileURLType) HasType() bool {
	if o != nil && !IsNil(o.Type) {
		return true
	}

	return false
}

// SetType gets a reference to the given string and assigns it to the Type field.
func (o *StagedProfileURLType) SetType(v string) {
	o.Type = &v
}

func (o StagedProfileURLType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o StagedProfileURLType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.DefaultConfirmation) {
		toSerialize["defaultConfirmation"] = o.DefaultConfirmation
	}
	if !IsNil(o.ErrorDescription) {
		toSerialize["errorDescription"] = o.ErrorDescription
	}
	if !IsNil(o.Id) {
		toSerialize["id"] = o.Id
	}
	if !IsNil(o.InactiveDate) {
		toSerialize["inactiveDate"] = o.InactiveDate
	}
	if !IsNil(o.Type) {
		toSerialize["type"] = o.Type
	}
	return toSerialize, nil
}

type NullableStagedProfileURLType struct {
	value *StagedProfileURLType
	isSet bool
}

func (v NullableStagedProfileURLType) Get() *StagedProfileURLType {
	return v.value
}

func (v *NullableStagedProfileURLType) Set(val *StagedProfileURLType) {
	v.value = val
	v.isSet = true
}

func (v NullableStagedProfileURLType) IsSet() bool {
	return v.isSet
}

func (v *NullableStagedProfileURLType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableStagedProfileURLType(val *StagedProfileURLType) *NullableStagedProfileURLType {
	return &NullableStagedProfileURLType{value: val, isSet: true}
}

func (v NullableStagedProfileURLType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableStagedProfileURLType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


