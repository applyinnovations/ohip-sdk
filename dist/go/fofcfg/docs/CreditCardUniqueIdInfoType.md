# CreditCardUniqueIdInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActionType** | Pointer to [**CreditCardServiceActionType**](CreditCardServiceActionType.md) |  | [optional] 
**CardPresent** | Pointer to **bool** | Flag to determine if the credit card was swiped/manually entered , This element is only used when PAYMENT SERVICES DIRECTIVE (PSD2) Opera Control is active. | [optional] 
**CitId** | Pointer to **string** | Customer Initiated Transaction(CIT) Id for Credit Cards. This is only used when PAYMENT SERVICES DIRECTIVE (PSD2) Opera Control is active. | [optional] 
**CreditCardName** | Pointer to **string** | Card name holder. | [optional] 
**CreditCardNumber** | Pointer to **string** | Credit card number. | [optional] 
**CreditCardNumberLast4Digits** | Pointer to **string** | Last 4 digits of a credit card. | [optional] 
**CreditCardType** | Pointer to **string** | Credit card type. | [optional] 
**ErrorCode** | Pointer to **string** | Error code for a unique id request failure. | [optional] 
**ErrorMessage** | Pointer to **string** | Error message for a unique id request failure. | [optional] 
**ExpirationDateString** | Pointer to **string** | Expiration date in string representation. | [optional] 
**SuccessYn** | Pointer to **string** | Success flag after requesting a unique id. | [optional] 
**TerminalId** | Pointer to **string** | Terminal ID from where this request originated. | [optional] 
**UniqueId** | Pointer to **string** | Unique id of credit card. | [optional] 

## Methods

### NewCreditCardUniqueIdInfoType

`func NewCreditCardUniqueIdInfoType() *CreditCardUniqueIdInfoType`

NewCreditCardUniqueIdInfoType instantiates a new CreditCardUniqueIdInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreditCardUniqueIdInfoTypeWithDefaults

`func NewCreditCardUniqueIdInfoTypeWithDefaults() *CreditCardUniqueIdInfoType`

NewCreditCardUniqueIdInfoTypeWithDefaults instantiates a new CreditCardUniqueIdInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActionType

`func (o *CreditCardUniqueIdInfoType) GetActionType() CreditCardServiceActionType`

GetActionType returns the ActionType field if non-nil, zero value otherwise.

### GetActionTypeOk

`func (o *CreditCardUniqueIdInfoType) GetActionTypeOk() (*CreditCardServiceActionType, bool)`

GetActionTypeOk returns a tuple with the ActionType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActionType

`func (o *CreditCardUniqueIdInfoType) SetActionType(v CreditCardServiceActionType)`

SetActionType sets ActionType field to given value.

### HasActionType

`func (o *CreditCardUniqueIdInfoType) HasActionType() bool`

HasActionType returns a boolean if a field has been set.

### GetCardPresent

`func (o *CreditCardUniqueIdInfoType) GetCardPresent() bool`

GetCardPresent returns the CardPresent field if non-nil, zero value otherwise.

### GetCardPresentOk

`func (o *CreditCardUniqueIdInfoType) GetCardPresentOk() (*bool, bool)`

GetCardPresentOk returns a tuple with the CardPresent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardPresent

`func (o *CreditCardUniqueIdInfoType) SetCardPresent(v bool)`

SetCardPresent sets CardPresent field to given value.

### HasCardPresent

`func (o *CreditCardUniqueIdInfoType) HasCardPresent() bool`

HasCardPresent returns a boolean if a field has been set.

### GetCitId

`func (o *CreditCardUniqueIdInfoType) GetCitId() string`

GetCitId returns the CitId field if non-nil, zero value otherwise.

### GetCitIdOk

`func (o *CreditCardUniqueIdInfoType) GetCitIdOk() (*string, bool)`

GetCitIdOk returns a tuple with the CitId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCitId

`func (o *CreditCardUniqueIdInfoType) SetCitId(v string)`

SetCitId sets CitId field to given value.

### HasCitId

`func (o *CreditCardUniqueIdInfoType) HasCitId() bool`

HasCitId returns a boolean if a field has been set.

### GetCreditCardName

`func (o *CreditCardUniqueIdInfoType) GetCreditCardName() string`

GetCreditCardName returns the CreditCardName field if non-nil, zero value otherwise.

### GetCreditCardNameOk

`func (o *CreditCardUniqueIdInfoType) GetCreditCardNameOk() (*string, bool)`

GetCreditCardNameOk returns a tuple with the CreditCardName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreditCardName

`func (o *CreditCardUniqueIdInfoType) SetCreditCardName(v string)`

SetCreditCardName sets CreditCardName field to given value.

### HasCreditCardName

`func (o *CreditCardUniqueIdInfoType) HasCreditCardName() bool`

HasCreditCardName returns a boolean if a field has been set.

### GetCreditCardNumber

`func (o *CreditCardUniqueIdInfoType) GetCreditCardNumber() string`

GetCreditCardNumber returns the CreditCardNumber field if non-nil, zero value otherwise.

### GetCreditCardNumberOk

`func (o *CreditCardUniqueIdInfoType) GetCreditCardNumberOk() (*string, bool)`

GetCreditCardNumberOk returns a tuple with the CreditCardNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreditCardNumber

`func (o *CreditCardUniqueIdInfoType) SetCreditCardNumber(v string)`

SetCreditCardNumber sets CreditCardNumber field to given value.

### HasCreditCardNumber

`func (o *CreditCardUniqueIdInfoType) HasCreditCardNumber() bool`

HasCreditCardNumber returns a boolean if a field has been set.

### GetCreditCardNumberLast4Digits

`func (o *CreditCardUniqueIdInfoType) GetCreditCardNumberLast4Digits() string`

GetCreditCardNumberLast4Digits returns the CreditCardNumberLast4Digits field if non-nil, zero value otherwise.

### GetCreditCardNumberLast4DigitsOk

`func (o *CreditCardUniqueIdInfoType) GetCreditCardNumberLast4DigitsOk() (*string, bool)`

GetCreditCardNumberLast4DigitsOk returns a tuple with the CreditCardNumberLast4Digits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreditCardNumberLast4Digits

`func (o *CreditCardUniqueIdInfoType) SetCreditCardNumberLast4Digits(v string)`

SetCreditCardNumberLast4Digits sets CreditCardNumberLast4Digits field to given value.

### HasCreditCardNumberLast4Digits

`func (o *CreditCardUniqueIdInfoType) HasCreditCardNumberLast4Digits() bool`

HasCreditCardNumberLast4Digits returns a boolean if a field has been set.

### GetCreditCardType

`func (o *CreditCardUniqueIdInfoType) GetCreditCardType() string`

GetCreditCardType returns the CreditCardType field if non-nil, zero value otherwise.

### GetCreditCardTypeOk

`func (o *CreditCardUniqueIdInfoType) GetCreditCardTypeOk() (*string, bool)`

GetCreditCardTypeOk returns a tuple with the CreditCardType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreditCardType

`func (o *CreditCardUniqueIdInfoType) SetCreditCardType(v string)`

SetCreditCardType sets CreditCardType field to given value.

### HasCreditCardType

`func (o *CreditCardUniqueIdInfoType) HasCreditCardType() bool`

HasCreditCardType returns a boolean if a field has been set.

### GetErrorCode

`func (o *CreditCardUniqueIdInfoType) GetErrorCode() string`

GetErrorCode returns the ErrorCode field if non-nil, zero value otherwise.

### GetErrorCodeOk

`func (o *CreditCardUniqueIdInfoType) GetErrorCodeOk() (*string, bool)`

