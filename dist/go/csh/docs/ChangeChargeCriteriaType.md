# ChangeChargeCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApprovalCode** | Pointer to **string** | Approval code of the posting. | [optional] 
**ApprovalDate** | Pointer to **string** | Approval date of the posting. | [optional] 
**ApprovalStatus** | Pointer to **string** | Approval status of the posting. | [optional] 
**ArrangementCode** | Pointer to **string** | Corrected arrangement code from the package associated to this transaction. | [optional] 
**CashierId** | Pointer to **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | [optional] 
**CheckNumber** | Pointer to **string** | Corrected Cheque number. | [optional] 
**Covers** | Pointer to **string** | Corrected POS covers - number of copies of receipts that got printed for that particular receipt. | [optional] 
**HotelId** | Pointer to **string** | Property code. | [optional] 
**Message** | Pointer to **string** | External message coming from the vendor that explains the status of transaction. | [optional] 
**Price** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Quantity** | Pointer to **int32** | Corrected posting quantity. | [optional] 
**Reference** | Pointer to **string** | Corrected user-defined posting reference. | [optional] 
**Remark** | Pointer to **string** | Corrected user-defined posting remark. | [optional] 
**RevenueDate** | Pointer to **string** | Corrected Revenue Date. | [optional] 
**TransactionNo** | Pointer to **float32** | Transaction number of the posting being corrected. | [optional] 

## Methods

### NewChangeChargeCriteriaType

`func NewChangeChargeCriteriaType() *ChangeChargeCriteriaType`

NewChangeChargeCriteriaType instantiates a new ChangeChargeCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeChargeCriteriaTypeWithDefaults

`func NewChangeChargeCriteriaTypeWithDefaults() *ChangeChargeCriteriaType`

NewChangeChargeCriteriaTypeWithDefaults instantiates a new ChangeChargeCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApprovalCode

`func (o *ChangeChargeCriteriaType) GetApprovalCode() string`

GetApprovalCode returns the ApprovalCode field if non-nil, zero value otherwise.

### GetApprovalCodeOk

`func (o *ChangeChargeCriteriaType) GetApprovalCodeOk() (*string, bool)`

GetApprovalCodeOk returns a tuple with the ApprovalCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalCode

`func (o *ChangeChargeCriteriaType) SetApprovalCode(v string)`

SetApprovalCode sets ApprovalCode field to given value.

### HasApprovalCode

`func (o *ChangeChargeCriteriaType) HasApprovalCode() bool`

HasApprovalCode returns a boolean if a field has been set.

### GetApprovalDate

`func (o *ChangeChargeCriteriaType) GetApprovalDate() string`

GetApprovalDate returns the ApprovalDate field if non-nil, zero value otherwise.

### GetApprovalDateOk

`func (o *ChangeChargeCriteriaType) GetApprovalDateOk() (*string, bool)`

GetApprovalDateOk returns a tuple with the ApprovalDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalDate

`func (o *ChangeChargeCriteriaType) SetApprovalDate(v string)`

SetApprovalDate sets ApprovalDate field to given value.

### HasApprovalDate

`func (o *ChangeChargeCriteriaType) HasApprovalDate() bool`

HasApprovalDate returns a boolean if a field has been set.

### GetApprovalStatus

`func (o *ChangeChargeCriteriaType) GetApprovalStatus() string`

GetApprovalStatus returns the ApprovalStatus field if non-nil, zero value otherwise.

### GetApprovalStatusOk

`func (o *ChangeChargeCriteriaType) GetApprovalStatusOk() (*string, bool)`

GetApprovalStatusOk returns a tuple with the ApprovalStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalStatus

`func (o *ChangeChargeCriteriaType) SetApprovalStatus(v string)`

SetApprovalStatus sets ApprovalStatus field to given value.

### HasApprovalStatus

`func (o *ChangeChargeCriteriaType) HasApprovalStatus() bool`

HasApprovalStatus returns a boolean if a field has been set.

### GetArrangementCode

`func (o *ChangeChargeCriteriaType) GetArrangementCode() string`

GetArrangementCode returns the ArrangementCode field if non-nil, zero value otherwise.

### GetArrangementCodeOk

`func (o *ChangeChargeCriteriaType) GetArrangementCodeOk() (*string, bool)`

GetArrangementCodeOk returns a tuple with the ArrangementCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArrangementCode

`func (o *ChangeChargeCriteriaType) SetArrangementCode(v string)`

SetArrangementCode sets ArrangementCode field to given value.

### HasArrangementCode

`func (o *ChangeChargeCriteriaType) HasArrangementCode() bool`

HasArrangementCode returns a boolean if a field has been set.

### GetCashierId

