/*
OPERA Cloud Integration Configuration API

APIs catering to Integration Configuration in OPERA Cloud.  Operations such as get Hotel Interface Types, or get UDF mappings can be found in this module.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.4
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package intcfg

import (
	"encoding/json"
)

// checks if the ChangeExternalDeviceConfigurations type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ChangeExternalDeviceConfigurations{}

// ChangeExternalDeviceConfigurations Request to change the external device activated for the hotel and its configurations.
type ChangeExternalDeviceConfigurations struct {
	ExternalDeviceConfigurations *ExternalDeviceConfigurationType `json:"externalDeviceConfigurations,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewChangeExternalDeviceConfigurations instantiates a new ChangeExternalDeviceConfigurations object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewChangeExternalDeviceConfigurations() *ChangeExternalDeviceConfigurations {
	this := ChangeExternalDeviceConfigurations{}
	return &this
}

// NewChangeExternalDeviceConfigurationsWithDefaults instantiates a new ChangeExternalDeviceConfigurations object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewChangeExternalDeviceConfigurationsWithDefaults() *ChangeExternalDeviceConfigurations {
	this := ChangeExternalDeviceConfigurations{}
	return &this
}

// GetExternalDeviceConfigurations returns the ExternalDeviceConfigurations field value if set, zero value otherwise.
func (o *ChangeExternalDeviceConfigurations) GetExternalDeviceConfigurations() ExternalDeviceConfigurationType {
	if o == nil || IsNil(o.ExternalDeviceConfigurations) {
		var ret ExternalDeviceConfigurationType
		return ret
	}
	return *o.ExternalDeviceConfigurations
}

// GetExternalDeviceConfigurationsOk returns a tuple with the ExternalDeviceConfigurations field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangeExternalDeviceConfigurations) GetExternalDeviceConfigurationsOk() (*ExternalDeviceConfigurationType, bool) {
	if o == nil || IsNil(o.ExternalDeviceConfigurations) {
		return nil, false
	}
	return o.ExternalDeviceConfigurations, true
}

// HasExternalDeviceConfigurations returns a boolean if a field has been set.
func (o *ChangeExternalDeviceConfigurations) HasExternalDeviceConfigurations() bool {
	if o != nil && !IsNil(o.ExternalDeviceConfigurations) {
		return true
	}

	return false
}

// SetExternalDeviceConfigurations gets a reference to the given ExternalDeviceConfigurationType and assigns it to the ExternalDeviceConfigurations field.
func (o *ChangeExternalDeviceConfigurations) SetExternalDeviceConfigurations(v ExternalDeviceConfigurationType) {
	o.ExternalDeviceConfigurations = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *ChangeExternalDeviceConfigurations) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangeExternalDeviceConfigurations) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *ChangeExternalDeviceConfigurations) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *ChangeExternalDeviceConfigurations) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *ChangeExternalDeviceConfigurations) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangeExternalDeviceConfigurations) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *ChangeExternalDeviceConfigurations) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *ChangeExternalDeviceConfigurations) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o ChangeExternalDeviceConfigurations) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ChangeExternalDeviceConfigurations) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ExternalDeviceConfigurations) {
		toSerialize["externalDeviceConfigurations"] = o.ExternalDeviceConfigurations
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableChangeExternalDeviceConfigurations struct {
	value *ChangeExternalDeviceConfigurations
	isSet bool
}

func (v NullableChangeExternalDeviceConfigurations) Get() *ChangeExternalDeviceConfigurations {
	return v.value
}

func (v *NullableChangeExternalDeviceConfigurations) Set(val *ChangeExternalDeviceConfigurations) {
	v.value = val
	v.isSet = true
}

func (v NullableChangeExternalDeviceConfigurations) IsSet() bool {
	return v.isSet
}

func (v *NullableChangeExternalDeviceConfigurations) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableChangeExternalDeviceConfigurations(val *ChangeExternalDeviceConfigurations) *NullableChangeExternalDeviceConfigurations {
	return &NullableChangeExternalDeviceConfigurations{value: val, isSet: true}
}

func (v NullableChangeExternalDeviceConfigurations) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableChangeExternalDeviceConfigurations) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


