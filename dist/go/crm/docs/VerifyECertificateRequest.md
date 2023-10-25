# VerifyECertificateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AllowReservation** | Pointer to **bool** | Indicates if certificate is to be used against reservation or not. | [optional] 
**CertificateId** | Pointer to **int32** | System generated unique certificate id. | [optional] 
**CertificateNo** | Pointer to **string** | Used for Character Strings, length 0 to 40. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewVerifyECertificateRequest

`func NewVerifyECertificateRequest() *VerifyECertificateRequest`

NewVerifyECertificateRequest instantiates a new VerifyECertificateRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewVerifyECertificateRequestWithDefaults

`func NewVerifyECertificateRequestWithDefaults() *VerifyECertificateRequest`

NewVerifyECertificateRequestWithDefaults instantiates a new VerifyECertificateRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAllowReservation

`func (o *VerifyECertificateRequest) GetAllowReservation() bool`

GetAllowReservation returns the AllowReservation field if non-nil, zero value otherwise.

### GetAllowReservationOk

`func (o *VerifyECertificateRequest) GetAllowReservationOk() (*bool, bool)`

GetAllowReservationOk returns a tuple with the AllowReservation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowReservation

`func (o *VerifyECertificateRequest) SetAllowReservation(v bool)`

SetAllowReservation sets AllowReservation field to given value.

### HasAllowReservation

`func (o *VerifyECertificateRequest) HasAllowReservation() bool`

HasAllowReservation returns a boolean if a field has been set.

### GetCertificateId

`func (o *VerifyECertificateRequest) GetCertificateId() int32`

GetCertificateId returns the CertificateId field if non-nil, zero value otherwise.

### GetCertificateIdOk

`func (o *VerifyECertificateRequest) GetCertificateIdOk() (*int32, bool)`

GetCertificateIdOk returns a tuple with the CertificateId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCertificateId

`func (o *VerifyECertificateRequest) SetCertificateId(v int32)`

SetCertificateId sets CertificateId field to given value.

### HasCertificateId

`func (o *VerifyECertificateRequest) HasCertificateId() bool`

HasCertificateId returns a boolean if a field has been set.

### GetCertificateNo

`func (o *VerifyECertificateRequest) GetCertificateNo() string`

GetCertificateNo returns the CertificateNo field if non-nil, zero value otherwise.

### GetCertificateNoOk

`func (o *VerifyECertificateRequest) GetCertificateNoOk() (*string, bool)`

GetCertificateNoOk returns a tuple with the CertificateNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCertificateNo

`func (o *VerifyECertificateRequest) SetCertificateNo(v string)`

SetCertificateNo sets CertificateNo field to given value.

### HasCertificateNo

`func (o *VerifyECertificateRequest) HasCertificateNo() bool`

HasCertificateNo returns a boolean if a field has been set.

### GetLinks

`func (o *VerifyECertificateRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *VerifyECertificateRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *VerifyECertificateRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *VerifyECertificateRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *VerifyECertificateRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *VerifyECertificateRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *VerifyECertificateRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *VerifyECertificateRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


