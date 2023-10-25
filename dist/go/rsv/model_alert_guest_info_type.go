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

// checks if the AlertGuestInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &AlertGuestInfoType{}

// AlertGuestInfoType struct for AlertGuestInfoType
type AlertGuestInfoType struct {
	// Indicates the date of birth as indicated in the document, in ISO 8601 prescribed format.
	BirthDate *string `json:"birthDate,omitempty"`
	// Indicates the date of birth as masked.
	BirthDateMasked *string `json:"birthDateMasked,omitempty"`
	// Additional alert information regarding the membership of the guest.
	Comments *string `json:"comments,omitempty"`
	// Guest Name.
	GuestName *string `json:"guestName,omitempty"`
	GuestPreferredLanguage *string `json:"guestPreferredLanguage,omitempty"`
	// Hotel code of the last stay location of the guest.
	LastHotelCode *string `json:"lastHotelCode,omitempty"`
	// Last stay date at the property.
	LastStayDate *string `json:"lastStayDate,omitempty"`
	Membership *MembershipType `json:"membership,omitempty"`
	// Additional alert information regarding the guest.
	Preference *string `json:"preference,omitempty"`
	// Additional mandatory alert information regarding the guest preferences.
	Preference2 *string `json:"preference2,omitempty"`
	// Holds total number of days that the guest have stayed in the properties for the same brand.
	TotalBrandStay *int32 `json:"totalBrandStay,omitempty"`
	// Holds total number of days that the guest have stayed in the property.
	TotalStay *int32 `json:"totalStay,omitempty"`
	VipStatus *VIPStatusType `json:"vipStatus,omitempty"`
}

// NewAlertGuestInfoType instantiates a new AlertGuestInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAlertGuestInfoType() *AlertGuestInfoType {
	this := AlertGuestInfoType{}
	return &this
}

// NewAlertGuestInfoTypeWithDefaults instantiates a new AlertGuestInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAlertGuestInfoTypeWithDefaults() *AlertGuestInfoType {
	this := AlertGuestInfoType{}
	return &this
}

// GetBirthDate returns the BirthDate field value if set, zero value otherwise.
func (o *AlertGuestInfoType) GetBirthDate() string {
	if o == nil || IsNil(o.BirthDate) {
		var ret string
		return ret
	}
	return *o.BirthDate
}

// GetBirthDateOk returns a tuple with the BirthDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AlertGuestInfoType) GetBirthDateOk() (*string, bool) {
	if o == nil || IsNil(o.BirthDate) {
		return nil, false
	}
	return o.BirthDate, true
}

// HasBirthDate returns a boolean if a field has been set.
func (o *AlertGuestInfoType) HasBirthDate() bool {
	if o != nil && !IsNil(o.BirthDate) {
		return true
	}

	return false
}

// SetBirthDate gets a reference to the given string and assigns it to the BirthDate field.
func (o *AlertGuestInfoType) SetBirthDate(v string) {
	o.BirthDate = &v
}

// GetBirthDateMasked returns the BirthDateMasked field value if set, zero value otherwise.
func (o *AlertGuestInfoType) GetBirthDateMasked() string {
	if o == nil || IsNil(o.BirthDateMasked) {
		var ret string
		return ret
	}
	return *o.BirthDateMasked
}

// GetBirthDateMaskedOk returns a tuple with the BirthDateMasked field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AlertGuestInfoType) GetBirthDateMaskedOk() (*string, bool) {
	if o == nil || IsNil(o.BirthDateMasked) {
		return nil, false
	}
	return o.BirthDateMasked, true
}

// HasBirthDateMasked returns a boolean if a field has been set.
func (o *AlertGuestInfoType) HasBirthDateMasked() bool {
	if o != nil && !IsNil(o.BirthDateMasked) {
		return true
	}

	return false
}

// SetBirthDateMasked gets a reference to the given string and assigns it to the BirthDateMasked field.
func (o *AlertGuestInfoType) SetBirthDateMasked(v string) {
	o.BirthDateMasked = &v
}

// GetComments returns the Comments field value if set, zero value otherwise.
func (o *AlertGuestInfoType) GetComments() string {
	if o == nil || IsNil(o.Comments) {
		var ret string
		return ret
	}
	return *o.Comments
}

