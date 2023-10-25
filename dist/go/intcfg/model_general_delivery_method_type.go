/*
OPERA Cloud Integration Configuration API

APIs catering to Integration Configuration in OPERA Cloud.  Operations such as get Hotel Interface Types, or get UDF mappings can be found in this module.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package intcfg

import (
	"encoding/json"
)

// checks if the GeneralDeliveryMethodType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &GeneralDeliveryMethodType{}

// GeneralDeliveryMethodType General delivery method SFTPConfigurationType configuration, settings for Email and Fax Delivery of General Letters
type GeneralDeliveryMethodType struct {
	Email *EmailDeliveryConfigurationType `json:"email,omitempty"`
	Fax *FaxDeliveryConfigurationType `json:"fax,omitempty"`
	// Type that holds sftp configurations
	SftpConfigurations []SftpConfigurationType `json:"sftpConfigurations,omitempty"`
}

// NewGeneralDeliveryMethodType instantiates a new GeneralDeliveryMethodType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewGeneralDeliveryMethodType() *GeneralDeliveryMethodType {
	this := GeneralDeliveryMethodType{}
	return &this
}

// NewGeneralDeliveryMethodTypeWithDefaults instantiates a new GeneralDeliveryMethodType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewGeneralDeliveryMethodTypeWithDefaults() *GeneralDeliveryMethodType {
	this := GeneralDeliveryMethodType{}
	return &this
}

// GetEmail returns the Email field value if set, zero value otherwise.
func (o *GeneralDeliveryMethodType) GetEmail() EmailDeliveryConfigurationType {
	if o == nil || IsNil(o.Email) {
		var ret EmailDeliveryConfigurationType
		return ret
	}
	return *o.Email
}

// GetEmailOk returns a tuple with the Email field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GeneralDeliveryMethodType) GetEmailOk() (*EmailDeliveryConfigurationType, bool) {
	if o == nil || IsNil(o.Email) {
		return nil, false
	}
	return o.Email, true
}

// HasEmail returns a boolean if a field has been set.
func (o *GeneralDeliveryMethodType) HasEmail() bool {
	if o != nil && !IsNil(o.Email) {
		return true
	}

	return false
}

// SetEmail gets a reference to the given EmailDeliveryConfigurationType and assigns it to the Email field.
func (o *GeneralDeliveryMethodType) SetEmail(v EmailDeliveryConfigurationType) {
	o.Email = &v
}

// GetFax returns the Fax field value if set, zero value otherwise.
func (o *GeneralDeliveryMethodType) GetFax() FaxDeliveryConfigurationType {
	if o == nil || IsNil(o.Fax) {
		var ret FaxDeliveryConfigurationType
		return ret
	}
	return *o.Fax
}

// GetFaxOk returns a tuple with the Fax field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GeneralDeliveryMethodType) GetFaxOk() (*FaxDeliveryConfigurationType, bool) {
	if o == nil || IsNil(o.Fax) {
		return nil, false
	}
	return o.Fax, true
}

// HasFax returns a boolean if a field has been set.
func (o *GeneralDeliveryMethodType) HasFax() bool {
	if o != nil && !IsNil(o.Fax) {
		return true
	}

	return false
}

// SetFax gets a reference to the given FaxDeliveryConfigurationType and assigns it to the Fax field.
func (o *GeneralDeliveryMethodType) SetFax(v FaxDeliveryConfigurationType) {
	o.Fax = &v
}

// GetSftpConfigurations returns the SftpConfigurations field value if set, zero value otherwise.
func (o *GeneralDeliveryMethodType) GetSftpConfigurations() []SftpConfigurationType {
	if o == nil || IsNil(o.SftpConfigurations) {
		var ret []SftpConfigurationType
		return ret
	}
	return o.SftpConfigurations
}

// GetSftpConfigurationsOk returns a tuple with the SftpConfigurations field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GeneralDeliveryMethodType) GetSftpConfigurationsOk() ([]SftpConfigurationType, bool) {
	if o == nil || IsNil(o.SftpConfigurations) {
		return nil, false
	}
	return o.SftpConfigurations, true
}

// HasSftpConfigurations returns a boolean if a field has been set.
func (o *GeneralDeliveryMethodType) HasSftpConfigurations() bool {
	if o != nil && !IsNil(o.SftpConfigurations) {
		return true
	}

	return false
}

// SetSftpConfigurations gets a reference to the given []SftpConfigurationType and assigns it to the SftpConfigurations field.
func (o *GeneralDeliveryMethodType) SetSftpConfigurations(v []SftpConfigurationType) {
	o.SftpConfigurations = v
}

func (o GeneralDeliveryMethodType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o GeneralDeliveryMethodType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Email) {
		toSerialize["email"] = o.Email
	}
	if !IsNil(o.Fax) {
		toSerialize["fax"] = o.Fax
	}
	if !IsNil(o.SftpConfigurations) {
		toSerialize["sftpConfigurations"] = o.SftpConfigurations
	}
	return toSerialize, nil
}

type NullableGeneralDeliveryMethodType struct {
	value *GeneralDeliveryMethodType
	isSet bool
}

func (v NullableGeneralDeliveryMethodType) Get() *GeneralDeliveryMethodType {
	return v.value
}

func (v *NullableGeneralDeliveryMethodType) Set(val *GeneralDeliveryMethodType) {
	v.value = val
	v.isSet = true
}

func (v NullableGeneralDeliveryMethodType) IsSet() bool {
	return v.isSet
}

func (v *NullableGeneralDeliveryMethodType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableGeneralDeliveryMethodType(val *GeneralDeliveryMethodType) *NullableGeneralDeliveryMethodType {
	return &NullableGeneralDeliveryMethodType{value: val, isSet: true}
}

func (v NullableGeneralDeliveryMethodType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableGeneralDeliveryMethodType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


