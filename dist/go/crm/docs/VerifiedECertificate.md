# VerifiedECertificate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ProfileName** | Pointer to [**ProfileNameType**](ProfileNameType.md) |  | [optional] 
**ProfileId** | Pointer to [**ProfileId**](ProfileId.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewVerifiedECertificate

`func NewVerifiedECertificate() *VerifiedECertificate`

NewVerifiedECertificate instantiates a new VerifiedECertificate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewVerifiedECertificateWithDefaults

`func NewVerifiedECertificateWithDefaults() *VerifiedECertificate`

NewVerifiedECertificateWithDefaults instantiates a new VerifiedECertificate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetProfileName

`func (o *VerifiedECertificate) GetProfileName() ProfileNameType`

GetProfileName returns the ProfileName field if non-nil, zero value otherwise.

### GetProfileNameOk

`func (o *VerifiedECertificate) GetProfileNameOk() (*ProfileNameType, bool)`

GetProfileNameOk returns a tuple with the ProfileName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileName

`func (o *VerifiedECertificate) SetProfileName(v ProfileNameType)`

SetProfileName sets ProfileName field to given value.

### HasProfileName

`func (o *VerifiedECertificate) HasProfileName() bool`

HasProfileName returns a boolean if a field has been set.

### GetProfileId

`func (o *VerifiedECertificate) GetProfileId() ProfileId`

GetProfileId returns the ProfileId field if non-nil, zero value otherwise.

### GetProfileIdOk

`func (o *VerifiedECertificate) GetProfileIdOk() (*ProfileId, bool)`

GetProfileIdOk returns a tuple with the ProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileId

`func (o *VerifiedECertificate) SetProfileId(v ProfileId)`

SetProfileId sets ProfileId field to given value.

### HasProfileId

`func (o *VerifiedECertificate) HasProfileId() bool`

HasProfileId returns a boolean if a field has been set.

### GetLinks

`func (o *VerifiedECertificate) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *VerifiedECertificate) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *VerifiedECertificate) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *VerifiedECertificate) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *VerifiedECertificate) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *VerifiedECertificate) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *VerifiedECertificate) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *VerifiedECertificate) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


