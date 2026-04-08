# HotelTransactionDiscountType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | **string** | Indicates for which hotel this transaction discount apply to. | 
**TransactionDiscountCode** | **string** | Unique code of the transaction discount. | 
**Description** | **string** | Description of the transaction discount. | 
**RuleType** | [**TransactionDiscountRuleType**](TransactionDiscountRuleType.md) |  | 
**CodeType** | [**TransactionDiscountCodeType**](TransactionDiscountCodeType.md) |  | 
**Amount** | Pointer to **float64** | The amount applicable to the transaction discount.This would be a positive amount indicating the discount. | [optional] 
**Percent** | Pointer to **float32** | A percentage value if the transaction discount is percentage based. | [optional] 
**Inactive** | Pointer to **bool** | Indicates whether the transaction discount is inactive or not. | [optional] 
**OrderSequence** | Pointer to **float32** | Display Order sequence. | [optional] 
**TransactionDiscountId** | Pointer to **float32** | Unique code of the transaction discount. | [optional] 
**DiscountAttributes** | [**[]TransactionDiscountsAttributeType**](TransactionDiscountsAttributeType.md) | Holds Transaction Discounts Attributes details.If discount is applied to a membership type, only membership type details are required. If discount is applied on a membership level , membership type and membership level details are required. | 
**ArticleCodes** | Pointer to **[]string** | Collection of article codes eligible for transaction discounts. | [optional] 
**TransactionCodes** | Pointer to **[]string** | Collection of transaction codes eligible for transaction discounts. | [optional] 

## Methods

### NewHotelTransactionDiscountType

`func NewHotelTransactionDiscountType(hotelId string, transactionDiscountCode string, description string, ruleType TransactionDiscountRuleType, codeType TransactionDiscountCodeType, discountAttributes []TransactionDiscountsAttributeType, ) *HotelTransactionDiscountType`

NewHotelTransactionDiscountType instantiates a new HotelTransactionDiscountType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHotelTransactionDiscountTypeWithDefaults

`func NewHotelTransactionDiscountTypeWithDefaults() *HotelTransactionDiscountType`

NewHotelTransactionDiscountTypeWithDefaults instantiates a new HotelTransactionDiscountType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *HotelTransactionDiscountType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *HotelTransactionDiscountType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *HotelTransactionDiscountType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.


### GetTransactionDiscountCode

`func (o *HotelTransactionDiscountType) GetTransactionDiscountCode() string`

GetTransactionDiscountCode returns the TransactionDiscountCode field if non-nil, zero value otherwise.

### GetTransactionDiscountCodeOk

`func (o *HotelTransactionDiscountType) GetTransactionDiscountCodeOk() (*string, bool)`

GetTransactionDiscountCodeOk returns a tuple with the TransactionDiscountCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionDiscountCode

`func (o *HotelTransactionDiscountType) SetTransactionDiscountCode(v string)`

SetTransactionDiscountCode sets TransactionDiscountCode field to given value.


### GetDescription