// GetCommentsOk returns a tuple with the Comments field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AlertGuestInfoType) GetCommentsOk() (*string, bool) {
	if o == nil || IsNil(o.Comments) {
		return nil, false
	}
	return o.Comments, true
}

// HasComments returns a boolean if a field has been set.
func (o *AlertGuestInfoType) HasComments() bool {
	if o != nil && !IsNil(o.Comments) {
		return true
	}

	return false
}

// SetComments gets a reference to the given string and assigns it to the Comments field.
func (o *AlertGuestInfoType) SetComments(v string) {
	o.Comments = &v
}

// GetGuestName returns the GuestName field value if set, zero value otherwise.
func (o *AlertGuestInfoType) GetGuestName() string {
	if o == nil || IsNil(o.GuestName) {
		var ret string
		return ret
	}
	return *o.GuestName
}

// GetGuestNameOk returns a tuple with the GuestName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AlertGuestInfoType) GetGuestNameOk() (*string, bool) {
	if o == nil || IsNil(o.GuestName) {
		return nil, false
	}
	return o.GuestName, true
}

// HasGuestName returns a boolean if a field has been set.
func (o *AlertGuestInfoType) HasGuestName() bool {
	if o != nil && !IsNil(o.GuestName) {
		return true
	}

	return false
}

// SetGuestName gets a reference to the given string and assigns it to the GuestName field.
func (o *AlertGuestInfoType) SetGuestName(v string) {
	o.GuestName = &v
}

// GetGuestPreferredLanguage returns the GuestPreferredLanguage field value if set, zero value otherwise.
func (o *AlertGuestInfoType) GetGuestPreferredLanguage() string {
	if o == nil || IsNil(o.GuestPreferredLanguage) {
		var ret string
		return ret
	}
	return *o.GuestPreferredLanguage
}

// GetGuestPreferredLanguageOk returns a tuple with the GuestPreferredLanguage field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AlertGuestInfoType) GetGuestPreferredLanguageOk() (*string, bool) {
	if o == nil || IsNil(o.GuestPreferredLanguage) {
		return nil, false
	}
	return o.GuestPreferredLanguage, true
}

// HasGuestPreferredLanguage returns a boolean if a field has been set.
func (o *AlertGuestInfoType) HasGuestPreferredLanguage() bool {
	if o != nil && !IsNil(o.GuestPreferredLanguage) {
		return true
	}

	return false
}

// SetGuestPreferredLanguage gets a reference to the given string and assigns it to the GuestPreferredLanguage field.
func (o *AlertGuestInfoType) SetGuestPreferredLanguage(v string) {
	o.GuestPreferredLanguage = &v
}

// GetLastHotelCode returns the LastHotelCode field value if set, zero value otherwise.
func (o *AlertGuestInfoType) GetLastHotelCode() string {
	if o == nil || IsNil(o.LastHotelCode) {
		var ret string
		return ret
	}
	return *o.LastHotelCode
}

// GetLastHotelCodeOk returns a tuple with the LastHotelCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AlertGuestInfoType) GetLastHotelCodeOk() (*string, bool) {
	if o == nil || IsNil(o.LastHotelCode) {
		return nil, false
	}
	return o.LastHotelCode, true
}

// HasLastHotelCode returns a boolean if a field has been set.
func (o *AlertGuestInfoType) HasLastHotelCode() bool {
	if o != nil && !IsNil(o.LastHotelCode) {
		return true
	}

	return false
}

// SetLastHotelCode gets a reference to the given string and assigns it to the LastHotelCode field.
func (o *AlertGuestInfoType) SetLastHotelCode(v string) {
	o.LastHotelCode = &v
}

// GetLastStayDate returns the LastStayDate field value if set, zero value otherwise.
func (o *AlertGuestInfoType) GetLastStayDate() string {
	if o == nil || IsNil(o.LastStayDate) {
		var ret string
		return ret
	}
	return *o.LastStayDate
}

