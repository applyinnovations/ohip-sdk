# ECertificateToExtend

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CertificateId** | Pointer to **int32** | System generated unique certificate id. | [optional] 
**ExpiryDate** | Pointer to **string** | Indicates E-Certificate extended expiry date. | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewECertificateToExtend

`func NewECertificateToExtend() *ECertificateToExtend`

NewECertificateToExtend instantiates a new ECertificateToExtend object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewECertificateToExtendWithDefaults

`func NewECertificateToExtendWithDefaults() *ECertificateToExtend`

NewECertificateToExtendWithDefaults instantiates a new ECertificateToExtend object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCertificateId

`func (o *ECertificateToExtend) GetCertificateId() int32`

GetCertificateId returns the CertificateId field if non-nil, zero value otherwise.

### GetCertificateIdOk

`func (o *ECertificateToExtend) GetCertificateIdOk() (*int32, bool)`

GetCertificateIdOk returns a tuple with the CertificateId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCertificateId

`func (o *ECertificateToExtend) SetCertificateId(v int32)`

SetCertificateId sets CertificateId field to given value.

### HasCertificateId

`func (o *ECertificateToExtend) HasCertificateId() bool`

HasCertificateId returns a boolean if a field has been set.

### GetExpiryDate

`func (o *ECertificateToExtend) GetExpiryDate() string`

GetExpiryDate returns the ExpiryDate field if non-nil, zero value otherwise.

### GetExpiryDateOk

`func (o *ECertificateToExtend) GetExpiryDateOk() (*string, bool)`

GetExpiryDateOk returns a tuple with the ExpiryDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiryDate

`func (o *ECertificateToExtend) SetExpiryDate(v string)`

SetExpiryDate sets ExpiryDate field to given value.

### HasExpiryDate

`func (o *ECertificateToExtend) HasExpiryDate() bool`

HasExpiryDate returns a boolean if a field has been set.

### GetLinks

`func (o *ECertificateToExtend) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ECertificateToExtend) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ECertificateToExtend) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ECertificateToExtend) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ECertificateToExtend) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ECertificateToExtend) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ECertificateToExtend) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ECertificateToExtend) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


