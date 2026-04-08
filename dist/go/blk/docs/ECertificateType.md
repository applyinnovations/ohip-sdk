# ECertificateType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CertificateId** | Pointer to **int32** | System generated unique certificate id. | [optional] 
**VoucherNo** | Pointer to **string** | System generated unique voucher number. | [optional] 
**CertificateNo** | Pointer to **string** | Printed certificate no. This has to be unique. | [optional] 
**ECertificateInfo** | Pointer to [**ECertificateInfoType**](ECertificateInfoType.md) |  | [optional] 
**ExpiryDate** | Pointer to **string** | Date of expiry. | [optional] 
**NewExpiryDate** | Pointer to **string** | New Date of expiry to extend e-certificate. | [optional] 
**ProfileId** | Pointer to [**ProfileId**](ProfileId.md) |  | [optional] 
**ConsumptionDetail** | Pointer to [**ECertificateConsumptionType**](ECertificateConsumptionType.md) |  | [optional] 
**Status** | Pointer to [**ECertificateStatusType**](ECertificateStatusType.md) |  | [optional] 
**Printed** | Pointer to **bool** | Print status of the certificate. | [optional] 
**InactiveDate** | Pointer to **string** | Date the record was marked as inactive. | [optional] 
**AwardId** | Pointer to [**AwardId**](AwardId.md) |  | [optional] 
**DatabaseId** | Pointer to **string** | External reference from which the record is created. | [optional] 
**Source** | Pointer to [**ECertificateIssueSourceType**](ECertificateIssueSourceType.md) |  | [optional] 
**IssueType** | Pointer to [**ECertificateIssueType**](ECertificateIssueType.md) |  | [optional] 
**IssueDate** | Pointer to **string** | Date when certificate was issued. | [optional] 
**AwardPoints** | Pointer to **int32** | Award points if any in case of certificate use membership award. | [optional] 
**GenerationDetail** | Pointer to [**ECertificateGenerationType**](ECertificateGenerationType.md) |  | [optional] 
**OriginalVoucherNo** | Pointer to **string** | In case of in lieu of certificate this will contain the original voucher no. | [optional] 
**OriginalCertificateNo** | Pointer to **string** | In case of in lieu of certificate this will contain the original certificate no. | [optional] 
**InLieuSequence** | Pointer to **int32** | Seq of the in lieu of certificate. 1..n. original certificate will be treated as null &#x3D; 0. | [optional] 
**CancelRequestDate** | Pointer to **string** | Date on which the cancellation was requested. | [optional] 
**ExtensionCount** | Pointer to **int32** | Number of times e-certificate is already extended. | [optional] 

## Methods

### NewECertificateType

`func NewECertificateType() *ECertificateType`

NewECertificateType instantiates a new ECertificateType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewECertificateTypeWithDefaults

`func NewECertificateTypeWithDefaults() *ECertificateType`

NewECertificateTypeWithDefaults instantiates a new ECertificateType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCertificateId

`func (o *ECertificateType) GetCertificateId() int32`

GetCertificateId returns the CertificateId field if non-nil, zero value otherwise.

### GetCertificateIdOk

`func (o *ECertificateType) GetCertificateIdOk() (*int32, bool)`

GetCertificateIdOk returns a tuple with the CertificateId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCertificateId

`func (o *ECertificateType) SetCertificateId(v int32)`

SetCertificateId sets CertificateId field to given value.

### HasCertificateId

`func (o *ECertificateType) HasCertificateId() bool`

HasCertificateId returns a boolean if a field has been set.

### GetVoucherNo

`func (o *ECertificateType) GetVoucherNo() string`

GetVoucherNo returns the VoucherNo field if non-nil, zero value otherwise.

### GetVoucherNoOk

`func (o *ECertificateType) GetVoucherNoOk() (*string, bool)`

GetVoucherNoOk returns a tuple with the VoucherNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVoucherNo

`func (o *ECertificateType) SetVoucherNo(v string)`

SetVoucherNo sets VoucherNo field to given value.

### HasVoucherNo

`func (o *ECertificateType) HasVoucherNo() bool`

HasVoucherNo returns a boolean if a field has been set.

### GetCertificateNo

`func (o *ECertificateType) GetCertificateNo() string`

GetCertificateNo returns the CertificateNo field if non-nil, zero value otherwise.

