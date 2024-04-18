# ECertificateType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CertificateNo** | Pointer to **string** | Printed certificate no. This has to be unique. | [optional] 
**ConsumptionDetail** | Pointer to [**ECertificateConsumptionType**](ECertificateConsumptionType.md) |  | [optional] 
**ECertificateInfo** | Pointer to [**ECertificateInfoType**](ECertificateInfoType.md) |  | [optional] 
**ExpiryDate** | Pointer to **string** | Date of expiry. | [optional] 
**IssueDate** | Pointer to **string** | Date when certificate was issued. | [optional] 
**Printed** | Pointer to **bool** | Print status of the certificate. | [optional] 
**ProfileId** | Pointer to [**ProfileId**](ProfileId.md) |  | [optional] 
**Source** | Pointer to [**ECertificateIssueSourceType**](ECertificateIssueSourceType.md) |  | [optional] 
**Status** | Pointer to [**ECertificateStatusType**](ECertificateStatusType.md) |  | [optional] 
**VoucherNo** | Pointer to **string** | System generated unique voucher number. | [optional] 

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


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


