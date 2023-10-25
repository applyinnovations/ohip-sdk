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

// checks if the ResGuestInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ResGuestInfoType{}

// ResGuestInfoType Specifies Company or Travel Agent profile using IATA or Corp. No.
type ResGuestInfoType struct {
	// Collection of accompany guests
	AccompanyGuests []ResAccompanyGuestInfoType `json:"accompanyGuests,omitempty"`
	Address *AddressSearchType `json:"address,omitempty"`
	// Altername full display name
	AlternateFullName *string `json:"alternateFullName,omitempty"`
	// Alternate given name, first name or names
	AlternateGivenName *string `json:"alternateGivenName,omitempty"`
	// Alternate family name, last name.
	AlternateSurname *string `json:"alternateSurname,omitempty"`
	Anonymization *AnonymizationType `json:"anonymization,omitempty"`
	// Date of birth
	BirthDate *string `json:"birthDate,omitempty"`
	// Email address
	Email *string `json:"email,omitempty"`
	ExternalInfo *ResGuestExternalInfoType `json:"externalInfo,omitempty"`
	// Full display name
	FullName *string `json:"fullName,omitempty"`
	// Given name, first name or names
	GivenName *string `json:"givenName,omitempty"`
	GuestLastStayInfo *GuestLastStayInfoType `json:"guestLastStayInfo,omitempty"`
	// True indicates there are restrictions associated with the current profile.
	GuestRestricted *bool `json:"guestRestricted,omitempty"`
	// Guest profile restricted reason code
	GuestRestrictedCode *string `json:"guestRestrictedCode,omitempty"`
	// Guest profile restricted reason description
	GuestRestrictedReasonDesc *string `json:"guestRestrictedReasonDesc,omitempty"`
	// A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
	Id *string `json:"id,omitempty"`
	// Language identification.
	Language *string `json:"language,omitempty"`
	Membership *MembershipInfoType `json:"membership,omitempty"`
	// The middle name of the person name
	MiddleName *string `json:"middleName,omitempty"`
	// Salutation of honorific. (e.g., Mr. Mrs., Ms., Miss, Dr.)
	NamePrefix *string `json:"namePrefix,omitempty"`
	// Hold various name suffixes and letters (e.g. Jr., Sr., III, Ret., Esq.).
	NameSuffix *string `json:"nameSuffix,omitempty"`
	// Degree or honors (e.g., Ph.D., M.D.)
	NameTitle *string `json:"nameTitle,omitempty"`
	NameType *NameTypeType `json:"nameType,omitempty"`
	Nationality *CountryNameType `json:"nationality,omitempty"`
	// Phone number
	PhoneNumber *string `json:"phoneNumber,omitempty"`
	// Unique identifier of the police registration card number.
	RegistrationCardNo *string `json:"registrationCardNo,omitempty"`
	// Family name, last name.
	Surname *string `json:"surname,omitempty"`
	// e.g \"van der\", \"von\", \"de\"
	SurnamePrefix *string `json:"surnamePrefix,omitempty"`
	// A reference to the type of object defined by the UniqueID element.
	Type *string `json:"type,omitempty"`
	Vip *VIPType `json:"vip,omitempty"`
}

// NewResGuestInfoType instantiates a new ResGuestInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewResGuestInfoType() *ResGuestInfoType {
	this := ResGuestInfoType{}
	return &this
}

// NewResGuestInfoTypeWithDefaults instantiates a new ResGuestInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewResGuestInfoTypeWithDefaults() *ResGuestInfoType {
	this := ResGuestInfoType{}
	return &this
}

// GetAccompanyGuests returns the AccompanyGuests field value if set, zero value otherwise.
func (o *ResGuestInfoType) GetAccompanyGuests() []ResAccompanyGuestInfoType {
	if o == nil || IsNil(o.AccompanyGuests) {
		var ret []ResAccompanyGuestInfoType
		return ret
	}
	return o.AccompanyGuests
}

// GetAccompanyGuestsOk returns a tuple with the AccompanyGuests field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResGuestInfoType) GetAccompanyGuestsOk() ([]ResAccompanyGuestInfoType, bool) {
	if o == nil || IsNil(o.AccompanyGuests) {
		return nil, false
	}
	return o.AccompanyGuests, true
}

// HasAccompanyGuests returns a boolean if a field has been set.
func (o *ResGuestInfoType) HasAccompanyGuests() bool {
	if o != nil && !IsNil(o.AccompanyGuests) {
		return true
	}

	return false
}