### GetCertificateNoOk

`func (o *ECertificateType) GetCertificateNoOk() (*string, bool)`

GetCertificateNoOk returns a tuple with the CertificateNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCertificateNo

`func (o *ECertificateType) SetCertificateNo(v string)`

SetCertificateNo sets CertificateNo field to given value.

### HasCertificateNo

`func (o *ECertificateType) HasCertificateNo() bool`

HasCertificateNo returns a boolean if a field has been set.

### GetECertificateInfo

`func (o *ECertificateType) GetECertificateInfo() ECertificateInfoType`

GetECertificateInfo returns the ECertificateInfo field if non-nil, zero value otherwise.

### GetECertificateInfoOk

`func (o *ECertificateType) GetECertificateInfoOk() (*ECertificateInfoType, bool)`

GetECertificateInfoOk returns a tuple with the ECertificateInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetECertificateInfo

`func (o *ECertificateType) SetECertificateInfo(v ECertificateInfoType)`

SetECertificateInfo sets ECertificateInfo field to given value.

### HasECertificateInfo

`func (o *ECertificateType) HasECertificateInfo() bool`

HasECertificateInfo returns a boolean if a field has been set.

### GetExpiryDate

`func (o *ECertificateType) GetExpiryDate() string`

GetExpiryDate returns the ExpiryDate field if non-nil, zero value otherwise.

### GetExpiryDateOk

`func (o *ECertificateType) GetExpiryDateOk() (*string, bool)`

GetExpiryDateOk returns a tuple with the ExpiryDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiryDate

`func (o *ECertificateType) SetExpiryDate(v string)`

SetExpiryDate sets ExpiryDate field to given value.

### HasExpiryDate

`func (o *ECertificateType) HasExpiryDate() bool`

HasExpiryDate returns a boolean if a field has been set.

### GetNewExpiryDate

`func (o *ECertificateType) GetNewExpiryDate() string`

GetNewExpiryDate returns the NewExpiryDate field if non-nil, zero value otherwise.

### GetNewExpiryDateOk

`func (o *ECertificateType) GetNewExpiryDateOk() (*string, bool)`

GetNewExpiryDateOk returns a tuple with the NewExpiryDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewExpiryDate

`func (o *ECertificateType) SetNewExpiryDate(v string)`

SetNewExpiryDate sets NewExpiryDate field to given value.

### HasNewExpiryDate

`func (o *ECertificateType) HasNewExpiryDate() bool`

HasNewExpiryDate returns a boolean if a field has been set.

### GetProfileId

`func (o *ECertificateType) GetProfileId() ProfileId`

GetProfileId returns the ProfileId field if non-nil, zero value otherwise.

### GetProfileIdOk

`func (o *ECertificateType) GetProfileIdOk() (*ProfileId, bool)`

GetProfileIdOk returns a tuple with the ProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileId

`func (o *ECertificateType) SetProfileId(v ProfileId)`

SetProfileId sets ProfileId field to given value.

### HasProfileId

`func (o *ECertificateType) HasProfileId() bool`

HasProfileId returns a boolean if a field has been set.

### GetConsumptionDetail

`func (o *ECertificateType) GetConsumptionDetail() ECertificateConsumptionType`

GetConsumptionDetail returns the ConsumptionDetail field if non-nil, zero value otherwise.

### GetConsumptionDetailOk

`func (o *ECertificateType) GetConsumptionDetailOk() (*ECertificateConsumptionType, bool)`

GetConsumptionDetailOk returns a tuple with the ConsumptionDetail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConsumptionDetail

`func (o *ECertificateType) SetConsumptionDetail(v ECertificateConsumptionType)`

SetConsumptionDetail sets ConsumptionDetail field to given value.

### HasConsumptionDetail

`func (o *ECertificateType) HasConsumptionDetail() bool`

HasConsumptionDetail returns a boolean if a field has been set.

### GetStatus

`func (o *ECertificateType) GetStatus() ECertificateStatusType`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ECertificateType) GetStatusOk() (*ECertificateStatusType, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ECertificateType) SetStatus(v ECertificateStatusType)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *ECertificateType) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetPrinted

`func (o *ECertificateType) GetPrinted() bool`

GetPrinted returns the Printed field if non-nil, zero value otherwise.

### GetPrintedOk

