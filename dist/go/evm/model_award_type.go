/*
OPERA Cloud Sales Event Management API

APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evm

import (
	"encoding/json"
)

// checks if the AwardType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &AwardType{}

// AwardType Detailed information of the awards.
type AwardType struct {
	// Award category.
	AwardCode *string `json:"awardCode,omitempty"`
	AwardType *AwardKindType `json:"awardType,omitempty"`
	// Indicates whether the category of certificate is valid or not for this resort.
	CategoryValid *bool `json:"categoryValid,omitempty"`
	// Certificate No.
	CertificateNo *string `json:"certificateNo,omitempty"`
	// Time stamp of the creation.
	CreateDateTime *string `json:"createDateTime,omitempty"`
	// ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation.
	CreatorId *string `json:"creatorId,omitempty"`
	// Description of the award/certificate.
	Description *string `json:"description,omitempty"`
	// Indicates if this certificate is detailed or not.
	DetailedCertificate *bool `json:"detailedCertificate,omitempty"`
	// Indicates the order in which the certificates received from MRW.
	DisplaySequence *float32 `json:"displaySequence,omitempty"`
	// Expiration Date.
	ExpirationDate *string `json:"expirationDate,omitempty"`
	// Confirmation Number given by a CRS application for this reservation.
	ExternalConfirmationNo *string `json:"externalConfirmationNo,omitempty"`
	// Hotel Code of the CRS application that this certificate belongs to.
	ExternalHotelCode *string `json:"externalHotelCode,omitempty"`
	FBAInfo *FBAInfoType `json:"fBAInfo,omitempty"`
	// Signifies whether award is gift or not.
	Gift *bool `json:"gift,omitempty"`
	// Indicates the lowest hotel category for which the certificate is valid.
	HotelCategory *string `json:"hotelCategory,omitempty"`
	// Hotel Code for which the routing instructions are provided for a profile.
	HotelId *string `json:"hotelId,omitempty"`
	// Indicates if the award is an Instant Redemption award.
	InstantlyRedeemable *bool `json:"instantlyRedeemable,omitempty"`
	// Identifies the last software system or person to modify a record.
	LastModifierId *string `json:"lastModifierId,omitempty"`
	// Time stamp of last modification.
	LastModifyDateTime *string `json:"lastModifyDateTime,omitempty"`
	// Master Certificate No.
	MasterCertificiateNo *string `json:"masterCertificiateNo,omitempty"`
	// Membership No.
	MembershipNo *string `json:"membershipNo,omitempty"`
	// Award Nights.
	Nights *int32 `json:"nights,omitempty"`
	// Signifies whether upgrade is package or not.
	Package *bool `json:"package,omitempty"`
	// Indicates if this certificate was ordered using the \"Paid Upgrade\" option in the E-Certs screen.
	PaidUpgrade *bool `json:"paidUpgrade,omitempty"`
	// No. of points used to order this award.
	Points *float32 `json:"points,omitempty"`
	ProfileId *ProfileId `json:"profileId,omitempty"`
	// Date an item will be purged from a database (e.g., from a live database to an archive).
	PurgeDate *string `json:"purgeDate,omitempty"`
	// Quantity of such awards needed to be ordered.
	Quantity *int32 `json:"quantity,omitempty"`
	ReservationCertificateType *ReservationCertificateType `json:"reservationCertificateType,omitempty"`
	ReservationId *ReservationId `json:"reservationId,omitempty"`
	RewardCertificateType *RewardCertificateType `json:"rewardCertificateType,omitempty"`
	// MRW : From MRW MAN:Entered manually.
	SourceType *string `json:"sourceType,omitempty"`
	Status *AwardStatusType `json:"status,omitempty"`
	// Signifies whether upgrade award or not.
	Upgrade *bool `json:"upgrade,omitempty"`
}

// NewAwardType instantiates a new AwardType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAwardType() *AwardType {
	this := AwardType{}
	return &this
}

// NewAwardTypeWithDefaults instantiates a new AwardType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAwardTypeWithDefaults() *AwardType {
	this := AwardType{}
	return &this
}

// GetAwardCode returns the AwardCode field value if set, zero value otherwise.
func (o *AwardType) GetAwardCode() string {
	if o == nil || IsNil(o.AwardCode) {
		var ret string
		return ret
	}
	return *o.AwardCode
}

// GetAwardCodeOk returns a tuple with the AwardCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AwardType) GetAwardCodeOk() (*string, bool) {
	if o == nil || IsNil(o.AwardCode) {
		return nil, false
	}
	return o.AwardCode, true
}

// HasAwardCode returns a boolean if a field has been set.
func (o *AwardType) HasAwardCode() bool {
	if o != nil && !IsNil(o.AwardCode) {
		return true
	}

	return false
}

// SetAwardCode gets a reference to the given string and assigns it to the AwardCode field.
func (o *AwardType) SetAwardCode(v string) {
	o.AwardCode = &v
}

// GetAwardType returns the AwardType field value if set, zero value otherwise.
func (o *AwardType) GetAwardType() AwardKindType {
	if o == nil || IsNil(o.AwardType) {
		var ret AwardKindType
		return ret
	}
	return *o.AwardType
}

// GetAwardTypeOk returns a tuple with the AwardType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AwardType) GetAwardTypeOk() (*AwardKindType, bool) {
	if o == nil || IsNil(o.AwardType) {
		return nil, false
	}
	return o.AwardType, true
}

// HasAwardType returns a boolean if a field has been set.
func (o *AwardType) HasAwardType() bool {
	if o != nil && !IsNil(o.AwardType) {
		return true
	}

	return false
}

// SetAwardType gets a reference to the given AwardKindType and assigns it to the AwardType field.
func (o *AwardType) SetAwardType(v AwardKindType) {
	o.AwardType = &v
}

// GetCategoryValid returns the CategoryValid field value if set, zero value otherwise.
func (o *AwardType) GetCategoryValid() bool {
	if o == nil || IsNil(o.CategoryValid) {
		var ret bool
		return ret
	}
	return *o.CategoryValid
}

// GetCategoryValidOk returns a tuple with the CategoryValid field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AwardType) GetCategoryValidOk() (*bool, bool) {
	if o == nil || IsNil(o.CategoryValid) {
		return nil, false
	}
	return o.CategoryValid, true
}

// HasCategoryValid returns a boolean if a field has been set.
func (o *AwardType) HasCategoryValid() bool {
	if o != nil && !IsNil(o.CategoryValid) {
		return true
	}

	return false
}

// SetCategoryValid gets a reference to the given bool and assigns it to the CategoryValid field.
func (o *AwardType) SetCategoryValid(v bool) {
	o.CategoryValid = &v
}

// GetCertificateNo returns the CertificateNo field value if set, zero value otherwise.
func (o *AwardType) GetCertificateNo() string {
	if o == nil || IsNil(o.CertificateNo) {
		var ret string
		return ret
	}
	return *o.CertificateNo
}

// GetCertificateNoOk returns a tuple with the CertificateNo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AwardType) GetCertificateNoOk() (*string, bool) {
	if o == nil || IsNil(o.CertificateNo) {
		return nil, false
	}
	return o.CertificateNo, true
}

// HasCertificateNo returns a boolean if a field has been set.
func (o *AwardType) HasCertificateNo() bool {
	if o != nil && !IsNil(o.CertificateNo) {
		return true
	}

	return false
}

// SetCertificateNo gets a reference to the given string and assigns it to the CertificateNo field.
func (o *AwardType) SetCertificateNo(v string) {
	o.CertificateNo = &v
}

// GetCreateDateTime returns the CreateDateTime field value if set, zero value otherwise.
func (o *AwardType) GetCreateDateTime() string {
	if o == nil || IsNil(o.CreateDateTime) {
		var ret string
		return ret
	}
	return *o.CreateDateTime
}

// GetCreateDateTimeOk returns a tuple with the CreateDateTime field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AwardType) GetCreateDateTimeOk() (*string, bool) {
	if o == nil || IsNil(o.CreateDateTime) {
		return nil, false
	}
	return o.CreateDateTime, true
}

// HasCreateDateTime returns a boolean if a field has been set.
func (o *AwardType) HasCreateDateTime() bool {
	if o != nil && !IsNil(o.CreateDateTime) {
		return true
	}

	return false
}

// SetCreateDateTime gets a reference to the given string and assigns it to the CreateDateTime field.
func (o *AwardType) SetCreateDateTime(v string) {
	o.CreateDateTime = &v
}

// GetCreatorId returns the CreatorId field value if set, zero value otherwise.
func (o *AwardType) GetCreatorId() string {
	if o == nil || IsNil(o.CreatorId) {
		var ret string
		return ret
	}
	return *o.CreatorId
}

// GetCreatorIdOk returns a tuple with the CreatorId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AwardType) GetCreatorIdOk() (*string, bool) {
	if o == nil || IsNil(o.CreatorId) {
		return nil, false
	}
	return o.CreatorId, true
}

// HasCreatorId returns a boolean if a field has been set.
func (o *AwardType) HasCreatorId() bool {
	if o != nil && !IsNil(o.CreatorId) {
		return true
	}

	return false
}

// SetCreatorId gets a reference to the given string and assigns it to the CreatorId field.
func (o *AwardType) SetCreatorId(v string) {
	o.CreatorId = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *AwardType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AwardType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *AwardType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *AwardType) SetDescription(v string) {
	o.Description = &v
}

// GetDetailedCertificate returns the DetailedCertificate field value if set, zero value otherwise.
func (o *AwardType) GetDetailedCertificate() bool {
	if o == nil || IsNil(o.DetailedCertificate) {
		var ret bool
		return ret
	}
	return *o.DetailedCertificate
}

// GetDetailedCertificateOk returns a tuple with the DetailedCertificate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AwardType) GetDetailedCertificateOk() (*bool, bool) {
	if o == nil || IsNil(o.DetailedCertificate) {
		return nil, false
	}
	return o.DetailedCertificate, true
}

// HasDetailedCertificate returns a boolean if a field has been set.
func (o *AwardType) HasDetailedCertificate() bool {
	if o != nil && !IsNil(o.DetailedCertificate) {
		return true
	}

	return false
}

// SetDetailedCertificate gets a reference to the given bool and assigns it to the DetailedCertificate field.
func (o *AwardType) SetDetailedCertificate(v bool) {
	o.DetailedCertificate = &v
}

// GetDisplaySequence returns the DisplaySequence field value if set, zero value otherwise.
func (o *AwardType) GetDisplaySequence() float32 {
	if o == nil || IsNil(o.DisplaySequence) {
		var ret float32
		return ret
	}
	return *o.DisplaySequence
}

// GetDisplaySequenceOk returns a tuple with the DisplaySequence field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AwardType) GetDisplaySequenceOk() (*float32, bool) {
	if o == nil || IsNil(o.DisplaySequence) {
		return nil, false
	}
	return o.DisplaySequence, true
}

// HasDisplaySequence returns a boolean if a field has been set.
func (o *AwardType) HasDisplaySequence() bool {
	if o != nil && !IsNil(o.DisplaySequence) {
		return true
	}

	return false
}

// SetDisplaySequence gets a reference to the given float32 and assigns it to the DisplaySequence field.
func (o *AwardType) SetDisplaySequence(v float32) {
	o.DisplaySequence = &v
}

// GetExpirationDate returns the ExpirationDate field value if set, zero value otherwise.
func (o *AwardType) GetExpirationDate() string {
	if o == nil || IsNil(o.ExpirationDate) {
		var ret string
		return ret
	}
	return *o.ExpirationDate
}

// GetExpirationDateOk returns a tuple with the ExpirationDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AwardType) GetExpirationDateOk() (*string, bool) {
	if o == nil || IsNil(o.ExpirationDate) {
		return nil, false
	}
	return o.ExpirationDate, true
}

// HasExpirationDate returns a boolean if a field has been set.
func (o *AwardType) HasExpirationDate() bool {
	if o != nil && !IsNil(o.ExpirationDate) {
		return true
	}

	return false
}

// SetExpirationDate gets a reference to the given string and assigns it to the ExpirationDate field.
func (o *AwardType) SetExpirationDate(v string) {
	o.ExpirationDate = &v
}

// GetExternalConfirmationNo returns the ExternalConfirmationNo field value if set, zero value otherwise.
func (o *AwardType) GetExternalConfirmationNo() string {
	if o == nil || IsNil(o.ExternalConfirmationNo) {
		var ret string
		return ret
	}
	return *o.ExternalConfirmationNo
}

// GetExternalConfirmationNoOk returns a tuple with the ExternalConfirmationNo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AwardType) GetExternalConfirmationNoOk() (*string, bool) {
	if o == nil || IsNil(o.ExternalConfirmationNo) {
		return nil, false
	}
	return o.ExternalConfirmationNo, true
}

// HasExternalConfirmationNo returns a boolean if a field has been set.
func (o *AwardType) HasExternalConfirmationNo() bool {
	if o != nil && !IsNil(o.ExternalConfirmationNo) {
		return true
	}

	return false
}

// SetExternalConfirmationNo gets a reference to the given string and assigns it to the ExternalConfirmationNo field.
func (o *AwardType) SetExternalConfirmationNo(v string) {
	o.ExternalConfirmationNo = &v
}

// GetExternalHotelCode returns the ExternalHotelCode field value if set, zero value otherwise.
func (o *AwardType) GetExternalHotelCode() string {
	if o == nil || IsNil(o.ExternalHotelCode) {
		var ret string
		return ret
	}
	return *o.ExternalHotelCode
}

// GetExternalHotelCodeOk returns a tuple with the ExternalHotelCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AwardType) GetExternalHotelCodeOk() (*string, bool) {
	if o == nil || IsNil(o.ExternalHotelCode) {
		return nil, false
	}
	return o.ExternalHotelCode, true
}

// HasExternalHotelCode returns a boolean if a field has been set.
func (o *AwardType) HasExternalHotelCode() bool {
	if o != nil && !IsNil(o.ExternalHotelCode) {
		return true
	}

	return false
}

// SetExternalHotelCode gets a reference to the given string and assigns it to the ExternalHotelCode field.
func (o *AwardType) SetExternalHotelCode(v string) {
	o.ExternalHotelCode = &v
}

// GetFBAInfo returns the FBAInfo field value if set, zero value otherwise.
func (o *AwardType) GetFBAInfo() FBAInfoType {
	if o == nil || IsNil(o.FBAInfo) {
		var ret FBAInfoType
		return ret
	}
	return *o.FBAInfo
}

// GetFBAInfoOk returns a tuple with the FBAInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AwardType) GetFBAInfoOk() (*FBAInfoType, bool) {
	if o == nil || IsNil(o.FBAInfo) {
		return nil, false
	}
	return o.FBAInfo, true
}

// HasFBAInfo returns a boolean if a field has been set.
func (o *AwardType) HasFBAInfo() bool {
	if o != nil && !IsNil(o.FBAInfo) {
		return true
	}

	return false
}

// SetFBAInfo gets a reference to the given FBAInfoType and assigns it to the FBAInfo field.
func (o *AwardType) SetFBAInfo(v FBAInfoType) {
	o.FBAInfo = &v
}

// GetGift returns the Gift field value if set, zero value otherwise.
func (o *AwardType) GetGift() bool {
	if o == nil || IsNil(o.Gift) {
		var ret bool
		return ret
	}
	return *o.Gift
}

// GetGiftOk returns a tuple with the Gift field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AwardType) GetGiftOk() (*bool, bool) {
	if o == nil || IsNil(o.Gift) {
		return nil, false
	}
	return o.Gift, true
}

// HasGift returns a boolean if a field has been set.
func (o *AwardType) HasGift() bool {
	if o != nil && !IsNil(o.Gift) {
		return true
	}

	return false
}

// SetGift gets a reference to the given bool and assigns it to the Gift field.
func (o *AwardType) SetGift(v bool) {
	o.Gift = &v
}

// GetHotelCategory returns the HotelCategory field value if set, zero value otherwise.
func (o *AwardType) GetHotelCategory() string {
	if o == nil || IsNil(o.HotelCategory) {
		var ret string
		return ret
	}
	return *o.HotelCategory
}

// GetHotelCategoryOk returns a tuple with the HotelCategory field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AwardType) GetHotelCategoryOk() (*string, bool) {
	if o == nil || IsNil(o.HotelCategory) {
		return nil, false
	}
	return o.HotelCategory, true
}

// HasHotelCategory returns a boolean if a field has been set.
func (o *AwardType) HasHotelCategory() bool {
	if o != nil && !IsNil(o.HotelCategory) {
		return true
	}

	return false
}

// SetHotelCategory gets a reference to the given string and assigns it to the HotelCategory field.
func (o *AwardType) SetHotelCategory(v string) {
	o.HotelCategory = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *AwardType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AwardType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *AwardType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *AwardType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetInstantlyRedeemable returns the InstantlyRedeemable field value if set, zero value otherwise.
func (o *AwardType) GetInstantlyRedeemable() bool {
	if o == nil || IsNil(o.InstantlyRedeemable) {
		var ret bool
		return ret
	}
	return *o.InstantlyRedeemable
}

// GetInstantlyRedeemableOk returns a tuple with the InstantlyRedeemable field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AwardType) GetInstantlyRedeemableOk() (*bool, bool) {
	if o == nil || IsNil(o.InstantlyRedeemable) {
		return nil, false
	}
	return o.InstantlyRedeemable, true
}

// HasInstantlyRedeemable returns a boolean if a field has been set.
func (o *AwardType) HasInstantlyRedeemable() bool {
	if o != nil && !IsNil(o.InstantlyRedeemable) {
		return true
	}

	return false
}

// SetInstantlyRedeemable gets a reference to the given bool and assigns it to the InstantlyRedeemable field.
func (o *AwardType) SetInstantlyRedeemable(v bool) {
	o.InstantlyRedeemable = &v
}

// GetLastModifierId returns the LastModifierId field value if set, zero value otherwise.
func (o *AwardType) GetLastModifierId() string {
	if o == nil || IsNil(o.LastModifierId) {
		var ret string
		return ret
	}
	return *o.LastModifierId
}

// GetLastModifierIdOk returns a tuple with the LastModifierId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AwardType) GetLastModifierIdOk() (*string, bool) {
	if o == nil || IsNil(o.LastModifierId) {
		return nil, false
	}
	return o.LastModifierId, true
}

// HasLastModifierId returns a boolean if a field has been set.
func (o *AwardType) HasLastModifierId() bool {
	if o != nil && !IsNil(o.LastModifierId) {
		return true
	}

	return false
}

// SetLastModifierId gets a reference to the given string and assigns it to the LastModifierId field.
func (o *AwardType) SetLastModifierId(v string) {
	o.LastModifierId = &v
}

// GetLastModifyDateTime returns the LastModifyDateTime field value if set, zero value otherwise.
func (o *AwardType) GetLastModifyDateTime() string {
	if o == nil || IsNil(o.LastModifyDateTime) {
		var ret string
		return ret
	}
	return *o.LastModifyDateTime
}

// GetLastModifyDateTimeOk returns a tuple with the LastModifyDateTime field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AwardType) GetLastModifyDateTimeOk() (*string, bool) {
	if o == nil || IsNil(o.LastModifyDateTime) {
		return nil, false
	}
	return o.LastModifyDateTime, true
}

// HasLastModifyDateTime returns a boolean if a field has been set.
func (o *AwardType) HasLastModifyDateTime() bool {
	if o != nil && !IsNil(o.LastModifyDateTime) {
		return true
	}

	return false
}

// SetLastModifyDateTime gets a reference to the given string and assigns it to the LastModifyDateTime field.
func (o *AwardType) SetLastModifyDateTime(v string) {
	o.LastModifyDateTime = &v
}

// GetMasterCertificiateNo returns the MasterCertificiateNo field value if set, zero value otherwise.
func (o *AwardType) GetMasterCertificiateNo() string {
	if o == nil || IsNil(o.MasterCertificiateNo) {
		var ret string
		return ret
	}
	return *o.MasterCertificiateNo
}

// GetMasterCertificiateNoOk returns a tuple with the MasterCertificiateNo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AwardType) GetMasterCertificiateNoOk() (*string, bool) {
	if o == nil || IsNil(o.MasterCertificiateNo) {
		return nil, false
	}
	return o.MasterCertificiateNo, true
}

// HasMasterCertificiateNo returns a boolean if a field has been set.
func (o *AwardType) HasMasterCertificiateNo() bool {
	if o != nil && !IsNil(o.MasterCertificiateNo) {
		return true
	}

	return false
}

// SetMasterCertificiateNo gets a reference to the given string and assigns it to the MasterCertificiateNo field.
func (o *AwardType) SetMasterCertificiateNo(v string) {
	o.MasterCertificiateNo = &v
}

// GetMembershipNo returns the MembershipNo field value if set, zero value otherwise.
func (o *AwardType) GetMembershipNo() string {
	if o == nil || IsNil(o.MembershipNo) {
		var ret string
		return ret
	}
	return *o.MembershipNo
}

// GetMembershipNoOk returns a tuple with the MembershipNo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AwardType) GetMembershipNoOk() (*string, bool) {
	if o == nil || IsNil(o.MembershipNo) {
		return nil, false
	}
	return o.MembershipNo, true
}

// HasMembershipNo returns a boolean if a field has been set.
func (o *AwardType) HasMembershipNo() bool {
	if o != nil && !IsNil(o.MembershipNo) {
		return true
	}

	return false
}

// SetMembershipNo gets a reference to the given string and assigns it to the MembershipNo field.
func (o *AwardType) SetMembershipNo(v string) {
	o.MembershipNo = &v
}

// GetNights returns the Nights field value if set, zero value otherwise.
func (o *AwardType) GetNights() int32 {
	if o == nil || IsNil(o.Nights) {
		var ret int32
		return ret
	}
	return *o.Nights
}

// GetNightsOk returns a tuple with the Nights field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AwardType) GetNightsOk() (*int32, bool) {
	if o == nil || IsNil(o.Nights) {
		return nil, false
	}
	return o.Nights, true
}

// HasNights returns a boolean if a field has been set.
func (o *AwardType) HasNights() bool {
	if o != nil && !IsNil(o.Nights) {
		return true
	}

	return false
}

// SetNights gets a reference to the given int32 and assigns it to the Nights field.
func (o *AwardType) SetNights(v int32) {
	o.Nights = &v
}

// GetPackage returns the Package field value if set, zero value otherwise.
func (o *AwardType) GetPackage() bool {
	if o == nil || IsNil(o.Package) {
		var ret bool
		return ret
	}
	return *o.Package
}

// GetPackageOk returns a tuple with the Package field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AwardType) GetPackageOk() (*bool, bool) {
	if o == nil || IsNil(o.Package) {
		return nil, false
	}
	return o.Package, true
}

// HasPackage returns a boolean if a field has been set.
func (o *AwardType) HasPackage() bool {
	if o != nil && !IsNil(o.Package) {
		return true
	}

	return false
}

// SetPackage gets a reference to the given bool and assigns it to the Package field.
func (o *AwardType) SetPackage(v bool) {
	o.Package = &v
}

// GetPaidUpgrade returns the PaidUpgrade field value if set, zero value otherwise.
func (o *AwardType) GetPaidUpgrade() bool {
	if o == nil || IsNil(o.PaidUpgrade) {
		var ret bool
		return ret
	}
	return *o.PaidUpgrade
}

// GetPaidUpgradeOk returns a tuple with the PaidUpgrade field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AwardType) GetPaidUpgradeOk() (*bool, bool) {
	if o == nil || IsNil(o.PaidUpgrade) {
		return nil, false
	}
	return o.PaidUpgrade, true
}

// HasPaidUpgrade returns a boolean if a field has been set.
func (o *AwardType) HasPaidUpgrade() bool {
	if o != nil && !IsNil(o.PaidUpgrade) {
		return true
	}

	return false
}

// SetPaidUpgrade gets a reference to the given bool and assigns it to the PaidUpgrade field.
func (o *AwardType) SetPaidUpgrade(v bool) {
	o.PaidUpgrade = &v
}

// GetPoints returns the Points field value if set, zero value otherwise.
func (o *AwardType) GetPoints() float32 {
	if o == nil || IsNil(o.Points) {
		var ret float32
		return ret
	}
	return *o.Points
}

// GetPointsOk returns a tuple with the Points field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AwardType) GetPointsOk() (*float32, bool) {
	if o == nil || IsNil(o.Points) {
		return nil, false
	}
	return o.Points, true
}

// HasPoints returns a boolean if a field has been set.
func (o *AwardType) HasPoints() bool {
	if o != nil && !IsNil(o.Points) {
		return true
	}

	return false
}

// SetPoints gets a reference to the given float32 and assigns it to the Points field.
func (o *AwardType) SetPoints(v float32) {
	o.Points = &v
}

// GetProfileId returns the ProfileId field value if set, zero value otherwise.
func (o *AwardType) GetProfileId() ProfileId {
	if o == nil || IsNil(o.ProfileId) {
		var ret ProfileId
		return ret
	}
	return *o.ProfileId
}

// GetProfileIdOk returns a tuple with the ProfileId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AwardType) GetProfileIdOk() (*ProfileId, bool) {
	if o == nil || IsNil(o.ProfileId) {
		return nil, false
	}
	return o.ProfileId, true
}

// HasProfileId returns a boolean if a field has been set.
func (o *AwardType) HasProfileId() bool {
	if o != nil && !IsNil(o.ProfileId) {
		return true
	}

	return false
}

// SetProfileId gets a reference to the given ProfileId and assigns it to the ProfileId field.
func (o *AwardType) SetProfileId(v ProfileId) {
	o.ProfileId = &v
}

// GetPurgeDate returns the PurgeDate field value if set, zero value otherwise.
func (o *AwardType) GetPurgeDate() string {
	if o == nil || IsNil(o.PurgeDate) {
		var ret string
		return ret
	}
	return *o.PurgeDate
}

// GetPurgeDateOk returns a tuple with the PurgeDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AwardType) GetPurgeDateOk() (*string, bool) {
	if o == nil || IsNil(o.PurgeDate) {
		return nil, false
	}
	return o.PurgeDate, true
}

// HasPurgeDate returns a boolean if a field has been set.
func (o *AwardType) HasPurgeDate() bool {
	if o != nil && !IsNil(o.PurgeDate) {
		return true
	}

	return false
}

// SetPurgeDate gets a reference to the given string and assigns it to the PurgeDate field.
func (o *AwardType) SetPurgeDate(v string) {
	o.PurgeDate = &v
}

// GetQuantity returns the Quantity field value if set, zero value otherwise.
func (o *AwardType) GetQuantity() int32 {
	if o == nil || IsNil(o.Quantity) {
		var ret int32
		return ret
	}
	return *o.Quantity
}

// GetQuantityOk returns a tuple with the Quantity field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AwardType) GetQuantityOk() (*int32, bool) {
	if o == nil || IsNil(o.Quantity) {
		return nil, false
	}
	return o.Quantity, true
}

// HasQuantity returns a boolean if a field has been set.
func (o *AwardType) HasQuantity() bool {
	if o != nil && !IsNil(o.Quantity) {
		return true
	}

	return false
}

// SetQuantity gets a reference to the given int32 and assigns it to the Quantity field.
func (o *AwardType) SetQuantity(v int32) {
	o.Quantity = &v
}

// GetReservationCertificateType returns the ReservationCertificateType field value if set, zero value otherwise.
func (o *AwardType) GetReservationCertificateType() ReservationCertificateType {
	if o == nil || IsNil(o.ReservationCertificateType) {
		var ret ReservationCertificateType
		return ret
	}
	return *o.ReservationCertificateType
}

// GetReservationCertificateTypeOk returns a tuple with the ReservationCertificateType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AwardType) GetReservationCertificateTypeOk() (*ReservationCertificateType, bool) {
	if o == nil || IsNil(o.ReservationCertificateType) {
		return nil, false
	}
	return o.ReservationCertificateType, true
}

// HasReservationCertificateType returns a boolean if a field has been set.
func (o *AwardType) HasReservationCertificateType() bool {
	if o != nil && !IsNil(o.ReservationCertificateType) {
		return true
	}

	return false
}

// SetReservationCertificateType gets a reference to the given ReservationCertificateType and assigns it to the ReservationCertificateType field.
func (o *AwardType) SetReservationCertificateType(v ReservationCertificateType) {
	o.ReservationCertificateType = &v
}

// GetReservationId returns the ReservationId field value if set, zero value otherwise.
func (o *AwardType) GetReservationId() ReservationId {
	if o == nil || IsNil(o.ReservationId) {
		var ret ReservationId
		return ret
	}
	return *o.ReservationId
}

// GetReservationIdOk returns a tuple with the ReservationId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AwardType) GetReservationIdOk() (*ReservationId, bool) {
	if o == nil || IsNil(o.ReservationId) {
		return nil, false
	}
	return o.ReservationId, true
}

// HasReservationId returns a boolean if a field has been set.
func (o *AwardType) HasReservationId() bool {
	if o != nil && !IsNil(o.ReservationId) {
		return true
	}

	return false
}

// SetReservationId gets a reference to the given ReservationId and assigns it to the ReservationId field.
func (o *AwardType) SetReservationId(v ReservationId) {
	o.ReservationId = &v
}

// GetRewardCertificateType returns the RewardCertificateType field value if set, zero value otherwise.
func (o *AwardType) GetRewardCertificateType() RewardCertificateType {
	if o == nil || IsNil(o.RewardCertificateType) {
		var ret RewardCertificateType
		return ret
	}
	return *o.RewardCertificateType
}

// GetRewardCertificateTypeOk returns a tuple with the RewardCertificateType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AwardType) GetRewardCertificateTypeOk() (*RewardCertificateType, bool) {
	if o == nil || IsNil(o.RewardCertificateType) {
		return nil, false
	}
	return o.RewardCertificateType, true
}

// HasRewardCertificateType returns a boolean if a field has been set.
func (o *AwardType) HasRewardCertificateType() bool {
	if o != nil && !IsNil(o.RewardCertificateType) {
		return true
	}

	return false
}

// SetRewardCertificateType gets a reference to the given RewardCertificateType and assigns it to the RewardCertificateType field.
func (o *AwardType) SetRewardCertificateType(v RewardCertificateType) {
	o.RewardCertificateType = &v
}

// GetSourceType returns the SourceType field value if set, zero value otherwise.
func (o *AwardType) GetSourceType() string {
	if o == nil || IsNil(o.SourceType) {
		var ret string
		return ret
	}
	return *o.SourceType
}

// GetSourceTypeOk returns a tuple with the SourceType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AwardType) GetSourceTypeOk() (*string, bool) {
	if o == nil || IsNil(o.SourceType) {
		return nil, false
	}
	return o.SourceType, true
}

// HasSourceType returns a boolean if a field has been set.
func (o *AwardType) HasSourceType() bool {
	if o != nil && !IsNil(o.SourceType) {
		return true
	}

	return false
}

// SetSourceType gets a reference to the given string and assigns it to the SourceType field.
func (o *AwardType) SetSourceType(v string) {
	o.SourceType = &v
}

// GetStatus returns the Status field value if set, zero value otherwise.
func (o *AwardType) GetStatus() AwardStatusType {
	if o == nil || IsNil(o.Status) {
		var ret AwardStatusType
		return ret
	}
	return *o.Status
}

// GetStatusOk returns a tuple with the Status field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AwardType) GetStatusOk() (*AwardStatusType, bool) {
	if o == nil || IsNil(o.Status) {
		return nil, false
	}
	return o.Status, true
}

// HasStatus returns a boolean if a field has been set.
func (o *AwardType) HasStatus() bool {
	if o != nil && !IsNil(o.Status) {
		return true
	}

	return false
}

// SetStatus gets a reference to the given AwardStatusType and assigns it to the Status field.
func (o *AwardType) SetStatus(v AwardStatusType) {
	o.Status = &v
}

// GetUpgrade returns the Upgrade field value if set, zero value otherwise.
func (o *AwardType) GetUpgrade() bool {
	if o == nil || IsNil(o.Upgrade) {
		var ret bool
		return ret
	}
	return *o.Upgrade
}

// GetUpgradeOk returns a tuple with the Upgrade field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AwardType) GetUpgradeOk() (*bool, bool) {
	if o == nil || IsNil(o.Upgrade) {
		return nil, false
	}
	return o.Upgrade, true
}

// HasUpgrade returns a boolean if a field has been set.
func (o *AwardType) HasUpgrade() bool {
	if o != nil && !IsNil(o.Upgrade) {
		return true
	}

	return false
}

// SetUpgrade gets a reference to the given bool and assigns it to the Upgrade field.
func (o *AwardType) SetUpgrade(v bool) {
	o.Upgrade = &v
}

func (o AwardType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o AwardType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AwardCode) {
		toSerialize["awardCode"] = o.AwardCode
	}
	if !IsNil(o.AwardType) {
		toSerialize["awardType"] = o.AwardType
	}
	if !IsNil(o.CategoryValid) {
		toSerialize["categoryValid"] = o.CategoryValid
	}
	if !IsNil(o.CertificateNo) {
		toSerialize["certificateNo"] = o.CertificateNo
	}
	if !IsNil(o.CreateDateTime) {
		toSerialize["createDateTime"] = o.CreateDateTime
	}
	if !IsNil(o.CreatorId) {
		toSerialize["creatorId"] = o.CreatorId
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.DetailedCertificate) {
		toSerialize["detailedCertificate"] = o.DetailedCertificate
	}
	if !IsNil(o.DisplaySequence) {
		toSerialize["displaySequence"] = o.DisplaySequence
	}
	if !IsNil(o.ExpirationDate) {
		toSerialize["expirationDate"] = o.ExpirationDate
	}
	if !IsNil(o.ExternalConfirmationNo) {
		toSerialize["externalConfirmationNo"] = o.ExternalConfirmationNo
	}
	if !IsNil(o.ExternalHotelCode) {
		toSerialize["externalHotelCode"] = o.ExternalHotelCode
	}
	if !IsNil(o.FBAInfo) {
		toSerialize["fBAInfo"] = o.FBAInfo
	}
	if !IsNil(o.Gift) {
		toSerialize["gift"] = o.Gift
	}
	if !IsNil(o.HotelCategory) {
		toSerialize["hotelCategory"] = o.HotelCategory
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.InstantlyRedeemable) {
		toSerialize["instantlyRedeemable"] = o.InstantlyRedeemable
	}
	if !IsNil(o.LastModifierId) {
		toSerialize["lastModifierId"] = o.LastModifierId
	}
	if !IsNil(o.LastModifyDateTime) {
		toSerialize["lastModifyDateTime"] = o.LastModifyDateTime
	}
	if !IsNil(o.MasterCertificiateNo) {
		toSerialize["masterCertificiateNo"] = o.MasterCertificiateNo
	}
	if !IsNil(o.MembershipNo) {
		toSerialize["membershipNo"] = o.MembershipNo
	}
	if !IsNil(o.Nights) {
		toSerialize["nights"] = o.Nights
	}
	if !IsNil(o.Package) {
		toSerialize["package"] = o.Package
	}
	if !IsNil(o.PaidUpgrade) {
		toSerialize["paidUpgrade"] = o.PaidUpgrade
	}
	if !IsNil(o.Points) {
		toSerialize["points"] = o.Points
	}
	if !IsNil(o.ProfileId) {
		toSerialize["profileId"] = o.ProfileId
	}
	if !IsNil(o.PurgeDate) {
		toSerialize["purgeDate"] = o.PurgeDate
	}
	if !IsNil(o.Quantity) {
		toSerialize["quantity"] = o.Quantity
	}
	if !IsNil(o.ReservationCertificateType) {
		toSerialize["reservationCertificateType"] = o.ReservationCertificateType
	}
	if !IsNil(o.ReservationId) {
		toSerialize["reservationId"] = o.ReservationId
	}
	if !IsNil(o.RewardCertificateType) {
		toSerialize["rewardCertificateType"] = o.RewardCertificateType
	}
	if !IsNil(o.SourceType) {
		toSerialize["sourceType"] = o.SourceType
	}
	if !IsNil(o.Status) {
		toSerialize["status"] = o.Status
	}
	if !IsNil(o.Upgrade) {
		toSerialize["upgrade"] = o.Upgrade
	}
	return toSerialize, nil
}

type NullableAwardType struct {
	value *AwardType
	isSet bool
}

func (v NullableAwardType) Get() *AwardType {
	return v.value
}

func (v *NullableAwardType) Set(val *AwardType) {
	v.value = val
	v.isSet = true
}

func (v NullableAwardType) IsSet() bool {
	return v.isSet
}

func (v *NullableAwardType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAwardType(val *AwardType) *NullableAwardType {
	return &NullableAwardType{value: val, isSet: true}
}

func (v NullableAwardType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAwardType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


