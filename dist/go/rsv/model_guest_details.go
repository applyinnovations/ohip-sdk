/*
OPERA Cloud Reservation API

APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsv

import (
	"encoding/json"
)

// checks if the GuestDetails type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &GuestDetails{}

// GuestDetails Guest Details
type GuestDetails struct {
	// Alternate first name.
	AlternateFirstName *string `json:"alternateFirstName,omitempty"`
	// Alternate last name.
	AlternateLastName *string `json:"alternateLastName,omitempty"`
	// Alternate salutation.
	AlternateSalutation *string `json:"alternateSalutation,omitempty"`
	// Email address of the Guest.
	EmailAddress *string `json:"emailAddress,omitempty"`
	// Reservation first name.
	FirstName *string `json:"firstName,omitempty"`
	// ID of the guest.
	GuestNameId *string `json:"guestNameId,omitempty"`
	// Guest title.
	GuestTitle *string `json:"guestTitle,omitempty"`
	// Reservation last name.
	LastName *string `json:"lastName,omitempty"`
	// Phone number of the Guest.
	PhoneNumber *string `json:"phoneNumber,omitempty"`
}

// NewGuestDetails instantiates a new GuestDetails object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewGuestDetails() *GuestDetails {
	this := GuestDetails{}
	return &this
}

// NewGuestDetailsWithDefaults instantiates a new GuestDetails object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewGuestDetailsWithDefaults() *GuestDetails {
	this := GuestDetails{}
	return &this
}

// GetAlternateFirstName returns the AlternateFirstName field value if set, zero value otherwise.
func (o *GuestDetails) GetAlternateFirstName() string {
	if o == nil || IsNil(o.AlternateFirstName) {
		var ret string
		return ret
	}
	return *o.AlternateFirstName
}

// GetAlternateFirstNameOk returns a tuple with the AlternateFirstName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuestDetails) GetAlternateFirstNameOk() (*string, bool) {
	if o == nil || IsNil(o.AlternateFirstName) {
		return nil, false
	}
	return o.AlternateFirstName, true
}

// HasAlternateFirstName returns a boolean if a field has been set.
func (o *GuestDetails) HasAlternateFirstName() bool {
	if o != nil && !IsNil(o.AlternateFirstName) {
		return true
	}

	return false
}

// SetAlternateFirstName gets a reference to the given string and assigns it to the AlternateFirstName field.
func (o *GuestDetails) SetAlternateFirstName(v string) {
	o.AlternateFirstName = &v
}

// GetAlternateLastName returns the AlternateLastName field value if set, zero value otherwise.
func (o *GuestDetails) GetAlternateLastName() string {
	if o == nil || IsNil(o.AlternateLastName) {
		var ret string
		return ret
	}
	return *o.AlternateLastName
}

// GetAlternateLastNameOk returns a tuple with the AlternateLastName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuestDetails) GetAlternateLastNameOk() (*string, bool) {
	if o == nil || IsNil(o.AlternateLastName) {
		return nil, false
	}
	return o.AlternateLastName, true
}

// HasAlternateLastName returns a boolean if a field has been set.
func (o *GuestDetails) HasAlternateLastName() bool {
	if o != nil && !IsNil(o.AlternateLastName) {
		return true
	}

	return false
}

// SetAlternateLastName gets a reference to the given string and assigns it to the AlternateLastName field.
func (o *GuestDetails) SetAlternateLastName(v string) {
	o.AlternateLastName = &v
}

// GetAlternateSalutation returns the AlternateSalutation field value if set, zero value otherwise.
func (o *GuestDetails) GetAlternateSalutation() string {
	if o == nil || IsNil(o.AlternateSalutation) {
		var ret string
		return ret
	}
	return *o.AlternateSalutation
}

// GetAlternateSalutationOk returns a tuple with the AlternateSalutation field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuestDetails) GetAlternateSalutationOk() (*string, bool) {
	if o == nil || IsNil(o.AlternateSalutation) {
		return nil, false
	}
	return o.AlternateSalutation, true
}

// HasAlternateSalutation returns a boolean if a field has been set.
func (o *GuestDetails) HasAlternateSalutation() bool {
	if o != nil && !IsNil(o.AlternateSalutation) {
		return true
	}

	return false
}

// SetAlternateSalutation gets a reference to the given string and assigns it to the AlternateSalutation field.
func (o *GuestDetails) SetAlternateSalutation(v string) {
	o.AlternateSalutation = &v
}

// GetEmailAddress returns the EmailAddress field value if set, zero value otherwise.
func (o *GuestDetails) GetEmailAddress() string {
	if o == nil || IsNil(o.EmailAddress) {
		var ret string
		return ret
	}
	return *o.EmailAddress
}

// GetEmailAddressOk returns a tuple with the EmailAddress field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuestDetails) GetEmailAddressOk() (*string, bool) {
	if o == nil || IsNil(o.EmailAddress) {
		return nil, false
	}
	return o.EmailAddress, true
}

// HasEmailAddress returns a boolean if a field has been set.
func (o *GuestDetails) HasEmailAddress() bool {
	if o != nil && !IsNil(o.EmailAddress) {
		return true
	}

	return false
}

// SetEmailAddress gets a reference to the given string and assigns it to the EmailAddress field.
func (o *GuestDetails) SetEmailAddress(v string) {
	o.EmailAddress = &v
}

// GetFirstName returns the FirstName field value if set, zero value otherwise.
func (o *GuestDetails) GetFirstName() string {
	if o == nil || IsNil(o.FirstName) {
		var ret string
		return ret
	}
	return *o.FirstName
}

// GetFirstNameOk returns a tuple with the FirstName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuestDetails) GetFirstNameOk() (*string, bool) {
	if o == nil || IsNil(o.FirstName) {
		return nil, false
	}
	return o.FirstName, true
}

// HasFirstName returns a boolean if a field has been set.
func (o *GuestDetails) HasFirstName() bool {
	if o != nil && !IsNil(o.FirstName) {
		return true
	}

	return false
}

// SetFirstName gets a reference to the given string and assigns it to the FirstName field.
func (o *GuestDetails) SetFirstName(v string) {
	o.FirstName = &v
}

// GetGuestNameId returns the GuestNameId field value if set, zero value otherwise.
func (o *GuestDetails) GetGuestNameId() string {
	if o == nil || IsNil(o.GuestNameId) {
		var ret string
		return ret
	}
	return *o.GuestNameId
}

// GetGuestNameIdOk returns a tuple with the GuestNameId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuestDetails) GetGuestNameIdOk() (*string, bool) {
	if o == nil || IsNil(o.GuestNameId) {
		return nil, false
	}
	return o.GuestNameId, true
}

// HasGuestNameId returns a boolean if a field has been set.
func (o *GuestDetails) HasGuestNameId() bool {
	if o != nil && !IsNil(o.GuestNameId) {
		return true
	}

	return false
}

// SetGuestNameId gets a reference to the given string and assigns it to the GuestNameId field.
func (o *GuestDetails) SetGuestNameId(v string) {
	o.GuestNameId = &v
}

// GetGuestTitle returns the GuestTitle field value if set, zero value otherwise.
func (o *GuestDetails) GetGuestTitle() string {
	if o == nil || IsNil(o.GuestTitle) {
		var ret string
		return ret
	}
	return *o.GuestTitle
}

// GetGuestTitleOk returns a tuple with the GuestTitle field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuestDetails) GetGuestTitleOk() (*string, bool) {
	if o == nil || IsNil(o.GuestTitle) {
		return nil, false
	}
	return o.GuestTitle, true
}

// HasGuestTitle returns a boolean if a field has been set.
func (o *GuestDetails) HasGuestTitle() bool {
	if o != nil && !IsNil(o.GuestTitle) {
		return true
	}

	return false
}

// SetGuestTitle gets a reference to the given string and assigns it to the GuestTitle field.
func (o *GuestDetails) SetGuestTitle(v string) {
	o.GuestTitle = &v
}

// GetLastName returns the LastName field value if set, zero value otherwise.
func (o *GuestDetails) GetLastName() string {
	if o == nil || IsNil(o.LastName) {
		var ret string
		return ret
	}
	return *o.LastName
}

// GetLastNameOk returns a tuple with the LastName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuestDetails) GetLastNameOk() (*string, bool) {
	if o == nil || IsNil(o.LastName) {
		return nil, false
	}
	return o.LastName, true
}

// HasLastName returns a boolean if a field has been set.
func (o *GuestDetails) HasLastName() bool {
	if o != nil && !IsNil(o.LastName) {
		return true
	}

	return false
}

// SetLastName gets a reference to the given string and assigns it to the LastName field.
func (o *GuestDetails) SetLastName(v string) {
	o.LastName = &v
}

// GetPhoneNumber returns the PhoneNumber field value if set, zero value otherwise.
func (o *GuestDetails) GetPhoneNumber() string {
	if o == nil || IsNil(o.PhoneNumber) {
		var ret string
		return ret
	}
	return *o.PhoneNumber
}

// GetPhoneNumberOk returns a tuple with the PhoneNumber field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuestDetails) GetPhoneNumberOk() (*string, bool) {
	if o == nil || IsNil(o.PhoneNumber) {
		return nil, false
	}
	return o.PhoneNumber, true
}

// HasPhoneNumber returns a boolean if a field has been set.
func (o *GuestDetails) HasPhoneNumber() bool {
	if o != nil && !IsNil(o.PhoneNumber) {
		return true
	}

	return false
}

// SetPhoneNumber gets a reference to the given string and assigns it to the PhoneNumber field.
func (o *GuestDetails) SetPhoneNumber(v string) {
	o.PhoneNumber = &v
}

func (o GuestDetails) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o GuestDetails) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AlternateFirstName) {
		toSerialize["alternateFirstName"] = o.AlternateFirstName
	}
	if !IsNil(o.AlternateLastName) {
		toSerialize["alternateLastName"] = o.AlternateLastName
	}
	if !IsNil(o.AlternateSalutation) {
		toSerialize["alternateSalutation"] = o.AlternateSalutation
	}
	if !IsNil(o.EmailAddress) {
		toSerialize["emailAddress"] = o.EmailAddress
	}
	if !IsNil(o.FirstName) {
		toSerialize["firstName"] = o.FirstName
	}
	if !IsNil(o.GuestNameId) {
		toSerialize["guestNameId"] = o.GuestNameId
	}
	if !IsNil(o.GuestTitle) {
		toSerialize["guestTitle"] = o.GuestTitle
	}
	if !IsNil(o.LastName) {
		toSerialize["lastName"] = o.LastName
	}
	if !IsNil(o.PhoneNumber) {
		toSerialize["phoneNumber"] = o.PhoneNumber
	}
	return toSerialize, nil
}

type NullableGuestDetails struct {
	value *GuestDetails
	isSet bool
}

func (v NullableGuestDetails) Get() *GuestDetails {
	return v.value
}

func (v *NullableGuestDetails) Set(val *GuestDetails) {
	v.value = val
	v.isSet = true
}

func (v NullableGuestDetails) IsSet() bool {
	return v.isSet
}

func (v *NullableGuestDetails) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableGuestDetails(val *GuestDetails) *NullableGuestDetails {
	return &NullableGuestDetails{value: val, isSet: true}
}

func (v NullableGuestDetails) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableGuestDetails) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


