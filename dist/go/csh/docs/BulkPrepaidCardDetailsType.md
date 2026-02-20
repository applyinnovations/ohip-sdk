# BulkPrepaidCardDetailsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CardNo** | Pointer to **string** | Prepaid card / account number. | [optional] 
**CardNumberMasked** | Pointer to **string** | Masked Prepaid card / account number. | [optional] 
**Amount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**PinCode** | Pointer to **string** | Prepaid card pin code. | [optional] 
**CardDetails** | Pointer to [**PrepaidCardDetailsType**](PrepaidCardDetailsType.md) |  | [optional] 
**LastModifyDateTime** | Pointer to **string** | Time stamp of last modification. | [optional] 
**LastModifierId** | Pointer to **string** | Identifies the last software system or person to modify a record. | [optional] 
**PurgeDate** | Pointer to **string** | Date an item will be purged from a database (e.g., from a live database to an archive). | [optional] 
**GiftCard** | Pointer to **bool** | Indicates a gift card type. | [optional] 

## Methods

### NewBulkPrepaidCardDetailsType

`func NewBulkPrepaidCardDetailsType() *BulkPrepaidCardDetailsType`

NewBulkPrepaidCardDetailsType instantiates a new BulkPrepaidCardDetailsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBulkPrepaidCardDetailsTypeWithDefaults

`func NewBulkPrepaidCardDetailsTypeWithDefaults() *BulkPrepaidCardDetailsType`

NewBulkPrepaidCardDetailsTypeWithDefaults instantiates a new BulkPrepaidCardDetailsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCardNo

`func (o *BulkPrepaidCardDetailsType) GetCardNo() string`

GetCardNo returns the CardNo field if non-nil, zero value otherwise.

### GetCardNoOk

`func (o *BulkPrepaidCardDetailsType) GetCardNoOk() (*string, bool)`

GetCardNoOk returns a tuple with the CardNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardNo

`func (o *BulkPrepaidCardDetailsType) SetCardNo(v string)`

SetCardNo sets CardNo field to given value.

### HasCardNo

`func (o *BulkPrepaidCardDetailsType) HasCardNo() bool`

HasCardNo returns a boolean if a field has been set.

### GetCardNumberMasked

`func (o *BulkPrepaidCardDetailsType) GetCardNumberMasked() string`

GetCardNumberMasked returns the CardNumberMasked field if non-nil, zero value otherwise.

### GetCardNumberMaskedOk

`func (o *BulkPrepaidCardDetailsType) GetCardNumberMaskedOk() (*string, bool)`

GetCardNumberMaskedOk returns a tuple with the CardNumberMasked field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardNumberMasked

`func (o *BulkPrepaidCardDetailsType) SetCardNumberMasked(v string)`

SetCardNumberMasked sets CardNumberMasked field to given value.

### HasCardNumberMasked

`func (o *BulkPrepaidCardDetailsType) HasCardNumberMasked() bool`

HasCardNumberMasked returns a boolean if a field has been set.

### GetAmount

`func (o *BulkPrepaidCardDetailsType) GetAmount() CurrencyAmountType`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *BulkPrepaidCardDetailsType) GetAmountOk() (*CurrencyAmountType, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *BulkPrepaidCardDetailsType) SetAmount(v CurrencyAmountType)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *BulkPrepaidCardDetailsType) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetPinCode

`func (o *BulkPrepaidCardDetailsType) GetPinCode() string`

GetPinCode returns the PinCode field if non-nil, zero value otherwise.

### GetPinCodeOk

`func (o *BulkPrepaidCardDetailsType) GetPinCodeOk() (*string, bool)`

GetPinCodeOk returns a tuple with the PinCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPinCode

`func (o *BulkPrepaidCardDetailsType) SetPinCode(v string)`

SetPinCode sets PinCode field to given value.

### HasPinCode

`func (o *BulkPrepaidCardDetailsType) HasPinCode() bool`

HasPinCode returns a boolean if a field has been set.

### GetCardDetails

`func (o *BulkPrepaidCardDetailsType) GetCardDetails() PrepaidCardDetailsType`

GetCardDetails returns the CardDetails field if non-nil, zero value otherwise.

### GetCardDetailsOk

`func (o *BulkPrepaidCardDetailsType) GetCardDetailsOk() (*PrepaidCardDetailsType, bool)`

GetCardDetailsOk returns a tuple with the CardDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardDetails

`func (o *BulkPrepaidCardDetailsType) SetCardDetails(v PrepaidCardDetailsType)`

SetCardDetails sets CardDetails field to given value.

### HasCardDetails

`func (o *BulkPrepaidCardDetailsType) HasCardDetails() bool`

HasCardDetails returns a boolean if a field has been set.

### GetLastModifyDateTime

`func (o *BulkPrepaidCardDetailsType) GetLastModifyDateTime() string`

GetLastModifyDateTime returns the LastModifyDateTime field if non-nil, zero value otherwise.

### GetLastModifyDateTimeOk

`func (o *BulkPrepaidCardDetailsType) GetLastModifyDateTimeOk() (*string, bool)`

GetLastModifyDateTimeOk returns a tuple with the LastModifyDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifyDateTime

`func (o *BulkPrepaidCardDetailsType) SetLastModifyDateTime(v string)`

SetLastModifyDateTime sets LastModifyDateTime field to given value.

### HasLastModifyDateTime

`func (o *BulkPrepaidCardDetailsType) HasLastModifyDateTime() bool`

HasLastModifyDateTime returns a boolean if a field has been set.

### GetLastModifierId

`func (o *BulkPrepaidCardDetailsType) GetLastModifierId() string`

GetLastModifierId returns the LastModifierId field if non-nil, zero value otherwise.

### GetLastModifierIdOk

`func (o *BulkPrepaidCardDetailsType) GetLastModifierIdOk() (*string, bool)`

GetLastModifierIdOk returns a tuple with the LastModifierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifierId

`func (o *BulkPrepaidCardDetailsType) SetLastModifierId(v string)`

SetLastModifierId sets LastModifierId field to given value.

### HasLastModifierId

`func (o *BulkPrepaidCardDetailsType) HasLastModifierId() bool`

HasLastModifierId returns a boolean if a field has been set.

### GetPurgeDate

`func (o *BulkPrepaidCardDetailsType) GetPurgeDate() string`

GetPurgeDate returns the PurgeDate field if non-nil, zero value otherwise.

### GetPurgeDateOk

`func (o *BulkPrepaidCardDetailsType) GetPurgeDateOk() (*string, bool)`

GetPurgeDateOk returns a tuple with the PurgeDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPurgeDate

`func (o *BulkPrepaidCardDetailsType) SetPurgeDate(v string)`

SetPurgeDate sets PurgeDate field to given value.

### HasPurgeDate

`func (o *BulkPrepaidCardDetailsType) HasPurgeDate() bool`

HasPurgeDate returns a boolean if a field has been set.

### GetGiftCard

`func (o *BulkPrepaidCardDetailsType) GetGiftCard() bool`

GetGiftCard returns the GiftCard field if non-nil, zero value otherwise.

### GetGiftCardOk

`func (o *BulkPrepaidCardDetailsType) GetGiftCardOk() (*bool, bool)`

GetGiftCardOk returns a tuple with the GiftCard field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGiftCard

`func (o *BulkPrepaidCardDetailsType) SetGiftCard(v bool)`

SetGiftCard sets GiftCard field to given value.

### HasGiftCard

`func (o *BulkPrepaidCardDetailsType) HasGiftCard() bool`

HasGiftCard returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


