# MembershipCardValidationRuleType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Formula** | Pointer to **string** | Formula used for card validation. Only valid in case of user defined validation. | [optional] 
**Length** | Pointer to **string** | Valid lengths of card number. | [optional] 
**Prefix** | Pointer to **string** | Valid card number prefix. | [optional] 
**Ranges** | Pointer to [**CardRangesType**](CardRangesType.md) |  | [optional] 
**Rule** | Pointer to [**MembershipCardValidationRuleTypeType**](MembershipCardValidationRuleTypeType.md) |  | [optional] 

## Methods

### NewMembershipCardValidationRuleType

`func NewMembershipCardValidationRuleType() *MembershipCardValidationRuleType`

NewMembershipCardValidationRuleType instantiates a new MembershipCardValidationRuleType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipCardValidationRuleTypeWithDefaults

`func NewMembershipCardValidationRuleTypeWithDefaults() *MembershipCardValidationRuleType`

NewMembershipCardValidationRuleTypeWithDefaults instantiates a new MembershipCardValidationRuleType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFormula

`func (o *MembershipCardValidationRuleType) GetFormula() string`

GetFormula returns the Formula field if non-nil, zero value otherwise.

### GetFormulaOk

`func (o *MembershipCardValidationRuleType) GetFormulaOk() (*string, bool)`

GetFormulaOk returns a tuple with the Formula field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormula

`func (o *MembershipCardValidationRuleType) SetFormula(v string)`

SetFormula sets Formula field to given value.

### HasFormula

`func (o *MembershipCardValidationRuleType) HasFormula() bool`

HasFormula returns a boolean if a field has been set.

### GetLength

`func (o *MembershipCardValidationRuleType) GetLength() string`

GetLength returns the Length field if non-nil, zero value otherwise.

### GetLengthOk

`func (o *MembershipCardValidationRuleType) GetLengthOk() (*string, bool)`

GetLengthOk returns a tuple with the Length field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLength

`func (o *MembershipCardValidationRuleType) SetLength(v string)`

SetLength sets Length field to given value.

### HasLength

`func (o *MembershipCardValidationRuleType) HasLength() bool`

HasLength returns a boolean if a field has been set.

### GetPrefix

`func (o *MembershipCardValidationRuleType) GetPrefix() string`

GetPrefix returns the Prefix field if non-nil, zero value otherwise.

### GetPrefixOk

`func (o *MembershipCardValidationRuleType) GetPrefixOk() (*string, bool)`

GetPrefixOk returns a tuple with the Prefix field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrefix

`func (o *MembershipCardValidationRuleType) SetPrefix(v string)`

SetPrefix sets Prefix field to given value.

### HasPrefix

`func (o *MembershipCardValidationRuleType) HasPrefix() bool`

HasPrefix returns a boolean if a field has been set.

### GetRanges

`func (o *MembershipCardValidationRuleType) GetRanges() CardRangesType`

GetRanges returns the Ranges field if non-nil, zero value otherwise.

### GetRangesOk

`func (o *MembershipCardValidationRuleType) GetRangesOk() (*CardRangesType, bool)`

GetRangesOk returns a tuple with the Ranges field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRanges

`func (o *MembershipCardValidationRuleType) SetRanges(v CardRangesType)`

SetRanges sets Ranges field to given value.

### HasRanges

`func (o *MembershipCardValidationRuleType) HasRanges() bool`

HasRanges returns a boolean if a field has been set.

### GetRule

`func (o *MembershipCardValidationRuleType) GetRule() MembershipCardValidationRuleTypeType`

GetRule returns the Rule field if non-nil, zero value otherwise.

### GetRuleOk

`func (o *MembershipCardValidationRuleType) GetRuleOk() (*MembershipCardValidationRuleTypeType, bool)`

GetRuleOk returns a tuple with the Rule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRule

`func (o *MembershipCardValidationRuleType) SetRule(v MembershipCardValidationRuleTypeType)`

SetRule sets Rule field to given value.

### HasRule

`func (o *MembershipCardValidationRuleType) HasRule() bool`

HasRule returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