// SetAccompanyGuests gets a reference to the given []ResAccompanyGuestInfoType and assigns it to the AccompanyGuests field.
func (o *ResGuestInfoType) SetAccompanyGuests(v []ResAccompanyGuestInfoType) {
	o.AccompanyGuests = v
}

// GetAddress returns the Address field value if set, zero value otherwise.
func (o *ResGuestInfoType) GetAddress() AddressSearchType {
	if o == nil || IsNil(o.Address) {
		var ret AddressSearchType
		return ret
	}
	return *o.Address
}

// GetAddressOk returns a tuple with the Address field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResGuestInfoType) GetAddressOk() (*AddressSearchType, bool) {
	if o == nil || IsNil(o.Address) {
		return nil, false
	}
	return o.Address, true
}

// HasAddress returns a boolean if a field has been set.
func (o *ResGuestInfoType) HasAddress() bool {
	if o != nil && !IsNil(o.Address) {
		return true
	}

	return false
}

// SetAddress gets a reference to the given AddressSearchType and assigns it to the Address field.
func (o *ResGuestInfoType) SetAddress(v AddressSearchType) {
	o.Address = &v
}

// GetAlternateFullName returns the AlternateFullName field value if set, zero value otherwise.
func (o *ResGuestInfoType) GetAlternateFullName() string {
	if o == nil || IsNil(o.AlternateFullName) {
		var ret string
		return ret
	}
	return *o.AlternateFullName
}

// GetAlternateFullNameOk returns a tuple with the AlternateFullName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResGuestInfoType) GetAlternateFullNameOk() (*string, bool) {
	if o == nil || IsNil(o.AlternateFullName) {
		return nil, false
	}
	return o.AlternateFullName, true
}

// HasAlternateFullName returns a boolean if a field has been set.
func (o *ResGuestInfoType) HasAlternateFullName() bool {
	if o != nil && !IsNil(o.AlternateFullName) {
		return true
	}

	return false
}

// SetAlternateFullName gets a reference to the given string and assigns it to the AlternateFullName field.
func (o *ResGuestInfoType) SetAlternateFullName(v string) {
	o.AlternateFullName = &v
}

// GetAlternateGivenName returns the AlternateGivenName field value if set, zero value otherwise.
func (o *ResGuestInfoType) GetAlternateGivenName() string {
	if o == nil || IsNil(o.AlternateGivenName) {
		var ret string
		return ret
	}
	return *o.AlternateGivenName
}

// GetAlternateGivenNameOk returns a tuple with the AlternateGivenName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResGuestInfoType) GetAlternateGivenNameOk() (*string, bool) {
	if o == nil || IsNil(o.AlternateGivenName) {
		return nil, false
	}
	return o.AlternateGivenName, true
}

// HasAlternateGivenName returns a boolean if a field has been set.
func (o *ResGuestInfoType) HasAlternateGivenName() bool {
	if o != nil && !IsNil(o.AlternateGivenName) {
		return true
	}

	return false
}

// SetAlternateGivenName gets a reference to the given string and assigns it to the AlternateGivenName field.
func (o *ResGuestInfoType) SetAlternateGivenName(v string) {
	o.AlternateGivenName = &v
}

// GetAlternateSurname returns the AlternateSurname field value if set, zero value otherwise.
func (o *ResGuestInfoType) GetAlternateSurname() string {
	if o == nil || IsNil(o.AlternateSurname) {
		var ret string
		return ret
	}
	return *o.AlternateSurname
}

// GetAlternateSurnameOk returns a tuple with the AlternateSurname field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResGuestInfoType) GetAlternateSurnameOk() (*string, bool) {
	if o == nil || IsNil(o.AlternateSurname) {
		return nil, false
	}
	return o.AlternateSurname, true
}

// HasAlternateSurname returns a boolean if a field has been set.
func (o *ResGuestInfoType) HasAlternateSurname() bool {
	if o != nil && !IsNil(o.AlternateSurname) {
		return true
	}

	return false
}

// SetAlternateSurname gets a reference to the given string and assigns it to the AlternateSurname field.
func (o *ResGuestInfoType) SetAlternateSurname(v string) {
	o.AlternateSurname = &v
}

// GetAnonymization returns the Anonymization field value if set, zero value otherwise.
func (o *ResGuestInfoType) GetAnonymization() AnonymizationType {
	if o == nil || IsNil(o.Anonymization) {
		var ret AnonymizationType
		return ret
	}
	return *o.Anonymization
}

