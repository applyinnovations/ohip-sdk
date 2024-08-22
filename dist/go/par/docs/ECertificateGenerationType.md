# ECertificateGenerationType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**GenerationDetail** | Pointer to **string** | Reason for which e-certificate was generated. | [optional] 
**ReferenceValue** | Pointer to **string** | Type of value that is in the certificate.valid values are membership_level. | [optional] 
**RuleId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 

## Methods

### NewECertificateGenerationType

`func NewECertificateGenerationType() *ECertificateGenerationType`

NewECertificateGenerationType instantiates a new ECertificateGenerationType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewECertificateGenerationTypeWithDefaults

`func NewECertificateGenerationTypeWithDefaults() *ECertificateGenerationType`

NewECertificateGenerationTypeWithDefaults instantiates a new ECertificateGenerationType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGenerationDetail

`func (o *ECertificateGenerationType) GetGenerationDetail() string`

GetGenerationDetail returns the GenerationDetail field if non-nil, zero value otherwise.

### GetGenerationDetailOk

`func (o *ECertificateGenerationType) GetGenerationDetailOk() (*string, bool)`

GetGenerationDetailOk returns a tuple with the GenerationDetail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGenerationDetail

`func (o *ECertificateGenerationType) SetGenerationDetail(v string)`

SetGenerationDetail sets GenerationDetail field to given value.

### HasGenerationDetail

`func (o *ECertificateGenerationType) HasGenerationDetail() bool`

HasGenerationDetail returns a boolean if a field has been set.

### GetReferenceValue

`func (o *ECertificateGenerationType) GetReferenceValue() string`

GetReferenceValue returns the ReferenceValue field if non-nil, zero value otherwise.

### GetReferenceValueOk

`func (o *ECertificateGenerationType) GetReferenceValueOk() (*string, bool)`

GetReferenceValueOk returns a tuple with the ReferenceValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReferenceValue

`func (o *ECertificateGenerationType) SetReferenceValue(v string)`

SetReferenceValue sets ReferenceValue field to given value.

### HasReferenceValue

`func (o *ECertificateGenerationType) HasReferenceValue() bool`

HasReferenceValue returns a boolean if a field has been set.

### GetRuleId

`func (o *ECertificateGenerationType) GetRuleId() UniqueIDType`

GetRuleId returns the RuleId field if non-nil, zero value otherwise.

### GetRuleIdOk

`func (o *ECertificateGenerationType) GetRuleIdOk() (*UniqueIDType, bool)`

GetRuleIdOk returns a tuple with the RuleId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRuleId

`func (o *ECertificateGenerationType) SetRuleId(v UniqueIDType)`

SetRuleId sets RuleId field to given value.

### HasRuleId

`func (o *ECertificateGenerationType) HasRuleId() bool`

HasRuleId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


