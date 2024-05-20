# CardNumberDetailsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MembershipCardValidationRule** | Pointer to [**MembershipCardValidationRuleType**](MembershipCardValidationRuleType.md) |  | [optional] 
**CardNumberBasedOn** | Pointer to [**CardNumberGenerationModeType**](CardNumberGenerationModeType.md) |  | [optional] 
**Database** | Pointer to **string** | Indicates External System from which card number will be generated. | [optional] 
**AllowDuplicateCardNumbers** | Pointer to **bool** | Indicates if the multiple membership cards may be issued with the same membership number. | [optional] 
**ExpirationDateRequired** | Pointer to **bool** | Indicates if the membership expiration date is required for validation of the profile membership information. | [optional] 
**ChipAndPin** | Pointer to **bool** | Indicates is there a microchip that stores information which can be used to verify the validity of the membership and authenticate the customer based on a personal identification number (PIN). | [optional] 
**ValidationByInterface** | Pointer to **bool** | Indicates is the membership card is validated through the interface. | [optional] 

## Methods

### NewCardNumberDetailsType

`func NewCardNumberDetailsType() *CardNumberDetailsType`

NewCardNumberDetailsType instantiates a new CardNumberDetailsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCardNumberDetailsTypeWithDefaults

`func NewCardNumberDetailsTypeWithDefaults() *CardNumberDetailsType`

NewCardNumberDetailsTypeWithDefaults instantiates a new CardNumberDetailsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMembershipCardValidationRule

`func (o *CardNumberDetailsType) GetMembershipCardValidationRule() MembershipCardValidationRuleType`

GetMembershipCardValidationRule returns the MembershipCardValidationRule field if non-nil, zero value otherwise.

### GetMembershipCardValidationRuleOk

`func (o *CardNumberDetailsType) GetMembershipCardValidationRuleOk() (*MembershipCardValidationRuleType, bool)`

GetMembershipCardValidationRuleOk returns a tuple with the MembershipCardValidationRule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipCardValidationRule

`func (o *CardNumberDetailsType) SetMembershipCardValidationRule(v MembershipCardValidationRuleType)`

SetMembershipCardValidationRule sets MembershipCardValidationRule field to given value.

### HasMembershipCardValidationRule

`func (o *CardNumberDetailsType) HasMembershipCardValidationRule() bool`

HasMembershipCardValidationRule returns a boolean if a field has been set.

### GetCardNumberBasedOn

`func (o *CardNumberDetailsType) GetCardNumberBasedOn() CardNumberGenerationModeType`

GetCardNumberBasedOn returns the CardNumberBasedOn field if non-nil, zero value otherwise.

### GetCardNumberBasedOnOk

`func (o *CardNumberDetailsType) GetCardNumberBasedOnOk() (*CardNumberGenerationModeType, bool)`

GetCardNumberBasedOnOk returns a tuple with the CardNumberBasedOn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardNumberBasedOn

`func (o *CardNumberDetailsType) SetCardNumberBasedOn(v CardNumberGenerationModeType)`

SetCardNumberBasedOn sets CardNumberBasedOn field to given value.

### HasCardNumberBasedOn

`func (o *CardNumberDetailsType) HasCardNumberBasedOn() bool`

HasCardNumberBasedOn returns a boolean if a field has been set.

### GetDatabase

`func (o *CardNumberDetailsType) GetDatabase() string`

GetDatabase returns the Database field if non-nil, zero value otherwise.

### GetDatabaseOk

`func (o *CardNumberDetailsType) GetDatabaseOk() (*string, bool)`

GetDatabaseOk returns a tuple with the Database field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDatabase

`func (o *CardNumberDetailsType) SetDatabase(v string)`

SetDatabase sets Database field to given value.

### HasDatabase

`func (o *CardNumberDetailsType) HasDatabase() bool`

HasDatabase returns a boolean if a field has been set.

### GetAllowDuplicateCardNumbers

`func (o *CardNumberDetailsType) GetAllowDuplicateCardNumbers() bool`

GetAllowDuplicateCardNumbers returns the AllowDuplicateCardNumbers field if non-nil, zero value otherwise.

### GetAllowDuplicateCardNumbersOk

`func (o *CardNumberDetailsType) GetAllowDuplicateCardNumbersOk() (*bool, bool)`

GetAllowDuplicateCardNumbersOk returns a tuple with the AllowDuplicateCardNumbers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowDuplicateCardNumbers

`func (o *CardNumberDetailsType) SetAllowDuplicateCardNumbers(v bool)`

SetAllowDuplicateCardNumbers sets AllowDuplicateCardNumbers field to given value.

### HasAllowDuplicateCardNumbers

`func (o *CardNumberDetailsType) HasAllowDuplicateCardNumbers() bool`

HasAllowDuplicateCardNumbers returns a boolean if a field has been set.

### GetExpirationDateRequired

`func (o *CardNumberDetailsType) GetExpirationDateRequired() bool`

GetExpirationDateRequired returns the ExpirationDateRequired field if non-nil, zero value otherwise.

### GetExpirationDateRequiredOk

`func (o *CardNumberDetailsType) GetExpirationDateRequiredOk() (*bool, bool)`

GetExpirationDateRequiredOk returns a tuple with the ExpirationDateRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpirationDateRequired

`func (o *CardNumberDetailsType) SetExpirationDateRequired(v bool)`

SetExpirationDateRequired sets ExpirationDateRequired field to given value.

### HasExpirationDateRequired

`func (o *CardNumberDetailsType) HasExpirationDateRequired() bool`

HasExpirationDateRequired returns a boolean if a field has been set.

### GetChipAndPin

`func (o *CardNumberDetailsType) GetChipAndPin() bool`

GetChipAndPin returns the ChipAndPin field if non-nil, zero value otherwise.

### GetChipAndPinOk

`func (o *CardNumberDetailsType) GetChipAndPinOk() (*bool, bool)`

GetChipAndPinOk returns a tuple with the ChipAndPin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChipAndPin

`func (o *CardNumberDetailsType) SetChipAndPin(v bool)`

SetChipAndPin sets ChipAndPin field to given value.

### HasChipAndPin

`func (o *CardNumberDetailsType) HasChipAndPin() bool`

HasChipAndPin returns a boolean if a field has been set.

### GetValidationByInterface

`func (o *CardNumberDetailsType) GetValidationByInterface() bool`

GetValidationByInterface returns the ValidationByInterface field if non-nil, zero value otherwise.

### GetValidationByInterfaceOk

`func (o *CardNumberDetailsType) GetValidationByInterfaceOk() (*bool, bool)`

GetValidationByInterfaceOk returns a tuple with the ValidationByInterface field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValidationByInterface

`func (o *CardNumberDetailsType) SetValidationByInterface(v bool)`

SetValidationByInterface sets ValidationByInterface field to given value.

### HasValidationByInterface

`func (o *CardNumberDetailsType) HasValidationByInterface() bool`

HasValidationByInterface returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


