# NegotiatedInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CorporateAgreementId** | Pointer to **string** | The master identifier for multiple offices/locations under the same company profile. This is optional | [optional] 
**ComissionCode** | Pointer to **string** | Informational purposes only in numeric format. | [optional] 
**Order** | Pointer to **int32** | The sell order. | [optional] 
**Inactive** | Pointer to **bool** | Negotiated Rate is inactive or not | [optional] 
**Start** | Pointer to **string** | The starting value of the date range. | [optional] 
**End** | Pointer to **string** | The ending value of the date range. | [optional] 

## Methods

### NewNegotiatedInfoType

`func NewNegotiatedInfoType() *NegotiatedInfoType`

NewNegotiatedInfoType instantiates a new NegotiatedInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNegotiatedInfoTypeWithDefaults

`func NewNegotiatedInfoTypeWithDefaults() *NegotiatedInfoType`

NewNegotiatedInfoTypeWithDefaults instantiates a new NegotiatedInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCorporateAgreementId

`func (o *NegotiatedInfoType) GetCorporateAgreementId() string`

GetCorporateAgreementId returns the CorporateAgreementId field if non-nil, zero value otherwise.

### GetCorporateAgreementIdOk

`func (o *NegotiatedInfoType) GetCorporateAgreementIdOk() (*string, bool)`

GetCorporateAgreementIdOk returns a tuple with the CorporateAgreementId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCorporateAgreementId

`func (o *NegotiatedInfoType) SetCorporateAgreementId(v string)`

SetCorporateAgreementId sets CorporateAgreementId field to given value.

### HasCorporateAgreementId

`func (o *NegotiatedInfoType) HasCorporateAgreementId() bool`

HasCorporateAgreementId returns a boolean if a field has been set.

### GetComissionCode

`func (o *NegotiatedInfoType) GetComissionCode() string`

GetComissionCode returns the ComissionCode field if non-nil, zero value otherwise.

### GetComissionCodeOk

`func (o *NegotiatedInfoType) GetComissionCodeOk() (*string, bool)`

GetComissionCodeOk returns a tuple with the ComissionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComissionCode

`func (o *NegotiatedInfoType) SetComissionCode(v string)`

SetComissionCode sets ComissionCode field to given value.

### HasComissionCode

`func (o *NegotiatedInfoType) HasComissionCode() bool`

HasComissionCode returns a boolean if a field has been set.

### GetOrder

`func (o *NegotiatedInfoType) GetOrder() int32`

GetOrder returns the Order field if non-nil, zero value otherwise.

### GetOrderOk

`func (o *NegotiatedInfoType) GetOrderOk() (*int32, bool)`

GetOrderOk returns a tuple with the Order field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrder

`func (o *NegotiatedInfoType) SetOrder(v int32)`

SetOrder sets Order field to given value.

### HasOrder

`func (o *NegotiatedInfoType) HasOrder() bool`

HasOrder returns a boolean if a field has been set.

### GetInactive

`func (o *NegotiatedInfoType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *NegotiatedInfoType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *NegotiatedInfoType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *NegotiatedInfoType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetStart

`func (o *NegotiatedInfoType) GetStart() string`

GetStart returns the Start field if non-nil, zero value otherwise.

### GetStartOk

`func (o *NegotiatedInfoType) GetStartOk() (*string, bool)`

GetStartOk returns a tuple with the Start field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStart

`func (o *NegotiatedInfoType) SetStart(v string)`

SetStart sets Start field to given value.

### HasStart

`func (o *NegotiatedInfoType) HasStart() bool`

HasStart returns a boolean if a field has been set.

### GetEnd

`func (o *NegotiatedInfoType) GetEnd() string`

GetEnd returns the End field if non-nil, zero value otherwise.

### GetEndOk

`func (o *NegotiatedInfoType) GetEndOk() (*string, bool)`

GetEndOk returns a tuple with the End field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnd

`func (o *NegotiatedInfoType) SetEnd(v string)`

SetEnd sets End field to given value.

### HasEnd

`func (o *NegotiatedInfoType) HasEnd() bool`

HasEnd returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


