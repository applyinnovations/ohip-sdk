# BenefitType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to **string** | Benefit code associated with a membership. | [optional] 
**Message** | Pointer to **string** | Processing message for membership benefit. | [optional] 
**Inactive** | Pointer to **bool** | Indicates whether membership benefit is active or inactive. | [optional] 

## Methods

### NewBenefitType

`func NewBenefitType() *BenefitType`

NewBenefitType instantiates a new BenefitType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBenefitTypeWithDefaults

`func NewBenefitTypeWithDefaults() *BenefitType`

NewBenefitTypeWithDefaults instantiates a new BenefitType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *BenefitType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *BenefitType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *BenefitType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *BenefitType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetMessage

`func (o *BenefitType) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *BenefitType) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *BenefitType) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *BenefitType) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetInactive

`func (o *BenefitType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *BenefitType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *BenefitType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *BenefitType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


