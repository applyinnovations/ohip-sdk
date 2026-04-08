# TrxSplitAndTransferCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Property code where the reservation transaction exists. | [optional] 
**TransactionList** | Pointer to **[]float32** | The unique transaction number of this transaction. | [optional] 
**SplitDetails** | Pointer to [**TrxSplitCriteriaTypeSplitDetails**](TrxSplitCriteriaTypeSplitDetails.md) |  | [optional] 
**CashierId** | Pointer to **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | [optional] 
**TargetReservationIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**TargetFolioWindowNo** | Pointer to **int32** | Folio Window Number to where the new transactions , after split, will be transfered. | [optional] 

## Methods

### NewTrxSplitAndTransferCriteriaType

`func NewTrxSplitAndTransferCriteriaType() *TrxSplitAndTransferCriteriaType`

NewTrxSplitAndTransferCriteriaType instantiates a new TrxSplitAndTransferCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTrxSplitAndTransferCriteriaTypeWithDefaults

`func NewTrxSplitAndTransferCriteriaTypeWithDefaults() *TrxSplitAndTransferCriteriaType`

NewTrxSplitAndTransferCriteriaTypeWithDefaults instantiates a new TrxSplitAndTransferCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *TrxSplitAndTransferCriteriaType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *TrxSplitAndTransferCriteriaType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *TrxSplitAndTransferCriteriaType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *TrxSplitAndTransferCriteriaType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetTransactionList

`func (o *TrxSplitAndTransferCriteriaType) GetTransactionList() []float32`

GetTransactionList returns the TransactionList field if non-nil, zero value otherwise.

### GetTransactionListOk

`func (o *TrxSplitAndTransferCriteriaType) GetTransactionListOk() (*[]float32, bool)`

GetTransactionListOk returns a tuple with the TransactionList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionList

`func (o *TrxSplitAndTransferCriteriaType) SetTransactionList(v []float32)`

SetTransactionList sets TransactionList field to given value.

### HasTransactionList

`func (o *TrxSplitAndTransferCriteriaType) HasTransactionList() bool`

HasTransactionList returns a boolean if a field has been set.

### GetSplitDetails

`func (o *TrxSplitAndTransferCriteriaType) GetSplitDetails() TrxSplitCriteriaTypeSplitDetails`

GetSplitDetails returns the SplitDetails field if non-nil, zero value otherwise.

### GetSplitDetailsOk

`func (o *TrxSplitAndTransferCriteriaType) GetSplitDetailsOk() (*TrxSplitCriteriaTypeSplitDetails, bool)`

GetSplitDetailsOk returns a tuple with the SplitDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSplitDetails

`func (o *TrxSplitAndTransferCriteriaType) SetSplitDetails(v TrxSplitCriteriaTypeSplitDetails)`

SetSplitDetails sets SplitDetails field to given value.

### HasSplitDetails

`func (o *TrxSplitAndTransferCriteriaType) HasSplitDetails() bool`

HasSplitDetails returns a boolean if a field has been set.

### GetCashierId

`func (o *TrxSplitAndTransferCriteriaType) GetCashierId() float32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *TrxSplitAndTransferCriteriaType) GetCashierIdOk() (*float32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *TrxSplitAndTransferCriteriaType) SetCashierId(v float32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *TrxSplitAndTransferCriteriaType) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.

### GetTargetReservationIdList

`func (o *TrxSplitAndTransferCriteriaType) GetTargetReservationIdList() []UniqueIDType`

GetTargetReservationIdList returns the TargetReservationIdList field if non-nil, zero value otherwise.

### GetTargetReservationIdListOk

`func (o *TrxSplitAndTransferCriteriaType) GetTargetReservationIdListOk() (*[]UniqueIDType, bool)`

GetTargetReservationIdListOk returns a tuple with the TargetReservationIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetReservationIdList

`func (o *TrxSplitAndTransferCriteriaType) SetTargetReservationIdList(v []UniqueIDType)`

SetTargetReservationIdList sets TargetReservationIdList field to given value.

### HasTargetReservationIdList

`func (o *TrxSplitAndTransferCriteriaType) HasTargetReservationIdList() bool`

HasTargetReservationIdList returns a boolean if a field has been set.

### GetTargetFolioWindowNo

`func (o *TrxSplitAndTransferCriteriaType) GetTargetFolioWindowNo() int32`

GetTargetFolioWindowNo returns the TargetFolioWindowNo field if non-nil, zero value otherwise.

### GetTargetFolioWindowNoOk

`func (o *TrxSplitAndTransferCriteriaType) GetTargetFolioWindowNoOk() (*int32, bool)`

GetTargetFolioWindowNoOk returns a tuple with the TargetFolioWindowNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetFolioWindowNo

`func (o *TrxSplitAndTransferCriteriaType) SetTargetFolioWindowNo(v int32)`

SetTargetFolioWindowNo sets TargetFolioWindowNo field to given value.

### HasTargetFolioWindowNo

`func (o *TrxSplitAndTransferCriteriaType) HasTargetFolioWindowNo() bool`

HasTargetFolioWindowNo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


