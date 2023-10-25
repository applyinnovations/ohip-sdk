/*
OPERA Cloud Block API

APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package blk

import (
	"encoding/json"
)

// checks if the ConfRecipientInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ConfRecipientInfoType{}

// ConfRecipientInfoType struct for ConfRecipientInfoType
type ConfRecipientInfoType struct {
	AddressInfo *AddressInfoType `json:"addressInfo,omitempty"`
	EmailInfo *EmailInfoType `json:"emailInfo,omitempty"`
	FaxInfo *TelephoneInfoType `json:"faxInfo,omitempty"`
	FormerName *ProfileNameType `json:"formerName,omitempty"`
	ProfileId *ProfileId `json:"profileId,omitempty"`
	RecipientType *ProfileTypeType `json:"recipientType,omitempty"`
	TelephoneInfo *TelephoneInfoType `json:"telephoneInfo,omitempty"`
}

// NewConfRecipientInfoType instantiates a new ConfRecipientInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewConfRecipientInfoType() *ConfRecipientInfoType {
	this := ConfRecipientInfoType{}
	return &this
}

// NewConfRecipientInfoTypeWithDefaults instantiates a new ConfRecipientInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewConfRecipientInfoTypeWithDefaults() *ConfRecipientInfoType {
	this := ConfRecipientInfoType{}
	return &this
}

// GetAddressInfo returns the AddressInfo field value if set, zero value otherwise.
func (o *ConfRecipientInfoType) GetAddressInfo() AddressInfoType {
	if o == nil || IsNil(o.AddressInfo) {
		var ret AddressInfoType
		return ret
	}
	return *o.AddressInfo
}

// GetAddressInfoOk returns a tuple with the AddressInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfRecipientInfoType) GetAddressInfoOk() (*AddressInfoType, bool) {
	if o == nil || IsNil(o.AddressInfo) {
		return nil, false
	}
	return o.AddressInfo, true
}

// HasAddressInfo returns a boolean if a field has been set.
func (o *ConfRecipientInfoType) HasAddressInfo() bool {
	if o != nil && !IsNil(o.AddressInfo) {
		return true
	}

	return false
}

// SetAddressInfo gets a reference to the given AddressInfoType and assigns it to the AddressInfo field.
func (o *ConfRecipientInfoType) SetAddressInfo(v AddressInfoType) {
	o.AddressInfo = &v
}

// GetEmailInfo returns the EmailInfo field value if set, zero value otherwise.
func (o *ConfRecipientInfoType) GetEmailInfo() EmailInfoType {
	if o == nil || IsNil(o.EmailInfo) {
		var ret EmailInfoType
		return ret
	}
	return *o.EmailInfo
}

// GetEmailInfoOk returns a tuple with the EmailInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfRecipientInfoType) GetEmailInfoOk() (*EmailInfoType, bool) {
	if o == nil || IsNil(o.EmailInfo) {
		return nil, false
	}
	return o.EmailInfo, true
}

// HasEmailInfo returns a boolean if a field has been set.
func (o *ConfRecipientInfoType) HasEmailInfo() bool {
	if o != nil && !IsNil(o.EmailInfo) {
		return true
	}

	return false
}

// SetEmailInfo gets a reference to the given EmailInfoType and assigns it to the EmailInfo field.
func (o *ConfRecipientInfoType) SetEmailInfo(v EmailInfoType) {
	o.EmailInfo = &v
}

// GetFaxInfo returns the FaxInfo field value if set, zero value otherwise.
func (o *ConfRecipientInfoType) GetFaxInfo() TelephoneInfoType {
	if o == nil || IsNil(o.FaxInfo) {
		var ret TelephoneInfoType
		return ret
	}
	return *o.FaxInfo
}

// GetFaxInfoOk returns a tuple with the FaxInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfRecipientInfoType) GetFaxInfoOk() (*TelephoneInfoType, bool) {
	if o == nil || IsNil(o.FaxInfo) {
		return nil, false
	}
	return o.FaxInfo, true
}

// HasFaxInfo returns a boolean if a field has been set.
func (o *ConfRecipientInfoType) HasFaxInfo() bool {
	if o != nil && !IsNil(o.FaxInfo) {
		return true
	}

	return false
}

// SetFaxInfo gets a reference to the given TelephoneInfoType and assigns it to the FaxInfo field.
func (o *ConfRecipientInfoType) SetFaxInfo(v TelephoneInfoType) {
	o.FaxInfo = &v
}

// GetFormerName returns the FormerName field value if set, zero value otherwise.
func (o *ConfRecipientInfoType) GetFormerName() ProfileNameType {
	if o == nil || IsNil(o.FormerName) {
		var ret ProfileNameType
		return ret
	}
	return *o.FormerName
}

// GetFormerNameOk returns a tuple with the FormerName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfRecipientInfoType) GetFormerNameOk() (*ProfileNameType, bool) {
	if o == nil || IsNil(o.FormerName) {
		return nil, false
	}
	return o.FormerName, true
}

// HasFormerName returns a boolean if a field has been set.
func (o *ConfRecipientInfoType) HasFormerName() bool {
	if o != nil && !IsNil(o.FormerName) {
		return true
	}

	return false
}

// SetFormerName gets a reference to the given ProfileNameType and assigns it to the FormerName field.
func (o *ConfRecipientInfoType) SetFormerName(v ProfileNameType) {
	o.FormerName = &v
}

// GetProfileId returns the ProfileId field value if set, zero value otherwise.
func (o *ConfRecipientInfoType) GetProfileId() ProfileId {
	if o == nil || IsNil(o.ProfileId) {
		var ret ProfileId
		return ret
	}
	return *o.ProfileId
}

// GetProfileIdOk returns a tuple with the ProfileId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfRecipientInfoType) GetProfileIdOk() (*ProfileId, bool) {
	if o == nil || IsNil(o.ProfileId) {
		return nil, false
	}
	return o.ProfileId, true
}

// HasProfileId returns a boolean if a field has been set.
func (o *ConfRecipientInfoType) HasProfileId() bool {
	if o != nil && !IsNil(o.ProfileId) {
		return true
	}

	return false
}

// SetProfileId gets a reference to the given ProfileId and assigns it to the ProfileId field.
func (o *ConfRecipientInfoType) SetProfileId(v ProfileId) {
	o.ProfileId = &v
}

// GetRecipientType returns the RecipientType field value if set, zero value otherwise.
func (o *ConfRecipientInfoType) GetRecipientType() ProfileTypeType {
	if o == nil || IsNil(o.RecipientType) {
		var ret ProfileTypeType
		return ret
	}
	return *o.RecipientType
}

// GetRecipientTypeOk returns a tuple with the RecipientType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfRecipientInfoType) GetRecipientTypeOk() (*ProfileTypeType, bool) {
	if o == nil || IsNil(o.RecipientType) {
		return nil, false
	}
	return o.RecipientType, true
}

// HasRecipientType returns a boolean if a field has been set.
func (o *ConfRecipientInfoType) HasRecipientType() bool {
	if o != nil && !IsNil(o.RecipientType) {
		return true
	}

	return false
}

// SetRecipientType gets a reference to the given ProfileTypeType and assigns it to the RecipientType field.
func (o *ConfRecipientInfoType) SetRecipientType(v ProfileTypeType) {
	o.RecipientType = &v
}

// GetTelephoneInfo returns the TelephoneInfo field value if set, zero value otherwise.
func (o *ConfRecipientInfoType) GetTelephoneInfo() TelephoneInfoType {
	if o == nil || IsNil(o.TelephoneInfo) {
		var ret TelephoneInfoType
		return ret
	}
	return *o.TelephoneInfo
}

// GetTelephoneInfoOk returns a tuple with the TelephoneInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfRecipientInfoType) GetTelephoneInfoOk() (*TelephoneInfoType, bool) {
	if o == nil || IsNil(o.TelephoneInfo) {
		return nil, false
	}
	return o.TelephoneInfo, true
}

// HasTelephoneInfo returns a boolean if a field has been set.
func (o *ConfRecipientInfoType) HasTelephoneInfo() bool {
	if o != nil && !IsNil(o.TelephoneInfo) {
		return true
	}

	return false
}

// SetTelephoneInfo gets a reference to the given TelephoneInfoType and assigns it to the TelephoneInfo field.
func (o *ConfRecipientInfoType) SetTelephoneInfo(v TelephoneInfoType) {
	o.TelephoneInfo = &v
}

func (o ConfRecipientInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ConfRecipientInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AddressInfo) {
		toSerialize["addressInfo"] = o.AddressInfo
	}
	if !IsNil(o.EmailInfo) {
		toSerialize["emailInfo"] = o.EmailInfo
	}
	if !IsNil(o.FaxInfo) {
		toSerialize["faxInfo"] = o.FaxInfo
	}
	if !IsNil(o.FormerName) {
		toSerialize["formerName"] = o.FormerName
	}
	if !IsNil(o.ProfileId) {
		toSerialize["profileId"] = o.ProfileId
	}
	if !IsNil(o.RecipientType) {
		toSerialize["recipientType"] = o.RecipientType
	}
	if !IsNil(o.TelephoneInfo) {
		toSerialize["telephoneInfo"] = o.TelephoneInfo
	}
	return toSerialize, nil
}

type NullableConfRecipientInfoType struct {
	value *ConfRecipientInfoType
	isSet bool
}

func (v NullableConfRecipientInfoType) Get() *ConfRecipientInfoType {
	return v.value
}

func (v *NullableConfRecipientInfoType) Set(val *ConfRecipientInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableConfRecipientInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableConfRecipientInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableConfRecipientInfoType(val *ConfRecipientInfoType) *NullableConfRecipientInfoType {
	return &NullableConfRecipientInfoType{value: val, isSet: true}
}

func (v NullableConfRecipientInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableConfRecipientInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