GetErrorCodeOk returns a tuple with the ErrorCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorCode

`func (o *CreditCardUniqueIdInfoType) SetErrorCode(v string)`

SetErrorCode sets ErrorCode field to given value.

### HasErrorCode

`func (o *CreditCardUniqueIdInfoType) HasErrorCode() bool`

HasErrorCode returns a boolean if a field has been set.

### GetErrorMessage

`func (o *CreditCardUniqueIdInfoType) GetErrorMessage() string`

GetErrorMessage returns the ErrorMessage field if non-nil, zero value otherwise.

### GetErrorMessageOk

`func (o *CreditCardUniqueIdInfoType) GetErrorMessageOk() (*string, bool)`

GetErrorMessageOk returns a tuple with the ErrorMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorMessage

`func (o *CreditCardUniqueIdInfoType) SetErrorMessage(v string)`

SetErrorMessage sets ErrorMessage field to given value.

### HasErrorMessage

`func (o *CreditCardUniqueIdInfoType) HasErrorMessage() bool`

HasErrorMessage returns a boolean if a field has been set.

### GetExpirationDateString

`func (o *CreditCardUniqueIdInfoType) GetExpirationDateString() string`

GetExpirationDateString returns the ExpirationDateString field if non-nil, zero value otherwise.

### GetExpirationDateStringOk

`func (o *CreditCardUniqueIdInfoType) GetExpirationDateStringOk() (*string, bool)`

GetExpirationDateStringOk returns a tuple with the ExpirationDateString field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpirationDateString

`func (o *CreditCardUniqueIdInfoType) SetExpirationDateString(v string)`

SetExpirationDateString sets ExpirationDateString field to given value.

### HasExpirationDateString

`func (o *CreditCardUniqueIdInfoType) HasExpirationDateString() bool`

HasExpirationDateString returns a boolean if a field has been set.

### GetSuccessYn

`func (o *CreditCardUniqueIdInfoType) GetSuccessYn() string`

GetSuccessYn returns the SuccessYn field if non-nil, zero value otherwise.

### GetSuccessYnOk

`func (o *CreditCardUniqueIdInfoType) GetSuccessYnOk() (*string, bool)`

GetSuccessYnOk returns a tuple with the SuccessYn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuccessYn

`func (o *CreditCardUniqueIdInfoType) SetSuccessYn(v string)`

SetSuccessYn sets SuccessYn field to given value.

### HasSuccessYn

`func (o *CreditCardUniqueIdInfoType) HasSuccessYn() bool`

HasSuccessYn returns a boolean if a field has been set.

### GetTerminalId

`func (o *CreditCardUniqueIdInfoType) GetTerminalId() string`

GetTerminalId returns the TerminalId field if non-nil, zero value otherwise.

### GetTerminalIdOk

`func (o *CreditCardUniqueIdInfoType) GetTerminalIdOk() (*string, bool)`

GetTerminalIdOk returns a tuple with the TerminalId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTerminalId

`func (o *CreditCardUniqueIdInfoType) SetTerminalId(v string)`

SetTerminalId sets TerminalId field to given value.

### HasTerminalId

`func (o *CreditCardUniqueIdInfoType) HasTerminalId() bool`

HasTerminalId returns a boolean if a field has been set.

### GetUniqueId

`func (o *CreditCardUniqueIdInfoType) GetUniqueId() string`

GetUniqueId returns the UniqueId field if non-nil, zero value otherwise.

### GetUniqueIdOk

`func (o *CreditCardUniqueIdInfoType) GetUniqueIdOk() (*string, bool)`

GetUniqueIdOk returns a tuple with the UniqueId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUniqueId

`func (o *CreditCardUniqueIdInfoType) SetUniqueId(v string)`

SetUniqueId sets UniqueId field to given value.

### HasUniqueId

`func (o *CreditCardUniqueIdInfoType) HasUniqueId() bool`

HasUniqueId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


