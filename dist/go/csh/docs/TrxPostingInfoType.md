# TrxPostingInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Articles** | Pointer to [**[]ArticleInfoType**](ArticleInfoType.md) | The List of Articles defined for this transaction code, when using the Articles functionality. | [optional] 
**Description** | Pointer to **string** | Transaction codes info. | [optional] 
**HotelId** | Pointer to **string** | Hotel context of the Transaction code. | [optional] 
**MaximumPrice** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**MinimumPrice** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Price** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**PrintTrxReceipt** | Pointer to **bool** | Print receipt flag that tells whether the transaction receipt is to be printed or not. This is based on the transaction code. | [optional] 
**RoutingInstructionsId** | Pointer to **float32** | This is the Routing Instruction Id attached with Reservation. It is only used for internal purpose. It should not be used by external vendor or consumer. | [optional] 
**TransactionCode** | Pointer to **string** | Unique identifier for the Transaction code. | [optional] 
**TransactionGroup** | Pointer to **string** | Category of the transaction code. | [optional] 
**TransactionSubGroup** | Pointer to **string** | Sub category of the transaction code. | [optional] 
**TrxServiceType** | Pointer to **string** | Contains service type for transaction code. | [optional] 
**UniversalProductCode** | Pointer to **string** | Unique Universal product code of the transaction code. | [optional] 

## Methods

### NewTrxPostingInfoType

`func NewTrxPostingInfoType() *TrxPostingInfoType`

NewTrxPostingInfoType instantiates a new TrxPostingInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTrxPostingInfoTypeWithDefaults

`func NewTrxPostingInfoTypeWithDefaults() *TrxPostingInfoType`

NewTrxPostingInfoTypeWithDefaults instantiates a new TrxPostingInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetArticles

`func (o *TrxPostingInfoType) GetArticles() []ArticleInfoType`

GetArticles returns the Articles field if non-nil, zero value otherwise.

### GetArticlesOk

`func (o *TrxPostingInfoType) GetArticlesOk() (*[]ArticleInfoType, bool)`

GetArticlesOk returns a tuple with the Articles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArticles

`func (o *TrxPostingInfoType) SetArticles(v []ArticleInfoType)`

SetArticles sets Articles field to given value.

### HasArticles

`func (o *TrxPostingInfoType) HasArticles() bool`

HasArticles returns a boolean if a field has been set.

### GetDescription