// GetAnonymizationOk returns a tuple with the Anonymization field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResGuestInfoType) GetAnonymizationOk() (*AnonymizationType, bool) {
	if o == nil || IsNil(o.Anonymization) {
		return nil, false
	}
	return o.Anonymization, true
}

// HasAnonymization returns a boolean if a field has been set.
func (o *ResGuestInfoType) HasAnonymization() bool {
	if o != nil && !IsNil(o.Anonymization) {
		return true
	}

	return false
}

// SetAnonymization gets a reference to the given AnonymizationType and assigns it to the Anonymization field.
func (o *ResGuestInfoType) SetAnonymization(v AnonymizationType) {
	o.Anonymization = &v
}

// GetBirthDate returns the BirthDate field value if set, zero value otherwise.
func (o *ResGuestInfoType) GetBirthDate() string {
	if o == nil || IsNil(o.BirthDate) {
		var ret string
		return ret
	}
	return *o.BirthDate
}

// GetBirthDateOk returns a tuple with the BirthDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResGuestInfoType) GetBirthDateOk() (*string, bool) {
	if o == nil || IsNil(o.BirthDate) {
		return nil, false
	}
	return o.BirthDate, true
}

// HasBirthDate returns a boolean if a field has been set.
func (o *ResGuestInfoType) HasBirthDate() bool {
	if o != nil && !IsNil(o.BirthDate) {
		return true
	}

	return false
}

// SetBirthDate gets a reference to the given string and assigns it to the BirthDate field.
func (o *ResGuestInfoType) SetBirthDate(v string) {
	o.BirthDate = &v
}

// GetEmail returns the Email field value if set, zero value otherwise.
func (o *ResGuestInfoType) GetEmail() string {
	if o == nil || IsNil(o.Email) {
		var ret string
		return ret
	}
	return *o.Email
}

// GetEmailOk returns a tuple with the Email field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResGuestInfoType) GetEmailOk() (*string, bool) {
	if o == nil || IsNil(o.Email) {
		return nil, false
	}
	return o.Email, true
}

// HasEmail returns a boolean if a field has been set.
func (o *ResGuestInfoType) HasEmail() bool {
	if o != nil && !IsNil(o.Email) {
		return true
	}

	return false
}

// SetEmail gets a reference to the given string and assigns it to the Email field.
func (o *ResGuestInfoType) SetEmail(v string) {
	o.Email = &v
}

// GetExternalInfo returns the ExternalInfo field value if set, zero value otherwise.
func (o *ResGuestInfoType) GetExternalInfo() ResGuestExternalInfoType {
	if o == nil || IsNil(o.ExternalInfo) {
		var ret ResGuestExternalInfoType
		return ret
	}
	return *o.ExternalInfo
}

// GetExternalInfoOk returns a tuple with the ExternalInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResGuestInfoType) GetExternalInfoOk() (*ResGuestExternalInfoType, bool) {
	if o == nil || IsNil(o.ExternalInfo) {
		return nil, false
	}
	return o.ExternalInfo, true
}

// HasExternalInfo returns a boolean if a field has been set.
func (o *ResGuestInfoType) HasExternalInfo() bool {
	if o != nil && !IsNil(o.ExternalInfo) {
		return true
	}

	return false
}

// SetExternalInfo gets a reference to the given ResGuestExternalInfoType and assigns it to the ExternalInfo field.
func (o *ResGuestInfoType) SetExternalInfo(v ResGuestExternalInfoType) {
	o.ExternalInfo = &v
}

// GetFullName returns the FullName field value if set, zero value otherwise.
func (o *ResGuestInfoType) GetFullName() string {
	if o == nil || IsNil(o.FullName) {
		var ret string
		return ret
	}
	return *o.FullName
}

// GetFullNameOk returns a tuple with the FullName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResGuestInfoType) GetFullNameOk() (*string, bool) {
	if o == nil || IsNil(o.FullName) {
		return nil, false
	}
	return o.FullName, true
}

// HasFullName returns a boolean if a field has been set.
func (o *ResGuestInfoType) HasFullName() bool {
	if o != nil && !IsNil(o.FullName) {
		return true
	}

	return false
}

// SetFullName gets a reference to the given string and assigns it to the FullName field.
func (o *ResGuestInfoType) SetFullName(v string) {
	o.FullName = &v
}

// GetGivenName returns the GivenName field value if set, zero value otherwise.
func (o *ResGuestInfoType) GetGivenName() string {
	if o == nil || IsNil(o.GivenName) {
		var ret string
		return ret
	}
	return *o.GivenName
}

