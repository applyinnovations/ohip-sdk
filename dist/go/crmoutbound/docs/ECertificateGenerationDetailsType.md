# ECertificateGenerationDetailsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ProfileId** | Pointer to [**ProfileId**](ProfileId.md) |  | [optional] 
**CertificateType** | Pointer to **string** | User defined certificate code. | [optional] 
**Source** | Pointer to [**ECertificateIssueSourceType**](ECertificateIssueSourceType.md) |  | [optional] 
**IssueType** | Pointer to [**ECertificateIssueType**](ECertificateIssueType.md) |  | [optional] 
**Hotels** | Pointer to **[]string** | Hotel to which certificate is attached to. | [optional] 

## Methods

### NewECertificateGenerationDetailsType

`func NewECertificateGenerationDetailsType() *ECertificateGenerationDetailsType`

NewECertificateGenerationDetailsType instantiates a new ECertificateGenerationDetailsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewECertificateGenerationDetailsTypeWithDefaults

`func NewECertificateGenerationDetailsTypeWithDefaults() *ECertificateGenerationDetailsType`

NewECertificateGenerationDetailsTypeWithDefaults instantiates a new ECertificateGenerationDetailsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetProfileId

`func (o *ECertificateGenerationDetailsType) GetProfileId() ProfileId`

GetProfileId returns the ProfileId field if non-nil, zero value otherwise.

### GetProfileIdOk

`func (o *ECertificateGenerationDetailsType) GetProfileIdOk() (*ProfileId, bool)`

GetProfileIdOk returns a tuple with the ProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileId

`func (o *ECertificateGenerationDetailsType) SetProfileId(v ProfileId)`

SetProfileId sets ProfileId field to given value.

### HasProfileId

`func (o *ECertificateGenerationDetailsType) HasProfileId() bool`

HasProfileId returns a boolean if a field has been set.

### GetCertificateType

`func (o *ECertificateGenerationDetailsType) GetCertificateType() string`

GetCertificateType returns the CertificateType field if non-nil, zero value otherwise.

### GetCertificateTypeOk

`func (o *ECertificateGenerationDetailsType) GetCertificateTypeOk() (*string, bool)`

GetCertificateTypeOk returns a tuple with the CertificateType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCertificateType

`func (o *ECertificateGenerationDetailsType) SetCertificateType(v string)`

SetCertificateType sets CertificateType field to given value.

### HasCertificateType

`func (o *ECertificateGenerationDetailsType) HasCertificateType() bool`

HasCertificateType returns a boolean if a field has been set.

### GetSource

`func (o *ECertificateGenerationDetailsType) GetSource() ECertificateIssueSourceType`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *ECertificateGenerationDetailsType) GetSourceOk() (*ECertificateIssueSourceType, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *ECertificateGenerationDetailsType) SetSource(v ECertificateIssueSourceType)`

SetSource sets Source field to given value.

### HasSource

`func (o *ECertificateGenerationDetailsType) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetIssueType

`func (o *ECertificateGenerationDetailsType) GetIssueType() ECertificateIssueType`

GetIssueType returns the IssueType field if non-nil, zero value otherwise.

### GetIssueTypeOk

`func (o *ECertificateGenerationDetailsType) GetIssueTypeOk() (*ECertificateIssueType, bool)`

GetIssueTypeOk returns a tuple with the IssueType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIssueType

`func (o *ECertificateGenerationDetailsType) SetIssueType(v ECertificateIssueType)`

SetIssueType sets IssueType field to given value.

### HasIssueType

`func (o *ECertificateGenerationDetailsType) HasIssueType() bool`

HasIssueType returns a boolean if a field has been set.

### GetHotels

`func (o *ECertificateGenerationDetailsType) GetHotels() []string`

GetHotels returns the Hotels field if non-nil, zero value otherwise.

### GetHotelsOk

`func (o *ECertificateGenerationDetailsType) GetHotelsOk() (*[]string, bool)`

GetHotelsOk returns a tuple with the Hotels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotels

`func (o *ECertificateGenerationDetailsType) SetHotels(v []string)`

SetHotels sets Hotels field to given value.

### HasHotels

`func (o *ECertificateGenerationDetailsType) HasHotels() bool`

HasHotels returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