// GetLastStayDateOk returns a tuple with the LastStayDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AlertGuestInfoType) GetLastStayDateOk() (*string, bool) {
	if o == nil || IsNil(o.LastStayDate) {
		return nil, false
	}
	return o.LastStayDate, true
}

// HasLastStayDate returns a boolean if a field has been set.
func (o *AlertGuestInfoType) HasLastStayDate() bool {
	if o != nil && !IsNil(o.LastStayDate) {
		return true
	}

	return false
}

// SetLastStayDate gets a reference to the given string and assigns it to the LastStayDate field.
func (o *AlertGuestInfoType) SetLastStayDate(v string) {
	o.LastStayDate = &v
}

// GetMembership returns the Membership field value if set, zero value otherwise.
func (o *AlertGuestInfoType) GetMembership() MembershipType {
	if o == nil || IsNil(o.Membership) {
		var ret MembershipType
		return ret
	}
	return *o.Membership
}

// GetMembershipOk returns a tuple with the Membership field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AlertGuestInfoType) GetMembershipOk() (*MembershipType, bool) {
	if o == nil || IsNil(o.Membership) {
		return nil, false
	}
	return o.Membership, true
}

// HasMembership returns a boolean if a field has been set.
func (o *AlertGuestInfoType) HasMembership() bool {
	if o != nil && !IsNil(o.Membership) {
		return true
	}

	return false
}

// SetMembership gets a reference to the given MembershipType and assigns it to the Membership field.
func (o *AlertGuestInfoType) SetMembership(v MembershipType) {
	o.Membership = &v
}

// GetPreference returns the Preference field value if set, zero value otherwise.
func (o *AlertGuestInfoType) GetPreference() string {
	if o == nil || IsNil(o.Preference) {
		var ret string
		return ret
	}
	return *o.Preference
}

// GetPreferenceOk returns a tuple with the Preference field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AlertGuestInfoType) GetPreferenceOk() (*string, bool) {
	if o == nil || IsNil(o.Preference) {
		return nil, false
	}
	return o.Preference, true
}

// HasPreference returns a boolean if a field has been set.
func (o *AlertGuestInfoType) HasPreference() bool {
	if o != nil && !IsNil(o.Preference) {
		return true
	}

	return false
}

// SetPreference gets a reference to the given string and assigns it to the Preference field.
func (o *AlertGuestInfoType) SetPreference(v string) {
	o.Preference = &v
}

// GetPreference2 returns the Preference2 field value if set, zero value otherwise.
func (o *AlertGuestInfoType) GetPreference2() string {
	if o == nil || IsNil(o.Preference2) {
		var ret string
		return ret
	}
	return *o.Preference2
}

// GetPreference2Ok returns a tuple with the Preference2 field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AlertGuestInfoType) GetPreference2Ok() (*string, bool) {
	if o == nil || IsNil(o.Preference2) {
		return nil, false
	}
	return o.Preference2, true
}

// HasPreference2 returns a boolean if a field has been set.
func (o *AlertGuestInfoType) HasPreference2() bool {
	if o != nil && !IsNil(o.Preference2) {
		return true
	}

	return false
}

// SetPreference2 gets a reference to the given string and assigns it to the Preference2 field.
func (o *AlertGuestInfoType) SetPreference2(v string) {
	o.Preference2 = &v
}

// GetTotalBrandStay returns the TotalBrandStay field value if set, zero value otherwise.
func (o *AlertGuestInfoType) GetTotalBrandStay() int32 {
	if o == nil || IsNil(o.TotalBrandStay) {
		var ret int32
		return ret
	}
	return *o.TotalBrandStay
}

// GetTotalBrandStayOk returns a tuple with the TotalBrandStay field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AlertGuestInfoType) GetTotalBrandStayOk() (*int32, bool) {
	if o == nil || IsNil(o.TotalBrandStay) {
		return nil, false
	}
	return o.TotalBrandStay, true
}

// HasTotalBrandStay returns a boolean if a field has been set.
func (o *AlertGuestInfoType) HasTotalBrandStay() bool {
	if o != nil && !IsNil(o.TotalBrandStay) {
		return true
	}

	return false
}

// SetTotalBrandStay gets a reference to the given int32 and assigns it to the TotalBrandStay field.
func (o *AlertGuestInfoType) SetTotalBrandStay(v int32) {
	o.TotalBrandStay = &v
}