// GetGivenNameOk returns a tuple with the GivenName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResGuestInfoType) GetGivenNameOk() (*string, bool) {
	if o == nil || IsNil(o.GivenName) {
		return nil, false
	}
	return o.GivenName, true
}

// HasGivenName returns a boolean if a field has been set.
func (o *ResGuestInfoType) HasGivenName() bool {
	if o != nil && !IsNil(o.GivenName) {
		return true
	}

	return false
}

// SetGivenName gets a reference to the given string and assigns it to the GivenName field.
func (o *ResGuestInfoType) SetGivenName(v string) {
	o.GivenName = &v
}

// GetGuestLastStayInfo returns the GuestLastStayInfo field value if set, zero value otherwise.
func (o *ResGuestInfoType) GetGuestLastStayInfo() GuestLastStayInfoType {
	if o == nil || IsNil(o.GuestLastStayInfo) {
		var ret GuestLastStayInfoType
		return ret
	}
	return *o.GuestLastStayInfo
}

// GetGuestLastStayInfoOk returns a tuple with the GuestLastStayInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResGuestInfoType) GetGuestLastStayInfoOk() (*GuestLastStayInfoType, bool) {
	if o == nil || IsNil(o.GuestLastStayInfo) {
		return nil, false
	}
	return o.GuestLastStayInfo, true
}

// HasGuestLastStayInfo returns a boolean if a field has been set.
func (o *ResGuestInfoType) HasGuestLastStayInfo() bool {
	if o != nil && !IsNil(o.GuestLastStayInfo) {
		return true
	}

	return false
}

// SetGuestLastStayInfo gets a reference to the given GuestLastStayInfoType and assigns it to the GuestLastStayInfo field.
func (o *ResGuestInfoType) SetGuestLastStayInfo(v GuestLastStayInfoType) {
	o.GuestLastStayInfo = &v
}

// GetGuestRestricted returns the GuestRestricted field value if set, zero value otherwise.
func (o *ResGuestInfoType) GetGuestRestricted() bool {
	if o == nil || IsNil(o.GuestRestricted) {
		var ret bool
		return ret
	}
	return *o.GuestRestricted
}

// GetGuestRestrictedOk returns a tuple with the GuestRestricted field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResGuestInfoType) GetGuestRestrictedOk() (*bool, bool) {
	if o == nil || IsNil(o.GuestRestricted) {
		return nil, false
	}
	return o.GuestRestricted, true
}

// HasGuestRestricted returns a boolean if a field has been set.
func (o *ResGuestInfoType) HasGuestRestricted() bool {
	if o != nil && !IsNil(o.GuestRestricted) {
		return true
	}

	return false
}

// SetGuestRestricted gets a reference to the given bool and assigns it to the GuestRestricted field.
func (o *ResGuestInfoType) SetGuestRestricted(v bool) {
	o.GuestRestricted = &v
}

// GetGuestRestrictedCode returns the GuestRestrictedCode field value if set, zero value otherwise.
func (o *ResGuestInfoType) GetGuestRestrictedCode() string {
	if o == nil || IsNil(o.GuestRestrictedCode) {
		var ret string
		return ret
	}
	return *o.GuestRestrictedCode
}

// GetGuestRestrictedCodeOk returns a tuple with the GuestRestrictedCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResGuestInfoType) GetGuestRestrictedCodeOk() (*string, bool) {
	if o == nil || IsNil(o.GuestRestrictedCode) {
		return nil, false
	}
	return o.GuestRestrictedCode, true
}

// HasGuestRestrictedCode returns a boolean if a field has been set.
func (o *ResGuestInfoType) HasGuestRestrictedCode() bool {
	if o != nil && !IsNil(o.GuestRestrictedCode) {
		return true
	}

	return false
}

// SetGuestRestrictedCode gets a reference to the given string and assigns it to the GuestRestrictedCode field.
func (o *ResGuestInfoType) SetGuestRestrictedCode(v string) {
	o.GuestRestrictedCode = &v
}

// GetGuestRestrictedReasonDesc returns the GuestRestrictedReasonDesc field value if set, zero value otherwise.
func (o *ResGuestInfoType) GetGuestRestrictedReasonDesc() string {
	if o == nil || IsNil(o.GuestRestrictedReasonDesc) {
		var ret string
		return ret
	}
	return *o.GuestRestrictedReasonDesc
}

// GetGuestRestrictedReasonDescOk returns a tuple with the GuestRestrictedReasonDesc field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResGuestInfoType) GetGuestRestrictedReasonDescOk() (*string, bool) {
	if o == nil || IsNil(o.GuestRestrictedReasonDesc) {
		return nil, false
	}
	return o.GuestRestrictedReasonDesc, true
}

