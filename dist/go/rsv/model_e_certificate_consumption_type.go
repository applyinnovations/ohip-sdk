/*
OPERA Cloud Reservation API

APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsv

import (
	"encoding/json"
)

// checks if the ECertificateConsumptionType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ECertificateConsumptionType{}

// ECertificateConsumptionType E-Certificates details.
type ECertificateConsumptionType struct {
	// Date the certificate was consumed.
	Date *string `json:"date,omitempty"`
	// Email of the person who consumed the certificate.
	Email *string `json:"email,omitempty"`
	// First name of the person who consumed the certificate.
	FirstName *string `json:"firstName,omitempty"`
	// Property where certificate was consumed for.
	HotelId *string `json:"hotelId,omitempty"`
	// Middle name of the person who consumed the certificate.
	MiddleName *string `json:"middleName,omitempty"`
	ReferenceId *UniqueIDType `json:"referenceId,omitempty"`
	Source *ECertificateConsumeSourceType `json:"source,omitempty"`
	// Last name of the person who consumed the certificate..
	Surname *string `json:"surname,omitempty"`
	// Application user who created the consumption.
	UserName *string `json:"userName,omitempty"`
}

// NewECertificateConsumptionType instantiates a new ECertificateConsumptionType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewECertificateConsumptionType() *ECertificateConsumptionType {
	this := ECertificateConsumptionType{}
	return &this
}

// NewECertificateConsumptionTypeWithDefaults instantiates a new ECertificateConsumptionType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewECertificateConsumptionTypeWithDefaults() *ECertificateConsumptionType {
	this := ECertificateConsumptionType{}
	return &this
}

// GetDate returns the Date field value if set, zero value otherwise.
func (o *ECertificateConsumptionType) GetDate() string {
	if o == nil || IsNil(o.Date) {
		var ret string
		return ret
	}
	return *o.Date
}

// GetDateOk returns a tuple with the Date field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateConsumptionType) GetDateOk() (*string, bool) {
	if o == nil || IsNil(o.Date) {
		return nil, false
	}
	return o.Date, true
}

// HasDate returns a boolean if a field has been set.
func (o *ECertificateConsumptionType) HasDate() bool {
	if o != nil && !IsNil(o.Date) {
		return true
	}

	return false
}

// SetDate gets a reference to the given string and assigns it to the Date field.
func (o *ECertificateConsumptionType) SetDate(v string) {
	o.Date = &v
}

// GetEmail returns the Email field value if set, zero value otherwise.
func (o *ECertificateConsumptionType) GetEmail() string {
	if o == nil || IsNil(o.Email) {
		var ret string
		return ret
	}
	return *o.Email
}

// GetEmailOk returns a tuple with the Email field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateConsumptionType) GetEmailOk() (*string, bool) {
	if o == nil || IsNil(o.Email) {
		return nil, false
	}
	return o.Email, true
}

// HasEmail returns a boolean if a field has been set.
func (o *ECertificateConsumptionType) HasEmail() bool {
	if o != nil && !IsNil(o.Email) {
		return true
	}

	return false
}

// SetEmail gets a reference to the given string and assigns it to the Email field.
func (o *ECertificateConsumptionType) SetEmail(v string) {
	o.Email = &v
}

// GetFirstName returns the FirstName field value if set, zero value otherwise.
func (o *ECertificateConsumptionType) GetFirstName() string {
	if o == nil || IsNil(o.FirstName) {
		var ret string
		return ret
	}
	return *o.FirstName
}

// GetFirstNameOk returns a tuple with the FirstName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateConsumptionType) GetFirstNameOk() (*string, bool) {
	if o == nil || IsNil(o.FirstName) {
		return nil, false
	}
	return o.FirstName, true
}

// HasFirstName returns a boolean if a field has been set.
func (o *ECertificateConsumptionType) HasFirstName() bool {
	if o != nil && !IsNil(o.FirstName) {
		return true
	}

	return false
}

// SetFirstName gets a reference to the given string and assigns it to the FirstName field.
func (o *ECertificateConsumptionType) SetFirstName(v string) {
	o.FirstName = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *ECertificateConsumptionType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateConsumptionType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *ECertificateConsumptionType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *ECertificateConsumptionType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetMiddleName returns the MiddleName field value if set, zero value otherwise.
func (o *ECertificateConsumptionType) GetMiddleName() string {
	if o == nil || IsNil(o.MiddleName) {
		var ret string
		return ret
	}
	return *o.MiddleName
}

// GetMiddleNameOk returns a tuple with the MiddleName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateConsumptionType) GetMiddleNameOk() (*string, bool) {
	if o == nil || IsNil(o.MiddleName) {
		return nil, false
	}
	return o.MiddleName, true
}

// HasMiddleName returns a boolean if a field has been set.
func (o *ECertificateConsumptionType) HasMiddleName() bool {
	if o != nil && !IsNil(o.MiddleName) {
		return true
	}

	return false
}

// SetMiddleName gets a reference to the given string and assigns it to the MiddleName field.
func (o *ECertificateConsumptionType) SetMiddleName(v string) {
	o.MiddleName = &v
}

// GetReferenceId returns the ReferenceId field value if set, zero value otherwise.
func (o *ECertificateConsumptionType) GetReferenceId() UniqueIDType {
	if o == nil || IsNil(o.ReferenceId) {
		var ret UniqueIDType
		return ret
	}
	return *o.ReferenceId
}

// GetReferenceIdOk returns a tuple with the ReferenceId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateConsumptionType) GetReferenceIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.ReferenceId) {
		return nil, false
	}
	return o.ReferenceId, true
}

// HasReferenceId returns a boolean if a field has been set.
func (o *ECertificateConsumptionType) HasReferenceId() bool {
	if o != nil && !IsNil(o.ReferenceId) {
		return true
	}

	return false
}

// SetReferenceId gets a reference to the given UniqueIDType and assigns it to the ReferenceId field.
func (o *ECertificateConsumptionType) SetReferenceId(v UniqueIDType) {
	o.ReferenceId = &v
}

// GetSource returns the Source field value if set, zero value otherwise.
func (o *ECertificateConsumptionType) GetSource() ECertificateConsumeSourceType {
	if o == nil || IsNil(o.Source) {
		var ret ECertificateConsumeSourceType
		return ret
	}
	return *o.Source
}

// GetSourceOk returns a tuple with the Source field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateConsumptionType) GetSourceOk() (*ECertificateConsumeSourceType, bool) {
	if o == nil || IsNil(o.Source) {
		return nil, false
	}
	return o.Source, true
}

// HasSource returns a boolean if a field has been set.
func (o *ECertificateConsumptionType) HasSource() bool {
	if o != nil && !IsNil(o.Source) {
		return true
	}

	return false
}

// SetSource gets a reference to the given ECertificateConsumeSourceType and assigns it to the Source field.
func (o *ECertificateConsumptionType) SetSource(v ECertificateConsumeSourceType) {
	o.Source = &v
}

// GetSurname returns the Surname field value if set, zero value otherwise.
func (o *ECertificateConsumptionType) GetSurname() string {
	if o == nil || IsNil(o.Surname) {
		var ret string
		return ret
	}
	return *o.Surname
}

// GetSurnameOk returns a tuple with the Surname field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateConsumptionType) GetSurnameOk() (*string, bool) {
	if o == nil || IsNil(o.Surname) {
		return nil, false
	}
	return o.Surname, true
}

// HasSurname returns a boolean if a field has been set.
func (o *ECertificateConsumptionType) HasSurname() bool {
	if o != nil && !IsNil(o.Surname) {
		return true
	}

	return false
}

// SetSurname gets a reference to the given string and assigns it to the Surname field.
func (o *ECertificateConsumptionType) SetSurname(v string) {
	o.Surname = &v
}

// GetUserName returns the UserName field value if set, zero value otherwise.
func (o *ECertificateConsumptionType) GetUserName() string {
	if o == nil || IsNil(o.UserName) {
		var ret string
		return ret
	}
	return *o.UserName
}

// GetUserNameOk returns a tuple with the UserName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateConsumptionType) GetUserNameOk() (*string, bool) {
	if o == nil || IsNil(o.UserName) {
		return nil, false
	}
	return o.UserName, true
}

// HasUserName returns a boolean if a field has been set.
func (o *ECertificateConsumptionType) HasUserName() bool {
	if o != nil && !IsNil(o.UserName) {
		return true
	}

	return false
}

// SetUserName gets a reference to the given string and assigns it to the UserName field.
func (o *ECertificateConsumptionType) SetUserName(v string) {
	o.UserName = &v
}

func (o ECertificateConsumptionType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ECertificateConsumptionType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Date) {
		toSerialize["date"] = o.Date
	}
	if !IsNil(o.Email) {
		toSerialize["email"] = o.Email
	}
	if !IsNil(o.FirstName) {
		toSerialize["firstName"] = o.FirstName
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.MiddleName) {
		toSerialize["middleName"] = o.MiddleName
	}
	if !IsNil(o.ReferenceId) {
		toSerialize["referenceId"] = o.ReferenceId
	}
	if !IsNil(o.Source) {
		toSerialize["source"] = o.Source
	}
	if !IsNil(o.Surname) {
		toSerialize["surname"] = o.Surname
	}
	if !IsNil(o.UserName) {
		toSerialize["userName"] = o.UserName
	}
	return toSerialize, nil
}

type NullableECertificateConsumptionType struct {
	value *ECertificateConsumptionType
	isSet bool
}

func (v NullableECertificateConsumptionType) Get() *ECertificateConsumptionType {
	return v.value
}

func (v *NullableECertificateConsumptionType) Set(val *ECertificateConsumptionType) {
	v.value = val
	v.isSet = true
}

func (v NullableECertificateConsumptionType) IsSet() bool {
	return v.isSet
}

func (v *NullableECertificateConsumptionType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableECertificateConsumptionType(val *ECertificateConsumptionType) *NullableECertificateConsumptionType {
	return &NullableECertificateConsumptionType{value: val, isSet: true}
}

func (v NullableECertificateConsumptionType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableECertificateConsumptionType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