`func (o *TrxPostingInfoType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *TrxPostingInfoType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *TrxPostingInfoType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *TrxPostingInfoType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetHotelId

`func (o *TrxPostingInfoType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *TrxPostingInfoType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *TrxPostingInfoType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *TrxPostingInfoType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetMaximumPrice

`func (o *TrxPostingInfoType) GetMaximumPrice() CurrencyAmountType`

GetMaximumPrice returns the MaximumPrice field if non-nil, zero value otherwise.

### GetMaximumPriceOk

`func (o *TrxPostingInfoType) GetMaximumPriceOk() (*CurrencyAmountType, bool)`

GetMaximumPriceOk returns a tuple with the MaximumPrice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaximumPrice

`func (o *TrxPostingInfoType) SetMaximumPrice(v CurrencyAmountType)`

SetMaximumPrice sets MaximumPrice field to given value.

### HasMaximumPrice

`func (o *TrxPostingInfoType) HasMaximumPrice() bool`

HasMaximumPrice returns a boolean if a field has been set.

### GetMinimumPrice

`func (o *TrxPostingInfoType) GetMinimumPrice() CurrencyAmountType`

GetMinimumPrice returns the MinimumPrice field if non-nil, zero value otherwise.

### GetMinimumPriceOk

`func (o *TrxPostingInfoType) GetMinimumPriceOk() (*CurrencyAmountType, bool)`

GetMinimumPriceOk returns a tuple with the MinimumPrice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinimumPrice

`func (o *TrxPostingInfoType) SetMinimumPrice(v CurrencyAmountType)`

SetMinimumPrice sets MinimumPrice field to given value.

### HasMinimumPrice

`func (o *TrxPostingInfoType) HasMinimumPrice() bool`

HasMinimumPrice returns a boolean if a field has been set.

### GetPrice

`func (o *TrxPostingInfoType) GetPrice() CurrencyAmountType`

GetPrice returns the Price field if non-nil, zero value otherwise.

### GetPriceOk

`func (o *TrxPostingInfoType) GetPriceOk() (*CurrencyAmountType, bool)`

GetPriceOk returns a tuple with the Price field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrice

`func (o *TrxPostingInfoType) SetPrice(v CurrencyAmountType)`

SetPrice sets Price field to given value.

### HasPrice

`func (o *TrxPostingInfoType) HasPrice() bool`

HasPrice returns a boolean if a field has been set.

### GetPrintTrxReceipt

`func (o *TrxPostingInfoType) GetPrintTrxReceipt() bool`

GetPrintTrxReceipt returns the PrintTrxReceipt field if non-nil, zero value otherwise.

### GetPrintTrxReceiptOk

`func (o *TrxPostingInfoType) GetPrintTrxReceiptOk() (*bool, bool)`

GetPrintTrxReceiptOk returns a tuple with the PrintTrxReceipt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrintTrxReceipt

`func (o *TrxPostingInfoType) SetPrintTrxReceipt(v bool)`

SetPrintTrxReceipt sets PrintTrxReceipt field to given value.

### HasPrintTrxReceipt

`func (o *TrxPostingInfoType) HasPrintTrxReceipt() bool`

HasPrintTrxReceipt returns a boolean if a field has been set.

### GetRoutingInstructionsId

`func (o *TrxPostingInfoType) GetRoutingInstructionsId() float32`

GetRoutingInstructionsId returns the RoutingInstructionsId field if non-nil, zero value otherwise.

### GetRoutingInstructionsIdOk

`func (o *TrxPostingInfoType) GetRoutingInstructionsIdOk() (*float32, bool)`

GetRoutingInstructionsIdOk returns a tuple with the RoutingInstructionsId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoutingInstructionsId

`func (o *TrxPostingInfoType) SetRoutingInstructionsId(v float32)`

SetRoutingInstructionsId sets RoutingInstructionsId field to given value.

### HasRoutingInstructionsId

`func (o *TrxPostingInfoType) HasRoutingInstructionsId() bool`

HasRoutingInstructionsId returns a boolean if a field has been set.

### GetTransactionCode

`func (o *TrxPostingInfoType) GetTransactionCode() string`

GetTransactionCode returns the TransactionCode field if non-nil, zero value otherwise.

### GetTransactionCodeOk

`func (o *TrxPostingInfoType) GetTransactionCodeOk() (*string, bool)`

GetTransactionCodeOk returns a tuple with the TransactionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCode

`func (o *TrxPostingInfoType) SetTransactionCode(v string)`

SetTransactionCode sets TransactionCode field to given value.

### HasTransactionCode

`func (o *TrxPostingInfoType) HasTransactionCode() bool`

HasTransactionCode returns a boolean if a field has been set.

### GetTransactionGroup

`func (o *TrxPostingInfoType) GetTransactionGroup() string`

GetTransactionGroup returns the TransactionGroup field if non-nil, zero value otherwise.

### GetTransactionGroupOk

`func (o *TrxPostingInfoType) GetTransactionGroupOk() (*string, bool)`

GetTransactionGroupOk returns a tuple with the TransactionGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionGroup

`func (o *TrxPostingInfoType) SetTransactionGroup(v string)`

SetTransactionGroup sets TransactionGroup field to given value.

### HasTransactionGroup

`func (o *TrxPostingInfoType) HasTransactionGroup() bool`

HasTransactionGroup returns a boolean if a field has been set.

### GetTransactionSubGroup

`func (o *TrxPostingInfoType) GetTransactionSubGroup() string`

GetTransactionSubGroup returns the TransactionSubGroup field if non-nil, zero value otherwise.

### GetTransactionSubGroupOk

`func (o *TrxPostingInfoType) GetTransactionSubGroupOk() (*string, bool)`

GetTransactionSubGroupOk returns a tuple with the TransactionSubGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionSubGroup

`func (o *TrxPostingInfoType) SetTransactionSubGroup(v string)`

SetTransactionSubGroup sets TransactionSubGroup field to given value.

### HasTransactionSubGroup

`func (o *TrxPostingInfoType) HasTransactionSubGroup() bool`

HasTransactionSubGroup returns a boolean if a field has been set.

### GetTrxServiceType

`func (o *TrxPostingInfoType) GetTrxServiceType() string`

GetTrxServiceType returns the TrxServiceType field if non-nil, zero value otherwise.

### GetTrxServiceTypeOk

`func (o *TrxPostingInfoType) GetTrxServiceTypeOk() (*string, bool)`

GetTrxServiceTypeOk returns a tuple with the TrxServiceType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrxServiceType

`func (o *TrxPostingInfoType) SetTrxServiceType(v string)`

SetTrxServiceType sets TrxServiceType field to given value.

### HasTrxServiceType

`func (o *TrxPostingInfoType) HasTrxServiceType() bool`

HasTrxServiceType returns a boolean if a field has been set.

### GetUniversalProductCode

`func (o *TrxPostingInfoType) GetUniversalProductCode() string`

GetUniversalProductCode returns the UniversalProductCode field if non-nil, zero value otherwise.

### GetUniversalProductCodeOk

`func (o *TrxPostingInfoType) GetUniversalProductCodeOk() (*string, bool)`

GetUniversalProductCodeOk returns a tuple with the UniversalProductCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUniversalProductCode

`func (o *TrxPostingInfoType) SetUniversalProductCode(v string)`

SetUniversalProductCode sets UniversalProductCode field to given value.

### HasUniversalProductCode

`func (o *TrxPostingInfoType) HasUniversalProductCode() bool`

HasUniversalProductCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


