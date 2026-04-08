# TrxInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to **string** | Transaction codes info. | [optional] 
**TransactionGroup** | Pointer to **string** | Category of the transaction code. | [optional] 
**TransactionSubGroup** | Pointer to **string** | Sub category of the transaction code. | [optional] 
**UniversalProductCode** | Pointer to **string** | Unique Universal product code of the transaction code. | [optional] 
**RoutingInstructionsId** | Pointer to **float32** | This is the Routing Instruction Id attached with Reservation. It is only used for internal purpose. It should not be used by external vendor or consumer. | [optional] 
**Articles** | Pointer to [**[]ArticleInfoType**](ArticleInfoType.md) | The List of Articles defined for this transaction code, when using the Articles functionality. | [optional] 
**TrxServiceType** | Pointer to **string** | Contains service type for transaction code. | [optional] 
**TransactionCode** | Pointer to **string** | Unique identifier for the Transaction code. | [optional] 
**HotelId** | Pointer to **string** | Hotel context of the Transaction code. | [optional] 
**PrintTrxReceipt** | Pointer to **bool** | Print receipt flag that tells whether the transaction receipt is to be printed or not. This is based on the transaction code. | [optional] 

## Methods

### NewTrxInfoType

`func NewTrxInfoType() *TrxInfoType`

NewTrxInfoType instantiates a new TrxInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTrxInfoTypeWithDefaults

`func NewTrxInfoTypeWithDefaults() *TrxInfoType`

NewTrxInfoTypeWithDefaults instantiates a new TrxInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *TrxInfoType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *TrxInfoType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *TrxInfoType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *TrxInfoType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetTransactionGroup

`func (o *TrxInfoType) GetTransactionGroup() string`

GetTransactionGroup returns the TransactionGroup field if non-nil, zero value otherwise.

### GetTransactionGroupOk

`func (o *TrxInfoType) GetTransactionGroupOk() (*string, bool)`

GetTransactionGroupOk returns a tuple with the TransactionGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionGroup

`func (o *TrxInfoType) SetTransactionGroup(v string)`

SetTransactionGroup sets TransactionGroup field to given value.

### HasTransactionGroup

`func (o *TrxInfoType) HasTransactionGroup() bool`

HasTransactionGroup returns a boolean if a field has been set.

### GetTransactionSubGroup

`func (o *TrxInfoType) GetTransactionSubGroup() string`

GetTransactionSubGroup returns the TransactionSubGroup field if non-nil, zero value otherwise.

### GetTransactionSubGroupOk

`func (o *TrxInfoType) GetTransactionSubGroupOk() (*string, bool)`

GetTransactionSubGroupOk returns a tuple with the TransactionSubGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionSubGroup

`func (o *TrxInfoType) SetTransactionSubGroup(v string)`

SetTransactionSubGroup sets TransactionSubGroup field to given value.

### HasTransactionSubGroup

`func (o *TrxInfoType) HasTransactionSubGroup() bool`

HasTransactionSubGroup returns a boolean if a field has been set.

### GetUniversalProductCode

`func (o *TrxInfoType) GetUniversalProductCode() string`

GetUniversalProductCode returns the UniversalProductCode field if non-nil, zero value otherwise.

### GetUniversalProductCodeOk

`func (o *TrxInfoType) GetUniversalProductCodeOk() (*string, bool)`

GetUniversalProductCodeOk returns a tuple with the UniversalProductCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUniversalProductCode

`func (o *TrxInfoType) SetUniversalProductCode(v string)`

SetUniversalProductCode sets UniversalProductCode field to given value.

### HasUniversalProductCode

`func (o *TrxInfoType) HasUniversalProductCode() bool`

HasUniversalProductCode returns a boolean if a field has been set.

### GetRoutingInstructionsId

`func (o *TrxInfoType) GetRoutingInstructionsId() float32`

GetRoutingInstructionsId returns the RoutingInstructionsId field if non-nil, zero value otherwise.

### GetRoutingInstructionsIdOk

`func (o *TrxInfoType) GetRoutingInstructionsIdOk() (*float32, bool)`

GetRoutingInstructionsIdOk returns a tuple with the RoutingInstructionsId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoutingInstructionsId

`func (o *TrxInfoType) SetRoutingInstructionsId(v float32)`

SetRoutingInstructionsId sets RoutingInstructionsId field to given value.

### HasRoutingInstructionsId

`func (o *TrxInfoType) HasRoutingInstructionsId() bool`

HasRoutingInstructionsId returns a boolean if a field has been set.

### GetArticles

`func (o *TrxInfoType) GetArticles() []ArticleInfoType`

GetArticles returns the Articles field if non-nil, zero value otherwise.

### GetArticlesOk

`func (o *TrxInfoType) GetArticlesOk() (*[]ArticleInfoType, bool)`

GetArticlesOk returns a tuple with the Articles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArticles

`func (o *TrxInfoType) SetArticles(v []ArticleInfoType)`

SetArticles sets Articles field to given value.

### HasArticles

`func (o *TrxInfoType) HasArticles() bool`

HasArticles returns a boolean if a field has been set.

### GetTrxServiceType

`func (o *TrxInfoType) GetTrxServiceType() string`

GetTrxServiceType returns the TrxServiceType field if non-nil, zero value otherwise.

### GetTrxServiceTypeOk

`func (o *TrxInfoType) GetTrxServiceTypeOk() (*string, bool)`

GetTrxServiceTypeOk returns a tuple with the TrxServiceType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrxServiceType

`func (o *TrxInfoType) SetTrxServiceType(v string)`

SetTrxServiceType sets TrxServiceType field to given value.

### HasTrxServiceType

`func (o *TrxInfoType) HasTrxServiceType() bool`

HasTrxServiceType returns a boolean if a field has been set.

### GetTransactionCode

`func (o *TrxInfoType) GetTransactionCode() string`

GetTransactionCode returns the TransactionCode field if non-nil, zero value otherwise.

### GetTransactionCodeOk

`func (o *TrxInfoType) GetTransactionCodeOk() (*string, bool)`

GetTransactionCodeOk returns a tuple with the TransactionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCode

`func (o *TrxInfoType) SetTransactionCode(v string)`

SetTransactionCode sets TransactionCode field to given value.

### HasTransactionCode

`func (o *TrxInfoType) HasTransactionCode() bool`

HasTransactionCode returns a boolean if a field has been set.

### GetHotelId

`func (o *TrxInfoType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *TrxInfoType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *TrxInfoType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *TrxInfoType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetPrintTrxReceipt

`func (o *TrxInfoType) GetPrintTrxReceipt() bool`

GetPrintTrxReceipt returns the PrintTrxReceipt field if non-nil, zero value otherwise.

### GetPrintTrxReceiptOk

`func (o *TrxInfoType) GetPrintTrxReceiptOk() (*bool, bool)`

GetPrintTrxReceiptOk returns a tuple with the PrintTrxReceipt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrintTrxReceipt

`func (o *TrxInfoType) SetPrintTrxReceipt(v bool)`

SetPrintTrxReceipt sets PrintTrxReceipt field to given value.

### HasPrintTrxReceipt

`func (o *TrxInfoType) HasPrintTrxReceipt() bool`

HasPrintTrxReceipt returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


