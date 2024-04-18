/*
OPERA Cloud Customer Relationship Management API

APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crm

import (
	"encoding/json"
)

// checks if the Guest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &Guest{}

// Guest Request object for creation of guest/contact/employee profile. This object contains profile details with unique identifiers of a profile. The standard optional Opera Context element is also included.
type Guest struct {
	// This type contains unique information of external reference.
	ExternalReferences []ExternalReferenceType `json:"externalReferences,omitempty"`
	GuestDetails *GuestProfileType `json:"guestDetails,omitempty"`
	// Unique Id that references an object uniquely in the system.
	GuestIdList []UniqueIDType `json:"guestIdList,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewGuest instantiates a new Guest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewGuest() *Guest {
	this := Guest{}
	return &this
}

// NewGuestWithDefaults instantiates a new Guest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewGuestWithDefaults() *Guest {
	this := Guest{}
	return &this
}

// GetExternalReferences returns the ExternalReferences field value if set, zero value otherwise.
func (o *Guest) GetExternalReferences() []ExternalReferenceType {
	if o == nil || IsNil(o.ExternalReferences) {
		var ret []ExternalReferenceType
		return ret
	}
	return o.ExternalReferences
}

// GetExternalReferencesOk returns a tuple with the ExternalReferences field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Guest) GetExternalReferencesOk() ([]ExternalReferenceType, bool) {
	if o == nil || IsNil(o.ExternalReferences) {
		return nil, false
	}
	return o.ExternalReferences, true
}

// HasExternalReferences returns a boolean if a field has been set.
func (o *Guest) HasExternalReferences() bool {
	if o != nil && !IsNil(o.ExternalReferences) {
		return true
	}

	return false
}

// SetExternalReferences gets a reference to the given []ExternalReferenceType and assigns it to the ExternalReferences field.
func (o *Guest) SetExternalReferences(v []ExternalReferenceType) {
	o.ExternalReferences = v
}

// GetGuestDetails returns the GuestDetails field value if set, zero value otherwise.
func (o *Guest) GetGuestDetails() GuestProfileType {
	if o == nil || IsNil(o.GuestDetails) {
		var ret GuestProfileType
		return ret
	}
	return *o.GuestDetails
}

// GetGuestDetailsOk returns a tuple with the GuestDetails field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Guest) GetGuestDetailsOk() (*GuestProfileType, bool) {
	if o == nil || IsNil(o.GuestDetails) {
		return nil, false
	}
	return o.GuestDetails, true
}

// HasGuestDetails returns a boolean if a field has been set.
func (o *Guest) HasGuestDetails() bool {
	if o != nil && !IsNil(o.GuestDetails) {
		return true
	}

	return false
}

// SetGuestDetails gets a reference to the given GuestProfileType and assigns it to the GuestDetails field.
func (o *Guest) SetGuestDetails(v GuestProfileType) {
	o.GuestDetails = &v
}

// GetGuestIdList returns the GuestIdList field value if set, zero value otherwise.
func (o *Guest) GetGuestIdList() []UniqueIDType {
	if o == nil || IsNil(o.GuestIdList) {
		var ret []UniqueIDType
		return ret
	}
	return o.GuestIdList
}

// GetGuestIdListOk returns a tuple with the GuestIdList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Guest) GetGuestIdListOk() ([]UniqueIDType, bool) {
	if o == nil || IsNil(o.GuestIdList) {
		return nil, false
	}
	return o.GuestIdList, true
}

// HasGuestIdList returns a boolean if a field has been set.
func (o *Guest) HasGuestIdList() bool {
	if o != nil && !IsNil(o.GuestIdList) {
		return true
	}

	return false
}

// SetGuestIdList gets a reference to the given []UniqueIDType and assigns it to the GuestIdList field.
func (o *Guest) SetGuestIdList(v []UniqueIDType) {
	o.GuestIdList = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *Guest) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Guest) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *Guest) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *Guest) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *Guest) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Guest) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *Guest) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *Guest) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o Guest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o Guest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ExternalReferences) {
		toSerialize["externalReferences"] = o.ExternalReferences
	}
	if !IsNil(o.GuestDetails) {
		toSerialize["guestDetails"] = o.GuestDetails
	}
	if !IsNil(o.GuestIdList) {
		toSerialize["guestIdList"] = o.GuestIdList
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableGuest struct {
	value *Guest
	isSet bool
}

func (v NullableGuest) Get() *Guest {
	return v.value
}

func (v *NullableGuest) Set(val *Guest) {
	v.value = val
	v.isSet = true
}

func (v NullableGuest) IsSet() bool {
	return v.isSet
}

func (v *NullableGuest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableGuest(val *Guest) *NullableGuest {
	return &NullableGuest{value: val, isSet: true}
}

func (v NullableGuest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableGuest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