`func (o *ChangeChargeCriteriaType) GetCashierId() float32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *ChangeChargeCriteriaType) GetCashierIdOk() (*float32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *ChangeChargeCriteriaType) SetCashierId(v float32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *ChangeChargeCriteriaType) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.

### GetCheckNumber

`func (o *ChangeChargeCriteriaType) GetCheckNumber() string`

GetCheckNumber returns the CheckNumber field if non-nil, zero value otherwise.

### GetCheckNumberOk

`func (o *ChangeChargeCriteriaType) GetCheckNumberOk() (*string, bool)`

GetCheckNumberOk returns a tuple with the CheckNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckNumber

`func (o *ChangeChargeCriteriaType) SetCheckNumber(v string)`

SetCheckNumber sets CheckNumber field to given value.

### HasCheckNumber

`func (o *ChangeChargeCriteriaType) HasCheckNumber() bool`

HasCheckNumber returns a boolean if a field has been set.

### GetCovers

`func (o *ChangeChargeCriteriaType) GetCovers() string`

GetCovers returns the Covers field if non-nil, zero value otherwise.

### GetCoversOk

`func (o *ChangeChargeCriteriaType) GetCoversOk() (*string, bool)`

GetCoversOk returns a tuple with the Covers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCovers

`func (o *ChangeChargeCriteriaType) SetCovers(v string)`

SetCovers sets Covers field to given value.

### HasCovers

`func (o *ChangeChargeCriteriaType) HasCovers() bool`

HasCovers returns a boolean if a field has been set.

### GetHotelId

`func (o *ChangeChargeCriteriaType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ChangeChargeCriteriaType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ChangeChargeCriteriaType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ChangeChargeCriteriaType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetMessage

`func (o *ChangeChargeCriteriaType) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *ChangeChargeCriteriaType) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *ChangeChargeCriteriaType) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *ChangeChargeCriteriaType) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetPrice

`func (o *ChangeChargeCriteriaType) GetPrice() CurrencyAmountType`

GetPrice returns the Price field if non-nil, zero value otherwise.

### GetPriceOk

`func (o *ChangeChargeCriteriaType) GetPriceOk() (*CurrencyAmountType, bool)`

GetPriceOk returns a tuple with the Price field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrice

`func (o *ChangeChargeCriteriaType) SetPrice(v CurrencyAmountType)`

SetPrice sets Price field to given value.

### HasPrice

`func (o *ChangeChargeCriteriaType) HasPrice() bool`

HasPrice returns a boolean if a field has been set.

### GetQuantity

`func (o *ChangeChargeCriteriaType) GetQuantity() int32`

GetQuantity returns the Quantity field if non-nil, zero value otherwise.

### GetQuantityOk

`func (o *ChangeChargeCriteriaType) GetQuantityOk() (*int32, bool)`

GetQuantityOk returns a tuple with the Quantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantity

`func (o *ChangeChargeCriteriaType) SetQuantity(v int32)`

SetQuantity sets Quantity field to given value.

### HasQuantity

`func (o *ChangeChargeCriteriaType) HasQuantity() bool`

HasQuantity returns a boolean if a field has been set.

### GetReference

`func (o *ChangeChargeCriteriaType) GetReference() string`

GetReference returns the Reference field if non-nil, zero value otherwise.

### GetReferenceOk

`func (o *ChangeChargeCriteriaType) GetReferenceOk() (*string, bool)`

GetReferenceOk returns a tuple with the Reference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReference

`func (o *ChangeChargeCriteriaType) SetReference(v string)`

SetReference sets Reference field to given value.

### HasReference

`func (o *ChangeChargeCriteriaType) HasReference() bool`

HasReference returns a boolean if a field has been set.

### GetRemark

`func (o *ChangeChargeCriteriaType) GetRemark() string`

GetRemark returns the Remark field if non-nil, zero value otherwise.

### GetRemarkOk

`func (o *ChangeChargeCriteriaType) GetRemarkOk() (*string, bool)`

GetRemarkOk returns a tuple with the Remark field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemark

`func (o *ChangeChargeCriteriaType) SetRemark(v string)`

SetRemark sets Remark field to given value.

### HasRemark

`func (o *ChangeChargeCriteriaType) HasRemark() bool`

HasRemark returns a boolean if a field has been set.

### GetRevenueDate

`func (o *ChangeChargeCriteriaType) GetRevenueDate() string`

GetRevenueDate returns the RevenueDate field if non-nil, zero value otherwise.

### GetRevenueDateOk

`func (o *ChangeChargeCriteriaType) GetRevenueDateOk() (*string, bool)`

GetRevenueDateOk returns a tuple with the RevenueDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueDate

`func (o *ChangeChargeCriteriaType) SetRevenueDate(v string)`

SetRevenueDate sets RevenueDate field to given value.

### HasRevenueDate

`func (o *ChangeChargeCriteriaType) HasRevenueDate() bool`

HasRevenueDate returns a boolean if a field has been set.

### GetTransactionNo

`func (o *ChangeChargeCriteriaType) GetTransactionNo() float32`

GetTransactionNo returns the TransactionNo field if non-nil, zero value otherwise.

### GetTransactionNoOk

`func (o *ChangeChargeCriteriaType) GetTransactionNoOk() (*float32, bool)`

GetTransactionNoOk returns a tuple with the TransactionNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionNo

`func (o *ChangeChargeCriteriaType) SetTransactionNo(v float32)`

SetTransactionNo sets TransactionNo field to given value.

### HasTransactionNo

`func (o *ChangeChargeCriteriaType) HasTransactionNo() bool`

HasTransactionNo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