`func (o *ECertificateType) GetPrintedOk() (*bool, bool)`

GetPrintedOk returns a tuple with the Printed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrinted

`func (o *ECertificateType) SetPrinted(v bool)`

SetPrinted sets Printed field to given value.

### HasPrinted

`func (o *ECertificateType) HasPrinted() bool`

HasPrinted returns a boolean if a field has been set.

### GetInactiveDate

`func (o *ECertificateType) GetInactiveDate() string`

GetInactiveDate returns the InactiveDate field if non-nil, zero value otherwise.

### GetInactiveDateOk

`func (o *ECertificateType) GetInactiveDateOk() (*string, bool)`

GetInactiveDateOk returns a tuple with the InactiveDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactiveDate

`func (o *ECertificateType) SetInactiveDate(v string)`

SetInactiveDate sets InactiveDate field to given value.

### HasInactiveDate

`func (o *ECertificateType) HasInactiveDate() bool`

HasInactiveDate returns a boolean if a field has been set.

### GetAwardId

`func (o *ECertificateType) GetAwardId() AwardId`

GetAwardId returns the AwardId field if non-nil, zero value otherwise.

### GetAwardIdOk

`func (o *ECertificateType) GetAwardIdOk() (*AwardId, bool)`

GetAwardIdOk returns a tuple with the AwardId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwardId

`func (o *ECertificateType) SetAwardId(v AwardId)`

SetAwardId sets AwardId field to given value.

### HasAwardId

`func (o *ECertificateType) HasAwardId() bool`

HasAwardId returns a boolean if a field has been set.

### GetDatabaseId

`func (o *ECertificateType) GetDatabaseId() string`

GetDatabaseId returns the DatabaseId field if non-nil, zero value otherwise.

### GetDatabaseIdOk

`func (o *ECertificateType) GetDatabaseIdOk() (*string, bool)`

GetDatabaseIdOk returns a tuple with the DatabaseId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDatabaseId

`func (o *ECertificateType) SetDatabaseId(v string)`

SetDatabaseId sets DatabaseId field to given value.

### HasDatabaseId

`func (o *ECertificateType) HasDatabaseId() bool`

HasDatabaseId returns a boolean if a field has been set.

### GetSource

`func (o *ECertificateType) GetSource() ECertificateIssueSourceType`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *ECertificateType) GetSourceOk() (*ECertificateIssueSourceType, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *ECertificateType) SetSource(v ECertificateIssueSourceType)`

SetSource sets Source field to given value.

### HasSource

`func (o *ECertificateType) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetIssueType

`func (o *ECertificateType) GetIssueType() ECertificateIssueType`

GetIssueType returns the IssueType field if non-nil, zero value otherwise.

### GetIssueTypeOk

`func (o *ECertificateType) GetIssueTypeOk() (*ECertificateIssueType, bool)`

GetIssueTypeOk returns a tuple with the IssueType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIssueType

`func (o *ECertificateType) SetIssueType(v ECertificateIssueType)`

SetIssueType sets IssueType field to given value.

### HasIssueType

`func (o *ECertificateType) HasIssueType() bool`

HasIssueType returns a boolean if a field has been set.

### GetIssueDate

`func (o *ECertificateType) GetIssueDate() string`

GetIssueDate returns the IssueDate field if non-nil, zero value otherwise.

### GetIssueDateOk

`func (o *ECertificateType) GetIssueDateOk() (*string, bool)`

GetIssueDateOk returns a tuple with the IssueDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIssueDate

`func (o *ECertificateType) SetIssueDate(v string)`

SetIssueDate sets IssueDate field to given value.

### HasIssueDate

`func (o *ECertificateType) HasIssueDate() bool`

HasIssueDate returns a boolean if a field has been set.

### GetAwardPoints

`func (o *ECertificateType) GetAwardPoints() int32`

GetAwardPoints returns the AwardPoints field if non-nil, zero value otherwise.

### GetAwardPointsOk

`func (o *ECertificateType) GetAwardPointsOk() (*int32, bool)`

GetAwardPointsOk returns a tuple with the AwardPoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwardPoints

`func (o *ECertificateType) SetAwardPoints(v int32)`

SetAwardPoints sets AwardPoints field to given value.

### HasAwardPoints

`func (o *ECertificateType) HasAwardPoints() bool`

