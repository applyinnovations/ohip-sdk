/*
OPERA Cloud Front Desk Operations Service

APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fof

import (
	"encoding/json"
)

// checks if the ECertificateType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ECertificateType{}

// ECertificateType E-Certificates details.
type ECertificateType struct {
	AwardId *AwardId `json:"awardId,omitempty"`
	// Award points if any in case of certificate use membership award.
	AwardPoints *int32 `json:"awardPoints,omitempty"`
	// Date on which the cancellation was requested.
	CancelRequestDate *string `json:"cancelRequestDate,omitempty"`
	// System generated unique certificate id.
	CertificateId *int32 `json:"certificateId,omitempty"`
	// Printed certificate no. This has to be unique.
	CertificateNo *string `json:"certificateNo,omitempty"`
	ConsumptionDetail *ECertificateConsumptionType `json:"consumptionDetail,omitempty"`
	// External reference from which the record is created.
	DatabaseId *string `json:"databaseId,omitempty"`
	ECertificateInfo *ECertificateInfoType `json:"eCertificateInfo,omitempty"`
	// Date of expiry.
	ExpiryDate *string `json:"expiryDate,omitempty"`
	// Number of times e-certificate is already extended.
	ExtensionCount *int32 `json:"extensionCount,omitempty"`
	GenerationDetail *ECertificateGenerationType `json:"generationDetail,omitempty"`
	// Seq of the in lieu of certificate. 1..n. original certificate will be treated as null = 0.
	InLieuSequence *int32 `json:"inLieuSequence,omitempty"`
	// Date the record was marked as inactive.
	InactiveDate *string `json:"inactiveDate,omitempty"`
	// Date when certificate was issued.
	IssueDate *string `json:"issueDate,omitempty"`
	IssueType *ECertificateIssueType `json:"issueType,omitempty"`
	// New Date of expiry to extend e-certificate.
	NewExpiryDate *string `json:"newExpiryDate,omitempty"`
	// In case of in lieu of certificate this will contain the original certificate no.
	OriginalCertificateNo *string `json:"originalCertificateNo,omitempty"`
	// In case of in lieu of certificate this will contain the original voucher no.
	OriginalVoucherNo *string `json:"originalVoucherNo,omitempty"`
	// Print status of the certificate.
	Printed *bool `json:"printed,omitempty"`
	ProfileId *ProfileId `json:"profileId,omitempty"`
	Source *ECertificateIssueSourceType `json:"source,omitempty"`
	Status *ECertificateStatusType `json:"status,omitempty"`
	// System generated unique voucher number.
	VoucherNo *string `json:"voucherNo,omitempty"`
}

// NewECertificateType instantiates a new ECertificateType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewECertificateType() *ECertificateType {
	this := ECertificateType{}
	return &this
}

// NewECertificateTypeWithDefaults instantiates a new ECertificateType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewECertificateTypeWithDefaults() *ECertificateType {
	this := ECertificateType{}
	return &this
}

// GetAwardId returns the AwardId field value if set, zero value otherwise.
func (o *ECertificateType) GetAwardId() AwardId {
	if o == nil || IsNil(o.AwardId) {
		var ret AwardId
		return ret
	}
	return *o.AwardId
}

// GetAwardIdOk returns a tuple with the AwardId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateType) GetAwardIdOk() (*AwardId, bool) {
	if o == nil || IsNil(o.AwardId) {
		return nil, false
	}
	return o.AwardId, true
}

// HasAwardId returns a boolean if a field has been set.
func (o *ECertificateType) HasAwardId() bool {
	if o != nil && !IsNil(o.AwardId) {
		return true
	}

	return false
}

// SetAwardId gets a reference to the given AwardId and assigns it to the AwardId field.
func (o *ECertificateType) SetAwardId(v AwardId) {
	o.AwardId = &v
}

// GetAwardPoints returns the AwardPoints field value if set, zero value otherwise.
func (o *ECertificateType) GetAwardPoints() int32 {
	if o == nil || IsNil(o.AwardPoints) {
		var ret int32
		return ret
	}
	return *o.AwardPoints
}

// GetAwardPointsOk returns a tuple with the AwardPoints field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateType) GetAwardPointsOk() (*int32, bool) {
	if o == nil || IsNil(o.AwardPoints) {
		return nil, false
	}
	return o.AwardPoints, true
}

// HasAwardPoints returns a boolean if a field has been set.
func (o *ECertificateType) HasAwardPoints() bool {
	if o != nil && !IsNil(o.AwardPoints) {
		return true
	}

	return false
}

// SetAwardPoints gets a reference to the given int32 and assigns it to the AwardPoints field.
func (o *ECertificateType) SetAwardPoints(v int32) {
	o.AwardPoints = &v
}

// GetCancelRequestDate returns the CancelRequestDate field value if set, zero value otherwise.
func (o *ECertificateType) GetCancelRequestDate() string {
	if o == nil || IsNil(o.CancelRequestDate) {
		var ret string
		return ret
	}
	return *o.CancelRequestDate
}

// GetCancelRequestDateOk returns a tuple with the CancelRequestDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateType) GetCancelRequestDateOk() (*string, bool) {
	if o == nil || IsNil(o.CancelRequestDate) {
		return nil, false
	}
	return o.CancelRequestDate, true
}

// HasCancelRequestDate returns a boolean if a field has been set.
func (o *ECertificateType) HasCancelRequestDate() bool {
	if o != nil && !IsNil(o.CancelRequestDate) {
		return true
	}

	return false
}

// SetCancelRequestDate gets a reference to the given string and assigns it to the CancelRequestDate field.
func (o *ECertificateType) SetCancelRequestDate(v string) {
	o.CancelRequestDate = &v
}

// GetCertificateId returns the CertificateId field value if set, zero value otherwise.
func (o *ECertificateType) GetCertificateId() int32 {
	if o == nil || IsNil(o.CertificateId) {
		var ret int32
		return ret
	}
	return *o.CertificateId
}

// GetCertificateIdOk returns a tuple with the CertificateId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateType) GetCertificateIdOk() (*int32, bool) {
	if o == nil || IsNil(o.CertificateId) {
		return nil, false
	}
	return o.CertificateId, true
}

// HasCertificateId returns a boolean if a field has been set.
func (o *ECertificateType) HasCertificateId() bool {
	if o != nil && !IsNil(o.CertificateId) {
		return true
	}

	return false
}

// SetCertificateId gets a reference to the given int32 and assigns it to the CertificateId field.
func (o *ECertificateType) SetCertificateId(v int32) {
	o.CertificateId = &v
}

// GetCertificateNo returns the CertificateNo field value if set, zero value otherwise.
func (o *ECertificateType) GetCertificateNo() string {
	if o == nil || IsNil(o.CertificateNo) {
		var ret string
		return ret
	}
	return *o.CertificateNo
}

// GetCertificateNoOk returns a tuple with the CertificateNo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateType) GetCertificateNoOk() (*string, bool) {
	if o == nil || IsNil(o.CertificateNo) {
		return nil, false
	}
	return o.CertificateNo, true
}

// HasCertificateNo returns a boolean if a field has been set.
func (o *ECertificateType) HasCertificateNo() bool {
	if o != nil && !IsNil(o.CertificateNo) {
		return true
	}

	return false
}

// SetCertificateNo gets a reference to the given string and assigns it to the CertificateNo field.
func (o *ECertificateType) SetCertificateNo(v string) {
	o.CertificateNo = &v
}

// GetConsumptionDetail returns the ConsumptionDetail field value if set, zero value otherwise.
func (o *ECertificateType) GetConsumptionDetail() ECertificateConsumptionType {
	if o == nil || IsNil(o.ConsumptionDetail) {
		var ret ECertificateConsumptionType
		return ret
	}
	return *o.ConsumptionDetail
}

// GetConsumptionDetailOk returns a tuple with the ConsumptionDetail field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateType) GetConsumptionDetailOk() (*ECertificateConsumptionType, bool) {
	if o == nil || IsNil(o.ConsumptionDetail) {
		return nil, false
	}
	return o.ConsumptionDetail, true
}

// HasConsumptionDetail returns a boolean if a field has been set.
func (o *ECertificateType) HasConsumptionDetail() bool {
	if o != nil && !IsNil(o.ConsumptionDetail) {
		return true
	}

	return false
}

// SetConsumptionDetail gets a reference to the given ECertificateConsumptionType and assigns it to the ConsumptionDetail field.
func (o *ECertificateType) SetConsumptionDetail(v ECertificateConsumptionType) {
	o.ConsumptionDetail = &v
}

// GetDatabaseId returns the DatabaseId field value if set, zero value otherwise.
func (o *ECertificateType) GetDatabaseId() string {
	if o == nil || IsNil(o.DatabaseId) {
		var ret string
		return ret
	}
	return *o.DatabaseId
}

// GetDatabaseIdOk returns a tuple with the DatabaseId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateType) GetDatabaseIdOk() (*string, bool) {
	if o == nil || IsNil(o.DatabaseId) {
		return nil, false
	}
	return o.DatabaseId, true
}

// HasDatabaseId returns a boolean if a field has been set.
func (o *ECertificateType) HasDatabaseId() bool {
	if o != nil && !IsNil(o.DatabaseId) {
		return true
	}

	return false
}

// SetDatabaseId gets a reference to the given string and assigns it to the DatabaseId field.
func (o *ECertificateType) SetDatabaseId(v string) {
	o.DatabaseId = &v
}

// GetECertificateInfo returns the ECertificateInfo field value if set, zero value otherwise.
func (o *ECertificateType) GetECertificateInfo() ECertificateInfoType {
	if o == nil || IsNil(o.ECertificateInfo) {
		var ret ECertificateInfoType
		return ret
	}
	return *o.ECertificateInfo
}

// GetECertificateInfoOk returns a tuple with the ECertificateInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateType) GetECertificateInfoOk() (*ECertificateInfoType, bool) {
	if o == nil || IsNil(o.ECertificateInfo) {
		return nil, false
	}
	return o.ECertificateInfo, true
}

// HasECertificateInfo returns a boolean if a field has been set.
func (o *ECertificateType) HasECertificateInfo() bool {
	if o != nil && !IsNil(o.ECertificateInfo) {
		return true
	}

	return false
}

// SetECertificateInfo gets a reference to the given ECertificateInfoType and assigns it to the ECertificateInfo field.
func (o *ECertificateType) SetECertificateInfo(v ECertificateInfoType) {
	o.ECertificateInfo = &v
}

// GetExpiryDate returns the ExpiryDate field value if set, zero value otherwise.
func (o *ECertificateType) GetExpiryDate() string {
	if o == nil || IsNil(o.ExpiryDate) {
		var ret string
		return ret
	}
	return *o.ExpiryDate
}

// GetExpiryDateOk returns a tuple with the ExpiryDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateType) GetExpiryDateOk() (*string, bool) {
	if o == nil || IsNil(o.ExpiryDate) {
		return nil, false
	}
	return o.ExpiryDate, true
}

// HasExpiryDate returns a boolean if a field has been set.
func (o *ECertificateType) HasExpiryDate() bool {
	if o != nil && !IsNil(o.ExpiryDate) {
		return true
	}

	return false
}

// SetExpiryDate gets a reference to the given string and assigns it to the ExpiryDate field.
func (o *ECertificateType) SetExpiryDate(v string) {
	o.ExpiryDate = &v
}

// GetExtensionCount returns the ExtensionCount field value if set, zero value otherwise.
func (o *ECertificateType) GetExtensionCount() int32 {
	if o == nil || IsNil(o.ExtensionCount) {
		var ret int32
		return ret
	}
	return *o.ExtensionCount
}

// GetExtensionCountOk returns a tuple with the ExtensionCount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateType) GetExtensionCountOk() (*int32, bool) {
	if o == nil || IsNil(o.ExtensionCount) {
		return nil, false
	}
	return o.ExtensionCount, true
}

// HasExtensionCount returns a boolean if a field has been set.
func (o *ECertificateType) HasExtensionCount() bool {
	if o != nil && !IsNil(o.ExtensionCount) {
		return true
	}

	return false
}

// SetExtensionCount gets a reference to the given int32 and assigns it to the ExtensionCount field.
func (o *ECertificateType) SetExtensionCount(v int32) {
	o.ExtensionCount = &v
}

// GetGenerationDetail returns the GenerationDetail field value if set, zero value otherwise.
func (o *ECertificateType) GetGenerationDetail() ECertificateGenerationType {
	if o == nil || IsNil(o.GenerationDetail) {
		var ret ECertificateGenerationType
		return ret
	}
	return *o.GenerationDetail
}

// GetGenerationDetailOk returns a tuple with the GenerationDetail field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateType) GetGenerationDetailOk() (*ECertificateGenerationType, bool) {
	if o == nil || IsNil(o.GenerationDetail) {
		return nil, false
	}
	return o.GenerationDetail, true
}

// HasGenerationDetail returns a boolean if a field has been set.
func (o *ECertificateType) HasGenerationDetail() bool {
	if o != nil && !IsNil(o.GenerationDetail) {
		return true
	}

	return false
}

// SetGenerationDetail gets a reference to the given ECertificateGenerationType and assigns it to the GenerationDetail field.
func (o *ECertificateType) SetGenerationDetail(v ECertificateGenerationType) {
	o.GenerationDetail = &v
}

// GetInLieuSequence returns the InLieuSequence field value if set, zero value otherwise.
func (o *ECertificateType) GetInLieuSequence() int32 {
	if o == nil || IsNil(o.InLieuSequence) {
		var ret int32
		return ret
	}
	return *o.InLieuSequence
}

// GetInLieuSequenceOk returns a tuple with the InLieuSequence field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateType) GetInLieuSequenceOk() (*int32, bool) {
	if o == nil || IsNil(o.InLieuSequence) {
		return nil, false
	}
	return o.InLieuSequence, true
}

// HasInLieuSequence returns a boolean if a field has been set.
func (o *ECertificateType) HasInLieuSequence() bool {
	if o != nil && !IsNil(o.InLieuSequence) {
		return true
	}

	return false
}

// SetInLieuSequence gets a reference to the given int32 and assigns it to the InLieuSequence field.
func (o *ECertificateType) SetInLieuSequence(v int32) {
	o.InLieuSequence = &v
}

// GetInactiveDate returns the InactiveDate field value if set, zero value otherwise.
func (o *ECertificateType) GetInactiveDate() string {
	if o == nil || IsNil(o.InactiveDate) {
		var ret string
		return ret
	}
	return *o.InactiveDate
}

// GetInactiveDateOk returns a tuple with the InactiveDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateType) GetInactiveDateOk() (*string, bool) {
	if o == nil || IsNil(o.InactiveDate) {
		return nil, false
	}
	return o.InactiveDate, true
}

// HasInactiveDate returns a boolean if a field has been set.
func (o *ECertificateType) HasInactiveDate() bool {
	if o != nil && !IsNil(o.InactiveDate) {
		return true
	}

	return false
}

// SetInactiveDate gets a reference to the given string and assigns it to the InactiveDate field.
func (o *ECertificateType) SetInactiveDate(v string) {
	o.InactiveDate = &v
}

// GetIssueDate returns the IssueDate field value if set, zero value otherwise.
func (o *ECertificateType) GetIssueDate() string {
	if o == nil || IsNil(o.IssueDate) {
		var ret string
		return ret
	}
	return *o.IssueDate
}

// GetIssueDateOk returns a tuple with the IssueDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateType) GetIssueDateOk() (*string, bool) {
	if o == nil || IsNil(o.IssueDate) {
		return nil, false
	}
	return o.IssueDate, true
}

// HasIssueDate returns a boolean if a field has been set.
func (o *ECertificateType) HasIssueDate() bool {
	if o != nil && !IsNil(o.IssueDate) {
		return true
	}

	return false
}

// SetIssueDate gets a reference to the given string and assigns it to the IssueDate field.
func (o *ECertificateType) SetIssueDate(v string) {
	o.IssueDate = &v
}

// GetIssueType returns the IssueType field value if set, zero value otherwise.
func (o *ECertificateType) GetIssueType() ECertificateIssueType {
	if o == nil || IsNil(o.IssueType) {
		var ret ECertificateIssueType
		return ret
	}
	return *o.IssueType
}

// GetIssueTypeOk returns a tuple with the IssueType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateType) GetIssueTypeOk() (*ECertificateIssueType, bool) {
	if o == nil || IsNil(o.IssueType) {
		return nil, false
	}
	return o.IssueType, true
}

// HasIssueType returns a boolean if a field has been set.
func (o *ECertificateType) HasIssueType() bool {
	if o != nil && !IsNil(o.IssueType) {
		return true
	}

	return false
}

// SetIssueType gets a reference to the given ECertificateIssueType and assigns it to the IssueType field.
func (o *ECertificateType) SetIssueType(v ECertificateIssueType) {
	o.IssueType = &v
}

// GetNewExpiryDate returns the NewExpiryDate field value if set, zero value otherwise.
func (o *ECertificateType) GetNewExpiryDate() string {
	if o == nil || IsNil(o.NewExpiryDate) {
		var ret string
		return ret
	}
	return *o.NewExpiryDate
}

// GetNewExpiryDateOk returns a tuple with the NewExpiryDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateType) GetNewExpiryDateOk() (*string, bool) {
	if o == nil || IsNil(o.NewExpiryDate) {
		return nil, false
	}
	return o.NewExpiryDate, true
}

// HasNewExpiryDate returns a boolean if a field has been set.
func (o *ECertificateType) HasNewExpiryDate() bool {
	if o != nil && !IsNil(o.NewExpiryDate) {
		return true
	}

	return false
}

// SetNewExpiryDate gets a reference to the given string and assigns it to the NewExpiryDate field.
func (o *ECertificateType) SetNewExpiryDate(v string) {
	o.NewExpiryDate = &v
}

// GetOriginalCertificateNo returns the OriginalCertificateNo field value if set, zero value otherwise.
func (o *ECertificateType) GetOriginalCertificateNo() string {
	if o == nil || IsNil(o.OriginalCertificateNo) {
		var ret string
		return ret
	}
	return *o.OriginalCertificateNo
}

// GetOriginalCertificateNoOk returns a tuple with the OriginalCertificateNo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateType) GetOriginalCertificateNoOk() (*string, bool) {
	if o == nil || IsNil(o.OriginalCertificateNo) {
		return nil, false
	}
	return o.OriginalCertificateNo, true
}

// HasOriginalCertificateNo returns a boolean if a field has been set.
func (o *ECertificateType) HasOriginalCertificateNo() bool {
	if o != nil && !IsNil(o.OriginalCertificateNo) {
		return true
	}

	return false
}

// SetOriginalCertificateNo gets a reference to the given string and assigns it to the OriginalCertificateNo field.
func (o *ECertificateType) SetOriginalCertificateNo(v string) {
	o.OriginalCertificateNo = &v
}

// GetOriginalVoucherNo returns the OriginalVoucherNo field value if set, zero value otherwise.
func (o *ECertificateType) GetOriginalVoucherNo() string {
	if o == nil || IsNil(o.OriginalVoucherNo) {
		var ret string
		return ret
	}
	return *o.OriginalVoucherNo
}

// GetOriginalVoucherNoOk returns a tuple with the OriginalVoucherNo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateType) GetOriginalVoucherNoOk() (*string, bool) {
	if o == nil || IsNil(o.OriginalVoucherNo) {
		return nil, false
	}
	return o.OriginalVoucherNo, true
}

// HasOriginalVoucherNo returns a boolean if a field has been set.
func (o *ECertificateType) HasOriginalVoucherNo() bool {
	if o != nil && !IsNil(o.OriginalVoucherNo) {
		return true
	}

	return false
}

// SetOriginalVoucherNo gets a reference to the given string and assigns it to the OriginalVoucherNo field.
func (o *ECertificateType) SetOriginalVoucherNo(v string) {
	o.OriginalVoucherNo = &v
}

// GetPrinted returns the Printed field value if set, zero value otherwise.
func (o *ECertificateType) GetPrinted() bool {
	if o == nil || IsNil(o.Printed) {
		var ret bool
		return ret
	}
	return *o.Printed
}

// GetPrintedOk returns a tuple with the Printed field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateType) GetPrintedOk() (*bool, bool) {
	if o == nil || IsNil(o.Printed) {
		return nil, false
	}
	return o.Printed, true
}

// HasPrinted returns a boolean if a field has been set.
func (o *ECertificateType) HasPrinted() bool {
	if o != nil && !IsNil(o.Printed) {
		return true
	}

	return false
}

// SetPrinted gets a reference to the given bool and assigns it to the Printed field.
func (o *ECertificateType) SetPrinted(v bool) {
	o.Printed = &v
}

// GetProfileId returns the ProfileId field value if set, zero value otherwise.
func (o *ECertificateType) GetProfileId() ProfileId {
	if o == nil || IsNil(o.ProfileId) {
		var ret ProfileId
		return ret
	}
	return *o.ProfileId
}

// GetProfileIdOk returns a tuple with the ProfileId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateType) GetProfileIdOk() (*ProfileId, bool) {
	if o == nil || IsNil(o.ProfileId) {
		return nil, false
	}
	return o.ProfileId, true
}

// HasProfileId returns a boolean if a field has been set.
func (o *ECertificateType) HasProfileId() bool {
	if o != nil && !IsNil(o.ProfileId) {
		return true
	}

	return false
}

// SetProfileId gets a reference to the given ProfileId and assigns it to the ProfileId field.
func (o *ECertificateType) SetProfileId(v ProfileId) {
	o.ProfileId = &v
}

// GetSource returns the Source field value if set, zero value otherwise.
func (o *ECertificateType) GetSource() ECertificateIssueSourceType {
	if o == nil || IsNil(o.Source) {
		var ret ECertificateIssueSourceType
		return ret
	}
	return *o.Source
}

// GetSourceOk returns a tuple with the Source field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateType) GetSourceOk() (*ECertificateIssueSourceType, bool) {
	if o == nil || IsNil(o.Source) {
		return nil, false
	}
	return o.Source, true
}

// HasSource returns a boolean if a field has been set.
func (o *ECertificateType) HasSource() bool {
	if o != nil && !IsNil(o.Source) {
		return true
	}

	return false
}

// SetSource gets a reference to the given ECertificateIssueSourceType and assigns it to the Source field.
func (o *ECertificateType) SetSource(v ECertificateIssueSourceType) {
	o.Source = &v
}

// GetStatus returns the Status field value if set, zero value otherwise.
func (o *ECertificateType) GetStatus() ECertificateStatusType {
	if o == nil || IsNil(o.Status) {
		var ret ECertificateStatusType
		return ret
	}
	return *o.Status
}

// GetStatusOk returns a tuple with the Status field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateType) GetStatusOk() (*ECertificateStatusType, bool) {
	if o == nil || IsNil(o.Status) {
		return nil, false
	}
	return o.Status, true
}

// HasStatus returns a boolean if a field has been set.
func (o *ECertificateType) HasStatus() bool {
	if o != nil && !IsNil(o.Status) {
		return true
	}

	return false
}

// SetStatus gets a reference to the given ECertificateStatusType and assigns it to the Status field.
func (o *ECertificateType) SetStatus(v ECertificateStatusType) {
	o.Status = &v
}

// GetVoucherNo returns the VoucherNo field value if set, zero value otherwise.
func (o *ECertificateType) GetVoucherNo() string {
	if o == nil || IsNil(o.VoucherNo) {
		var ret string
		return ret
	}
	return *o.VoucherNo
}

// GetVoucherNoOk returns a tuple with the VoucherNo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateType) GetVoucherNoOk() (*string, bool) {
	if o == nil || IsNil(o.VoucherNo) {
		return nil, false
	}
	return o.VoucherNo, true
}

// HasVoucherNo returns a boolean if a field has been set.
func (o *ECertificateType) HasVoucherNo() bool {
	if o != nil && !IsNil(o.VoucherNo) {
		return true
	}

	return false
}

// SetVoucherNo gets a reference to the given string and assigns it to the VoucherNo field.
func (o *ECertificateType) SetVoucherNo(v string) {
	o.VoucherNo = &v
}

func (o ECertificateType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ECertificateType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AwardId) {
		toSerialize["awardId"] = o.AwardId
	}
	if !IsNil(o.AwardPoints) {
		toSerialize["awardPoints"] = o.AwardPoints
	}
	if !IsNil(o.CancelRequestDate) {
		toSerialize["cancelRequestDate"] = o.CancelRequestDate
	}
	if !IsNil(o.CertificateId) {
		toSerialize["certificateId"] = o.CertificateId
	}
	if !IsNil(o.CertificateNo) {
		toSerialize["certificateNo"] = o.CertificateNo
	}
	if !IsNil(o.ConsumptionDetail) {
		toSerialize["consumptionDetail"] = o.ConsumptionDetail
	}
	if !IsNil(o.DatabaseId) {
		toSerialize["databaseId"] = o.DatabaseId
	}
	if !IsNil(o.ECertificateInfo) {
		toSerialize["eCertificateInfo"] = o.ECertificateInfo
	}
	if !IsNil(o.ExpiryDate) {
		toSerialize["expiryDate"] = o.ExpiryDate
	}
	if !IsNil(o.ExtensionCount) {
		toSerialize["extensionCount"] = o.ExtensionCount
	}
	if !IsNil(o.GenerationDetail) {
		toSerialize["generationDetail"] = o.GenerationDetail
	}
	if !IsNil(o.InLieuSequence) {
		toSerialize["inLieuSequence"] = o.InLieuSequence
	}
	if !IsNil(o.InactiveDate) {
		toSerialize["inactiveDate"] = o.InactiveDate
	}
	if !IsNil(o.IssueDate) {
		toSerialize["issueDate"] = o.IssueDate
	}
	if !IsNil(o.IssueType) {
		toSerialize["issueType"] = o.IssueType
	}
	if !IsNil(o.NewExpiryDate) {
		toSerialize["newExpiryDate"] = o.NewExpiryDate
	}
	if !IsNil(o.OriginalCertificateNo) {
		toSerialize["originalCertificateNo"] = o.OriginalCertificateNo
	}
	if !IsNil(o.OriginalVoucherNo) {
		toSerialize["originalVoucherNo"] = o.OriginalVoucherNo
	}
	if !IsNil(o.Printed) {
		toSerialize["printed"] = o.Printed
	}
	if !IsNil(o.ProfileId) {
		toSerialize["profileId"] = o.ProfileId
	}
	if !IsNil(o.Source) {
		toSerialize["source"] = o.Source
	}
	if !IsNil(o.Status) {
		toSerialize["status"] = o.Status
	}
	if !IsNil(o.VoucherNo) {
		toSerialize["voucherNo"] = o.VoucherNo
	}
	return toSerialize, nil
}

type NullableECertificateType struct {
	value *ECertificateType
	isSet bool
}

func (v NullableECertificateType) Get() *ECertificateType {
	return v.value
}

func (v *NullableECertificateType) Set(val *ECertificateType) {
	v.value = val
	v.isSet = true
}

func (v NullableECertificateType) IsSet() bool {
	return v.isSet
}

func (v *NullableECertificateType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableECertificateType(val *ECertificateType) *NullableECertificateType {
	return &NullableECertificateType{value: val, isSet: true}
}

func (v NullableECertificateType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableECertificateType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


