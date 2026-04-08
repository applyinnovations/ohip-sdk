# ECertificateGeneration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ECertificateGenerationDetails** | Pointer to [**ECertificateGenerationDetailsType**](ECertificateGenerationDetailsType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewECertificateGeneration

`func NewECertificateGeneration() *ECertificateGeneration`

NewECertificateGeneration instantiates a new ECertificateGeneration object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewECertificateGenerationWithDefaults

`func NewECertificateGenerationWithDefaults() *ECertificateGeneration`

NewECertificateGenerationWithDefaults instantiates a new ECertificateGeneration object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetECertificateGenerationDetails

`func (o *ECertificateGeneration) GetECertificateGenerationDetails() ECertificateGenerationDetailsType`

GetECertificateGenerationDetails returns the ECertificateGenerationDetails field if non-nil, zero value otherwise.

### GetECertificateGenerationDetailsOk

`func (o *ECertificateGeneration) GetECertificateGenerationDetailsOk() (*ECertificateGenerationDetailsType, bool)`

GetECertificateGenerationDetailsOk returns a tuple with the ECertificateGenerationDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetECertificateGenerationDetails

`func (o *ECertificateGeneration) SetECertificateGenerationDetails(v ECertificateGenerationDetailsType)`

SetECertificateGenerationDetails sets ECertificateGenerationDetails field to given value.

### HasECertificateGenerationDetails

`func (o *ECertificateGeneration) HasECertificateGenerationDetails() bool`

HasECertificateGenerationDetails returns a boolean if a field has been set.

### GetLinks

`func (o *ECertificateGeneration) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ECertificateGeneration) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ECertificateGeneration) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ECertificateGeneration) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ECertificateGeneration) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ECertificateGeneration) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ECertificateGeneration) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ECertificateGeneration) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


