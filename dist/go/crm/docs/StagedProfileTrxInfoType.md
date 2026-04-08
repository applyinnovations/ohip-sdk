# StagedProfileTrxInfoType

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
**ErrorDescription** | Pointer to **string** | The error in transaction code information in a staged profile with an invalid status | [optional] 
**Id** | Pointer to **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | [optional] 
**Type** | Pointer to **string** | A reference to the type of object defined by the UniqueID element. | [optional] 

## Methods

### NewStagedProfileTrxInfoType

`func NewStagedProfileTrxInfoType() *StagedProfileTrxInfoType`

NewStagedProfileTrxInfoType instantiates a new StagedProfileTrxInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStagedProfileTrxInfoTypeWithDefaults

`func NewStagedProfileTrxInfoTypeWithDefaults() *StagedProfileTrxInfoType`

NewStagedProfileTrxInfoTypeWithDefaults instantiates a new StagedProfileTrxInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *StagedProfileTrxInfoType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *StagedProfileTrxInfoType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *StagedProfileTrxInfoType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *StagedProfileTrxInfoType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetTransactionGroup

`func (o *StagedProfileTrxInfoType) GetTransactionGroup() string`

GetTransactionGroup returns the TransactionGroup field if non-nil, zero value otherwise.

### GetTransactionGroupOk

`func (o *StagedProfileTrxInfoType) GetTransactionGroupOk() (*string, bool)`

GetTransactionGroupOk returns a tuple with the TransactionGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionGroup

`func (o *StagedProfileTrxInfoType) SetTransactionGroup(v string)`

SetTransactionGroup sets TransactionGroup field to given value.

### HasTransactionGroup

`func (o *StagedProfileTrxInfoType) HasTransactionGroup() bool`

HasTransactionGroup returns a boolean if a field has been set.

### GetTransactionSubGroup

`func (o *StagedProfileTrxInfoType) GetTransactionSubGroup() string`

GetTransactionSubGroup returns the TransactionSubGroup field if non-nil, zero value otherwise.

### GetTransactionSubGroupOk

`func (o *StagedProfileTrxInfoType) GetTransactionSubGroupOk() (*string, bool)`

GetTransactionSubGroupOk returns a tuple with the TransactionSubGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionSubGroup

`func (o *StagedProfileTrxInfoType) SetTransactionSubGroup(v string)`

SetTransactionSubGroup sets TransactionSubGroup field to given value.

### HasTransactionSubGroup

`func (o *StagedProfileTrxInfoType) HasTransactionSubGroup() bool`

HasTransactionSubGroup returns a boolean if a field has been set.

### GetUniversalProductCode

`func (o *StagedProfileTrxInfoType) GetUniversalProductCode() string`

GetUniversalProductCode returns the UniversalProductCode field if non-nil, zero value otherwise.

### GetUniversalProductCodeOk

`func (o *StagedProfileTrxInfoType) GetUniversalProductCodeOk() (*string, bool)`

GetUniversalProductCodeOk returns a tuple with the UniversalProductCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUniversalProductCode

`func (o *StagedProfileTrxInfoType) SetUniversalProductCode(v string)`

SetUniversalProductCode sets UniversalProductCode field to given value.

### HasUniversalProductCode

`func (o *StagedProfileTrxInfoType) HasUniversalProductCode() bool`

HasUniversalProductCode returns a boolean if a field has been set.

### GetRoutingInstructionsId

`func (o *StagedProfileTrxInfoType) GetRoutingInstructionsId() float32`

GetRoutingInstructionsId returns the RoutingInstructionsId field if non-nil, zero value otherwise.

### GetRoutingInstructionsIdOk

`func (o *StagedProfileTrxInfoType) GetRoutingInstructionsIdOk() (*float32, bool)`

GetRoutingInstructionsIdOk returns a tuple with the RoutingInstructionsId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoutingInstructionsId

`func (o *StagedProfileTrxInfoType) SetRoutingInstructionsId(v float32)`

SetRoutingInstructionsId sets RoutingInstructionsId field to given value.

### HasRoutingInstructionsId

`func (o *StagedProfileTrxInfoType) HasRoutingInstructionsId() bool`

HasRoutingInstructionsId returns a boolean if a field has been set.