// HasGuestRestrictedReasonDesc returns a boolean if a field has been set.
func (o *ResGuestInfoType) HasGuestRestrictedReasonDesc() bool {
	if o != nil && !IsNil(o.GuestRestrictedReasonDesc) {
		return true
	}

	return false
}

// SetGuestRestrictedReasonDesc gets a reference to the given string and assigns it to the GuestRestrictedReasonDesc field.
func (o *ResGuestInfoType) SetGuestRestrictedReasonDesc(v string) {
	o.GuestRestrictedReasonDesc = &v
}

// GetId returns the Id field value if set, zero value otherwise.
func (o *ResGuestInfoType) GetId() string {
	if o == nil || IsNil(o.Id) {
		var ret string
		return ret
	}
	return *o.Id
}

// GetIdOk returns a tuple with the Id field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResGuestInfoType) GetIdOk() (*string, bool) {
	if o == nil || IsNil(o.Id) {
		return nil, false
	}
	return o.Id, true
}

// HasId returns a boolean if a field has been set.
func (o *ResGuestInfoType) HasId() bool {
	if o != nil && !IsNil(o.Id) {
		return true
	}

	return false
}

// SetId gets a reference to the given string and assigns it to the Id field.
func (o *ResGuestInfoType) SetId(v string) {
	o.Id = &v
}

// GetLanguage returns the Language field value if set, zero value otherwise.
func (o *ResGuestInfoType) GetLanguage() string {
	if o == nil || IsNil(o.Language) {
		var ret string
		return ret
	}
	return *o.Language
}

// GetLanguageOk returns a tuple with the Language field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResGuestInfoType) GetLanguageOk() (*string, bool) {
	if o == nil || IsNil(o.Language) {
		return nil, false
	}
	return o.Language, true
}

// HasLanguage returns a boolean if a field has been set.
func (o *ResGuestInfoType) HasLanguage() bool {
	if o != nil && !IsNil(o.Language) {
		return true
	}

	return false
}

// SetLanguage gets a reference to the given string and assigns it to the Language field.
func (o *ResGuestInfoType) SetLanguage(v string) {
	o.Language = &v
}

// GetMembership returns the Membership field value if set, zero value otherwise.
func (o *ResGuestInfoType) GetMembership() MembershipInfoType {
	if o == nil || IsNil(o.Membership) {
		var ret MembershipInfoType
		return ret
	}
	return *o.Membership
}

// GetMembershipOk returns a tuple with the Membership field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResGuestInfoType) GetMembershipOk() (*MembershipInfoType, bool) {
	if o == nil || IsNil(o.Membership) {
		return nil, false
	}
	return o.Membership, true
}

// HasMembership returns a boolean if a field has been set.
func (o *ResGuestInfoType) HasMembership() bool {
	if o != nil && !IsNil(o.Membership) {
		return true
	}

	return false
}

// SetMembership gets a reference to the given MembershipInfoType and assigns it to the Membership field.
func (o *ResGuestInfoType) SetMembership(v MembershipInfoType) {
	o.Membership = &v
}

// GetMiddleName returns the MiddleName field value if set, zero value otherwise.
func (o *ResGuestInfoType) GetMiddleName() string {
	if o == nil || IsNil(o.MiddleName) {
		var ret string
		return ret
	}
	return *o.MiddleName
}

// GetMiddleNameOk returns a tuple with the MiddleName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResGuestInfoType) GetMiddleNameOk() (*string, bool) {
	if o == nil || IsNil(o.MiddleName) {
		return nil, false
	}
	return o.MiddleName, true
}

// HasMiddleName returns a boolean if a field has been set.
func (o *ResGuestInfoType) HasMiddleName() bool {
	if o != nil && !IsNil(o.MiddleName) {
		return true
	}

	return false
}

// SetMiddleName gets a reference to the given string and assigns it to the MiddleName field.
func (o *ResGuestInfoType) SetMiddleName(v string) {
	o.MiddleName = &v
}

// GetNamePrefix returns the NamePrefix field value if set, zero value otherwise.
func (o *ResGuestInfoType) GetNamePrefix() string {
	if o == nil || IsNil(o.NamePrefix) {
		var ret string
		return ret
	}
	return *o.NamePrefix
}

// GetNamePrefixOk returns a tuple with the NamePrefix field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResGuestInfoType) GetNamePrefixOk() (*string, bool) {
	if o == nil || IsNil(o.NamePrefix) {
		return nil, false
	}
	return o.NamePrefix, true
}

