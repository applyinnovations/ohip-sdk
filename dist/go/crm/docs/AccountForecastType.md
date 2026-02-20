# AccountForecastType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Hotel Code | [optional] 
**AccountId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**PeriodCode** | Pointer to **string** | Specifies the Fiscal or Calendar Period Code for the forecast | [optional] 
**PeriodDescription** | Pointer to **string** | Specifies the Fiscal or Calendar Period Description for the forecast. | [optional] 
**PeriodStartDate** | Pointer to **string** | Specifies the Period Start Date | [optional] 
**PeriodEndDate** | Pointer to **string** | Specifies the Period End Date | [optional] 
**RoomNights** | Pointer to **int32** | Room Nights for the forecast | [optional] 
**AverageRate** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**RoomRevenue** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**FoodAndBeverageRevenue** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**OtherRevenue** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**TotalRevenue** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**OverrideForecast** | Pointer to [**OverrideForecastTypeType**](OverrideForecastTypeType.md) |  | [optional] 

## Methods

### NewAccountForecastType

`func NewAccountForecastType() *AccountForecastType`

NewAccountForecastType instantiates a new AccountForecastType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountForecastTypeWithDefaults

`func NewAccountForecastTypeWithDefaults() *AccountForecastType`

NewAccountForecastTypeWithDefaults instantiates a new AccountForecastType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *AccountForecastType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *AccountForecastType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *AccountForecastType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *AccountForecastType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetAccountId

`func (o *AccountForecastType) GetAccountId() UniqueIDType`

GetAccountId returns the AccountId field if non-nil, zero value otherwise.

### GetAccountIdOk

`func (o *AccountForecastType) GetAccountIdOk() (*UniqueIDType, bool)`

GetAccountIdOk returns a tuple with the AccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountId

`func (o *AccountForecastType) SetAccountId(v UniqueIDType)`

SetAccountId sets AccountId field to given value.

### HasAccountId

`func (o *AccountForecastType) HasAccountId() bool`

HasAccountId returns a boolean if a field has been set.

### GetPeriodCode

`func (o *AccountForecastType) GetPeriodCode() string`

GetPeriodCode returns the PeriodCode field if non-nil, zero value otherwise.

### GetPeriodCodeOk

`func (o *AccountForecastType) GetPeriodCodeOk() (*string, bool)`

GetPeriodCodeOk returns a tuple with the PeriodCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPeriodCode

`func (o *AccountForecastType) SetPeriodCode(v string)`

SetPeriodCode sets PeriodCode field to given value.

### HasPeriodCode

`func (o *AccountForecastType) HasPeriodCode() bool`

HasPeriodCode returns a boolean if a field has been set.

### GetPeriodDescription

`func (o *AccountForecastType) GetPeriodDescription() string`

GetPeriodDescription returns the PeriodDescription field if non-nil, zero value otherwise.

### GetPeriodDescriptionOk

`func (o *AccountForecastType) GetPeriodDescriptionOk() (*string, bool)`

GetPeriodDescriptionOk returns a tuple with the PeriodDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPeriodDescription

`func (o *AccountForecastType) SetPeriodDescription(v string)`

SetPeriodDescription sets PeriodDescription field to given value.

### HasPeriodDescription

`func (o *AccountForecastType) HasPeriodDescription() bool`

HasPeriodDescription returns a boolean if a field has been set.

### GetPeriodStartDate

`func (o *AccountForecastType) GetPeriodStartDate() string`

GetPeriodStartDate returns the PeriodStartDate field if non-nil, zero value otherwise.

### GetPeriodStartDateOk

`func (o *AccountForecastType) GetPeriodStartDateOk() (*string, bool)`

GetPeriodStartDateOk returns a tuple with the PeriodStartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPeriodStartDate

`func (o *AccountForecastType) SetPeriodStartDate(v string)`

SetPeriodStartDate sets PeriodStartDate field to given value.

### HasPeriodStartDate

`func (o *AccountForecastType) HasPeriodStartDate() bool`

HasPeriodStartDate returns a boolean if a field has been set.

### GetPeriodEndDate

`func (o *AccountForecastType) GetPeriodEndDate() string`

GetPeriodEndDate returns the PeriodEndDate field if non-nil, zero value otherwise.

### GetPeriodEndDateOk

`func (o *AccountForecastType) GetPeriodEndDateOk() (*string, bool)`

GetPeriodEndDateOk returns a tuple with the PeriodEndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPeriodEndDate

`func (o *AccountForecastType) SetPeriodEndDate(v string)`

SetPeriodEndDate sets PeriodEndDate field to given value.

### HasPeriodEndDate

`func (o *AccountForecastType) HasPeriodEndDate() bool`

HasPeriodEndDate returns a boolean if a field has been set.

### GetRoomNights

`func (o *AccountForecastType) GetRoomNights() int32`

GetRoomNights returns the RoomNights field if non-nil, zero value otherwise.

