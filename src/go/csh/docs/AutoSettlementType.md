# AutoSettlementType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CashierId** | Pointer to **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | [optional] 
**EventType** | Pointer to [**CashieringEventType**](CashieringEventType.md) |  | [optional] 
**FolioWindowsToSettle** | Pointer to **[]string** | Folio windows to do auto auto settlement. | [optional] 
**FolioWindowsToTransfer** | Pointer to **[]string** | Folio windows to transfer. | [optional] 
**HotelId** | Pointer to **string** | Property code. | [optional] 
**IncludeCreditCardBalance** | Pointer to **bool** | Dictates whether to include negative postings for auto settlement. | [optional] 
**MinimumWindowBalance** | Pointer to **int32** | Indicates the minimum window balance to do auto settlement. | [optional] 
**PaymentMethods** | Pointer to [**PaymentMethodsSearchType**](PaymentMethodsSearchType.md) |  | [optional] 
**ReservationCriteria** | Pointer to [**AutoFolioSettlementCriteriaType**](AutoFolioSettlementCriteriaType.md) |  | [optional] 
**ReservationIdList** | Pointer to [**UniqueIDListType**](UniqueIDListType.md) |  | [optional] 

## Methods

### NewAutoSettlementType

`func NewAutoSettlementType() *AutoSettlementType`

NewAutoSettlementType instantiates a new AutoSettlementType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAutoSettlementTypeWithDefaults

`func NewAutoSettlementTypeWithDefaults() *AutoSettlementType`

NewAutoSettlementTypeWithDefaults instantiates a new AutoSettlementType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCashierId

`func (o *AutoSettlementType) GetCashierId() float32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *AutoSettlementType) GetCashierIdOk() (*float32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *AutoSettlementType) SetCashierId(v float32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *AutoSettlementType) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.

### GetEventType

`func (o *AutoSettlementType) GetEventType() CashieringEventType`

GetEventType returns the EventType field if non-nil, zero value otherwise.

### GetEventTypeOk

`func (o *AutoSettlementType) GetEventTypeOk() (*CashieringEventType, bool)`

GetEventTypeOk returns a tuple with the EventType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventType

`func (o *AutoSettlementType) SetEventType(v CashieringEventType)`

SetEventType sets EventType field to given value.

### HasEventType

`func (o *AutoSettlementType) HasEventType() bool`

HasEventType returns a boolean if a field has been set.

### GetFolioWindowsToSettle

`func (o *AutoSettlementType) GetFolioWindowsToSettle() []string`

GetFolioWindowsToSettle returns the FolioWindowsToSettle field if non-nil, zero value otherwise.

### GetFolioWindowsToSettleOk

`func (o *AutoSettlementType) GetFolioWindowsToSettleOk() (*[]string, bool)`

GetFolioWindowsToSettleOk returns a tuple with the FolioWindowsToSettle field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioWindowsToSettle

`func (o *AutoSettlementType) SetFolioWindowsToSettle(v []string)`

SetFolioWindowsToSettle sets FolioWindowsToSettle field to given value.

### HasFolioWindowsToSettle

`func (o *AutoSettlementType) HasFolioWindowsToSettle() bool`

HasFolioWindowsToSettle returns a boolean if a field has been set.

### GetFolioWindowsToTransfer

`func (o *AutoSettlementType) GetFolioWindowsToTransfer() []string`

GetFolioWindowsToTransfer returns the FolioWindowsToTransfer field if non-nil, zero value otherwise.

### GetFolioWindowsToTransferOk

`func (o *AutoSettlementType) GetFolioWindowsToTransferOk() (*[]string, bool)`

GetFolioWindowsToTransferOk returns a tuple with the FolioWindowsToTransfer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioWindowsToTransfer

`func (o *AutoSettlementType) SetFolioWindowsToTransfer(v []string)`

SetFolioWindowsToTransfer sets FolioWindowsToTransfer field to given value.

### HasFolioWindowsToTransfer

`func (o *AutoSettlementType) HasFolioWindowsToTransfer() bool`

HasFolioWindowsToTransfer returns a boolean if a field has been set.

### GetHotelId

`func (o *AutoSettlementType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *AutoSettlementType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *AutoSettlementType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *AutoSettlementType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetIncludeCreditCardBalance

`func (o *AutoSettlementType) GetIncludeCreditCardBalance() bool`

GetIncludeCreditCardBalance returns the IncludeCreditCardBalance field if non-nil, zero value otherwise.

### GetIncludeCreditCardBalanceOk

`func (o *AutoSettlementType) GetIncludeCreditCardBalanceOk() (*bool, bool)`

GetIncludeCreditCardBalanceOk returns a tuple with the IncludeCreditCardBalance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeCreditCardBalance

`func (o *AutoSettlementType) SetIncludeCreditCardBalance(v bool)`

SetIncludeCreditCardBalance sets IncludeCreditCardBalance field to given value.

### HasIncludeCreditCardBalance

`func (o *AutoSettlementType) HasIncludeCreditCardBalance() bool`

HasIncludeCreditCardBalance returns a boolean if a field has been set.

### GetMinimumWindowBalance

`func (o *AutoSettlementType) GetMinimumWindowBalance() int32`

GetMinimumWindowBalance returns the MinimumWindowBalance field if non-nil, zero value otherwise.

### GetMinimumWindowBalanceOk

`func (o *AutoSettlementType) GetMinimumWindowBalanceOk() (*int32, bool)`

GetMinimumWindowBalanceOk returns a tuple with the MinimumWindowBalance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinimumWindowBalance

`func (o *AutoSettlementType) SetMinimumWindowBalance(v int32)`

SetMinimumWindowBalance sets MinimumWindowBalance field to given value.

### HasMinimumWindowBalance

`func (o *AutoSettlementType) HasMinimumWindowBalance() bool`

HasMinimumWindowBalance returns a boolean if a field has been set.

### GetPaymentMethods

`func (o *AutoSettlementType) GetPaymentMethods() PaymentMethodsSearchType`

GetPaymentMethods returns the PaymentMethods field if non-nil, zero value otherwise.

### GetPaymentMethodsOk

`func (o *AutoSettlementType) GetPaymentMethodsOk() (*PaymentMethodsSearchType, bool)`

GetPaymentMethodsOk returns a tuple with the PaymentMethods field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentMethods

`func (o *AutoSettlementType) SetPaymentMethods(v PaymentMethodsSearchType)`

SetPaymentMethods sets PaymentMethods field to given value.

### HasPaymentMethods

`func (o *AutoSettlementType) HasPaymentMethods() bool`

HasPaymentMethods returns a boolean if a field has been set.

### GetReservationCriteria

`func (o *AutoSettlementType) GetReservationCriteria() AutoFolioSettlementCriteriaType`

GetReservationCriteria returns the ReservationCriteria field if non-nil, zero value otherwise.

### GetReservationCriteriaOk

`func (o *AutoSettlementType) GetReservationCriteriaOk() (*AutoFolioSettlementCriteriaType, bool)`

GetReservationCriteriaOk returns a tuple with the ReservationCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationCriteria

`func (o *AutoSettlementType) SetReservationCriteria(v AutoFolioSettlementCriteriaType)`

SetReservationCriteria sets ReservationCriteria field to given value.

### HasReservationCriteria

`func (o *AutoSettlementType) HasReservationCriteria() bool`

HasReservationCriteria returns a boolean if a field has been set.

### GetReservationIdList

`func (o *AutoSettlementType) GetReservationIdList() UniqueIDListType`

GetReservationIdList returns the ReservationIdList field if non-nil, zero value otherwise.

### GetReservationIdListOk

`func (o *AutoSettlementType) GetReservationIdListOk() (*UniqueIDListType, bool)`

GetReservationIdListOk returns a tuple with the ReservationIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIdList

`func (o *AutoSettlementType) SetReservationIdList(v UniqueIDListType)`

SetReservationIdList sets ReservationIdList field to given value.

### HasReservationIdList

`func (o *AutoSettlementType) HasReservationIdList() bool`

HasReservationIdList returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