HasAwardPoints returns a boolean if a field has been set.

### GetGenerationDetail

`func (o *ECertificateType) GetGenerationDetail() ECertificateGenerationType`

GetGenerationDetail returns the GenerationDetail field if non-nil, zero value otherwise.

### GetGenerationDetailOk

`func (o *ECertificateType) GetGenerationDetailOk() (*ECertificateGenerationType, bool)`

GetGenerationDetailOk returns a tuple with the GenerationDetail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGenerationDetail

`func (o *ECertificateType) SetGenerationDetail(v ECertificateGenerationType)`

SetGenerationDetail sets GenerationDetail field to given value.

### HasGenerationDetail

`func (o *ECertificateType) HasGenerationDetail() bool`

HasGenerationDetail returns a boolean if a field has been set.

### GetOriginalVoucherNo

`func (o *ECertificateType) GetOriginalVoucherNo() string`

GetOriginalVoucherNo returns the OriginalVoucherNo field if non-nil, zero value otherwise.

### GetOriginalVoucherNoOk

`func (o *ECertificateType) GetOriginalVoucherNoOk() (*string, bool)`

GetOriginalVoucherNoOk returns a tuple with the OriginalVoucherNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOriginalVoucherNo

`func (o *ECertificateType) SetOriginalVoucherNo(v string)`

SetOriginalVoucherNo sets OriginalVoucherNo field to given value.

### HasOriginalVoucherNo

`func (o *ECertificateType) HasOriginalVoucherNo() bool`

HasOriginalVoucherNo returns a boolean if a field has been set.

### GetOriginalCertificateNo

`func (o *ECertificateType) GetOriginalCertificateNo() string`

GetOriginalCertificateNo returns the OriginalCertificateNo field if non-nil, zero value otherwise.

### GetOriginalCertificateNoOk

`func (o *ECertificateType) GetOriginalCertificateNoOk() (*string, bool)`

GetOriginalCertificateNoOk returns a tuple with the OriginalCertificateNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOriginalCertificateNo

`func (o *ECertificateType) SetOriginalCertificateNo(v string)`

SetOriginalCertificateNo sets OriginalCertificateNo field to given value.

### HasOriginalCertificateNo

`func (o *ECertificateType) HasOriginalCertificateNo() bool`

HasOriginalCertificateNo returns a boolean if a field has been set.

### GetInLieuSequence

`func (o *ECertificateType) GetInLieuSequence() int32`

GetInLieuSequence returns the InLieuSequence field if non-nil, zero value otherwise.

### GetInLieuSequenceOk

`func (o *ECertificateType) GetInLieuSequenceOk() (*int32, bool)`

GetInLieuSequenceOk returns a tuple with the InLieuSequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInLieuSequence

`func (o *ECertificateType) SetInLieuSequence(v int32)`

SetInLieuSequence sets InLieuSequence field to given value.

### HasInLieuSequence

`func (o *ECertificateType) HasInLieuSequence() bool`

HasInLieuSequence returns a boolean if a field has been set.

### GetCancelRequestDate

`func (o *ECertificateType) GetCancelRequestDate() string`

GetCancelRequestDate returns the CancelRequestDate field if non-nil, zero value otherwise.

### GetCancelRequestDateOk

`func (o *ECertificateType) GetCancelRequestDateOk() (*string, bool)`

GetCancelRequestDateOk returns a tuple with the CancelRequestDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelRequestDate

`func (o *ECertificateType) SetCancelRequestDate(v string)`

SetCancelRequestDate sets CancelRequestDate field to given value.

### HasCancelRequestDate

`func (o *ECertificateType) HasCancelRequestDate() bool`

HasCancelRequestDate returns a boolean if a field has been set.

### GetExtensionCount

`func (o *ECertificateType) GetExtensionCount() int32`

GetExtensionCount returns the ExtensionCount field if non-nil, zero value otherwise.

### GetExtensionCountOk

`func (o *ECertificateType) GetExtensionCountOk() (*int32, bool)`

GetExtensionCountOk returns a tuple with the ExtensionCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtensionCount

`func (o *ECertificateType) SetExtensionCount(v int32)`

SetExtensionCount sets ExtensionCount field to given value.

### HasExtensionCount

`func (o *ECertificateType) HasExtensionCount() bool`

HasExtensionCount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


