# ECertificates

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ECertificatesDetail** | Pointer to [**[]ECertificateType**](ECertificateType.md) | List of e-certificates for the profile. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 

## Methods

### NewECertificates

`func NewECertificates() *ECertificates`

NewECertificates instantiates a new ECertificates object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewECertificatesWithDefaults

`func NewECertificatesWithDefaults() *ECertificates`

NewECertificatesWithDefaults instantiates a new ECertificates object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetECertificatesDetail

`func (o *ECertificates) GetECertificatesDetail() []ECertificateType`

GetECertificatesDetail returns the ECertificatesDetail field if non-nil, zero value otherwise.

### GetECertificatesDetailOk

`func (o *ECertificates) GetECertificatesDetailOk() (*[]ECertificateType, bool)`

GetECertificatesDetailOk returns a tuple with the ECertificatesDetail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetECertificatesDetail

`func (o *ECertificates) SetECertificatesDetail(v []ECertificateType)`

SetECertificatesDetail sets ECertificatesDetail field to given value.

### HasECertificatesDetail

`func (o *ECertificates) HasECertificatesDetail() bool`

HasECertificatesDetail returns a boolean if a field has been set.

### GetLinks

`func (o *ECertificates) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ECertificates) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ECertificates) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ECertificates) HasLinks() bool`

HasLinks returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


