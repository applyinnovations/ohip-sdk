# TrxInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to **string** | Transaction codes info. | [optional] 
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


