# ECertificateToConsume

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ConsumeECertificates** | Pointer to [**[]ECertificateType**](ECertificateType.md) | List of e-certificates for the profile. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewECertificateToConsume

`func NewECertificateToConsume() *ECertificateToConsume`

NewECertificateToConsume instantiates a new ECertificateToConsume object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewECertificateToConsumeWithDefaults

`func NewECertificateToConsumeWithDefaults() *ECertificateToConsume`

NewECertificateToConsumeWithDefaults instantiates a new ECertificateToConsume object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConsumeECertificates

`func (o *ECertificateToConsume) GetConsumeECertificates() []ECertificateType`

GetConsumeECertificates returns the ConsumeECertificates field if non-nil, zero value otherwise.

### GetConsumeECertificatesOk

`func (o *ECertificateToConsume) GetConsumeECertificatesOk() (*[]ECertificateType, bool)`

GetConsumeECertificatesOk returns a tuple with the ConsumeECertificates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConsumeECertificates

`func (o *ECertificateToConsume) SetConsumeECertificates(v []ECertificateType)`

SetConsumeECertificates sets ConsumeECertificates field to given value.

### HasConsumeECertificates

`func (o *ECertificateToConsume) HasConsumeECertificates() bool`

HasConsumeECertificates returns a boolean if a field has been set.

### GetLinks

`func (o *ECertificateToConsume) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ECertificateToConsume) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ECertificateToConsume) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ECertificateToConsume) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ECertificateToConsume) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ECertificateToConsume) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ECertificateToConsume) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ECertificateToConsume) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