// HasNamePrefix returns a boolean if a field has been set.
func (o *ResGuestInfoType) HasNamePrefix() bool {
	if o != nil && !IsNil(o.NamePrefix) {
		return true
	}

	return false
}

// SetNamePrefix gets a reference to the given string and assigns it to the NamePrefix field.
func (o *ResGuestInfoType) SetNamePrefix(v string) {
	o.NamePrefix = &v
}

// GetNameSuffix returns the NameSuffix field value if set, zero value otherwise.
func (o *ResGuestInfoType) GetNameSuffix() string {
	if o == nil || IsNil(o.NameSuffix) {
		var ret string
		return ret
	}
	return *o.NameSuffix
}

// GetNameSuffixOk returns a tuple with the NameSuffix field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResGuestInfoType) GetNameSuffixOk() (*string, bool) {
	if o == nil || IsNil(o.NameSuffix) {
		return nil, false
	}
	return o.NameSuffix, true
}

// HasNameSuffix returns a boolean if a field has been set.
func (o *ResGuestInfoType) HasNameSuffix() bool {
	if o != nil && !IsNil(o.NameSuffix) {
		return true
	}

	return false
}

// SetNameSuffix gets a reference to the given string and assigns it to the NameSuffix field.
func (o *ResGuestInfoType) SetNameSuffix(v string) {
	o.NameSuffix = &v
}

// GetNameTitle returns the NameTitle field value if set, zero value otherwise.
func (o *ResGuestInfoType) GetNameTitle() string {
	if o == nil || IsNil(o.NameTitle) {
		var ret string
		return ret
	}
	return *o.NameTitle
}

// GetNameTitleOk returns a tuple with the NameTitle field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResGuestInfoType) GetNameTitleOk() (*string, bool) {
	if o == nil || IsNil(o.NameTitle) {
		return nil, false
	}
	return o.NameTitle, true
}

// HasNameTitle returns a boolean if a field has been set.
func (o *ResGuestInfoType) HasNameTitle() bool {
	if o != nil && !IsNil(o.NameTitle) {
		return true
	}

	return false
}

// SetNameTitle gets a reference to the given string and assigns it to the NameTitle field.
func (o *ResGuestInfoType) SetNameTitle(v string) {
	o.NameTitle = &v
}

// GetNameType returns the NameType field value if set, zero value otherwise.
func (o *ResGuestInfoType) GetNameType() NameTypeType {
	if o == nil || IsNil(o.NameType) {
		var ret NameTypeType
		return ret
	}
	return *o.NameType
}

// GetNameTypeOk returns a tuple with the NameType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResGuestInfoType) GetNameTypeOk() (*NameTypeType, bool) {
	if o == nil || IsNil(o.NameType) {
		return nil, false
	}
	return o.NameType, true
}

// HasNameType returns a boolean if a field has been set.
func (o *ResGuestInfoType) HasNameType() bool {
	if o != nil && !IsNil(o.NameType) {
		return true
	}

	return false
}

// SetNameType gets a reference to the given NameTypeType and assigns it to the NameType field.
func (o *ResGuestInfoType) SetNameType(v NameTypeType) {
	o.NameType = &v
}

// GetNationality returns the Nationality field value if set, zero value otherwise.
func (o *ResGuestInfoType) GetNationality() CountryNameType {
	if o == nil || IsNil(o.Nationality) {
		var ret CountryNameType
		return ret
	}
	return *o.Nationality
}

// GetNationalityOk returns a tuple with the Nationality field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResGuestInfoType) GetNationalityOk() (*CountryNameType, bool) {
	if o == nil || IsNil(o.Nationality) {
		return nil, false
	}
	return o.Nationality, true
}

// HasNationality returns a boolean if a field has been set.
func (o *ResGuestInfoType) HasNationality() bool {
	if o != nil && !IsNil(o.Nationality) {
		return true
	}

	return false
}

// SetNationality gets a reference to the given CountryNameType and assigns it to the Nationality field.
func (o *ResGuestInfoType) SetNationality(v CountryNameType) {
	o.Nationality = &v
}

// GetPhoneNumber returns the PhoneNumber field value if set, zero value otherwise.
func (o *ResGuestInfoType) GetPhoneNumber() string {
	if o == nil || IsNil(o.PhoneNumber) {
		var ret string
		return ret
	}
	return *o.PhoneNumber
}

