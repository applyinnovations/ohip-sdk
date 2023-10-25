# FbaReimbursementCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CertificateReconciliationTypes** | Pointer to [**[]CertificateReconciliationType**](CertificateReconciliationType.md) | List of CertificateReconciliationType criteria | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewFbaReimbursementCriteria

`func NewFbaReimbursementCriteria() *FbaReimbursementCriteria`

NewFbaReimbursementCriteria instantiates a new FbaReimbursementCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFbaReimbursementCriteriaWithDefaults

`func NewFbaReimbursementCriteriaWithDefaults() *FbaReimbursementCriteria`

NewFbaReimbursementCriteriaWithDefaults instantiates a new FbaReimbursementCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCertificateReconciliationTypes

`func (o *FbaReimbursementCriteria) GetCertificateReconciliationTypes() []CertificateReconciliationType`

GetCertificateReconciliationTypes returns the CertificateReconciliationTypes field if non-nil, zero value otherwise.

### GetCertificateReconciliationTypesOk

`func (o *FbaReimbursementCriteria) GetCertificateReconciliationTypesOk() (*[]CertificateReconciliationType, bool)`

GetCertificateReconciliationTypesOk returns a tuple with the CertificateReconciliationTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCertificateReconciliationTypes

`func (o *FbaReimbursementCriteria) SetCertificateReconciliationTypes(v []CertificateReconciliationType)`

SetCertificateReconciliationTypes sets CertificateReconciliationTypes field to given value.

### HasCertificateReconciliationTypes

`func (o *FbaReimbursementCriteria) HasCertificateReconciliationTypes() bool`

HasCertificateReconciliationTypes returns a boolean if a field has been set.

### GetLinks

`func (o *FbaReimbursementCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *FbaReimbursementCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *FbaReimbursementCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *FbaReimbursementCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *FbaReimbursementCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FbaReimbursementCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FbaReimbursementCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FbaReimbursementCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