### GetArticles

`func (o *StagedProfileTrxInfoType) GetArticles() []ArticleInfoType`

GetArticles returns the Articles field if non-nil, zero value otherwise.

### GetArticlesOk

`func (o *StagedProfileTrxInfoType) GetArticlesOk() (*[]ArticleInfoType, bool)`

GetArticlesOk returns a tuple with the Articles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArticles

`func (o *StagedProfileTrxInfoType) SetArticles(v []ArticleInfoType)`

SetArticles sets Articles field to given value.

### HasArticles

`func (o *StagedProfileTrxInfoType) HasArticles() bool`

HasArticles returns a boolean if a field has been set.

### GetTrxServiceType

`func (o *StagedProfileTrxInfoType) GetTrxServiceType() string`

GetTrxServiceType returns the TrxServiceType field if non-nil, zero value otherwise.

### GetTrxServiceTypeOk

`func (o *StagedProfileTrxInfoType) GetTrxServiceTypeOk() (*string, bool)`

GetTrxServiceTypeOk returns a tuple with the TrxServiceType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrxServiceType

`func (o *StagedProfileTrxInfoType) SetTrxServiceType(v string)`

SetTrxServiceType sets TrxServiceType field to given value.

### HasTrxServiceType

`func (o *StagedProfileTrxInfoType) HasTrxServiceType() bool`

HasTrxServiceType returns a boolean if a field has been set.

### GetTransactionCode

`func (o *StagedProfileTrxInfoType) GetTransactionCode() string`

GetTransactionCode returns the TransactionCode field if non-nil, zero value otherwise.

### GetTransactionCodeOk

`func (o *StagedProfileTrxInfoType) GetTransactionCodeOk() (*string, bool)`

GetTransactionCodeOk returns a tuple with the TransactionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCode

`func (o *StagedProfileTrxInfoType) SetTransactionCode(v string)`

SetTransactionCode sets TransactionCode field to given value.

### HasTransactionCode

`func (o *StagedProfileTrxInfoType) HasTransactionCode() bool`

HasTransactionCode returns a boolean if a field has been set.

### GetHotelId

`func (o *StagedProfileTrxInfoType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *StagedProfileTrxInfoType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *StagedProfileTrxInfoType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *StagedProfileTrxInfoType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetPrintTrxReceipt

`func (o *StagedProfileTrxInfoType) GetPrintTrxReceipt() bool`

GetPrintTrxReceipt returns the PrintTrxReceipt field if non-nil, zero value otherwise.

### GetPrintTrxReceiptOk

`func (o *StagedProfileTrxInfoType) GetPrintTrxReceiptOk() (*bool, bool)`

GetPrintTrxReceiptOk returns a tuple with the PrintTrxReceipt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrintTrxReceipt

`func (o *StagedProfileTrxInfoType) SetPrintTrxReceipt(v bool)`

SetPrintTrxReceipt sets PrintTrxReceipt field to given value.

### HasPrintTrxReceipt

`func (o *StagedProfileTrxInfoType) HasPrintTrxReceipt() bool`

HasPrintTrxReceipt returns a boolean if a field has been set.

### GetErrorDescription

`func (o *StagedProfileTrxInfoType) GetErrorDescription() string`

GetErrorDescription returns the ErrorDescription field if non-nil, zero value otherwise.

### GetErrorDescriptionOk

`func (o *StagedProfileTrxInfoType) GetErrorDescriptionOk() (*string, bool)`

GetErrorDescriptionOk returns a tuple with the ErrorDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorDescription

`func (o *StagedProfileTrxInfoType) SetErrorDescription(v string)`

SetErrorDescription sets ErrorDescription field to given value.

### HasErrorDescription

`func (o *StagedProfileTrxInfoType) HasErrorDescription() bool`

HasErrorDescription returns a boolean if a field has been set.

### GetId

`func (o *StagedProfileTrxInfoType) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *StagedProfileTrxInfoType) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *StagedProfileTrxInfoType) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *StagedProfileTrxInfoType) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *StagedProfileTrxInfoType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *StagedProfileTrxInfoType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *StagedProfileTrxInfoType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *StagedProfileTrxInfoType) HasType() bool`

HasType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