// GetTotalStay returns the TotalStay field value if set, zero value otherwise.
func (o *AlertGuestInfoType) GetTotalStay() int32 {
	if o == nil || IsNil(o.TotalStay) {
		var ret int32
		return ret
	}
	return *o.TotalStay
}

// GetTotalStayOk returns a tuple with the TotalStay field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AlertGuestInfoType) GetTotalStayOk() (*int32, bool) {
	if o == nil || IsNil(o.TotalStay) {
		return nil, false
	}
	return o.TotalStay, true
}

// HasTotalStay returns a boolean if a field has been set.
func (o *AlertGuestInfoType) HasTotalStay() bool {
	if o != nil && !IsNil(o.TotalStay) {
		return true
	}

	return false
}

// SetTotalStay gets a reference to the given int32 and assigns it to the TotalStay field.
func (o *AlertGuestInfoType) SetTotalStay(v int32) {
	o.TotalStay = &v
}

// GetVipStatus returns the VipStatus field value if set, zero value otherwise.
func (o *AlertGuestInfoType) GetVipStatus() VIPStatusType {
	if o == nil || IsNil(o.VipStatus) {
		var ret VIPStatusType
		return ret
	}
	return *o.VipStatus
}

// GetVipStatusOk returns a tuple with the VipStatus field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AlertGuestInfoType) GetVipStatusOk() (*VIPStatusType, bool) {
	if o == nil || IsNil(o.VipStatus) {
		return nil, false
	}
	return o.VipStatus, true
}

// HasVipStatus returns a boolean if a field has been set.
func (o *AlertGuestInfoType) HasVipStatus() bool {
	if o != nil && !IsNil(o.VipStatus) {
		return true
	}

	return false
}

// SetVipStatus gets a reference to the given VIPStatusType and assigns it to the VipStatus field.
func (o *AlertGuestInfoType) SetVipStatus(v VIPStatusType) {
	o.VipStatus = &v
}

func (o AlertGuestInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o AlertGuestInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BirthDate) {
		toSerialize["birthDate"] = o.BirthDate
	}
	if !IsNil(o.BirthDateMasked) {
		toSerialize["birthDateMasked"] = o.BirthDateMasked
	}
	if !IsNil(o.Comments) {
		toSerialize["comments"] = o.Comments
	}
	if !IsNil(o.GuestName) {
		toSerialize["guestName"] = o.GuestName
	}
	if !IsNil(o.GuestPreferredLanguage) {
		toSerialize["guestPreferredLanguage"] = o.GuestPreferredLanguage
	}
	if !IsNil(o.LastHotelCode) {
		toSerialize["lastHotelCode"] = o.LastHotelCode
	}
	if !IsNil(o.LastStayDate) {
		toSerialize["lastStayDate"] = o.LastStayDate
	}
	if !IsNil(o.Membership) {
		toSerialize["membership"] = o.Membership
	}
	if !IsNil(o.Preference) {
		toSerialize["preference"] = o.Preference
	}
	if !IsNil(o.Preference2) {
		toSerialize["preference2"] = o.Preference2
	}
	if !IsNil(o.TotalBrandStay) {
		toSerialize["totalBrandStay"] = o.TotalBrandStay
	}
	if !IsNil(o.TotalStay) {
		toSerialize["totalStay"] = o.TotalStay
	}
	if !IsNil(o.VipStatus) {
		toSerialize["vipStatus"] = o.VipStatus
	}
	return toSerialize, nil
}

type NullableAlertGuestInfoType struct {
	value *AlertGuestInfoType
	isSet bool
}

func (v NullableAlertGuestInfoType) Get() *AlertGuestInfoType {
	return v.value
}

func (v *NullableAlertGuestInfoType) Set(val *AlertGuestInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableAlertGuestInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableAlertGuestInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAlertGuestInfoType(val *AlertGuestInfoType) *NullableAlertGuestInfoType {
	return &NullableAlertGuestInfoType{value: val, isSet: true}
}

func (v NullableAlertGuestInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAlertGuestInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


