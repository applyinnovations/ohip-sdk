# ResRevenueBalanceType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TotalFixedCharge** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**TotalPayment** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**RoomRevenue** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**FoodAndBevRevenue** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**OtherRevenue** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**NonRevenue** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**TotalRevenue** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Balance** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 

## Methods

### NewResRevenueBalanceType

`func NewResRevenueBalanceType() *ResRevenueBalanceType`

NewResRevenueBalanceType instantiates a new ResRevenueBalanceType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResRevenueBalanceTypeWithDefaults

`func NewResRevenueBalanceTypeWithDefaults() *ResRevenueBalanceType`

NewResRevenueBalanceTypeWithDefaults instantiates a new ResRevenueBalanceType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTotalFixedCharge

`func (o *ResRevenueBalanceType) GetTotalFixedCharge() CurrencyAmountType`

GetTotalFixedCharge returns the TotalFixedCharge field if non-nil, zero value otherwise.

### GetTotalFixedChargeOk

`func (o *ResRevenueBalanceType) GetTotalFixedChargeOk() (*CurrencyAmountType, bool)`

GetTotalFixedChargeOk returns a tuple with the TotalFixedCharge field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalFixedCharge

`func (o *ResRevenueBalanceType) SetTotalFixedCharge(v CurrencyAmountType)`

SetTotalFixedCharge sets TotalFixedCharge field to given value.

### HasTotalFixedCharge

`func (o *ResRevenueBalanceType) HasTotalFixedCharge() bool`

HasTotalFixedCharge returns a boolean if a field has been set.

### GetTotalPayment

`func (o *ResRevenueBalanceType) GetTotalPayment() CurrencyAmountType`

GetTotalPayment returns the TotalPayment field if non-nil, zero value otherwise.

### GetTotalPaymentOk

`func (o *ResRevenueBalanceType) GetTotalPaymentOk() (*CurrencyAmountType, bool)`

GetTotalPaymentOk returns a tuple with the TotalPayment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPayment

`func (o *ResRevenueBalanceType) SetTotalPayment(v CurrencyAmountType)`

SetTotalPayment sets TotalPayment field to given value.

### HasTotalPayment

`func (o *ResRevenueBalanceType) HasTotalPayment() bool`

HasTotalPayment returns a boolean if a field has been set.

### GetRoomRevenue

`func (o *ResRevenueBalanceType) GetRoomRevenue() CurrencyAmountType`

GetRoomRevenue returns the RoomRevenue field if non-nil, zero value otherwise.

### GetRoomRevenueOk

`func (o *ResRevenueBalanceType) GetRoomRevenueOk() (*CurrencyAmountType, bool)`

GetRoomRevenueOk returns a tuple with the RoomRevenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomRevenue

`func (o *ResRevenueBalanceType) SetRoomRevenue(v CurrencyAmountType)`

SetRoomRevenue sets RoomRevenue field to given value.

### HasRoomRevenue

`func (o *ResRevenueBalanceType) HasRoomRevenue() bool`

HasRoomRevenue returns a boolean if a field has been set.

### GetFoodAndBevRevenue

`func (o *ResRevenueBalanceType) GetFoodAndBevRevenue() CurrencyAmountType`

GetFoodAndBevRevenue returns the FoodAndBevRevenue field if non-nil, zero value otherwise.

### GetFoodAndBevRevenueOk

`func (o *ResRevenueBalanceType) GetFoodAndBevRevenueOk() (*CurrencyAmountType, bool)`

GetFoodAndBevRevenueOk returns a tuple with the FoodAndBevRevenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFoodAndBevRevenue

`func (o *ResRevenueBalanceType) SetFoodAndBevRevenue(v CurrencyAmountType)`

SetFoodAndBevRevenue sets FoodAndBevRevenue field to given value.

### HasFoodAndBevRevenue

`func (o *ResRevenueBalanceType) HasFoodAndBevRevenue() bool`

HasFoodAndBevRevenue returns a boolean if a field has been set.

### GetOtherRevenue

`func (o *ResRevenueBalanceType) GetOtherRevenue() CurrencyAmountType`

GetOtherRevenue returns the OtherRevenue field if non-nil, zero value otherwise.

### GetOtherRevenueOk

`func (o *ResRevenueBalanceType) GetOtherRevenueOk() (*CurrencyAmountType, bool)`

GetOtherRevenueOk returns a tuple with the OtherRevenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOtherRevenue

`func (o *ResRevenueBalanceType) SetOtherRevenue(v CurrencyAmountType)`

SetOtherRevenue sets OtherRevenue field to given value.

### HasOtherRevenue

`func (o *ResRevenueBalanceType) HasOtherRevenue() bool`

HasOtherRevenue returns a boolean if a field has been set.

### GetNonRevenue

`func (o *ResRevenueBalanceType) GetNonRevenue() CurrencyAmountType`

GetNonRevenue returns the NonRevenue field if non-nil, zero value otherwise.

### GetNonRevenueOk

`func (o *ResRevenueBalanceType) GetNonRevenueOk() (*CurrencyAmountType, bool)`

GetNonRevenueOk returns a tuple with the NonRevenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNonRevenue

`func (o *ResRevenueBalanceType) SetNonRevenue(v CurrencyAmountType)`

SetNonRevenue sets NonRevenue field to given value.

### HasNonRevenue

`func (o *ResRevenueBalanceType) HasNonRevenue() bool`

HasNonRevenue returns a boolean if a field has been set.

### GetTotalRevenue

`func (o *ResRevenueBalanceType) GetTotalRevenue() CurrencyAmountType`

GetTotalRevenue returns the TotalRevenue field if non-nil, zero value otherwise.

### GetTotalRevenueOk

`func (o *ResRevenueBalanceType) GetTotalRevenueOk() (*CurrencyAmountType, bool)`

GetTotalRevenueOk returns a tuple with the TotalRevenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalRevenue

`func (o *ResRevenueBalanceType) SetTotalRevenue(v CurrencyAmountType)`

SetTotalRevenue sets TotalRevenue field to given value.

### HasTotalRevenue

`func (o *ResRevenueBalanceType) HasTotalRevenue() bool`

HasTotalRevenue returns a boolean if a field has been set.

### GetBalance

`func (o *ResRevenueBalanceType) GetBalance() CurrencyAmountType`

GetBalance returns the Balance field if non-nil, zero value otherwise.

### GetBalanceOk

`func (o *ResRevenueBalanceType) GetBalanceOk() (*CurrencyAmountType, bool)`

GetBalanceOk returns a tuple with the Balance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBalance

`func (o *ResRevenueBalanceType) SetBalance(v CurrencyAmountType)`

SetBalance sets Balance field to given value.

### HasBalance

`func (o *ResRevenueBalanceType) HasBalance() bool`

HasBalance returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


