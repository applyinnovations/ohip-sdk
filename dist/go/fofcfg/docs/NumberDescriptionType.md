# NumberDescriptionType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**NumberCode** | Pointer to **string** | Used for Number specific codes for OPERA tables. Possible values of this pattern are 1, 10, 17, THOUSAND, BILLION, etc. | [optional] 
**Description** | Pointer to [**TranslationTextType4000**](TranslationTextType4000.md) |  | [optional] 

## Methods

### NewNumberDescriptionType

`func NewNumberDescriptionType() *NumberDescriptionType`

NewNumberDescriptionType instantiates a new NumberDescriptionType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNumberDescriptionTypeWithDefaults

`func NewNumberDescriptionTypeWithDefaults() *NumberDescriptionType`

NewNumberDescriptionTypeWithDefaults instantiates a new NumberDescriptionType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetNumberCode

`func (o *NumberDescriptionType) GetNumberCode() string`

GetNumberCode returns the NumberCode field if non-nil, zero value otherwise.

### GetNumberCodeOk

`func (o *NumberDescriptionType) GetNumberCodeOk() (*string, bool)`

GetNumberCodeOk returns a tuple with the NumberCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumberCode

`func (o *NumberDescriptionType) SetNumberCode(v string)`

SetNumberCode sets NumberCode field to given value.

### HasNumberCode

`func (o *NumberDescriptionType) HasNumberCode() bool`

HasNumberCode returns a boolean if a field has been set.

### GetDescription

`func (o *NumberDescriptionType) GetDescription() TranslationTextType4000`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *NumberDescriptionType) GetDescriptionOk() (*TranslationTextType4000, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *NumberDescriptionType) SetDescription(v TranslationTextType4000)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *NumberDescriptionType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


