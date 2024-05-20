# TransactionCodeDetailType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to **string** | Code of transaction code setup. | [optional] 
**Description** | Pointer to **string** | Description of transaction code setup. | [optional] 
**DialedDigits** | Pointer to **string** | Dialed digits of transaction code setup. | [optional] 
**ItemizersShortInfo** | Pointer to [**[]ItemizerShortInfoType**](ItemizerShortInfoType.md) | Itemizer short info of transaction code setup. | [optional] 
**LineType** | Pointer to **string** | Line type of transaction code setup. | [optional] 
**PaymentNum** | Pointer to **string** | Payment number of transaction code setup. | [optional] 
**PostRoute** | Pointer to **string** | Post route of transaction code setup. | [optional] 
**RevenueCenter** | Pointer to **string** | Revenue center of transaction code setup. | [optional] 
**RowNum** | Pointer to **int32** | Row number of transaction code setup. | [optional] 
**ServingPeriod** | Pointer to **string** | Serving period of transaction code setup. | [optional] 
**Terminal** | Pointer to **string** | Terminal of transaction code setup. | [optional] 
**TipCode** | Pointer to **string** | Tip code of transaction code setup. | [optional] 
**UserId** | Pointer to **string** | User id of transaction code setup. | [optional] 

## Methods

### NewTransactionCodeDetailType

`func NewTransactionCodeDetailType() *TransactionCodeDetailType`

NewTransactionCodeDetailType instantiates a new TransactionCodeDetailType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransactionCodeDetailTypeWithDefaults

`func NewTransactionCodeDetailTypeWithDefaults() *TransactionCodeDetailType`

NewTransactionCodeDetailTypeWithDefaults instantiates a new TransactionCodeDetailType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *TransactionCodeDetailType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *TransactionCodeDetailType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *TransactionCodeDetailType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *TransactionCodeDetailType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDescription

`func (o *TransactionCodeDetailType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *TransactionCodeDetailType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *TransactionCodeDetailType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *TransactionCodeDetailType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDialedDigits

`func (o *TransactionCodeDetailType) GetDialedDigits() string`

GetDialedDigits returns the DialedDigits field if non-nil, zero value otherwise.

### GetDialedDigitsOk

`func (o *TransactionCodeDetailType) GetDialedDigitsOk() (*string, bool)`

GetDialedDigitsOk returns a tuple with the DialedDigits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDialedDigits

`func (o *TransactionCodeDetailType) SetDialedDigits(v string)`

SetDialedDigits sets DialedDigits field to given value.

### HasDialedDigits

`func (o *TransactionCodeDetailType) HasDialedDigits() bool`

HasDialedDigits returns a boolean if a field has been set.

### GetItemizersShortInfo

`func (o *TransactionCodeDetailType) GetItemizersShortInfo() []ItemizerShortInfoType`

GetItemizersShortInfo returns the ItemizersShortInfo field if non-nil, zero value otherwise.

### GetItemizersShortInfoOk

`func (o *TransactionCodeDetailType) GetItemizersShortInfoOk() (*[]ItemizerShortInfoType, bool)`

GetItemizersShortInfoOk returns a tuple with the ItemizersShortInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemizersShortInfo

`func (o *TransactionCodeDetailType) SetItemizersShortInfo(v []ItemizerShortInfoType)`

SetItemizersShortInfo sets ItemizersShortInfo field to given value.

### HasItemizersShortInfo

`func (o *TransactionCodeDetailType) HasItemizersShortInfo() bool`

HasItemizersShortInfo returns a boolean if a field has been set.

### GetLineType

`func (o *TransactionCodeDetailType) GetLineType() string`

GetLineType returns the LineType field if non-nil, zero value otherwise.

### GetLineTypeOk

`func (o *TransactionCodeDetailType) GetLineTypeOk() (*string, bool)`

GetLineTypeOk returns a tuple with the LineType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLineType

`func (o *TransactionCodeDetailType) SetLineType(v string)`

SetLineType sets LineType field to given value.

### HasLineType

`func (o *TransactionCodeDetailType) HasLineType() bool`

HasLineType returns a boolean if a field has been set.

### GetPaymentNum

`func (o *TransactionCodeDetailType) GetPaymentNum() string`

GetPaymentNum returns the PaymentNum field if non-nil, zero value otherwise.

### GetPaymentNumOk

`func (o *TransactionCodeDetailType) GetPaymentNumOk() (*string, bool)`

GetPaymentNumOk returns a tuple with the PaymentNum field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentNum

`func (o *TransactionCodeDetailType) SetPaymentNum(v string)`

SetPaymentNum sets PaymentNum field to given value.

### HasPaymentNum

`func (o *TransactionCodeDetailType) HasPaymentNum() bool`

HasPaymentNum returns a boolean if a field has been set.

### GetPostRoute

`func (o *TransactionCodeDetailType) GetPostRoute() string`

GetPostRoute returns the PostRoute field if non-nil, zero value otherwise.

### GetPostRouteOk

`func (o *TransactionCodeDetailType) GetPostRouteOk() (*string, bool)`

GetPostRouteOk returns a tuple with the PostRoute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostRoute

`func (o *TransactionCodeDetailType) SetPostRoute(v string)`

SetPostRoute sets PostRoute field to given value.

### HasPostRoute

`func (o *TransactionCodeDetailType) HasPostRoute() bool`

HasPostRoute returns a boolean if a field has been set.

### GetRevenueCenter

`func (o *TransactionCodeDetailType) GetRevenueCenter() string`

GetRevenueCenter returns the RevenueCenter field if non-nil, zero value otherwise.

### GetRevenueCenterOk

`func (o *TransactionCodeDetailType) GetRevenueCenterOk() (*string, bool)`

GetRevenueCenterOk returns a tuple with the RevenueCenter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueCenter

`func (o *TransactionCodeDetailType) SetRevenueCenter(v string)`

SetRevenueCenter sets RevenueCenter field to given value.

### HasRevenueCenter

`func (o *TransactionCodeDetailType) HasRevenueCenter() bool`

HasRevenueCenter returns a boolean if a field has been set.

### GetRowNum

`func (o *TransactionCodeDetailType) GetRowNum() int32`

GetRowNum returns the RowNum field if non-nil, zero value otherwise.

### GetRowNumOk

`func (o *TransactionCodeDetailType) GetRowNumOk() (*int32, bool)`

GetRowNumOk returns a tuple with the RowNum field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRowNum

`func (o *TransactionCodeDetailType) SetRowNum(v int32)`

SetRowNum sets RowNum field to given value.

### HasRowNum

`func (o *TransactionCodeDetailType) HasRowNum() bool`

HasRowNum returns a boolean if a field has been set.

### GetServingPeriod

`func (o *TransactionCodeDetailType) GetServingPeriod() string`

GetServingPeriod returns the ServingPeriod field if non-nil, zero value otherwise.

### GetServingPeriodOk

`func (o *TransactionCodeDetailType) GetServingPeriodOk() (*string, bool)`

GetServingPeriodOk returns a tuple with the ServingPeriod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServingPeriod

`func (o *TransactionCodeDetailType) SetServingPeriod(v string)`

SetServingPeriod sets ServingPeriod field to given value.

### HasServingPeriod

`func (o *TransactionCodeDetailType) HasServingPeriod() bool`

HasServingPeriod returns a boolean if a field has been set.

### GetTerminal

`func (o *TransactionCodeDetailType) GetTerminal() string`

GetTerminal returns the Terminal field if non-nil, zero value otherwise.

### GetTerminalOk

`func (o *TransactionCodeDetailType) GetTerminalOk() (*string, bool)`

GetTerminalOk returns a tuple with the Terminal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTerminal

`func (o *TransactionCodeDetailType) SetTerminal(v string)`

SetTerminal sets Terminal field to given value.

### HasTerminal

`func (o *TransactionCodeDetailType) HasTerminal() bool`

HasTerminal returns a boolean if a field has been set.

### GetTipCode

`func (o *TransactionCodeDetailType) GetTipCode() string`

GetTipCode returns the TipCode field if non-nil, zero value otherwise.

### GetTipCodeOk

`func (o *TransactionCodeDetailType) GetTipCodeOk() (*string, bool)`

GetTipCodeOk returns a tuple with the TipCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTipCode

`func (o *TransactionCodeDetailType) SetTipCode(v string)`

SetTipCode sets TipCode field to given value.

### HasTipCode

`func (o *TransactionCodeDetailType) HasTipCode() bool`

HasTipCode returns a boolean if a field has been set.

### GetUserId

`func (o *TransactionCodeDetailType) GetUserId() string`

GetUserId returns the UserId field if non-nil, zero value otherwise.

### GetUserIdOk

`func (o *TransactionCodeDetailType) GetUserIdOk() (*string, bool)`

GetUserIdOk returns a tuple with the UserId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserId

`func (o *TransactionCodeDetailType) SetUserId(v string)`

SetUserId sets UserId field to given value.

### HasUserId

`func (o *TransactionCodeDetailType) HasUserId() bool`

HasUserId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


