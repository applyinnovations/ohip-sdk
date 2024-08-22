/*
OPERA Cloud Enterprise Configuration API

APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.4
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package entcfg

import (
	"encoding/json"
)

// checks if the ECertificateConsumptionType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ECertificateConsumptionType{}

// ECertificateConsumptionType E-Certificates details.
type ECertificateConsumptionType struct {
	// Property where certificate was consumed for.
	HotelId *string `json:"hotelId,omitempty"`
	Source *ECertificateConsumeSourceType `json:"source,omitempty"`
	// Last name of the person who consumed the certificate..
	Surname *string `json:"surname,omitempty"`
	// First name of the person who consumed the certificate.
	FirstName *string `json:"firstName,omitempty"`
	// Middle name of the person who consumed the certificate.
	MiddleName *string `json:"middleName,omitempty"`
	// Email of the person who consumed the certificate.
	Email *string `json:"email,omitempty"`
	// Date the certificate was consumed.
	Date *string `json:"date,omitempty"`
	// Application user who created the consumption.
	UserName *string `json:"userName,omitempty"`
	// Any notes on the certificate entered at time of consumption.
	UserNotes *string `json:"userNotes,omitempty"`
	ReferenceId *UniqueIDType `json:"referenceId,omitempty"`
	// Consumption location type.
	LocationType *string `json:"locationType,omitempty"`
	// Authorization code for consumption.
	AuthorizationCode *string `json:"authorizationCode,omitempty"`
	// Date on which the service is due (arrival date in case of reservation).
	ServiceDate *string `json:"serviceDate,omitempty"`
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

// GetUserNotes returns the UserNotes field value if set, zero value otherwise.
func (o *ECertificateConsumptionType) GetUserNotes() string {
	if o == nil || IsNil(o.UserNotes) {
		var ret string
		return ret
	}
	return *o.UserNotes
}

// GetUserNotesOk returns a tuple with the UserNotes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateConsumptionType) GetUserNotesOk() (*string, bool) {
	if o == nil || IsNil(o.UserNotes) {
		return nil, false
	}
	return o.UserNotes, true
}

// HasUserNotes returns a boolean if a field has been set.
func (o *ECertificateConsumptionType) HasUserNotes() bool {
	if o != nil && !IsNil(o.UserNotes) {
		return true
	}

	return false
}

// SetUserNotes gets a reference to the given string and assigns it to the UserNotes field.
func (o *ECertificateConsumptionType) SetUserNotes(v string) {
	o.UserNotes = &v
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

// GetLocationType returns the LocationType field value if set, zero value otherwise.
func (o *ECertificateConsumptionType) GetLocationType() string {
	if o == nil || IsNil(o.LocationType) {
		var ret string
		return ret
	}
	return *o.LocationType
}

// GetLocationTypeOk returns a tuple with the LocationType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateConsumptionType) GetLocationTypeOk() (*string, bool) {
	if o == nil || IsNil(o.LocationType) {
		return nil, false
	}
	return o.LocationType, true
}

// HasLocationType returns a boolean if a field has been set.
func (o *ECertificateConsumptionType) HasLocationType() bool {
	if o != nil && !IsNil(o.LocationType) {
		return true
	}

	return false
}

// SetLocationType gets a reference to the given string and assigns it to the LocationType field.
func (o *ECertificateConsumptionType) SetLocationType(v string) {
	o.LocationType = &v
}

// GetAuthorizationCode returns the AuthorizationCode field value if set, zero value otherwise.
func (o *ECertificateConsumptionType) GetAuthorizationCode() string {
	if o == nil || IsNil(o.AuthorizationCode) {
		var ret string
		return ret
	}
	return *o.AuthorizationCode
}

// GetAuthorizationCodeOk returns a tuple with the AuthorizationCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateConsumptionType) GetAuthorizationCodeOk() (*string, bool) {
	if o == nil || IsNil(o.AuthorizationCode) {
		return nil, false
	}
	return o.AuthorizationCode, true
}

// HasAuthorizationCode returns a boolean if a field has been set.
func (o *ECertificateConsumptionType) HasAuthorizationCode() bool {
	if o != nil && !IsNil(o.AuthorizationCode) {
		return true
	}

	return false
}

// SetAuthorizationCode gets a reference to the given string and assigns it to the AuthorizationCode field.
func (o *ECertificateConsumptionType) SetAuthorizationCode(v string) {
	o.AuthorizationCode = &v
}

// GetServiceDate returns the ServiceDate field value if set, zero value otherwise.
func (o *ECertificateConsumptionType) GetServiceDate() string {
	if o == nil || IsNil(o.ServiceDate) {
		var ret string
		return ret
	}
	return *o.ServiceDate
}

// GetServiceDateOk returns a tuple with the ServiceDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateConsumptionType) GetServiceDateOk() (*string, bool) {
	if o == nil || IsNil(o.ServiceDate) {
		return nil, false
	}
	return o.ServiceDate, true
}

// HasServiceDate returns a boolean if a field has been set.
func (o *ECertificateConsumptionType) HasServiceDate() bool {
	if o != nil && !IsNil(o.ServiceDate) {
		return true
	}

	return false
}

// SetServiceDate gets a reference to the given string and assigns it to the ServiceDate field.
func (o *ECertificateConsumptionType) SetServiceDate(v string) {
	o.ServiceDate = &v
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
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.Source) {
		toSerialize["source"] = o.Source
	}
	if !IsNil(o.Surname) {
		toSerialize["surname"] = o.Surname
	}
	if !IsNil(o.FirstName) {
		toSerialize["firstName"] = o.FirstName
	}
	if !IsNil(o.MiddleName) {
		toSerialize["middleName"] = o.MiddleName
	}
	if !IsNil(o.Email) {
		toSerialize["email"] = o.Email
	}
	if !IsNil(o.Date) {
		toSerialize["date"] = o.Date
	}
	if !IsNil(o.UserName) {
		toSerialize["userName"] = o.UserName
	}
	if !IsNil(o.UserNotes) {
		toSerialize["userNotes"] = o.UserNotes
	}
	if !IsNil(o.ReferenceId) {
		toSerialize["referenceId"] = o.ReferenceId
	}
	if !IsNil(o.LocationType) {
		toSerialize["locationType"] = o.LocationType
	}
	if !IsNil(o.AuthorizationCode) {
		toSerialize["authorizationCode"] = o.AuthorizationCode
	}
	if !IsNil(o.ServiceDate) {
		toSerialize["serviceDate"] = o.ServiceDate
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


