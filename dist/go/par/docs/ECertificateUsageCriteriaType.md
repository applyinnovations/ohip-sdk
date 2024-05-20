# ECertificateUsageCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Benefit** | Pointer to **bool** | Indicates to attach a rate code to the e-certificate as a benefit. | [optional] 
**CancelAllowed** | Pointer to **bool** | Identify if cancel is allowed or not. | [optional] 
**GenerateInLieuCertificate** | Pointer to **bool** | Identify if in lieu of certificate can be generated or not. | [optional] 
**Hotel** | Pointer to **bool** | Indicates if web certificate can be consumed in hotel. | [optional] 
**Reservation** | Pointer to **bool** | Indicates if certificate is to be used against reservation or not. | [optional] 
**VerifyCertificateNo** | Pointer to **bool** | Specify if the certificate number verification is required at time of consumption or not. | [optional] 
**Web** | Pointer to **bool** | Indicates if web certificate can be consumed in OWS. | [optional] 
**WebAllowed** | Pointer to **bool** | Indicates if certificate consumption allowable on the web. | [optional] 

## Methods

### NewECertificateUsageCriteriaType

`func NewECertificateUsageCriteriaType() *ECertificateUsageCriteriaType`

NewECertificateUsageCriteriaType instantiates a new ECertificateUsageCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewECertificateUsageCriteriaTypeWithDefaults

`func NewECertificateUsageCriteriaTypeWithDefaults() *ECertificateUsageCriteriaType`

NewECertificateUsageCriteriaTypeWithDefaults instantiates a new ECertificateUsageCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBenefit

`func (o *ECertificateUsageCriteriaType) GetBenefit() bool`

GetBenefit returns the Benefit field if non-nil, zero value otherwise.

### GetBenefitOk

`func (o *ECertificateUsageCriteriaType) GetBenefitOk() (*bool, bool)`

GetBenefitOk returns a tuple with the Benefit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBenefit

`func (o *ECertificateUsageCriteriaType) SetBenefit(v bool)`

SetBenefit sets Benefit field to given value.

### HasBenefit

`func (o *ECertificateUsageCriteriaType) HasBenefit() bool`

HasBenefit returns a boolean if a field has been set.

### GetCancelAllowed

`func (o *ECertificateUsageCriteriaType) GetCancelAllowed() bool`

GetCancelAllowed returns the CancelAllowed field if non-nil, zero value otherwise.

### GetCancelAllowedOk

`func (o *ECertificateUsageCriteriaType) GetCancelAllowedOk() (*bool, bool)`

GetCancelAllowedOk returns a tuple with the CancelAllowed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelAllowed

`func (o *ECertificateUsageCriteriaType) SetCancelAllowed(v bool)`

SetCancelAllowed sets CancelAllowed field to given value.

### HasCancelAllowed

`func (o *ECertificateUsageCriteriaType) HasCancelAllowed() bool`

HasCancelAllowed returns a boolean if a field has been set.

### GetGenerateInLieuCertificate

`func (o *ECertificateUsageCriteriaType) GetGenerateInLieuCertificate() bool`

GetGenerateInLieuCertificate returns the GenerateInLieuCertificate field if non-nil, zero value otherwise.

### GetGenerateInLieuCertificateOk

`func (o *ECertificateUsageCriteriaType) GetGenerateInLieuCertificateOk() (*bool, bool)`

GetGenerateInLieuCertificateOk returns a tuple with the GenerateInLieuCertificate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGenerateInLieuCertificate

`func (o *ECertificateUsageCriteriaType) SetGenerateInLieuCertificate(v bool)`

SetGenerateInLieuCertificate sets GenerateInLieuCertificate field to given value.

### HasGenerateInLieuCertificate

`func (o *ECertificateUsageCriteriaType) HasGenerateInLieuCertificate() bool`

HasGenerateInLieuCertificate returns a boolean if a field has been set.

### GetHotel

`func (o *ECertificateUsageCriteriaType) GetHotel() bool`

GetHotel returns the Hotel field if non-nil, zero value otherwise.

### GetHotelOk

`func (o *ECertificateUsageCriteriaType) GetHotelOk() (*bool, bool)`

GetHotelOk returns a tuple with the Hotel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotel

`func (o *ECertificateUsageCriteriaType) SetHotel(v bool)`

SetHotel sets Hotel field to given value.

### HasHotel

`func (o *ECertificateUsageCriteriaType) HasHotel() bool`

HasHotel returns a boolean if a field has been set.

### GetReservation

`func (o *ECertificateUsageCriteriaType) GetReservation() bool`

GetReservation returns the Reservation field if non-nil, zero value otherwise.

### GetReservationOk

`func (o *ECertificateUsageCriteriaType) GetReservationOk() (*bool, bool)`

GetReservationOk returns a tuple with the Reservation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservation

`func (o *ECertificateUsageCriteriaType) SetReservation(v bool)`

SetReservation sets Reservation field to given value.

### HasReservation

`func (o *ECertificateUsageCriteriaType) HasReservation() bool`

HasReservation returns a boolean if a field has been set.

### GetVerifyCertificateNo

`func (o *ECertificateUsageCriteriaType) GetVerifyCertificateNo() bool`

GetVerifyCertificateNo returns the VerifyCertificateNo field if non-nil, zero value otherwise.

### GetVerifyCertificateNoOk

`func (o *ECertificateUsageCriteriaType) GetVerifyCertificateNoOk() (*bool, bool)`

GetVerifyCertificateNoOk returns a tuple with the VerifyCertificateNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVerifyCertificateNo

`func (o *ECertificateUsageCriteriaType) SetVerifyCertificateNo(v bool)`

SetVerifyCertificateNo sets VerifyCertificateNo field to given value.

### HasVerifyCertificateNo

`func (o *ECertificateUsageCriteriaType) HasVerifyCertificateNo() bool`

HasVerifyCertificateNo returns a boolean if a field has been set.

### GetWeb

`func (o *ECertificateUsageCriteriaType) GetWeb() bool`

GetWeb returns the Web field if non-nil, zero value otherwise.

### GetWebOk

`func (o *ECertificateUsageCriteriaType) GetWebOk() (*bool, bool)`

GetWebOk returns a tuple with the Web field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWeb

`func (o *ECertificateUsageCriteriaType) SetWeb(v bool)`

SetWeb sets Web field to given value.

### HasWeb

`func (o *ECertificateUsageCriteriaType) HasWeb() bool`

HasWeb returns a boolean if a field has been set.

### GetWebAllowed

`func (o *ECertificateUsageCriteriaType) GetWebAllowed() bool`

GetWebAllowed returns the WebAllowed field if non-nil, zero value otherwise.

### GetWebAllowedOk

`func (o *ECertificateUsageCriteriaType) GetWebAllowedOk() (*bool, bool)`

GetWebAllowedOk returns a tuple with the WebAllowed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWebAllowed

`func (o *ECertificateUsageCriteriaType) SetWebAllowed(v bool)`

SetWebAllowed sets WebAllowed field to given value.

### HasWebAllowed

`func (o *ECertificateUsageCriteriaType) HasWebAllowed() bool`

HasWebAllowed returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