// GetPhoneNumberOk returns a tuple with the PhoneNumber field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResGuestInfoType) GetPhoneNumberOk() (*string, bool) {
	if o == nil || IsNil(o.PhoneNumber) {
		return nil, false
	}
	return o.PhoneNumber, true
}

// HasPhoneNumber returns a boolean if a field has been set.
func (o *ResGuestInfoType) HasPhoneNumber() bool {
	if o != nil && !IsNil(o.PhoneNumber) {
		return true
	}

	return false
}

// SetPhoneNumber gets a reference to the given string and assigns it to the PhoneNumber field.
func (o *ResGuestInfoType) SetPhoneNumber(v string) {
	o.PhoneNumber = &v
}

// GetRegistrationCardNo returns the RegistrationCardNo field value if set, zero value otherwise.
func (o *ResGuestInfoType) GetRegistrationCardNo() string {
	if o == nil || IsNil(o.RegistrationCardNo) {
		var ret string
		return ret
	}
	return *o.RegistrationCardNo
}

// GetRegistrationCardNoOk returns a tuple with the RegistrationCardNo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResGuestInfoType) GetRegistrationCardNoOk() (*string, bool) {
	if o == nil || IsNil(o.RegistrationCardNo) {
		return nil, false
	}
	return o.RegistrationCardNo, true
}

// HasRegistrationCardNo returns a boolean if a field has been set.
func (o *ResGuestInfoType) HasRegistrationCardNo() bool {
	if o != nil && !IsNil(o.RegistrationCardNo) {
		return true
	}

	return false
}

// SetRegistrationCardNo gets a reference to the given string and assigns it to the RegistrationCardNo field.
func (o *ResGuestInfoType) SetRegistrationCardNo(v string) {
	o.RegistrationCardNo = &v
}

// GetSurname returns the Surname field value if set, zero value otherwise.
func (o *ResGuestInfoType) GetSurname() string {
	if o == nil || IsNil(o.Surname) {
		var ret string
		return ret
	}
	return *o.Surname
}

// GetSurnameOk returns a tuple with the Surname field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResGuestInfoType) GetSurnameOk() (*string, bool) {
	if o == nil || IsNil(o.Surname) {
		return nil, false
	}
	return o.Surname, true
}

// HasSurname returns a boolean if a field has been set.
func (o *ResGuestInfoType) HasSurname() bool {
	if o != nil && !IsNil(o.Surname) {
		return true
	}

	return false
}

// SetSurname gets a reference to the given string and assigns it to the Surname field.
func (o *ResGuestInfoType) SetSurname(v string) {
	o.Surname = &v
}

// GetSurnamePrefix returns the SurnamePrefix field value if set, zero value otherwise.
func (o *ResGuestInfoType) GetSurnamePrefix() string {
	if o == nil || IsNil(o.SurnamePrefix) {
		var ret string
		return ret
	}
	return *o.SurnamePrefix
}

// GetSurnamePrefixOk returns a tuple with the SurnamePrefix field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResGuestInfoType) GetSurnamePrefixOk() (*string, bool) {
	if o == nil || IsNil(o.SurnamePrefix) {
		return nil, false
	}
	return o.SurnamePrefix, true
}

// HasSurnamePrefix returns a boolean if a field has been set.
func (o *ResGuestInfoType) HasSurnamePrefix() bool {
	if o != nil && !IsNil(o.SurnamePrefix) {
		return true
	}

	return false
}

// SetSurnamePrefix gets a reference to the given string and assigns it to the SurnamePrefix field.
func (o *ResGuestInfoType) SetSurnamePrefix(v string) {
	o.SurnamePrefix = &v
}

// GetType returns the Type field value if set, zero value otherwise.
func (o *ResGuestInfoType) GetType() string {
	if o == nil || IsNil(o.Type) {
		var ret string
		return ret
	}
	return *o.Type
}

// GetTypeOk returns a tuple with the Type field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResGuestInfoType) GetTypeOk() (*string, bool) {
	if o == nil || IsNil(o.Type) {
		return nil, false
	}
	return o.Type, true
}

// HasType returns a boolean if a field has been set.
func (o *ResGuestInfoType) HasType() bool {
	if o != nil && !IsNil(o.Type) {
		return true
	}

	return false
}

// SetType gets a reference to the given string and assigns it to the Type field.
func (o *ResGuestInfoType) SetType(v string) {
	o.Type = &v
}

// GetVip returns the Vip field value if set, zero value otherwise.
func (o *ResGuestInfoType) GetVip() VIPType {
	if o == nil || IsNil(o.Vip) {
		var ret VIPType
		return ret
	}
	return *o.Vip
}