`func (o *HotelTransactionDiscountType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *HotelTransactionDiscountType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *HotelTransactionDiscountType) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetRuleType

`func (o *HotelTransactionDiscountType) GetRuleType() TransactionDiscountRuleType`

GetRuleType returns the RuleType field if non-nil, zero value otherwise.

### GetRuleTypeOk

`func (o *HotelTransactionDiscountType) GetRuleTypeOk() (*TransactionDiscountRuleType, bool)`

GetRuleTypeOk returns a tuple with the RuleType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRuleType

`func (o *HotelTransactionDiscountType) SetRuleType(v TransactionDiscountRuleType)`

SetRuleType sets RuleType field to given value.


### GetCodeType

`func (o *HotelTransactionDiscountType) GetCodeType() TransactionDiscountCodeType`

GetCodeType returns the CodeType field if non-nil, zero value otherwise.

### GetCodeTypeOk

`func (o *HotelTransactionDiscountType) GetCodeTypeOk() (*TransactionDiscountCodeType, bool)`

GetCodeTypeOk returns a tuple with the CodeType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCodeType

`func (o *HotelTransactionDiscountType) SetCodeType(v TransactionDiscountCodeType)`

SetCodeType sets CodeType field to given value.


### GetAmount

`func (o *HotelTransactionDiscountType) GetAmount() float64`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *HotelTransactionDiscountType) GetAmountOk() (*float64, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *HotelTransactionDiscountType) SetAmount(v float64)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *HotelTransactionDiscountType) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetPercent

`func (o *HotelTransactionDiscountType) GetPercent() float32`

GetPercent returns the Percent field if non-nil, zero value otherwise.

### GetPercentOk

`func (o *HotelTransactionDiscountType) GetPercentOk() (*float32, bool)`

GetPercentOk returns a tuple with the Percent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPercent

`func (o *HotelTransactionDiscountType) SetPercent(v float32)`

SetPercent sets Percent field to given value.

### HasPercent

`func (o *HotelTransactionDiscountType) HasPercent() bool`

HasPercent returns a boolean if a field has been set.

### GetInactive

`func (o *HotelTransactionDiscountType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *HotelTransactionDiscountType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *HotelTransactionDiscountType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *HotelTransactionDiscountType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetOrderSequence

`func (o *HotelTransactionDiscountType) GetOrderSequence() float32`

GetOrderSequence returns the OrderSequence field if non-nil, zero value otherwise.

### GetOrderSequenceOk

`func (o *HotelTransactionDiscountType) GetOrderSequenceOk() (*float32, bool)`

GetOrderSequenceOk returns a tuple with the OrderSequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderSequence

`func (o *HotelTransactionDiscountType) SetOrderSequence(v float32)`

SetOrderSequence sets OrderSequence field to given value.

### HasOrderSequence

`func (o *HotelTransactionDiscountType) HasOrderSequence() bool`

HasOrderSequence returns a boolean if a field has been set.

### GetTransactionDiscountId

`func (o *HotelTransactionDiscountType) GetTransactionDiscountId() float32`

GetTransactionDiscountId returns the TransactionDiscountId field if non-nil, zero value otherwise.

### GetTransactionDiscountIdOk

`func (o *HotelTransactionDiscountType) GetTransactionDiscountIdOk() (*float32, bool)`

GetTransactionDiscountIdOk returns a tuple with the TransactionDiscountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionDiscountId

`func (o *HotelTransactionDiscountType) SetTransactionDiscountId(v float32)`

SetTransactionDiscountId sets TransactionDiscountId field to given value.

### HasTransactionDiscountId

`func (o *HotelTransactionDiscountType) HasTransactionDiscountId() bool`

HasTransactionDiscountId returns a boolean if a field has been set.

### GetDiscountAttributes

`func (o *HotelTransactionDiscountType) GetDiscountAttributes() []TransactionDiscountsAttributeType`

GetDiscountAttributes returns the DiscountAttributes field if non-nil, zero value otherwise.

### GetDiscountAttributesOk

`func (o *HotelTransactionDiscountType) GetDiscountAttributesOk() (*[]TransactionDiscountsAttributeType, bool)`

GetDiscountAttributesOk returns a tuple with the DiscountAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscountAttributes

`func (o *HotelTransactionDiscountType) SetDiscountAttributes(v []TransactionDiscountsAttributeType)`

SetDiscountAttributes sets DiscountAttributes field to given value.


### GetArticleCodes

`func (o *HotelTransactionDiscountType) GetArticleCodes() []string`

GetArticleCodes returns the ArticleCodes field if non-nil, zero value otherwise.

### GetArticleCodesOk

`func (o *HotelTransactionDiscountType) GetArticleCodesOk() (*[]string, bool)`

GetArticleCodesOk returns a tuple with the ArticleCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArticleCodes

`func (o *HotelTransactionDiscountType) SetArticleCodes(v []string)`

SetArticleCodes sets ArticleCodes field to given value.

### HasArticleCodes

`func (o *HotelTransactionDiscountType) HasArticleCodes() bool`

HasArticleCodes returns a boolean if a field has been set.

### GetTransactionCodes

`func (o *HotelTransactionDiscountType) GetTransactionCodes() []string`

GetTransactionCodes returns the TransactionCodes field if non-nil, zero value otherwise.

### GetTransactionCodesOk

`func (o *HotelTransactionDiscountType) GetTransactionCodesOk() (*[]string, bool)`

GetTransactionCodesOk returns a tuple with the TransactionCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCodes

`func (o *HotelTransactionDiscountType) SetTransactionCodes(v []string)`

SetTransactionCodes sets TransactionCodes field to given value.

### HasTransactionCodes

`func (o *HotelTransactionDiscountType) HasTransactionCodes() bool`

HasTransactionCodes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