### GetRoomNightsOk

`func (o *AccountForecastType) GetRoomNightsOk() (*int32, bool)`

GetRoomNightsOk returns a tuple with the RoomNights field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomNights

`func (o *AccountForecastType) SetRoomNights(v int32)`

SetRoomNights sets RoomNights field to given value.

### HasRoomNights

`func (o *AccountForecastType) HasRoomNights() bool`

HasRoomNights returns a boolean if a field has been set.

### GetAverageRate

`func (o *AccountForecastType) GetAverageRate() CurrencyAmountType`

GetAverageRate returns the AverageRate field if non-nil, zero value otherwise.

### GetAverageRateOk

`func (o *AccountForecastType) GetAverageRateOk() (*CurrencyAmountType, bool)`

GetAverageRateOk returns a tuple with the AverageRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAverageRate

`func (o *AccountForecastType) SetAverageRate(v CurrencyAmountType)`

SetAverageRate sets AverageRate field to given value.

### HasAverageRate

`func (o *AccountForecastType) HasAverageRate() bool`

HasAverageRate returns a boolean if a field has been set.

### GetRoomRevenue

`func (o *AccountForecastType) GetRoomRevenue() CurrencyAmountType`

GetRoomRevenue returns the RoomRevenue field if non-nil, zero value otherwise.

### GetRoomRevenueOk

`func (o *AccountForecastType) GetRoomRevenueOk() (*CurrencyAmountType, bool)`

GetRoomRevenueOk returns a tuple with the RoomRevenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomRevenue

`func (o *AccountForecastType) SetRoomRevenue(v CurrencyAmountType)`

SetRoomRevenue sets RoomRevenue field to given value.

### HasRoomRevenue

`func (o *AccountForecastType) HasRoomRevenue() bool`

HasRoomRevenue returns a boolean if a field has been set.

### GetFoodAndBeverageRevenue

`func (o *AccountForecastType) GetFoodAndBeverageRevenue() CurrencyAmountType`

GetFoodAndBeverageRevenue returns the FoodAndBeverageRevenue field if non-nil, zero value otherwise.

### GetFoodAndBeverageRevenueOk

`func (o *AccountForecastType) GetFoodAndBeverageRevenueOk() (*CurrencyAmountType, bool)`

GetFoodAndBeverageRevenueOk returns a tuple with the FoodAndBeverageRevenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFoodAndBeverageRevenue

`func (o *AccountForecastType) SetFoodAndBeverageRevenue(v CurrencyAmountType)`

SetFoodAndBeverageRevenue sets FoodAndBeverageRevenue field to given value.

### HasFoodAndBeverageRevenue

`func (o *AccountForecastType) HasFoodAndBeverageRevenue() bool`

HasFoodAndBeverageRevenue returns a boolean if a field has been set.

### GetOtherRevenue

`func (o *AccountForecastType) GetOtherRevenue() CurrencyAmountType`

GetOtherRevenue returns the OtherRevenue field if non-nil, zero value otherwise.

### GetOtherRevenueOk

`func (o *AccountForecastType) GetOtherRevenueOk() (*CurrencyAmountType, bool)`

GetOtherRevenueOk returns a tuple with the OtherRevenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOtherRevenue

`func (o *AccountForecastType) SetOtherRevenue(v CurrencyAmountType)`

SetOtherRevenue sets OtherRevenue field to given value.

### HasOtherRevenue

`func (o *AccountForecastType) HasOtherRevenue() bool`

HasOtherRevenue returns a boolean if a field has been set.

### GetTotalRevenue

`func (o *AccountForecastType) GetTotalRevenue() CurrencyAmountType`

GetTotalRevenue returns the TotalRevenue field if non-nil, zero value otherwise.

### GetTotalRevenueOk

`func (o *AccountForecastType) GetTotalRevenueOk() (*CurrencyAmountType, bool)`

GetTotalRevenueOk returns a tuple with the TotalRevenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalRevenue

`func (o *AccountForecastType) SetTotalRevenue(v CurrencyAmountType)`

SetTotalRevenue sets TotalRevenue field to given value.

### HasTotalRevenue

`func (o *AccountForecastType) HasTotalRevenue() bool`

HasTotalRevenue returns a boolean if a field has been set.

### GetOverrideForecast

`func (o *AccountForecastType) GetOverrideForecast() OverrideForecastTypeType`

GetOverrideForecast returns the OverrideForecast field if non-nil, zero value otherwise.

### GetOverrideForecastOk

`func (o *AccountForecastType) GetOverrideForecastOk() (*OverrideForecastTypeType, bool)`

GetOverrideForecastOk returns a tuple with the OverrideForecast field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideForecast

`func (o *AccountForecastType) SetOverrideForecast(v OverrideForecastTypeType)`

SetOverrideForecast sets OverrideForecast field to given value.

### HasOverrideForecast

`func (o *AccountForecastType) HasOverrideForecast() bool`

HasOverrideForecast returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


