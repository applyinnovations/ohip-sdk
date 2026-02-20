# StayDailyRatesType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TransactionDate** | **string** | Date on which the transaction was done. | 
**BookedRoomType** | Pointer to **string** | Specifies the type of room booked. | [optional] 
**CurrencyCode** | Pointer to **string** | Specifies the code assigned to the currency. | [optional] 
**PseudoRoom** | Pointer to **bool** | Specifies if the room is a pseudo room. | [optional] 
**MarketCode** | Pointer to **string** | Specifies the market code. | [optional] 
**RateCode** | **string** | Specifies the rate code. | 
**RateAmount** | Pointer to **float32** | Specifies the amount added to a particular rate code. | [optional] 
**RoomNumber** | Pointer to **string** | Describes the number assigned to a room. | [optional] 
**RoomType** | Pointer to **string** | Describes the type of the room. | [optional] 

## Methods

### NewStayDailyRatesType

`func NewStayDailyRatesType(transactionDate string, rateCode string, ) *StayDailyRatesType`

NewStayDailyRatesType instantiates a new StayDailyRatesType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStayDailyRatesTypeWithDefaults

`func NewStayDailyRatesTypeWithDefaults() *StayDailyRatesType`

NewStayDailyRatesTypeWithDefaults instantiates a new StayDailyRatesType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTransactionDate

`func (o *StayDailyRatesType) GetTransactionDate() string`

GetTransactionDate returns the TransactionDate field if non-nil, zero value otherwise.

### GetTransactionDateOk

`func (o *StayDailyRatesType) GetTransactionDateOk() (*string, bool)`

GetTransactionDateOk returns a tuple with the TransactionDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionDate

`func (o *StayDailyRatesType) SetTransactionDate(v string)`

SetTransactionDate sets TransactionDate field to given value.


### GetBookedRoomType

`func (o *StayDailyRatesType) GetBookedRoomType() string`

GetBookedRoomType returns the BookedRoomType field if non-nil, zero value otherwise.

### GetBookedRoomTypeOk

`func (o *StayDailyRatesType) GetBookedRoomTypeOk() (*string, bool)`

GetBookedRoomTypeOk returns a tuple with the BookedRoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookedRoomType

`func (o *StayDailyRatesType) SetBookedRoomType(v string)`

SetBookedRoomType sets BookedRoomType field to given value.

### HasBookedRoomType

`func (o *StayDailyRatesType) HasBookedRoomType() bool`

HasBookedRoomType returns a boolean if a field has been set.

### GetCurrencyCode

`func (o *StayDailyRatesType) GetCurrencyCode() string`

GetCurrencyCode returns the CurrencyCode field if non-nil, zero value otherwise.

### GetCurrencyCodeOk

`func (o *StayDailyRatesType) GetCurrencyCodeOk() (*string, bool)`

GetCurrencyCodeOk returns a tuple with the CurrencyCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencyCode

`func (o *StayDailyRatesType) SetCurrencyCode(v string)`

SetCurrencyCode sets CurrencyCode field to given value.

### HasCurrencyCode

`func (o *StayDailyRatesType) HasCurrencyCode() bool`

HasCurrencyCode returns a boolean if a field has been set.

### GetPseudoRoom

`func (o *StayDailyRatesType) GetPseudoRoom() bool`

GetPseudoRoom returns the PseudoRoom field if non-nil, zero value otherwise.

### GetPseudoRoomOk

`func (o *StayDailyRatesType) GetPseudoRoomOk() (*bool, bool)`

GetPseudoRoomOk returns a tuple with the PseudoRoom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPseudoRoom

`func (o *StayDailyRatesType) SetPseudoRoom(v bool)`

SetPseudoRoom sets PseudoRoom field to given value.

### HasPseudoRoom

`func (o *StayDailyRatesType) HasPseudoRoom() bool`

HasPseudoRoom returns a boolean if a field has been set.

### GetMarketCode

`func (o *StayDailyRatesType) GetMarketCode() string`

GetMarketCode returns the MarketCode field if non-nil, zero value otherwise.

### GetMarketCodeOk

`func (o *StayDailyRatesType) GetMarketCodeOk() (*string, bool)`

GetMarketCodeOk returns a tuple with the MarketCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketCode

`func (o *StayDailyRatesType) SetMarketCode(v string)`

SetMarketCode sets MarketCode field to given value.

### HasMarketCode

`func (o *StayDailyRatesType) HasMarketCode() bool`

HasMarketCode returns a boolean if a field has been set.

### GetRateCode

`func (o *StayDailyRatesType) GetRateCode() string`

GetRateCode returns the RateCode field if non-nil, zero value otherwise.

### GetRateCodeOk

`func (o *StayDailyRatesType) GetRateCodeOk() (*string, bool)`

GetRateCodeOk returns a tuple with the RateCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateCode

`func (o *StayDailyRatesType) SetRateCode(v string)`

SetRateCode sets RateCode field to given value.


### GetRateAmount

`func (o *StayDailyRatesType) GetRateAmount() float32`

GetRateAmount returns the RateAmount field if non-nil, zero value otherwise.

### GetRateAmountOk

`func (o *StayDailyRatesType) GetRateAmountOk() (*float32, bool)`

GetRateAmountOk returns a tuple with the RateAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateAmount

`func (o *StayDailyRatesType) SetRateAmount(v float32)`

SetRateAmount sets RateAmount field to given value.

### HasRateAmount

`func (o *StayDailyRatesType) HasRateAmount() bool`

HasRateAmount returns a boolean if a field has been set.

### GetRoomNumber

`func (o *StayDailyRatesType) GetRoomNumber() string`

GetRoomNumber returns the RoomNumber field if non-nil, zero value otherwise.

### GetRoomNumberOk

`func (o *StayDailyRatesType) GetRoomNumberOk() (*string, bool)`

GetRoomNumberOk returns a tuple with the RoomNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomNumber

`func (o *StayDailyRatesType) SetRoomNumber(v string)`

SetRoomNumber sets RoomNumber field to given value.

### HasRoomNumber

`func (o *StayDailyRatesType) HasRoomNumber() bool`

HasRoomNumber returns a boolean if a field has been set.

### GetRoomType

`func (o *StayDailyRatesType) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *StayDailyRatesType) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *StayDailyRatesType) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *StayDailyRatesType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