// GetVipOk returns a tuple with the Vip field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResGuestInfoType) GetVipOk() (*VIPType, bool) {
	if o == nil || IsNil(o.Vip) {
		return nil, false
	}
	return o.Vip, true
}

// HasVip returns a boolean if a field has been set.
func (o *ResGuestInfoType) HasVip() bool {
	if o != nil && !IsNil(o.Vip) {
		return true
	}

	return false
}

// SetVip gets a reference to the given VIPType and assigns it to the Vip field.
func (o *ResGuestInfoType) SetVip(v VIPType) {
	o.Vip = &v
}

func (o ResGuestInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ResGuestInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AccompanyGuests) {
		toSerialize["accompanyGuests"] = o.AccompanyGuests
	}
	if !IsNil(o.Address) {
		toSerialize["address"] = o.Address
	}
	if !IsNil(o.AlternateFullName) {
		toSerialize["alternateFullName"] = o.AlternateFullName
	}
	if !IsNil(o.AlternateGivenName) {
		toSerialize["alternateGivenName"] = o.AlternateGivenName
	}
	if !IsNil(o.AlternateSurname) {
		toSerialize["alternateSurname"] = o.AlternateSurname
	}
	if !IsNil(o.Anonymization) {
		toSerialize["anonymization"] = o.Anonymization
	}
	if !IsNil(o.BirthDate) {
		toSerialize["birthDate"] = o.BirthDate
	}
	if !IsNil(o.Email) {
		toSerialize["email"] = o.Email
	}
	if !IsNil(o.ExternalInfo) {
		toSerialize["externalInfo"] = o.ExternalInfo
	}
	if !IsNil(o.FullName) {
		toSerialize["fullName"] = o.FullName
	}
	if !IsNil(o.GivenName) {
		toSerialize["givenName"] = o.GivenName
	}
	if !IsNil(o.GuestLastStayInfo) {
		toSerialize["guestLastStayInfo"] = o.GuestLastStayInfo
	}
	if !IsNil(o.GuestRestricted) {
		toSerialize["guestRestricted"] = o.GuestRestricted
	}
	if !IsNil(o.GuestRestrictedCode) {
		toSerialize["guestRestrictedCode"] = o.GuestRestrictedCode
	}
	if !IsNil(o.GuestRestrictedReasonDesc) {
		toSerialize["guestRestrictedReasonDesc"] = o.GuestRestrictedReasonDesc
	}
	if !IsNil(o.Id) {
		toSerialize["id"] = o.Id
	}
	if !IsNil(o.Language) {
		toSerialize["language"] = o.Language
	}
	if !IsNil(o.Membership) {
		toSerialize["membership"] = o.Membership
	}
	if !IsNil(o.MiddleName) {
		toSerialize["middleName"] = o.MiddleName
	}
	if !IsNil(o.NamePrefix) {
		toSerialize["namePrefix"] = o.NamePrefix
	}
	if !IsNil(o.NameSuffix) {
		toSerialize["nameSuffix"] = o.NameSuffix
	}
	if !IsNil(o.NameTitle) {
		toSerialize["nameTitle"] = o.NameTitle
	}
	if !IsNil(o.NameType) {
		toSerialize["nameType"] = o.NameType
	}
	if !IsNil(o.Nationality) {
		toSerialize["nationality"] = o.Nationality
	}
	if !IsNil(o.PhoneNumber) {
		toSerialize["phoneNumber"] = o.PhoneNumber
	}
	if !IsNil(o.RegistrationCardNo) {
		toSerialize["registrationCardNo"] = o.RegistrationCardNo
	}
	if !IsNil(o.Surname) {
		toSerialize["surname"] = o.Surname
	}
	if !IsNil(o.SurnamePrefix) {
		toSerialize["surnamePrefix"] = o.SurnamePrefix
	}
	if !IsNil(o.Type) {
		toSerialize["type"] = o.Type
	}
	if !IsNil(o.Vip) {
		toSerialize["vip"] = o.Vip
	}
	return toSerialize, nil
}

type NullableResGuestInfoType struct {
	value *ResGuestInfoType
	isSet bool
}

func (v NullableResGuestInfoType) Get() *ResGuestInfoType {
	return v.value
}

func (v *NullableResGuestInfoType) Set(val *ResGuestInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableResGuestInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableResGuestInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableResGuestInfoType(val *ResGuestInfoType) *NullableResGuestInfoType {
	return &NullableResGuestInfoType{value: val, isSet: true}
}

func (v NullableResGuestInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableResGuestInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


